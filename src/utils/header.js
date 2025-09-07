// 스크롤 이벤트 처리
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header_container");
    
    // header 요소가 존재하는지 확인
    if (!header) {
        return;
    }
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // 스크롤이 100px 이상 내려가면 헤더 배경을 투명하게
    if (scrollTop > 100) {
      header.classList.add("header_scrolled");
    } else {
      header.classList.remove("header_scrolled");
    }
  });
  