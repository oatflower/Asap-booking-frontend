<template>
  <section class="promotion-section">
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

      <!-- View More Button -->
      <div class="view-more-wrapper">
        <button class="view-more-btn">
          <span>ดูโปรโมชั่นเพิ่มเติม</span>
          <svg viewBox="0 0 8 12" width="8" height="12">
            <path d="M1.5 1L6.5 6L1.5 11" stroke="#FF595A" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
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
}

.promotion-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-header {
  text-align: center;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
}

.coupons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  justify-items: center;
}

.view-more-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 16px;
}

.view-more-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 12px 24px;
  transition: opacity 0.2s;
}

.view-more-btn span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #FF595A;
}

.view-more-btn:hover {
  opacity: 0.8;
}

@media (max-width: 1440px) {
  .promotion-container {
    padding: 0 100px;
  }
}

@media (max-width: 1200px) {
  .coupons-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 1024px) {
  .promotion-container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 36px;
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

  .view-more-btn span {
    font-size: 16px;
  }
}
</style>
