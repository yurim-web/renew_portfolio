import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StrengthToggle from "../button/StrengthToggle";
import "../../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

interface StrenthToggleBoxProps {
  activeSkill: string | null;
  onSkillChange: (skill: string) => void;
}

const StrenthToggleBox: React.FC<StrenthToggleBoxProps> = ({
  activeSkill,
  onSkillChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const togglesRef = useRef<(HTMLDivElement | null)[]>([]);

  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Gsap.js",
    "API",
    "Git/Github",
    "Notion",
    "Photoshop",
    "Illustrator",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // 토글 버튼들 초기 설정
    gsap.set(togglesRef.current, {
      x: -50,
      opacity: 0,
      scale: 0.8,
    });

    // 스크롤 트리거로 토글 버튼들이 순차적으로 나타나는 애니메이션
    gsap.to(togglesRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="strength_toggle_container">
      {skills.map((skill, index) => (
        <div
          key={skill}
          ref={(el) => (togglesRef.current[index] = el)}
          className="toggle_wrapper"
        >
          <StrengthToggle
            strength={skill}
            isActive={activeSkill === skill}
            onClick={onSkillChange}
          />
        </div>
      ))}
    </div>
  );
};

export default StrenthToggleBox;
