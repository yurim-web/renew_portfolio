import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/portfolio.css";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const portfolioItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

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

    // YSL 스타일 세로 쌓기 애니메이션
    if (horizontalContainerRef.current) {
      const portfolioItems = portfolioItemsRef.current.filter(Boolean);

      // 화면 크기 확인 (useState로 관리)

      // 모든 섹션을 초기에 살짝 나온 상태로 설정 (각각 다른 위치에서)
      portfolioItems.forEach((item, index) => {
        if (item) {
          if (index === 0) {
            // 첫 번째 섹션은 완전히 보이도록
            gsap.set(item, { opacity: 1, x: "0%", y: "0%", zIndex: index + 1 });
          } else {
            if (isMobile) {
              // 모바일: 아래에서 위로 올라오는 애니메이션
              gsap.set(item, {
                opacity: 1,
                x: "0%",
                y: "100%", // 아래에서 시작
                zIndex: index + 1,
              });
            } else {
              // 데스크톱: 오른쪽에서 왼쪽으로 슬라이드
              const offsetPercentage = 85 + index * 2.5; // 87.5%, 90%, 92.5%, 95%, 97.5% 순으로
              gsap.set(item, {
                opacity: 1,
                x: `${offsetPercentage}%`,
                y: "0%",
                zIndex: index + 1,
              });
            }
          }
        }
      });

      // 초기 상태를 강제로 유지하기 위한 지연
      setTimeout(() => {
        portfolioItems.forEach((item, index) => {
          if (item && index > 0) {
            if (isMobile) {
              gsap.set(item, { y: "100%" });
            } else {
              const offsetPercentage = 85 + index * 2.5;
              gsap.set(item, { x: `${offsetPercentage}%` });
            }
          }
        });
      }, 100);

      // 전체 포트폴리오 섹션을 고정하고 내부에서 애니메이션 진행
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${portfolioItems.length * window.innerHeight}px`, // 섹션 개수만큼 스크롤 거리
        pin: true,
        pinSpacing: true, // true로 변경하여 다음 섹션으로 넘어갈 수 있도록 함
        onUpdate: (self) => {
          const progress = self.progress;

          // 각 섹션이 순서대로 완전히 나타나도록 애니메이션
          portfolioItems.forEach((item, index) => {
            if (!item) return; // null 체크 추가

            // 첫 번째 섹션은 항상 완전히 보이도록 고정
            if (index === 0) {
              gsap.set(item, { x: "0%", y: "0%" });
              return;
            }

            // 각 섹션별로 활성화되는 시점 계산 (더 명확한 구간 설정)
            const sectionStart = (index - 1) / (portfolioItems.length - 1);
            const sectionEnd = index / (portfolioItems.length - 1);

            // 현재 진행률이 해당 섹션의 범위에 있는지 확인
            if (progress >= sectionStart && progress <= sectionEnd) {
              // 해당 섹션이 활성화되는 구간
              const sectionProgress =
                (progress - sectionStart) / (sectionEnd - sectionStart);

              if (isMobile) {
                // 모바일: 아래에서 위로 올라오는 애니메이션
                const yPosition = 100 * (1 - sectionProgress); // 100%에서 0%로 이동
                gsap.to(item, {
                  y: `${yPosition}%`,
                  duration: 0.1,
                  ease: "none",
                  overwrite: true,
                });
              } else {
                // 데스크톱: 오른쪽에서 왼쪽으로 슬라이드
                const startOffset = 85 + index * 2.5; // 각 섹션의 고유한 시작 위치
                const xPosition = startOffset * (1 - sectionProgress); // 시작 위치에서 0%로 이동
                gsap.to(item, {
                  x: `${xPosition}%`,
                  duration: 0.1,
                  ease: "none",
                  overwrite: true,
                });
              }
            } else if (progress < sectionStart) {
              // 아직 활성화되지 않은 섹션은 각자의 고유한 위치에서 살짝 나온 상태 유지
              if (isMobile) {
                gsap.set(item, { y: "100%" });
              } else {
                const startOffset = 85 + index * 2.5;
                gsap.set(item, { x: `${startOffset}%` });
              }
            } else {
              // 이미 완료된 섹션은 완전히 보이도록
              gsap.set(item, { x: "0%", y: "0%" });
            }
          });
        },
      });

      // 각 섹션의 콘텐츠 애니메이션
      portfolioItems.forEach((item, index) => {
        if (!item) return; // null 체크 추가

        const leftColumn = item.querySelector(".portfolio_left_column");
        const rightColumn = item.querySelector(".portfolio_right_column");

        if (leftColumn) {
          gsap.fromTo(
            leftColumn,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 1.5,
              ease: "power2.out",
              delay: 0.3,
              scrollTrigger: {
                trigger: item,
                start: "left 80%",
                end: "left 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (rightColumn) {
          gsap.fromTo(
            rightColumn,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              duration: 1.5,
              ease: "power2.out",
              delay: 0.5,
              scrollTrigger: {
                trigger: item,
                start: "left 80%",
                end: "left 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }

    // 화면 크기 변경 시 애니메이션 재설정
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1024;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        // 화면 크기가 변경되면 ScrollTrigger 새로고침
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const portfolio_sections = [
    {
      id: 1,
      title: "PORTFOLIO",
      subtitle: "My Creative Journey",
      bgColor: "#fecaca",
      textColor: "#1e293b",
      content:
        "창의적인 디자인과 개발의 여정을 담은 포트폴리오입니다. 다양한 프로젝트를 통해 성장한 과정을 보여드립니다.",
      year: "2024",
      period: "2024.01 ~ 2024.12",
      participation: "개인 100%",
      link: "https://github.com/your-portfolio",
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
      link: "https://github.com/weather-tracker",
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
      tech_stack: ["After Effects", "Cinema 4D", "Blender", "Premiere Pro"],
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section ref={sectionRef} className="portfolio_section">
      <div className="portfolio_container">
        <h1 ref={titleRef} className="portfolio_title">
          {/* PORTFOLIO. */}
        </h1>

        <div
          ref={horizontalContainerRef}
          className="portfolio_horizontal_container"
        >
          {portfolio_sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (portfolioItemsRef.current[index] = el)}
              className="portfolio_item"
              style={{
                backgroundColor: section.bgColor,
                color: section.textColor,
              }}
            >
              <div className="portfolio_content">
                {/* 왼쪽 컬럼 - 메인 콘텐츠 */}
                <div className="portfolio_left_column">
                  <div className="portfolio_year">{section.year}</div>
                  <h2 className="portfolio_section_title">{section.title}</h2>
                  <h3 className="portfolio_section_subtitle">
                    {section.subtitle}
                  </h3>

                  {/* 제작기간 */}
                  <div className="portfolio_info_row">
                    <span className="portfolio_info_label">제작기간</span>
                    <span className="portfolio_info_value">
                      {section.period}
                    </span>
                  </div>

                  {/* 참여도 */}
                  <div className="portfolio_info_row">
                    <span className="portfolio_info_label">참여도</span>
                    <span className="portfolio_info_value">
                      {section.participation}
                    </span>
                  </div>

                  {/* 내용 */}
                  <div className="portfolio_info_row">
                    <span className="portfolio_info_label">내용</span>
                    <span className="portfolio_info_value">
                      {section.content}
                    </span>
                  </div>

                  {section.tech_stack && (
                    <div className="portfolio_tech_stack">
                      {section.tech_stack.map((tech, techIndex) => (
                        <span key={techIndex} className="portfolio_tech_pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 링크 버튼 */}
                  <div className="portfolio_link_container">
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio_link_button"
                    >
                      LINK
                    </a>
                  </div>
                </div>

                {/* 오른쪽 컬럼 - 이미지 */}
                <div className="portfolio_right_column">
                  <div className="portfolio_image_container">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="portfolio_section_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
