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
      title: "Addmoa 기업 홈페이지",
      description:
        "남색 계열의 안정감을 기반으로 브랜드 신뢰성을 강화한 기업 웹사이트 디자인",
      image: require("../assets/design_img/addmoa_web.png"),
      tech_stack: [
        "#기업웹사이트",
        "#신뢰감디자인",
        "#남색톤",
        "#모던UI",
        "#심플레이아웃",
      ],
      year: "2024",
      link: "https://github.com/groundplace-clone",
      category: "웹 디자인",
    },
    {
      id: 2,
      title: "뷰티 정보 홈페이지",
      description:
        "따뜻한 갈색 톤을 활용해 전문성과 친근함을 동시에 전달한 반응형 뷰티 정보 사이트",
      image: require("../assets/design_img/makeup_web.png"),
      tech_stack: [
        "#뷰티웹디자인",
        "#갈색톤",
        "#따뜻한분위기",
        "#자연스러움",
        "#반응형디자인",
      ],
      year: "2024",
      link: "https://github.com/ecommerce-platform",
      category: "웹 디자인",
    },
    {
      id: 3,
      title: "LH 전세임대 안내 사이트",
      description:
        "연두·파랑 컬러를 조화롭게 적용해 공공기관 특유의 신뢰성과 접근성을 높인 웹사이트 디자인",
      image: require("../assets/design_img/lh_web.png"),
      tech_stack: [
        "#공공기관웹사이트",
        "#연두파랑톤",
        "#신뢰성있는디자인",
        "#안정감",
        "#반응형웹디자인",
      ],
      year: "2024",
      link: "https://github.com/portfolio-website",
      category: "웹 디자인",
    },
    {
      id: 4,
      title: "퍼스널 컬러 테스트 앱",
      description:
        "파스텔 톤의 감각적인 UI로 사용자 경험을 향상시킨 퍼스널 컬러 진단 앱 디자인",
      image: require("../assets/design_img/color_app.png"),
      tech_stack: [
        "#파스텔톤디자인",
        "#감각적인UI",
        "#컬러테스트앱",
        "#밝고산뜻함",
        "#뷰티앱디자인",
      ],
      year: "2024",
      link: "https://github.com/restaurant-landing",
      category: "앱 디자인",
    },
    {
      id: 5,
      title: "전기요금 계산기 앱",
      description:
        "직관적인 그래프와 카드형 레이아웃으로 정보 가독성을 극대화한 전기요금 계산 앱 디자인",
      image: require("../assets/design_img/elec_app.png"),
      tech_stack: [
        "#심플UI",
        "#직관적인디자인",
        "#정보시각화",
        "#친근한컬러",
        "#유틸리티앱",
      ],
      year: "2024",
      link: "https://github.com/admin-dashboard",
      category: "앱 디자인",
    },
    {
      id: 6,
      title: "햇살론 대출 안내 앱",
      description:
        "오렌지 톤의 따뜻한 감성을 담아 서민 금융 상품을 신뢰감 있게 안내하는 금융 앱 디자인",
      image: require("../assets/design_img/sun_app.png"),
      tech_stack: [
        "#오렌지톤디자인",
        "#금융앱UI",
        "#따뜻한분위기",
        "#정보전달중심",
        "#서민대출안내",
      ],
      year: "2024",
      link: "https://github.com/blog-platform",
      category: "앱 디자인",
    },
    {
      id: 7,
      title: "블로그 게시글 배너 디자인",
      description:
        "시각적 집중도를 높여 콘텐츠 몰입과 클릭 유도를 강화한 블로그 포스팅용 배너 디자인",
      image: require("../assets/design_img/banner_1_1.png"),
      tech_stack: [
        "#배너디자인",
        "#콘텐츠강화",
        "#가독성높음",
        "#심플비주얼",
        "#블로그이미지",
      ],
      year: "2024",
      link: "https://github.com/blog-platform",
      category: "배너 디자인",
    },
    {
      id: 8,
      title: "온라인 광고 배너 디자인",
      description:
        "브랜드 인지도를 높이고 전환율 향상을 목표로 제작된 온라인 프로모션 배너 디자인",
      image: require("../assets/design_img/banner_2.png"),
      tech_stack: [
        "#광고배너디자인",
        "#프로모션용",
        "#시선집중",
        "#브랜드홍보",
        "#마케팅배너",
      ],
      year: "2024",
      link: "https://github.com/blog-platform",
      category: "배너 디자인",
    },
    {
      id: 9,
      title: "구글 애즈 배너 디자인",
      description:
        "명확한 메시지와 임팩트 있는 비주얼로 광고 효과를 극대화한 구글 애즈 캠페인 배너",
      image: require("../assets/design_img/banner_3.png"),
      tech_stack: [
        "#구글애즈",
        "#광고배너",
        "#임팩트비주얼",
        "#마케팅디자인",
        "#정보전달효과적",
      ],
      year: "2024",
      link: "https://github.com/blog-platform",
      category: "배너 디자인",
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
                    <div className="web_design_click_hint">CLICK</div>
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
              <div className="web_design_modal_meta">
                <span className="web_design_modal_year">
                  {selectedProject.year}
                </span>
                <span className="web_design_modal_category">
                  {selectedProject.category}
                </span>
              </div>
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
