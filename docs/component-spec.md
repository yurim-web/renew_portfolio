# 📦 컴포넌트 명세서

> 작성자: 이유림
> 작성일: 2026.03
> 버전: v1.0

---

## 목차

1. [Sections (섹션 컴포넌트)](#sections)
2. [Common/Box](#commonbox)
3. [Common/Button](#commonbutton)
4. [Contexts](#contexts)

---

## Sections

> `src/sections/` — 섹션별 독립 컴포넌트. props 없이 자체 데이터를 가짐.

| 컴포넌트 | 파일 | 역할 |
|---|---|---|
| Header | `Header.tsx` | 상단 네비게이션, 섹션 링크, 로고 |
| Main | `Main.tsx` | 메인 히어로 섹션, 타이틀 + 소개 텍스트 |
| About | `About.tsx` | 자기소개, 이력 타임라인 (경력·교육·자격증) |
| Skills | `Skills.tsx` | Strength 섹션 — 스킬 탭 + 카드 |
| Project | `Project.tsx` | Portfolio 섹션 — Learning Projects 카드 목록 |
| ProfessionalProjects | `ProfessionalProjects.tsx` | 실무 프로젝트 3개 카드 목록 |
| Portfolio | `Portfolio.tsx` | Project 섹션 레이아웃 래퍼 |
| WebDesign | `WebDesign.tsx` | UI/UX 디자인 작업물 갤러리 그리드 |
| Contact | `Contact.tsx` | 연락처, SNS 링크, Copyright |

---

## Common/Box

### StrengthContents

> `src/common/box/StrengthContents.tsx`
> 스킬 카드 단일 아이템 컴포넌트. GSAP ScrollTrigger 애니메이션 포함.

**Props**

| 이름 | 타입 | 설명 |
|---|---|---|
| `contents` | `string` | 스킬 설명 텍스트 |
| `skill` | `string` | 스킬 이름 (카드 상단 뱃지에 표시) |
| `img` | `string` | 스킬 아이콘 이미지 경로 |

**동작**
- 스크롤 시 이미지: `scale 0.5 → 1` + `rotation -10 → 0` 애니메이션
- 스크롤 시 제목 뱃지: `x -30 → 0` 슬라이드 인 애니메이션

---

### StrengthContentsBox

> `src/common/box/StrengthContentsBox.tsx`
> 스킬 카드 전체 목록 컨테이너. `skillData` 배열을 내부에서 관리하며, 활성 스킬에 맞는 카드 강조 애니메이션을 처리.

**Props**

| 이름 | 타입 | 설명 |
|---|---|---|
| `activeSkill` | `string \| null` | 현재 선택된 스킬 이름 (없으면 null) |

**내부 데이터 (skillData)**

| 스킬 | 이미지 |
|---|---|
| HTML | html.png |
| CSS | css.png |
| Javascript | javascript.png |
| TypeScript | typescript.png |
| React | react.png |
| Next.js | next.png |
| Gsap.js | gsap.png |
| Git/Github | git.png + github.png |
| SourceTree | sourcetree.png |
| Notion | notion_2.png |
| Confluence | confluence.png |
| Figma | figma_2.png |
| Photoshop | photoshop.png |
| Illustrator | illustrator.png |
| Cafe24 | cafe24.png |

---

### StrenthToggleBox

> `src/common/box/StrenthToggleBox.tsx`
> 스킬 탭 버튼 목록 컨테이너. 15개 스킬 탭을 렌더링하고 선택 상태를 관리.

**Props**

| 이름 | 타입 | 설명 |
|---|---|---|
| `activeSkill` | `string \| null` | 현재 선택된 스킬 이름 (없으면 null) |
| `onSkillChange` | `(skill: string) => void` | 스킬 탭 클릭 시 호출되는 콜백 |

---

## Common/Button

### ThemeToggle

> `src/common/button/ThemeToggle.tsx`
> 라이트/다크 모드 전환 토글 버튼. 상단으로 스크롤하는 TOP 버튼 포함.

**Props** : 없음 (`useTheme` Context 사용)

**사용 Context**

| 값 | 타입 | 설명 |
|---|---|---|
| `is_dark_mode` | `boolean` | 현재 다크 모드 여부 |
| `toggle_dark_mode` | `() => void` | 다크 모드 전환 함수 |

---

### ResumeToggle

> `src/common/button/ResumeToggle.tsx`
> 우측 고정 섹션 네비게이션 도트 버튼. 스크롤 위치에 따라 현재 섹션 자동 감지.

**Props** : 없음 (`useSection` Context 사용)

**섹션 목록**

| ID | 라벨 | element_id |
|---|---|---|
| 1 | ABOUT | about |
| 2 | STRENGTH | strength |
| 3 | PROJECT | project |
| 4 | PROFESSIONAL | professional |
| 5 | LEARNING | portfolio |
| 6 | UI/UX DESIGN | web_design |
| 7 | CONTACT | contact |

**동작**
- `scroll` 이벤트로 현재 섹션 자동 감지 후 활성 도트 업데이트
- 도트 클릭 시 해당 섹션으로 smooth scroll

---

### StrengthToggle

> `src/common/button/StrengthToggle.tsx`
> 스킬 탭 단일 버튼 컴포넌트.

**Props**

| 이름 | 타입 | 설명 |
|---|---|---|
| `strength` | `string` | 스킬 이름 (버튼 텍스트) |
| `isActive` | `boolean` | 현재 선택 상태 여부 |
| `onClick` | `(skill: string) => void` | 클릭 시 호출되는 콜백 |

---

## Contexts

### ThemeContext

> `src/contexts/ThemeContext.tsx`
> 전역 테마 상태 관리. 다크 모드 상태를 앱 전체에 공유.

**Context 값 (ThemeContextType)**

| 이름 | 타입 | 설명 |
|---|---|---|
| `isDarkMode` | `boolean` | 현재 다크 모드 여부 |
| `toggleDarkMode` | `() => void` | 다크 모드 전환 함수 |

**특이사항**
- `localStorage`에 테마 저장 → 새로고침 후에도 유지
- `data-theme` attribute를 `document.documentElement`에 적용
- `useTheme` 훅으로 사용 (`ThemeProvider` 외부에서 사용 시 에러 발생)

---

### SectionContext

> `src/contexts/SectionContext.tsx`
> 현재 활성 섹션 상태 관리. 도트 네비게이터(ResumeToggle)와 연동.

**Context 값 (SectionContextType)**

| 이름 | 타입 | 설명 |
|---|---|---|
| `resumeSection` | `number` | 현재 활성 섹션 ID (1~7) |
| `setResumeSection` | `(section: number) => void` | 현재 섹션 업데이트 함수 |

**특이사항**
- `useSection` 훅으로 사용 (`SectionProvider` 외부에서 사용 시 에러 발생)
