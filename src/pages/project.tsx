import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/project.css';

const work_categories = [
  {
    id: 1,
    title: '01 Professional Projects',
    projects: ['Herzion Shop', 'ReportingX.', '스웨디시 뉴트라'],
    bgColor: '#ffffff',
    targetSection: 'professional',
  },
  {
    id: 2,
    title: '02 Learning Projects',
    projects: ['Groundplace', 'IMELE', 'SAINT LAURENT', 'Waveyy'],
    bgColor: '#ffffff',
    targetSection: 'portfolio',
  },
  {
    id: 3,
    title: '03 Web Design',
    projects: [
      'Addmoa 기업 홈페이지',
      '뷰티 정보 홈페이지',
      'LH 전세임대 안내 사이트',
      '퍼스널 컬러 테스트 앱',
      '전기요금 계산기 앱',
      '햇살론 대출 안내 앱',
      '블로그 게시글 배너 디자인',
      '온라인 광고 배너 디자인',
      '구글 애즈 배너 디자인',
    ],
    bgColor: '#ffffff',
    targetSection: 'web_design',
  },
];

const Project = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    // 화면 크기 확인 (태블릿 가로 모드도 포함)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 제목 애니메이션
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 100%', // Skills 섹션이 완전히 지나간 후 시작
            end: 'bottom 0%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

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
            ease: 'back.out(1.7)',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 100%', // Skills 섹션이 완전히 지나간 후 시작
              end: 'bottom 0%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // 특정 프로젝트로 스크롤하는 함수
  const scrollToSpecificProject = (projectName: string) => {
    // portfolio 섹션으로 먼저 이동
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // 약간의 지연 후 GSAP ScrollTrigger를 사용하여 해당 프로젝트로 이동
      setTimeout(() => {
        if (window.scrollToPortfolioProject) {
          window.scrollToPortfolioProject(projectName);
        }
      }, 800); // 스크롤 애니메이션이 완료될 때까지 충분한 시간 대기
    }
  };

  const renderCard = (category: (typeof work_categories)[0], index: number) => (
    <div
      key={category.id}
      ref={el => (cardsRef.current[index] = el)}
      className="work_card"
      style={{ backgroundColor: category.bgColor } as React.CSSProperties}
      onClick={() => {
        if (category.id === 2) {
          scrollToSpecificProject(category.projects[0]);
        } else {
          scrollToSection(category.targetSection);
        }
      }}
    >
      <h2 className="work_card_title">
        <span className="work_card_number">{category.title.split(' ')[0]}</span>
        <span className="work_card_text">{category.title.split(' ').slice(1).join(' ')}</span>
      </h2>
      <ul className="work_project_list">
        {category.projects.map((project, projectIndex) => (
          <li
            key={projectIndex}
            className="work_project_item"
            onClick={e => {
              e.stopPropagation();
              if (category.id === 2) {
                scrollToSpecificProject(project);
              } else {
                scrollToSection(category.targetSection);
              }
            }}
          >
            {project}
          </li>
        ))}
      </ul>
      <div className="work_cursor_icon">
        <img src={`${process.env.PUBLIC_URL}/hover_icn.svg`} alt="hover cursor" />
        <span className="work_cursor_text">click!</span>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="work_section">
      <div className="work_container">
        <h1 ref={titleRef} className="work_title">
          Project.
        </h1>

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            className="work_swiper"
          >
            {work_categories.map((category, index) => (
              <SwiperSlide key={category.id}>{renderCard(category, index)}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="work_grid">
            {work_categories.map((category, index) => renderCard(category, index))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
