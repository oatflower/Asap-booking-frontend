<template>
  <section class="promotion-section">
    <!-- Decorative SVG Background -->
    <div class="wave-bg"></div>

    <div class="promotion-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">โปรโมชัน</h2>
      </div>

      <!-- Coupon Cards Grid -->
      <div class="coupons-grid">
        <CouponCard
          v-for="(coupon, index) in coupons"
          :key="index"
          :badge="coupon.badge"
          :title="coupon.title"
          :expireText="coupon.expireText"
          :countdown="coupon.countdown"
          :showCountdown="coupon.showCountdown"
          :code="coupon.code"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CouponCard from './CouponCard.vue'

const coupons = ref([
  {
    badge: 'จองก่อน ลดก่อน',
    title: 'คูปองส่วนลดสูงสุด 50%',
    expireText: 'ใช้สิทธิ์ภายใน: 31 ส.ค. 68',
    countdown: '02:59:00 ชั่วโมง',
    showCountdown: true,
    code: 'NEWCAR1000'
  },
  {
    badge: 'จองก่อน ลดก่อน',
    title: 'คูปองส่วนลดสูงสุด 50%',
    expireText: 'ใช้สิทธิ์ภายใน: 31 ส.ค. 68',
    countdown: '02:59:00 ชั่วโมง',
    showCountdown: true,
    code: 'NEWCAR1000'
  },
  {
    badge: 'จองก่อน ลดก่อน',
    title: 'คูปองส่วนลดสูงสุด 50%',
    expireText: 'ใช้สิทธิ์ภายใน: 31 ส.ค. 68',
    countdown: '02:59:00 ชั่วโมง',
    showCountdown: true,
    code: 'NEWCAR1000'
  }
])
</script>

<style scoped>
.promotion-section {
  background: #f8fafb;
  position: relative;
  padding: 64px 0;
  overflow: hidden;
}

.wave-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 171px;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 89, 90, 0.03) 100%);
  pointer-events: none;
}

.wave-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    rgba(255, 89, 90, 0.1) 0,
    rgba(255, 89, 90, 0.1) 20px,
    transparent 20px,
    transparent 40px
  );
}

.promotion-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #161c24;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
}

.coupons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-items: center;
}

@media (max-width: 1440px) {
  .promotion-container {
    padding: 0 100px;
  }
}

@media (max-width: 1024px) {
  .promotion-container {
    padding: 0 40px;
  }

  .coupons-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .promotion-section {
    padding: 48px 0;
  }

  .promotion-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 28px;
  }

  .coupons-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
