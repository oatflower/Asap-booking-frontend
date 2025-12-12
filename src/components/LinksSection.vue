<template>
  <section class="links-section">
    <div class="links-container">
      <!-- Column 1: เช่าระยะสั้น -->
      <div class="link-column">
        <h4 class="column-title">เช่าระยะสั้น</h4>
        <div class="column-links">
          <a href="#" class="link-item">เช่าระยะสั้น กรุงทพ</a>
          <a href="#" class="link-item">เช่าระยะสั้น เชียงใหม่</a>
          <a href="#" class="link-item">เช่าระยะสั้น อุบลราชธานี</a>
          <a href="#" class="link-item">เช่าระยะสั้น อุดรธานี</a>
          <a href="#" class="link-item">เช่าระยะสั้น กระบี่</a>
          <a href="#" class="link-item">เช่าระยะสั้น ภูเก็ต</a>
          <a href="#" class="link-item">เช่าระยะสั้น สมุย</a>
          <a href="#" class="link-item">เช่าระยะสั้น หาดใหญ่</a>
        </div>
      </div>

      <!-- Column 2: ประเภทรถเช่า -->
      <div class="link-column">
        <h4 class="column-title">ประเภทรถเช่า</h4>
        <div class="column-links">
          <a href="#" class="link-item">เช่ารถเที่ยว</a>
          <a href="#" class="link-item">เช่ารถตู้</a>
          <a href="#" class="link-item">เช่ารถบรรทุก</a>
          <a href="#" class="link-item">เช่ารถธุรกิจ</a>
          <a href="#" class="link-item">เช่ารถผู้บริหาร</a>
          <a href="#" class="link-item">เช่ารถหรู</a>
        </div>
      </div>

      <!-- Column 3: ยี่ห้อรถเช่า -->
      <div class="link-column">
        <h4 class="column-title">ยี่ห้อรถเช่า</h4>
        <div class="column-links">
          <a href="#" class="link-item">เช่ารถ Honda</a>
          <a href="#" class="link-item">เช่ารถ Toyota</a>
          <a href="#" class="link-item">เช่ารถ Nissan</a>
          <a href="#" class="link-item">เช่ารถ Mercedes</a>
          <a href="#" class="link-item">เช่ารถ BMW</a>
          <a href="#" class="link-item">เช่ารถ Mercedes-Benz</a>
        </div>
      </div>

      <!-- Column 4: เที่ยวตามจังหวัด -->
      <div class="link-column">
        <h4 class="column-title">เที่ยวตามจังหวัด</h4>
        <div class="column-links">
          <a href="#" class="link-item">เช่าระยะสั้น กรุงทพ</a>
          <a href="#" class="link-item">เช่าระยะสั้น เชียงใหม่</a>
          <a href="#" class="link-item">เช่าระยะสั้น อุบลราชธานี</a>
          <a href="#" class="link-item">เช่าระยะสั้น อุดรธานี</a>
          <a href="#" class="link-item">เช่าระยะสั้น กระบี่</a>
          <a href="#" class="link-item">เช่าระยะสั้น ภูเก็ต</a>
          <a href="#" class="link-item">เช่าระยะสั้น สมุย</a>
          <a href="#" class="link-item">เช่าระยะสั้น หาดใหญ่</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.links-section {
  background: white;
  padding: 64px 32px;
  width: 100%;
}

.links-container {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0 120px;
  max-width: 1680px;
  margin: 0 auto;
}

.link-column {
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.column-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161C24;
  margin: 0;
  text-align: center;
}

.column-links {
  display: flex;
  flex-direction: column;
}

.link-item {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161C24;
  text-decoration: none;
  text-align: center;
  transition: color 0.2s;
}

.link-item:hover {
  color: #FF595A;
}

@media (max-width: 1440px) {
  .links-container {
    padding: 0 60px;
  }
}

@media (max-width: 1024px) {
  .links-container {
    padding: 0 40px;
  }

  .link-column {
    flex: 1 1 45%;
  }
}

@media (max-width: 768px) {
  .links-section {
    padding: 48px 20px;
  }

  .links-container {
    padding: 0;
    gap: 24px;
  }

  .link-column {
    flex: 1 1 100%;
  }

  .column-title {
    font-size: 18px;
  }

  .link-item {
    font-size: 14px;
  }
}
</style>
