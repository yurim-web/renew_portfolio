import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/web_design.css";

const WebDesign = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 제목 애니메이션
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 카드들 순차 등장 애니메이션
    if (gridRef.current) {
      const cards = cardRefs.current.filter(Boolean);

      // 초기 상태 설정
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.8,
      });

      // 카드들이 순차적으로 나타나는 애니메이션
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // 모달 열기 함수
  const openModal = (project: any) => {
    setSelectedImage(project.image);
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // 스크롤 방지
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedProject(null);
    document.body.style.overflow = "unset"; // 스크롤 복원
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  const web_design_projects = [
    {
      id: 1,
      title: "웹사이트 디자인",
      description:
        "제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP.js와 React를 활용해 동적인 사용자 경험을 구현했습니 다.",
      image: require("../assets/design_img/에드모아_웹.png"),
      tech_stack: ["HTML", "CSS", "Javascript", "Gsap.js", "React"],
      year: "2024.12",
      link: "https://github.com/groundplace-clone",
      category: "클론코딩",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "모던한 쇼핑몰 웹사이트를 Next.js와 TypeScript로 개발했습니다. 반응형 디자인과 최적화된 사용자 경험을 제공합니다.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      year: "2024.11",
      link: "https://github.com/ecommerce-platform",
      category: "웹사이트",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "개인 포트폴리오 웹사이트를 React와 GSAP을 활용해 인터랙티브한 애니메이션과 함께 제작했습니다.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      tech_stack: ["React", "GSAP", "CSS3", "JavaScript"],
      year: "2024.10",
      link: "https://github.com/portfolio-website",
      category: "포트폴리오",
    },
    {
      id: 4,
      title: "Restaurant Landing Page",
      description:
        "레스토랑을 위한 랜딩 페이지를 제작했습니다. 음식 사진과 메뉴를 효과적으로 보여주는 디자인을 적용했습니다.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech_stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      year: "2024.09",
      link: "https://github.com/restaurant-landing",
      category: "랜딩페이지",
    },
    {
      id: 5,
      title: "Dashboard Admin Panel",
      description:
        "관리자 대시보드를 React와 Chart.js를 활용해 데이터 시각화와 함께 제작했습니다.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      tech_stack: ["React", "Chart.js", "Material-UI", "Node.js"],
      year: "2024.08",
      link: "https://github.com/admin-dashboard",
      category: "대시보드",
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "개인 블로그 플랫폼을 Next.js와 MDX를 활용해 마크다운 기반 콘텐츠 관리 시스템을 구축했습니다.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      tech_stack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      year: "2024.07",
      link: "https://github.com/blog-platform",
      category: "블로그",
    },
  ];

  return (
    <section ref={sectionRef} className="web_design_section">
      <div className="web_design_container">
        <h1 ref={titleRef} className="web_design_title">
          WEB DESIGN.
        </h1>

        <div ref={gridRef} className="web_design_grid">
          {web_design_projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="web_design_card"
              onClick={() => openModal(project)}
            >
              <div className="web_design_card_image_container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="web_design_card_image"
                />
                <div className="web_design_card_overlay">
                  <div className="web_design_card_info">
                    <h3 className="web_design_card_title">{project.title}</h3>
                    <p className="web_design_card_description">
                      {project.description}
                    </p>
                    <div className="web_design_card_tech_stack">
                      {project.tech_stack.map((tech, techIndex) => (
                        <span key={techIndex} className="web_design_tech_pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="web_design_card_meta">
                      <span className="web_design_card_year">
                        {project.year}
                      </span>
                      <span className="web_design_card_category">
                        {project.category}
                      </span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="web_design_card_link"
                    >
                      VIEW PROJECT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && selectedProject && (
        <div className="web_design_modal" onClick={closeModal}>
          <div
            className="web_design_modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="web_design_modal_close" onClick={closeModal}>
              ×
            </button>
            <div className="web_design_modal_image_container">
              <img
                src={selectedImage}
                alt={selectedProject.title}
                className="web_design_modal_image"
              />
            </div>
            <div className="web_design_modal_info">
              <h3 className="web_design_modal_title">
                {selectedProject.title}
              </h3>
              <p className="web_design_modal_description">
                {selectedProject.description}
              </p>
              <div className="web_design_modal_tech_stack">
                {selectedProject.tech_stack.map(
                  (tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="web_design_modal_tech_pill"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="web_design_modal_meta">
                <span className="web_design_modal_year">
                  {selectedProject.year}
                </span>
                <span className="web_design_modal_category">
                  {selectedProject.category}
                </span>
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="web_design_modal_link"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebDesign;
