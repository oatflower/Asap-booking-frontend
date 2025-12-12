<template>
  <section class="mobile-travel-blog">
    <!-- Section Title -->
    <h2 class="section-title">เที่ยวทั่วไทยกับเอแซ็ป</h2>

    <!-- Location Tabs -->
    <div class="location-tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-btn"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Blog Cards -->
    <div class="blog-cards">
      <div v-for="(blog, index) in blogs" :key="index" class="blog-card">
        <div class="card-image">
          <img :src="blog.image" :alt="blog.title" />
        </div>
        <div class="card-content">
          <div class="card-text">
            <span class="card-location">{{ blog.location }}</span>
            <h3 class="card-title">{{ blog.title }}</h3>
          </div>
          <div class="card-date">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" opacity="0.25">
              <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6667 1.33333V4" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.33333 1.33333V4" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 6.66667H14" stroke="#282727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ blog.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- See All Button -->
    <div class="see-all-container">
      <button class="see-all-btn">
        <span>ดูทั้งหมด</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import blogImage1 from '@/assets/images/mobile/mobile-blog-1.png'
import blogImage2 from '@/assets/images/mobile/mobile-blog-2.png'
import blogImage3 from '@/assets/images/mobile/mobile-blog-3.png'
import blogImage4 from '@/assets/images/mobile/mobile-blog-4.png'

const tabs = ref(['กรุงเทพมหานคร', 'กระบี่(หมวดหมู่)', 'ภูเก็ต(หมวดหมู่)', 'เชียงใหม่'])
const activeTab = ref(0)

const blogs = ref([
  {
    image: blogImage1,
    location: 'กรุงเทพ',
    title: '13 ที่เที่ยวกรุงเทพ วัยรุ่น 2568 มีครบ แหล่งช้อป เดินชิล มุม ...',
    date: '01/01/2568'
  },
  {
    image: blogImage2,
    location: 'กรุงเทพ',
    title: 'รวมพิกัด ที่เที่ยวกรุงเทพ 2025 ตะลุยเมืองให้ฉ่ำ 3 วัน 2 คืน ไม่ต้อง',
    date: '01/01/2568'
  },
  {
    image: blogImage3,
    location: 'กรุงเทพ',
    title: 'ชวนเพื่อนต่างชาติเที่ยวกรุงเทพฯที่ไหนดี',
    date: '01/01/2568'
  },
  {
    image: blogImage4,
    location: 'กรุงเทพ',
    title: '43 จุดเช็คอิน เที่ยวย่านเมืองเก่ากรุงเทพ ตลาดน้อย ท่าเตียน สาม ...',
    date: '01/01/2568'
  }
])
</script>

<style scoped>
.mobile-travel-blog {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.587;
  color: #161c24;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  margin: 0;
  text-align: center;
}

.location-tabs {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 8px;
}

.location-tabs::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  padding: 8px 16px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid #dfe3e8;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.tab-btn span,
.tab-btn {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.587;
  color: #161c24;
}

.tab-btn.active {
  background: #ff595a;
  border-color: #ff595a;
  color: #f8f8f8;
}

.blog-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;
  width: 100%;
}

.blog-card {
  display: flex;
  background: #ffffff;
  width: 100%;
}

.card-image {
  width: 107px;
  height: 107px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;
  flex: 1;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-location {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.587;
  color: #9c9797;
}

.card-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.587;
  color: #000000;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-date {
  display: flex;
  align-items: center;
  gap: 4px;
}

.card-date span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.587;
  color: #837f7f;
}

.see-all-container {
  display: flex;
  justify-content: center;
}

.see-all-btn {
  padding: 4px 20px;
  height: 56px;
  background: transparent;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.see-all-btn span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.587;
  color: #161c24;
}

.see-all-btn:hover {
  background: #f4f6f8;
}
</style>
