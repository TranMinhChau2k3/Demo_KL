import React from 'react';
import './ExtensionPromo.css';

function ExtensionPromo() {
  return (
    <section className="extension-promo-section">
      <div className="extension-row">
        <div className="extension-box">
          <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Chrome" className="extension-logo" />
          <div className="extension-title">Available in the Chrome Web Store</div>
          <div className="extension-rating">
            <span className="star">★</span> 300,000+ người dùng
          </div>
        </div>
        <div className="extension-box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Firefox_logo_2017.svg" alt="Firefox" className="extension-logo" />
          <div className="extension-title">GET THE ADD-ON</div>
          <div className="extension-rating">
            <span className="star">★</span> 14,000+ người dùng
          </div>
        </div>
        <div className="extension-box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg" alt="Edge" className="extension-logo" />
          <div className="extension-title">Available in the Edge Add-ons Store</div>
          <div className="extension-rating">
            <span className="star">★</span> 30,000+ người dùng
          </div>
        </div>
      </div>
      <div className="extension-actions">
        <button className="bookmark-btn">Đánh dấu trang</button>
        <button className="like-btn"><span style={{marginRight:'6px'}}>👍</span>Thích 106k</button>
        <button className="share-btn">Chia Sẻ 2k</button>
        <button className="tweet-btn">Tweet</button>
      </div>
      <div className="extension-rating-summary">
        <div className="rating-title">
          Đánh giá công cụ này
          <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
          3.7 / 5 - 67,780 các bình chọn
        </div>
        <div className="rating-desc">
          Bạn cần chuyển đổi và tải xuống ít nhất 1 tập tin để đưa ra phản hồi
        </div>
      </div>
    </section>
  );
}

export default ExtensionPromo;
