import '../styles/main_section.css';
import '../utils/main.js';
const Main = () => {
    return (  
        <main className="main">
          {/* <!-- 메인 소개 섹션 --> */}
          <section id="main" className="main_section">
            <div className="blur blur_1"></div>
            <div className="blur blur_2"></div>
            <div className="blur blur_3"></div>
            <div className="blur blur_4"></div>
            <div className="main_container">
              <h1 className="main_title">YURIM'S<br />PORTFOLIO</h1>
              <p className="main_description">
                안녕하세요. 저는 웹 개발에 열정을 가진 개발자 이유림입니다.<br />
                사용자 경험을 중시하며 깔끔하고 효율적인 코드를 작성하는 것을 목표로
                합니다!
              </p>
            </div>
          </section> 
        </main>
    );
}
 
export default Main;