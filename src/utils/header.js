// 헤더 스크롤 효과 처리
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header_container');

  if (!header) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    header.classList.add('header_scrolled');
  } else {
    header.classList.remove('header_scrolled');
  }
});
