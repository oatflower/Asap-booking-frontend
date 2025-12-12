<template>
  <section class="travel-blog-section">
    <div class="blog-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">เที่ยวทั่วไทยกับเอแซ็ป</h2>

        <!-- Filter Tabs Row -->
        <div class="filter-tabs-row">
          <div class="filter-tabs">
            <button
              v-for="(tab, index) in mainTabs"
              :key="index"
              class="tab-button"
              :class="{ active: activeTab === tab.value }"
              @click="activeTab = tab.value"
            >
              {{ tab.label }}
            </button>
          </div>
          <button class="view-all-button">ดูบทความทั้งหมด</button>
        </div>
      </div>

      <!-- Blog Cards Grid -->
      <div class="blog-grid">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="blog-card"
        >
          <div class="card-image">
            <img :src="blog.image" :alt="blog.title" class="blog-image" />
          </div>
          <div class="card-content">
            <div class="card-text">
              <span class="category-badge">{{ blog.category }}</span>
              <h3 class="blog-title">{{ blog.title }}</h3>
            </div>
            <div class="blog-meta">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="calendar-icon" opacity="0.25">
                <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.6667 1.33333V4" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.33333 1.33333V4" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 6.66667H14" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="blog-date">{{ blog.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('bangkok')

const mainTabs = ref([
  { label: 'กรุงเทพมหานคร', value: 'bangkok' },
  { label: 'กระบี่(หมวดหมู่)', value: 'krabi' },
  { label: 'ภูเก็ต(หมวดหมู่)', value: 'phuket' },
  { label: 'เชียงใหม่', value: 'chiangmai' }
])

const blogs = ref([
  {
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=600&fit=crop',
    category: 'กรุงเทพ',
    title: '13 ที่เที่ยวกรุงเทพ วัยรุ่น 2568 มีครบ แหล่งช้อป เดินชิล มุม ...',
    date: '05/01/2568'
  },
  {
    image: 'https://images.unsplash.com/photo-1563492065213-f0e8a469d6f7?w=600&h=600&fit=crop',
    category: 'กรุงเทพ',
    title: 'รวมพิกัด ที่เที่ยวกรุงเทพ 2025 ตะลุยเมืองให้ฉ่ำ 3 วัน 2 คืน ไม่ต้อง',
    date: '04/01/2568'
  },
  {
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=600&fit=crop',
    category: 'กรุงเทพ',
    title: 'ชวนเพื่อนต่างชาติเที่ยวกรุงเทพฯที่ไหนดี',
    date: '03/01/2568'
  },
  {
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=600&fit=crop',
    category: 'กรุงเทพ',
    title: '43 จุดเช็คอิน เที่ยวย่านเมืองเก่ากรุงเทพ ตลาดน้อย ท่าเตียน สาม ...',
    date: '02/01/2568'
  }
])
</script>

<style scoped>
.travel-blog-section {
  background: white;
  padding: 48px 0 32px;
  width: 100%;
}

.blog-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.5%;
  line-height: 1.587;
}

.filter-tabs-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.filter-tabs {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 4px 20px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #DFE3E8;
  background: transparent;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #161c24;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.tab-button:hover {
  border-color: #FF595A;
  color: #FF595A;
}

.tab-button.active {
  background: #FF595A;
  border-color: #FF595A;
  color: #F8F8F8;
}

.view-all-button {
  padding: 4px 20px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #DFE3E8;
  background: transparent;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #161c24;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.view-all-button:hover {
  border-color: #FF595A;
  color: #FF595A;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.blog-card {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 302px;
  height: 302px;
  overflow: hidden;
  border-radius: 16px;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.05);
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.category-badge {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #9C9797;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.blog-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.calendar-icon {
  flex-shrink: 0;
}

.blog-date {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #837F7F;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

@media (max-width: 1440px) {
  .blog-container {
    padding: 0 100px;
  }

  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .card-image {
    width: 100%;
    height: 280px;
  }
}

@media (max-width: 1200px) {
  .filter-tabs-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

@media (max-width: 1024px) {
  .blog-container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .tab-button,
  .view-all-button {
    font-size: 16px;
    height: 48px;
  }

  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .card-image {
    width: 100%;
    height: 240px;
  }
}

@media (max-width: 768px) {
  .travel-blog-section {
    padding: 40px 0;
  }

  .blog-container {
    padding: 0 20px;
    gap: 20px;
  }

  .section-title {
    font-size: 28px;
  }

  .filter-tabs {
    gap: 8px;
  }

  .tab-button,
  .view-all-button {
    padding: 8px 16px;
    font-size: 14px;
    height: 40px;
    border-radius: 8px;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card-image {
    width: 100%;
    height: 200px;
  }

  .blog-title {
    font-size: 16px;
  }
}
</style>
