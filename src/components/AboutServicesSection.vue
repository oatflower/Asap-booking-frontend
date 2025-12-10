<template>
  <section class="about-services-section">
    <div class="services-container">
      <!-- Section Title -->
      <h2 class="section-title">
        <span class="highlight">เอแซ็ป</span> พร้อมให้บริการ
      </h2>

      <!-- Content Grid -->
      <div class="content-grid">
        <!-- Left Column: Service Tabs -->
        <div class="left-column">
          <h3 class="left-title">ปลดล็อค<br>ทุกข้อจำกัด<br>ของการเดินทาง</h3>

          <div class="service-tabs">
            <button
              v-for="(service, index) in services"
              :key="index"
              class="tab-button"
              :class="{ active: activeTab === index }"
              @click="activeTab = index"
            >
              <span>{{ service.title }}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="chevron-icon">
                <path d="M6 8L10 12L14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Column: Content Display -->
        <div class="right-column">
          <div class="content-card">
            <h4 class="content-title">{{ services[activeTab].contentTitle }}</h4>
            <p class="content-description">{{ services[activeTab].description }}</p>
            <div class="content-tags">
              <span
                v-for="(tag, index) in services[activeTab].tags"
                :key="index"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const services = ref([
  {
    title: 'เช่ารถรายวัน/รายเดือน',
    contentTitle: 'เช่ารถรายวัน/รายเดือน',
    description: 'บริการรถเช่าสำหรับใช้งานรายวัน เหมาะสำหรับการเดินทางระยะสั้น ท่องเที่ยว หรือใช้ในโอกาสพิเศษ',
    tags: ['#รถเช่ารายวัน', '#รถเช่ารายเดือน', '#รถเช่าเดลี่']
  },
  {
    title: 'รถเช่ารายปี (Car Subscription)',
    contentTitle: 'รถเช่ารายปี (Car Subscription)',
    description: 'บริการเช่ารถระยะยาวแบบรายปี เหมาะสำหรับผู้ที่ต้องการความคุ้มค่า ไม่ต้องกังวลเรื่องการบำรุงรักษา',
    tags: ['#รถเช่ารายปี', '#CarSubscription', '#เช่ายาว']
  },
  {
    title: 'รถเช่าสำหรับองค์กร',
    contentTitle: 'รถเช่าสำหรับองค์กร',
    description: 'บริการเช่ารถสำหรับองค์กรและธุรกิจ พร้อมบริการจัดการครบวงจร ราคาพิเศษสำหรับองค์กร',
    tags: ['#รถเช่าองค์กร', '#Corporate', '#B2B']
  },
  {
    title: 'รถเช่าพร้อมคนขับ/พนักงานขับรถ',
    contentTitle: 'รถเช่าพร้อมคนขับ/พนักงานขับรถ',
    description: 'บริการรถเช่าพร้อมพนักงานขับรถมืออาชีพ เพื่อความสะดวกสบายและปลอดภัยสูงสุด',
    tags: ['#รถเช่าพร้อมคนขับ', '#พนักงานขับรถ', '#DriverService']
  }
])
</script>

<style scoped>
.about-services-section {
  background: white;
  padding: 80px 0;
  width: 100%;
}

.services-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  text-align: center;
  margin: 0;
  line-height: 1.3;
}

.section-title .highlight {
  color: #FF6B6B;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: #F9FAFB;
  border-radius: 24px;
  padding: 60px;
}

/* Left Column */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.left-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #161c24;
  margin: 0;
  line-height: 1.4;
}

.service-tabs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tab-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #637381;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.tab-button:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

.tab-button.active {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  border-color: #FF6B6B;
  color: white;
}

.tab-button.active .chevron-icon {
  transform: rotate(180deg);
}

.chevron-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

/* Right Column */
.right-column {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.content-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.content-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #FF6B6B;
  margin: 0;
}

.content-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #637381;
  margin: 0;
  line-height: 1.8;
}

.content-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.tag {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #919EAB;
  padding: 6px 12px;
  background: #F4F6F8;
  border-radius: 6px;
}

@media (max-width: 1440px) {
  .services-container {
    padding: 0 100px;
  }

  .content-grid {
    padding: 48px;
    gap: 48px;
  }

  .section-title {
    font-size: 36px;
  }

  .left-title {
    font-size: 32px;
  }
}

@media (max-width: 1024px) {
  .services-container {
    padding: 0 40px;
  }

  .content-grid {
    grid-template-columns: 1fr;
    padding: 40px;
    gap: 40px;
  }

  .section-title {
    font-size: 32px;
  }

  .left-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .about-services-section {
    padding: 60px 0;
  }

  .services-container {
    padding: 0 20px;
    gap: 32px;
  }

  .content-grid {
    padding: 32px 20px;
    gap: 32px;
  }

  .section-title {
    font-size: 28px;
  }

  .left-title {
    font-size: 24px;
  }

  .tab-button {
    padding: 14px 20px;
    font-size: 15px;
  }

  .content-card {
    padding: 32px 24px;
  }

  .content-title {
    font-size: 20px;
  }

  .content-description {
    font-size: 15px;
  }
}
</style>
