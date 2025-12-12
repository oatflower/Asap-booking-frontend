<template>
  <section class="location-section">
    <div class="location-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">เช่ารถได้สะดวก ทุกจุดหมาย</h2>
        <p class="section-subtitle">สาขาครอบคลุมทั้งในกรุงเทพ<br>สนามบิน และเมืองหลักทั่วประเทศ</p>
      </div>

      <!-- Map Container -->
      <div class="map-container">
        <!-- Thailand Map with Markers -->
        <!-- Map Image -->
        <div class="map-wrapper">
          <img src="@/assets/images/map-with-branches.png" alt="ASAP Location Map" class="map-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const locations = ref([
  { x: 36, y: 12, name: 'เชียงใหม่' },
  { x: 52, y: 18, name: 'สุราษฎร์' },
  { x: 48, y: 35, name: 'กรุงเทพฯ' },
  { x: 50, y: 52, name: 'กลาง' },
  { x: 52, y: 75, name: 'ใต้' }
])
</script>

<style scoped>
.location-section {
  background: white;
  padding: 80px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.location-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 56px;
  color: #161c24;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 32px;
  color: #637381;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}


.map-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.map-wrapper {
  width: 100%;
  max-width: 1000px; /* Adjust based on image resolution */
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 20px; /* Optional rounded corners */
}

@media (max-width: 1440px) {
  .location-container {
    padding: 0 100px;
  }
}

@media (max-width: 1024px) {
  .location-container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 42px;
  }

  .section-subtitle {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .location-section {
    padding: 60px 0;
  }

  .location-container {
    padding: 0 20px;
    gap: 32px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 18px;
  }
}
</style>
