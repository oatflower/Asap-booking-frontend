<template>
  <section class="mobile-why-choose-us">
    <!-- Header -->
    <div class="section-header">
      <div class="logo-container">
        <img src="@/assets/images/mobile/mobile-asap-logo-white.svg" alt="ASAP" class="logo" />
      </div>
      <div class="title-container">
        <h2 class="main-title">เพราะเราเข้าใจ<br/>ทุกความต้องการ</h2>
        <h3 class="sub-title">ของทุกการเดินทาง</h3>
      </div>
    </div>

    <!-- Benefits List -->
    <div class="benefits-list">
      <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item">
        <div class="benefit-content">
          <img :src="benefit.icon" :alt="benefit.title" class="benefit-icon" />
          <div class="benefit-text">
            <h4 class="benefit-title">{{ benefit.title }}</h4>
            <p class="benefit-description">{{ benefit.description }}</p>
          </div>
        </div>
        <div v-if="index < benefits.length - 1" class="divider"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import icon1 from '@/assets/images/mobile/mobile-why-icon-1.svg'
import icon2 from '@/assets/images/mobile/mobile-why-icon-2.svg'
import icon3 from '@/assets/images/mobile/mobile-why-icon-3.svg'
import icon4 from '@/assets/images/mobile/mobile-why-icon-4.svg'

const benefits = ref([
  {
    icon: icon1,
    title: 'ปลดล็อก ทุุกการเดินทาง',
    description: 'เปิดประสบการณ์การเดินทางแบบไร้ขีดจำกัดกับบริการเช่ารถขับเองคุณภาพสูง จาก asap เหมาะสำหรับท่องเที่ยว เดินทาง ทำงาน ทั้งเช่ารายวัน รายเดือน'
  },
  {
    icon: icon2,
    title: 'อิสระ ทุกการเดินทาง',
    description: 'เลือกเส้นทางและระยะเวลาเช่าได้เอง ตั้งแต่เช่าระยะสั้น จนถึง เช่าระยะยาว เพื่อประสบการณ์การเดินทางที่ตรงใจ และไร้ความกังวล'
  },
  {
    icon: icon3,
    title: 'ทุกนาทีมีค่า ทุกการเดินทาง',
    description: 'เราใส่ใจเวลาของคุณบริการรวดเร็วและเป็นมืออาชีพ พร้อมให้คุณออกเดินทาง ทันที และถึงที่หมายตรงเวลา'
  },
  {
    icon: icon4,
    title: 'อบอุ่น ทุุกการเดินทาง',
    description: 'เดินทางอย่างมั่นใจด้วยทีมบริการลูกค้าพร้อมดูแลตลอดเวลา ตั้งแต่การช่วยเลือก รถเช่าที่เหมาะกับคุณ ไปจนถึง การช่วยเหลือฉุกเฉินบนท้องถนน ตลอด 24 ชั่วโมง'
  }
])
</script>

<style scoped>
.mobile-why-choose-us {
  background: #ff595a;
  border-radius: 0px 0px 40px 0px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  width: 100%;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  width: 163px;
  height: 63px;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8px;
}

.main-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.587;
  color: #ffffff;
  text-align: center;
  margin: 0;
}

.sub-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.587;
  color: #ffffff;
  text-align: center;
  margin: 0;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0;
  width: 100%;
}

.benefit-item {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.benefit-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.benefit-icon {
  width: 48px;
  height: 48px;
}

.benefit-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.benefit-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.587;
  color: #ffffff;
  margin: 0;
}

.benefit-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.587;
  color: #ffffff;
  margin: 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: #ffffff;
}
</style>
