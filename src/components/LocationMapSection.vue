<template>
  <section class="location-section">
    <div class="location-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          เข้ารถได้สะดวก <span class="highlight">ทุกจุดหมาย</span>
        </h2>
        <p class="section-subtitle">สามารถรองรับทั้งในกรุงเทพ</p>
        <p class="section-subtitle">สนามบิน และเมืองหลักทั่วประเทศ</p>
      </div>

      <!-- Map Container -->
      <div class="map-container">
        <!-- Thailand Map with Markers -->
        <div class="map-wrapper">
          <!-- Simple Thailand Map SVG -->
          <div class="thailand-map">
            <svg viewBox="0 0 800 1000" class="map-svg">
              <!-- Thailand outline (simplified) -->
              <path
                d="M 300,100 C 320,80 350,70 380,80 L 420,100 L 450,150 L 480,200 L 500,280 L 490,350 L 470,420 L 450,500 L 440,580 L 430,650 L 420,720 L 410,780 L 400,850 L 390,900 C 380,920 370,930 350,920 L 320,900 L 300,870 L 280,820 L 270,760 L 280,700 L 290,640 L 300,580 L 310,520 L 320,460 L 330,400 L 340,340 L 330,280 L 320,220 L 310,160 Z"
                fill="#E8E8E8"
                stroke="#D0D0D0"
                stroke-width="2"
              />
            </svg>

            <!-- Location Markers -->
            <div
              v-for="(location, index) in locations"
              :key="index"
              class="location-marker"
              :style="{ top: location.y + '%', left: location.x + '%' }"
            >
              <div class="marker-dot"></div>
            </div>
          </div>

          <!-- Location Lists -->
          <div class="locations-list">
            <!-- North -->
            <div class="location-group north">
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินเชียงใหม่</span>
              </div>
              <div class="location-item select">
                <span class="dot"></span>
                <span class="text">สาขา เชียงใหม่ (SELECT)</span>
              </div>
            </div>

            <!-- Northeast -->
            <div class="location-group northeast">
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินสุราษฎร์</span>
              </div>
            </div>

            <!-- Central -->
            <div class="location-group central">
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินดอนเมือง</span>
              </div>
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินสุวรรณภูมิ</span>
              </div>
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สาขา เทพารักษ์</span>
              </div>
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สาขา พระราม 6</span>
              </div>
            </div>

            <!-- South -->
            <div class="location-group south">
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินหาดใหญ่</span>
              </div>
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินสมุย</span>
              </div>
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินภูเก็ต</span>
              </div>
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สนามบินกระบี่</span>
              </div>
              <div class="location-item">
                <span class="dot"></span>
                <span class="text">สาขา หาดใหญ่ (ถนนอก) สงขลา</span>
              </div>
            </div>
          </div>

          <!-- Car Image -->
          <div class="car-image">
            <svg viewBox="0 0 200 100" class="car-svg">
              <ellipse cx="100" cy="85" rx="80" ry="8" fill="rgba(0,0,0,0.1)" />
              <rect x="40" y="35" width="120" height="40" rx="8" fill="#9E9E9E" />
              <rect x="50" y="45" width="100" height="20" rx="4" fill="#757575" />
              <circle cx="65" cy="75" r="10" fill="#424242" />
              <circle cx="135" cy="75" r="10" fill="#424242" />
              <circle cx="65" cy="75" r="6" fill="#616161" />
              <circle cx="135" cy="75" r="6" fill="#616161" />
            </svg>
          </div>
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
  font-size: 42px;
  color: #161c24;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.21px;
}

.section-title .highlight {
  color: #ff595a;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #637381;
  margin: 0;
  letter-spacing: 0.09px;
}

.map-container {
  position: relative;
  min-height: 600px;
}

.map-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #FAFAFA;
  padding: 40px;
}

.thailand-map {
  position: relative;
  width: 400px;
  height: 500px;
  margin: 0 auto;
}

.map-svg {
  width: 100%;
  height: 100%;
}

.location-marker {
  position: absolute;
  z-index: 2;
  transform: translate(-50%, -50%);
}

.marker-dot {
  width: 12px;
  height: 12px;
  background: #ff595a;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.locations-list {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.location-group {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: auto;
}

.location-group.north {
  top: 10%;
  left: 5%;
}

.location-group.northeast {
  top: 20%;
  right: 8%;
}

.location-group.central {
  top: 35%;
  right: 5%;
}

.location-group.south {
  bottom: 10%;
  right: 8%;
}

.location-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #161c24;
}

.location-item.select {
  font-weight: 600;
}

.location-item .dot {
  width: 6px;
  height: 6px;
  background: #ff595a;
  border-radius: 50%;
  flex-shrink: 0;
}

.location-item .text {
  white-space: nowrap;
}

.car-image {
  position: absolute;
  bottom: 40px;
  left: 80px;
  width: 150px;
  height: 75px;
}

.car-svg {
  width: 100%;
  height: 100%;
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
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .map-container {
    min-height: 500px;
  }

  .thailand-map {
    width: 300px;
    height: 400px;
  }

  .location-item {
    font-size: 12px;
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
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .map-container {
    min-height: 400px;
  }

  .map-wrapper {
    padding: 20px;
  }

  .thailand-map {
    width: 250px;
    height: 320px;
  }

  .location-group {
    font-size: 11px;
  }

  .car-image {
    width: 100px;
    height: 50px;
    left: 40px;
    bottom: 20px;
  }
}
</style>
