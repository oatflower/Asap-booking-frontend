<template>
  <section class="article-detail-section">
    <div class="article-detail-container">
      <!-- Article Header -->
      <div class="article-header">
        <h1 class="article-title">{{ article.title }}</h1>
        <div class="article-meta">
          <span class="article-category">{{ article.category }}</span>
          <div class="article-date">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="3" width="10" height="9" rx="1" stroke="#919EAB" stroke-width="1" fill="none"/>
              <path d="M2 5.5h10M4.5 1.5v2M9.5 1.5v2" stroke="#919EAB" stroke-width="1"/>
            </svg>
            <span>{{ article.date }}</span>
          </div>
        </div>
      </div>

      <!-- Article Image -->
      <div class="article-image">
        <img :src="article.image" :alt="article.title" />
      </div>

      <!-- Article Content -->
      <div class="article-content">
        <p v-for="(paragraph, index) in article.content" :key="index">
          {{ paragraph }}
        </p>
      </div>

      <!-- Article Footer -->
      <div class="article-footer">
        <!-- Tags -->
        <div class="article-tags">
          <span class="tags-label">{{ t('articleDetail.tags') }}</span>
          <span class="separator">:</span>
          <a v-for="tag in article.tags" :key="tag" href="#" class="tag-link">#{{ tag }}</a>
        </div>

        <!-- Share -->
        <div class="article-share">
          <span class="share-label">{{ t('articleDetail.share') }}</span>
          <span class="separator">:</span>
          <div class="share-buttons">
            <button class="share-button line">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" fill="#00B900"/>
                <path d="M13 7l-6 6M13 13V7H7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="share-button facebook">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" fill="#1877F2"/>
                <path d="M11 13V10h2l.3-2H11V7c0-.6.1-1 1-1h1V4h-1.5C10 4 9 4.9 9 6.5V8H7v2h2v3h2z" fill="white"/>
              </svg>
            </button>
            <button class="share-button instagram">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="4" width="12" height="12" rx="3" fill="url(#instagram-gradient)"/>
                <circle cx="10" cy="10" r="2.5" stroke="white" stroke-width="1.5" fill="none"/>
                <circle cx="14.5" cy="5.5" r="0.8" fill="white"/>
                <defs>
                  <linearGradient id="instagram-gradient" x1="4" y1="16" x2="16" y2="4">
                    <stop offset="0%" stop-color="#FD5"/>
                    <stop offset="50%" stop-color="#F50"/>
                    <stop offset="100%" stop-color="#C13"/>
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <button class="share-button x">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" fill="#000000"/>
                <path d="M12 6l-4 8M8 6l4 8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Related Articles -->
      <div class="related-articles">
        <h2 class="related-title">{{ t('articleDetail.relatedArticles') }}</h2>
        <div class="related-grid">
          <router-link
            v-for="related in relatedArticles"
            :key="related.id"
            :to="`/articles/${related.id}`"
            class="related-card"
          >
            <div class="related-image">
              <img :src="related.image" :alt="related.title" />
            </div>
            <div class="related-content">
              <span class="related-category">{{ related.category }}</span>
              <h3 class="related-title-text">{{ related.title }}</h3>
              <div class="related-date">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="3" width="10" height="9" rx="1" stroke="#919EAB" stroke-width="1" fill="none"/>
                  <path d="M2 5.5h10M4.5 1.5v2M9.5 1.5v2" stroke="#919EAB" stroke-width="1"/>
                </svg>
                <span>{{ related.date }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/articles" class="breadcrumb-link">{{ t('articleDetail.articles') }}</router-link>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">{{ article.categoryShort }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const article = ref({
  id: 4,
  title: 'มือใหม่เช่ารถต้องอ่าน! เตรียมตัวอย่างไรก่อนเช่ารถครั้งแรก',
  category: 'เริ่มต้นเช่ารถ',
  categoryShort: 'กรอบเนื้อหาแนะนำหลักการจอง',
  date: '01/01/2568',
  image: 'https://via.placeholder.com/800x400?text=Article+Detail',
  tags: ['เริ่มต้นเช่ารถ', 'สnEV', 'Deepal', 'สามแถบบีบีปิง'],
  content: [
    'Lorem ipsum dolor sit amet consectetur. Viverra enim nulla pharetra ut molestie. Diam non augue libero cras in feugiat id. Id turpis vel orci sit at mattis dignissim. Libero elementum ac adipiscing aenean risus. Sem vel donec malesuada ultricies ultrices mattis faucibus varius tristique. Amet enim egestas risus risus sit consequat eget morbi. Ac tempor fames pellentesque a ac in donec. Porttitor orci integer sed dolor donec ac in lorem ultrices. Euismod id neque iaculis consequat.',
    'Lorem ipsum dolor sit amet consectetur. Viverra enim nulla pharetra ut molestie. Diam non augue libero cras in feugiat id. Id turpis vel orci sit at mattis dignissim. Libero elementum ac adipiscing aenean risus. Sem vel donec malesuada ultricies ultrices mattis faucibus varius tristique. Amet enim egestas risus risus sit consequat eget morbi. Ac tempor fames pellentesque a ac in donec. Porttitor orci integer sed dolor donec ac in lorem ultrices. Euismod id neque iaculis consequat.'
  ]
})

const relatedArticles = ref([
  {
    id: 4,
    category: 'เริ่มต้นเช่ารถ',
    title: 'มือใหม่เช่ารถต้องอ่าน! เตรียมตัวอย่างไรก่อนเช่ารถ...',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Related+1'
  },
  {
    id: 2,
    category: 'เริ่มต้นเช่ารถ',
    title: 'เอกสารที่ต้องใช้ในการเช่ารถมีอะไรบ้าง?',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Related+2'
  },
  {
    id: 3,
    category: 'เริ่มต้นเช่ารถ',
    title: 'เช่ารถแบบไหนดี? รถเก๋ง รถ SUV หรือรถตู้',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Related+3'
  },
  {
    id: 1,
    category: 'เริ่มต้นเช่ารถ',
    title: 'เช่ารถแบบไหนดี? รถเก๋ง รถ SUV หรือรถตู้',
    date: '01/01/2568',
    image: 'https://via.placeholder.com/300x200?text=Related+4'
  }
])
</script>

<style scoped>
.article-detail-section {
  background: #F9FAFB;
  padding: 120px 0 80px 0;
  min-height: 100vh;
}

.article-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 32px;
}

.article-header {
  text-align: center;
  margin-bottom: 32px;
}

.article-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #161c24;
  margin: 0 0 16px 0;
  line-height: 1.4;
}

.article-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.article-category {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #FF6B6B;
  background: #FFE4E6;
  padding: 4px 12px;
  border-radius: 4px;
}

.article-date {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #919EAB;
}

.article-image {
  width: 100%;
  aspect-ratio: 2/1;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  margin-bottom: 48px;
}

.article-content p {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #637381;
  line-height: 1.8;
  margin: 0 0 24px 0;
}

.article-footer {
  padding: 24px 0;
  border-top: 1px solid #DFE3E8;
  border-bottom: 1px solid #DFE3E8;
  margin-bottom: 64px;
}

.article-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.tags-label,
.share-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161c24;
}

.separator {
  color: #DFE3E8;
}

.tag-link {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #637381;
  text-decoration: none;
  transition: color 0.2s;
}

.tag-link:hover {
  color: #FF6B6B;
}

.article-share {
  display: flex;
  align-items: center;
  gap: 8px;
}

.share-buttons {
  display: flex;
  gap: 12px;
}

.share-button {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.share-button:hover {
  transform: scale(1.1);
}

.related-articles {
  margin-bottom: 48px;
}

.related-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #161c24;
  margin: 0 0 24px 0;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.related-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
}

.related-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
}

.related-image {
  width: 100%;
  aspect-ratio: 3/2;
  background: #F4F6F8;
  overflow: hidden;
}

.related-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-content {
  padding: 16px;
}

.related-category {
  display: inline-block;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #FF6B6B;
  background: #FFE4E6;
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.related-title-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #161c24;
  margin: 0 0 8px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-date {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
}

.breadcrumb-link {
  color: #637381;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #FF6B6B;
}

.breadcrumb-separator {
  color: #DFE3E8;
}

.breadcrumb-current {
  color: #161c24;
}

@media (max-width: 1024px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .article-detail-section {
    padding: 100px 0 60px 0;
  }

  .article-title {
    font-size: 24px;
  }

  .article-meta {
    flex-direction: column;
    gap: 8px;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
