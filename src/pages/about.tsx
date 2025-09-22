import "../styles/info_section.css";
import "../utils/main.js";
const About = () => {
  return (
    // ABOUT ME 섹션
    <section id="about" className="about_section">
      <div className="about_container">
        <h2 className="about_title">ABOUT ME</h2>
        <div className="about_content">
          <div className="">
            <img src="/myimg.png" alt="프로필사진" className="profile_img" />
          </div>
          <div className="about_text">
            <h3 className="name">이유림</h3>
            <p className="greeting">
              {/* 안녕하세요! 웹 개발에 열정을 가진 개발자 이유림입니다. */}
              사용자 경험을 최우선으로 생각하는 웹 퍼블리셔 이유림입니다!
            </p>
            <p className="description">
              {/* HTML, CSS, JavaScript, React 등 다양한 기술을 활용하여 웹사이트의
              레이아웃과 디자인을 구성하고, 웹 표준과 웹 접근성을 준수하여 모든
              사용자들이 웹사이트를 손쉽게 이용할 수 있도록 합니다. */}
               HTML, CSS, JavaScript, Figma등 다양한 툴을 활용하여 웹사이트의 레이아웃과 디자인을 구성하고,
            웹 표준과 웹 접근성을 준수하여  사용자들이 웹사이트를 손쉽게 이용할 수 있도록 합니다.
            디자인과 개발의 경계를 넘나들며 직관적이고 세련된 웹을 구현합니다.
            </p>
            <p className="description">
              저는 개발뿐만 아니라 기획과 사용자 경험에도 관심이 많아, 서비스
              운영에 대해 적극적인 자세로 임하고 있습니다.
            </p>
            <p className="description">
              새로운 것을 배우는 것 또한 늘 환영합니다!
            </p>
            <p className="description">
              맡은 일에 애정을 가지고 책임감 있게 업무를 수행합니다. 주어진
              역할에서 가치를 창출하며, 제 역량을 충분히 발휘하고자 합니다.
            </p>
            {/* <button className="view_more_btn">
              <span>자기소개 더보기</span>
              <div className="btn_icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button> */}
          </div>
        </div>

        <div className="about_info">
          <div className="info_column">
            <h4 className="info_title">WORK EXPERIENCE</h4>
            <ul className="info_list">
              <li>2025.04 - NOW (주)청명종합광고 웹 퍼블리셔 & 프론트엔드 개발자</li>
              <li>2024.01 - 2024.08 (주)쇼엠 웹 디자이너</li>
              <li>2022.03 - 2023.06 (주)오라코퍼레이션 콘텐츠 디자이너</li>
            </ul>
          </div>
          <div className="info_column">
            <h4 className="info_title">LICENSE & EDUCATION</h4>
            <ul className="info_list">
              <li>2024.10 - 2024.12 웹(퍼블리셔) 프론트엔드 (javascript, React) 양성과정 350시간 수료</li>
              <li>2019.03 - 2022.08 (인천캠)청운대학교 멀티미디어학과 졸업</li>
              <li>2023.09 컴퓨터그래픽스운용기능사 자격증 취득</li>
              <li>2023.09 TOEIC Speaking Test(120)</li>
              <li>2020.09 GTQ 포토샵 1급 취득</li>
              <li>2012.03 디지털정보활용능력(DIAT) 스프레드시트 고급 취득</li>
              <li>2011.07 디지털정보활용능력(DIAT) 워드프로세서 초급 취득</li>
              <li>2010.03 정보기술자격(ITQ) 한글파워포인트 취득</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="infinite_scroll_container">
        <div className="infinite_scroll_text">
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
};

export default About;
