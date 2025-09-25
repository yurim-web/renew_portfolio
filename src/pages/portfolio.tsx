import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/portfolio.css";
import { portfolio_sections } from "../data/portfolioData";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const portfolioItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

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

    // YSL 스타일 세로 쌓기 애니메이션 (데스크톱에서만)
    if (horizontalContainerRef.current && !isMobile) {
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
      scrollTriggerRef.current = ScrollTrigger.create({
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

        // 모바일에서는 양옆 애니메이션 제거
        if (!isMobile) {
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
        } else {
          // 모바일에서는 단순히 opacity만 적용
          if (leftColumn) {
            gsap.set(leftColumn, { opacity: 1 });
          }
          if (rightColumn) {
            gsap.set(rightColumn, { opacity: 1 });
          }
        }
      });
    } else if (horizontalContainerRef.current && isMobile) {
      // 모바일에서는 모든 아이템을 단순히 보이도록 설정
      const portfolioItems = portfolioItemsRef.current.filter(Boolean);
      portfolioItems.forEach((item, index) => {
        if (item) {
          gsap.set(item, { opacity: 1, x: "0%", y: "0%", zIndex: index + 1 });
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

  // 특정 프로젝트로 이동하는 함수 (전역에서 접근 가능하도록)
  useEffect(() => {
    (window as any).scrollToPortfolioProject = (projectName: string) => {
      const projectIndex = portfolio_sections.findIndex(
        (section) => section.subtitle === projectName
      );

      if (projectIndex !== -1 && scrollTriggerRef.current) {
        // ScrollTrigger의 실제 스크롤 위치 계산
        const trigger = scrollTriggerRef.current;
        const triggerStart = trigger.start;
        const triggerEnd = trigger.end;

        // 해당 프로젝트의 progress 계산
        const targetProgress = projectIndex / (portfolio_sections.length - 1);

        // ScrollTrigger 범위 내에서의 스크롤 위치 계산
        const scrollDistance =
          triggerStart + targetProgress * (triggerEnd - triggerStart);

        // 부드럽게 스크롤
        window.scrollTo({
          top: scrollDistance,
          behavior: "smooth",
        });
      }
    };

    return () => {
      delete (window as any).scrollToPortfolioProject;
    };
  }, []);

  return (
    <section ref={sectionRef} className="portfolio_section">
      <div className="portfolio_container">
        {isMobile ? (
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: null, // 왼쪽 화살표 비활성화
            }}
            pagination={{ clickable: true }}
            className="portfolio_swiper"
          >
            {portfolio_sections.map((section, index) => (
              <SwiperSlide key={section.id}>
                <div
                  className="portfolio_item"
                  data-project={section.subtitle}
                  style={{
                    backgroundColor: section.bgColor,
                    color: section.textColor,
                  }}
                >
                  <div className="portfolio_content">
                    {/* 왼쪽 컬럼 - 메인 콘텐츠 */}
                    <div className="portfolio_left_column">
                      <div className="portfolio_year">{section.year}</div>
                      <h2 className="portfolio_section_title">
                        {section.title}
                      </h2>

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

                      {/* 프로젝트 타입 */}
                      <div className="portfolio_info_row">
                        <span className="portfolio_info_label">타입</span>
                        <span className="portfolio_info_value">
                          {section.type}
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
                            <span
                              key={techIndex}
                              className="portfolio_tech_pill"
                            >
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="portfolio_tech_icon"
                              />
                              <span className="portfolio_tech_name">
                                {tech.name}
                              </span>
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
                        {section.github_link && (
                          <a
                            href={section.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio_github_button"
                          >
                            GITHUB
                          </a>
                        )}
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
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            ref={horizontalContainerRef}
            className="portfolio_horizontal_container"
          >
            {portfolio_sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => (portfolioItemsRef.current[index] = el)}
                className="portfolio_item"
                data-project={section.subtitle}
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

                    {/* 프로젝트 타입 */}
                    <div className="portfolio_info_row">
                      <span className="portfolio_info_label">타입</span>
                      <span className="portfolio_info_value">
                        {section.type}
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
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="portfolio_tech_icon"
                            />
                            <span className="portfolio_tech_name">
                              {tech.name}
                            </span>
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
                      {section.github_link && (
                        <a
                          href={section.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio_github_button"
                        >
                          GITHUB
                        </a>
                      )}
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
        )}
      </div>
    </section>
  );
};

export default Portfolio;
