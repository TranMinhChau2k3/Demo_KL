import React from 'react';
import './ToolList.css';

const tools = [
  {
    group: 'Trình chuyển đổi',
    items: [
      { icon: 'archive', label: 'Trình chuyển đổi lưu trữ' },
      { icon: 'hashtag', label: 'Trình tạo băm' },
      { icon: 'music', label: 'Trình chuyển đổi âm thanh' },
      { icon: 'image', label: 'Trình chuyển đổi hình ảnh' },
      { icon: 'cad', label: 'Công cụ chuyển đổi CAD' },
      { icon: 'software', label: 'Trình chuyển đổi phần mềm' },
      { icon: 'device', label: 'Trình chuyển đổi thiết bị' },
      { icon: 'video', label: 'Trình chuyển đổi video' },
      { icon: 'document', label: 'Trình chuyển đổi tài liệu' },
      { icon: 'web', label: 'Trình chuyển đổi dịch vụ web' },
      { icon: 'ebook', label: 'Trình chuyển đổi ebook' },
      { icon: 'ai', label: 'Studio sáng tạo AI', badge: 'PHỔ BIẾN' },
    ],
  },
  {
    group: 'Các công cụ chụp màn hình trực tuyến',
    items: [
      { icon: 'pdf', label: 'Lưu trang web dưới định dạng PDF' },
      { icon: 'jpg', label: 'Chụp màn hình trang web dưới định dạng JPG' },
      { icon: 'png', label: 'Chụp màn hình trang web dưới định dạng PNG' },
      { icon: 'tiff', label: 'Chụp màn hình trang web dưới định dạng TIFF' },
    ],
  },
  {
    group: 'Nén các file hình ảnh',
    items: [
      { icon: 'jpg', label: 'Nén JPG' },
      { icon: 'png', label: 'Nén PNG' },
    ],
  },
  {
    group: 'Nén file video',
    items: [
      { icon: 'mp4', label: 'Nén MP4' },
    ],
  },
  {
    group: 'Nén file tài liệu',
    items: [
      { icon: 'pdf', label: 'Nén PDF' },
    ],
  },
  {
    group: 'Chuyển đổi với OCR',
    items: [
      { icon: 'image', label: 'Hình ảnh sang văn bản' },
      { icon: 'pdf', label: 'PDF sang Word' },
      { icon: 'scan', label: 'Scan sang Text' },
    ],
  },
];

function getIcon(icon) {
  // Sử dụng SVG đơn giản cho các icon
  switch (icon) {
    case 'archive': return <span className="tool-icon">📦</span>;
    case 'hashtag': return <span className="tool-icon">#</span>;
    case 'music': return <span className="tool-icon">🎵</span>;
    case 'image': return <span className="tool-icon">🖼️</span>;
    case 'cad': return <span className="tool-icon">🛠️</span>;
    case 'software': return <span className="tool-icon">💻</span>;
    case 'device': return <span className="tool-icon">📱</span>;
    case 'video': return <span className="tool-icon">🎬</span>;
    case 'document': return <span className="tool-icon">📄</span>;
    case 'web': return <span className="tool-icon">🌐</span>;
    case 'ebook': return <span className="tool-icon">📚</span>;
    case 'ai': return <span className="tool-icon">🤖</span>;
    case 'pdf': return <span className="tool-icon">📄</span>;
    case 'jpg': return <span className="tool-icon">🖼️</span>;
    case 'png': return <span className="tool-icon">🖼️</span>;
    case 'tiff': return <span className="tool-icon">🖼️</span>;
    case 'mp4': return <span className="tool-icon">🎬</span>;
    case 'scan': return <span className="tool-icon">📝</span>;
    default: return <span className="tool-icon">🔧</span>;
  }
}

function ToolList() {
  return (
    <section className="toollist-section">
      <div className="toollist-banner">
        <span className="toollist-title">Trình tạo nghệ thuật bằng AI</span>
        <span className="toollist-desc">Giải phóng khả năng sáng tạo của bạn với AI Creator Studio, biến văn bản của bạn thành tác phẩm nghệ thuật tuyệt đẹp</span>
        <button className="toollist-btn">Thử ngay bây giờ</button>
      </div>
      <div className="toollist-grid">
        {tools.map((group, idx) => (
          <div className="toollist-col" key={group.group}>
            <div className="toollist-group-title">{group.group}</div>
            <div className="toollist-items">
              {group.items.map((tool, i) => (
                <div className="toollist-item" key={tool.label}>
                  {getIcon(tool.icon)}
                  <span className="toollist-label">{tool.label}</span>
                  {tool.badge && <span className="toollist-badge">{tool.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolList;
