import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/contact.css";

// EmailJS는 나중에 설정
// import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // const { is_dark_mode } = useTheme(); // 다크모드는 CSS로 처리

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 전체 컨테이너 애니메이션 - 아래에서 위로 자연스럽게 올라오기
    if (sectionRef.current) {
      gsap.fromTo(
        ".contact_container",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="contact_section">
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
                    href="https://github.com/yurim-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_link"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="contact_social_icon"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
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

                {/* Thank you 메시지 */}
                <div className="contact_thank_you">
                  <p>
                    Thank you <span>😊</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 오른쪽 - QR 코드 */}
            <div className="contact_qr_section">
              <div className="contact_qr_container">
                <a
                  href="https://open.kakao.com/o/sjeSbVTh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_qr_link"
                >
                  <div className="contact_qr_code">
                    <img
                      src="./assets/kakao.jpg"
                      alt="카카오톡 QR 코드"
                      className="contact_qr_image"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 저작권 표시 - 화면 맨 아래 */}
      <div className="contact_copyright_section">
        <p className="contact_copyright_text">
          © 2025 yurim. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Contact;
