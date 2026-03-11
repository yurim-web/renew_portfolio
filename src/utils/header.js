// 헤더 스크롤 효과 처리
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header_container');

  if (!header) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 배경 블러 효과
  if (scrollTop > 100) {
    header.classList.add('header_scrolled');
  } else {
    header.classList.remove('header_scrolled');
  }

  // 스크롤이 200px 이상이면 헤더 숨기기
  if (scrollTop > 200) {
    header.classList.add('header_hidden');
  } else {
    header.classList.remove('header_hidden');
  }
});

// 마우스를 화면 맨 위(상단 40px 영역)에 호버하면 헤더 보이기
document.addEventListener('mousemove', function (e) {
  const header = document.querySelector('.header_container');
  if (!header) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 스크롤이 200px 이상일 때만 호버 동작
  if (scrollTop > 200) {
    if (e.clientY <= 40) {
      header.classList.remove('header_hidden');
    } else if (!header.matches(':hover')) {
      header.classList.add('header_hidden');
    }
  }
});
