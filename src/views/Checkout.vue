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
            <h2 class="offer-title">ข้อเสนอพิเศษ!</h2>
            <p class="offer-subtitle">อัปเกรดรถของคุณในราคาพิเศษก่อนสิ้นสุดโปรโมชั่น</p>
          </div>

          <div class="offer-cards">
            <div v-for="car in specialOfferCars" :key="car.id" class="offer-card">
              <div class="offer-badge">ประหยัด 15%</div>
              <div class="car-image">
                <img :src="car.image" :alt="car.name" />
              </div>
              <h3 class="car-name">{{ car.name }}</h3>
              <div class="car-specs">
                <div class="spec-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#637381" stroke-width="1.5"/>
                  </svg>
                  <span>{{ car.transmission }}</span>
                </div>
                <div class="spec-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8h8M8 4v8" stroke="#637381" stroke-width="1.5"/>
                  </svg>
                  <span>{{ car.seats }} ที่นั่ง</span>
                </div>
              </div>
              <div class="car-pricing">
                <div class="original-price">฿{{ car.originalPrice }}/วัน</div>
                <div class="offer-price">฿{{ car.offerPrice }}/วัน</div>
              </div>
              <button class="upgrade-button" @click="selectUpgrade(car)">
                อัปเกรดเลย
              </button>
            </div>
          </div>
        </section>

        <!-- Driver/Renter Information -->
        <section class="checkout-section">
          <div class="section-header">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#161C24" stroke-width="2"/>
                <path d="M5 20c0-3 3-5 7-5s7 2 7 5" stroke="#161C24" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="section-title">ข้อมูลผู้ขับขี่/ผู้เช่า</h2>
          </div>

          <div class="form-section">
            <div class="form-header-row">
              <h3 class="form-subtitle">ผู้เช่า/ผู้ขับขี่</h3>
              <div class="checkbox-group">
                <input type="checkbox" id="sameAsPrimary" v-model="driverSameAsRenter" />
                <label for="sameAsPrimary">ผู้จองคนเดียวกับผู้ขับขี่ (ผู้เช่า)</label>
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
              <h3 class="form-subtitle">ผู้ขับขี่เสริม</h3>
              <button class="add-button" type="button">
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
          <div class="section-header">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#161C24" stroke-width="2"/>
                <path d="M12 8v4M12 16h.01" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h2 class="section-title">ข้อมูลบัญชี</h2>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label>อีเมล <span class="required">*</span></label>
              <input type="email" v-model="accountInfo.email" placeholder="example@email.com" class="form-input" />
            </div>
            <div class="form-group">
              <label>รหัสผ่าน <span class="required">*</span></label>
              <div class="password-input-wrapper">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="accountInfo.password"
                  placeholder="กรอกรหัสผ่าน"
                  class="form-input"
                  @input="validatePassword"
                />
                <button type="button" class="password-toggle" @click="showPassword = !showPassword">
                  <svg v-if="showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 3l14 14M10 7a3 3 0 013 3" stroke="#919EAB" stroke-width="1.5"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="3" stroke="#919EAB" stroke-width="1.5"/>
                    <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#919EAB" stroke-width="1.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Password Validation -->
          <div class="password-validation">
            <div class="validation-item" :class="{ valid: passwordValidation.minLength }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>อย่างน้อย 8 ตัวอักษร</span>
            </div>
            <div class="validation-item" :class="{ valid: passwordValidation.hasUpperCase }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>มีตัวพิมพ์ใหญ่</span>
            </div>
            <div class="validation-item" :class="{ valid: passwordValidation.hasNumber }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>มีตัวเลข</span>
            </div>
            <div class="validation-item" :class="{ valid: passwordValidation.hasSpecial }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>มีอักขระพิเศษ (!@#$%)</span>
            </div>
          </div>
        </section>

        <!-- Contact Information -->
        <section class="checkout-section">
          <div class="section-header">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#161C24" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="section-title">ข้อมูลติดต่อ</h2>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label>เบอร์โทรศัพท์ <span class="required">*</span></label>
              <div class="phone-input-wrapper">
                <select v-model="contactInfo.countryCode" class="country-code-select">
                  <option value="+66">🇹🇭 +66</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+86">🇨🇳 +86</option>
                </select>
                <input type="tel" v-model="contactInfo.phone" placeholder="812345678" class="form-input phone-input" />
              </div>
            </div>
            <div class="form-group">
              <label>หมายเลขเที่ยวบิน (ถ้ามี)</label>
              <input type="text" v-model="contactInfo.flightNumber" placeholder="TG123" class="form-input" />
            </div>
          </div>
        </section>

        <!-- Tax Invoice -->
        <section class="checkout-section">
          <div class="section-header">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#161C24" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="section-title">ใบกำกับภาษี</h2>
          </div>

          <div class="radio-group">
            <div class="radio-item" :class="{ active: taxInfo.type === 'personal' }">
              <input type="radio" id="personal" value="personal" v-model="taxInfo.type" />
              <label for="personal">
                <div class="radio-circle">
                  <div v-if="taxInfo.type === 'personal'" class="radio-inner"></div>
                </div>
                <span>บุคคลธรรมดา</span>
              </label>
            </div>
            <div class="radio-item" :class="{ active: taxInfo.type === 'company' }">
              <input type="radio" id="company" value="company" v-model="taxInfo.type" />
              <label for="company">
                <div class="radio-circle">
                  <div v-if="taxInfo.type === 'company'" class="radio-inner"></div>
                </div>
                <span>นิติบุคคล</span>
              </label>
            </div>
          </div>

          <!-- Tax ID -->
          <div class="form-group">
            <label>เลขประจำตัวผู้เสียภาษี <span class="required">*</span></label>
            <input
              type="text"
              v-model="taxInfo.taxId"
              placeholder="1234567890123"
              maxlength="13"
              class="form-input"
            />
            <span class="input-hint">กรอกเลขประจำตัวผู้เสียภาษี 13 หลัก</span>
          </div>

          <!-- Contact Person -->
          <div class="form-grid-3">
            <div class="form-group">
              <label>คำนำหน้า <span class="required">*</span></label>
              <select v-model="taxInfo.contactTitle" class="form-input">
                <option value="">เลือกคำนำหน้า</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>
            <div class="form-group">
              <label>ชื่อผู้ติดต่อ <span class="required">*</span></label>
              <input type="text" v-model="taxInfo.contactFirstName" placeholder="กรอกชื่อ" class="form-input" />
            </div>
            <div class="form-group">
              <label>นามสกุลผู้ติดต่อ <span class="required">*</span></label>
              <input type="text" v-model="taxInfo.contactLastName" placeholder="กรอกนามสกุล" class="form-input" />
            </div>
          </div>
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Special Offer Cars
const specialOfferCars = ref([
  {
    id: 1,
    name: 'TOYOTA CAMRY 2.5 HV',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop',
    transmission: 'ออโต้',
    seats: 5,
    originalPrice: '1200',
    offerPrice: '1020'
  },
  {
    id: 2,
    name: 'HONDA ACCORD 1.5 TURBO',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop',
    transmission: 'ออโต้',
    seats: 5,
    originalPrice: '1100',
    offerPrice: '935'
  },
  {
    id: 3,
    name: 'MAZDA 3 2.0 SKYACTIV',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop',
    transmission: 'ออโต้',
    seats: 5,
    originalPrice: '950',
    offerPrice: '807'
  }
])

// Form States
const driverSameAsRenter = ref(true)
const showAdditionalDriver = ref(false)
const showPassword = ref(false)

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
  password: ''
})

const contactInfo = ref({
  countryCode: '+66',
  phone: '',
  flightNumber: ''
})

const taxInfo = ref({
  type: 'personal',
  taxId: '',
  contactTitle: '',
  contactFirstName: '',
  contactLastName: ''
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
  hasNumber: false,
  hasSpecial: false
})

const validatePassword = () => {
  const password = accountInfo.value.password
  passwordValidation.value = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
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
  background: linear-gradient(135deg, #FFF4E6 0%, #FFE8E8 100%);
  border-radius: 16px;
  padding: 32px;
}

.offer-header {
  margin-bottom: 24px;
}

.offer-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.12px;
  margin: 0 0 8px 0;
}

.offer-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.07px;
  margin: 0;
}

.offer-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.offer-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  transition: all 0.3s;
}

.offer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
}

.offer-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #36B37E;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06px;
}

.car-image {
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #161C24;
  letter-spacing: 0.08px;
  margin: 0 0 12px 0;
}

.car-specs {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #637381;
  letter-spacing: 0.06px;
}

.car-pricing {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.original-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #919EAB;
  text-decoration: line-through;
  letter-spacing: 0.07px;
}

.offer-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.10px;
}

.upgrade-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF595A 100%);
  border: none;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.07px;
  cursor: pointer;
  transition: all 0.3s;
}

.upgrade-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
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
  font-size: 16px;
  font-weight: 600;
  color: #161C24;
  letter-spacing: 0.08px;
  margin: 0;
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
