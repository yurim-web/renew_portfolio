import '../styles/main_section.css';

const Main = () => {
  return (
    <main className="main">
      <section id="main" className="main_section">
        <div className="blur blur_1" />
        <div className="blur blur_2" />
        <div className="blur blur_3" />
        <div className="blur blur_4" />
        <div className="main_container">
          <h1 className="main_title">
            YURIM'S
            <br />
            PORTFOLIO
          </h1>
          <p className="main_description">
            디자인부터 프론트엔드 개발까지, 화면의 처음과 끝을 책임지는 개발자 이유림입니다.
            <br />
            사용자 경험을 중시하며 깔끔하고 효율적인 코드를 작성합니다.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
