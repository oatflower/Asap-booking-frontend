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
            <span>ตัวกรอง</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="dropdown-icon">
              <path d="M4 6L8 10L12 6" stroke="#454F5B" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Active Filters -->
          <div class="active-filters">
            <span class="filter-tag">
              <!-- User icon -->
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="filter-icon">
                <path d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z" stroke="#637381" stroke-width="1"/>
                <path d="M10.5 11C10.5 8.51472 8.48528 6.5 6 6.5C3.51472 6.5 1.5 8.51472 1.5 11" stroke="#637381" stroke-width="1" stroke-linecap="round"/>
              </svg>
              <span class="filter-text">2-4</span>
              <button class="remove-filter">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3L9 9M9 3L3 9" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </span>
            <span class="filter-tag">
              <!-- Gear/Auto icon -->
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="filter-icon">
                <rect x="1" y="3" width="3" height="8" rx="0.5" fill="#637381"/>
                <rect x="4.5" y="1" width="3" height="10" rx="0.5" fill="#637381"/>
                <rect x="8" y="5" width="3" height="6" rx="0.5" fill="#637381"/>
              </svg>
              <span class="filter-text">ออโต้</span>
              <button class="remove-filter">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3L9 9M9 3L3 9" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </span>
            <span class="filter-tag">
              <!-- Gas pump icon -->
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="filter-icon">
                <path d="M1.5 10.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H6.5C7.05228 1.5 7.5 1.94772 7.5 2.5V10.5M1.5 10.5H7.5M1.5 10.5H0.5M7.5 10.5H11.5M7.5 5.5H9.5C10.0523 5.5 10.5 5.94772 10.5 6.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5" stroke="#637381" stroke-width="1" stroke-linecap="round"/>
                <rect x="2.5" y="2.5" width="4" height="2" fill="#637381"/>
              </svg>
              <span class="filter-text">รถน้ำมัน</span>
              <button class="remove-filter">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3L9 9M9 3L3 9" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </span>
          </div>
        </div>

        <!-- Sort Dropdown -->
        <div class="sort-dropdown">
          <span class="sort-label">ดีลที่ดีที่สุด</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="dropdown-icon">
            <path d="M4 6L8 10L12 6" stroke="#454F5B" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Car Grid -->
      <div class="car-grid">
        <div
          v-for="car in cars"
          :key="car.id"
          :class="['car-card', { 'card-featured': car.id === 3 }]"
          @click="viewCarDetail(car.id)"
        >
          <!-- Car Image (positioned absolute on right) -->
          <div class="car-image-container">
            <img :src="car.image" :alt="car.model" />
          </div>

          <!-- Card Content -->
          <div class="card-content">
            <div class="car-info">
              <h3 class="car-name">{{ car.model }}</h3>
              <div class="price-row">
                <span class="currency">฿</span>
                <span class="amount">{{ car.price }}</span>
                <span class="period">/วัน</span>
              </div>
              <div v-if="car.originalPrice" class="original-price">({{ car.originalPrice }} ฿)</div>
              <div v-if="car.coupon" class="coupon-tag">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="coupon-icon">
                  <path d="M1 5.5C1 4.67157 1.67157 4 2.5 4H13.5C14.3284 4 15 4.67157 15 5.5V6.5C14.1716 6.5 13.5 7.17157 13.5 8C13.5 8.82843 14.1716 9.5 15 9.5V10.5C15 11.3284 14.3284 12 13.5 12H2.5C1.67157 12 1 11.3284 1 10.5V9.5C1.82843 9.5 2.5 8.82843 2.5 8C2.5 7.17157 1.82843 6.5 1 6.5V5.5Z" stroke="#637381" stroke-width="1" fill="none"/>
                </svg>
                <span>{{ car.coupon }}</span>
              </div>
            </div>
          </div>

          <!-- Car Specs (only for featured card) -->
          <div v-if="car.id === 3 && car.specs" class="car-specs">
            <div class="spec-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 9C10.6569 9 12 7.65685 12 6C12 4.34315 10.6569 3 9 3C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9Z" stroke="#637381" stroke-width="1.2"/>
                <path d="M15 15C15 12.2386 12.3137 10 9 10C5.68629 10 3 12.2386 3 15" stroke="#637381" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
              <span>{{ car.specs.seats }}</span>
            </div>
            <div class="spec-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="5" width="9" height="11" rx="1" stroke="#637381" stroke-width="1.2"/>
                <path d="M6 5V3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5V5" stroke="#637381" stroke-width="1.2"/>
                <circle cx="7.5" cy="10" r="1.5" stroke="#637381" stroke-width="1.2"/>
              </svg>
              <span>{{ car.specs.luggage }}</span>
            </div>
            <div class="spec-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="5" width="4" height="10" rx="0.5" fill="#637381"/>
                <rect x="7" y="3" width="4" height="12" rx="0.5" fill="#637381"/>
                <rect x="12" y="7" width="4" height="8" rx="0.5" fill="#637381"/>
              </svg>
              <span>{{ car.specs.transmission }}</span>
            </div>
            <div class="spec-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#637381" stroke-width="1.2"/>
                <text x="9" y="12" text-anchor="middle" font-size="7" fill="#637381">cc</text>
              </svg>
              <span>{{ car.specs.engine }}</span>
            </div>
            <div class="spec-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.5 15V4C2.5 3.17157 3.17157 2.5 4 2.5H10C10.8284 2.5 11.5 3.17157 11.5 4V15M2.5 15H11.5M2.5 15H1M11.5 15H17M11.5 8H14C14.8284 8 15.5 8.67157 15.5 9.5V14C15.5 14.8284 14.8284 15.5 14 15.5" stroke="#637381" stroke-width="1.2" stroke-linecap="round"/>
                <rect x="4" y="4" width="5" height="3" fill="#637381"/>
              </svg>
              <span>{{ car.specs.extra }}</span>
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

    <!-- Car Modal -->
    <CarModal
      :isOpen="showSidePanel"
      :car="selectedCar"
      @close="showSidePanel = false"
    />

  </section>
</template>

<script setup>
import { ref } from 'vue'
import CarModal from './CarModal.vue'
import carImage from '../assets/images/car-listing-toyota.png'

const selectedCategory = ref('all')
const sortBy = ref('price-low')
const currentPage = ref(1)
const itemsPerPage = ref(9)
const visiblePages = ref([1, 2, 3, 4, 5])

// Side Panel
const showSidePanel = ref(false)
const selectedCar = ref(null)

const viewCarDetail = (carId) => {
  selectedCar.value = cars.value.find(c => c.id === carId)
  showSidePanel.value = true
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
    image: carImage,
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
    image: carImage,
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
    image: carImage,
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
    image: carImage,
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
    image: carImage,
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
    image: carImage,
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
    image: carImage,
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
    image: carImage,
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
    image: carImage,
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
  margin-bottom: 16px;
  overflow-x: auto;
  padding: 0 24px 8px 24px;
}

.category-tab {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #5C5858;
  background: transparent;
  border: none;
  border-radius: 16px;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.category-tab:hover {
  color: #FF595A;
}

.category-tab.active {
  background: white;
  color: #FF595A;
  font-weight: 700;
  box-shadow: 0px 0px 22.4px -11px rgba(0, 0, 0, 0.1);
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
  gap: 8px;
  flex: 1;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  padding: 16px 14px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #454F5B;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-button:hover {
  color: #FF595A;
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
  gap: 4px;
  background: #F8F8F8;
  border: none;
  border-radius: 100px;
  padding: 0 8px;
  height: 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #000000;
}

.filter-icon {
  opacity: 0.5;
}

.filter-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #000000;
}

.remove-filter {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.remove-filter:hover {
  opacity: 1;
}

.sort-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  padding: 16px 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.sort-dropdown:hover {
  color: #FF595A;
}

.sort-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #454F5B;
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
  position: relative;
  background: white;
  border-radius: 16px;
  border: 1px solid transparent;
  overflow: visible;
  box-shadow: 0px 3px 12.5px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 191px;
}

.car-card:hover {
  box-shadow: 0px 4px 16px rgba(255, 89, 90, 0.15);
}

.car-card.card-featured {
  min-height: auto;
}

/* Car Image Container */
.car-image-container {
  position: absolute;
  right: 0;
  top: 23px;
  width: 240px;
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.car-image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-content {
  padding: 16px 16px 0 16px;
  min-height: 170px;
  position: relative;
  z-index: 1;
}

.car-info {
  display: flex;
  flex-direction: column;
  gap: -8px;
  max-width: 50%;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: 1.587;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: -8px;
}

.currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #FF595A;
}

.amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #FF595A;
  line-height: 1.587;
}

.period {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #ADA9A9;
}

.original-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #D2CFCF;
  text-decoration: line-through;
  margin-top: -8px;
}

.coupon-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
}

.coupon-icon {
  flex-shrink: 0;
  opacity: 0.25;
}

.coupon-tag span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #4F4D4D;
}

/* Car Specs */
.car-specs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-top: none;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spec-item svg {
  opacity: 0.5;
}

.spec-item span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #454F5B;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.items-per-page {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.items-select {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161C24;
  background: white;
  border: 1px solid #E5E3E3;
  border-radius: 12px;
  padding: 16px 14px;
  cursor: pointer;
  outline: none;
  min-width: 60px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%23637381' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

.items-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161C24;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 0;
}

.page-arrow {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #161C24;
}

.page-arrow:hover:not(:disabled) {
  color: #FF595A;
}

.page-arrow:disabled {
  color: #C4CDD5;
  cursor: not-allowed;
}

.page-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161C24;
  cursor: pointer;
  transition: all 0.2s;
}

.page-number:hover {
  color: #FF595A;
}

.page-number.active {
  background: #FF595A;
  color: white;
  font-weight: 700;
}

.page-dots {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161C24;
  padding: 0;
}

@media (max-width: 1024px) {
  .car-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .car-image-container {
    width: 180px;
    height: 126px;
    top: 30px;
  }

  .car-info {
    max-width: 60%;
  }
}

@media (max-width: 768px) {
  .category-tabs {
    overflow-x: scroll;
    padding: 0 16px 8px 16px;
  }

  .filters-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .filter-group {
    flex-wrap: wrap;
  }

  .car-grid {
    grid-template-columns: 1fr;
  }

  .car-card {
    min-height: 160px;
  }

  .car-image-container {
    width: 160px;
    height: 112px;
    top: 24px;
  }

  .car-info {
    max-width: 50%;
  }

  .card-content {
    padding: 12px 12px 0 12px;
    min-height: 140px;
  }

  .car-specs {
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px 12px;
  }

  .car-name {
    font-size: 14px;
  }

  .amount {
    font-size: 20px;
  }

  .pagination {
    flex-direction: column;
    gap: 16px;
  }

  .page-numbers {
    gap: 12px;
  }
}
</style>
