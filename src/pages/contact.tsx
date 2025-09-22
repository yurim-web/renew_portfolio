import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/contact.css';

// EmailJS는 나중에 설정
// import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // const { is_dark_mode } = useTheme(); // 다크모드는 CSS로 처리
  const [form_data, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [is_submitting, setIsSubmitting] = useState(false);
  const [submit_status, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handle_input_change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handle_submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 임시로 성공 처리 (EmailJS 설정 후 실제 전송 구현)
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 대기
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact_section">
      {/* 배경 블러 효과 */}
      <div className="contact_blur_1"></div>
      <div className="contact_blur_2"></div>
      <div className="contact_blur_3"></div>
      <div className="contact_blur_4"></div>

      <div className="contact_container">
        <div className="contact_content">
          {/* 왼쪽 - 연락처 정보 */}
          <div className="contact_info">
            <div className="contact_title">
              <span className="contact_sparkle">✨</span>
              <h2>Contact.</h2>
            </div>
            <p className="contact_subtitle">I HOPE YOU ENJOY MY PROJECT</p>
            
            <div className="contact_details">
              <div className="contact_item">
                <span className="contact_icon">📞</span>
                <span>010-4054-5152</span>
              </div>
              
              <div className="contact_item">
                <span className="contact_icon">✉️</span>
                <span>lyl5152@naver.com</span>
              </div>
              
              <div className="contact_social">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact_social_link">
                  <span className="contact_social_icon">🐱</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact_social_link">
                  <span className="contact_social_icon">📷</span>
                </a>
              </div>
            </div>
          </div>

          {/* 오른쪽 - QR 코드 */}
          <div className="contact_qr_section">
            <div className="contact_qr_container">
              <div className="contact_qr_code">
                <div className="contact_qr_pattern"></div>
                <div className="contact_qr_icon">
                  <span>💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 감사 인사 */}
        <div className="contact_thank_you">
          <p>Thank you <span>😊</span></p>
        </div>
      </div>

      {/* 이메일 폼 섹션 */}
      <div className="contact_form_section">
        <div className="contact_form_container">
          <div className="contact_form_header">
            <h3>Get in Touch</h3>
            <p>프로젝트나 협업에 대해 이야기해보세요!</p>
          </div>
          
          <form className="contact_form" onSubmit={handle_submit}>
            <div className="contact_form_group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form_data.name}
                onChange={handle_input_change}
                required
                placeholder="홍길동"
              />
            </div>
            
            <div className="contact_form_group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form_data.email}
                onChange={handle_input_change}
                required
                placeholder="example@email.com"
              />
            </div>
            
            <div className="contact_form_group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                name="message"
                value={form_data.message}
                onChange={handle_input_change}
                required
                placeholder="안녕하세요! 프로젝트에 대해 문의드립니다..."
                rows={5}
              />
            </div>
            
            <button 
              type="submit" 
              className={`contact_form_submit ${is_submitting ? 'submitting' : ''}`}
              disabled={is_submitting}
            >
              {is_submitting ? '전송 중...' : '메시지 보내기'}
            </button>
            
            {/* 상태 메시지 */}
            {submit_status === 'success' && (
              <div className="contact_form_message success">
                ✅ 메시지가 성공적으로 전송되었습니다!
              </div>
            )}
            
            {submit_status === 'error' && (
              <div className="contact_form_message error">
                ❌ 메시지 전송에 실패했습니다. 다시 시도해주세요.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
