// 메인 페이지 인터랙션 처리
document.addEventListener('DOMContentLoaded', function () {
  // 스킬 로고 호버 효과
  const skillLogos = document.querySelectorAll('.skill_logo');
  skillLogos.forEach(logo => {
    logo.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    logo.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // 스크롤 애니메이션 효과
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // 애니메이션을 적용할 요소들
  const animatedElements = document.querySelectorAll(
    '.about_title, .about_image, .about_text, .about_info, .skills_logos'
  );
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // 스킬 로고 개별 애니메이션
  const skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, observerOptions);

  skillLogos.forEach(logo => {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(20px)';
    logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    skillObserver.observe(logo);
  });

  // 정보 항목 호버 효과
  const infoItems = document.querySelectorAll('.info_list li');
  infoItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.color = '#007bff';
      this.style.transform = 'translateX(5px)';
    });

    item.addEventListener('mouseleave', function () {
      this.style.color = '#555555';
      this.style.transform = 'translateX(0)';
    });
  });
});

// 페이지 로드 시 부드러운 페이드인 효과
window.addEventListener('load', function () {
  const aboutSection = document.querySelector('.about_section');
  if (aboutSection) {
    aboutSection.style.opacity = '0';
    aboutSection.style.transition = 'opacity 1s ease';

    setTimeout(() => {
      aboutSection.style.opacity = '1';
    }, 300);
  }
});
