import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StrengthContents from './StrengthContents';
import '../../styles/skills.css';

// 이미지 import
import htmlImg from '../../assets/skill_img/html.png';
import cssImg from '../../assets/skill_img/css.png';
import javascriptImg from '../../assets/skill_img/javascript.png';
import reactImg from '../../assets/skill_img/react.png';
import nextImg from '../../assets/skill_img/next.png';
import gsapImg from '../../assets/skill_img/gsap.png';
import gitImg from '../../assets/skill_img/git.png';
import githubImg from '../../assets/skill_img/github.png';
import sourcetreeImg from '../../assets/skill_img/sourcetree.png';
import notionImg from '../../assets/skill_img/notion_2.png';
import figmaImg from '../../assets/skill_img/figma_2.png';
import photoshopImg from '../../assets/skill_img/photoshop.png';
import illustratorImg from '../../assets/skill_img/illustrator.png';
import typescriptImg from '../../assets/skill_img/typescript.png';
import confluenceImg from '../../assets/skill_img/confluence.png';
import cafe24Img from '../../assets/skill_img/cafe24.png';

gsap.registerPlugin(ScrollTrigger);

const skillData = [
  {
    contents:
      '시맨틱 마크업과 웹 표준·접근성을 준수한 HTML 구조를 설계합니다. 다양한 디바이스 환경을 고려한 견고한 마크업을 빠르게 작성합니다.',
    skill: 'HTML',
    img: htmlImg,
  },
  {
    contents:
      'Flexbox, Grid를 활용한 복잡한 레이아웃과 애니메이션을 구현합니다. 디자인 시안을 픽셀 단위로 재현하며 JavaScript 인터랙션과 결합한 동적 UI 표현에 강점이 있습니다.',
    skill: 'CSS',
    img: cssImg,
  },
  {
    contents:
      'DOM 제어와 이벤트 처리를 기반으로 슬라이드, 메뉴, 스크롤 인터랙션 등 실무 수준의 동적 기능을 구현합니다.',
    skill: 'Javascript',
    img: javascriptImg,
  },
  {
    contents:
      '인터페이스와 타입 정의로 코드 안정성을 높이고, 런타임 오류를 사전에 방지하는 타입 안전한 개발을 실무에서 적용하고 있습니다.',
    skill: 'TypeScript',
    img: typescriptImg,
  },
  {
    contents:
      '컴포넌트 기반으로 UI를 구조화하고, useState·useEffect·useRef 등 기본 훅을 활용해 상태 관리와 사이드 이펙트를 처리합니다.',
    skill: 'React',
    img: reactImg,
  },
  {
    contents:
      'Next.js를 활용해 페이지 라우팅과 기본적인 프로젝트 구조를 설계할 수 있으며, 꾸준히 학습을 이어가고 있습니다.',
    skill: 'Next.js',
    img: nextImg,
  },
  {
    contents:
      'ScrollTrigger와 Timeline을 활용해 스크롤 기반 애니메이션과 시퀀스 인터랙션을 구현합니다. 다수의 실무·개인 프로젝트에 적용한 경험이 있습니다.',
    skill: 'Gsap.js',
    img: gsapImg,
  },

  {
    contents:
      '브랜치 전략과 커밋 컨벤션 기반으로 버전을 관리하고, 실무 협업 환경에서 Git을 일상적으로 사용하고 있습니다.',
    skill: 'Git',
    img: gitImg,
  },
  {
    contents:
      '브랜치 전략과 커밋 컨벤션 기반으로 버전을 관리하고, 실무 협업 환경에서 GitHub을 일상적으로 사용하고 있습니다.',
    skill: 'Github',
    img: githubImg,
  },
  {
    contents: 'SourceTree를 활용한 Git GUI 환경에서 직관적인 버전 관리와 브랜치 작업이 가능합니다.',
    skill: 'SourceTree',
    img: sourcetreeImg,
  },
  {
    contents: '노션을 이용해 메모 및 아이디어 기록이나 해야할 일을 관리할 수 있습니다.',
    skill: 'Notion',
    img: notionImg,
  },
  {
    contents:
      'Confluence를 활용한 팀 문서 작성 및 프로젝트 협업이 가능합니다. 실무 환경에서 팀원들과 문서를 공유하고 관리한 경험이 있습니다.',
    skill: 'Confluence',
    img: confluenceImg,
  },
  {
    contents: '와이어프레임과 프로토타입 제작, 협업을 위한 디자인 작업이 가능합니다.',
    skill: 'Figma',
    img: figmaImg,
  },
  {
    contents:
      '사진 보정, 합성, 상세페이지, SNS디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다.',
    skill: 'Photoshop',
    img: photoshopImg,
  },
  {
    contents:
      '간단한 캐릭터 디자인, 로고 디자인 등 깔끔하고 돋보이는 백터 디자인을 제작할 수 있습니다.',
    skill: 'Illustrator',
    img: illustratorImg,
  },
  {
    contents:
      'Cafe24 호스팅 환경에서 웹사이트 배포 및 관리, 도메인 설정 등 서버 운영이 가능합니다.',
    skill: 'Cafe24',
    img: cafe24Img,
  },
];

const StrengthContentsBox = ({ activeSkill }: { activeSkill: string | null }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // 초기 애니메이션 설정
    const validCards = cardsRef.current.filter(Boolean);
    if (validCards.length > 0) {
      gsap.set(validCards, {
        rotationY: 60,
        opacity: 0,
        scale: 0.9,
        y: 80,
        z: -100,
      });
    }

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
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 15%',
            scrub: 1.2,
            toggleActions: 'play none none reverse',
          },
        });

        // 부드러운 회전 효과
        gsap.to(card, {
          rotationX: 2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
            toggleActions: 'play none none reverse',
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
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 20%',
          scrub: 1.5,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!activeSkill) return;

    // 활성 스킬에 따른 카드 애니메이션
    const activeIndex = skillData.findIndex(skill => skill.skill === activeSkill);
    if (activeIndex !== -1 && cardsRef.current[activeIndex]) {
      gsap.to(cardsRef.current[activeIndex], {
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: 'power2.out',
      });

      // 다른 카드들은 살짝 축소
      cardsRef.current.forEach((card, index) => {
        if (index !== activeIndex && card) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.7,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    } else {
      // 모든 카드를 원래 상태로
      gsap.to(cardsRef.current.filter(Boolean), {
        scale: 1,
        rotationY: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [activeSkill]);

  return (
    <div ref={containerRef} className="strength_content_container">
      {skillData.map((skill, index) => (
        <div
          key={skill.skill}
          ref={el => (cardsRef.current[index] = el)}
          className="strength_card_wrapper"
        >
          <StrengthContents contents={skill.contents} skill={skill.skill} img={skill.img} />
        </div>
      ))}
    </div>
  );
};

export default StrengthContentsBox;
