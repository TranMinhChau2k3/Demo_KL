import React, { useState } from 'react';
import './OcrSettings.css';

const languages = [
  'Tiếng Việt', 'English', '中文', '日本語', '한국어', 'Français', 'Deutsch', 'Español', 'Русский'
];
const filters = [
  'No Filter', 'Remove Background', 'Sharpen', 'Grayscale'
];

function OcrSettings() {
  const [selectedLang, setSelectedLang] = useState('Tiếng Việt');
  const [selectedFilter, setSelectedFilter] = useState('No Filter');

  return (
    <section className="ocr-settings-row">
      <div className="ocr-settings-box">
        <div className="ocr-settings-title">
          <span style={{marginRight: '8px'}}><svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#222" strokeWidth="2"/><path d="M9 5v4l3 2" stroke="#222" strokeWidth="2"/></svg></span>
          Các cài đặt tuỳ chọn
        </div>
        <div className="ocr-settings-group">
          <label className="ocr-settings-label">Ngôn ngữ gốc của tập tin của bạn</label>
          <div className="ocr-settings-desc">Để đạt được kết quả tốt nhất, hãy chọn tất cả các ngôn ngữ có trong file của bạn.</div>
          <select className="ocr-settings-select" value={selectedLang} onChange={e => setSelectedLang(e.target.value)}>
            {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </select>
        </div>
        <div className="ocr-settings-group">
          <label className="ocr-settings-label">Áp dụng bộ lọc: <span title="Giải thích bộ lọc" style={{color:'#1976d2', cursor:'pointer'}}>ⓘ</span></label>
          <select className="ocr-settings-select" value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)}>
            {filters.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <div className="ocr-pdf-box">
        <div className="ocr-pdf-title">Trình chuyển đổi PDF</div>
        <div className="ocr-pdf-desc">
          Hiện tại chúng tôi hỗ trợ chuyển đổi tập tin có định dạng hình ảnh thành văn bản sau: JPG thành văn bản, PNG thành văn bản, TIFF thành văn bản, SVG thành văn bản, BMP thành văn bản, WEBP thành văn bản, và nhiều hơn nữa!
        </div>
      </div>
    </section>
  );
}

export default OcrSettings;
