import { useEffect } from 'react';

/**
 * 헤더 스크롤 동작을 관리하는 커스텀 훅
 *
 * - 100px 이상 스크롤 시 배경 블러 효과 (header_scrolled)
 * - 200px 이상 스크롤 시 헤더 숨김 (header_hidden)
 * - 마우스를 화면 상단 40px 영역에 올리면 헤더 다시 표시
 */
const useHeaderScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header_container');
      if (!header) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        header.classList.add('header_scrolled');
      } else {
        header.classList.remove('header_scrolled');
      }

      if (scrollTop > 200) {
        header.classList.add('header_hidden');
      } else {
        header.classList.remove('header_hidden');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const header = document.querySelector('.header_container');
      if (!header) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 200) {
        if (e.clientY <= 40) {
          header.classList.remove('header_hidden');
        } else if (!header.matches(':hover')) {
          header.classList.add('header_hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export default useHeaderScroll;
