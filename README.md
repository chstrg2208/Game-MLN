# ⚔️ ĐẤU TRƯỜNG TRIẾT HỌC KỶ NGUYÊN AI (Game MLN)

> **Dự án Thuyết trình Mác - Lênin (Chương 3: CNDVLS & Kỷ nguyên AI / LLM)**  
> **FPT University**

Game đối kháng Boss & Trắc nghiệm triết học kết hợp hệ thống **Phòng chờ thời gian thực (Real-time Lobby)** và **Đua Top Bảng xếp hạng trực tiếp trên máy chiếu**.

---

## 🌟 Tính Năng Nổi Bật

1. **4 Màn Boss AI Độc Bản & 18 Câu Hỏi Trắc Nghiệm Triết**:
   - Boss 1: Cối xay Thuật toán (Thuộc tính: Máy móc & LLSX)
   - Boss 2: Nhà máy Thặng dư Tương đối (Quy luật Giá trị thặng dư)
   - Boss 3: Vực thẳm Hấp thụ Junior (Absorption Mechanism & Senior + AI)
   - Boss 4: Lõi Trí tuệ Tối hậu (Biện chứng LLSX & QHSX mới)
   - Mỗi lần diệt Boss sẽ mở vòng trắc nghiệm 4-5 câu hỏi triết học: trả lời đúng giúp hồi máu HP và tăng sát thương súng Laser.

2. **Hệ Thống Phòng Chờ Đồng Bộ (Real-time Lobby)**:
   - Thí sinh dùng camera điện thoại quét mã QR chiếu trên màn hình lớn.
   - Nhập Họ Tên / MSSV (bắt buộc) để bước vào phòng chờ.
   - Tên và số lượng thí sinh tham gia hiển thị trực tiếp theo thời gian thực trên màn hình máy chiếu.
   - Chỉ khi Người Chủ Trì (Host) bấm nút **`🚀 PHÁT LỆNH BẮT ĐẦU CHO CẢ LỚP!`**, toàn bộ điện thoại mới đếm ngược 3-2-1 và đồng loạt xuất trận!

3. **Cơ Chế 1 Mạng Duy Nhất & Tự Động Nộp Điểm Về Admin**:
   - Mỗi người chơi thi đấu 1 lượt duy nhất (Sudden Death) để đảm bảo tính công bằng.
   - Khi GameOver hoặc Phá đảo, điểm số tự động gửi qua API về máy chủ Admin.
   - Bảng xếp hạng **TOP 5** cập nhật tự động trên máy chiếu.

4. **Tối Ưu Hóa Giao Diện Điện Thoại**:
   - Cụm phím ảo cảm ứng: Di chuyển, Nhảy 2 bước (Mario-style), Lướt né đạn siêu tốc (Dash), Bắn súng Laser liên thanh, Đại pháo hủy diệt (3⭐).
   - Rung phản hồi xúc giác (Haptic Vibration) khi bấm phím.
   - Chống phóng to nhầm khi bấm nhanh trên Safari/Chrome.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Game

### Yêu cầu:
- [Node.js](https://nodejs.org/) (phiên bản 16 trở lên).

### Các bước chạy:

1. **Cài đặt thư viện phụ trợ (nếu cần tạo slide PowerPoint)**:
   ```bash
   npm install
   ```

2. **Khởi chạy Game Server**:
   ```bash
   node server.js
   ```
   Server sẽ lắng nghe trên cổng `5000` (`http://0.0.0.0:5000`).

3. **Mở giao diện trên máy tính thuyết trình (Máy chiếu)**:
   - Truy cập: `http://localhost:5000/game.html`
   - Bấm nút **📱 Quét QR** trên thanh điều hướng để phóng to mã QR lên máy chiếu cho cả lớp quét.

4. **Cho cả lớp tham gia bằng điện thoại**:
   - Đảm bảo điện thoại kết nối cùng mạng Wi-Fi với máy tính thuyết trình.
   - Mở camera điện thoại quét mã QR.
   - Nhập Họ Tên / MSSV và đợi Người Chủ Trì bấm nút bắt đầu!

---

## 📁 Cấu Trúc Thư Mục

- `game.html`: Giao diện chính của trò chơi (HTML5 Canvas + Mobile Touch Controls + Real-time UI).
- `server.js`: HTTP API Server cung cấp các endpoint mạng, phòng chờ (Lobby), bảng xếp hạng (Leaderboard) và phục vụ tĩnh.
- `qrcode.min.js`: Thư viện tạo mã QR offline (không cần kết nối internet bên ngoài).
- `leaderboard.json`: Tệp lưu trữ điểm số Top 5 thi đấu.
- `index.html`: Tài liệu tổng quan nội dung thuyết trình.
- `KICH_BAN_THUYET_TRINH_VA_PHAN_BIEN.md`: Kịch bản thuyết trình và bộ câu hỏi phản biện bảo vệ môn học.
- `Bai_Thuyet_Trinh_MLN_AI_KTPM.pptx`: File trình chiếu PowerPoint bài thuyết trình.
