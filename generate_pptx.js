const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9'; // 13.333 x 7.5 inches
pres.author = 'FPT University Student Team - MLN';
pres.company = 'FPT University';
pres.title = 'Biện chứng giữa Lực lượng Sản xuất & Quan hệ Sản xuất trong Kỷ nguyên AI';

// Color Palette
const COLORS = {
  bgDark: '0A1128',       // Deep midnight navy
  cardBg: '152238',       // Dark blue-gray card
  cardBgLight: '1E293B',  // Slate card
  cardBorder: '2A3F65',   // Subtle border
  textLight: 'F8FAFC',    // Near white
  textMuted: '94A3B8',    // Slate gray
  accentCyan: '38BDF8',   // Sky tech cyan
  accentOrange: 'F97316', // FPT Warm Orange
  accentGold: 'FBBF24',   // Gold
  accentGreen: '34D399',  // Emerald
  accentRed: 'F87171',    // Coral red
  accentPurple: 'A78BFA', // Violet
  borderGold: 'D97706'
};

// Helper to add standard slide background, header and footer
function addSlideHeaderFooter(slide, slideNum, title, category, sourceText) {
  // Slide Background
  slide.background = { color: COLORS.bgDark };

  // Decorative top accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 13.333, h: 0.08,
    fill: { color: COLORS.accentOrange },
    line: { color: COLORS.accentOrange }
  });

  // Category Badge
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.35, w: 5.5, h: 0.32,
    fill: { color: '1E293B' },
    line: { color: COLORS.accentCyan, width: 1 },
    rectRadius: 0.08
  });
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.35, w: 5.5, h: 0.32,
    fontSize: 9, bold: true, color: COLORS.accentCyan,
    align: 'center', valign: 'middle', fontFace: 'Calibri'
  });

  // Slide Title
  slide.addText(title, {
    x: 0.8, y: 0.75, w: 11.733, h: 0.75,
    fontSize: 22, bold: true, color: COLORS.textLight,
    valign: 'middle', fontFace: 'Segoe UI'
  });

  // Footer Line
  slide.addShape(pres.ShapeType.line, {
    x: 0.8, y: 6.85, w: 11.733, h: 0,
    line: { color: '1E293B', width: 1 }
  });

  // Footer Content
  slide.addText(`Nguồn trích dẫn: ${sourceText}`, {
    x: 0.8, y: 6.92, w: 9.5, h: 0.35,
    fontSize: 8, color: COLORS.textMuted,
    valign: 'middle', fontFace: 'Calibri', italic: true
  });

  slide.addText(`FPT UNIVERSITY | MLN - KỲ 8  •  Trang ${slideNum}/12`, {
    x: 10.3, y: 6.92, w: 2.233, h: 0.35,
    fontSize: 8.5, color: COLORS.accentOrange,
    align: 'right', valign: 'middle', fontFace: 'Calibri', bold: true
  });
}

// -------------------------------------------------------------
// SLIDE 1: Mở đầu & Cơ sở lý luận Mác - Lênin
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bgDark };

  // Decorative Top Bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 13.333, h: 0.12,
    fill: { color: COLORS.accentOrange }
  });

  // Top Tag
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.6, w: 6.2, h: 0.38,
    fill: { color: '1E293B' },
    line: { color: COLORS.accentCyan, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('TRIẾT HỌC MÁC - LÊNIN • CHƯƠNG 3: CHỦ NGHĨA DUY VẬT LỊCH SỬ', {
    x: 0.8, y: 0.6, w: 6.2, h: 0.38,
    fontSize: 9.5, bold: true, color: COLORS.accentCyan,
    align: 'center', valign: 'middle', fontFace: 'Calibri'
  });

  // Main Title
  slide.addText('Biện chứng giữa Lực lượng Sản xuất & Quan hệ Sản xuất trong Kỷ nguyên Trí tuệ Nhân tạo', {
    x: 0.8, y: 1.15, w: 11.733, h: 1.25,
    fontSize: 27, bold: true, color: COLORS.textLight,
    fontFace: 'Segoe UI'
  });

  // Subtitle
  slide.addText('Thực tiễn ngành Kỹ thuật Phần mềm và Chiến lược thích ứng nghề nghiệp của người học', {
    x: 0.8, y: 2.45, w: 11.733, h: 0.5,
    fontSize: 14, color: COLORS.accentOrange, bold: true,
    fontFace: 'Calibri'
  });

  // 4 Core Foundations (Horizontal Cards)
  const cards = [
    {
      num: '01',
      title: 'Sản xuất Vật chất',
      desc: 'Tiền đề xuất phát điểm khách quan của mọi lịch sử và sự vận động xã hội loài người.',
      accent: COLORS.accentCyan
    },
    {
      num: '02',
      title: 'Lực lượng Sản xuất (LLSX)',
      desc: 'Thước đo năng lực thực tiễn cải biến giới tự nhiên của con người qua công cụ lao động.',
      accent: COLORS.accentOrange
    },
    {
      num: '03',
      title: 'Quan hệ Sản xuất (QHSX)',
      desc: 'Quan hệ kinh tế - vật chất khách quan giữa người với người trong quá trình sản xuất.',
      accent: COLORS.accentPurple
    },
    {
      num: '04',
      title: 'Quy luật Phù hợp',
      desc: 'QHSX tất yếu phải phù hợp với trình độ phát triển của LLSX để thúc đẩy xã hội.',
      accent: COLORS.accentGreen
    }
  ];

  const cardW = 2.75;
  const cardGap = 0.24;
  const startX = 0.8;
  const cardY = 3.25;
  const cardH = 2.9;

  cards.forEach((c, idx) => {
    const cx = startX + idx * (cardW + cardGap);
    slide.addShape(pres.ShapeType.roundRect, {
      x: cx, y: cardY, w: cardW, h: cardH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.12
    });

    slide.addShape(pres.ShapeType.rect, {
      x: cx, y: cardY, w: cardW, h: 0.08,
      fill: { color: c.accent }
    });

    slide.addText(c.num, {
      x: cx + 0.2, y: cardY + 0.2, w: 1.5, h: 0.4,
      fontSize: 18, bold: true, color: c.accent, fontFace: 'Segoe UI'
    });

    slide.addText(c.title, {
      x: cx + 0.2, y: cardY + 0.65, w: cardW - 0.4, h: 0.65,
      fontSize: 13, bold: true, color: COLORS.textLight, fontFace: 'Segoe UI'
    });

    slide.addText(c.desc, {
      x: cx + 0.2, y: cardY + 1.35, w: cardW - 0.4, h: 1.35,
      fontSize: 11, color: COLORS.textMuted, fontFace: 'Calibri'
    });
  });

  // Footer
  slide.addShape(pres.ShapeType.line, {
    x: 0.8, y: 6.85, w: 11.733, h: 0,
    line: { color: '1E293B', width: 1 }
  });
  slide.addText('Nguồn: Giáo trình Triết học Mác - Lênin (Bộ GD&ĐT, 2021), Chương 3, Tr. 287–305 | marxists.org', {
    x: 0.8, y: 6.92, w: 9.5, h: 0.35,
    fontSize: 8, color: COLORS.textMuted, italic: true
  });
  slide.addText('FPT UNIVERSITY | MLN - KỲ 8  •  Trang 1/12', {
    x: 10.3, y: 6.92, w: 2.233, h: 0.35,
    fontSize: 8.5, color: COLORS.accentOrange, align: 'right', bold: true
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 1]
"Kính thưa quý Thầy Cô và các bạn sinh viên, hiện nay làn sóng trí tuệ nhân tạo và các mô hình ngôn ngữ lớn đang làm dấy lên một nỗi hoang mang sâu sắc trong cộng đồng sinh viên, đặc biệt là nỗi lo sợ bị thay thế hoặc mất cơ hội việc làm sau khi ra trường. Tuy nhiên, nếu chúng ta tiếp cận hiện tượng này dưới lăng kính khoa học của Chủ nghĩa duy vật lịch sử trong triết học Mác - Lênin, ta sẽ nhận ra đây không phải là một tai họa ngẫu nhiên hay bất thường.

Đó chính là sự phản ánh sinh động của quy luật khách quan phổ biến nhất chi phối sự phát triển của xã hội loài người: Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.

Hôm nay, nhóm chúng em xin được phân tích trường hợp điển hình của ngành Kỹ thuật Phần mềm để làm sáng tỏ tính quy luật này, đồng thời xác lập chiến lược thích ứng nghề nghiệp vững chắc cho sinh viên trước sự tái cấu trúc của thời đại số."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Giữ phong thái tự tin, ánh mắt bao quát cả phòng hội trường.
- Nhấn mạnh vào 2 cụm từ cốt lõi: "quy luật khách quan" và "chiến lược thích ứng".
- Thời gian mục tiêu: ~1 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 2: Cấu trúc Nội tại của LLSX & QHSX
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 2,
    'Cấu trúc Nội tại của Lực lượng Sản xuất & Quan hệ Sản xuất',
    'Cơ sở lý luận nền tảng • Chủ nghĩa duy vật lịch sử',
    'Karl Marx, Sự khốn cùng của triết học (1847, Ch. 2); Weekly Worker Research'
  );

  // 2 Major Columns
  const colW = 5.75;
  const colY = 1.65;
  const colH = 4.95;

  // Left Column: LLSX
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: colY, w: colW, h: colH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentCyan, width: 1.5 },
    rectRadius: 0.12
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.0, y: colY + 0.2, w: colW - 0.4, h: 0.5,
    fill: { color: '0E3A5A' },
    line: { color: COLORS.accentCyan, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('LỰC LƯỢNG SẢN XUẤT (LLSX) — Mối quan hệ Con người & Tự nhiên', {
    x: 1.0, y: colY + 0.2, w: colW - 0.4, h: 0.5,
    fontSize: 11.5, bold: true, color: COLORS.accentCyan, align: 'center', valign: 'middle'
  });

  // LLSX Elements
  // Box 1: Người lao động
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.0, y: colY + 0.85, w: colW - 0.4, h: 1.6,
    fill: { color: '182845' },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('1. Người lao động (Chủ thể giữ vai trò quyết định)', {
    x: 1.15, y: colY + 0.95, w: colW - 0.7, h: 0.35,
    fontSize: 12, bold: true, color: COLORS.accentGold
  });
  slide.addText('• Năng lực thể lực, trí lực, kinh nghiệm tích lũy và kỹ năng sáng tạo.\n• Chủ thể trực tiếp vận hành công cụ, biến tiềm năng tư liệu thành của cải thực tế.\n• Trình độ người lao động quyết định giới hạn tối đa của năng suất.', {
    x: 1.15, y: colY + 1.35, w: colW - 0.7, h: 1.0,
    fontSize: 10.5, color: COLORS.textMuted
  });

  // Box 2: Tư liệu sản xuất
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.0, y: colY + 2.6, w: colW - 0.4, h: 2.15,
    fill: { color: '182845' },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('2. Tư liệu sản xuất (TLSX)', {
    x: 1.15, y: colY + 2.7, w: colW - 0.7, h: 0.35,
    fontSize: 12, bold: true, color: COLORS.accentCyan
  });
  slide.addText('• Đối tượng lao động: Tài nguyên tự nhiên hoặc đã qua chế biến (dữ liệu số, mã nguồn thô).\n• Tư liệu lao động: Hệ thống dẫn truyền tác động vào đối tượng.\n• CÔNG CỤ LAO ĐỘNG (Yếu tố động nhất & cách mạng nhất):\n   - Khí quan nối dài trực tiếp năng lực thể chất và trí tuệ con người.\n   - Tiêu chuẩn phân biệt các thời đại kinh tế lịch sử khác nhau.', {
    x: 1.15, y: colY + 3.1, w: colW - 0.7, h: 1.55,
    fontSize: 10.5, color: COLORS.textMuted
  });

  // Right Column: QHSX
  const rx = 0.8 + colW + 0.233;
  slide.addShape(pres.ShapeType.roundRect, {
    x: rx, y: colY, w: colW, h: colH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentOrange, width: 1.5 },
    rectRadius: 0.12
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: rx + 0.2, y: colY + 0.2, w: colW - 0.4, h: 0.5,
    fill: { color: '3D2214' },
    line: { color: COLORS.accentOrange, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('QUAN HỆ SẢN XUẤT (QHSX) — Mối quan hệ Kinh tế giữa Người với Người', {
    x: rx + 0.2, y: colY + 0.2, w: colW - 0.4, h: 0.5,
    fontSize: 11.5, bold: true, color: COLORS.accentOrange, align: 'center', valign: 'middle'
  });

  // QHSX 3 Aspects
  const qhsxItems = [
    {
      title: '1. Quan hệ Sở hữu đối với TLSX (Hạt nhân chi phối)',
      desc: '• Quyết định địa vị kinh tế của các giai cấp trong xã hội.\n• Chi phối tuyệt đối hai quan hệ còn lại: Ai nắm TLSX, người đó nắm quyền điều hành và phân chia của cải.',
      color: COLORS.accentOrange,
      y: colY + 0.85,
      h: 1.15
    },
    {
      title: '2. Quan hệ Tổ chức và Quản lý sản xuất',
      desc: '• Phân công lao động xã hội, tổ chức dây chuyền sản xuất.\n• Xác lập vị trí công việc, phân cấp chỉ huy, trực tiếp tác động tới năng suất và nhịp độ làm việc hàng ngày.',
      color: COLORS.accentCyan,
      y: colY + 2.15,
      h: 1.15
    },
    {
      title: '3. Quan hệ Phân phối sản phẩm lao động',
      desc: '• Quy định phương thức và tỷ lệ thụ hưởng của cải xã hội tạo ra.\n• Thể hiện dưới dạng tiền lương, giá trị thặng dư, lợi nhuận tư bản; là nguồn gốc trực tiếp của động lực hay mâu thuẫn giai cấp.',
      color: COLORS.accentGreen,
      y: colY + 3.45,
      h: 1.3
    }
  ];

  qhsxItems.forEach(item => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: rx + 0.2, y: item.y, w: colW - 0.4, h: item.h,
      fill: { color: '182845' },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(item.title, {
      x: rx + 0.35, y: item.y + 0.08, w: colW - 0.7, h: 0.32,
      fontSize: 11.5, bold: true, color: item.color
    });
    slide.addText(item.desc, {
      x: rx + 0.35, y: item.y + 0.42, w: colW - 0.7, h: item.h - 0.5,
      fontSize: 10, color: COLORS.textMuted
    });
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 2]
"Trước hết, chúng ta cùng nhìn lại cấu trúc lý luận nền tảng. Phương thức sản xuất vật chất là sự thống nhất hữu cơ giữa hai mặt: Lực lượng sản xuất và Quan hệ sản xuất.

Lực lượng sản xuất biểu hiện mối quan hệ giữa con người với tự nhiên, bao gồm người lao động và tư liệu sản xuất. Trong đó, Mác khẳng định công cụ lao động chính là yếu tố động nhất, cách mạng nhất, là khí quan nối dài năng lực con người và là tiêu chuẩn phân biệt các thời đại kinh tế. Còn người lao động với trí tuệ và kỹ năng là chủ thể quyết định biến tư liệu sản xuất thành của cải.

Song song với đó là Quan hệ sản xuất – mối quan hệ kinh tế khách quan giữa người với người gồm ba mặt gắn bó keo sơn: quan hệ sở hữu tư liệu sản xuất (mặt giữ vai trò hạt nhân), quan hệ tổ chức quản lý, và quan hệ phân phối sản phẩm.

Sự vận động của lịch sử bắt đầu từ việc công cụ lao động biến đổi, dẫn tới LLSX đi trước một bước và đòi hỏi QHSX phải biến đổi theo."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Dùng tay chỉ rõ sự tương phản giữa 2 cột: Cột trái (LLSX - Con người vs Tự nhiên) và Cột phải (QHSX - Con người vs Con người).
- Nhấn giọng khi nói cụm từ "Công cụ lao động là yếu tố động nhất, cách mạng nhất".
- Thời gian mục tiêu: ~1 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 3: Luận đề Kinh điển: Từ Cối xay Hơi nước đến AI
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 3,
    'Luận đề Kinh điển: Từ Cối xay Hơi nước đến Trí tuệ Nhân tạo',
    'Soi chiếu lịch sử • Sự khốn cùng của triết học (1847)',
    'Karl Marx, Sự khốn cùng của triết học (1847); Weekly Worker Research (2021)'
  );

  // Big Classic Quote Banner
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.6, w: 11.733, h: 1.25,
    fill: { color: '182845' },
    line: { color: COLORS.accentGold, width: 2 },
    rectRadius: 0.12
  });
  slide.addText('LUẬN ĐỀ BẤT HỦ CỦA KARL MARX (1847):', {
    x: 1.1, y: 1.7, w: 11.1, h: 0.3,
    fontSize: 10, bold: true, color: COLORS.accentGold
  });
  slide.addText('"Cái cối xay quay bằng tay đưa lại xã hội có lãnh chúa; cái cối xay chạy bằng hơi nước đưa lại xã hội có nhà tư bản công nghiệp."', {
    x: 1.1, y: 2.05, w: 11.1, h: 0.7,
    fontSize: 15, bold: true, italic: true, color: COLORS.textLight, fontFace: 'Georgia'
  });

  // Comparative Two Cards
  const cW = 5.75;
  const cY = 3.05;
  const cH = 2.65;

  // Left: Industrial Rev 1
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentCyan, width: 1.2 },
    rectRadius: 0.12
  });
  slide.addText('CÁCH MẠNG CÔNG NGHIỆP LẦN 1 (Thế kỷ 18)', {
    x: 1.05, y: cY + 0.15, w: cW - 0.5, h: 0.35,
    fontSize: 12, bold: true, color: COLORS.accentCyan
  });
  slide.addText(
`• Đột phá công cụ: Máy hơi nước của James Watt & Động cơ nhiệt.
• Cơ chế tác động: Cơ giới hóa sức mạnh cơ bắp của con người; thay thế sức kéo súc vật và lao động chân tay thô sơ.
• Biến đổi Quan hệ sản xuất:
   - Triệt tiêu hoàn toàn quan hệ phong kiến tiểu nông phân tán.
   - Xác lập Quan hệ sản xuất Tư bản Chủ nghĩa: Nhà máy tập trung, khai sinh Giai cấp Công nhân Công nghiệp và Nhà Tư bản.`,
    {
      x: 1.05, y: cY + 0.55, w: cW - 0.5, h: cH - 0.7,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Right: Industrial Rev 4 (AI)
  const rrx = 0.8 + cW + 0.233;
  slide.addShape(pres.ShapeType.roundRect, {
    x: rrx, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentOrange, width: 1.2 },
    rectRadius: 0.12
  });
  slide.addText('CÁCH MẠNG CÔNG NGHIỆP LẦN 4 — KỶ NGUYÊN AI (Thế kỷ 21)', {
    x: rrx + 0.25, y: cY + 0.15, w: cW - 0.5, h: 0.35,
    fontSize: 12, bold: true, color: COLORS.accentOrange
  });
  slide.addText(
`• Đột phá công cụ: Mô hình ngôn ngữ lớn (LLM), AI Agents & Siêu cụm GPU.
• Cơ chế tác động: Trí tuệ hóa các thao tác tư duy logic trừu tượng, tự động hóa viết mã nguồn và phân tích kỹ thuật.
• Biến đổi Quan hệ sản xuất:
   - "Cối xay thuật toán AI" phá vỡ cấu trúc văn phòng và kim tự tháp nhân sự.
   - Khai sinh phương thức tổ chức lao động trí tuệ số: Lao động tinh gọn, phân cực thu nhập và độc quyền hạ tầng công nghệ cao.`,
    {
      x: rrx + 0.25, y: cY + 0.55, w: cW - 0.5, h: cH - 0.7,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Bottom Takeaway Banner
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.85, w: 11.733, h: 0.85,
    fill: { color: '132644' },
    line: { color: COLORS.accentGreen, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('QUY LUẬT TẤT YẾU: Phương thức người lao động kết hợp với TLSX biến đổi → Toàn bộ cấu trúc xã hội phải thay đổi theo. AI không phải là "tiện ích bổ trợ" mà là bước nhảy vọt về chất của công cụ lao động!', {
    x: 1.0, y: 5.85, w: 11.333, h: 0.85,
    fontSize: 11, bold: true, color: COLORS.accentGreen, valign: 'middle', align: 'center'
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 3]
"Trong tác phẩm 'Sự khốn cùng của triết học' viết năm 1847, Karl Marx đã đúc kết một luận đề bất hủ:
'Cái cối xay quay bằng tay đưa lại xã hội có lãnh chúa; cái cối xay chạy bằng hơi nước đưa lại xã hội có nhà tư bản công nghiệp'.

Luận đề này khẳng định một chân lý: Mỗi khi có một công cụ lao động mới ra đời tạo nên bước nhảy vọt về chất, phương thức sản xuất của xã hội sẽ hoàn toàn đảo lộn.

Nếu như thế kỷ 18, máy hơi nước ra đời đã cơ giới hóa sức mạnh cơ bắp của con người, thì ngày nay, Trí tuệ nhân tạo và các mô hình ngôn ngữ lớn đã tiến vào địa hạt tinh hoa nhất: trí tuệ hóa các thao tác tư duy logic trừu tượng.

Cái cối xay hơi nước đã khai sinh ra giai cấp công nhân công nghiệp, vậy thì 'cối xay thuật toán AI' ngày nay đang khai sinh ra một phương thức tổ chức lao động trí tuệ hoàn toàn mới."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Đọc câu trích dẫn của Mác thật chậm rãi, rõ ràng từng chữ để gây ấn tượng học thuật mạnh mẽ.
- Kết nối trực tiếp "cối xay hơi nước" với "cối xay thuật toán AI".
- Thời gian mục tiêu: ~1 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 4: Máy móc & Quy luật Sản xuất Giá trị Thặng dư Tương đối
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 4,
    'Máy móc & Quy luật Sản xuất Giá trị Thặng dư Tương đối',
    'Góc nhìn Kinh tế chính trị học Mác - Lênin • Tư bản (Tập 1, Chương 15)',
    'Karl Marx, Tư bản (Tập 1, Chương 15); Fragment on Machines; Colibryx (2024)'
  );

  // 3 Deep Dive Cards
  const cW = 3.75;
  const cGap = 0.24;
  const sX = 0.8;
  const cY = 1.65;
  const cH = 4.95;

  // Card 1
  slide.addShape(pres.ShapeType.roundRect, {
    x: sX, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.rect, {
    x: sX, y: cY, w: cW, h: 0.08,
    fill: { color: COLORS.accentOrange }
  });
  slide.addText('01. BẢN CHẤT MÁY MÓC DƯỚI CHỦ NGHĨA TƯ BẢN', {
    x: sX + 0.2, y: cY + 0.2, w: cW - 0.4, h: 0.5,
    fontSize: 12, bold: true, color: COLORS.accentOrange
  });
  slide.addText(
`• Mục đích tối hậu của nhà tư bản: Máy móc không đơn thuần sinh ra để giải phóng người lao động khỏi sự mệt nhọc.
• Phương tiện bòn rút Giá trị thặng dư tương đối:
   - Ứng dụng tự động hóa làm tăng đột biến năng suất lao động xã hội.
   - Giảm giá trị tư liệu sinh hoạt → Hạ thấp giá trị sức lao động.
   - Rút ngắn thời gian lao động tất yếu (t) để hoàn vốn tiền lương.
   - Kéo dài tối đa thời gian lao động thặng dư (t') sinh lợi cho chủ sở hữu tư bản.`,
    {
      x: sX + 0.2, y: cY + 0.75, w: cW - 0.4, h: cH - 0.95,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Card 2
  const c2X = sX + cW + cGap;
  slide.addShape(pres.ShapeType.roundRect, {
    x: c2X, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.rect, {
    x: c2X, y: cY, w: cW, h: 0.08,
    fill: { color: COLORS.accentRed }
  });
  slide.addText('02. NGHỊCH LÝ THA HÓA CỦA CÔNG CỤ LAO ĐỘNG', {
    x: c2X + 0.2, y: cY + 0.2, w: cW - 0.4, h: 0.5,
    fontSize: 12, bold: true, color: COLORS.accentRed
  });
  slide.addText(
`• Công cụ biến thành "Kẻ thù cạnh tranh":
   - Sự tinh xảo hóa của máy móc biến công cụ thành đối thủ cạnh tranh trực tiếp với chính người công nhân.
   - Biến kỹ năng tích lũy cá nhân thành thừa thãi khi thuật toán có thể tái tạo tức thì.
• Giảm giá trị sức lao động sống thông thường:
   - Đẩy tầng lớp lao động thực hiện các thao tác tiêu chuẩn (junior) vào tình trạng dư thừa nhân lực cục bộ.
   - Mất quyền thương lượng tiền lương trước sức ép tự động hóa.`,
    {
      x: c2X + 0.2, y: cY + 0.75, w: cW - 0.4, h: cH - 0.95,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Card 3
  const c3X = c2X + cW + cGap;
  slide.addShape(pres.ShapeType.roundRect, {
    x: c3X, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.rect, {
    x: c3X, y: cY, w: cW, h: 0.08,
    fill: { color: COLORS.accentCyan }
  });
  slide.addText('03. ĐỘT BIẾN CẤU TẠO HỮU CƠ CỦA TƯ BẢN (c/v)', {
    x: c3X + 0.2, y: cY + 0.2, w: cW - 0.4, h: 0.5,
    fontSize: 12, bold: true, color: COLORS.accentCyan
  });
  slide.addText(
`• Công thức Marx: Cấu tạo hữu cơ c/v phản ánh tỷ lệ giữa Tư bản bất biến (c) và Tư bản khả biến (v).
• Xu hướng bùng nổ trong kỷ nguyên AI:
   - c (Tư bản bất biến): Tăng vọt — Đầu tư hàng trăm tỷ USD vào cụm siêu máy tính GPU, hạ tầng điện toán đám mây AI.
   - v (Tư bản khả biến): Bị thắt chặt — Cắt giảm nhân sự kỹ thuật thông thường, đóng băng quỹ lương cho vị trí sơ cấp.
• Giải thích làn sóng sa thải hàng loạt của Big Tech dù doanh thu kỷ lục!`,
    {
      x: c3X + 0.2, y: cY + 0.75, w: cW - 0.4, h: cH - 0.95,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 4]
"Bước sang góc độ Kinh tế chính trị học Mác - Lênin, trong Chương 15 của bộ Tư bản Tập 1, Marx đã chỉ rõ: Máy móc dưới chế độ tư bản không đơn thuần được tạo ra để giải phóng người lao động khỏi sự vất vả.

Mục đích tối hậu của nhà tư bản khi áp dụng máy móc là hạ thấp giá trị sức lao động thông qua việc sản xuất giá trị thặng dư tương đối. Bằng cách ứng dụng máy móc tự động, thời gian lao động tất yếu của công nhân để hoàn vốn tiền lương bị rút ngắn lại, mở rộng tối đa thời gian lao động thặng dư sinh lợi cho nhà tư bản.

Đồng thời, Marx cảnh báo một nghịch lý biện chứng: chính sự tinh xảo hóa của máy móc sẽ biến công cụ lao động thành kẻ thù cạnh tranh trực tiếp với người công nhân, đẩy sức lao động phổ thông vào tình thế dư thừa cục bộ.

Đây chính là chiếc chìa khóa lý luận soi rọi hiện tượng các tập đoàn công nghệ cắt giảm nhân sự quy mô lớn để dồn tiền đầu tư vào máy chủ AI ngày nay."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Nhấn mạnh vào công thức cấu tạo hữu cơ (c/v) để chứng minh tính học thuật sâu sắc.
- Liên hệ ngay với hiện tượng Big Tech sa thải hàng vạn nhân sự thời gian qua.
- Thời gian mục tiêu: ~1 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 5: Dữ liệu Thực nghiệm: Bước Nhảy Vọt Năng Suất
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 5,
    'Bước Nhảy Vọt về Năng Suất của Lực Lượng Sản Xuất Số',
    'Thực tiễn ngành Kỹ thuật Phần mềm • Dữ liệu thực nghiệm toàn cầu',
    'McKinsey Global Institute (2023); Stack Overflow Developer Survey (2024); Ceros'
  );

  // 3 Big Stat Cards
  const cardW = 3.75;
  const cardGap = 0.24;
  const startX = 0.8;
  const topY = 1.65;
  const topH = 2.5;

  const stats = [
    {
      num: '+56%',
      label: 'TỐC ĐỘ HOÀN THÀNH TÁC VỤ',
      desc: 'Lập trình viên tích hợp công cụ AI hoàn thành tác vụ kỹ thuật nhanh hơn 56% so với thao tác thủ công.',
      source: 'McKinsey Global Institute',
      color: COLORS.accentCyan
    },
    {
      num: '35% – 45%',
      label: 'GIẢM THỜI GIAN VIẾT CODE',
      desc: 'Cắt giảm 35% - 45% thời gian viết mã mới; Giảm 20% - 30% thời gian tái cấu trúc (refactoring) hệ thống.',
      source: 'McKinsey Digital Research',
      color: COLORS.accentOrange
    },
    {
      num: '76% → 84%',
      label: 'TỶ LỆ KỸ SƯ SỬ DỤNG AI',
      desc: 'Tỷ lệ chuyên gia công nghệ toàn cầu sử dụng hoặc có kế hoạch dùng AI tăng vọt trên hơn 65.000 khảo sát.',
      source: 'Stack Overflow Survey (2024)',
      color: COLORS.accentGreen
    }
  ];

  stats.forEach((st, idx) => {
    const cx = startX + idx * (cardW + cardGap);
    slide.addShape(pres.ShapeType.roundRect, {
      x: cx, y: topY, w: cardW, h: topH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.12
    });

    slide.addText(st.num, {
      x: cx + 0.15, y: topY + 0.15, w: cardW - 0.3, h: 0.8,
      fontSize: 32, bold: true, color: st.color, align: 'center', fontFace: 'Segoe UI'
    });

    slide.addText(st.label, {
      x: cx + 0.15, y: topY + 0.95, w: cardW - 0.3, h: 0.35,
      fontSize: 10, bold: true, color: COLORS.textLight, align: 'center', fontFace: 'Segoe UI'
    });

    slide.addText(st.desc, {
      x: cx + 0.2, y: topY + 1.35, w: cardW - 0.4, h: 0.8,
      fontSize: 10, color: COLORS.textMuted, align: 'center'
    });

    slide.addText(`[${st.source}]`, {
      x: cx + 0.2, y: topY + 2.15, w: cardW - 0.4, h: 0.25,
      fontSize: 8, color: st.color, align: 'center', italic: true
    });
  });

  // Bottom Analytical Panel
  const botY = 4.35;
  const botH = 2.25;
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: botY, w: 11.733, h: botH,
    fill: { color: '132238' },
    line: { color: COLORS.accentCyan, width: 1.2 },
    rectRadius: 0.12
  });

  slide.addText('NHẬN ĐỊNH CỐT LÕI DƯỚI LĂNG KÍNH TRIẾT HỌC MÁC - LÊNIN', {
    x: 1.1, y: botY + 0.2, w: 11.1, h: 0.35,
    fontSize: 12.5, bold: true, color: COLORS.accentCyan
  });

  slide.addText(
`1. Bản chất công cụ lao động thay đổi: IDE soạn thảo mã nguồn không còn là công cụ thụ động chờ người gõ chữ, mà đã trở thành "Hệ thống thông minh đồng hành" có khả năng dự đoán ngữ cảnh, tự sinh thuật toán và tự phát hiện lỗi logic.
2. Bước nhảy vọt về chất của LLSX: Quá trình sản xuất phần mềm đang chuyển đổi từ hình thái "Lao động thủ công tinh xảo" (Craftsmanship) sang hình thái "Bán tự động hóa trí tuệ" (Semi-autonomous Engineering).
3. Hệ quả tất yếu: Khi năng suất của Lực lượng sản xuất tăng vọt 56%, cấu trúc Quan hệ sản xuất cũ chắc chắn sẽ bộc lộ mâu thuẫn và đòi hỏi phải tái lập trạng thái thích ứng mới!`,
    {
      x: 1.1, y: botY + 0.55, w: 11.1, h: 1.55,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 5]
"Để kiểm chứng lý luận Mác - Lênin trong thực tiễn, chúng ta hãy nhìn vào các con số thực nghiệm chấn động của ngành Kỹ thuật Phần mềm.

Báo cáo của McKinsey Global Institute chỉ ra rằng: một lập trình viên khi tích hợp các công cụ AI có thể hoàn thành tác vụ nhanh hơn 56% so với thao tác truyền thống, giúp cắt giảm tới 45% thời gian viết mã ban đầu.

Khảo sát thường niên của Stack Overflow trên hơn 65.000 chuyên gia công nghệ toàn cầu cho thấy tỷ lệ lập trình viên sử dụng AI đã tăng vọt từ 76% năm 2024 lên 84% năm 2025.

Rõ ràng, công cụ lao động không còn là một bộ soạn thảo thụ động chờ người gõ chữ, mà đã trở thành một hệ thống thông minh đồng hành. Sức sản xuất của xã hội trong ngành phần mềm đã thực hiện một bước nhảy vọt chưa từng có tiền lệ."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Nhìn thẳng vào hội đồng khi đọc số liệu: "+56%", "giảm 45% thời gian", "84% kỹ sư".
- Trình bày rành rọt, tốc độ vừa phải để số liệu thực nghiệm thấm vào người nghe.
- Thời gian mục tiêu: ~1 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 6: Sự Biến Đổi Ba Mặt của QHSX
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 6,
    'Sự Biến Đổi của Ba Mặt Quan Hệ Sản Xuất trong Ngành Phần Mềm',
    'Tái cấu trúc Quan hệ Sản xuất • Đối chiếu trước và sau làn sóng AI',
    'Medium/Design Bootcamp; ArXiv Research (2025); Stack Overflow Blog (2025)'
  );

  // 3 Comparison Horizontal Strips / Cards
  const aspects = [
    {
      title: '1. QUAN HỆ SỞ HỮU TƯ LIỆU SẢN XUẤT (Mặt hạt nhân chi phối)',
      before: '• Sở hữu phân tán & bình đẳng tương đối.\n• Lập trình viên sở hữu máy tính cá nhân (laptop), cài IDE mã nguồn mở, dùng thư viện free trên GitHub.',
      now: '• Tập trung tư bản cao độ vào tay Big Tech (OpenAI, Google, Microsoft, Meta).\n• TLSX cốt lõi là Siêu cụm GPU hàng tỷ USD & Model độc quyền. Kỹ sư trở thành người thuê hạ tầng API.',
      accent: COLORS.accentOrange
    },
    {
      title: '2. QUAN HỆ TỔ CHỨC VÀ QUẢN LÝ SẢN XUẤT (Phân công lao động)',
      before: '• Cấu trúc Kim tự tháp nhiều tầng nấc:\n  1 Senior Lead chỉ huy 2 Mid-level và 3-5 Junior/Intern làm việc phụ (kiểm thử, format, sửa lỗi vặt).',
      now: '• Cấu trúc Phẳng & Siêu tinh gọn (Hyper-lean):\n  1 Senior Engineer kết hợp AI tự đảm đương toàn bộ chu trình, hấp thụ triệt để khối lượng công việc sơ cấp.',
      accent: COLORS.accentCyan
    },
    {
      title: '3. QUAN HỆ PHÂN PHỐI SẢN PHẨM LAO ĐỘNG (Thụ hưởng của cải)',
      before: '• Phân phối theo thâm niên & kỹ năng cú pháp:\n  Càng nhớ nhiều framework và cú pháp thư viện, mức lương càng tăng dần đều theo số năm kinh nghiệm.',
      now: '• Phân cực sâu sắc & Bất bình đẳng gia tăng:\n  Thặng dư dồn về chủ nền tảng và chuyên gia kiến trúc; Đóng băng quỹ lương và cơ hội tuyển dụng Junior.',
      accent: COLORS.accentRed
    }
  ];

  const startY = 1.65;
  const stripH = 1.55;
  const stripGap = 0.18;

  aspects.forEach((asp, idx) => {
    const cy = startY + idx * (stripH + stripGap);

    // Container
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: cy, w: 11.733, h: stripH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.1
    });

    // Left accent badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: cy, w: 0.15, h: stripH,
      fill: { color: asp.accent }
    });

    // Aspect Title
    slide.addText(asp.title, {
      x: 1.15, y: cy + 0.1, w: 11.2, h: 0.3,
      fontSize: 11.5, bold: true, color: asp.accent
    });

    // Before AI (Left Box)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 1.15, y: cy + 0.42, w: 5.4, h: 1.02,
      fill: { color: '182845' },
      line: { color: '243B60', width: 1 },
      rectRadius: 0.06
    });
    slide.addText('TRƯỚC KỶ NGUYÊN AI (Mô hình truyền thống)', {
      x: 1.3, y: cy + 0.46, w: 5.1, h: 0.22,
      fontSize: 9, bold: true, color: COLORS.textMuted
    });
    slide.addText(asp.before, {
      x: 1.3, y: cy + 0.68, w: 5.1, h: 0.72,
      fontSize: 9.5, color: COLORS.textLight
    });

    // Now AI (Right Box)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 6.8, y: cy + 0.42, w: 5.5, h: 1.02,
      fill: { color: '1A2C42' },
      line: { color: asp.accent, width: 1 },
      rectRadius: 0.06
    });
    slide.addText('KỶ NGUYÊN AI (Tái cấu trúc hiện nay)', {
      x: 6.95, y: cy + 0.46, w: 5.2, h: 0.22,
      fontSize: 9, bold: true, color: asp.accent
    });
    slide.addText(asp.now, {
      x: 6.95, y: cy + 0.68, w: 5.2, h: 0.72,
      fontSize: 9.5, color: COLORS.textLight
    });
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 6]
"Khi lực lượng sản xuất phát triển nhảy vọt, quan hệ sản xuất tất yếu phải tái cấu trúc trên cả ba phương diện.

Thứ nhất, về quan hệ sở hữu: trước đây, tư liệu sản xuất của lập trình viên chỉ đơn giản là chiếc máy vi tính cá nhân và mạng internet. Nhưng nay, tư liệu sản xuất cốt lõi đã chuyển thành các siêu cụm GPU hàng tỷ đô la và các mô hình nền tảng độc quyền do các tập đoàn Big Tech chi phối. Người lao động phụ thuộc hoàn toàn vào hạ tầng API của giới tư bản công nghệ.

Thứ hai, về tổ chức quản lý: mô hình kim tự tháp truyền thống đã bị phá vỡ, thay thế bằng cấu trúc tinh gọn nơi một chuyên gia cộng với AI có thể tự cáng đáng toàn bộ dự án.

Và thứ ba, về phân phối: của cải thặng dư tập trung mạnh mẽ vào tay các chủ sở hữu nền tảng công nghệ, trong khi mặt bằng lương và cơ hội gia nhập của tầng lớp lao động trẻ bị phong tỏa nghiêm ngặt."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Đưa tay đối chiếu lần lượt qua 3 hàng: Sở hữu -> Tổ chức -> Phân phối.
- Nhấn mạnh vào chữ "Hạt nhân" ở phần Sở hữu: ai nắm siêu máy tính và API, người đó chi phối cuộc chơi.
- Thời gian mục tiêu: ~1.5 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 7: Cơ Chế Hấp Thụ Tác Vụ Kỹ Thuật
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 7,
    'Tái Cấu Trúc Phân Công Lao Động: Cơ Chế "Hấp Thụ" Tác Vụ Kỹ Thuật',
    'Nghiên cứu Tiên phong • The Absorption Mechanism (ArXiv 2025)',
    'Hosseini Maasoum et al. (ArXiv 2025); McKinsey Tech Report (2025)'
  );

  // 3 Process Step Cards
  const cW = 3.75;
  const cGap = 0.24;
  const sX = 0.8;
  const cY = 1.65;
  const cH = 3.3;

  // Step 1
  slide.addShape(pres.ShapeType.roundRect, {
    x: sX, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.roundRect, {
    x: sX + 0.2, y: cY + 0.2, w: 1.8, h: 0.35,
    fill: { color: '243B60' }, rectRadius: 0.06
  });
  slide.addText('GIAI ĐOẠN 1: MÔ HÌNH CŨ', {
    x: sX + 0.2, y: cY + 0.2, w: 1.8, h: 0.35,
    fontSize: 9, bold: true, color: COLORS.accentCyan, align: 'center', valign: 'middle'
  });
  slide.addText('Vùng Đệm Đào Tạo Junior', {
    x: sX + 0.2, y: cY + 0.65, w: cW - 0.4, h: 0.4,
    fontSize: 13, bold: true, color: COLORS.textLight
  });
  slide.addText(
`• Các công việc kỹ thuật sơ cấp:
   - Viết unit test & integration test.
   - Sửa lỗi cú pháp, linting, formatting.
   - Viết tài liệu API, comment code.
• Vai trò: Đây là "bãi tập" bắt buộc giúp sinh viên mới ra trường cọ xát thực tế và tích lũy trực giác nghề nghiệp.`,
    {
      x: sX + 0.2, y: cY + 1.15, w: cW - 0.4, h: cH - 1.35,
      fontSize: 10.5, color: COLORS.textMuted
    }
  );

  // Step 2
  const c2X = sX + cW + cGap;
  slide.addShape(pres.ShapeType.roundRect, {
    x: c2X, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentOrange, width: 1.5 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.roundRect, {
    x: c2X + 0.2, y: cY + 0.2, w: 2.2, h: 0.35,
    fill: { color: '3D2214' }, rectRadius: 0.06
  });
  slide.addText('GIAI ĐOẠN 2: HIỆN NAY', {
    x: c2X + 0.2, y: cY + 0.2, w: 2.2, h: 0.35,
    fontSize: 9, bold: true, color: COLORS.accentOrange, align: 'center', valign: 'middle'
  });
  slide.addText('Cơ Chế Hấp Thụ (Absorption)', {
    x: c2X + 0.2, y: cY + 0.65, w: cW - 0.4, h: 0.4,
    fontSize: 13, bold: true, color: COLORS.accentOrange
  });
  slide.addText(
`• 1 Senior + AI = Đội ngũ hoàn chỉnh:
   - Senior sử dụng Copilot/Claude để sinh toàn bộ mã test và tài liệu chỉ bằng vài câu lệnh.
   - Chi phí cận biên tiệm cận bằng 0 (MC ≈ 0).
   - Tốc độ xử lý tức thì (vài giây thay vì vài ngày của Junior).
• Hệ quả: Toàn bộ công việc tập sự bị "hấp thụ" sạch vào quy trình Senior - AI.`,
    {
      x: c2X + 0.2, y: cY + 1.15, w: cW - 0.4, h: cH - 1.35,
      fontSize: 10.5, color: COLORS.textMuted
    }
  );

  // Step 3
  const c3X = c2X + cW + cGap;
  slide.addShape(pres.ShapeType.roundRect, {
    x: c3X, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.roundRect, {
    x: c3X + 0.2, y: cY + 0.2, w: 1.8, h: 0.35,
    fill: { color: '183A2E' }, rectRadius: 0.06
  });
  slide.addText('BƯỚC CHUYỂN TẤT YẾU', {
    x: c3X + 0.2, y: cY + 0.2, w: 1.8, h: 0.35,
    fontSize: 9, bold: true, color: COLORS.accentGreen, align: 'center', valign: 'middle'
  });
  slide.addText('Thước Đo Giá Trị Mới', {
    x: c3X + 0.2, y: cY + 0.65, w: cW - 0.4, h: 0.4,
    fontSize: 13, bold: true, color: COLORS.accentGreen
  });
  slide.addText(
`• Triệt tiêu thước đo cũ:
   - Không còn đo giá trị bằng số dòng code gõ ra (Lines of Code - LOC).
   - Không đánh giá qua việc thuộc lòng cú pháp API hay hàm thư viện.
• Xác lập thước đo mới:
   - Năng lực thẩm định thiết kế hệ thống.
   - Kỹ năng phản biện, kiểm soát an toàn tác nhân AI và hiểu sâu logic bài toán nghiệp vụ.`,
    {
      x: c3X + 0.2, y: cY + 1.15, w: cW - 0.4, h: cH - 1.35,
      fontSize: 10.5, color: COLORS.textMuted
    }
  );

  // Bottom Callout
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.15, w: 11.733, h: 1.45,
    fill: { color: '16263D' },
    line: { color: COLORS.accentCyan, width: 1 },
    rectRadius: 0.1
  });
  slide.addText('KẾT LUẬN CỦA NGHIÊN CỨU MAASOUM ET AL. (2025):', {
    x: 1.1, y: 5.25, w: 11.1, h: 0.3,
    fontSize: 11, bold: true, color: COLORS.accentCyan
  });
  slide.addText('"Doanh nghiệp không ngừng tuyển dụng vì thiếu dự án, mà vì chi phí sử dụng Senior + AI rẻ hơn và nhanh hơn gấp bội việc tuyển một nhân sự tập sự để đào tạo từ đầu. Đây là cuộc tái cấu trúc phân công lao động khốc liệt nhất trong lịch sử công nghệ."', {
    x: 1.1, y: 5.58, w: 11.1, h: 0.9,
    fontSize: 11.5, italic: true, color: COLORS.textLight, fontFace: 'Georgia'
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 7]
"Đi sâu vào quan hệ tổ chức lao động, một công trình nghiên cứu nổi tiếng của Hosseini Maasoum và cộng sự công bố năm 2025 trên ArXiv đã gọi tên hiện tượng này là 'Cơ chế hấp thụ' (The Absorption Mechanism).

Trong lịch sử phát triển phần mềm, một kỹ sư trưởng luôn cần một đội ngũ các bạn sinh viên mới ra trường hoặc lập trình viên cấp thấp để làm các công việc lặp đi lặp lại như viết mã kiểm thử (unit tests), vá lỗi vặt và định dạng dữ liệu.

Nhưng hiện nay, với sự trợ giúp của AI, chính vị kỹ sư cấp cao đó chỉ cần vài câu lệnh là đã hoàn thành những tác vụ trên một cách chuẩn xác. Toàn bộ khối lượng công việc sơ cấp bị 'hấp thụ' hoàn toàn vào quy trình làm việc giữa Senior và AI.

Kết quả là các doanh nghiệp không còn nhu cầu tuyển dụng các vị trí tập sự theo lối mòn truyền thống nữa."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Dùng từ "Hấp thụ" với ngữ điệu mạnh mẽ, dứt khoát.
- Giải thích vì sao việc gõ code (LOC) không còn là thước đo năng lực của sinh viên FPT nữa.
- Thời gian mục tiêu: ~1 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 8: Khủng Hoảng Tuyển Dụng Sơ Cấp
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 8,
    'Khủng Hoảng Tuyển Dụng Sơ Cấp: Bài Toán Tối Ưu Hóa Lợi Nhuận Tư Bản',
    'Mâu thuẫn Phân phối & Tuyển dụng • Dưới áp lực tối đa hóa lợi nhuận',
    'AlterSquare Research (2025); Ask Tua Blog; Federal Reserve Bank of New York (2024)'
  );

  // Left Box: Cost Comparison (Capitalist Economics)
  const lW = 5.75;
  const lY = 1.65;
  const lH = 4.95;

  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: lY, w: lW, h: lH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentOrange, width: 1.5 },
    rectRadius: 0.12
  });

  slide.addText('BÀI TOÁN KINH TẾ HỌC TƯ BẢN (5 NĂM)', {
    x: 1.1, y: lY + 0.2, w: lW - 0.6, h: 0.35,
    fontSize: 12, bold: true, color: COLORS.accentOrange
  });

  // Cost Box 1: Junior
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.1, y: lY + 0.65, w: lW - 0.6, h: 1.8,
    fill: { color: '2D1B14' },
    line: { color: COLORS.accentRed, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('ĐÀO TẠO 1 LẬP TRÌNH VIÊN JUNIOR', {
    x: 1.3, y: lY + 0.75, w: lW - 1.0, h: 0.28,
    fontSize: 10, bold: true, color: COLORS.accentRed
  });
  slide.addText('~$585.000 USD', {
    x: 1.3, y: lY + 1.05, w: lW - 1.0, h: 0.65,
    fontSize: 26, bold: true, color: COLORS.accentRed, fontFace: 'Segoe UI'
  });
  slide.addText('Bao gồm tiền lương 5 năm, bảo hiểm phúc lợi, chi phí văn phòng và tiêu tốn hơn 500 giờ công kèm cặp của kỹ sư Senior.', {
    x: 1.3, y: lY + 1.75, w: lW - 1.0, h: 0.6,
    fontSize: 9.5, color: COLORS.textLight
  });

  // Cost Box 2: AI Copilot
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.1, y: lY + 2.6, w: lW - 0.6, h: 1.8,
    fill: { color: '142A24' },
    line: { color: COLORS.accentGreen, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('DUY TRÌ 10 BẢN QUYỀN AI COPILOT CAO CẤP', {
    x: 1.3, y: lY + 2.7, w: lW - 1.0, h: 0.28,
    fontSize: 10, bold: true, color: COLORS.accentGreen
  });
  slide.addText('~$6.000 USD', {
    x: 1.3, y: lY + 3.0, w: lW - 1.0, h: 0.65,
    fontSize: 26, bold: true, color: COLORS.accentGreen, fontFace: 'Segoe UI'
  });
  slide.addText('Chi phí mua license cho 10 tài khoản kỹ sư sử dụng liên tục trong 5 năm, phục vụ 24/7 không đòi hỏi phúc lợi hay nghỉ phép.', {
    x: 1.3, y: lY + 3.7, w: lW - 1.0, h: 0.6,
    fontSize: 9.5, color: COLORS.textLight
  });

  // Difference Banner
  slide.addText('CHÊNH LỆCH CHI PHÍ GẦN 100 LẦN! Động cơ lợi nhuận kinh tế trước mắt thúc đẩy giới chủ lập tức thay thế sức lao động trẻ.', {
    x: 1.1, y: lY + 4.48, w: lW - 0.6, h: 0.4,
    fontSize: 9.5, bold: true, color: COLORS.accentGold, align: 'center'
  });

  // Right Box: Market Shock Realities
  const rrx = 0.8 + lW + 0.233;
  slide.addShape(pres.ShapeType.roundRect, {
    x: rrx, y: lY, w: lW, h: lH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentCyan, width: 1.5 },
    rectRadius: 0.12
  });

  slide.addText('CÚ SỐC THỊ TRƯỜNG LAO ĐỘNG THỰC TẾ', {
    x: rrx + 0.3, y: lY + 0.2, w: lW - 0.6, h: 0.35,
    fontSize: 12, bold: true, color: COLORS.accentCyan
  });

  const marketStats = [
    {
      num: '-60% đến -67%',
      title: 'TIN ĐĂNG TUYỂN DỤNG JUNIOR SỤT GIẢM',
      desc: 'Số lượng bài đăng tuyển dụng vị trí lập trình viên sơ cấp trên các sàn việc làm toàn cầu lao dốc không phanh.',
      color: COLORS.accentRed
    },
    {
      num: '-73%',
      title: 'TUYỂN DỤNG THỰC TẾ CỬ NHÂN MỚI TỐT NGHIỆP',
      desc: 'Lượng tuyển dụng thực tế đối với sinh viên ngành IT vừa rời giảng đường giảm sâu kỷ lục (AlterSquare 2025).',
      color: COLORS.accentOrange
    },
    {
      num: '6.1% – 7.5%',
      title: 'TỶ LỆ THẤT NGHIỆP CỬ NHÂN KHOA HỌC MÁY TÍNH',
      desc: 'Số liệu từ Fed New York: Tỷ lệ thất nghiệp của cử nhân CS/IT mới ra trường chính thức vượt qua cả khối Khoa học Xã hội!',
      color: COLORS.accentGold
    }
  ];

  marketStats.forEach((ms, idx) => {
    const my = lY + 0.65 + idx * 1.35;
    slide.addShape(pres.ShapeType.roundRect, {
      x: rrx + 0.3, y: my, w: lW - 0.6, h: 1.25,
      fill: { color: '182845' },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.08
    });

    slide.addText(ms.num, {
      x: rrx + 0.45, y: my + 0.1, w: 2.2, h: 0.5,
      fontSize: 18, bold: true, color: ms.color, fontFace: 'Segoe UI'
    });

    slide.addText(ms.title, {
      x: rrx + 2.7, y: my + 0.12, w: lW - 3.1, h: 0.45,
      fontSize: 9.5, bold: true, color: COLORS.textLight
    });

    slide.addText(ms.desc, {
      x: rrx + 0.45, y: my + 0.62, w: lW - 0.9, h: 0.55,
      fontSize: 9, color: COLORS.textMuted
    });
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 8]
"Tại sao các doanh nghiệp lại hành xử như vậy? Câu trả lời nằm ở quy luật tối đa hóa lợi nhuận của chủ nghĩa tư bản.

Một phân tích tài chính của AlterSquare Research năm 2025 đã chỉ ra một phép so sánh tàn nhẫn: Để tuyển dụng, trả lương và dành ra 500 giờ công của kỹ sư cấp cao kèm cặp một lập trình viên mới vào nghề trong 5 năm, công ty phải chi trả tới khoảng 585.000 USD.

Trong khi đó, việc duy trì 10 tài khoản bản quyền trợ lý AI cao cấp trong suốt 5 năm chỉ tiêu tốn vỏn vẹn 6.000 USD – một sự chênh lệch chi phí gần 100 lần!

Chính động cơ lợi nhuận kinh tế trước mắt đã thúc đẩy giới chủ thay thế lao động trẻ bằng máy móc. Hệ quả nhãn tiền là tin tuyển dụng vị trí sơ cấp giảm hơn 60%, và theo số liệu từ Ngân hàng Dự trữ Liên bang New York, tỷ lệ thất nghiệp của cử nhân công nghệ thông tin mới ra trường đã vọt lên 7,5%, cao hơn cả cử nhân ngành khoa học xã hội và nhân văn."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Nhấn mạnh sự đối lập cực độ giữa con số: $585.000 vs $6.000.
- Đây là slide "đánh trúng tim đen" nỗi lo của sinh viên và sự tò mò của hội đồng chấm điểm.
- Thời gian mục tiêu: ~1.5 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 9: Sự Phân Hóa Nhân Khẩu Học Sâu Sắc
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 9,
    'Sự Phân Hóa Nhân Khẩu Học Sâu Sắc trong Thị Trường Lao Động',
    'Phân hóa thị trường việc làm • Dữ liệu bảng lương thực tế',
    'Stanford Digital Economy Lab & ADP Payroll Data; Three Oaks Advisory (2024)'
  );

  // 2 Polar Columns
  const colW = 5.75;
  const colY = 1.65;
  const colH = 4.0;

  // Left: Young Engineers
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: colY, w: colW, h: colH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentRed, width: 1.5 },
    rectRadius: 0.12
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.05, y: colY + 0.2, w: colW - 0.5, h: 0.45,
    fill: { color: '2D1B14' },
    line: { color: COLORS.accentRed, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('THẾ HỆ TRẺ: KỸ SƯ 22 – 25 TUỔI (MỚI RA TRƯỜNG)', {
    x: 1.05, y: colY + 0.2, w: colW - 0.5, h: 0.45,
    fontSize: 10.5, bold: true, color: COLORS.accentRed, align: 'center', valign: 'middle'
  });

  slide.addText('-20%', {
    x: 1.05, y: colY + 0.75, w: colW - 0.5, h: 0.9,
    fontSize: 42, bold: true, color: COLORS.accentRed, align: 'center', fontFace: 'Segoe UI'
  });
  slide.addText('TĂNG TRƯỞNG VIỆC LÀM SỤT GIẢM (SO VỚI ĐỈNH 2022)', {
    x: 1.05, y: colY + 1.65, w: colW - 0.5, h: 0.3,
    fontSize: 9.5, bold: true, color: COLORS.textMuted, align: 'center'
  });

  slide.addText(
`• Hiện tượng "Sụp đổ tín hiệu tuyển dụng" (Signal Collapse):
   - Doanh nghiệp đăng tuyển mác "Junior" nhưng đòi hỏi kinh nghiệm và năng lực kiến trúc của cấp bậc Mid-level.
   - Các bài test thuật toán Leetcode cơ bản bị vô hiệu hóa vì AI giải được 100%.
• Bị tước đoạt "Nấc thang đầu tiên":
   - Sinh viên không có cơ hội bước chân vào guồng máy thực tế để tích lũy kinh nghiệm, rơi vào vòng lặp: Không có việc vì thiếu kinh nghiệm - Thiếu kinh nghiệm vì không ai tuyển!`,
    {
      x: 1.05, y: colY + 2.05, w: colW - 0.5, h: 1.8,
      fontSize: 10, color: COLORS.textLight
    }
  );

  // Right: Senior Engineers
  const rrx = 0.8 + colW + 0.233;
  slide.addShape(pres.ShapeType.roundRect, {
    x: rrx, y: colY, w: colW, h: colH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentGreen, width: 1.5 },
    rectRadius: 0.12
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: rrx + 0.25, y: colY + 0.2, w: colW - 0.5, h: 0.45,
    fill: { color: '142A24' },
    line: { color: COLORS.accentGreen, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('THẾ HỆ KỲ CỰU: KỸ SƯ 41 – 49 TUỔI (SENIOR / LEAD)', {
    x: rrx + 0.25, y: colY + 0.2, w: colW - 0.5, h: 0.45,
    fontSize: 10.5, bold: true, color: COLORS.accentGreen, align: 'center', valign: 'middle'
  });

  slide.addText('+14%', {
    x: rrx + 0.25, y: colY + 0.75, w: colW - 0.5, h: 0.9,
    fontSize: 42, bold: true, color: COLORS.accentGreen, align: 'center', fontFace: 'Segoe UI'
  });
  slide.addText('TĂNG TRƯỞNG VIỆC LÀM DƯƠNG VỮNG CHẮC (CÙNG KỲ)', {
    x: rrx + 0.25, y: colY + 1.65, w: colW - 0.5, h: 0.3,
    fontSize: 9.5, bold: true, color: COLORS.textMuted, align: 'center'
  });

  slide.addText(
`• Hiệu ứng "Đòn bẩy cấp số nhân":
   - Chuyên gia kỳ cựu đã có sẵn trực giác hệ thống, khi được trao AI, năng suất của họ được nhân lên gấp 3 đến 5 lần.
   - Họ có thể trực tiếp chỉ huy AI tạo ra phần mềm hoàn chỉnh mà không cần đội ngũ cấp dưới.
• Vị thế và thu nhập gia tăng:
   - Các chuyên gia kiến trúc và bảo mật hệ thống trở thành "tài sản chiến lược" được các tập đoàn săn đón với mức đãi ngộ kỷ lục.`,
    {
      x: rrx + 0.25, y: colY + 2.05, w: colW - 0.5, h: 1.8,
      fontSize: 10, color: COLORS.textLight
    }
  );

  // Bottom Dialectical Insight
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.8, w: 11.733, h: 0.9,
    fill: { color: '132644' },
    line: { color: COLORS.accentCyan, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('LUẬN ĐIỂM BIỆN CHỨNG: Thị trường việc làm công nghệ KHÔNG HỀ BIẾN MẤT, mà bị xé toạc làm hai cực đối lập. Người có kinh nghiệm được nâng tầm thành "siêu nhân", còn người trẻ bị chặn đứng ngay tại cánh cửa gia nhập!', {
    x: 1.0, y: 5.8, w: 11.333, h: 0.9,
    fontSize: 11, bold: true, color: COLORS.accentCyan, valign: 'middle', align: 'center'
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 9]
"Sự phân hóa của quan hệ sản xuất biểu hiện rõ nét nhất qua dữ liệu nhân khẩu học.

Theo nghiên cứu phối hợp giữa Phòng thí nghiệm Kinh tế số Đại học Stanford và dữ liệu bảng lương thực tế của tập đoàn ADP: Thị trường việc làm công nghệ không biến mất hoàn toàn, mà bị xé toạc làm hai cực đối lập.

Nhóm lao động trẻ trong độ tuổi 22 đến 25 chứng kiến số lượng việc làm sụt giảm tới 20% kể từ cuối năm 2022. Trái lại, nhóm kỹ sư kỳ cựu từ 41 đến 49 tuổi lại ghi nhận mức tăng trưởng việc làm dương 14%!

Tại sao lại có nghịch lý này? Bởi vì những người đã có sẵn trực giác kiến trúc và kinh nghiệm thực chiến khi được trao vào tay công cụ AI thì sức lao động của họ được nhân lên gấp bội. Còn những người trẻ chưa có kinh nghiệm thì bị tước đoạt mất những nấc thang đầu tiên để bước chân vào thị trường."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Dùng 2 tay chỉ về hai hướng đối lập để minh họa hình ảnh "thị trường bị xé toạc làm hai cực".
- Nhấn mạnh vào cụm từ "Signal Collapse - Sụp đổ tín hiệu tuyển dụng".
- Thời gian mục tiêu: ~1 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 10: Mâu Thuẫn Biện Chứng: Sự Đứt Gãy Chuỗi Tái Sản Xuất
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 10,
    'Mâu Thuẫn Biện Chứng: Sự Đứt Gãy Chuỗi Tái Sản Xuất Sức Lao Động',
    'Phân tích Mâu thuẫn Nội tại • Nguy cơ khủng hoảng nhân lực tương lai',
    'Karl Marx, Tư bản (Chương 15); Gabriel Anhaia (Dev.to); AlterSquare Research'
  );

  // 3 Threat Cards
  const cW = 3.75;
  const cGap = 0.24;
  const sX = 0.8;
  const cY = 1.65;
  const cH = 4.0;

  // Threat 1
  slide.addShape(pres.ShapeType.roundRect, {
    x: sX, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentOrange, width: 1.2 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.rect, {
    x: sX, y: cY, w: cW, h: 0.08,
    fill: { color: COLORS.accentOrange }
  });
  slide.addText('01. TRIỆT TIÊU QUÁ TRÌNH "VẬT LỘN ĐỂ TRƯỞNG THÀNH"', {
    x: sX + 0.2, y: cY + 0.18, w: cW - 0.4, h: 0.5,
    fontSize: 11, bold: true, color: COLORS.accentOrange
  });
  slide.addText(
`• Productive Struggle:
   - Trong đào tạo kỹ thuật, trực giác và phản xạ của một kỹ sư chỉ hình thành qua việc tự tay thức đêm gỡ lỗi (debug), tìm nguyên nhân rò rỉ bộ nhớ, tra cứu stack trace.
• Hệ quả khi AI làm thay:
   - Người học chuyển từ tư duy phản biện sang "nhận kết quả thụ động".
   - Mất đi hoàn toàn môi trường rèn luyện nền tảng để tôi luyện tư duy logic sâu sắc.`,
    {
      x: sX + 0.2, y: cY + 0.72, w: cW - 0.4, h: cH - 0.9,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Threat 2
  const c2X = sX + cW + cGap;
  slide.addShape(pres.ShapeType.roundRect, {
    x: c2X, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentRed, width: 1.2 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.rect, {
    x: c2X, y: cY, w: cW, h: 0.08,
    fill: { color: COLORS.accentRed }
  });
  slide.addText('02. HIỆN TƯỢNG "KỸ SƯ RỖNG" (HOLLOW SENIOR)', {
    x: c2X + 0.2, y: cY + 0.18, w: cW - 0.4, h: 0.5,
    fontSize: 11, bold: true, color: COLORS.accentRed
  });
  slide.addText(
`• Vỏ bọc chuyên gia nhưng rỗng ruột:
   - Kỹ sư biết bấm nút sinh mã nhưng không hiểu kiến trúc bên dưới; khi hệ thống gặp sự cố phức tạp thì hoàn toàn bất lực.
• Dữ liệu thực nghiệm cảnh báo:
   - Mã nguồn do AI sinh ra làm gia tăng 50% các đoạn code trùng lặp (code bloat).
   - Tỷ lệ hoạt động tái cấu trúc sâu (deep refactoring) sụt giảm xuống dưới 10% (Dev.to 2024).`,
    {
      x: c2X + 0.2, y: cY + 0.72, w: cW - 0.4, h: cH - 0.9,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Threat 3
  const c3X = c2X + cW + cGap;
  slide.addShape(pres.ShapeType.roundRect, {
    x: c3X, y: cY, w: cW, h: cH,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentPurple, width: 1.2 },
    rectRadius: 0.12
  });
  slide.addShape(pres.ShapeType.rect, {
    x: c3X, y: cY, w: cW, h: 0.08,
    fill: { color: COLORS.accentPurple }
  });
  slide.addText('03. NGHỊCH LÝ TƯ BẢN NGẮN HẠN & ĐỨT GÃY THẾ HỆ', {
    x: c3X + 0.2, y: cY + 0.18, w: cW - 0.4, h: 0.5,
    fontSize: 11, bold: true, color: COLORS.accentPurple
  });
  slide.addText(
`• Mâu thuẫn biện chứng sâu sắc:
   - Xung đột giữa Tính chất xã hội hóa cao độ của LLSX với Tính tư lợi ngắn hạn của các doanh nghiệp tư bản.
• Nguy cơ khủng hoảng 5–10 năm tới:
   - Vì lợi nhuận trước mắt mà từ chối đào tạo Junior hôm nay, xã hội sẽ thiếu hụt trầm trọng các chuyên gia kiến trúc và bảo mật ngày mai.
   - Quan hệ sản xuất lỗi thời kìm hãm chính LLSX tương lai!`,
    {
      x: c3X + 0.2, y: cY + 0.72, w: cW - 0.4, h: cH - 0.9,
      fontSize: 10.5, color: COLORS.textLight
    }
  );

  // Bottom Warning Box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.8, w: 11.733, h: 0.9,
    fill: { color: '241818' },
    line: { color: COLORS.accentRed, width: 1.2 },
    rectRadius: 0.08
  });
  slide.addText('KẾT LUẬN TRIẾT HỌC: Tư bản công nghệ đang "ăn vào vốn hạt giống" của tương lai. Việc triệt tiêu tái sản xuất sức lao động tay nghề cao là bằng chứng đanh thép cho thấy QHSX tư bản đang trở thành lực cản kìm hãm LLSX phát triển lành mạnh!', {
    x: 1.0, y: 5.8, w: 11.333, h: 0.9,
    fontSize: 11, bold: true, color: COLORS.accentRed, valign: 'middle', align: 'center'
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 10]
"Từ hiện tượng trên, triết học Mác giúp chúng ta nhìn thấu mâu thuẫn biện chứng nội tại nguy hiểm: Đó là sự xung đột giữa tính chất xã hội hóa cao độ của lực lượng sản xuất với tính toán tư lợi ngắn hạn của các chủ doanh nghiệp.

Trong giáo dục kỹ thuật, tri thức chuyên sâu và trực giác của một chuyên gia không bao giờ hình thành từ việc đọc lý thuyết, mà bắt buộc phải trải qua quá trình 'vật lộn để trưởng thành' (Productive Struggle) – tức là tự tay thức đêm gỡ lỗi, tự tìm nguyên nhân tràn bộ nhớ.

Khi giao toàn bộ việc đó cho AI, chúng ta đang đứng trước nguy cơ tạo ra một thế hệ 'Senior rỗng' (Hollow Senior) – những người biết bấm nút sinh mã nhưng không hiểu bản chất bên dưới. Dữ liệu thực tế cho thấy mã do AI sinh ra làm tăng 50% các đoạn code rác trùng lặp, trong khi khả năng tái cấu trúc sâu giảm xuống dưới 10%.

Vì lợi ích kinh tế trước mắt mà từ chối đào tạo người trẻ, các doanh nghiệp đang tự tay bóp chết nguồn cung chuyên gia kiến trúc và bảo mật của xã hội trong 10 năm tới. Quan hệ sản xuất lỗi thời đang kìm hãm chính sự phát triển bền vững của lực lượng sản xuất tương lai!"

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Giọng nói đanh thép, thể hiện sự am hiểu triết học biện chứng sâu sắc.
- Nhấn mạnh vào 2 cụm từ: "Productive Struggle" và "Hollow Senior".
- Thời gian mục tiêu: ~1.5 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 11: Bài Học Thích Ứng: 4 Trụ Cột Năng Lực
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  addSlideHeaderFooter(
    slide, 11,
    'Bài Học Thích Ứng Nghề Nghiệp: Khung 4 Trụ Cột Năng Lực Cốt Lõi',
    'Chiến lược hành động của người học • Khuyến nghị Diễn đàn Kinh tế Thế giới (WEF)',
    'WEF Future of Jobs Report 2023; McKinsey AI-Native Development; Stack Overflow (2025)'
  );

  // 4 Grid Pillars
  const pillars = [
    {
      num: 'TRỤ CỘT 01',
      title: 'Kiến Trúc Hệ Thống & Tư Duy Phức Hợp',
      desc: '• Thoát khỏi bẫy "học vẹt cú pháp" hay ghi nhớ hàm thư viện.\n• Tập trung vào tư duy thiết kế kiến trúc tổng thể (System Architecture), tính sẵn sàng cao, bảo mật và khả năng mở rộng quy mô lớn.\n• Hiểu bản chất cơ chế hệ điều hành và luồng dữ liệu.',
      accent: COLORS.accentCyan
    },
    {
      num: 'TRỤ CỘT 02',
      title: 'Chỉ Huy & Kiểm Toán An Toàn AI',
      desc: '• Nâng tầm từ người gõ mã thành "Nhạc trưởng chỉ huy AI".\n• Kỹ năng ra lệnh ngữ cảnh sâu (Deep Prompting) và thiết lập chuỗi tác nhân (AI Agents).\n• Kiểm soát ảo giác (Hallucination) và thẩm định lỗ hổng an ninh mã do AI sinh ra.',
      accent: COLORS.accentOrange
    },
    {
      num: 'TRỤ CỘT 03',
      title: 'Tri Thức Chuyên Ngành Sâu Rộng (Domain Expertise)',
      desc: '• Nắm vững nghiệp vụ thực tế: Tài chính - Ngân hàng (Fintech), Y tế số (Healthtech), Logistics, Sản xuất công nghiệp.\n• Nắm rõ hành lang pháp lý dữ liệu bản địa — nơi các mô hình AI thuần túy không thể tự biên dịch được.',
      accent: COLORS.accentGreen
    },
    {
      num: 'TRỤ CỘT 04',
      title: 'Học Tập Suốt Đời & Thích Ứng Linh Hoạt',
      desc: '• Chu kỳ bán rã của một kỹ năng công nghệ hiện nay đã giảm xuống dưới 5 năm.\n• Rèn luyện năng lực tự học chủ động: Sẵn sàng "Unlearn" kiến thức cũ lỗi thời để nhanh chóng nạp phương pháp luận mới.',
      accent: COLORS.accentPurple
    }
  ];

  const pW = 5.75;
  const pH = 2.35;
  const pGapX = 0.233;
  const pGapY = 0.2;
  const pStartY = 1.65;

  pillars.forEach((p, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const px = 0.8 + col * (pW + pGapX);
    const py = pStartY + row * (pH + pGapY);

    slide.addShape(pres.ShapeType.roundRect, {
      x: px, y: py, w: pW, h: pH,
      fill: { color: COLORS.cardBg },
      line: { color: p.accent, width: 1.2 },
      rectRadius: 0.1
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: px + 0.2, y: py + 0.15, w: 1.5, h: 0.3,
      fill: { color: '1E293B' },
      line: { color: p.accent, width: 1 },
      rectRadius: 0.06
    });
    slide.addText(p.num, {
      x: px + 0.2, y: py + 0.15, w: 1.5, h: 0.3,
      fontSize: 8.5, bold: true, color: p.accent, align: 'center', valign: 'middle'
    });

    slide.addText(p.title, {
      x: px + 1.85, y: py + 0.15, w: pW - 2.05, h: 0.35,
      fontSize: 12, bold: true, color: COLORS.textLight
    });

    slide.addText(p.desc, {
      x: px + 0.25, y: py + 0.55, w: pW - 0.5, h: pH - 0.65,
      fontSize: 10, color: COLORS.textMuted
    });
  });

  // Bottom Anti-Luddite Principle
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.75, w: 11.733, h: 0.95,
    fill: { color: '132238' },
    line: { color: COLORS.accentGold, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('NGUYÊN TẮC HÀNH ĐỘNG DUY VẬT LỊCH SỬ: Tuyệt đối không bài xích công nghệ theo chủ nghĩa Luddite (đập phá máy móc thế kỷ 19). Người lao động là chủ thể của LLSX — muốn không bị loại bỏ, con người phải chủ động vươn lên làm chủ công cụ mới!', {
    x: 1.0, y: 5.75, w: 11.333, h: 0.95,
    fontSize: 10.5, bold: true, color: COLORS.accentGold, valign: 'middle', align: 'center'
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 11]
"Vậy đứng trước quy luật khách quan đó, sinh viên chúng ta phải hành động như thế nào?

Chủ nghĩa duy vật lịch sử dạy chúng ta rằng: Tuyệt đối không bao giờ được rơi vào tâm lý bài xích công nghệ theo chủ nghĩa đập phá máy móc Luddite của thế kỷ 19. Công cụ lao động mới là tất yếu của lịch sử. Để không bị đào thải, người lao động – với tư cách là chủ thể quyết định của LLSX – phải chủ động nâng cấp bản thân để tương thích với QHSX mới.

Theo Diễn đàn Kinh tế Thế giới (WEF), sinh viên cần trang bị 4 trụ cột năng lực sống còn:

Thứ nhất, chuyển từ học vẹt cú pháp sang tư duy thiết kế kiến trúc hệ thống tổng thể.
Thứ hai, nâng tầm từ người gõ mã thành người chỉ huy và kiểm toán an toàn kết quả của AI, kiểm soát lỗi ảo giác của mô hình.
Thứ ba, tích lũy tri thức chuyên ngành thực tế – bởi AI có thể viết code nhưng không hiểu được nghiệp vụ ngân hàng hay pháp luật bản địa.
Và thứ tư, tinh thần học tập suốt đời, bởi chu kỳ bán rã của một kỹ năng công nghệ hiện nay đã rút ngắn xuống dưới 5 năm."

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Đếm ngón tay dứt khoát 1 - 2 - 3 - 4 khi trình bày 4 trụ cột.
- Thể hiện sự tự tin và định hướng tương lai rõ ràng của sinh viên FPT.
- Thời gian mục tiêu: ~1.5 phút.`
  );
}

// -------------------------------------------------------------
// SLIDE 12: Tổng Kết & Khẳng Định Vị Thế Chủ Thể
// -------------------------------------------------------------
{
  const slide = pres.addSlide();
  slide.background = { color: COLORS.bgDark };

  // Decorative Top Bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 13.333, h: 0.12,
    fill: { color: COLORS.accentOrange }
  });

  // Category Tag
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.5, w: 4.8, h: 0.35,
    fill: { color: '1E293B' },
    line: { color: COLORS.accentOrange, width: 1 },
    rectRadius: 0.08
  });
  slide.addText('TỔNG KẾT BÁO CÁO • KHẲNG ĐỊNH VỊ THẾ CHỦ THỂ LỊCH SỬ', {
    x: 0.8, y: 0.5, w: 4.8, h: 0.35,
    fontSize: 9, bold: true, color: COLORS.accentOrange, align: 'center', valign: 'middle'
  });

  // Main Golden Message
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.05, w: 11.733, h: 1.5,
    fill: { color: '1A2744' },
    line: { color: COLORS.accentGold, width: 2 },
    rectRadius: 0.12
  });
  slide.addText('THÔNG ĐIỆP CỐT LÕI CỦA BÀI THUYẾT TRÌNH:', {
    x: 1.1, y: 1.15, w: 11.1, h: 0.3,
    fontSize: 10.5, bold: true, color: COLORS.accentGold
  });
  slide.addText('"Trí tuệ Nhân tạo không loại bỏ con người —\nAI chỉ loại bỏ những ai từ chối nâng cấp sức lao động của chính mình."', {
    x: 1.1, y: 1.48, w: 11.1, h: 0.95,
    fontSize: 20, bold: true, italic: true, color: COLORS.textLight, align: 'center', fontFace: 'Georgia'
  });

  // 3 Summary Takeaways
  const sumW = 3.75;
  const sumGap = 0.24;
  const sumX = 0.8;
  const sumY = 2.8;
  const sumH = 2.7;

  const sumCards = [
    {
      title: 'Bản chất Công cụ Lao động',
      desc: 'AI dù tinh vi đến đâu vẫn chỉ là tư liệu lao động đóng vai trò khí quan nối dài trí tuệ. Người lao động với ý thức sáng tạo vẫn mãi là chủ thể quyết định của Lực lượng sản xuất.',
      accent: COLORS.accentCyan
    },
    {
      title: 'Giá trị Trường tồn của Mác - Lênin',
      desc: 'Quy luật biện chứng giữa LLSX và QHSX không phải là giáo điều trừu tượng, mà là ngọn hải đăng phương pháp luận soi sáng bản chất cuộc khủng hoảng việc làm thời đại số.',
      accent: COLORS.accentOrange
    },
    {
      title: 'Hành động của Kỹ sư Tương lai',
      desc: 'Chủ động làm chủ phương tiện sản xuất mới, tôi luyện tư duy kiến trúc và phẩm chất nhân văn. Biến áp lực của cuộc cách mạng số thành bệ phóng khẳng định giá trị bản thân.',
      accent: COLORS.accentGreen
    }
  ];

  sumCards.forEach((sc, idx) => {
    const cx = sumX + idx * (sumW + sumGap);
    slide.addShape(pres.ShapeType.roundRect, {
      x: cx, y: sumY, w: sumW, h: sumH,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.cardBorder, width: 1 },
      rectRadius: 0.12
    });

    slide.addShape(pres.ShapeType.rect, {
      x: cx, y: sumY, w: sumW, h: 0.08,
      fill: { color: sc.accent }
    });

    slide.addText(sc.title, {
      x: cx + 0.2, y: sumY + 0.2, w: sumW - 0.4, h: 0.5,
      fontSize: 12.5, bold: true, color: sc.accent
    });

    slide.addText(sc.desc, {
      x: cx + 0.2, y: sumY + 0.75, w: sumW - 0.4, h: sumH - 0.95,
      fontSize: 10.5, color: COLORS.textMuted
    });
  });

  // Thank you banner
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.7, w: 11.733, h: 0.95,
    fill: { color: '182E1E' },
    line: { color: COLORS.accentGreen, width: 1.5 },
    rectRadius: 0.1
  });
  slide.addText('CHÂN THÀNH CẢM ƠN QUÝ THẦY CÔ & CÁC BẠN ĐÃ LẮNG NGHE!\nNHÓM RẤT MONG NHẬN ĐƯỢC CÁC CÂU HỎI VÀ ĐÓNG GÓP Ý KIẾN TRONG PHẦN THẢO LUẬN (Q&A)', {
    x: 1.0, y: 5.7, w: 11.333, h: 0.95,
    fontSize: 11.5, bold: true, color: COLORS.accentGreen, align: 'center', valign: 'middle'
  });

  // Speaker notes
  slide.addNotes(
`[LỜI THOẠI THUYẾT TRÌNH - SLIDE 12]
"Để khép lại bài thuyết trình hôm nay, nhóm chúng em xin nhấn mạnh thông điệp cốt lõi:

'Trí tuệ nhân tạo không thay thế con người, mà AI chỉ loại bỏ những ai từ chối nâng cấp sức lao động của chính mình để thích ứng với thời đại mới'.

Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất trong triết học Mác - Lênin không phải là một giáo điều trừu tượng trên trang sách, mà chính là kim chỉ nam soi sáng giúp thế hệ trẻ chúng ta định vị bản thân. Thay vì hoang mang lo sợ, việc thấu hiểu quy luật khách quan sẽ giúp chúng ta vững vàng rèn luyện tư duy, biến AI thành công cụ nối dài trí tuệ và tự tin khẳng định vị thế chủ thể sáng tạo của thời đại số.

Chúng em xin chân thành cảm ơn quý Thầy Cô và các bạn đã chú ý lắng nghe. Nhóm rất mong nhận được những câu hỏi và đóng góp quý báu trong phần thảo luận tiếp theo!"

[GỢI Ý CỬ CHỈ & ĐIỂM NHẤN]
- Giọng chốt hạ hào hùng, truyền cảm hứng và tự tin.
- Cúi đầu chào trân trọng Thầy Cô và cả hội trường.
- Mở đầu phần Q&A với tâm thế sẵn sàng, chủ động.
- Thời gian mục tiêu: ~1 phút.`
  );
}

// Generate the PPTX File
const outputPath = path.join(__dirname, 'Bai_Thuyet_Trinh_MLN_AI_KTPM.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`Successfully generated presentation: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error generating presentation:', err);
    process.exit(1);
  });
