
import '../styles/info_section.css';
import '../utils/main.js';
const About = () => {
    return (
        // ABOUT ME 섹션
        <section id="about" className="about_section">
            <div className="about_container">
                <h2 className="about_title">ABOUT ME</h2>
                <div className="about_content">
                    <div className="about_image">
                        <img
                            src="images/profile.jpg"
                            alt="프로필사진"
                            className="profile_img"
                        />
                    </div>
                    <div className="about_text">
                        <h3 className="name">이유림</h3>
                        <p className="greeting">
                            안녕하세요! 웹 개발에 열정을 가진 개발자 이유림입니다.
                        </p>
                        <p className="description">
                            HTML, CSS, JavaScript, React 등 다양한 기술을 활용하여
                            웹사이트의 레이아웃과 디자인을 구성하고, 웹 표준과 웹 접근성을
                            준수하여 모든 사용자들이 웹사이트를 손쉽게 이용할 수 있도록
                            합니다.
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
                        <button className="view_more_btn">
                            <span>자기소개 더보기</span>
                            <div className="btn_icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M6 12L10 8L6 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="about_info">
                    <div className="info_column">
                        <h4 className="info_title">WORK EXPERIENCE</h4>
                        <ul className="info_list">
                            <li>2024.01 - NOW 프리랜서</li>
                            <li>2022.03 - 2023.12 웹 개발 회사</li>
                            <li>2021.01 - 2022.02 스타트업</li>
                        </ul>
                    </div>
                    <div className="info_column">
                        <h4 className="info_title">EDUCATION</h4>
                        <ul className="info_list">
                            <li>2020.06 - 2020.11 웹 개발 과정 수료</li>
                            <li>2016.03 - 2020.02 컴퓨터공학과 졸업</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_logos">
                    <div className="skill_logo">HTML5</div>
                    <div className="skill_logo">CSS3</div>
                    <div className="skill_logo">JavaScript</div>
                    <div className="skill_logo">React</div>
                    <div className="skill_logo">Node.js</div>
                    <div className="skill_logo">Git</div>
                    <div className="skill_logo">Figma</div>
                </div>
            </div>
        </section>
    );
}
 
export default About;