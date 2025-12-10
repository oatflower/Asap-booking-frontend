<template>
  <div class="payment-page">
    <!-- Timer Banner -->
    <div class="timer-banner">
      <div class="banner-content">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" opacity="0.5"/>
          <path d="M12 6v6l4 2" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="timer-text">กรุณาทำรายการให้สำเร็จภายใน <strong>09:59</strong> นาที</span>
      </div>
    </div>

    <div class="payment-container">
      <!-- Left Column -->
      <div class="left-column">
        <!-- Payment Gateway Placeholder -->
        <div class="payment-gateway-section">
          <div class="gateway-title">ช่องทางการชำระเงิน<br/>ตาม Payment Gateway</div>
        </div>

        <!-- Car Information Card -->
        <div class="car-info-card">
          <div class="car-header">
            <img src="https://via.placeholder.com/79x79" alt="Car" class="car-image" />
            <div class="car-details">
              <div class="car-name">TOYOTA YARIS ATIV 1.2 CC : BKK</div>
              <div class="car-pricing">
                <span class="currency-symbol">฿</span>
                <span class="car-price">2,100</span>
                <span class="price-period">/ 3 วัน</span>
              </div>
              <div class="car-status">สถานะ: รอชำระเงิน</div>
            </div>
          </div>

          <!-- Trip Details -->
          <div class="trip-details-grid">
            <div class="trip-column">
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
                </svg>
                <span>01 ก.ค. 68, 08:00</span>
              </div>
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                  <circle cx="8" cy="6.91" r="2" fill="#637381"/>
                </svg>
                <span>Suvarnabhumi International Airport</span>
              </div>
            </div>

            <div class="swap-icon-container">
              <div class="swap-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#DFE3E8" opacity="0.2"/>
                  <path d="M8 10h8M12 6l4 4-4 4" stroke="#161C24" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <div class="trip-column">
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
                </svg>
                <span>03 ก.ค. 68, 08:00</span>
              </div>
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                  <circle cx="8" cy="6.91" r="2" fill="#637381"/>
                </svg>
                <span>Don Mueang International Airport</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Information -->
        <div class="booking-info-section">
          <div class="info-grid">
            <div class="info-column">
              <div class="info-row">
                <span class="info-label">ข้อมูลผู้เช่า/ขับขี่</span>
                <span class="info-colon">:</span>
                <span class="info-value">นาย สมชาย ใจดี</span>
              </div>
              <div class="info-row">
                <span class="info-label">ผู้ขับขี่เสริม</span>
                <span class="info-colon">:</span>
                <span class="info-value">-</span>
              </div>
            </div>
            <div class="info-column">
              <div class="info-row">
                <span class="info-label">อีเมล</span>
                <span class="info-colon">:</span>
                <span class="info-value">Example@gmail.com</span>
              </div>
              <div class="info-row">
                <span class="info-label">เบอร์โทรศัพท์</span>
                <span class="info-colon">:</span>
                <div class="phone-value">
                  <div class="flag-container">
                    <div class="flag-thailand"></div>
                  </div>
                  <span class="country-code">+66</span>
                </div>
                <span class="info-value">909990000</span>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- Pickup/Dropoff Services -->
          <div class="pickup-dropoff-section">
            <div class="section-header-row">
              <div class="section-title">จุดรับ/ส่งรถ</div>
              <div class="section-total">
                <span class="total-value">100.00</span>
                <span class="currency">฿</span>
              </div>
            </div>

            <div class="service-timeline">
              <div class="timeline-icons">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.5 1L13.5 14" stroke="#FF595A" stroke-width="2"/>
                </svg>
                <div class="timeline-line"></div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.5 1L13.5 14" stroke="#FF595A" stroke-width="2"/>
                </svg>
              </div>

              <div class="service-details">
                <div class="service-item">
                  <div class="service-date">01/08/2025</div>
                  <div class="service-info-row">
                    <div class="service-label"><span class="label-bold">จุดรับรถ:</span> + บริการ Pick-Up Service</div>
                    <div class="service-price">
                      <span class="price-value">50.00</span>
                      <span class="currency">฿</span>
                    </div>
                  </div>
                  <div class="service-location">Paragon - Exit1</div>
                </div>

                <div class="service-item">
                  <div class="service-date">03/08/2025</div>
                  <div class="service-info-row">
                    <div class="service-label"><span class="label-bold">จุดส่งรถ:</span> + บริการ Drop-Off Service</div>
                    <div class="service-price">
                      <span class="price-value">50.00</span>
                      <span class="currency">฿</span>
                    </div>
                  </div>
                  <div class="service-location">Paragon - Exit1</div>
                </div>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- Service Breakdown -->
          <div class="service-breakdown">
            <div class="breakdown-header">
              <div class="breakdown-title">ค่าบริการ</div>
              <div class="breakdown-total">
                <span class="total-value">2,100.00</span>
                <span class="currency">฿</span>
              </div>
            </div>

            <!-- Car Rental -->
            <div class="breakdown-item">
              <div class="item-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M0.5 2.5H15.5V13.5H0.5V2.5Z" stroke="#D2CFCF"/>
                </svg>
              </div>
              <span class="item-label">ค่าเช่ารถ (x2 วัน)</span>
              <div class="item-price">
                <span class="price-value">2,100.00</span>
                <span class="currency">฿</span>
              </div>
            </div>

            <!-- Insurance -->
            <div class="breakdown-item">
              <div class="item-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2.5H14V13.5H2V2.5Z" stroke="#D2CFCF"/>
                </svg>
              </div>
              <span class="item-label">ประกันภัย</span>
              <div class="item-price">
                <span class="price-value">0.00</span>
                <span class="currency">฿</span>
              </div>
            </div>

            <!-- CDW Detail Box -->
            <div class="insurance-detail-box">
              <div class="detail-box-header">
                <span class="detail-box-title">CDW</span>
                <div class="detail-box-price">
                  <span class="price-value">0.00</span>
                  <span class="currency-small">฿</span>
                </div>
              </div>
              <div class="detail-box-description">คุ้มครองความเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท</div>
            </div>

            <!-- Additional Services -->
            <div class="breakdown-item">
              <div class="item-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.75" stroke="#D2CFCF"/>
                </svg>
              </div>
              <span class="item-label">บริการเสริม</span>
              <div class="item-price">
                <span class="price-value">6,000.00</span>
                <span class="currency">฿</span>
              </div>
            </div>

            <!-- Service Detail Boxes -->
            <div class="service-detail-boxes">
              <div class="service-detail-box">
                <div class="detail-box-header">
                  <span class="detail-box-title">Child Seat</span>
                  <div class="detail-box-price">
                    <span class="price-value-gray">4,000.00</span>
                    <span class="currency-small">฿</span>
                  </div>
                </div>
                <div class="detail-box-description">อุปกรณ์เพื่อความปลอดภัยของเด็กขณะเดินทาง</div>
              </div>

              <div class="service-detail-box">
                <div class="detail-box-header">
                  <span class="detail-box-title">Special assistance</span>
                  <div class="detail-box-price">
                    <span class="price-value-gray">2,000.00</span>
                    <span class="currency-small">฿</span>
                  </div>
                </div>
                <div class="detail-box-description">บริการช่วยเหลือพิเศษที่ผู้ให้บริการจัดเตรียมไว้ให้</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Summary -->
      <div class="right-column">
        <div class="summary-card">
          <h2 class="summary-title">ยอดที่ต้องชำระทั้งหมด</h2>

          <div class="divider"></div>

          <!-- Booking Info Collapsible -->
          <div class="collapsible-section">
            <div class="collapsible-header" @click="toggleSection('booking')">
              <span class="header-label">ข้อมูลการจอง</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :class="{ rotated: !expandedSections.booking }">
                <path d="M8.25 15L12 11.25L15.75 15" stroke="#9C9797" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>

          <div class="divider"></div>

          <!-- Payment Method -->
          <div class="payment-method-section">
            <h3 class="payment-section-title">การชำระเงิน</h3>

            <div class="payment-option-box">
              <div class="payment-header">
                <div class="payment-name-row">
                  <span class="payment-name">ชำระทันที</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7.31" stroke="#637381" stroke-width="1.5" opacity="0.5"/>
                  </svg>
                </div>
                <div class="payment-prices">
                  <span class="old-price">(2,022.30 ฿)</span>
                  <span class="new-price">1,921.18</span>
                  <span class="currency-symbol">฿</span>
                </div>
              </div>

              <div class="payment-features">
                <div class="feature-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3 3 7-7" stroke="rgba(0, 0, 0, 0.80)" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <span>จ่ายก่อนประหยัดกว่า</span>
                </div>
                <div class="feature-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3 3 7-7" stroke="rgba(0, 0, 0, 0.80)" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <span>ชำระเต็มจำนวน</span>
                </div>
                <div class="feature-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3 3 7-7" stroke="rgba(0, 0, 0, 0.80)" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <span>ไม่สามารถยกลิกและเปลี่ยนแปลงการเช่าได้</span>
                </div>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- Terms & Conditions -->
          <div class="terms-section">
            <div class="checkbox-item">
              <input type="checkbox" id="terms1" v-model="agreements.privacy" />
              <label for="terms1">
                <div class="checkbox-box" :class="{ checked: agreements.privacy }">
                  <svg v-if="agreements.privacy" width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <path d="M1 4l3 3 6-6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class="checkbox-text">ฉันได้อ่านและยอมรับข้อกำหนดและเงื่อนไขที่ระบุไว้ใน นโยบายความเป็นส่วนตัว</span>
              </label>
            </div>

            <div class="checkbox-item">
              <input type="checkbox" id="terms2" v-model="agreements.ageRequirement" />
              <label for="terms2">
                <div class="checkbox-box" :class="{ checked: agreements.ageRequirement }">
                  <svg v-if="agreements.ageRequirement" width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <path d="M1 4l3 3 6-6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class="checkbox-text">ผู้ขับขี่อายุมากกว่า 21 ปี *ต้องมีใบขับขี่อย่างน้อย 1 ปี</span>
              </label>
            </div>
          </div>

          <!-- Credit Card Note -->
          <div class="credit-card-note">
            <div class="note-header">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="1.29" y="4.74" width="29.41" height="22.53" rx="2" stroke="black" stroke-width="1.5"/>
                <path d="M1.29 10h29.41" stroke="black" stroke-width="1.5"/>
              </svg>
              <span class="note-title">โปรดเตรียมบัตรเครดิตตัวจริงสำหรับวางมัดจำ</span>
            </div>

            <div class="note-divider"></div>

            <div class="note-content">
              ชื่อบัตร ชื่อเดียวกันกับชื่อผู้จอง<br/>
              มีวงเงินอย่างน้อย 6,000 บาท<br/>
              ไม่รับบัตรเดบิต, บัตรเครดิตของบุคคลอื่น
            </div>
          </div>

          <!-- Price Summary -->
          <div class="price-summary-section">
            <div class="divider"></div>

            <div class="summary-row">
              <span class="summary-label">ราคารวม</span>
              <div class="summary-price">
                <span class="price-value">1,890.00</span>
                <span class="currency">฿</span>
              </div>
            </div>

            <div class="summary-row">
              <span class="summary-label">ภาษีมูลค่าเพิ่ม (7%)</span>
              <div class="summary-price">
                <span class="price-value">132.30</span>
                <span class="currency">฿</span>
              </div>
            </div>

            <div class="summary-row total">
              <span class="summary-label-total">ราคารวมสุทธิ</span>
              <div class="summary-price-total">
                <span class="price-value">2,022.30</span>
                <span class="currency">฿</span>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button class="submit-button" @click="processPayment">
            ชำระเงิน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const expandedSections = ref({
  booking: false
})

const agreements = ref({
  privacy: true,
  ageRequirement: true
})

const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}

const processPayment = () => {
  router.push('/booking-confirmation')
}
</script>

<style scoped>
.payment-page {
  background: white;
  min-height: 100vh;
  padding-top: 61px;
}

/* Timer Banner */
.timer-banner {
  background: #F8F8F8;
  padding: 8px 312px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.timer-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.08px;
}

/* Container */
.payment-container {
  padding: 16px 32px;
  display: grid;
  grid-template-columns: 1fr 389px;
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
}

/* Left Column */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Payment Gateway Section */
.payment-gateway-section {
  height: 416px;
  padding: 16px;
  background: #F8F8F8;
  border-radius: 16px;
  outline: 1px rgba(0, 0, 0, 0.05) solid;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gateway-title {
  text-align: center;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.10px;
}

/* Car Info Card */
.car-info-card {
  padding: 16px;
  background: #F8F8F8;
  border-radius: 16px;
  outline: 1px rgba(0, 0, 0, 0.05) solid;
  outline-offset: -1px;
}

.car-header {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.car-image {
  width: 79px;
  height: 79px;
  border-radius: 8px;
  flex-shrink: 0;
}

.car-details {
  flex: 1;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
  margin-bottom: 4px;
}

.car-pricing {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
}

.currency-symbol {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #837F7F;
  letter-spacing: 0.06px;
}

.car-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.10px;
}

.price-period {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #837F7F;
  letter-spacing: 0.06px;
}

.car-status {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #36B37E;
  letter-spacing: 0.08px;
}

/* Trip Details Grid */
.trip-details-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.trip-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.trip-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.06px;
}

.swap-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swap-icon {
  width: 24px;
  height: 24px;
  border-radius: 100px;
  outline: 1px #DFE3E8 solid;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Booking Information Section */
.booking-info-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-grid {
  display: flex;
  gap: 8px;
}

.info-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  letter-spacing: 0.07px;
}

.info-label {
  width: 100px;
  font-weight: 700;
  color: black;
}

.info-colon {
  font-weight: 700;
  color: black;
}

.info-value {
  font-weight: 400;
  color: black;
}

.phone-value {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag-container {
  width: 24px;
  height: 18px;
  border-radius: 4px;
  outline: 0.25px rgba(0, 0, 0, 0.10) solid;
  outline-offset: -0.25px;
  overflow: hidden;
}

.flag-thailand {
  width: 24px;
  height: 100%;
  background: linear-gradient(to bottom, #2B3990 33%, white 33%, white 66%, #EC1C24 66%);
}

.country-code {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.08px;
}

.divider {
  height: 1px;
  background: #E5E3E3;
}

/* Pickup/Dropoff Section */
.pickup-dropoff-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.section-total {
  display: flex;
  align-items: center;
  gap: 8px;
}

.total-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ADA9A9;
  letter-spacing: 0.07px;
}

.service-timeline {
  display: flex;
  gap: 8px;
}

.timeline-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding-top: 4px;
  padding-bottom: 40px;
}

.timeline-line {
  width: 1px;
  flex: 1;
  background: #FF595A;
  opacity: 0.5;
}

.service-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-item {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.service-date {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.06px;
}

.service-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.service-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.06px;
}

.label-bold {
  font-weight: 700;
}

.service-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.06px;
}

.service-location {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.06px;
}

/* Service Breakdown */
.service-breakdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.breakdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.breakdown-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.breakdown-total {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.item-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.item-label {
  flex: 1;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.06px;
}

.item-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Insurance Detail Box */
.insurance-detail-box {
  margin-left: 24px;
  padding: 8px;
  background: #F8F8F8;
  border-radius: 8px;
}

.detail-box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.detail-box-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.06px;
}

.detail-box-price {
  display: flex;
  align-items: center;
  gap: 4px;
}

.price-value-gray {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9C9797;
  letter-spacing: 0.06px;
}

.currency-small {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #ADA9A9;
  letter-spacing: 0.06px;
}

.detail-box-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.60);
  letter-spacing: 0.06px;
}

/* Service Detail Boxes */
.service-detail-boxes {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.service-detail-box {
  padding: 8px;
  background: #F8F8F8;
  border-radius: 8px;
}

/* Right Column */
.right-column {
  position: sticky;
  top: 80px;
  height: fit-content;
}

.summary-card {
  width: 389px;
  padding: 16px;
  background: white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.10px;
  margin: 0;
}

/* Collapsible Section */
.collapsible-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.collapsible-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
}

.header-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.08px;
}

.collapsible-header svg {
  transition: transform 0.3s;
}

.collapsible-header svg.rotated {
  transform: rotate(180deg);
}

/* Payment Method Section */
.payment-method-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.payment-section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.08px;
  margin: 0;
}

.payment-option-box {
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.payment-name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.payment-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.08px;
}

.payment-prices {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.old-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #9C9797;
  text-decoration: line-through;
  letter-spacing: 0.07px;
}

.new-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.10px;
}

.payment-features {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #212B36;
  letter-spacing: 0.07px;
}

/* Terms Section */
.terms-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.checkbox-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.checkbox-item input[type="checkbox"] {
  display: none;
}

.checkbox-item label {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;
}

.checkbox-box {
  width: 18px;
  height: 18px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: white;
  border: 1px solid #DFE3E8;
  transition: all 0.2s;
}

.checkbox-box.checked {
  background: #FF595A;
  border-color: #FF595A;
}

.checkbox-text {
  flex: 1;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #444444;
  letter-spacing: 0.06px;
  line-height: 1.5;
}

/* Credit Card Note */
.credit-card-note {
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.note-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.note-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.note-divider {
  height: 1px;
  background: #E5E3E3;
}

.note-content {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.06px;
  line-height: 1.6;
}

/* Price Summary Section */
.price-summary-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.summary-row.total {
  margin-bottom: 0;
}

.summary-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: black;
  letter-spacing: 0.06px;
}

.summary-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.summary-label-total {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.10px;
}

.summary-price-total {
  display: flex;
  align-items: center;
  gap: 8px;
}

.summary-price-total .price-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.10px;
}

/* Submit Button */
.submit-button {
  width: 100%;
  height: 44px;
  padding: 10px 32px;
  background: #FF595A;
  border: none;
  border-radius: 16px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.08px;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .payment-container {
    grid-template-columns: 1fr;
  }

  .right-column {
    position: static;
  }

  .summary-card {
    width: 100%;
  }

  .timer-banner {
    padding: 8px 32px;
  }
}

@media (max-width: 768px) {
  .payment-container {
    padding: 16px;
  }

  .info-grid {
    flex-direction: column;
  }

  .trip-details-grid {
    flex-direction: column;
    gap: 8px;
  }

  .swap-icon-container {
    transform: rotate(90deg);
  }
}
</style>
