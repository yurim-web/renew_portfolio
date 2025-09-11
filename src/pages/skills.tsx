import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StrengthContentsBox from "../common/box/StrengthContentsBox";
import StrenthToggleBox from "../common/box/StrenthToggleBox";
import "../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSkillChange = (skill: string) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // 제목 애니메이션 - 스크롤에 따라 부드럽게 나타남
    gsap.fromTo(
      titleRef.current,
      {
        x: -100,
        opacity: 0,
        scale: 0.8,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // 섹션 전체 애니메이션 - 스크롤에 따라 페이드인
    gsap.fromTo(
      sectionRef.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <article ref={sectionRef} className="strength">
      <h1 ref={titleRef} className="strength_title">
        Strength.
      </h1>
      <StrenthToggleBox
        activeSkill={activeSkill}
        onSkillChange={handleSkillChange}
      />
      <StrengthContentsBox activeSkill={activeSkill} />
    </article>
  );
};

export default Skills;
