import React from "react";
import "../styles/contact.css";

// EmailJS는 나중에 설정
// import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // const { is_dark_mode } = useTheme(); // 다크모드는 CSS로 처리

  return (
    <>
      <section className="contact_section">
        {/* 배경 블러 효과 */}
        <div className="contact_blur_1"></div>
        <div className="contact_blur_2"></div>
        <div className="contact_blur_3"></div>
        <div className="contact_blur_4"></div>

        <div className="contact_container">
          <div className="contact_content">
            {/* 왼쪽 - 연락처 정보 */}
            <div className="contact_info">
              <div className="contact_title">
                <span className="contact_sparkle">✨</span>
                <h2>Contact.</h2>
              </div>
              <p className="contact_subtitle">I HOPE YOU ENJOY MY PROJECT</p>

              <div className="contact_details">
                <div className="contact_item">
                  <span className="contact_icon">📞</span>
                  <span>010-4054-5152</span>
                </div>

                <div className="contact_item">
                  <span className="contact_icon">✉️</span>
                  <span>lyl5152@naver.com</span>
                </div>

                <div className="contact_social">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_link"
                  >
                    <span className="contact_social_icon">🐱</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_link"
                  >
                    <span className="contact_social_icon">📷</span>
                  </a>
                </div>

                <div className="contact_mail_section">
                  <a
                    href="mailto:lyl5152@naver.com"
                    className="contact_mail_btn"
                  >
                    <span>메일보내기</span>
                    <div className="mail_btn_icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 오른쪽 - QR 코드 */}
            <div className="contact_qr_section">
              <div className="contact_qr_container">
                <div className="contact_qr_code">
                  <div className="contact_qr_pattern"></div>
                  <div className="contact_qr_icon">
                    <span>💬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 감사 인사 */}
          <div className="contact_thank_you">
            <p>
              Thank you <span>😊</span>
            </p>
          </div>

          {/* 저작권 표시 */}
          <div className="contact_copyright_section">
            <p className="contact_copyright_text">
              © 2025 yurim. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
