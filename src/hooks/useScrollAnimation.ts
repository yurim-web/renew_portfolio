import { useEffect } from 'react';

/**
 * About 섹션의 스크롤 기반 애니메이션을 관리하는 커스텀 훅
 *
 * - IntersectionObserver로 요소가 뷰포트에 진입하면 페이드인 + 슬라이드업
 * - 정보 목록(info_list) 항목에 마우스 호버 시 색상·위치 인터랙션
 * - About 섹션 최초 로드 시 부드러운 페이드인 효과
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.about_title, .about_image, .about_text, .about_info, .skills_logos'
    );

    animatedElements.forEach(el => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(30px)';
      htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    const infoItems = document.querySelectorAll('.info_list li');
    infoItems.forEach(item => {
      item.addEventListener('mouseenter', function (this: HTMLElement) {
        this.style.color = '#007bff';
        this.style.transform = 'translateX(5px)';
      });
      item.addEventListener('mouseleave', function (this: HTMLElement) {
        this.style.color = '#555555';
        this.style.transform = 'translateX(0)';
      });
    });

    const aboutSection = document.querySelector('.about_section') as HTMLElement | null;
    if (aboutSection) {
      aboutSection.style.opacity = '0';
      aboutSection.style.transition = 'opacity 1s ease';
      setTimeout(() => {
        aboutSection.style.opacity = '1';
      }, 300);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
