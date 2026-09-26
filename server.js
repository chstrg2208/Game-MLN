const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 5000;
const LEADERBOARD_FILE = path.join(__dirname, 'leaderboard.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
};

// Seed default leaderboard if not exists
const DEFAULT_LEADERBOARD = [
  { id: 1, name: "Nguyễn Hoàng (SE17)", score: 2850, quizCorrect: 18, level: 4, stars: 6, date: "10:15" },
  { id: 2, name: "Trần Minh Quân", score: 2240, quizCorrect: 15, level: 4, stars: 5, date: "10:20" },
  { id: 3, name: "Lê Bảo Ngọc", score: 1780, quizCorrect: 13, level: 3, stars: 4, date: "10:24" },
  { id: 4, name: "Phạm Gia Huy", score: 1350, quizCorrect: 11, level: 2, stars: 3, date: "10:30" },
  { id: 5, name: "Vũ Đăng Khoa", score: 980, quizCorrect: 9, level: 2, stars: 2, date: "10:35" }
];

function getLeaderboard() {
  try {
    if (!fs.existsSync(LEADERBOARD_FILE)) {
      fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(DEFAULT_LEADERBOARD, null, 2), 'utf8');
      return DEFAULT_LEADERBOARD;
    }
    const data = fs.readFileSync(LEADERBOARD_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_LEADERBOARD;
  }
}

function saveLeaderboard(list) {
  try {
    fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (e) {
    console.error('Lỗi lưu leaderboard:', e.message);
  }
}

function getNetworkIps() {
  const nets = os.networkInterfaces();
  const results = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        results.push({ name, ip: net.address });
      }
    }
  }
  // Ưu tiên Wi-Fi và mạng LAN thật (192.168.x.x / 10.x.x.x), loại trừ card ảo Hyper-V / VPN
  function score(entry) {
    let s = 0;
    const lower = entry.name.toLowerCase();
    if (/wi-?fi|wlan|wireless/i.test(lower)) s += 100;
    if (/ethernet/i.test(lower) && !/vethernet/i.test(lower)) s += 80;
    if (/^192\.168\./.test(entry.ip)) s += 50;
    if (/^10\./.test(entry.ip)) s += 30;
    if (/vethernet|virtual|radmin|hamachi|vmware|vbox|switch/i.test(lower)) s -= 100;
    return s;
  }
  results.sort((a, b) => score(b) - score(a));
  return results;
}

// ── LOBBY / WAITING ROOM STATE ──
let lobbyState = {
  status: 'waiting', // 'waiting' | 'started'
  startTime: null,
  players: [] // [{ id, name, joinedAt, lastPing }]
};

function cleanLobbyPlayers() {
  const now = Date.now();
  lobbyState.players = lobbyState.players.filter(p => (now - p.lastPing) < 70000);
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // ── API: Trạng thái Phòng Chờ (Lobby Status) ──
  if (pathname === '/api/lobby/status' && req.method === 'GET') {
    const playerId = parsedUrl.searchParams.get('playerId');
    if (playerId) {
      const p = lobbyState.players.find(x => x.id === playerId);
      if (p) p.lastPing = Date.now();
    }
    cleanLobbyPlayers();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({
      status: lobbyState.status,
      playerCount: lobbyState.players.length,
      players: lobbyState.players.map(p => ({ id: p.id, name: p.name })),
      startTime: lobbyState.startTime
    }));
    return;
  }

  // ── API: Thí sinh tham gia phòng chờ (Join Lobby) ──
  if (pathname === '/api/lobby/join' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const item = JSON.parse(body || '{}');
        const name = (item.name || '').toString().trim().slice(0, 26);
        if (!name || name.length < 2) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: false, error: 'Tên không hợp lệ' }));
          return;
        }

        cleanLobbyPlayers();
        let existing = lobbyState.players.find(p => p.name.toLowerCase() === name.toLowerCase());
        let playerId;
        if (existing) {
          existing.lastPing = Date.now();
          playerId = existing.id;
        } else {
          playerId = 'p_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
          lobbyState.players.push({
            id: playerId,
            name,
            joinedAt: Date.now(),
            lastPing: Date.now()
          });
        }

        res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({
          success: true,
          playerId,
          name,
          lobbyStatus: lobbyState.status,
          playerCount: lobbyState.players.length,
          players: lobbyState.players.map(p => ({ id: p.id, name: p.name }))
        }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ success: false, error: 'Lỗi xử lý dữ liệu' }));
      }
    });
    return;
  }

  // ── API: Chủ trì bấm BẮT ĐẦU TRẬN ĐẤU (Start Tournament) ──
  if (pathname === '/api/lobby/start' && req.method === 'POST') {
    lobbyState.status = 'started';
    lobbyState.startTime = Date.now();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({
      success: true,
      status: 'started',
      startTime: lobbyState.startTime,
      playerCount: lobbyState.players.length
    }));
    return;
  }

  // ── API: Mở lại phòng chờ mới (Reset Lobby) ──
  if (pathname === '/api/lobby/reset' && req.method === 'POST') {
    lobbyState.status = 'waiting';
    lobbyState.startTime = null;
    lobbyState.players = [];
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: true, status: 'waiting', message: 'Đã mở lại phòng chờ mới' }));
    return;
  }

  // ── API: Lấy thông tin mạng (IP) để tạo mã QR ──
  if (pathname === '/api/network' && req.method === 'GET') {
    const host = req.headers.host || `localhost:${PORT}`;
    const proto = req.headers['x-forwarded-proto'] || 'http';
    const isPublicHost = !host.startsWith('localhost') && !host.startsWith('127.0.0.1') && !host.startsWith('192.168.') && !host.startsWith('10.');

    const ips = getNetworkIps();
    const primaryIp = ips.length > 0 ? ips[0].ip : '127.0.0.1';
    
    // Nếu deploy lên cloud (Render, Railway, domain thật), QR sẽ lấy domain public này!
    const primaryUrl = isPublicHost 
      ? `${proto}://${host}/game.html?mode=player`
      : `http://${primaryIp}:${PORT}/game.html?mode=player`;

    const localUrl = `http://localhost:${PORT}/game.html`;
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ ips, primaryIp, primaryUrl, localUrl, port: PORT, isPublicHost, host }));
    return;
  }

  // ── API: Lấy Top 5 Bảng Xếp Hạng ──
  if (pathname === '/api/leaderboard' && req.method === 'GET') {
    const all = getLeaderboard();
    all.sort((a, b) => (b.score - a.score) || (b.quizCorrect - a.quizCorrect));
    const top5 = all.slice(0, 5);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify(top5));
    return;
  }

  // ── API: Nộp điểm xếp hạng mới ──
  if (pathname === '/api/leaderboard' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const item = JSON.parse(body || '{}');
        const name = (item.name || 'Chiến binh ẩn danh').toString().trim().slice(0, 26);
        const score = Math.max(0, parseInt(item.score, 10) || 0);
        const quizCorrect = Math.max(0, parseInt(item.quizCorrect, 10) || 0);
        const level = Math.max(1, parseInt(item.level, 10) || 1);
        const stars = Math.max(0, parseInt(item.stars, 10) || 0);

        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        const entry = {
          id: Date.now(),
          name,
          score,
          quizCorrect,
          level,
          stars,
          date: timeStr
        };

        const all = getLeaderboard();
        all.push(entry);
        all.sort((a, b) => (b.score - a.score) || (b.quizCorrect - a.quizCorrect));
        const kept = all.slice(0, 25); // Lưu tối đa 25 lượt điểm cao nhất
        saveLeaderboard(kept);

        const top5 = kept.slice(0, 5);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ success: true, entry, top5 }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ success: false, error: 'Dữ liệu không hợp lệ' }));
      }
    });
    return;
  }

  // ── API: Reset Bảng Xếp Hạng ──
  if (pathname === '/api/leaderboard/reset' && req.method === 'POST') {
    saveLeaderboard([]);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: true, message: 'Đã xóa bảng xếp hạng' }));
    return;
  }

  // ── Static Files Serving ──
  let cleanPath = pathname === '/' ? 'game.html' : pathname.replace(/^\/+/, '');
  let filePath = path.join(__dirname, decodeURIComponent(cleanPath));

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Không tìm thấy file');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

// Lắng nghe trên 0.0.0.0 để mọi máy tính & điện thoại trong cùng mạng Wi-Fi có thể kết nối
server.listen(PORT, '0.0.0.0', () => {
  const ips = getNetworkIps();
  console.log('========================================================');
  console.log(`🚀 GAME SERVER ĐÃ SẴN SÀNG CHO BUỔI THUYẾT TRÌNH!`);
  console.log(`💻 Chơi trực tiếp trên máy chủ: http://localhost:${PORT}/game.html`);
  if (ips.length > 0) {
    console.log(`📱 Link quét mã QR cho điện thoại cả lớp cùng chơi:`);
    ips.forEach(net => {
      console.log(`   👉 [${net.name}]: http://${net.ip}:${PORT}/game.html`);
    });
  }
  console.log('========================================================');
});
