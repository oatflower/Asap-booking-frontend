<template>
  <section class="mobile-promotion-section">
    <h2 class="section-title">โปรโมชัน</h2>

    <div class="coupons-container">
      <div class="coupons-scroll">
        <div v-for="(coupon, index) in coupons" :key="index" class="coupon-wrapper">
          <!-- Badge -->
          <div class="badge">
            <img src="@/assets/images/mobile/mobile-badge-bg.svg" alt="" class="badge-bg" />
            <span class="badge-text">{{ coupon.badge }}</span>
          </div>

          <!-- Coupon Card -->
          <div class="coupon-card">
            <!-- Notches for coupon effect -->
            <div class="notch notch-left"></div>
            <div class="notch notch-right"></div>

            <div class="coupon-content">
              <!-- Header -->
              <div class="coupon-header">
                <div class="icon-circle">
                  <img src="@/assets/images/mobile/mobile-promo-icon.svg" alt="promo" />
                </div>
                <div class="coupon-title">{{ coupon.title }}</div>
              </div>

              <!-- Details -->
              <div class="coupon-details">
                <div class="detail-row">
                  <span class="expiry-text">ใช้สิทธิ์ภายใน: {{ coupon.expiry }}</span>
                  <div class="countdown">
                    <img src="@/assets/images/mobile/mobile-alarm-icon.svg" alt="alarm" class="alarm-icon" />
                    <span>{{ coupon.countdown }}</span>
                  </div>
                </div>
                <div class="detail-row">
                  <span class="terms-link">รายละเอียดและเงื่อนไข</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="chevron-icon">
                    <path d="M6 4L10 8L6 12" stroke="#161C24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              <!-- Dashed Line -->
              <div class="dashed-line"></div>

              <!-- Footer -->
              <div class="coupon-footer">
                <div class="code-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="copy-icon">
                    <rect x="9" y="9" width="10" height="10" rx="2" stroke="#161C24" stroke-width="1.5" stroke-opacity="0.2"/>
                    <path d="M5 15V7C5 5.89543 5.89543 5 7 5H15" stroke="#161C24" stroke-width="1.5" stroke-opacity="0.2" stroke-linecap="round"/>
                  </svg>
                  <span class="code-text">{{ coupon.code }}</span>
                </div>
                <button class="use-coupon-btn">ใช้คูปอง</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- See More Button -->
    <div class="see-more-container">
      <button class="see-more-btn">
        <span>ดูโปรโมชั่นเพิ่มเติม</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="#FF595A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const coupons = ref([
  {
    badge: 'จองก่อน ลดก่อน',
    title: 'คูปองส่วนลดสูงสุด 50%',
    expiry: '31 ส.ค. 68',
    countdown: '02:59:00 ชั่วโมง',
    code: 'NEWCAR1000'
  },
  {
    badge: 'จองก่อน ลดก่อน',
    title: 'คูปองส่วนลดสูงสุด 50%',
    expiry: '31 ส.ค. 68',
    countdown: '02:59:00 ชั่วโมง',
    code: 'NEWCAR1000'
  },
  {
    badge: 'จองก่อน ลดก่อน',
    title: 'คูปองส่วนลดสูงสุด 50%',
    expiry: '31 ส.ค. 68',
    countdown: '02:59:00 ชั่วโมง',
    code: 'NEWCAR1000'
  }
])
</script>

<style scoped>
.mobile-promotion-section {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
  text-align: center;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  margin: 0;
}

.coupons-container {
  width: 100%;
  overflow: hidden;
}

.coupons-scroll {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
}

.coupon-wrapper {
  position: relative;
  width: 326px;
  height: 220px;
  margin: 0 auto;
}

.badge {
  position: absolute;
  top: -0.14px;
  left: -9px;
  width: 124px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  z-index: 2;
}

.badge-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 124px;
  height: 32px;
}

.badge-text {
  position: relative;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #ff595a;
}

.coupon-card {
  position: absolute;
  top: 12px;
  left: 0;
  width: 326px;
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 0 16px 16px 16px;
  box-shadow: 0px 0px 34px -15px rgba(0, 0, 0, 0.1);
  overflow: visible;
}

.notch {
  position: absolute;
  width: 24px;
  height: 24px;
  background: #f9fafb;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.notch-left {
  left: -12px;
  border-right: 1px solid rgba(40, 39, 39, 0.1);
}

.notch-right {
  right: -12px;
  border-left: 1px solid rgba(40, 39, 39, 0.1);
}

.coupon-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.coupon-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #c4cdd5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-circle img {
  width: 40px;
  height: 40px;
}

.coupon-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #282727;
  flex: 1;
}

.coupon-details {
  display: flex;
  flex-direction: column;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.expiry-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #4f4d4d;
}

.countdown {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #f4f6f8;
  border-radius: 100px;
  padding: 4px 8px;
  height: 24px;
}

.alarm-icon {
  width: 16px;
  height: 16px;
  opacity: 0.8;
}

.countdown span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #ff595a;
}

.terms-link {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.chevron-icon {
  width: 16px;
  height: 16px;
}

.dashed-line {
  width: 100%;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(40, 39, 39, 0.1) 0,
    rgba(40, 39, 39, 0.1) 7px,
    transparent 7px,
    transparent 14px
  );
}

.coupon-footer {
  display: flex;
  align-items: center;
  gap: 8px;
}

.code-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 8px 10px 8px 16px;
}

.copy-icon {
  width: 24px;
  height: 24px;
}

.code-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
  flex: 1;
}

.use-coupon-btn {
  background: #ff595a;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0 16px;
  height: 100%;
  min-height: 40px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  cursor: pointer;
}

.see-more-container {
  display: flex;
  justify-content: center;
  padding: 0 16px;
}

.see-more-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ff595a;
  cursor: pointer;
  padding: 12px 24px;
}

.see-more-btn:hover {
  opacity: 0.8;
}

.see-more-btn svg {
  width: 16px;
  height: 16px;
}
</style>
