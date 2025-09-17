import React, { useState } from 'react';
import './Banner.css';
import FormatSelect from './FormatSelect';

function Banner() {
  const [fromFormat, setFromFormat] = useState('...');
  const [toFormat, setToFormat] = useState('...');
  return (
    <section className="banner-ocr">
      <div className="banner-left">
        <h1>Chuyển đổi hình ảnh sang văn bản</h1>
        <p>
          Chuyển đổi hình ảnh thành văn bản. Trích xuất văn bản từ hình ảnh, ảnh chụp và các hình ảnh khác. Trình chuyển đổi OCR miễn phí này cho phép bạn lấy văn bản từ tập tin hình ảnh và chuyển nó thành tập tin TXT văn bản thuần túy.
        </p>
      </div>
      <div className="banner-right">
        <div className="convert-row">
          <span className="convert-label">Convert</span>
          <FormatSelect label={fromFormat} onSelect={setFromFormat} />
          <span className="convert-label">to</span>
          <FormatSelect label={toFormat} onSelect={setToFormat} />
        </div>
        <div className="convert-icons">
          {/* Các icon file minh họa, dùng SVG hoặc img */}
          <span className="icon-file">GIF</span>
          <span className="icon-file">JPG</span>
          <span className="icon-file">PDF</span>
          <span className="icon-file">PNG</span>
          <span className="icon-file">DOCX</span>
          <span className="icon-file">TIFF</span>
          <span className="icon-file">XLS</span>
          <span className="icon-file">Aa</span>
        </div>
      </div>
    </section>
  );
}

export default Banner;
