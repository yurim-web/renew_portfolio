# Contact Form 설정 가이드

## EmailJS 설정 방법

Contact Form이 작동하려면 EmailJS 서비스를 설정해야 합니다.

### 1. EmailJS 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/)에 가입
2. 무료 계정으로 시작 가능

### 2. 이메일 서비스 연결
1. Dashboard에서 "Add New Service" 클릭
2. Gmail, Outlook 등 원하는 이메일 서비스 선택
3. 연결 설정 완료

### 3. 이메일 템플릿 생성
1. "Email Templates" 섹션에서 "Create New Template" 클릭
2. 다음 변수들을 템플릿에 추가:
   - `{{from_name}}` - 보낸 사람 이름
   - `{{from_email}}` - 보낸 사람 이메일
   - `{{message}}` - 메시지 내용

### 4. 환경변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 다음 값들을 입력:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. 값 찾는 방법
- **Service ID**: Dashboard > Email Services에서 확인
- **Template ID**: Dashboard > Email Templates에서 확인
- **Public Key**: Dashboard > Account > API Keys에서 확인

### 6. 테스트
환경변수 설정 후 개발 서버를 재시작하면 Contact Form이 작동합니다.

## 주의사항
- `.env` 파일은 절대 Git에 커밋하지 마세요
- 실제 배포 시에는 배포 플랫폼의 환경변수 설정을 사용하세요
