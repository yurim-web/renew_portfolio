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
  link: string;
  github_link?: string;
  tech_stack?: string[];
  image: string;
}

export interface ProfessionalProject {
  id: number;
  project_name: string;
  period: string;
  role: string;
  tech_stack: string[];
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
    title: "PORTFOLIO",
    subtitle: "Groundplace 클론코딩",
    bgColor: "#fecaca",
    textColor: "#1e293b",
    content:
      "Groundplace 제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP.js와 React를 활용해 동적인 사용자 경험을 구현했습니다.",
    year: "2024",
    period: "2024.12.16 ~ 2024.12.20",
    participation: "개인 100%",
    link: "https://yurim-web.github.io/imele_clone/",
    github_link: "https://github.com/yurim-web/imele_clone",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "WEB DESIGN",
    subtitle: "Groundplace 클론코딩",
    bgColor: "#fed7aa",
    textColor: "#1e293b",
    content:
      "Groundplace 제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP.js와 React를 활용해 동적인 사용자 경험을 구현했습니다.",
    year: "2024.12",
    period: "2024.12.16 ~ 2024.12.20",
    participation: "개인 100%",
    link: "https://github.com/groundplace-clone",
    github_link: "https://github.com/yurim-web/groundplace-clone",
    tech_stack: ["HTML", "CSS", "Javascript", "Gsap.js", "React"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "MOBILE APP",
    subtitle: "WeatherTracker",
    bgColor: "#fef3c7",
    textColor: "#1e293b",
    content:
      "실시간 날씨 정보를 제공하는 모바일 앱을 React Native로 개발했습니다. 사용자 친화적인 인터페이스와 정확한 날씨 데이터를 제공합니다.",
    year: "2024.11",
    period: "2024.11.01 ~ 2024.11.15",
    participation: "개인 100%",
    link: "https://github.com/yurim-web/weather-tracker",
    github_link: "https://github.com/yurim-web/weather-tracker",
    tech_stack: ["React Native", "JavaScript", "API", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "UI/UX DESIGN",
    subtitle: "FitTracker 모바일 앱",
    bgColor: "#dcfce7",
    textColor: "#1e293b",
    content:
      "피트니스 트래킹 모바일 앱의 UI/UX 디자인과 프로토타입을 Figma를 활용하여 제작했습니다. 사용자 경험을 중점으로 설계했습니다.",
    year: "2024.10",
    period: "2024.10.01 ~ 2024.10.20",
    participation: "개인 100%",
    link: "https://figma.com/fittracker-design",
    github_link: "https://github.com/yurim-web/fittracker-design",
    tech_stack: ["Figma", "Adobe XD", "Principle", "Sketch"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "BRANDING",
    subtitle: "Creative Identity",
    bgColor: "#dbeafe",
    textColor: "#1e293b",
    content:
      "브랜드 아이덴티티와 로고 디자인을 통해 시각적 커뮤니케이션의 힘을 보여주는 프로젝트입니다. 일관성 있는 브랜드 경험을 제공합니다.",
    year: "2024.09",
    period: "2024.09.01 ~ 2024.09.25",
    participation: "개인 100%",
    link: "https://behance.net/creative-identity",
    github_link: "https://github.com/yurim-web/creative-identity",
    tech_stack: ["Illustrator", "Photoshop", "After Effects", "InDesign"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "MOTION GRAPHICS",
    subtitle: "Dynamic Visuals",
    bgColor: "#e9d5ff",
    textColor: "#1e293b",
    content:
      "애니메이션과 모션 그래픽을 통해 생동감 있는 시각적 스토리텔링을 구현했습니다. 브랜드의 감정을 전달하는 움직임을 디자인했습니다.",
    year: "2024.08",
    period: "2024.08.01 ~ 2024.08.30",
    participation: "개인 100%",
    link: "https://vimeo.com/motion-graphics",
    github_link: "https://github.com/yurim-web/motion-graphics",
    tech_stack: ["After Effects", "Cinema 4D", "Blender", "Premiere Pro"],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
];

export const professional_projects: ProfessionalProject[] = [
  {
    id: 1,
    project_name: "E-commerce Platform",
    period: "2024.03 – 2024.05",
    role: "Frontend Developer",
    tech_stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    description:
      "대규모 전자상거래 플랫폼의 프론트엔드 개발을 담당했습니다. 사용자 경험 최적화와 성능 향상에 중점을 두었습니다.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    view_link: "https://example.com/project1",
    github_link: "https://github.com/example/project1",
    demo_link: "https://demo.example.com/project1",
  },
  {
    id: 2,
    project_name: "Mobile Banking App",
    period: "2024.01 – 2024.03",
    role: "Full Stack Developer",
    tech_stack: ["React Native", "Express.js", "PostgreSQL", "AWS"],
    description:
      "금융 서비스 모바일 애플리케이션 개발에 참여했습니다. 보안과 사용자 편의성을 동시에 고려한 설계를 진행했습니다.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    view_link: "https://example.com/project2",
    github_link: "https://github.com/example/project2",
    demo_link: "https://demo.example.com/project2",
  },
  {
    id: 3,
    project_name: "Data Analytics Dashboard",
    period: "2023.11 – 2024.01",
    role: "Frontend Developer",
    tech_stack: ["Vue.js", "D3.js", "Python", "FastAPI"],
    description:
      "실시간 데이터 분석 대시보드 개발을 담당했습니다. 복잡한 데이터를 직관적으로 시각화하는 인터페이스를 구현했습니다.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    view_link: "https://example.com/project3",
    github_link: "https://github.com/example/project3",
    demo_link: "https://demo.example.com/project3",
  },
];
