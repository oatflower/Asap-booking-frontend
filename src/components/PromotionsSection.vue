<template>
  <section class="promotions-section">
    <div class="promotions-container">
      <h1 class="promotions-title">โปรโมชั่น</h1>

      <!-- Filter Bar -->
      <div class="filter-bar">
        <!-- Search Box -->
        <div class="search-box">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="search-icon">
            <circle cx="9" cy="9" r="6" stroke="#919EAB" stroke-width="1.5" fill="none"/>
            <path d="M13 13l4 4" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="ค้นหาโปรโมชั่น..."
            class="search-input"
          />
        </div>

        <!-- Sort Dropdown -->
        <div class="sort-dropdown">
          <label class="sort-label">เรียงตาม</label>
          <select v-model="sortBy" class="sort-select">
            <option value="expiry">วันหมดอายุ</option>
            <option value="newest">ใหม่ล่าสุด</option>
            <option value="popular">ยอดนิยม</option>
          </select>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="dropdown-icon">
            <path d="M4 6L8 10L12 6" stroke="#637381" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Promotions Grid -->
      <div class="promotions-grid">
        <div
          v-for="promo in promotions"
          :key="promo.id"
          class="promo-card"
        >
          <div class="promo-image">
            <div class="promo-badge">
              <span class="badge-text">เข้ารถ</span>
              <span class="badge-month">JULY SALE</span>
            </div>
            <div class="promo-content-overlay">
              <h2 class="promo-title-large">ถูกคุ้ม</h2>
              <p class="promo-subtitle">จริง</p>
              <p class="promo-subtitle-small">เกินต้าน</p>
            </div>
            <div class="promo-app-badge">
              <img src="data:image/svg+xml,%3Csvg width='60' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='20' rx='10' fill='%23FF6B6B'/%3E%3Ctext x='30' y='14' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3Easap%3C/text%3E%3C/svg%3E" alt="ASAP" class="app-logo" />
              <div class="app-downloads">
                <img src="data:image/svg+xml,%3Csvg width='30' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='10' rx='2' fill='black'/%3E%3C/svg%3E" alt="App Store" />
                <img src="data:image/svg+xml,%3Csvg width='30' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='10' rx='2' fill='black'/%3E%3C/svg%3E" alt="Google Play" />
              </div>
              <p class="download-text">ดาวน์โหลดผ่าน<br />asap app</p>
            </div>
          </div>

          <div class="promo-details">
            <h3 class="promo-title">{{ promo.title }}</h3>
            <div class="promo-expiry">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="calendar-icon">
                <rect x="2" y="3" width="10" height="9" rx="1" stroke="#919EAB" stroke-width="1" fill="none"/>
                <path d="M2 5.5h10M4.5 1.5v2M9.5 1.5v2" stroke="#919EAB" stroke-width="1"/>
              </svg>
              <span>ใช้ลงทะเบียน: {{ promo.expiry }}</span>
            </div>

            <div class="promo-footer">
              <div class="coupon-code">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="ticket-icon">
                  <rect x="1" y="5" width="14" height="6" rx="1" stroke="#919EAB" stroke-width="1" fill="none"/>
                  <path d="M5 5v6M11 5v6" stroke="#919EAB" stroke-width="1" stroke-dasharray="2 2"/>
                </svg>
                <span class="code-text">{{ promo.code }}</span>
              </div>

              <button class="use-coupon-btn" @click="useCoupon(promo.code)">
                ใช้คูปอง
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button class="page-arrow" :disabled="currentPage === 1">
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

        <button class="page-arrow">
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
import { useRouter } from 'vue-router'

const router = useRouter()

const searchQuery = ref('')
const sortBy = ref('expiry')
const currentPage = ref(1)

const visiblePages = ref([1, 2, 3, 4, 5])

const promotions = ref([
  {
    id: 1,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  },
  {
    id: 2,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  },
  {
    id: 3,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  },
  {
    id: 4,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  },
  {
    id: 5,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  },
  {
    id: 6,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  },
  {
    id: 7,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  },
  {
    id: 8,
    title: 'ลดสูงสุด 50% เข้ารถเดือนกรกฎาคม ถูกจริง คุ้มเกินต้าน',
    expiry: '31 ส.ค. 68',
    code: 'NEWCAR10...'
  }
])

const useCoupon = (code) => {
  // Navigate to promotion detail page
  router.push({
    name: 'PromotionDetail',
    params: { id: code }
  })
}
</script>

<style scoped>
.promotions-section {
  background: white;
  padding: 80px 0;
  min-height: 100vh;
}

.promotions-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.promotions-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #000;
  text-align: left;
  margin: 0 0 32px 0;
  line-height: 1.587;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 24px;
}

.search-box {
  flex: 1;
  max-width: 350px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 14px 16px 14px 44px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #161c24;
  outline: none;
  transition: border-color 0.2s;
  background: white;
}

.search-input:focus {
  border-color: #FF595A;
}

.search-input::placeholder {
  color: #919EAB;
}

.sort-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 14px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  position: relative;
}

.sort-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #FF595A;
  white-space: nowrap;
  position: absolute;
  top: -8px;
  left: 12px;
  background: white;
  padding: 0 4px;
}

.sort-select {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161c24;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  appearance: none;
  padding-right: 24px;
}

.dropdown-icon {
  position: absolute;
  right: 16px;
  pointer-events: none;
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.promo-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #DFE3E8;
  transition: all 0.3s ease;
}

.promo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
}

.promo-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #1a1a2e 0%, #2d3142 100%);
  overflow: hidden;
}

.promo-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #FFD93D;
  padding: 4px 12px;
  border-radius: 4px;
  transform: rotate(-5deg);
  z-index: 2;
}

.badge-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #161c24;
  display: block;
}

.badge-month {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #161c24;
}

.promo-content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.promo-title-large {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #FF6B6B;
  margin: 0;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.promo-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 4px 0 0 0;
  line-height: 1;
}

.promo-subtitle-small {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin: 2px 0 0 0;
}

.promo-app-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}

.app-logo {
  height: 20px;
}

.app-downloads {
  display: flex;
  gap: 4px;
}

.app-downloads img {
  height: 12px;
}

.download-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 8px;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.promo-details {
  padding: 16px;
}

.promo-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0 0 12px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.promo-expiry {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}

.promo-expiry span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #919EAB;
}

.promo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.coupon-code {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  background: #F4F6F8;
  padding: 10px 12px;
  border-radius: 12px;
}

.code-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #637381;
}

.use-coupon-btn {
  background: #FF595A;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.use-coupon-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
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
  border-color: #FF595A;
  color: #FF595A;
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
  border-color: #FF595A;
  color: #FF595A;
}

.page-number.active {
  background: #FF595A;
  border-color: #FF595A;
  color: white;
}

.page-dots {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
  padding: 0 4px;
}

@media (max-width: 1024px) {
  .promotions-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .promotions-section {
    padding: 80px 0 60px 0;
  }

  .promotions-title {
    font-size: 26px;
  }

  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    max-width: 100%;
  }

  .promotions-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .promo-title {
    font-size: 16px;
  }

  .promo-expiry span {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .promotions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
