<template>
  <section class="mobile-footer-links">
    <!-- Row 1 -->
    <div class="links-row">
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
    </div>

    <!-- Row 2 -->
    <div class="links-row">
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
.mobile-footer-links {
  padding: 32px 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.links-row {
  display: flex;
  gap: 32px;
  width: 100%;
}

.link-column {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.column-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.587;
  color: #161c24;
  margin: 0;
}

.column-links {
  display: flex;
  flex-direction: column;
}

.link-item {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.587;
  color: #161c24;
  text-decoration: none;
  padding: 2px 0;
}

.link-item:hover {
  color: #ff595a;
}
</style>
