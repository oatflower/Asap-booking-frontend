<template>
  <div class="hero-section">
    <!-- Hero Carousel -->
    <div class="hero-carousel">
      <!-- Carousel Slides -->
      <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-slide"
          :style="{ backgroundImage: `url(${slide.bg})` }"
        >
          <!-- Radial Gradient Overlay -->
          <div class="slide-gradient"></div>

          <!-- Hero Text -->
          <div class="hero-text">
            <div class="hero-title-row">
              <span class="hero-title-text">เช่ารถกับ</span>
              <img src="@/assets/images/logo.svg" alt="asap" class="hero-logo" />
              <span class="hero-title-text">ราคาดีที่สุด</span>
            </div>
            <p class="hero-subtitle">ราคาเริ่มต้นเพียง 2,000 ฿/วัน</p>
          </div>

          <!-- Car Image -->
          <img :src="slide.car" :alt="slide.alt" class="hero-car-image" />
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button class="nav-arrow nav-prev" @click="prevSlide">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.3)"/>
          <path d="M14 8l-4 4 4 4" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="nav-arrow nav-next" @click="nextSlide">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.3)"/>
          <path d="M10 8l4 4-4 4" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Slide Indicators -->
      <div class="slide-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>

    <!-- Search Form -->
    <div class="search-container">
      <div class="search-form">
        <!-- Location Group -->
        <div class="form-group location-group">
          <div class="input-field-wrapper">
            <div class="input-field clickable" @click="openPickupLocation">
              <label>รับรถ: {{ pickupLocation.city }}</label>
              <span class="sublabel">{{ pickupLocation.place }}</span>
            </div>
            <!-- Pickup Location Dropdown -->
            <div v-if="showPickupDropdown" class="dropdown-menu">
              <div
                v-for="location in locations"
                :key="location.id"
                class="dropdown-item"
                @click="selectPickupLocation(location)"
              >
                <div class="location-name">{{ location.city }}</div>
                <div class="location-detail">{{ location.place }}</div>
              </div>
            </div>
          </div>
          <button class="swap-icon" @click="swapLocations">
            <svg viewBox="0 0 18 18" width="18" height="18">
              <path d="M4 6L1 9M1 9L4 12M1 9H17M14 6L17 9M17 9L14 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </button>
          <div class="input-field-wrapper">
            <div class="input-field clickable" @click="openDropoffLocation">
              <label>คืนรถ: {{ dropoffLocation.city }}</label>
              <span class="sublabel">{{ dropoffLocation.place }}</span>
            </div>
            <!-- Dropoff Location Dropdown -->
            <div v-if="showDropoffDropdown" class="dropdown-menu">
              <div
                v-for="location in locations"
                :key="location.id"
                class="dropdown-item"
                @click="selectDropoffLocation(location)"
              >
                <div class="location-name">{{ location.city }}</div>
                <div class="location-detail">{{ location.place }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Date Group -->
        <div class="form-group date-group">
          <div class="input-field-wrapper">
            <div class="input-field date-picker-field">
              <label class="light">เริ่ม:</label>
              <input
                type="datetime-local"
                v-model="startDateRaw"
                class="datetime-input"
                @focus="onDateFocus"
                @change="updateStartDate"
              />
              <span class="value-display">{{ startDateDisplay }}</span>
            </div>
          </div>
          <button class="swap-icon" @click="swapDates">
            <svg viewBox="0 0 18 18" width="18" height="18">
              <path d="M4 6L1 9M1 9L4 12M1 9H17M14 6L17 9M17 9L14 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </button>
          <div class="input-field-wrapper">
            <div class="input-field date-picker-field">
              <label class="light">ถึง:</label>
              <input
                type="datetime-local"
                v-model="endDateRaw"
                class="datetime-input"
                @focus="onDateFocus"
                @change="updateEndDate"
              />
              <span class="value-display">{{ endDateDisplay }}</span>
            </div>
          </div>
        </div>

        <!-- Coupon Group -->
        <div class="form-group coupon-group">
          <div class="input-field coupon-input-wrapper">
            <label class="light">คูปอง:</label>
            <div class="coupon-value">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M13.5 5.5V4C13.5 3.44772 13.0523 3 12.5 3H3.5C2.94772 3 2.5 3.44772 2.5 4V5.5C3.32843 5.5 4 6.17157 4 7C4 7.82843 3.32843 8.5 2.5 8.5V10C2.5 10.5523 2.94772 11 3.5 11H12.5C13.0523 11 13.5 10.5523 13.5 10V8.5C12.6716 8.5 12 7.82843 12 7C12 6.17157 12.6716 5.5 13.5 5.5Z" stroke="#ff595a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <input
                v-model="couponCode"
                type="text"
                class="coupon-input"
                placeholder="ใส่โค้ดคูปอง"
                @focus="onCouponFocus"
                @blur="onCouponBlur"
              />
            </div>
          </div>
        </div>

        <!-- Search Button -->
        <button class="search-button" @click="searchCars">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          <span>ค้นหารถ</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import images
import heroSlide1 from '@/assets/images/hero-slide-1.png'
import heroSlide2 from '@/assets/images/hero-slide-2.png'
import heroCar from '@/assets/images/hero-car.png'

// Carousel data
const slides = ref([
  { bg: heroSlide1, car: heroCar, alt: 'Car 1' },
  { bg: heroSlide2, car: heroCar, alt: 'Car 2' },
  { bg: heroSlide1, car: heroCar, alt: 'Car 3' },
  { bg: heroSlide2, car: heroCar, alt: 'Car 4' }
])

const currentSlide = ref(0)
let autoSlideInterval = null

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const nextSlide = () => {
  currentSlide.value = currentSlide.value === slides.value.length - 1 ? 0 : currentSlide.value + 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
}

// Location data
const locations = ref([
  { id: 1, city: 'Bangkok', place: 'Suvarnabhumi Airport' },
  { id: 2, city: 'Bangkok', place: 'Don Mueang Airport' },
  { id: 3, city: 'Bangkok', place: 'BTS Asok' },
  { id: 4, city: 'Phuket', place: 'Phuket International Airport' },
  { id: 5, city: 'Chiang Mai', place: 'Chiang Mai Airport' },
  { id: 6, city: 'Pattaya', place: 'Pattaya City Center' }
])

const pickupLocation = ref({ city: 'Bangkok', place: 'Suvarnabhumi Airport' })
const dropoffLocation = ref({ city: 'Bangkok', place: 'Suvarnabhumi Airport' })
const showPickupDropdown = ref(false)
const showDropoffDropdown = ref(false)

// Date data
const startDateRaw = ref('2025-08-01T09:00')
const endDateRaw = ref('2025-08-03T09:00')
const startDateDisplay = ref('01/08/2025 - 09:00 น.')
const endDateDisplay = ref('03/08/2025 - 09:00 น.')

// Format datetime to Thai display format
const formatDateDisplay = (datetimeString) => {
  if (!datetimeString) return ''
  const date = new Date(datetimeString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${day}/${month}/${year} - ${hours}:${minutes} น.`
}

// Coupon data
const couponCode = ref('NEWUSER10')

// Location handlers
const openPickupLocation = () => {
  showPickupDropdown.value = !showPickupDropdown.value
  showDropoffDropdown.value = false
  showStartDateDropdown.value = false
  showEndDateDropdown.value = false
}

const openDropoffLocation = () => {
  showDropoffDropdown.value = !showDropoffDropdown.value
  showPickupDropdown.value = false
  showStartDateDropdown.value = false
  showEndDateDropdown.value = false
}

const selectPickupLocation = (location) => {
  pickupLocation.value = { city: location.city, place: location.place }
  showPickupDropdown.value = false
}

const selectDropoffLocation = (location) => {
  dropoffLocation.value = { city: location.city, place: location.place }
  showDropoffDropdown.value = false
}

const swapLocations = () => {
  const temp = pickupLocation.value
  pickupLocation.value = dropoffLocation.value
  dropoffLocation.value = temp
}

// Date handlers
const onDateFocus = () => {
  showPickupDropdown.value = false
  showDropoffDropdown.value = false
}

const updateStartDate = () => {
  startDateDisplay.value = formatDateDisplay(startDateRaw.value)
  console.log('Start date updated:', startDateDisplay.value)
}

const updateEndDate = () => {
  endDateDisplay.value = formatDateDisplay(endDateRaw.value)
  console.log('End date updated:', endDateDisplay.value)
}

const swapDates = () => {
  const tempRaw = startDateRaw.value
  const tempDisplay = startDateDisplay.value

  startDateRaw.value = endDateRaw.value
  startDateDisplay.value = endDateDisplay.value

  endDateRaw.value = tempRaw
  endDateDisplay.value = tempDisplay
}

// Coupon handlers
const onCouponFocus = () => {
  showPickupDropdown.value = false
  showDropoffDropdown.value = false
  showStartDateDropdown.value = false
  showEndDateDropdown.value = false
}

const onCouponBlur = () => {
  // You can add validation here if needed
  console.log('Coupon code:', couponCode.value)
}

// Search handler
const searchCars = () => {
  console.log('Search cars:', {
    pickup: pickupLocation.value,
    dropoff: dropoffLocation.value,
    startDate: startDateDisplay.value,
    endDate: endDateDisplay.value,
    coupon: couponCode.value
  })
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  const target = event.target
  if (!target.closest('.form-group')) {
    showPickupDropdown.value = false
    showDropoffDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  startAutoSlide()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  stopAutoSlide()
})
</script>

<style scoped>
.hero-section {
  background-color: #f8fafb;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-carousel {
  width: 100%;
  height: 646px;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 72px;
  margin-top: 80px;
}

.carousel-slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide-gradient {
  position: absolute;
  top: -138px;
  left: 50%;
  transform: translateX(-50%);
  width: 1191px;
  height: 536px;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}

.hero-text {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 32px;
}

.hero-title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-title-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  color: #161c24;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.5%;
}

.hero-logo {
  height: 64px;
  width: auto;
}

.hero-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #161c24;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
}

.hero-car-image {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 826px;
  height: auto;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 10;
}

.nav-arrow svg {
  width: 48px;
  height: 48px;
}

.nav-arrow:hover svg circle {
  fill: rgba(255, 255, 255, 0.5);
}

.nav-prev {
  left: 64px;
}

.nav-next {
  right: 64px;
}

.slide-indicators {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.indicator.active {
  background: #ff595a;
  width: 24px;
  border-radius: 4px;
}

.search-container {
  position: absolute;
  top: 598px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
  z-index: 100;
}

.search-form {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 12px;
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.16);
}

.form-group {
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 72px;
  transition: border-color 0.2s, box-shadow 0.2s;
  position: relative;
}

.form-group:hover {
  border-color: #ff595a;
  box-shadow: 0 0 0 1px rgba(255, 89, 90, 0.2);
}

.location-group,
.date-group {
  flex: 1;
  min-width: 0;
}

.coupon-group {
  width: 150px;
  flex-shrink: 0;
}

.input-field-wrapper {
  flex: 1;
  position: relative;
  min-width: 0;
}

.input-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.input-field.clickable {
  cursor: pointer;
  transition: opacity 0.2s;
}

.input-field.clickable:hover {
  opacity: 0.7;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  animation: dropdownFadeIn 0.2s ease;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #f4f6f8;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f4f6f8;
}

.location-name {
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
  margin-bottom: 4px;
}

.location-detail {
  font-size: 14px;
  color: #637381;
}

.date-picker-header {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #637381;
  border-bottom: 1px solid #dfe3e8;
  background: #f9fafb;
}

.date-value {
  font-size: 16px;
  font-weight: 600;
  color: #161c24;
}

/* Date Picker Styles */
.date-picker-field {
  position: relative;
  cursor: pointer;
  transition: opacity 0.2s;
}

.date-picker-field:hover {
  opacity: 0.7;
}

.datetime-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.datetime-input::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0;
}

.value-display {
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
  white-space: nowrap;
  pointer-events: none;
  position: relative;
  z-index: 1;
}

.input-field label {
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.input-field label.light {
  font-weight: 400;
  color: #637381;
}

.input-field .sublabel {
  font-size: 16px;
  font-weight: 400;
  color: #637381;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.input-field .value {
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
  white-space: nowrap;
}

.swap-icon {
  width: 24px;
  height: 24px;
  border: 1px solid #dfe3e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #919eab;
  opacity: 0.4;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
}

.swap-icon:hover {
  opacity: 1;
  border-color: #ff595a;
  color: #ff595a;
  transform: rotate(180deg);
}

.coupon-value {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coupon-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.coupon-input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  font-weight: 700;
  color: #ff595a;
  font-family: inherit;
  padding: 0;
  width: 100%;
  text-transform: uppercase;
}

.coupon-input::placeholder {
  color: #c4cdd5;
  font-weight: 400;
  text-transform: none;
}

.coupon-input:focus {
  color: #ff595a;
}

.coupon-code {
  font-size: 16px;
  font-weight: 700;
  color: #ff595a;
  white-space: nowrap;
}

.search-button {
  background: #ff595a;
  border: none;
  border-radius: 12px;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
  flex-shrink: 0;
}

.search-button:hover {
  background: #ff4445;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 89, 90, 0.4);
}

.search-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(255, 89, 90, 0.3);
}

.search-button span {
  font-size: 20px;
  font-weight: 700;
  color: white;
  white-space: nowrap;
}

@media (max-width: 1280px) {
  .hero-title {
    font-size: 48px;
  }

  .hero-subtitle {
    font-size: 32px;
  }

  .search-form {
    flex-wrap: wrap;
  }

  .form-group {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-carousel {
    height: 500px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 24px;
  }

  .car-image {
    width: 400px;
    height: 200px;
  }

  .car-image::before {
    width: 350px;
    height: 175px;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
  }

  .nav-prev {
    left: 20px;
  }

  .nav-next {
    right: 20px;
  }

  .search-container {
    top: 450px;
  }

  .dropdown-menu {
    max-height: 200px;
    font-size: 14px;
  }

  .location-name {
    font-size: 14px;
  }

  .location-detail {
    font-size: 12px;
  }

  .date-value {
    font-size: 14px;
  }

  .value-display {
    font-size: 14px;
  }
}
</style>
