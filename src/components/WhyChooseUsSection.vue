<template>
  <section class="why-choose-section">
    <div class="why-container">
      <!-- Header -->
      <div class="section-header">
        <div class="header-text">
          <h2 class="section-title">
            เพราะเรา<span class="highlight">เข้าใจ</span><br>ทุกความต้องการ
          </h2>
          <p class="section-subtitle">ของทุกการเดินทาง</p>
        </div>
        <!-- Logo -->
        <div class="header-logo">
          <img src="@/assets/images/logo.svg" alt="asap" class="logo-img" />
        </div>
      </div>

      <!-- Features Row -->
      <div class="features-row">
        <!-- Feature 1: ปลดล็อก ทุกการเดินทาง -->
        <div class="feature-item">
          <div class="feature-content">
            <img :src="uspIcon1" alt="ปลดล็อก" class="feature-icon" />
            <div class="feature-text">
              <h3 class="feature-title">ปลดล็อก ทุุกการเดินทาง</h3>
              <p class="feature-description">เปิดประสบการณ์การเดินทางแบบไร้ขีดจำกัดกับบริการเช่ารถขับเองคุณภาพสูง จาก asap เหมาะสำหรับท่องเที่ยว เดินทางทำงาน ทั้งเช่ารายวัน รายเดือน</p>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Feature 2: อิสระ ทุกการเดินทาง -->
        <div class="feature-item">
          <div class="feature-content">
            <img :src="uspIcon2" alt="อิสระ" class="feature-icon" />
            <div class="feature-text">
              <h3 class="feature-title">อิสระ ทุกการเดินทาง</h3>
              <p class="feature-description">เลือกเส้นทางและเวลาตามใจได้อย่างเต็มที่ ด้วยรถเช่าหลากหลายรุ่น ตอบโจทย์ทุกความต้องการ เชื่อมต่อทุกการเดินทางอย่างไร้รอยต่อ</p>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Feature 3: ทุกบาทมีค่า ทุกการเดินทาง -->
        <div class="feature-item">
          <div class="feature-content">
            <img :src="uspIcon3" alt="ทุกบาทมีค่า" class="feature-icon" />
            <div class="feature-text">
              <h3 class="feature-title">ทุกบาทมีค่า ทุกการเดินทาง</h3>
              <p class="feature-description">รับประกันราคาดีที่สุด พร้อมโปรโมชันสุดคุ้ม สะสมแต้ม ASC Coin แลกสิทธิประโยชน์มากมาย คุ้มค่าทุกการเช่า</p>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Feature 4: อุ่นใจ ทุกการเดินทาง -->
        <div class="feature-item">
          <div class="feature-content">
            <img :src="uspIcon4" alt="อุ่นใจ" class="feature-icon" />
            <div class="feature-text">
              <h3 class="feature-title">อุ่นใจ ทุกการเดินทาง</h3>
              <p class="feature-description">เดินทางอย่างมั่นใจด้วยระบบดูแลความปลอดภัย รถทุกคันผ่านการตรวจสอบ พร้อมบริการช่วยเหลือฉุกเฉิน 24 ชั่วโมง</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import uspIcon1 from '@/assets/images/usp-icon-1.svg'
import uspIcon2 from '@/assets/images/usp-icon-2.svg'
import uspIcon3 from '@/assets/images/usp-icon-3.svg'
import uspIcon4 from '@/assets/images/usp-icon-4.svg'
</script>

<style scoped>
.why-choose-section {
  background: #ff595a;
  padding: 48px 160px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: 56px;
}

.why-container {
  max-width: 1680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 931px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: white;
  margin: 0;
  line-height: 1.3;
}

.section-title .highlight {
  color: #FFD700;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: white;
  margin: 0;
  opacity: 0.95;
}

.header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  height: 64px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.3;
}

.features-row {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.feature-item {
  flex: 1;
  padding: 0 32px;
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.feature-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.feature-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: white;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.feature-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: white;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
  opacity: 0.9;
}

.divider {
  width: 1px;
  background: white;
  opacity: 0.3;
  align-self: stretch;
}

@media (max-width: 1440px) {
  .why-choose-section {
    padding: 48px 100px;
  }

  .section-title {
    font-size: 36px;
  }

  .feature-title {
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  .why-choose-section {
    padding: 48px 40px;
  }

  .features-row {
    flex-wrap: wrap;
    gap: 24px;
  }

  .feature-item {
    flex: 1 1 45%;
    padding: 16px;
  }

  .divider {
    display: none;
  }
}

@media (max-width: 768px) {
  .why-choose-section {
    padding: 40px 20px;
    border-bottom-right-radius: 32px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .header-logo {
    display: none;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 18px;
  }

  .features-row {
    flex-direction: column;
    gap: 24px;
  }

  .feature-item {
    flex: 1;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .feature-item:last-child {
    border-bottom: none;
  }

  .feature-title {
    font-size: 18px;
  }

  .feature-description {
    font-size: 14px;
  }
}
</style>
