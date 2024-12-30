import React from "react";
import Slider from "react-slick";
import "./styles.css";

// Import hình ảnh
import LoginImage from "./images/login.png";
import RegisterImage from "./images/register.png";
import ProfileImage from "./images/profile.png";
import ReminderImage from "./images/reminder.png";
import MedicineImage from "./images/medicine.png";
import ChatImage from "./images/chat.png";
import ScanTextImage from "./images/scan-text.png";
import StatisticsImage from "./images/statistics.png";

const features = [
  {
    title: "Quản lý nhắc nhở",
    description: "Thiết lập nhắc nhở uống thuốc và theo dõi lịch trình hằng ngày.",
    image: ReminderImage,
  },
  {
    title: "Quản lý thuốc",
    description: "Theo dõi thông tin thuốc, liều lượng và chỉ định sử dụng.",
    image: MedicineImage,
  },
  {
    title: "Chat AI",
    description: "Giao tiếp với AI để đặt câu hỏi và nhận hỗ trợ y tế cơ bản.",
    image: ChatImage,
  },
  {
    title: "Scan văn bản",
    description: "Chuyển đổi văn bản từ hình ảnh, chẳng hạn như đơn thuốc.",
    image: ScanTextImage,
  },
  {
    title: "Thống kê",
    description: "Hiển thị biểu đồ và thông tin về việc uống thuốc và nhắc nhở.",
    image: StatisticsImage,
  },
  {
    title: "Đăng nhập",
    description: "Cho phép người dùng đăng nhập để truy cập các chức năng cá nhân.",
    image: LoginImage,
  },
  {
    title: "Đăng ký",
    description: "Người dùng mới có thể tạo tài khoản để sử dụng ứng dụng.",
    image: RegisterImage,
  },
  {
    title: "Hồ sơ cá nhân",
    description: "Quản lý thông tin cá nhân như tên, email, số điện thoại và mật khẩu.",
    image: ProfileImage,
  },
];

const Features = () => {
  // Cấu hình Slider
  const settings = {
    dots: true, // Hiển thị các dấu chấm điều hướng
    infinite: true, // Vòng lặp vô hạn
    speed: 500, // Tốc độ chuyển đổi giữa các slide (ms)
    slidesToShow: 3, // Hiển thị 3 ảnh cùng lúc
    slidesToScroll: 1, // Kéo qua 1 slide mỗi lần
    autoplay: true, // Tự động chạy
    autoplaySpeed: 3000, // Tự động chuyển sau 3 giây
    responsive: [
      {
        breakpoint: 768, // Với màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 1, // Hiển thị 1 ảnh
        },
      },
    ],
  };

  return (
    <div className="features-container">
      <h2>Danh sách chức năng</h2>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <div className="feature-info">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Features;
