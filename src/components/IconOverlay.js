import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

// Tạo keyframes cho animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(30deg);
  }
`;

const IconOverlayWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px; /* Đổi từ right sang left */
  display: flex;
  flex-direction: column;
  gap: 10px;
  will-change: transform;
  z-index: 999; /* Đặt z-index để icon hiển thị phía trên mọi nội dung */

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px; /* Đổi từ right sang left */
    gap: 5px;
  }
`;


const IconLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #cf2e2e; /* Sử dụng màu xanh của Messenger */
  background: #fff;

  @media (max-width: 768px) {
    padding: 5px 10px; /* Điều chỉnh padding để biểu tượng nằm trong khung nhìn */
    box-shadow: none;
  }

  &:hover {
    transform: scale(1.1);
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    color: #cf2e2e; 
    animation: ${rotateAnimation} 2s linear infinite; /* Thêm animation cho biểu tượng */
    
    @media (max-width: 768px) {
      margin-right: 0px; /* Loại bỏ khoảng cách để vừa với màn hình nhỏ */
      width: 20px;
      height: 20px;
    }
  }

  .contact-name {
    font-size: 14px;
    font-weight: bold;
    color: #000;

    @media (max-width: 768px) {
      display: none; /* Ẩn văn bản trên thiết bị di động */
    }
  }
`;

const IconOverlay = () => {
  return (
    <IconOverlayWrapper>
      <IconLink href="https://www.facebook.com/NVH44260?mibextid=LQQJ4d">
        <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="icon" />
        <span className="contact-name">Liên hệ Messenger</span>
      </IconLink>
      <IconLink href="tel:0705645645">
        <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="icon" />
        <span className="contact-name">+0705645645</span>
      </IconLink>
    </IconOverlayWrapper>
  );
};

export default IconOverlay;
