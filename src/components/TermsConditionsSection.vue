<template>
  <div class="terms-conditions">
    <h2 class="section-title">เงื่อนไขและข้อตกลง</h2>

    <div class="terms-container">
      <p class="intro-text">
        กรุณาอ่านเงื่อนไขและข้อตกลงในการใช้บริการของเราอย่างละเอียด
        เพื่อให้คุณเข้าใจสิทธิและหน้าที่ของคุณในฐานะผู้ใช้บริการ
      </p>

      <div class="terms-list">
        <router-link to="/privacy-policy" class="term-card">
          <div class="term-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#FF6B6B" stroke-width="2"/>
              <path d="M16 8v8m0 4h.01" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="term-content">
            <h3 class="term-title">นโยบายความเป็นส่วนตัว</h3>
            <p class="term-description">
              รายละเอียดเกี่ยวกับการเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณ
            </p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="arrow-icon">
            <path d="M9 6l6 6-6 6" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>

        <a href="#" class="term-card">
          <div class="term-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="8" y="6" width="16" height="20" rx="1" stroke="#FF6B6B" stroke-width="2"/>
              <path d="M12 12h8M12 16h8M12 20h4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="term-content">
            <h3 class="term-title">ข้อกำหนดและเงื่อนไขการใช้บริการ</h3>
            <p class="term-description">
              ข้อกำหนดและเงื่อนไขในการใช้บริการเช่ารถของ ASAP
            </p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="arrow-icon">
            <path d="M9 6l6 6-6 6" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <a href="#" class="term-card">
          <div class="term-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 10v12M10 16h12" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"/>
              <circle cx="16" cy="16" r="12" stroke="#FF6B6B" stroke-width="2"/>
            </svg>
          </div>
          <div class="term-content">
            <h3 class="term-title">นโยบายคุกกี้</h3>
            <p class="term-description">
              ข้อมูลเกี่ยวกับการใช้คุกกี้บนเว็บไซต์และแอปพลิเคชันของเรา
            </p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="arrow-icon">
            <path d="M9 6l6 6-6 6" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <a href="#" class="term-card">
          <div class="term-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 16c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"/>
              <path d="M16 24l-4-4 4-4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="term-content">
            <h3 class="term-title">นโยบายการยกเลิกและคืนเงิน</h3>
            <p class="term-description">
              เงื่อนไขและขั้นตอนในการยกเลิกการจองและขอคืนเงิน
            </p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="arrow-icon">
            <path d="M9 6l6 6-6 6" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class="contact-section">
        <h3 class="contact-title">ต้องการความช่วยเหลือ?</h3>
        <p class="contact-text">
          หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับเงื่อนไขและข้อตกลง กรุณาติดต่อเราได้ที่
        </p>
        <div class="contact-links">
          <a href="tel:020918000" class="contact-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.3 14.5c-1.1 0-2.2-.2-3.2-.5-.3-.1-.7 0-1 .2l-2 1.7c-2.5-1.4-4.6-3.4-6-6l1.7-2c.3-.3.4-.7.2-1-.3-1-.5-2-.5-3.2 0-.6-.4-1-1-1H3.7c-.6 0-1.2.4-1.2 1 0 9.4 7.6 17 17 17 .6 0 1-.5 1-1.2v-2.8c0-.5-.5-1-1.2-1z" fill="#FF6B6B"/>
            </svg>
            <span>02 091 8000</span>
          </a>
          <a href="mailto:support@asap.co.th" class="contact-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="#FF6B6B" stroke-width="1.5"/>
              <path d="M18 6l-8 5-8-5" stroke="#FF6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>support@asap.co.th</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.terms-conditions {
  width: 100%;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161c24;
  margin: 0 0 32px 0;
}

.terms-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.intro-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #637381;
  line-height: 1.7;
  margin: 0;
}

/* Terms List */
.terms-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.term-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: white;
  border: 1.5px solid #E5E7EB;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.term-card:hover {
  border-color: #FF6B6B;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.term-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFF5F5;
  border-radius: 12px;
}

.term-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.term-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #161c24;
  margin: 0;
}

.term-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #637381;
  line-height: 1.6;
  margin: 0;
}

.arrow-icon {
  flex-shrink: 0;
  transition: transform 0.2s;
}

.term-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* Contact Section */
.contact-section {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 32px;
  margin-top: 16px;
}

.contact-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #161c24;
  margin: 0 0 12px 0;
}

.contact-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  color: #637381;
  line-height: 1.7;
  margin: 0 0 20px 0;
}

.contact-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #FF6B6B;
  text-decoration: none;
  transition: opacity 0.2s;
}

.contact-link:hover {
  opacity: 0.7;
}

.contact-link svg {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 24px;
  }

  .term-card {
    padding: 20px;
    gap: 16px;
  }

  .term-icon {
    width: 40px;
    height: 40px;
  }

  .term-icon svg {
    width: 24px;
    height: 24px;
  }

  .term-title {
    font-size: 16px;
  }

  .term-description {
    font-size: 13px;
  }

  .contact-section {
    padding: 24px;
  }

  .contact-links {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
