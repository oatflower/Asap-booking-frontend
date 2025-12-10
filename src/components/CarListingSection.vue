<template>
  <section class="car-listing-section">
    <div class="car-listing-container">
      <!-- Category Tabs -->
      <div class="category-tabs">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="['category-tab', { active: selectedCategory === category.id }]"
          @click="selectedCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Filters Bar -->
      <div class="filters-bar">
        <!-- Filter Button -->
        <div class="filter-group">
          <button class="filter-button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4h14M5 9h8M8 14h2" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>ตัวกรอง</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="dropdown-icon">
              <path d="M4 6L8 10L12 6" stroke="#637381" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Active Filters -->
          <div class="active-filters">
            <span class="filter-tag">
              2-4
              <button class="remove-filter">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </span>
            <span class="filter-tag">
              ออโต้
              <button class="remove-filter">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </span>
            <span class="filter-tag">
              รถป...
              <button class="remove-filter">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </span>
          </div>
        </div>

        <!-- Sort Dropdown -->
        <div class="sort-dropdown">
          <label class="sort-label">ตัดให้ดีที่สุด</label>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="dropdown-icon">
            <path d="M4 6L8 10L12 6" stroke="#637381" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Car Grid -->
      <div class="car-grid">
        <div
          v-for="car in cars"
          :key="car.id"
          class="car-card"
          @click="viewCarDetail(car.id)"
        >
          <div class="card-content">
            <!-- Left Side: Car Info -->
            <div class="car-info-left">
              <h3 class="car-name">{{ car.model }}</h3>

              <div class="price-section">
                <div class="current-price">
                  <span class="currency">฿</span>
                  <span class="amount">{{ car.price }}</span>
                  <span class="period">/วัน</span>
                </div>
                <div v-if="car.originalPrice" class="original-price">({{ car.originalPrice }} ฿)</div>
              </div>

              <div v-if="car.coupon" class="coupon-tag">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="coupon-icon">
                  <rect x="3" y="6" width="14" height="8" rx="1.5" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                </svg>
                <span>{{ car.coupon }}</span>
              </div>
            </div>

            <!-- Right Side: Car Image -->
            <div class="car-image-right">
              <img :src="car.image" :alt="car.model" />
              <div class="asap-badge">asap</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <!-- Items per page -->
        <div class="items-per-page">
          <select v-model="itemsPerPage" class="items-select">
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
          </select>
          <span class="items-label">รายการ/หน้า</span>
        </div>

        <!-- Page Numbers -->
        <div class="page-numbers">
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
    </div>

    <!-- Why Choose Us Section -->
    <div class="why-choose-section">
      <div class="why-choose-container">
        <h2 class="why-choose-title">เพราะเราเข้าใจ<br />ทุกความต้องการ</h2>
        <p class="why-choose-subtitle">ของทุกการเดินทาง</p>

        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M32 20v16l8 8" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="feature-text">ปลอดล็อค ทุกการเดินทาง</p>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M20 32h24M32 20l12 12-12 12" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="feature-text">อิสระ ทุกการเดินทาง</p>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M24 40l8-16 8 16M28 35h8" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="feature-text">คุณภาพที่ดี ทุกการเดินทาง</p>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M22 28l10 10 16-16" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="feature-text">อบอุ่น ทุกการเดินทาง</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedCategory = ref('all')
const sortBy = ref('price-low')
const currentPage = ref(1)
const itemsPerPage = ref(9)
const visiblePages = ref([1, 2, 3, 4, 5])

const viewCarDetail = (carId) => {
  router.push(`/car/${carId}`)
}

const categories = ref([
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'compact', name: 'Compact' },
  { id: 'large', name: 'Large Car' },
  { id: 'suv', name: 'SUV / PPV / MPV' },
  { id: 'carriers', name: 'People Carriers' },
  { id: 'pickup', name: 'Pickup/Truck' },
  { id: 'ev', name: 'EV / Hybridge' },
  { id: 'premium', name: 'Premium Cars' }
])

const cars = ref([
  {
    id: 1,
    model: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 2,
    model: 'TOYOTA ALTIS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 3,
    model: 'TOYOTA ALTIS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 4,
    model: 'TOYOTA ALTIS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 5,
    model: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 6,
    model: 'TOYOTA ALTIS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 7,
    model: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 8,
    model: 'TOYOTA ALTIS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  },
  {
    id: 9,
    model: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    price: '800',
    originalPrice: '1,099',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    coupon: 'NEWUSER10',
    specs: {
      seats: '4',
      luggage: '2 ใบเล็ก',
      transmission: 'ออโต้',
      engine: '1,197',
      extra: 'แก๊สโซฮอล'
    }
  }
])
</script>

<style scoped>
.car-listing-section {
  background: #F9FAFB;
  padding: 0 0 0 0;
  min-height: 100vh;
}

.car-listing-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 32px 80px 32px;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.category-tab {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #637381;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.category-tab:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

.category-tab.active {
  background: #FF6B6B;
  border-color: #FF6B6B;
  color: white;
  font-weight: 600;
}

/* Filters Bar */
.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 24px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  padding: 10px 16px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #637381;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-button:hover {
  border-color: #FF6B6B;
}

.active-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #F4F6F8;
  border: 1px solid #DFE3E8;
  border-radius: 6px;
  padding: 6px 10px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #637381;
}

.remove-filter {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #919EAB;
  transition: color 0.2s;
}

.remove-filter:hover {
  color: #FF6B6B;
}

.sort-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 10px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.sort-dropdown:hover {
  border-color: #FF6B6B;
}

.sort-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #161c24;
  white-space: nowrap;
}

.dropdown-icon {
  flex-shrink: 0;
}

/* Car Grid */
.car-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.car-card {
  background: white;
  border-radius: 16px;
  border: 2px solid transparent;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  cursor: pointer;
}

.car-card:hover {
  border-color: #FF6B6B;
  box-shadow: 0px 4px 16px rgba(255, 107, 107, 0.15);
}

.card-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 32px;
  min-height: 280px;
}

/* Left Side - Car Info */
.car-info-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 24px 0;
  line-height: 1.3;
}

.price-section {
  margin-bottom: auto;
}

.current-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
}

.currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #FF4842;
}

.amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #FF4842;
  line-height: 1;
}

.period {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #C4C4C4;
}

.original-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #C4C4C4;
  text-decoration: line-through;
}

.coupon-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}

.coupon-icon {
  flex-shrink: 0;
  opacity: 0.4;
}

.coupon-tag span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #6B6B6B;
}

/* Right Side - Car Image */
.car-image-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.car-image-right img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.asap-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  color: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.3);
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.items-per-page {
  display: flex;
  align-items: center;
  gap: 8px;
}

.items-select {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #161c24;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
}

.items-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
}

.page-numbers {
  display: flex;
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

/* Why Choose Us Section */
.why-choose-section {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  padding: 60px 0;
  border-top-right-radius: 80px;
}

.why-choose-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  text-align: center;
}

.why-choose-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.3;
}

.why-choose-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin: 8px 0 48px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.feature-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin: 0;
  text-align: center;
}

@media (max-width: 1024px) {
  .car-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card-content {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }

  .car-name {
    font-size: 20px;
  }

  .amount {
    font-size: 24px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .category-tabs {
    overflow-x: scroll;
  }

  .filters-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .car-grid {
    grid-template-columns: 1fr;
  }

  .card-content {
    padding: 20px;
  }

  .car-name {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .currency {
    font-size: 20px;
  }

  .amount {
    font-size: 24px;
  }

  .period {
    font-size: 18px;
  }

  .original-price {
    font-size: 14px;
  }

  .coupon-tag span {
    font-size: 14px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .pagination {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
