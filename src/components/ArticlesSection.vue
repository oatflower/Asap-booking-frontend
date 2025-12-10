<template>
  <section class="articles-section">
    <div class="articles-container">
      <h1 class="articles-title">บทความ</h1>

      <!-- Filters Row -->
      <div class="filters-row">
        <!-- Search Box -->
        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="ค้นหาบทความ..."
            class="search-input"
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="search-icon">
            <circle cx="9" cy="9" r="6" stroke="#919EAB" stroke-width="1.5" fill="none"/>
            <path d="M13 13l4 4" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- Category Dropdown -->
        <div class="dropdown">
          <label class="dropdown-label">หมวดหมู่</label>
          <select v-model="selectedCategory" class="dropdown-select">
            <option value="all">ทั้งหมด</option>
            <option value="rental">เริ่มต้นเช่ารถ</option>
            <option value="travel">การจองและการยกเลิก</option>
            <option value="voucher">เคล็ดลับและคำแนะนำ</option>
          </select>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="dropdown-icon">
            <path d="M4 6L8 10L12 6" stroke="#637381" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Sort Dropdown -->
        <div class="dropdown">
          <label class="dropdown-label">เรียงตาม</label>
          <select v-model="sortBy" class="dropdown-select">
            <option value="latest">ล่าสุด-เก่าสุด</option>
            <option value="oldest">เก่าสุด-ล่าสุด</option>
            <option value="popular">ยอดนิยม</option>
          </select>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="dropdown-icon">
            <path d="M4 6L8 10L12 6" stroke="#637381" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="articles-grid">
        <router-link
          v-for="article in articles"
          :key="article.id"
          :to="`/articles/${article.id}`"
          class="article-card"
        >
          <div class="article-image">
            <img :src="article.image" :alt="article.title" />
          </div>

          <div class="article-content">
            <span class="article-category">{{ article.category }}</span>
            <h3 class="article-title">{{ article.title }}</h3>
            <div class="article-date">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="3" width="10" height="9" rx="1" stroke="#919EAB" stroke-width="1" fill="none"/>
                <path d="M2 5.5h10M4.5 1.5v2M9.5 1.5v2" stroke="#919EAB" stroke-width="1"/>
              </svg>
              <span>{{ article.date }}</span>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button class="page-arrow" :disabled="currentPage === 1" @click="currentPage--">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 6L8 10L12 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button
          v-for="page in visiblePages"
          :key="page"
          :class="['page-number', { active: page === currentPage }]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>

        <span class="page-dots">...</span>

        <button class="page-number">99</button>

        <button class="page-arrow" @click="currentPage++">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 6L12 10L8 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('all')
const sortBy = ref('latest')
const currentPage = ref(1)
const visiblePages = ref([1, 2, 3, 4, 5])

const articles = ref([
  {
    id: 1,
    category: 'เริ่มต้นเช่ารถ',
    title: 'เช่ารถแบบไหนดี? รถเก๋ง รถ SUV หรือรถตู้',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+1'
  },
  {
    id: 2,
    category: 'เริ่มต้นเช่ารถ',
    title: 'เอกสารที่ต้องใช้ในการเช่ารถมีอะไรบ้าง?',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+2'
  },
  {
    id: 3,
    category: 'เริ่มต้นเช่ารถ',
    title: 'เช่ารถแบบไหนดี? รถเก๋ง รถ SUV หรือรถตู้',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+3'
  },
  {
    id: 4,
    category: 'เริ่มต้นเช่ารถ',
    title: 'มือใหม่เช่ารถต้องอ่าน! เตรียมตัวอย่างไรก่อนเช่ารถครั้งแรก...',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+4'
  },
  {
    id: 5,
    category: 'การจองและการยกเลิก',
    title: 'ขั้นตอนการจองรถออนไลน์ง่ายๆ ใน 5 นาที',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+5'
  },
  {
    id: 6,
    category: 'การจองและการยกเลิก',
    title: 'ยกเลิกการจองรถอย่างไรให้ได้เงินคืนเต็มจำนวน?',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+6'
  },
  {
    id: 7,
    category: 'เคล็ดลับและคำแนะนำ',
    title: '5 ข้อควรรู้ก่อนขับรถเช่าข้ามจังหวัด',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+7'
  },
  {
    id: 8,
    category: 'เคล็ดลับและคำแนะนำ',
    title: '5 ข้อควรรู้ก่อนขับรถเช่าข้ามจังหวัด',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Article+8'
  }
])
</script>

<style scoped>
.articles-section {
  background: #F9FAFB;
  padding: 120px 0 80px 0;
  min-height: 100vh;
}

.articles-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.articles-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #161c24;
  text-align: center;
  margin: 0 0 48px 0;
}

.filters-row {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

.search-box {
  flex: 1;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #161c24;
  outline: none;
  transition: border-color 0.2s;
  background: white;
}

.search-input:focus {
  border-color: #FF6B6B;
}

.search-input::placeholder {
  color: #919EAB;
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 12px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  position: relative;
  min-width: 220px;
}

.dropdown-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #919EAB;
  white-space: nowrap;
}

.dropdown-select {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #161c24;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  appearance: none;
  padding-right: 20px;
  flex: 1;
}

.dropdown-icon {
  position: absolute;
  right: 16px;
  pointer-events: none;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.article-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
}

.article-image {
  width: 100%;
  aspect-ratio: 3/2;
  background: #F4F6F8;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 20px;
}

.article-category {
  display: inline-block;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #FF6B6B;
  background: #FFE4E6;
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.article-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #161c24;
  margin: 0 0 12px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-date {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #919EAB;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.page-arrow {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #637381;
}

.page-arrow:hover:not(:disabled) {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

.page-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #637381;
  cursor: pointer;
  transition: all 0.2s;
}

.page-number:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

.page-number.active {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  border-color: #FF6B6B;
  color: white;
}

.page-dots {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
  padding: 0 4px;
}

@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .articles-section {
    padding: 100px 0 60px 0;
  }

  .articles-title {
    font-size: 32px;
  }

  .filters-row {
    flex-direction: column;
  }

  .dropdown {
    min-width: 100%;
  }

  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
