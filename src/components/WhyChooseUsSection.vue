<template>
  <section class="why-choose-section">
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
          <!-- Feature 1: ปลอดสือก -->
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L30 18H42L32 26L36 40L24 32L12 40L16 26L6 18H18L24 4Z" stroke="white" stroke-width="2" fill="none"/>
                <path d="M20 22H28M20 28H28" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="feature-title">ปลอดสือก <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">เปิดประสบการณ์การเดินทางแบบไม่มีสิ่งกีดขวาง จากราคารายปีปกติบุคลนออก สำหรับทุกเที่ยว เดินทางด้วย ทาง asap เพิ่มสะดวกสบายของคุณทุกเส้นทาง กับผ่าตะเข้บรายเดือน</p>
          </div>

          <!-- Feature 2: อิสระ -->
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="12" y="20" width="24" height="16" rx="2" stroke="white" stroke-width="2" fill="none"/>
                <path d="M24 20V12M18 12H30" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <circle cx="20" cy="28" r="2" fill="white"/>
              </svg>
            </div>
            <h3 class="feature-title">อิสระ <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">เลือกเส้นทางและเวลาสะท่อนตามใจได้อย่างเต็มที่ ด้วยเข้ารถระบระดับ จบทั้งบ้านไป เชิงประสมรถการเดินทางที่ตรงใจ และไว้กว่าอุดสงสมเจดจา</p>
          </div>

          <!-- Feature 3: ทุกมาที่มีค่า -->
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="18" width="32" height="20" rx="2" stroke="white" stroke-width="2" fill="none"/>
                <path d="M16 18V14C16 10 18 8 24 8C30 8 32 10 32 14V18" stroke="white" stroke-width="2"/>
                <circle cx="24" cy="28" r="3" stroke="white" stroke-width="2" fill="none"/>
                <path d="M24 31V34" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="feature-title">ทุกมาที่มีค่า <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">ระหัสโฉะะนองคุณ ปลากรรวดเจริงและเป็นงเบิยเฮิอง สองรถ นุ่มทสงหงของคมันหน์ และชั้งเกี้ยบยซองงงตจา</p>
          </div>

          <!-- Feature 4: อบอุ่น -->
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 38C24 38 10 30 10 18C10 12 14 8 18 8C20 8 22 9 24 11C26 9 28 8 30 8C34 8 38 12 38 18C38 30 24 38 24 38Z" stroke="white" stroke-width="2" fill="none"/>
                <rect x="10" y="20" width="28" height="14" rx="2" stroke="white" stroke-width="2" fill="none"/>
                <circle cx="18" cy="27" r="2" fill="white"/>
                <circle cx="30" cy="27" r="2" fill="white"/>
              </svg>
            </div>
            <h3 class="feature-title">อบอุ่น <span class="normal">ทุกการเดินทาง</span></h3>
            <p class="feature-description">เดินทางอย่างมั่นใจด้วยระบบการบริการที่คำนึงถึงความปลอดถัยและดูงดเดกอสจาได รองรับจาร กั้งจ้เคาระหางเรซงเจกงทังจเดียนนกระทบทม ตอบถี 24 ชั่วโมง</p>
          </div>
        </div>
      </div>

      <!-- Right Content - ASAP Logo -->
      <div class="right-content">
        <div class="large-logo">
          <svg viewBox="0 0 400 200" class="logo-svg">
            <!-- Swoosh -->
            <path d="M50 80 Q 80 30, 120 50" stroke="white" stroke-width="8" fill="none" stroke-linecap="round"/>
            <!-- asap text -->
            <text x="140" y="130" fill="white" font-family="Arial, sans-serif" font-size="80" font-weight="bold">asap</text>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.why-choose-section {
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
  .why-choose-section {
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
