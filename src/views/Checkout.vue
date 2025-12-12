<template>
  <div class="checkout-page">
    <!-- Timer Warning Banner -->
    <div class="timer-banner">
      <div class="banner-content">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
          <path d="M12 6v6l4 2" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="timer-text">กรุณาทำรายการให้สำเร็จภายใน <strong>09:59</strong> นาที</span>
      </div>
    </div>

    <!-- Progress Indicator -->
    <div class="progress-container">
      <div class="progress-steps">
        <div class="step completed">
          <div class="step-circle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l4 4 6-6" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <span class="step-label">บริการเสริม</span>
        </div>
        <div class="step-line completed"></div>
        <div class="step active">
          <div class="step-circle">2</div>
          <span class="step-label">ข้อมูลผู้เช่า/ขับขี่</span>
        </div>
        <div class="step-line"></div>
        <div class="step">
          <div class="step-circle">3</div>
          <span class="step-label">ชำระเงิน</span>
        </div>
      </div>
    </div>

    <div class="checkout-container">
      <!-- Left Column -->
      <div class="left-column">
        <!-- Special Offer Section -->
        <section class="special-offer-section">
          <div class="offer-header">
            <div class="offer-header-left">
              <div class="offer-title-row">
                <svg class="gift-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M26 14v14a2 2 0 01-2 2H8a2 2 0 01-2-2V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28 8H4a2 2 0 00-2 2v4h28v-4a2 2 0 00-2-2z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 30V8M16 8c0-2-1.5-4-4-4s-4 2-4 4 2 4 4 4h4M16 8c0-2 1.5-4 4-4s4 2 4 4-2 4-4 4h-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="offer-title">ข้อเสนอพิเศษ!</h2>
              </div>
              <p class="offer-subtitle">รีบคลิก "รับข้อเสนอ" ก่อนเวลาหมด</p>
            </div>
            <div class="timer-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="9" r="6" stroke="#161C24" stroke-width="1.2"/>
                <path d="M8 5v4l2 2" stroke="#161C24" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M6 2h4" stroke="#161C24" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
              <span>{{ timerMinutes }} : {{ timerSeconds }} นาที</span>
            </div>
          </div>

          <div class="offer-cards">
            <div v-for="car in specialOfferCars" :key="car.id" class="offer-card-wrapper">
              <div class="car-image-floating">
                <img :src="car.image" :alt="car.name" />
              </div>
              <div class="offer-card">
                <div class="card-content-inner">
                  <h3 class="car-name">{{ car.name }}</h3>
                  <div class="car-pricing">
                    <span class="currency">฿</span>
                    <span class="price-amount">{{ car.offerPrice }}</span>
                    <span class="price-period">/วัน</span>
                    <span class="price-diff">+{{ car.priceDiff }} ฿</span>
                  </div>
                </div>
                <div class="card-action">
                  <button class="add-button" @click="selectUpgrade(car)">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 4v10M4 9h10" stroke="#FF595A" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>เพิ่ม {{ car.priceDiff }} บาท/วัน</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Driver/Renter Information Header -->
        <section class="checkout-section-header">
          <h2 class="main-section-title">ข้อมูลผู้เช่า/ขับขี่</h2>

          <!-- Login Prompt -->
          <div class="login-prompt-box">
            <div class="login-prompt-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#FF595A" stroke-width="2"/>
                <path d="M5 20c0-3 3-5 7-5s7 2 7 5" stroke="#FF595A" stroke-width="2"/>
              </svg>
            </div>
            <div class="login-prompt-content">
              <span class="login-prompt-text">ยังไม่ได้ลงทะเบียน</span>
            </div>
            <button class="login-prompt-button" type="button">
              เข้าสู่ระบบ
            </button>
          </div>
          <p class="login-prompt-hint">*ต้องการเช่ารถ แบบผูกกับบัญชี? คลิกที่ "เข้าสู่ระบบ" ได้เลย</p>
        </section>

        <!-- Driver/Renter Form -->
        <section class="checkout-section">
          <div class="form-section">
            <div class="form-header-row">
              <div class="form-subtitle-with-icon">
                <h3 class="form-subtitle">ผู้เช่า/ผู้ขับขี่*</h3>
                <svg class="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#919EAB" stroke-width="1.5"/>
                  <path d="M10 9v4M10 7h.01" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="checkbox-group styled">
                <input type="checkbox" id="sameAsPrimary" v-model="driverSameAsRenter" />
                <label for="sameAsPrimary">
                  <span class="custom-checkbox">
                    <svg v-if="driverSameAsRenter" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  ผู้จองคนเดียวกันกับผู้เช่ารถ (ผู้ขับขี่)
                </label>
              </div>
            </div>

            <div class="form-grid-3">
              <div class="form-group">
                <label>คำนำหน้า <span class="required">*</span></label>
                <select v-model="driverInfo.title" class="form-input">
                  <option value="">เลือกคำนำหน้า</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>
              <div class="form-group">
                <label>ชื่อ <span class="required">*</span></label>
                <input type="text" v-model="driverInfo.firstName" placeholder="กรอกชื่อ" class="form-input" />
              </div>
              <div class="form-group">
                <label>นามสกุล <span class="required">*</span></label>
                <input type="text" v-model="driverInfo.lastName" placeholder="กรอกนามสกุล" class="form-input" />
              </div>
            </div>
          </div>

          <!-- Additional Driver -->
          <div class="form-section">
            <div class="form-header-row clickable" @click="toggleAdditionalDriver">
              <div class="form-subtitle-with-icon">
                <h3 class="form-subtitle">ผู้ขับขี่เสริม</h3>
                <svg class="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#919EAB" stroke-width="1.5"/>
                  <path d="M10 9v4M10 7h.01" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <button class="add-driver-button" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                เพิ่มผู้ขับขี่
              </button>
            </div>

            <Transition name="expand">
              <div v-if="showAdditionalDriver" class="additional-driver-form">
                <div class="form-grid-3">
                  <div class="form-group">
                    <label>คำนำหน้า</label>
                    <select v-model="additionalDriver.title" class="form-input">
                      <option value="">เลือกคำนำหน้า</option>
                      <option value="นาย">นาย</option>
                      <option value="นาง">นาง</option>
                      <option value="นางสาว">นางสาว</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>ชื่อ</label>
                    <input type="text" v-model="additionalDriver.firstName" placeholder="กรอกชื่อ" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label>นามสกุล</label>
                    <input type="text" v-model="additionalDriver.lastName" placeholder="กรอกนามสกุล" class="form-input" />
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </section>

        <!-- Account Information -->
        <section class="checkout-section">
          <div class="form-subtitle-with-icon" style="margin-bottom: 24px;">
            <h3 class="form-subtitle">ข้อมูลบัญชี*</h3>
          </div>

          <div class="form-stack">
            <!-- Email Field -->
            <div class="form-group">
              <div class="input-with-icon">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="#919EAB" stroke-width="1.5"/>
                  <path d="M2 6l8 5 8-5" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <input type="email" v-model="accountInfo.email" placeholder="Example@gmail.com" class="form-input with-icon" />
                <label class="floating-label">อีเมล</label>
              </div>
            </div>

            <!-- Password Field -->
            <div class="form-group">
              <div class="input-with-icon">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 7h-1V5a4 4 0 10-8 0v2H5a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1zM8 5a2 2 0 114 0v2H8V5z" stroke="#919EAB" stroke-width="1.5"/>
                </svg>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="accountInfo.password"
                  placeholder="•••••••••••••"
                  class="form-input with-icon with-trailing"
                  @input="validatePassword"
                />
                <label class="floating-label">รหัสผ่าน</label>
                <button type="button" class="password-toggle" @click="showPassword = !showPassword">
                  <svg v-if="showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#919EAB" stroke-width="1.5"/>
                    <circle cx="10" cy="10" r="3" stroke="#919EAB" stroke-width="1.5"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 3l14 14" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M10 5c3.5 0 6.5 3 7.5 5-.4.8-1 1.7-1.8 2.5M14.5 14.5C13.2 15.4 11.7 16 10 16c-5 0-8-6-8-6s1.2-2.4 3.5-4" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>

              <!-- Password Validation -->
              <div class="password-validation-list">
                <div class="validation-item" :class="{ valid: passwordValidation.minLength }">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>ต้องมีความยาว อย่างน้อย 8 ตัวอักษร</span>
                </div>
                <div class="validation-item" :class="{ valid: passwordValidation.hasUpperCase }">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ (A–Z) อย่างน้อย 1 ตัว</span>
                </div>
                <div class="validation-item" :class="{ valid: passwordValidation.hasLowerCase }">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์เล็ก (a–z) อย่างน้อย 1 ตัว</span>
                </div>
                <div class="validation-item" :class="{ valid: passwordValidation.hasNumber }">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>ต้องมี ตัวเลข (0–9) อย่างน้อย 1 ตัว</span>
                </div>
              </div>
            </div>

            <!-- Confirm Password Field -->
            <div class="form-group">
              <div class="input-with-icon">
                <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 7h-1V5a4 4 0 10-8 0v2H5a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1zM8 5a2 2 0 114 0v2H8V5z" stroke="#919EAB" stroke-width="1.5"/>
                </svg>
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="accountInfo.confirmPassword"
                  placeholder="•••••••••••••"
                  class="form-input with-icon with-trailing"
                />
                <label class="floating-label">ยืนยันรหัสผ่าน</label>
                <button type="button" class="password-toggle" @click="showConfirmPassword = !showConfirmPassword">
                  <svg v-if="showConfirmPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#919EAB" stroke-width="1.5"/>
                    <circle cx="10" cy="10" r="3" stroke="#919EAB" stroke-width="1.5"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 3l14 14" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M10 5c3.5 0 6.5 3 7.5 5-.4.8-1 1.7-1.8 2.5M14.5 14.5C13.2 15.4 11.7 16 10 16c-5 0-8-6-8-6s1.2-2.4 3.5-4" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Social Login Divider -->
            <div class="social-divider">
              <span class="divider-line"></span>
              <span class="divider-text">หรือ สมัครบัญชีด้วย</span>
              <span class="divider-line"></span>
            </div>

            <!-- Social Login Buttons -->
            <div class="social-login-buttons">
              <button type="button" class="social-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                </svg>
                <span>Facebook</span>
              </button>
              <button type="button" class="social-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Google</span>
              </button>
            </div>

            <!-- Login Link -->
            <p class="login-link">มีบัญชีอยู่แล้ว? <a href="#">เข้าสู่ระบบที่นี่</a></p>
          </div>
        </section>

        <!-- Contact Information -->
        <section class="checkout-section">
          <div class="form-subtitle-with-icon" style="margin-bottom: 24px;">
            <h3 class="form-subtitle">ข้อมูลการติดต่อ*</h3>
          </div>

          <div class="form-group">
            <div class="phone-input-wrapper-styled">
              <div class="country-flag">
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <rect width="24" height="16" rx="2" fill="#F4F4F4"/>
                  <rect y="0" width="24" height="3.2" fill="#ED1C24"/>
                  <rect y="3.2" width="24" height="3.2" fill="white"/>
                  <rect y="6.4" width="24" height="3.2" fill="#241D4F"/>
                  <rect y="9.6" width="24" height="3.2" fill="white"/>
                  <rect y="12.8" width="24" height="3.2" fill="#ED1C24"/>
                </svg>
              </div>
              <span class="country-code-text">+66</span>
              <svg class="caret-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div class="divider-vertical"></div>
              <input type="tel" v-model="contactInfo.phone" placeholder="909990000" class="phone-input-field" />
              <label class="floating-label" style="left: 12px;">เบอร์โทรศัพท์</label>
            </div>
          </div>
        </section>

        <!-- Flight Number -->
        <section class="checkout-section">
          <div class="form-subtitle-with-icon" style="margin-bottom: 24px;">
            <h3 class="form-subtitle">หมายเลขเที่ยวบิน</h3>
            <svg class="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#919EAB" stroke-width="1.5"/>
              <path d="M10 9v4M10 7h.01" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="form-group">
            <div class="input-with-icon">
              <input type="text" v-model="contactInfo.flightNumber" placeholder="XXXXXX" class="form-input" />
              <label class="floating-label" style="left: 12px;">หมายเลขเที่ยวบิน</label>
            </div>
          </div>
        </section>

        <!-- Tax Invoice -->
        <section class="checkout-section">
          <!-- Checkbox Header -->
          <div class="tax-invoice-header">
            <div class="checkbox-group styled">
              <input type="checkbox" id="wantTaxInvoice" v-model="taxInfo.wantInvoice" />
              <label for="wantTaxInvoice">
                <span class="custom-checkbox">
                  <svg v-if="taxInfo.wantInvoice" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span class="tax-checkbox-label">ต้องการ ใบเสร็จรับเงิน/ใบกำกับภาษี</span>
              </label>
            </div>
          </div>

          <Transition name="expand">
            <div v-if="taxInfo.wantInvoice" class="tax-invoice-content">
              <!-- Radio Options -->
              <div class="radio-group-inline">
                <div class="radio-option" :class="{ active: taxInfo.type === 'personal' }" @click="taxInfo.type = 'personal'">
                  <div class="radio-circle-sm">
                    <div v-if="taxInfo.type === 'personal'" class="radio-inner-sm"></div>
                  </div>
                  <span>บุคคลธรรมดา</span>
                </div>
                <div class="radio-option" :class="{ active: taxInfo.type === 'company' }" @click="taxInfo.type = 'company'">
                  <div class="radio-circle-sm">
                    <div v-if="taxInfo.type === 'company'" class="radio-inner-sm"></div>
                  </div>
                  <span>นิติบุคคล</span>
                </div>
              </div>

              <!-- Tax ID -->
              <div class="form-grid-2" style="margin-top: 20px;">
                <div class="form-group">
                  <div class="input-with-icon">
                    <input
                      type="text"
                      v-model="taxInfo.taxId"
                      placeholder="0123456789012"
                      maxlength="13"
                      class="form-input"
                    />
                    <label class="floating-label" style="left: 12px;">เลขประจำตัวผู้เสียภาษี 13 หลัก</label>
                  </div>
                </div>
                <div class="form-group" v-if="taxInfo.type === 'company'">
                  <div class="input-with-icon">
                    <input
                      type="text"
                      v-model="taxInfo.companyTaxId"
                      placeholder="0123456789012"
                      maxlength="13"
                      class="form-input"
                    />
                    <label class="floating-label" style="left: 12px;">เลขประจำตัวผู้เสียภาษี 13 หลัก (บริษัท)</label>
                  </div>
                </div>
              </div>

              <!-- Contact Person Section -->
              <div class="contact-person-section">
                <h4 class="contact-section-title">ข้อมูลผู้ติดต่อ*</h4>

                <div class="form-grid-2" style="margin-top: 16px;">
                  <div class="form-group">
                    <div class="input-with-icon">
                      <input type="text" v-model="taxInfo.contactFirstName" placeholder="สมชาย" class="form-input" />
                      <label class="floating-label" style="left: 12px;">ชื่อ</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-with-icon">
                      <input type="text" v-model="taxInfo.contactLastName" placeholder="ใจดี" class="form-input" />
                      <label class="floating-label" style="left: 12px;">นามสกุล</label>
                    </div>
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <div class="phone-input-wrapper-styled">
                      <div class="country-flag">
                        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                          <rect width="24" height="16" rx="2" fill="#F4F4F4"/>
                          <rect y="0" width="24" height="3.2" fill="#ED1C24"/>
                          <rect y="3.2" width="24" height="3.2" fill="white"/>
                          <rect y="6.4" width="24" height="3.2" fill="#241D4F"/>
                          <rect y="9.6" width="24" height="3.2" fill="white"/>
                          <rect y="12.8" width="24" height="3.2" fill="#ED1C24"/>
                        </svg>
                      </div>
                      <span class="country-code-text">+66</span>
                      <svg class="caret-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                      <div class="divider-vertical"></div>
                      <input type="tel" v-model="taxInfo.contactPhone" placeholder="909990000" class="phone-input-field" />
                      <label class="floating-label" style="left: 12px;">เบอร์โทรศัพท์</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </section>

        <!-- Address Information -->
        <section class="checkout-section">
          <div class="section-header">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#161C24" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="#161C24" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="section-title">ที่อยู่</h2>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label>ประเทศ <span class="required">*</span></label>
              <select v-model="addressInfo.country" class="form-input">
                <option value="">เลือกประเทศ</option>
                <option value="ไทย">ไทย</option>
                <option value="สหรัฐอเมริกา">สหรัฐอเมริกา</option>
              </select>
            </div>
            <div class="form-group">
              <label>จังหวัด <span class="required">*</span></label>
              <select v-model="addressInfo.province" class="form-input">
                <option value="">เลือกจังหวัด</option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
                <option value="ภูเก็ต">ภูเก็ต</option>
              </select>
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label>เขต/อำเภอ <span class="required">*</span></label>
              <select v-model="addressInfo.district" class="form-input">
                <option value="">เลือกเขต/อำเภอ</option>
                <option value="บางรัก">บางรัก</option>
                <option value="ปทุมวัน">ปทุมวัน</option>
              </select>
            </div>
            <div class="form-group">
              <label>แขวง/ตำบล <span class="required">*</span></label>
              <select v-model="addressInfo.subDistrict" class="form-input">
                <option value="">เลือกแขวง/ตำบล</option>
                <option value="สีลม">สีลม</option>
                <option value="สุริวงศ์">สุริวงศ์</option>
              </select>
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label>ประเภทที่อยู่</label>
              <select v-model="addressInfo.houseType" class="form-input">
                <option value="">เลือกประเภท</option>
                <option value="บ้าน">บ้าน</option>
                <option value="คอนโด">คอนโด</option>
                <option value="อพาร์ทเมนต์">อพาร์ทเมนต์</option>
              </select>
            </div>
            <div class="form-group">
              <label>บ้านเลขที่ <span class="required">*</span></label>
              <input type="text" v-model="addressInfo.houseNumber" placeholder="123" class="form-input" />
            </div>
          </div>

          <div class="form-grid-3">
            <div class="form-group">
              <label>หมู่บ้าน</label>
              <input type="text" v-model="addressInfo.village" placeholder="หมู่บ้าน" class="form-input" />
            </div>
            <div class="form-group">
              <label>อาคาร</label>
              <input type="text" v-model="addressInfo.building" placeholder="ชื่ออาคาร" class="form-input" />
            </div>
            <div class="form-group">
              <label>ซอย</label>
              <input type="text" v-model="addressInfo.soi" placeholder="ซอย" class="form-input" />
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label>ถนน</label>
              <input type="text" v-model="addressInfo.road" placeholder="ถนน" class="form-input" />
            </div>
            <div class="form-group">
              <label>รหัสไปรษณีย์ <span class="required">*</span></label>
              <input type="text" v-model="addressInfo.postalCode" placeholder="10500" maxlength="5" class="form-input" />
            </div>
          </div>

          <!-- Full Address Display -->
          <div class="form-group">
            <label>ที่อยู่เต็ม</label>
            <textarea v-model="fullAddress" class="form-textarea" rows="3" readonly></textarea>
          </div>
        </section>

        <!-- Terms and Conditions -->
        <section class="checkout-section">
          <div class="checkbox-group-vertical">
            <div class="checkbox-item">
              <input type="checkbox" id="terms" v-model="agreements.terms" />
              <label for="terms">ฉันยอมรับ<a href="/terms">ข้อกำหนดและเงื่อนไข</a></label>
            </div>
            <div class="checkbox-item">
              <input type="checkbox" id="privacy" v-model="agreements.privacy" />
              <label for="privacy">ฉันยอมรับ<a href="/privacy-policy">นโยบายความเป็นส่วนตัว</a></label>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Column - Summary -->
      <div class="right-column">
        <div class="summary-card">
          <!-- Car Image -->
          <div class="summary-car-image">
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop" alt="Selected Car" />
          </div>

          <!-- Car Details -->
          <div class="summary-car-details">
            <h3 class="car-title">TOYOTA YARIS CROSS</h3>
            <p class="car-subtitle">หรือรถเทียบเท่า</p>
          </div>

          <!-- Trip Details -->
          <div class="trip-details">
            <div class="trip-row">
              <div class="trip-label">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="2" width="10" height="10" rx="1" stroke="#637381" stroke-width="1.2"/>
                </svg>
                <span>รับรถ</span>
              </div>
              <div class="trip-value">01 ส.ค. 68, 09:00</div>
            </div>
            <div class="trip-row">
              <div class="trip-label">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="5" stroke="#637381" stroke-width="1.2"/>
                </svg>
                <span>สถานที่รับรถ</span>
              </div>
              <div class="trip-value">Suvarnabhumi Airport</div>
            </div>
            <div class="divider"></div>
            <div class="trip-row">
              <div class="trip-label">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="2" width="10" height="10" rx="1" stroke="#637381" stroke-width="1.2"/>
                </svg>
                <span>คืนรถ</span>
              </div>
              <div class="trip-value">03 ส.ค. 68, 09:00</div>
            </div>
            <div class="trip-row">
              <div class="trip-label">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="5" stroke="#637381" stroke-width="1.2"/>
                </svg>
                <span>สถานที่คืนรถ</span>
              </div>
              <div class="trip-value">Suvarnabhumi Airport</div>
            </div>
          </div>

          <!-- Payment Breakdown -->
          <div class="payment-breakdown">
            <h4 class="breakdown-title">รายละเอียดการชำระเงิน</h4>
            <div class="breakdown-row">
              <span>ค่าเช่ารถ (2 วัน)</span>
              <span>฿1,600.00</span>
            </div>
            <div class="breakdown-row">
              <span>ประกันภัย SCDW</span>
              <span>฿500.00</span>
            </div>
            <div class="breakdown-row">
              <span>ค่าบริการรับ-ส่ง</span>
              <span>฿100.00</span>
            </div>
            <div class="breakdown-row discount">
              <span>ส่วนลด (NEWUSER10)</span>
              <span>-฿210.00</span>
            </div>
            <div class="divider"></div>
            <div class="breakdown-row subtotal">
              <span>รวม</span>
              <span>฿1,990.00</span>
            </div>
            <div class="breakdown-row">
              <span>ภาษีมูลค่าเพิ่ม (7%)</span>
              <span>฿139.30</span>
            </div>
          </div>

          <!-- Total -->
          <div class="total-section">
            <div class="total-row">
              <span class="total-label">ยอดรวมทั้งหมด</span>
              <span class="total-amount">฿2,129.30</span>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="payment-method-section">
            <h4 class="payment-title">วิธีการชำระเงิน</h4>
            <div class="payment-options">
              <div class="payment-option" :class="{ active: paymentMethod === 'now' }">
                <input type="radio" id="payNow" value="now" v-model="paymentMethod" />
                <label for="payNow">
                  <div class="radio-circle">
                    <div v-if="paymentMethod === 'now'" class="radio-inner"></div>
                  </div>
                  <div class="payment-details">
                    <span class="payment-name">ชำระทันที</span>
                    <div class="payment-amounts">
                      <span class="discount-badge">ลด 5%</span>
                      <span class="payment-price">฿2,022.84</span>
                    </div>
                  </div>
                </label>
              </div>
              <div class="payment-option" :class="{ active: paymentMethod === 'later' }">
                <input type="radio" id="payLater" value="later" v-model="paymentMethod" />
                <label for="payLater">
                  <div class="radio-circle">
                    <div v-if="paymentMethod === 'later'" class="radio-inner"></div>
                  </div>
                  <div class="payment-details">
                    <span class="payment-name">ชำระทีหลัง</span>
                    <div class="payment-amounts">
                      <span class="payment-price">฿2,129.30</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button class="submit-button" @click="proceedToPayment">
            ดำเนินการต่อ
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l5 5-5 5" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- Credit Card Note -->
          <div class="credit-card-note">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="13" rx="2" stroke="#161C24" stroke-width="1.5"/>
              <path d="M3 10h18" stroke="#161C24" stroke-width="1.5"/>
            </svg>
            <div class="note-content">
              <strong>โปรดเตรียมบัตรเครดิต</strong>
              <ul>
                <li>ชื่อบัตรตรงกับชื่อผู้เช่า</li>
                <li>มีวงเงินอย่างน้อย ฿6,000</li>
                <li>ไม่รับบัตรเดบิต</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Special Offer Cars
// Timer state
const timerMinutes = ref('02')
const timerSeconds = ref('59')

// Timer countdown
const startTimer = () => {
  let totalSeconds = 2 * 60 + 59
  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval)
      return
    }
    totalSeconds--
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    timerMinutes.value = mins.toString().padStart(2, '0')
    timerSeconds.value = secs.toString().padStart(2, '0')
  }, 1000)
}

// Start timer on mount
onMounted(() => {
  startTimer()
})

const specialOfferCars = ref([
  {
    id: 1,
    name: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop',
    transmission: 'ออโต้',
    seats: 5,
    originalPrice: '1000',
    offerPrice: '900',
    priceDiff: '100'
  },
  {
    id: 2,
    name: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop',
    transmission: 'ออโต้',
    seats: 5,
    originalPrice: '1000',
    offerPrice: '900',
    priceDiff: '100'
  },
  {
    id: 3,
    name: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop',
    transmission: 'ออโต้',
    seats: 5,
    originalPrice: '1000',
    offerPrice: '900',
    priceDiff: '100'
  }
])

// Form States
const driverSameAsRenter = ref(true)
const showAdditionalDriver = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const driverInfo = ref({
  title: '',
  firstName: '',
  lastName: ''
})

const additionalDriver = ref({
  title: '',
  firstName: '',
  lastName: ''
})

const accountInfo = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const contactInfo = ref({
  countryCode: '+66',
  phone: '',
  flightNumber: ''
})

const taxInfo = ref({
  wantInvoice: true,
  type: 'personal',
  taxId: '',
  companyTaxId: '',
  contactFirstName: '',
  contactLastName: '',
  contactPhone: ''
})

const addressInfo = ref({
  country: '',
  province: '',
  district: '',
  subDistrict: '',
  houseType: '',
  houseNumber: '',
  village: '',
  building: '',
  soi: '',
  road: '',
  postalCode: ''
})

const agreements = ref({
  terms: false,
  privacy: false
})

const paymentMethod = ref('now')

// Password Validation
const passwordValidation = ref({
  minLength: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumber: false
})

const validatePassword = () => {
  const password = accountInfo.value.password
  passwordValidation.value = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password)
  }
}

// Full Address Computed
const fullAddress = computed(() => {
  const addr = addressInfo.value
  const parts = [
    addr.houseNumber,
    addr.village,
    addr.building,
    addr.soi && `ซอย${addr.soi}`,
    addr.road && `ถนน${addr.road}`,
    addr.subDistrict && `แขวง${addr.subDistrict}`,
    addr.district && `เขต${addr.district}`,
    addr.province,
    addr.postalCode
  ].filter(Boolean)

  return parts.join(' ')
})

// Methods
const toggleAdditionalDriver = () => {
  showAdditionalDriver.value = !showAdditionalDriver.value
}

const selectUpgrade = (car) => {
  console.log('Selected upgrade:', car)
}

const proceedToPayment = () => {
  router.push('/payment')
}
</script>

<style scoped>
.checkout-page {
  background: #F9FAFB;
  min-height: 100vh;
  padding-top: 80px;
}

/* Timer Banner */
.timer-banner {
  background: #FF595A;
  padding: 16px 0;
}

.banner-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.timer-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
  letter-spacing: 0.08px;
}

.timer-text strong {
  font-weight: 700;
}

/* Progress Indicator */
.progress-container {
  background: white;
  padding: 32px 0;
  border-bottom: 1px solid #F4F6F8;
}

.progress-steps {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #F4F6F8;
  color: #919EAB;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
}

.step.completed .step-circle {
  background: #36B37E;
  color: white;
}

.step.active .step-circle {
  background: #FF595A;
  color: white;
}

.step-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.07px;
  white-space: nowrap;
}

.step.active .step-label {
  color: #161C24;
  font-weight: 600;
}

.step-line {
  width: 120px;
  height: 2px;
  background: #F4F6F8;
  margin: 0 16px;
  margin-bottom: 28px;
}

.step-line.completed {
  background: #36B37E;
}

/* Container */
.checkout-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 32px 60px;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 40px;
}

/* Left Column */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Special Offer Section */
.special-offer-section {
  background: linear-gradient(180deg, rgba(255, 89, 90, 1) 0%, rgba(255, 89, 90, 0) 58%), #FFFBFB;
  border-radius: 32px;
  overflow: hidden;
}

.offer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 16px;
}

.offer-header-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.offer-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.gift-icon {
  flex-shrink: 0;
}

.offer-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.14px;
  margin: 0;
}

.offer-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: white;
  letter-spacing: 0.07px;
  margin: 0;
}

.timer-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 8px 12px;
  border-radius: 100px;
  border: 4px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 10.8px 0px rgba(0, 0, 0, 0.09);
}

.timer-badge span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #161C24;
}

.offer-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 32px;
}

.offer-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -47px;
}

.car-image-floating {
  width: 100%;
  height: 165px;
  position: relative;
  z-index: 2;
  margin-bottom: -47px;
}

.car-image-floating img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.offer-card {
  background: white;
  border-radius: 16px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
}

.card-content-inner {
  padding: 60px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -8px;
}

.offer-card .car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  letter-spacing: 0.07px;
  margin: 0;
  text-align: center;
  width: 100%;
}

.car-pricing {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  margin-top: -4px;
}

.car-pricing .currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #161C24;
}

.car-pricing .price-amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #161C24;
}

.car-pricing .price-period {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #5C5858;
}

.car-pricing .price-diff {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #36B37E;
  margin-left: 4px;
}

.card-action {
  padding: 12px 16px;
}

.add-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 16px;
  background: white;
  border: 1px solid #FF595A;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FF595A;
  cursor: pointer;
  transition: all 0.2s;
}

.add-button:hover {
  background: #FFF8F8;
}

.add-button:active {
  transform: scale(0.98);
}

/* Checkout Section Header (Title only) */
.checkout-section-header {
  margin-bottom: 24px;
}

.main-section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.14px;
  margin: 0 0 24px 0;
}

/* Login Prompt Box */
.login-prompt-box {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #FF595A;
  padding: 16px 24px;
  border-radius: 16px;
}

.login-prompt-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.login-prompt-icon svg {
  stroke: white;
}

.login-prompt-content {
  flex: 1;
}

.login-prompt-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
  letter-spacing: 0.08px;
}

.login-prompt-button {
  padding: 10px 24px;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FF595A;
  cursor: pointer;
  transition: all 0.2s;
}

.login-prompt-button:hover {
  background: #FFF4F3;
}

.login-prompt-hint {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.08px;
  margin: 16px 0 0 0;
}

/* Checkout Section */
.checkout-section {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.icon-circle {
  width: 48px;
  height: 48px;
  background: #F9FAFB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.10px;
  margin: 0;
}

/* Form Section */
.form-section {
  margin-bottom: 28px;
}

.form-section:last-child {
  margin-bottom: 0;
}

.form-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.form-header-row.clickable {
  cursor: pointer;
}

.form-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.10px;
  margin: 0;
}

.form-subtitle-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icon {
  cursor: help;
  flex-shrink: 0;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #FF595A;
}

.checkbox-group label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.07px;
  cursor: pointer;
}

/* Styled Checkbox */
.checkbox-group.styled input[type="checkbox"] {
  display: none;
}

.checkbox-group.styled label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #637381;
}

.custom-checkbox {
  width: 22px;
  height: 22px;
  border: 2px solid #DFE3E8;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.checkbox-group.styled input[type="checkbox"]:checked + label .custom-checkbox {
  background: #FF595A;
  border-color: #FF595A;
}

/* Add Driver Button */
.add-driver-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  border: 1.5px solid #FF595A;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.08px;
  cursor: pointer;
  transition: all 0.2s;
}

.add-driver-button:hover {
  background: #FFF4F3;
}

.add-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 1.5px solid #FF595A;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FF595A;
  letter-spacing: 0.07px;
  cursor: pointer;
  transition: all 0.2s;
}

.add-button:hover {
  background: #FFF4F3;
}

/* Form Stack */
.form-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Input with Icon */
.input-with-icon {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
}

.form-input.with-icon {
  padding-left: 48px;
}

.form-input.with-trailing {
  padding-right: 48px;
}

.floating-label {
  position: absolute;
  left: 48px;
  top: -8px;
  background: white;
  padding: 0 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #FF595A;
  letter-spacing: 0.06px;
  pointer-events: none;
}

/* Password Validation List */
.password-validation-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.password-validation-list .validation-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #FF595A;
  letter-spacing: 0.07px;
}

.password-validation-list .validation-item svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.password-validation-list .validation-item.valid {
  color: #36B37E;
}

/* Social Login */
.social-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 8px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #DFE3E8;
}

.divider-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #919EAB;
  letter-spacing: 0.08px;
  white-space: nowrap;
}

.social-login-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 24px;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 16px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.08px;
  cursor: pointer;
  transition: all 0.2s;
}

.social-button:hover {
  background: #F9FAFB;
  border-color: #C4CDD5;
}

.login-link {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.08px;
  text-align: center;
  margin: 0;
}

.login-link a {
  color: #FF595A;
  text-decoration: underline;
}

.login-link a:hover {
  text-decoration: none;
}

/* Tax Invoice Section */
.tax-invoice-header {
  margin-bottom: 0;
}

.tax-checkbox-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.10px;
}

.tax-invoice-content {
  margin-top: 24px;
}

.radio-group-inline {
  display: flex;
  gap: 32px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 0;
}

.radio-option span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FF595A;
  letter-spacing: 0.08px;
}

.radio-option.active span {
  font-weight: 700;
}

.radio-circle-sm {
  width: 20px;
  height: 20px;
  border: 2px solid #FF595A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.radio-inner-sm {
  width: 10px;
  height: 10px;
  background: #FF595A;
  border-radius: 50%;
}

.contact-person-section {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #F4F6F8;
}

.contact-section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.08px;
  margin: 0;
}

/* Phone Input Styled */
.phone-input-wrapper-styled {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  background: white;
  transition: all 0.2s;
}

.phone-input-wrapper-styled:focus-within {
  border-color: #FF595A;
  box-shadow: 0 0 0 3px rgba(255, 89, 90, 0.1);
}

.country-flag {
  flex-shrink: 0;
}

.country-code-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #161C24;
  letter-spacing: 0.08px;
}

.caret-icon {
  flex-shrink: 0;
}

.divider-vertical {
  width: 1px;
  height: 24px;
  background: #DFE3E8;
  margin: 0 8px;
}

.phone-input-field {
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #161C24;
  letter-spacing: 0.08px;
  background: transparent;
}

.phone-input-field::placeholder {
  color: #919EAB;
}

/* Form Grids */
.form-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-grid-2:last-child {
  margin-bottom: 0;
}

.form-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.07px;
}

.required {
  color: #FF595A;
}

.form-input,
.form-textarea {
  padding: 12px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #161C24;
  letter-spacing: 0.07px;
  outline: none;
  transition: all 0.2s;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #FF595A;
  box-shadow: 0 0 0 3px rgba(255, 89, 90, 0.1);
}

.form-input::placeholder {
  color: #919EAB;
}

.input-hint {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
  letter-spacing: 0.06px;
}

/* Password Input */
.password-input-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

/* Password Validation */
.password-validation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
}

.validation-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
  letter-spacing: 0.06px;
}

.validation-item svg {
  flex-shrink: 0;
  stroke: #DFE3E8;
}

.validation-item.valid {
  color: #36B37E;
}

.validation-item.valid svg {
  stroke: #36B37E;
}

/* Phone Input */
.phone-input-wrapper {
  display: flex;
  gap: 12px;
}

.country-code-select {
  width: 120px;
  padding: 12px;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #161C24;
  outline: none;
  cursor: pointer;
}

.phone-input {
  flex: 1;
}

/* Radio Group */
.radio-group {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}

.radio-item {
  flex: 1;
  padding: 16px 20px;
  border: 2px solid #DFE3E8;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.radio-item.active {
  border-color: #FF595A;
  background: #FFF4F3;
}

.radio-item input[type="radio"] {
  display: none;
}

.radio-item label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #DFE3E8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.radio-item.active .radio-circle {
  border-color: #FF595A;
}

.radio-inner {
  width: 12px;
  height: 12px;
  background: #FF595A;
  border-radius: 50%;
}

.radio-item label span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161C24;
  letter-spacing: 0.07px;
}

/* Checkbox Group Vertical */
.checkbox-group-vertical {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.checkbox-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.checkbox-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #FF595A;
  flex-shrink: 0;
}

.checkbox-item label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.07px;
  cursor: pointer;
  line-height: 1.6;
}

.checkbox-item label a {
  color: #FF595A;
  text-decoration: none;
  margin: 0 4px;
}

.checkbox-item label a:hover {
  text-decoration: underline;
}

/* Additional Driver Form */
.additional-driver-form {
  padding-top: 20px;
}

/* Transitions */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 200px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Right Column */
.right-column {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.summary-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}

.summary-car-image {
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.summary-car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.summary-car-details {
  padding: 20px 24px;
  border-bottom: 1px solid #F4F6F8;
}

.car-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.10px;
  margin: 0 0 4px 0;
}

.car-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.07px;
  margin: 0;
}

/* Trip Details */
.trip-details {
  padding: 24px;
  border-bottom: 1px solid #F4F6F8;
}

.trip-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.trip-row:last-child {
  margin-bottom: 0;
}

.trip-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.07px;
}

.trip-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161C24;
  letter-spacing: 0.07px;
  text-align: right;
}

.divider {
  height: 1px;
  background: #F4F6F8;
  margin: 16px 0;
}

/* Payment Breakdown */
.payment-breakdown {
  padding: 24px;
  border-bottom: 1px solid #F4F6F8;
}

.breakdown-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.08px;
  margin: 0 0 16px 0;
}

.breakdown-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
  letter-spacing: 0.07px;
}

.breakdown-row:last-child {
  margin-bottom: 0;
}

.breakdown-row.discount {
  color: #36B37E;
}

.breakdown-row.subtotal {
  font-weight: 600;
  color: #161C24;
  margin-top: 16px;
  padding-top: 16px;
}

/* Total Section */
.total-section {
  padding: 24px;
  background: #FFF4F3;
  border-bottom: 1px solid #F4F6F8;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.08px;
}

.total-amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.12px;
}

/* Payment Method Section */
.payment-method-section {
  padding: 24px;
}

.payment-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.08px;
  margin: 0 0 16px 0;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.payment-option {
  padding: 16px;
  border: 2px solid #DFE3E8;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.payment-option.active {
  border-color: #FF595A;
  background: #FFF4F3;
}

.payment-option input[type="radio"] {
  display: none;
}

.payment-option label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.payment-details {
  flex: 1;
}

.payment-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161C24;
  letter-spacing: 0.07px;
  display: block;
  margin-bottom: 6px;
}

.payment-amounts {
  display: flex;
  align-items: center;
  gap: 8px;
}

.discount-badge {
  background: #36B37E;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06px;
}

.payment-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.09px;
}

/* Submit Button */
.submit-button {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF595A 100%);
  border: none;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.08px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
  margin-bottom: 20px;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 16px rgba(255, 89, 90, 0.4);
}

/* Credit Card Note */
.credit-card-note {
  display: flex;
  gap: 12px;
  padding: 16px 24px 24px;
}

.note-content {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #637381;
  letter-spacing: 0.06px;
  line-height: 1.6;
}

.note-content strong {
  color: #161C24;
  font-size: 14px;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}

.note-content ul {
  margin: 0;
  padding-left: 20px;
}

.note-content li {
  margin-bottom: 4px;
}

/* Responsive */
@media (max-width: 1024px) {
  .checkout-container {
    grid-template-columns: 1fr;
  }

  .right-column {
    position: static;
  }

  .offer-cards {
    grid-template-columns: 1fr;
  }

  .form-grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .checkout-container {
    padding: 20px 16px 40px;
  }

  .checkout-section {
    padding: 20px;
  }

  .form-grid-2 {
    grid-template-columns: 1fr;
  }

  .progress-steps {
    padding: 0 16px;
  }

  .step-line {
    width: 60px;
    margin: 0 8px;
  }

  .step-label {
    font-size: 12px;
  }
}
</style>
