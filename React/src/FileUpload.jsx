import React, { useRef } from 'react';
import './FileUpload.css';

function FileUpload() {
  const fileInput = useRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <section className="upload-section">
      <div className="upload-box">
        <div className="upload-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" stroke="#fff" strokeWidth="4"/><path d="M40 55V30M40 30L32 38M40 30l8 8" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="upload-text">Drop files or click here</div>
        <button className="upload-btn" onClick={handleClick}>
          <span style={{marginRight: '8px'}}>
            <svg width="20" height="20" fill="none"><path d="M4 10h12M10 4v12" stroke="#222" strokeWidth="2"/></svg>
          </span>
          Chọn file
          <span style={{marginLeft: '8px'}}>
            <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#222" strokeWidth="2"/></svg>
          </span>
        </button>
        <input type="file" ref={fileInput} style={{display: 'none'}} />
        <div className="upload-services">
          <span title="Thư mục"><svg width="20" height="20" fill="none"><rect x="3" y="7" width="14" height="10" rx="2" stroke="#fff" strokeWidth="2"/><path d="M3 7l2-4h10l2 4" stroke="#fff" strokeWidth="2"/></svg></span>
          <span title="Liên kết"><svg width="20" height="20" fill="none"><path d="M7 13l6-6" stroke="#fff" strokeWidth="2"/><rect x="2" y="10" width="8" height="8" rx="4" stroke="#fff" strokeWidth="2"/><rect x="10" y="2" width="8" height="8" rx="4" stroke="#fff" strokeWidth="2"/></svg></span>
          <span title="Google Drive"><svg width="20" height="20" fill="none"><polygon points="10,2 18,16 2,16" stroke="#fff" strokeWidth="2"/></svg></span>
          <span title="OneDrive"><svg width="20" height="20" fill="none"><ellipse cx="10" cy="10" rx="8" ry="6" stroke="#fff" strokeWidth="2"/></svg></span>
          <span title="Dropbox"><svg width="20" height="20" fill="none"><polygon points="10,2 18,8 10,14 2,8" stroke="#fff" strokeWidth="2"/></svg></span>
          <span title="Clipboard"><svg width="20" height="20" fill="none"><rect x="5" y="5" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/><path d="M8 2h4v4H8z" stroke="#fff" strokeWidth="2"/></svg></span>
        </div>
      </div>
      <div className="upload-actions">
        <button className="start-btn">BẮT ĐẦU <span style={{marginLeft: '6px'}}>&rarr;</span></button>
        <button className="sample-btn">+ THÊM FILE MẪU</button>
        <div className="upload-info">
          <span className="upload-count"><svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#222" strokeWidth="2"/><circle cx="9" cy="9" r="3" stroke="#222" strokeWidth="2"/></svg> 1</span>
          <span className="upload-timer"><svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#222" strokeWidth="2"/><path d="M9 5v4l3 2" stroke="#222" strokeWidth="2"/></svg> 30 s</span>
        </div>
      </div>
    </section>
  );
}

export default FileUpload;
