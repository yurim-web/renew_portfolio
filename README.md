# 🌟 Renewal Portfolio (진행중)

> 리뉴얼 웹 포트폴리오 사이트입니다.
> 현재 **작업 진행 중(🚧)** 입니다.

## 🚀 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3
- **Design/Tools:** Figma, Adobe Illustrator, Adobe Photoshop, VS Code, Git/GitHub
- **Build Tool**: Create React App

## 📁 프로젝트 구조

> 💡 **참고**: 현재 기본 구조가 완성되었으며, 향후 더 많은 컴포넌트와 기능이 추가될 예정입니다.

```
renew_portfolio/
├── public/                     # 정적 파일들
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/                        # 소스 코드
│   ├── pages/                  # 페이지 컴포넌트
│   │   ├── header.tsx         # 헤더 컴포넌트
│   │   ├── main.tsx           # 메인 섹션 컴포넌트
│   │   └── info.tsx           # 정보 섹션 컴포넌트
│   ├── styles/                 # 스타일 파일들
│   │   ├── reset.css          # CSS 리셋
│   │   ├── common.css         # 공통 스타일
│   │   ├── header.css         # 헤더 스타일
│   │   ├── main_section.css   # 메인 섹션 스타일
│   │   ├── info_section.css   # 정보 섹션 스타일
│   │   └── index.css          # 메인 스타일
│   ├── utils/                  # 유틸리티 함수들
│   │   ├── header.js          # 헤더 관련 JavaScript
│   │   └── main.js            # 메인 섹션 관련 JavaScript
│   ├── assets/                 # 이미지, 아이콘 등 리소스 (추가 예정)
│   ├── components/             # 재사용 가능한 컴포넌트 (추가 예정)
│   ├── App.tsx                # 메인 앱 컴포넌트
│   └── index.tsx              # 앱 진입점
├── package.json               # 프로젝트 의존성 및 스크립트
├── package-lock.json          # 의존성 잠금 파일
├── tsconfig.json              # TypeScript 설정
└── README.md                  # 프로젝트 설명서
```

## 🎯 주요 기능

- **반응형 디자인**: 다양한 디바이스에서 최적화된 화면
- **스크롤 이벤트**: 스크롤에 따른 헤더 스타일 변화
- **섹션별 구성**: About Me, Skills, Projects, Contact 섹션
- **모던 UI/UX**: 깔끔하고 직관적인 사용자 인터페이스

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js (v14 이상)
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
# 개발 서버 시작
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

### 빌드
```bash
# 프로덕션 빌드
npm run build
```

## 📝 컴포넌트 설명

### Header (`src/pages/header.tsx`)
- 네비게이션 메뉴
- 스크롤 시 배경 변화 효과
- 반응형 메뉴

### Main (`src/pages/main.tsx`)
- 메인 히어로 섹션
- 인트로 메시지

### Info (`src/pages/info.tsx`)
- About Me 섹션
- 프로필 이미지 및 소개
- 경력 및 학력 정보
- 기술 스택 표시

## 🎨 스타일 가이드

### CSS 파일 구조
- `reset.css`: 브라우저 기본 스타일 초기화
- `common.css`: 공통으로 사용되는 스타일
- `header.css`: 헤더 관련 스타일
- `main_section.css`: 메인 섹션 스타일
- `info_section.css`: 정보 섹션 스타일

### 네이밍 컨벤션
- 클래스명: 스네이크 케이스 (예: `nav_menu`, `about_section`)
- 컴포넌트명: 파스칼 케이스 (예: `Header`, `Info`)

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px ~ 1199px
- **Mobile**: 767px 이하

## 🔧 개발 스크립트

```bash
# 개발 서버 시작
npm start

# 테스트 실행
npm test

# 프로덕션 빌드
npm run build

# 빌드 결과물 분석
npm run eject
```

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.


*이 포트폴리오는 React와 TypeScript를 사용하여 제작되었습니다.*