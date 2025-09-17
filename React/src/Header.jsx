import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="oc-header">
      <div className="oc-header-bar">
        {/* Logo bên trái */}
        <div className="oc-logo" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img src="https://www.online-convert.com/favicon-32x32.png" alt="logo" style={{height: '28px'}} />
          <span style={{fontWeight: 'bold', color: '#222', fontSize: '1.35em', lineHeight: '1'}}>
            <span style={{color: '#009e4f'}}>ONLINE</span>-<span style={{color: '#222'}}>CON</span><span style={{color: '#009e4f'}}>VERT</span><span style={{color: '#222'}}>.com</span>
          </span>
        </div>
        {/* Menu ở giữa */}
        <nav className="oc-nav">
          <a href="#">Tất cả các công cụ</a>
          <a href="#">Hình ảnh sang văn bản</a>
          <a href="#">Giá cả</a>
          <a href="#">Trợ giúp</a>
          <a href="#">VI</a>
        </nav>
        {/* Nút bên phải */}
        <div className="oc-header-actions">
          <button className="oc-login">Đăng nhập</button>
          <button className="oc-register">Đăng ký</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
