// 이미지 import
import addmoaWebImg from '../assets/design_img/addmoa_web.png';
import makeupWebImg from '../assets/design_img/makeup_web.png';
import lhWebImg from '../assets/design_img/lh_web.png';
import colorAppImg from '../assets/design_img/color_app.png';
import elecAppImg from '../assets/design_img/elec_app.png';
import sunAppImg from '../assets/design_img/sun_app.png';
import banner1Img from '../assets/design_img/banner_1_1.png';
import banner2Img from '../assets/design_img/banner_2.png';
import banner3Img from '../assets/design_img/banner_3.png';

export interface WebDesignProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tech_stack: string[];
  year: string;
  category: string;
}

export const web_design_projects: WebDesignProject[] = [
  {
    id: 1,
    title: 'Addmoa 기업 홈페이지',
    description: '남색 계열의 안정감을 기반으로 브랜드 신뢰성을 강화한 기업 웹사이트 디자인',
    image: addmoaWebImg,
    tech_stack: ['#기업웹사이트', '#신뢰감디자인', '#남색톤', '#모던UI', '#심플레이아웃'],
    year: '2024',
    category: '웹 디자인',
  },
  {
    id: 2,
    title: '뷰티 정보 홈페이지',
    description: '따뜻한 갈색 톤을 활용해 전문성과 친근함을 동시에 전달한 반응형 뷰티 정보 사이트',
    image: makeupWebImg,
    tech_stack: ['#뷰티웹디자인', '#갈색톤', '#따뜻한분위기', '#자연스러움', '#반응형디자인'],
    year: '2024',
    category: '웹 디자인',
  },
  {
    id: 3,
    title: 'LH 전세임대 안내 사이트',
    description:
      '연두·파랑 컬러를 조화롭게 적용해 공공기관 특유의 신뢰성과 접근성을 높인 웹사이트 디자인',
    image: lhWebImg,
    tech_stack: [
      '#공공기관웹사이트',
      '#연두파랑톤',
      '#신뢰성있는디자인',
      '#안정감',
      '#반응형웹디자인',
    ],
    year: '2024',
    category: '웹 디자인',
  },
  {
    id: 4,
    title: '퍼스널 컬러 테스트 앱',
    description: '파스텔 톤의 감각적인 UI로 사용자 경험을 향상시킨 퍼스널 컬러 진단 앱 디자인',
    image: colorAppImg,
    tech_stack: ['#파스텔톤디자인', '#감각적인UI', '#컬러테스트앱', '#밝고산뜻함', '#뷰티앱디자인'],
    year: '2024',
    category: '앱 디자인',
  },
  {
    id: 5,
    title: '전기요금 계산기 앱',
    description:
      '직관적인 그래프와 카드형 레이아웃으로 정보 가독성을 극대화한 전기요금 계산 앱 디자인',
    image: elecAppImg,
    tech_stack: ['#심플UI', '#직관적인디자인', '#정보시각화', '#친근한컬러', '#유틸리티앱'],
    year: '2024',
    category: '앱 디자인',
  },
  {
    id: 6,
    title: '햇살론 대출 안내 앱',
    description:
      '오렌지 톤의 따뜻한 감성을 담아 서민 금융 상품을 신뢰감 있게 안내하는 금융 앱 디자인',
    image: sunAppImg,
    tech_stack: ['#오렌지톤디자인', '#금융앱UI', '#따뜻한분위기', '#정보전달중심', '#서민대출안내'],
    year: '2024',
    category: '앱 디자인',
  },
  {
    id: 7,
    title: '블로그 게시글 배너 디자인',
    description:
      '시각적 집중도를 높여 콘텐츠 몰입과 클릭 유도를 강화한 블로그 포스팅용 배너 디자인',
    image: banner1Img,
    tech_stack: ['#배너디자인', '#콘텐츠강화', '#가독성높음', '#심플비주얼', '#블로그이미지'],
    year: '2024',
    category: '배너 디자인',
  },
  {
    id: 8,
    title: '온라인 광고 배너 디자인',
    description: '브랜드 인지도를 높이고 전환율 향상을 목표로 제작된 온라인 프로모션 배너 디자인',
    image: banner2Img,
    tech_stack: ['#광고배너디자인', '#프로모션용', '#시선집중', '#브랜드홍보', '#마케팅배너'],
    year: '2024',
    category: '배너 디자인',
  },
  {
    id: 9,
    title: '구글 애즈 배너 디자인',
    description: '명확한 메시지와 임팩트 있는 비주얼로 광고 효과를 극대화한 구글 애즈 캠페인 배너',
    image: banner3Img,
    tech_stack: ['#구글애즈', '#광고배너', '#임팩트비주얼', '#마케팅디자인', '#정보전달효과적'],
    year: '2024',
    category: '배너 디자인',
  },
];
