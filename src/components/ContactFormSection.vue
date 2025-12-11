<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Contact Form -->
      <div class="form-wrapper">
        <h2 class="form-title">ติดต่อเอแซ็ป</h2>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <!-- Row 1: Name Fields -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">ชื่อ*</label>
              <input
                type="text"
                v-model="formData.firstName"
                placeholder="สมชาย"
                class="form-input"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">นามสกุล*</label>
              <input
                type="text"
                v-model="formData.lastName"
                placeholder="ใจดี"
                class="form-input"
                required
              />
            </div>
          </div>

          <!-- Row 2: Email and Phone -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">อีเมล*</label>
              <div class="input-with-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
                  <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#637381" stroke-width="1.5" fill="none"/>
                  <path d="M2 5l8 6 8-6" stroke="#637381" stroke-width="1.5" fill="none"/>
                </svg>
                <input
                  type="email"
                  v-model="formData.email"
                  placeholder="Example@gmail.com"
                  class="form-input with-icon"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">เบอร์โทรศัพท์*</label>
              <div class="phone-input">
                <div class="country-code">
                  <svg viewBox="0 0 32 32" width="24" height="24" class="flag-icon">
                    <rect width="32" height="32" rx="16" fill="#F4F6F8"/>
                    <rect y="10" width="32" height="4" fill="#ED1C24"/>
                    <rect y="14" width="32" height="4" fill="#FFFFFF"/>
                    <rect y="18" width="32" height="4" fill="#241D4F"/>
                  </svg>
                  <span class="code-text">+66</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="chevron">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <input
                  type="tel"
                  v-model="formData.phone"
                  placeholder="909990000"
                  class="form-input phone-number"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Row 3: Subject -->
          <div class="form-group full-width">
            <label class="form-label">หัวข้อ*</label>
            <input
              type="text"
              v-model="formData.subject"
              placeholder="การเช่ารถมากว่า 1 เดือน"
              class="form-input"
              required
            />
          </div>

          <!-- Row 4: Message -->
          <div class="form-group full-width">
            <label class="form-label">ข้อความ*</label>
            <textarea
              v-model="formData.message"
              placeholder="สนใจเช่ารถเป็นระยะเวลา 2 เดือนขึ้นไป มีส่วนลดเพิ่มเติมไหมครับ"
              class="form-textarea"
              rows="5"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="submit-button">
            ส่งข้อความ
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="contact-info">
        <p class="info-address">
          บริษัท ซินเนอร์เจติค ออโต้ เพอร์ฟอร์มานซ์ จำกัด (มหาชน)<br/>
          149 หมู่ 3 ถ.เทพารักษ์ ต.เทพารักษ์ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270
        </p>

        <div class="social-buttons">
          <a href="#" class="social-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="social-icon">
              <rect width="24" height="24" rx="6" fill="#00B900"/>
              <path d="M7 11.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5c0 2.7-2 5-4.7 5.4v-1.6c2-0.4 3.5-2 3.5-3.8 0-2.2-1.9-4-4.3-4s-4.3 1.8-4.3 4c0 1.8 1.5 3.4 3.5 3.8v1.6c-2.7-0.4-4.7-2.7-4.7-5.4z" fill="white"/>
            </svg>
            <span>@asapcarrental</span>
          </a>
          <a href="#" class="social-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="social-icon">
              <circle cx="12" cy="12" r="10" fill="#1877F2"/>
              <path d="M13 15V12h2l.3-2H13V9c0-.6.1-1 1-1h1V6h-1.5C12 6 11 6.9 11 8.5V10H9v2h2v3h2z" fill="white"/>
            </svg>
            <span>Asap Thailand</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  alert('ข้อความของคุณถูกส่งเรียบร้อยแล้ว!')
}
</script>

<style scoped>
.contact-section {
  background: #F4F6F8;
  padding: 80px 0;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: flex-start;
}

.contact-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

/* Form Wrapper */
.form-wrapper {
  background: white;
  border-radius: 32px;
  padding: 40px;
  width: 100%;
  max-width: 600px;
}

.form-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #212B36;
  text-align: left;
  margin: 0 0 32px 0;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group.full-width {
  width: 100%;
}

.form-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #919EAB;
}

.form-input {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  padding: 14px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #FF595A;
}

.input-with-icon {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.form-input.with-icon {
  padding-left: 44px;
}

/* Phone Input */
.phone-input {
  display: flex;
  gap: 8px;
}

.country-code {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  flex-shrink: 0;
}

.flag-icon {
  flex-shrink: 0;
}

.code-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #161c24;
}

.chevron {
  flex-shrink: 0;
}

.phone-number {
  flex: 1;
}

/* Textarea */
.form-textarea {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  padding: 14px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
  min-height: 120px;
}

.form-textarea:focus {
  border-color: #FF595A;
}

/* Submit Button */
.submit-button {
  width: 100%;
  padding: 16px;
  background: #FF595A;
  border: none;
  border-radius: 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 89, 90, 0.3);
}

.submit-button:active {
  transform: translateY(0);
}

/* Contact Information */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}

.info-address {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #212B36;
  margin: 0;
  line-height: 1.6;
}

/* Social Buttons */
.social-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.social-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 20px;
  text-decoration: none;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #637381;
  transition: all 0.2s;
}

.social-button:hover {
  border-color: #FF595A;
  color: #FF595A;
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.social-icon {
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .contact-container {
    padding: 0 24px;
  }

  .form-wrapper {
    padding: 32px 24px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 80px 0 60px 0;
  }

  .contact-container {
    padding: 0 20px;
    gap: 32px;
  }

  .form-wrapper {
    padding: 24px 20px;
    max-width: 100%;
    border-radius: 16px;
  }

  .form-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .contact-form {
    gap: 16px;
  }

  .phone-input {
    flex-direction: column;
  }

  .country-code {
    width: fit-content;
  }

  .info-address {
    font-size: 14px;
  }

  .social-buttons {
    flex-direction: column;
    width: 100%;
  }

  .social-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
