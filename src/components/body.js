import React from "react";
import "./styles.css";
import QRCode from "./images/qr-code.png"; // Thay bằng mã QR của bạn
import AppImage from "./images/app-image.png"; // Thay bằng ảnh của bạn

const Body = () => {
  return (
    <div className="app-body">
      {/* Phần ảnh bên trái */}
      <div className="image-container">
        <img src={AppImage} alt="Mobile App Preview" />
      </div>

      {/* Phần tải ứng dụng bên phải */}
      <div className="download-container">
        <h2>Tải ứng dụng ngay!</h2>
        <p>Truy cập TikTok và khám phá ngay!</p>
        <a
          href="https://example.com/tiktok.apk"
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tải xuống APK
        </a>
        <div className="qr-code">
          <img src={QRCode} alt="QR Code" />
          <p>Quét mã QR để tải ứng dụng</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
