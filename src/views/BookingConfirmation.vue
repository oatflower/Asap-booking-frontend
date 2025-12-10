<template>
  <div class="confirmation-page">
    <!-- Check-in Success Banner -->
    <div v-if="checkinSuccess" class="checkin-success-banner">
      <div class="banner-content">
        <div class="banner-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="white"/>
            <path d="M8 12l3 3 5-5" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="banner-text">
            <span class="banner-title">{{ t('confirmation.successBanner') }}</span>
            <span class="banner-message">{{ t('confirmation.successMessage') }}</span>
          </div>
        </div>
        <button class="close-banner" @click="checkinSuccess = false">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6l8 8m0-8l-8 8" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="confirmation-container">
      <!-- Success Header -->
      <div class="success-header">
        <div class="success-title">{{ t('confirmation.title') }}</div>
        <div class="success-subtitle">{{ t('confirmation.subtitle') }}</div>
      </div>

      <!-- Credit Card Notice -->
      <div class="credit-card-notice">
        <div class="notice-header">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="1.29" y="4.74" width="29.41" height="22.53" rx="2" stroke="black" stroke-width="1.5"/>
              <path d="M1.29 10h29.41" stroke="black" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="notice-title">{{ t('confirmation.creditCardTitle') }}</div>
        </div>
        <div class="notice-divider"></div>
        <div class="notice-content">
          ชื่อบัตร ชื่อเดียวกันกับชื่อผู้จอง<br/>
          มีวงเงินอย่างน้อย 6,000 บาท<br/>
          ไม่รับบัตรเดบิต, บัตรเครดิตของบุคคลอื่น
        </div>
      </div>

      <!-- Booking Card -->
      <div class="booking-card">
        <div class="booking-title">{{ t('confirmation.booking') }}</div>

        <div class="car-section">
          <img src="https://placehold.co/85x85" alt="Car" class="car-image" />
          <div class="car-info">
            <div class="car-name">TOYOTA YARIS ATIV 1.2 CC : BKK</div>
            <div class="car-pricing">
              <span class="currency-symbol">{{ t('common.baht') }}</span>
              <span class="car-price">2,100</span>
              <span class="price-period">/ 3 {{ t('common.days') }}</span>
            </div>
            <div class="car-status">{{ t('confirmation.status') }}: {{ checkinSuccess ? t('confirmation.statusPaidWaitingPickup') : t('confirmation.statusWaitingCheckin') }}</div>
          </div>
          <div class="booking-code-box">
            <div class="code-label">
              <span>{{ t('checkin.bookingCode') }}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7.5" stroke="#9C9797" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
            <div class="code-value">AB09L</div>
          </div>
        </div>

        <!-- Trip Timeline -->
        <div class="trip-timeline">
          <!-- Pickup -->
          <div class="timeline-section">
            <div class="timeline-row">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
              </svg>
              <span class="timeline-text">01 ก.ค. 68, 08:00</span>
            </div>
            <div class="timeline-row">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                <circle cx="8" cy="6.91" r="2" fill="#637381"/>
              </svg>
              <span class="timeline-text">Suvarnabhumi International Airport</span>
            </div>
          </div>

          <!-- Divider with swap icon -->
          <div class="timeline-divider">
            <div class="divider-line"></div>
            <div class="swap-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#DFE3E8" opacity="0.2"/>
                <path d="M8 10h8M12 6l4 4-4 4" stroke="#161C24" stroke-width="1.5" stroke-linecap="round" opacity="0.2"/>
              </svg>
            </div>
            <div class="divider-line"></div>
          </div>

          <!-- Dropoff -->
          <div class="timeline-section">
            <div class="timeline-row">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
              </svg>
              <span class="timeline-text">03 ก.ค. 68, 08:00</span>
            </div>
            <div class="timeline-row">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                <circle cx="8" cy="6.91" r="2" fill="#637381"/>
              </svg>
              <span class="timeline-text">Don Mueang International Airport</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Booking Information -->
      <div class="info-section">
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
              <span class="info-label">{{ t('confirmation.email') }}</span>
              <span class="info-colon">:</span>
              <span class="info-value">Example@gmail.com</span>
            </div>
            <div class="info-row">
              <span class="info-label">{{ t('confirmation.phone') }}</span>
              <span class="info-colon">:</span>
              <div class="phone-container">
                <div class="flag-box">
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
        <div class="services-section">
          <div class="service-header">
            <span class="service-title">จุดรับ/ส่งรถ</span>
            <div class="service-total">
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
        <div class="breakdown-section">
          <div class="breakdown-header">
            <span class="breakdown-title">ค่าบริการ</span>
            <div class="breakdown-total">
              <span class="total-value">2,100.00</span>
              <span class="currency">฿</span>
            </div>
          </div>

          <!-- Car Rental -->
          <div class="breakdown-item">
            <div class="item-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="0.5" y="2.5" width="15" height="11.5" stroke="#D2CFCF"/>
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
                <rect x="2" y="2.5" width="12" height="12.5" stroke="#D2CFCF"/>
              </svg>
            </div>
            <span class="item-label">ประกันภัย</span>
            <div class="item-price">
              <span class="price-value">0.00</span>
              <span class="currency">฿</span>
            </div>
          </div>

          <!-- CDW Detail Box -->
          <div class="detail-row">
            <div class="invisible-icon"></div>
            <div class="detail-box">
              <div class="detail-box-header">
                <span class="detail-box-title">CDW</span>
                <div class="detail-box-price">
                  <span class="price-value-gray">0.00</span>
                  <span class="currency-small">฿</span>
                </div>
              </div>
              <div class="detail-box-description">คุ้มครองความเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท</div>
            </div>
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
          <div class="detail-row">
            <div class="invisible-icon"></div>
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

        <div class="divider"></div>

        <!-- Discounts -->
        <div class="discount-section">
          <div class="discount-header">
            <span class="discount-title">ส่วนลด</span>
            <div class="discount-total">
              <span class="total-value">-210.00</span>
              <span class="currency">฿</span>
            </div>
          </div>

          <div class="discount-item">
            <div class="item-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" stroke="#D2CFCF"/>
              </svg>
            </div>
            <span class="item-label">NEWUSER10 (-10%)</span>
            <div class="item-price">
              <span class="price-value">-210.00</span>
              <span class="currency">฿</span>
            </div>
          </div>

          <div class="discount-item">
            <div class="item-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" stroke="#D2CFCF"/>
              </svg>
            </div>
            <span class="item-label">ส่วนลดอื่นๆ</span>
            <div class="item-price">
              <span class="price-value">0.00</span>
              <span class="currency">฿</span>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Price Summary -->
        <div class="price-summary">
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
              <span class="price-value-total">2,022.30</span>
              <span class="currency">฿</span>
            </div>
          </div>
        </div>

        <!-- Payment Information -->
        <div class="payment-info-box">
          <div class="payment-header">
            <span class="payment-title">การชำระเงิน</span>
            <span class="payment-status">การชำระเงินสำเร็จ</span>
          </div>

          <div class="payment-row">
            <div class="payment-label-container">
              <span class="payment-label">วันที่ชำระเงิน</span>
              <span class="payment-colon">:</span>
            </div>
            <span class="payment-value">01/12/2025, 24:24</span>
          </div>

          <div class="payment-row">
            <div class="payment-label-container">
              <span class="payment-label">Transaction ID</span>
              <span class="payment-colon">:</span>
            </div>
            <span class="payment-value">0000001</span>
          </div>

          <div class="payment-row">
            <div class="payment-label-container">
              <span class="payment-label">วิธีการชำระเงิน</span>
              <span class="payment-colon">:</span>
            </div>
            <span class="payment-value">Credit Card Master-1234</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button class="btn-secondary" @click="goToHome">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 12.38L5.06 10.69" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>{{ t('confirmation.home') }}</span>
          </button>
          <button class="btn-primary" @click="goToCheckin">
            <span>{{ t('confirmation.checkin') }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const router = useRouter()
const route = useRoute()
const { t } = useLanguage()

// Check if coming from successful check-in
const checkinSuccess = ref(route.query.checkinSuccess === 'true')

const goToHome = () => {
  router.push('/')
}

const goToCheckin = () => {
  // Navigate to check-in page
  console.log('Go to check-in')
}
</script>

<style scoped>
.confirmation-page {
  background: white;
  min-height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 93px;
}

.confirmation-page:has(.checkin-success-banner) {
  padding-top: 150px;
}

.confirmation-container {
  width: 596px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Success Header */
.success-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.success-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.18px;
}

.success-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  letter-spacing: 0.07px;
}

/* Credit Card Notice */
.credit-card-notice {
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.notice-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-icon {
  width: 32px;
  height: 32px;
}

.notice-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.notice-divider {
  height: 1px;
  background: #E5E3E3;
}

.notice-content {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.06px;
  line-height: 1.6;
}

/* Booking Card */
.booking-card {
  padding: 16px;
  background: #F8F8F8;
  border-radius: 16px;
  outline: 1px rgba(0, 0, 0, 0.05) solid;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.booking-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.14px;
}

.car-section {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.car-image {
  width: 85px;
  height: 85px;
  border-radius: 8px;
  flex-shrink: 0;
}

.car-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.car-pricing {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
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
  margin-top: 2px;
}

.booking-code-box {
  padding: 8px 16px;
  background: white;
  border-radius: 12px;
  outline: 1px rgba(0, 0, 0, 0.10) solid;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.code-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: black;
  letter-spacing: 0.08px;
}

.code-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.14px;
}

/* Trip Timeline */
.trip-timeline {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.timeline-section {
  display: flex;
  flex-direction: column;
}

.timeline-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.timeline-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.06px;
}

.timeline-divider {
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 8px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #DFE3E8;
}

.swap-icon-wrapper {
  width: 24px;
  height: 24px;
  border-radius: 100px;
  outline: 1px #DFE3E8 solid;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Info Section */
.info-section {
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

.phone-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag-box {
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

/* Services Section */
.services-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.service-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.service-total {
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

/* Breakdown Section */
.breakdown-section {
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

.detail-row {
  display: flex;
  gap: 8px;
}

.invisible-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  opacity: 0;
}

.detail-box {
  flex: 1;
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

.service-detail-boxes {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.service-detail-box {
  padding: 8px;
  background: #F8F8F8;
  border-radius: 8px;
}

/* Discount Section */
.discount-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.discount-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.discount-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.discount-total {
  display: flex;
  align-items: center;
  gap: 8px;
}

.discount-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

/* Price Summary */
.price-summary {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.summary-row.total {
  margin-top: 0;
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

.price-value-total {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.10px;
}

/* Payment Information */
.payment-info-box {
  padding: 24px;
  background: white;
  border-radius: 24px;
  outline: 1px rgba(0, 0, 0, 0.10) solid;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.10px;
}

.payment-status {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #36B37E;
  letter-spacing: 0.08px;
}

.payment-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.payment-label-container {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 120px;
}

.payment-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.payment-colon {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.07px;
}

.payment-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  letter-spacing: 0.07px;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.btn-secondary {
  height: 40px;
  padding: 10px 16px;
  background: white;
  border-radius: 12px;
  outline: 1px #DFE3E8 solid;
  outline-offset: -1px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #637381;
  letter-spacing: 0.08px;
}

.btn-secondary:hover {
  background: #F9FAFB;
}

.btn-primary {
  height: 44px;
  padding: 10px 32px;
  background: #FF595A;
  border: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.08px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .confirmation-page {
    padding: 16px;
    padding-top: 80px;
  }

  .confirmation-container {
    width: 100%;
  }

  .info-grid {
    flex-direction: column;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-secondary,
  .btn-primary {
    width: 100%;
  }
}

/* Check-in Success Banner */
.checkin-success-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #36B37E 0%, #2D9D6A 100%);
  padding: 16px 32px;
  z-index: 100;
  box-shadow: 0px 4px 12px rgba(54, 179, 126, 0.2);
}

.banner-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.banner-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.close-banner {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.close-banner:hover {
  transform: scale(1.1);
}

.banner-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.banner-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: white;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .checkin-success-banner {
    padding: 12px 16px;
  }

  .banner-title {
    font-size: 16px;
  }

  .banner-message {
    font-size: 13px;
  }
}
</style>
