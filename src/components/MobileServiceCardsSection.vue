<template>
  <section class="mobile-service-cards">
    <!-- Section Header -->
    <div class="section-header">
      <h2 class="title-red">เอแซ็ป</h2>
      <h2 class="title-black">พร้อมให้บริการ</h2>
    </div>

    <!-- Service Cards Grid -->
    <div class="cards-grid">
      <!-- Row 1 -->
      <div class="cards-row">
        <div class="service-card card-1">
          <div class="card-content">
            <span class="card-title">รถเช่ารายวัน/<br/>รายเดือน</span>
          </div>
          <div class="arrow-btn">
            <img src="@/assets/images/mobile/mobile-arrow-icon.svg" alt="arrow" />
          </div>
        </div>
        <div class="service-card card-2">
          <div class="card-content">
            <span class="card-title">รถเช่ารายปี<br/>Car Subscription</span>
          </div>
          <div class="arrow-btn">
            <img src="@/assets/images/mobile/mobile-arrow-icon.svg" alt="arrow" />
          </div>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="cards-row">
        <div class="service-card card-3">
          <span class="card-title">รถเช่า<br/>สําหรับองค์กร</span>
          <div class="arrow-btn">
            <img src="@/assets/images/mobile/mobile-arrow-icon.svg" alt="arrow" />
          </div>
        </div>
        <div class="service-card card-4">
          <span class="card-title">รถเช่าพร้อมคนขับ/<br/>พนักงานขับรถ</span>
          <div class="arrow-btn">
            <img src="@/assets/images/mobile/mobile-arrow-icon.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.mobile-service-cards {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.title-red {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.587;
  color: #ff595a;
  margin: 0;
}

.title-black {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.587;
  color: #000000;
  margin: 0;
}

.cards-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
  width: 100%;
}

.cards-row {
  display: flex;
  gap: 24px;
  width: 100%;
}

.service-card {
  flex: 1;
  height: 220px;
  border-radius: 40px 16px 16px 16px;
  padding: 12px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 15.3px 5px rgba(0, 0, 0, 0.07);
}

.card-1 {
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%),
              url('@/assets/images/mobile/mobile-service-card-1-6b16af.png');
  background-size: cover;
  background-position: center;
}

.card-2 {
  background: #ff595a;
  background-image: url('@/assets/images/mobile/mobile-service-card-2.png');
  background-size: cover;
  background-position: center;
}

.card-3 {
  background: #ff595a;
  background-image: url('@/assets/images/mobile/mobile-service-card-3.png');
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
}

.card-4 {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
              url('@/assets/images/mobile/mobile-service-card-4-77bb52.png');
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
}

.card-content {
  display: flex;
  align-items: center;
  height: 64px;
}

.card-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.587;
  color: #f4f6f8;
}

.arrow-btn {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 1000px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-btn img {
  width: 24px;
  height: 24px;
}
</style>
