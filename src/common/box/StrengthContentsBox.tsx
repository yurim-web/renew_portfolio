import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StrengthContents from "./StrengthContents";
import "../../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

const StrengthContentsBox = ({
  activeSkill,
}: {
  activeSkill: string | null;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const skillData = [
    {
      contents:
        "유효성 문제 없이 모든 사람들이 편하게 이용할 수 있는 HTML 구조를 간단하고 빠르게 구성 합니다.",
      skill: "HTML",
      img: require("../../assets/skill_img/html.png"),
    },
    {
      contents:
        "다양한 디자인과 애니메이션을 구성하며 Javascript와 연동 할 수 있는 화려한 디자인 제작 가능합니다.",
      skill: "CSS",
      img: require("../../assets/skill_img/css.png"),
    },
    {
      contents:
        "조건문 및 반복문을 이용해 슬라이드, 메뉴, 스크롤 애니메이션과 같은 다양한 동적 기능을 구현 가능합니다.",
      skill: "Javascript",
      img: require("../../assets/skill_img/javascript.png"),
    },
    {
      contents:
        "React의 기본 개념인 컴포넌트 기반 아키텍처를 활용하여 UI를 구조화하고, useState, useEffect와 같은 훅을 사용하여 상태 및 라이프사이클 관리 가능합니다.",
      skill: "React",
      img: require("../../assets/skill_img/react.png"),
    },
    {
      contents:
        "React를 기반으로 페이지 라우팅 및 동적 콘텐츠 처리를 간편하게 관리, 다양한 페이지 전환과 API 연동을 처리 가능합니다.",
      skill: "Next.js",
      img: require("../../assets/skill_img/nextjs.png"),
    },
    {
      contents:
        "스크롤 애니메이션, 타임라인 애니메이션 등 다양한 동적 효과를 GSAP을 이용해 구성 가능합니다.",
      skill: "Gsap.js",
      img: require("../../assets/skill_img/gsap.png"),
    },
    {
      contents: "메일, 지도, 채팅 등 다양한 API를 구현 가능 합니다.",
      skill: "API",
      img: require("../../assets/skill_img/api.jpg"),
    },
    {
      contents: "github를 연결하기 위한 git 로컬 및 글로벌 설정이 가능합니다.",
      skill: "Git",
      img: require("../../assets/skill_img/git.png"),
    },
    {
      contents:
        "git 명령어를 활용한 gitHub 프로젝트 관리를 진행할 수 있습니다.",
      skill: "Github",
      img: require("../../assets/skill_img/github.png"),
    },
    {
      contents:
        "노션을 이용해 메모 및 아이디어 기록이나 해야할 일을 관리할 수 있습니다.",
      skill: "Notion",
      img: require("../../assets/skill_img/notion.png"),
    },
    {
      contents:
        "사진 보정, 합성, 상세페이지, SNS디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다.",
      skill: "Photoshop",
      img: require("../../assets/skill_img/photoshop.png"),
    },
    {
      contents:
        "간단한 캐릭터 디자인, 로고 디자인 등 깔끔하고 돋보이는 백터 디자인을 제작할 수 있습니다.",
      skill: "Illustrator",
      img: require("../../assets/skill_img/illustrator.png"),
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // 초기 애니메이션 설정
    gsap.set(cardsRef.current, {
      rotationY: 60,
      opacity: 0,
      scale: 0.9,
      y: 80,
      z: -100,
    });

    // 각 카드별로 개별 스크롤 트리거 애니메이션
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // 메인 3D 애니메이션
        gsap.to(card, {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          y: 0,
          z: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 15%",
            scrub: 1.2,
            toggleActions: "play none none reverse",
          },
        });

        // 부드러운 회전 효과
        gsap.to(card, {
          rotationX: 2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            end: "top 25%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // 전체 컨테이너 애니메이션
    gsap.fromTo(
      containerRef.current,
      {
        y: 30,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!activeSkill) return;

    // 활성 스킬에 따른 카드 애니메이션
    const activeIndex = skillData.findIndex(
      (skill) => skill.skill === activeSkill
    );
    if (activeIndex !== -1 && cardsRef.current[activeIndex]) {
      gsap.to(cardsRef.current[activeIndex], {
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: "power2.out",
      });

      // 다른 카드들은 살짝 축소
      cardsRef.current.forEach((card, index) => {
        if (index !== activeIndex && card) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.7,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    } else {
      // 모든 카드를 원래 상태로
      gsap.to(cardsRef.current, {
        scale: 1,
        rotationY: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [activeSkill]);

  return (
    <div ref={containerRef} className="strength_content_container">
      {skillData.map((skill, index) => (
        <div
          key={skill.skill}
          ref={(el) => (cardsRef.current[index] = el)}
          className="strength_card_wrapper"
        >
          <StrengthContents
            contents={skill.contents}
            skill={skill.skill}
            img={skill.img}
          />
        </div>
      ))}
    </div>
  );
};

export default StrengthContentsBox;
