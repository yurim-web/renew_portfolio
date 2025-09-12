import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/work.css";

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // 카드들 애니메이션
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const work_categories = [
    {
      id: 1,
      title: "01 WEB DESIGN",
      projects: ["그랑핸드", "힌스", "마켓컬리", "한울 모랑모랑"],
      bgColor: "#ffffff",
      hoverImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "02 UX DESIGN(APP)",
      projects: ["TRIPLENS", "워키도키", "WKTI"],
      bgColor: "#ffffff",
      hoverImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "03 GRAPHIC DESIGN",
      projects: ["EPIK 랜딩페이지", "밀키스 제로 상세페이지"],
      bgColor: "#ffffff",
      hoverImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "04 MOTION DESIGN",
      projects: ["KIAMA 모션 그래픽"],
      bgColor: "#ffffff",
      hoverImage:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section ref={sectionRef} className="work_section">
      <div className="work_container">
        <h1 ref={titleRef} className="work_title">
          Work.
        </h1>

        <div className="work_grid">
          {work_categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="work_card"
              style={
                {
                  backgroundColor: category.bgColor,
                  "--hover-image": `url(${category.hoverImage})`,
                } as React.CSSProperties
              }
            >
              <h2 className="work_card_title">{category.title}</h2>
              <ul className="work_project_list">
                {category.projects.map((project, projectIndex) => (
                  <li key={projectIndex} className="work_project_item">
                    {project}
                  </li>
                ))}
              </ul>
              <div className="work_cursor_icon">
                <img src="/hover_icn.svg" alt="hover cursor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
