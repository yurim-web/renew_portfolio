import StrengthContents from "./StrengthContents";
import "../../styles/skills.css";

const StrengthContentsBox = () => {
  return (
    <div className="strength_content_container">
      <StrengthContents
        contents={
          "유효성 문제 없이 모든 사람들이 편하게 이용할 수 있는 HTML 구조를 간단하고 빠르게 구성 합니다."
        }
        skill={"HTML"}
        img={"html.png"}
      />
      <StrengthContents
        contents={
          "다양한 디자인과 애니메이션을 구성하며 Javascript와 연동 할 수 있는 화려한 디자인 제작 가능합니다."
        }
        skill={"CSS"}
        img={"css.png"}
      />
      <StrengthContents
        contents={
          "조건문 및 반복문을 이용해 슬라이드, 메뉴, 스크롤 애니메이션과 같은 다양한 동적 기능을 구현 가능합니다."
        }
        skill={"Javascript"}
        img={"javascript.png"}
      />
      <StrengthContents
        contents={
          "React의 기본 개념인 컴포넌트 기반 아키텍처를 활용하여 UI를 구조화하고, useState, useEffect와 같은 훅을 사용하여 상태 및 라이프사이클 관리 가능합니다."
        }
        skill={"React"}
        img={"react.png"}
      />
      <StrengthContents
        contents={
          "React를 기반으로 페이지 라우팅 및 동적 콘텐츠 처리를 간편하게 관리, 다양한 페이지 전환과 API 연동을 처리 가능합니다."
        }
        skill={"Next.js"}
        img={"nextjs.png"}
      />
      <StrengthContents
        contents={
          "스크롤 애니메이션, 타임라인 애니메이션 등 다양한 동적 효과를 GSAP을 이용해 구성 가능합니다."
        }
        skill={"Gsap.js"}
        img={"gsap.png"}
      />
      <StrengthContents
        contents={"메일, 지도, 채팅 등 다양한 API를 구현 가능 합니다."}
        skill={"API"}
        img={"api.jpg"}
      />
      <StrengthContents
        contents={
          "github를 연결하기 위한 git 로컬 및 글로벌 설정이 가능합니다."
        }
        skill={"Git"}
        img={"git.png"}
      />
      <StrengthContents
        contents={
          "git 명령어를 활용한 gitHub 프로젝트 관리를 진행할 수 있습니다."
        }
        skill={"Github"}
        img={"github.png"}
      />

      <StrengthContents
        contents={
          "노션을 이용해 메모 및 아이디어 기록이나 해야할 일을 관리할 수 있습니다."
        }
        skill={"Notion"}
        img={"notion.png"}
      />
      <StrengthContents
        contents={
          "사진 보정, 합성, 상세페이지, SNS디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다."
        }
        skill={"Photoshop"}
        img={"photoshop.png"}
      />
      <StrengthContents
        contents={
          "간단한 캐릭터 디자인, 로고 디자인 등 깔끔하고 돋보이는 백터 디자인을 제작할 수 있습니다."
        }
        skill={"Illustrator"}
        img={"illustrator.png"}
      />
    </div>
  );
};

export default StrengthContentsBox;
