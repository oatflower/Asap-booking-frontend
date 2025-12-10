<template>
  <section class="travel-blog-section">
    <div class="blog-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">เที่ยวทั่วไทยกับเอเชป</h2>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-button"
          :class="{ active: activeTab === tab.value }"
          @click="activeTab = tab.value"
        >
          {{ tab.label }}
        </button>
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
            <span class="category-badge">{{ blog.category }}</span>
            <h3 class="blog-title">{{ blog.title }}</h3>
            <div class="blog-meta">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="calendar-icon">
                <rect x="3" y="4" width="10" height="9" rx="1" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                <path d="M3 6H13M5 2V4M11 2V4" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
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

const tabs = ref([
  { label: 'กรุงเทพมหานคร', value: 'bangkok' },
  { label: 'กระบี่(หมวดหมู่)', value: 'krabi' },
  { label: 'ภูเก็ต(หมวดหมู่)', value: 'phuket' },
  { label: 'เชียงใหม่', value: 'chiangmai' },
  { label: 'ดูบทความทั้งหมด', value: 'all' }
])

const blogs = ref([
  {
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop',
    category: 'กรุงเทพ',
    title: '13 ที่เที่ยวกรุงเทพ วัยรุ่น 2568 มีครบ แหล่งช้อป เดินชิล บุ ฟเฟ่ต์ ......',
    date: '05/01/2568'
  },
  {
    image: 'https://images.unsplash.com/photo-1563492065213-f0e8a469d6f7?w=600&h=400&fit=crop',
    category: 'กรุงเทพ',
    title: 'รวมพิกัด ที่เที่ยวกรุงเทพ 2025 ตะลุยเมืองให้ตั้ว 3 วัน 2 คืน ไม่ตื....',
    date: '04/01/2568'
  },
  {
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop',
    category: 'กรุงเทพ',
    title: 'ชวนเพื่อนต่างชาติเที่ยวกรุงเทพฯ ที่ไหนดี',
    date: '03/01/2568'
  },
  {
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop',
    category: 'กรุงเทพ',
    title: '43 จุดเช็คอิน เที่ยวย่านเมืองเก่ากรุงเทพ ตลาดน้อย ท่าเตียน สา....',
    date: '02/01/2568'
  }
])
</script>

<style scoped>
.travel-blog-section {
  background: white;
  padding: 80px 0;
  width: 100%;
}

.blog-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-header {
  display: flex;
  align-items: center;
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

.filter-tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 12px 24px;
  border-radius: 50px;
  border: 1px solid #DFE3E8;
  background: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #637381;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #F4F6F8;
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-badge {
  display: inline-block;
  padding: 4px 12px;
  background: #F4F6F8;
  border-radius: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #637381;
  width: fit-content;
}

.blog-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 48px;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 6px;
}

.calendar-icon {
  flex-shrink: 0;
}

.blog-date {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #919EAB;
}

@media (max-width: 1440px) {
  .blog-container {
    padding: 0 100px;
  }

  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .blog-container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .card-image {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .travel-blog-section {
    padding: 60px 0;
  }

  .blog-container {
    padding: 0 20px;
    gap: 24px;
  }

  .section-title {
    font-size: 28px;
  }

  .filter-tabs {
    gap: 8px;
  }

  .tab-button {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 50px;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card-image {
    height: 180px;
  }

  .card-content {
    padding: 16px;
  }

  .blog-title {
    font-size: 15px;
  }
}
</style>
