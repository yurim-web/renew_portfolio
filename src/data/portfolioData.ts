export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  content: string;
  year: string;
  period: string;
  participation: string;
  type: "반응형" | "웹용";
  link: string;
  github_link?: string;
  tech_stack?: { name: string; icon: string }[];
  image: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface ProfessionalProject {
  id: number;
  project_name: string;
  period: string;
  role: string;
  tech_stack: TechItem[];
  description: string;
  image: string;
  view_link?: string;
  github_link?: string;
  demo_link?: string;
}

export const portfolio_sections: PortfolioItem[] = [
  // groundplace 포트폴리오
  {
    id: 1,
    title: "Learning Project",
    subtitle: "Groundplace",
    bgColor: "#fecaca",
    textColor: "#1e293b",
    content:
      "Groundplace 제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP.js와 React를 활용해 동적인 사용자 경험을 구현했습니다.",
    year: "2024",
    period: "2024.12.16 ~ 2024.12.20",
    participation: "개인 100%",
    type: "반응형",
    link: "https://yurim-web.github.io/groundplace_clone/",
    github_link: "https://github.com/yurim-web/groundplace-clone",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "Javascript", icon: "/assets/skill_img/javascript.png" },
      { name: "Gsap.js", icon: "/assets/skill_img/gsap.png" },
      { name: "React", icon: "/assets/skill_img/react.png" },
    ],
    image: "/assets/portfolio_img/groundplace_img.png",
  },
  {
    id: 2,
    title: "Learning Project",
    subtitle: "IMELE",
    bgColor: "#fed7aa",
    textColor: "#1e293b",
    content:
      "IMILE 공식 쇼핑몰 사이트를 클론 코딩하여 만든 작품입니다. 반응형 웹 디자인을 다양한 크기에서 최적화된 사용자 환경을 제공했으며, GSAP.js를 활용해 애니메이션적인 효과를 구현했습니다.",
    year: "2025",
    period: "2025.01.02 ~ 2025.01.06",
    participation: "개인 100%",
    type: "반응형",
    link: "https://yurim-web.github.io/imele_clone/",
    github_link: "https://github.com/yurim-web/imele_clone",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "Javascript", icon: "/assets/skill_img/javascript.png" },
      { name: "Gsap.js", icon: "/assets/skill_img/gsap.png" },
    ],
    image: "/assets/portfolio_img/imele_img.png",
  },
  {
    id: 3,
    title: "Learning Project",
    subtitle: "SAINT LAURENT",
    bgColor: "#fef3c7",
    textColor: "#1e293b",
    content:
      "입생로랑(YSL) 공식 홈페이지를 새롭게 기획한 포트폴리오 사이트입니다. GSAP.js를 활용한 다양한 애니메이션 효과로 세련된 디자인을 강조했습니다.",
    year: "2024",
    period: "2024.11.15 ~ 2024.11.2",
    participation: "개인 100%",
    type: "웹용",
    link: "https://yurim-web.github.io/YSL_portfolio_/",
    github_link: "https://github.com/yurim-web/YSL_portfolio_",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "Javascript", icon: "/assets/skill_img/javascript.png" },
      { name: "Gsap.js", icon: "/assets/skill_img/gsap.png" },
    ],
    image: "/assets/portfolio_img/ysl_img.png",
  },
  {
    id: 4,
    title: "Learning Project",
    subtitle: "Waveyy",
    bgColor: "#dcfce7",
    textColor: "#1e293b",
    content:
      "Next.js와 영화·드라마 API를 활용해 기획하고 만든 영화,드라마 정보 사이트입니다.",
    year: "2024",
    period: "2024.12.01 ~ 2024.12.12",
    participation: "개인 100%",
    type: "반응형",
    link: "https://movie-api-portfolio.vercel.app/",
    github_link: "https://github.com/yurim-web/fittracker-design",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "React", icon: "/assets/skill_img/react.png" },
      { name: "Next.js", icon: "/assets/skill_img/next.png" },
      { name: "Javascript", icon: "/assets/skill_img/javascript.png" },
      { name: "API", icon: "/assets/skill_img/api.jpg" },
    ],
    image: "/assets/portfolio_img/waveyy_img.png",
  },
  {
    id: 5,
    title: "Learning Project",
    subtitle: "ToDo List",
    bgColor: "#dbeafe",
    textColor: "#1e293b",
    content:
      "할 일 목록을 관리할 수 있는 간단한 To-Do 리스트 웹입니다. React를 사용하여 구현되었으며, 직관적인 UI로 사용자가 할 일을 쉽게 추가, 수정, 삭제할 수 있습니다.",
    year: "2024",
    period: "2024.11.02 ~ 2024.11.05",
    participation: "개인 100%",
    type: "반응형",
    link: "https://yurim-web.github.io/TODOLIST_page/",
    github_link: "https://github.com/yurim-web/TODOLIST_page",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "React", icon: "/assets/skill_img/react.png" },
      { name: "Javascript", icon: "/assets/skill_img/javascript.png" },
      { name: "API", icon: "/assets/skill_img/api.jpg" },
    ],
    image: "/assets/portfolio_img/todolist_img.png",
  },
  {
    id: 6,
    title: "Learning Project",
    subtitle: "Apple",
    bgColor: "#e9d5ff",
    textColor: "#1e293b",
    content:
      "Apple 공식 사이트의 PC 버전을 클론 코딩하여 만든 작품입니다. React를 활용해 메인페이지를 구성했습니다.",
    year: "2024",
    period: "2024.10.29 ~ 2024.11.02",
    participation: "개인 100%",
    type: "웹용",
    link: "https://yurim-web.github.io/apple_clone_page2/",
    github_link: "https://github.com/yurim-web/apple_clone_page2",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "React", icon: "/assets/skill_img/react.png" },
      { name: "Javascript", icon: "/assets/skill_img/javascript.png" },
    ],
    image: "/assets/portfolio_img/apple_img.png",
  },
];

// Professional Projects
export const professional_projects: ProfessionalProject[] = [
  {
    id: 1,
    project_name: "Herzion Shop",
    period: "2025.04 – 2024.07",
    role: "Frontend Developer",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "JavaScript", icon: "/assets/skill_img/javascript.png" },
      { name: "Cafe24", icon: "/assets/skill_img/cafe24.png" },
    ],
    description:
      "Herzion Shop은 프로젝트 최종 결과물로, 프론트엔드 개발을 담당했습니다. 사용자 경험 최적화와 성능 향상에 중점을 두었습니다.",
    image: "/assets/professional_projects/herzion_banner.jpg",
    view_link: "https://herzionshop.cafe24.com/",
    github_link: "https://github.com/yurim-web/aribio_final_kor",
  },
  {
    id: 2,
    project_name: "ReportingX.",
    period: "2025.05 – 2025.08",
    role: "Frontend Developer",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "JavaScript", icon: "/assets/skill_img/javascript.png" },
      { name: "React", icon: "/assets/skill_img/react.png" },
    ],
    description:
      "RX. 회사 내부 사이트 개발을 담당했습니다. 사용자 경험 최적화와 성능 향상에 중점을 두었습니다.",
    image: "/assets/professional_projects/rx_banner.png",
    view_link: "https://mxrx.dev/",
    demo_link: "https://markx.dev/",
    github_link: "https://github.com/example/project2",
  },
  {
    id: 3,
    project_name: "스웨디시 뉴트라",
    period: "2024.07 – 2024.08",
    role: "Frontend Developer",
    tech_stack: [
      { name: "HTML", icon: "/assets/skill_img/html.png" },
      { name: "CSS", icon: "/assets/skill_img/css.png" },
      { name: "JavaScript", icon: "/assets/skill_img/javascript.png" },
      { name: "Cafe24", icon: "/assets/skill_img/cafe24.png" },
    ],
    description:
      "스웨디시 뉴트라 쇼핑몰 개발을 담당했습니다. 사용자 경험 최적화와 성능 향상에 중점을 두었습니다.",
    image: "/assets/professional_projects/swedish_banner.jpg",
    view_link: "https://swedishnutra.kr/",
    github_link: "https://github.com/yurim-web/swedishnutra_custom_code",
  },
];
