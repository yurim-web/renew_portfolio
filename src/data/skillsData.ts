/**
 * 스킬 데이터 (Single Source of Truth)
 *
 * StrengthToggleBox(버튼 목록)와 StrengthContentsBox(카드 목록) 모두 이 파일을 참조합니다.
 * 스킬을 추가/수정/삭제할 때 이 파일만 수정하면 됩니다.
 */
import cafe24Img from '../assets/skill_img/cafe24.png';
import confluenceImg from '../assets/skill_img/confluence.svg';
import cssImg from '../assets/skill_img/css.png';
import figmaImg from '../assets/skill_img/figma_2.png';
import gitImg from '../assets/skill_img/git.png';
import githubImg from '../assets/skill_img/github.png';
import gsapImg from '../assets/skill_img/gsap.png';
import htmlImg from '../assets/skill_img/html.png';
import illustratorImg from '../assets/skill_img/illustrator.png';
import javascriptImg from '../assets/skill_img/javascript.png';
import nextImg from '../assets/skill_img/next.png';
import notionImg from '../assets/skill_img/notion_2.png';
import photoshopImg from '../assets/skill_img/photoshop.png';
import reactImg from '../assets/skill_img/react.png';
import sourcetreeImg from '../assets/skill_img/sourcetree.png';
import typescriptImg from '../assets/skill_img/typescript.png';

export interface SkillItem {
  name: string;
  description: string;
  img: string;
}

export const skillList: SkillItem[] = [
  {
    name: 'HTML',
    description:
      '시맨틱 마크업과 웹 표준·접근성을 준수한 HTML 구조를 설계합니다. 다양한 디바이스 환경을 고려한 견고한 마크업을 빠르게 작성합니다.',
    img: htmlImg,
  },
  {
    name: 'CSS',
    description:
      'Flexbox, Grid를 활용한 복잡한 레이아웃과 애니메이션을 구현합니다. 디자인 시안을 픽셀 단위로 재현하며 JavaScript 인터랙션과 결합한 동적 UI 표현에 강점이 있습니다.',
    img: cssImg,
  },
  {
    name: 'Javascript',
    description:
      'DOM 제어와 이벤트 처리를 기반으로 슬라이드, 메뉴, 스크롤 인터랙션 등 실무 수준의 동적 기능을 구현합니다.',
    img: javascriptImg,
  },
  {
    name: 'TypeScript',
    description:
      '인터페이스와 타입 정의로 코드 안정성을 높이고, 런타임 오류를 사전에 방지하는 타입 안전한 개발을 실무에서 적용하고 있습니다.',
    img: typescriptImg,
  },
  {
    name: 'React',
    description:
      '컴포넌트 기반으로 UI를 구조화하고, useState·useEffect·useRef 등 기본 훅을 활용해 상태 관리와 사이드 이펙트를 처리합니다.',
    img: reactImg,
  },
  {
    name: 'Next.js',
    description:
      'Next.js를 활용해 페이지 라우팅과 기본적인 프로젝트 구조를 설계할 수 있으며, 꾸준히 학습을 이어가고 있습니다.',
    img: nextImg,
  },
  {
    name: 'Gsap.js',
    description:
      'ScrollTrigger와 Timeline을 활용해 스크롤 기반 애니메이션과 시퀀스 인터랙션을 구현합니다. 다수의 실무·개인 프로젝트에 적용한 경험이 있습니다.',
    img: gsapImg,
  },
  {
    name: 'Git',
    description:
      '브랜치 전략과 커밋 컨벤션 기반으로 버전을 관리하고, 실무 협업 환경에서 Git을 일상적으로 사용하고 있습니다.',
    img: gitImg,
  },
  {
    name: 'Github',
    description:
      '브랜치 전략과 커밋 컨벤션 기반으로 버전을 관리하고, 실무 협업 환경에서 GitHub을 일상적으로 사용하고 있습니다.',
    img: githubImg,
  },
  {
    name: 'SourceTree',
    description:
      'SourceTree를 활용한 Git GUI 환경에서 직관적인 버전 관리와 브랜치 작업이 가능합니다.',
    img: sourcetreeImg,
  },
  {
    name: 'Notion',
    description: '노션을 이용해 메모 및 아이디어 기록이나 해야할 일을 관리할 수 있습니다.',
    img: notionImg,
  },
  {
    name: 'Confluence',
    description:
      'Confluence를 활용한 팀 문서 작성 및 프로젝트 협업이 가능합니다. 실무 환경에서 팀원들과 문서를 공유하고 관리한 경험이 있습니다.',
    img: confluenceImg,
  },
  {
    name: 'Figma',
    description: '와이어프레임과 프로토타입 제작, 협업을 위한 디자인 작업이 가능합니다.',
    img: figmaImg,
  },
  {
    name: 'Photoshop',
    description:
      '사진 보정, 합성, 상세페이지, SNS디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다.',
    img: photoshopImg,
  },
  {
    name: 'Illustrator',
    description:
      '간단한 캐릭터 디자인, 로고 디자인 등 깔끔하고 돋보이는 백터 디자인을 제작할 수 있습니다.',
    img: illustratorImg,
  },
  {
    name: 'Cafe24',
    description:
      'Cafe24 호스팅 환경에서 웹사이트 배포 및 관리, 도메인 설정 등 서버 운영이 가능합니다.',
    img: cafe24Img,
  },
];

export const skillNames = skillList.map(skill => skill.name);
