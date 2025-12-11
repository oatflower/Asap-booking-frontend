<template>
  <section class="about-why-section">
    <div class="why-container">
      <!-- Left Content -->
      <div class="left-content">
        <div class="header-content">
          <h2 class="section-title">
            เพราะเรา<span class="highlight">เข้าใจ</span><br>ทุกความต้องการ
          </h2>
          <p class="section-subtitle">ของทุกการเดินทาง</p>
        </div>

        <!-- Features Grid -->
        <div class="features-grid">
          <!-- Feature 1: ปลดล็อก -->
          <div class="feature-item">
            <div class="feature-icon">
              <img :src="uspIcon1" alt="ปลดล็อก" class="icon-img" />
            </div>
            <h3 class="feature-title">ปลดล็อก <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">เปิดประสบการณ์การเดินทางแบบไร้ขีดจำกัดกับบริการเช่ารถขับเองคุณภาพสูง จาก asap เหมาะสำหรับท่องเที่ยว เดินทางทำงาน ทั้งเช่ารายวัน รายเดือน</p>
          </div>

          <!-- Feature 2: อิสระ -->
          <div class="feature-item">
            <div class="feature-icon">
              <img :src="uspIcon2" alt="อิสระ" class="icon-img" />
            </div>
            <h3 class="feature-title">อิสระ <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">เลือกเส้นทางและเวลาตามใจได้อย่างเต็มที่ ด้วยรถเช่าหลากหลายรุ่น ตอบโจทย์ทุกความต้องการ เชื่อมต่อทุกการเดินทางอย่างไร้รอยต่อ</p>
          </div>

          <!-- Feature 3: ทุกบาทมีค่า -->
          <div class="feature-item">
            <div class="feature-icon">
              <img :src="uspIcon3" alt="ทุกบาทมีค่า" class="icon-img" />
            </div>
            <h3 class="feature-title">ทุกบาทมีค่า <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">รับประกันราคาดีที่สุด พร้อมโปรโมชันสุดคุ้ม สะสมแต้ม ASC Coin แลกสิทธิประโยชน์มากมาย คุ้มค่าทุกการเช่า</p>
          </div>

          <!-- Feature 4: อุ่นใจ -->
          <div class="feature-item">
            <div class="feature-icon">
              <img :src="uspIcon4" alt="อุ่นใจ" class="icon-img" />
            </div>
            <h3 class="feature-title">อุ่นใจ <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">เดินทางอย่างมั่นใจด้วยระบบดูแลความปลอดภัย รถทุกคันผ่านการตรวจสอบ พร้อมบริการช่วยเหลือฉุกเฉิน 24 ชั่วโมง</p>
          </div>
        </div>
      </div>

      <!-- Right Content - ASAP Logo -->
      <div class="right-content">
        <div class="large-logo">
          <img :src="logoImg" alt="asap" class="logo-svg" />
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
import logoImg from '@/assets/images/logo.svg'
</script>

<style scoped>
.about-why-section {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 50%, #FF8A8A 100%);
  padding: 80px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: 80px;
}

.why-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  align-items: flex-start;
  gap: 80px;
  position: relative;
}

.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
  z-index: 2;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: white;
  margin: 0;
  line-height: 1.3;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.feature-item {
  padding: 32px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item:last-child {
  border-right: none;
}

.feature-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.feature-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #FFD700;
  margin: 0;
  line-height: 1.4;
}

.feature-title .normal {
  color: white;
  font-weight: 400;
}

.feature-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: white;
  margin: 0;
  line-height: 1.6;
  opacity: 0.9;
}

.right-content {
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  opacity: 0.15;
  pointer-events: none;
}

.large-logo {
  width: 100%;
}

.logo-svg {
  width: 100%;
  height: auto;
  filter: brightness(0) invert(1);
}

@media (max-width: 1440px) {
  .why-container {
    padding: 0 100px;
    gap: 60px;
  }

  .right-content {
    right: 80px;
    width: 350px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .feature-item:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  .feature-item:nth-last-child(-n+2) {
    border-bottom: none;
  }
}

@media (max-width: 1024px) {
  .why-container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 20px;
  }

  .right-content {
    width: 300px;
    opacity: 0.1;
  }
}

@media (max-width: 768px) {
  .about-why-section {
    padding: 60px 0;
    border-bottom-right-radius: 40px;
  }

  .why-container {
    padding: 0 20px;
    gap: 40px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 18px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 24px 16px;
  }

  .feature-item:last-child {
    border-bottom: none;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
  }

  .feature-title {
    font-size: 18px;
  }

  .feature-description {
    font-size: 13px;
  }

  .right-content {
    display: none;
  }
}
</style>
