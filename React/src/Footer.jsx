import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-logo-block">
          <img src="https://www.online-convert.com/favicon-32x32.png" alt="logo" className="footer-logo" />
          <span className="footer-brand">
            <span style={{color:'#222', fontWeight:'bold'}}>ONLINE</span><span style={{color:'#009e4f', fontWeight:'bold'}}>-CONVERT</span><span style={{color:'#222'}}>.com</span>
          </span>
          <div className="footer-desc">Không cần cài đặt phần mềm.</div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-title">Các giải pháp</div>
            <div className="footer-link">Giáo dục</div>
            <div className="footer-link">Integrations</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Online-Convert</div>
            <div className="footer-link">Trợ giúp</div>
            <div className="footer-link">Blog</div>
            <div className="footer-link">Các định dạng file</div>
            <div className="footer-link">Báo chí</div>
            <div className="footer-link">Trạng thái</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Công ty</div>
            <div className="footer-link">Thông tin</div>
            <div className="footer-link">Nghề nghiệp</div>
            <div className="footer-link">Tính bền vững</div>
            <div className="footer-link">Bảo mật</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Sản phẩm</div>
            <div className="footer-link">Giá cả</div>
            <div className="footer-link">Các nhà phát triển</div>
          </div>
        </div>
      </div>
      <div className="footer-breadcrumb">
        <span className="footer-home">🏠</span>
        <span className="footer-breadcrumb-text">Chuyển đổi hình ảnh sang văn bản</span>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">
          Sản xuất tại Radolfzell (Đức) bởi <span className="footer-green">QaamGo Media GmbH</span>
        </div>
        <div className="footer-links">
          <span>Điều khoản sử dụng</span>
          <span>Chính sách bảo mật</span>
          <span>Ấn hiệu</span>
          <span>Liên hệ với chúng tôi</span>
          <span>VI <span className="footer-globe">🌐</span></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
