<template>
  <div class="car-detail-page">
    <!-- Close Button -->
    <button class="close-button" @click="$router.back()">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 6L18 18M18 6L6 18" stroke="#161c24" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    <div class="car-detail-container">
      <!-- Left Column - Car Image & Info -->
      <div class="left-column">
        <h1 class="car-title">{{ carData.name }}</h1>
        <div class="coupon-badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="5" width="12" height="6" rx="1" stroke="#919EAB" stroke-width="1.2" fill="none"/>
          </svg>
          {{ carData.coupon }}
        </div>

        <!-- Car Image -->
        <div class="car-image-section">
          <div class="main-image">
            <img :src="carData.image" :alt="carData.name" />
            <div class="asap-badge">asap</div>
          </div>
          <div class="gallery-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>

        <!-- Car Specs -->
        <div class="car-specs">
          <div class="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="8" r="3" stroke="#637381" stroke-width="1.5" fill="none"/>
              <path d="M5 17c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" stroke="#637381" stroke-width="1.5" fill="none"/>
            </svg>
            <span>{{ carData.specs.seats }}</span>
          </div>
          <div class="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="6" width="12" height="9" rx="1" stroke="#637381" stroke-width="1.5" fill="none"/>
              <path d="M7 6V5a1 1 0 011-1h4a1 1 0 011 1v1" stroke="#637381" stroke-width="1.5"/>
            </svg>
            <span>{{ carData.specs.luggage }}</span>
          </div>
          <div class="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="6" stroke="#637381" stroke-width="1.5" fill="none"/>
              <path d="M10 7v3l2 2" stroke="#637381" stroke-width="1.5"/>
            </svg>
            <span>{{ carData.specs.transmission }}</span>
          </div>
          <div class="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="7" cy="14" r="2.5" stroke="#637381" stroke-width="1.5" fill="none"/>
              <circle cx="15" cy="14" r="2.5" stroke="#637381" stroke-width="1.5" fill="none"/>
              <path d="M3 8h12l2 6H3V8z" stroke="#637381" stroke-width="1.5" fill="none"/>
            </svg>
            <span>{{ carData.specs.engine }}</span>
          </div>
          <div class="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3v14M6 7l4-4 4 4M6 13l4 4 4-4" stroke="#637381" stroke-width="1.5"/>
            </svg>
            <span>{{ carData.specs.extra }}</span>
          </div>
        </div>

        <!-- Price Info -->
        <div class="price-info">
          <div class="price-label">{{ t('carDetail.priceFor') }} {{ carData.days }} {{ t('carDetail.daysStarting') }}</div>
          <div class="price-display">
            <span class="price-amount">{{ carData.price.toLocaleString() }}</span>
            <span class="price-currency">฿</span>
          </div>
          <div class="price-note">{{ t('carDetail.or') }} {{ carData.pricePerDay }} {{ t('carDetail.perDay') }}</div>
        </div>
      </div>

      <!-- Center Column - Insurance & Services -->
      <div class="center-column">
        <!-- Insurance Section -->
        <div class="insurance-section">
          <div class="section-header-with-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" stroke="#637381" stroke-width="1.5" fill="none"/>
            </svg>
            <div>
              <h3 class="section-title">{{ t('carDetail.insurance') }}</h3>
              <p class="section-subtitle">{{ t('carDetail.insuranceSubtitle') }}</p>
            </div>
          </div>

          <div class="insurance-options">
            <div
              v-for="insurance in insuranceOptions"
              :key="insurance.id"
              :class="['insurance-option', { active: selectedInsurance.id === insurance.id }]"
              @click="selectInsurance(insurance)"
            >
              <div class="option-radio">
                <div v-if="selectedInsurance.id === insurance.id" class="radio-dot"></div>
              </div>
              <div class="option-content">
                <div class="option-name">{{ insurance.name }}</div>
                <div class="option-description">{{ insurance.description }}</div>
              </div>
              <div class="option-price">{{ formatCurrency(insurance.price) }} ฿/{{ t('common.perDay').replace('/ ', '') }}</div>
              <button class="option-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 5l5 5-5 5" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <button class="view-more-button" @click="showInsuranceModal = true">
            {{ t('carDetail.insuranceDetails') }}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Services Section -->
        <div class="services-section">
          <div class="section-header-row">
            <div class="section-header-with-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="7" width="14" height="11" rx="1" stroke="#637381" stroke-width="1.5" fill="none"/>
              </svg>
              <div>
                <h3 class="section-title">{{ t('carDetail.services') }}</h3>
                <p class="section-subtitle">{{ t('carDetail.servicesSubtitle') }}</p>
              </div>
            </div>
            <button class="add-service-btn" @click="showServicesModal = true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              {{ t('carDetail.addService') }}
            </button>
          </div>

          <div class="service-list">
            <div
              v-for="service in selectedServices"
              :key="service.id"
              class="service-item"
            >
              <input
                type="checkbox"
                :id="`service-${service.id}`"
                :checked="true"
                @change="toggleService(service)"
                class="service-checkbox"
              />
              <label :for="`service-${service.id}`" class="service-label">
                <span class="service-name">{{ service.name }}</span>
                <span class="service-price">{{ service.unitPrice.toLocaleString() }} {{ t('carDetail.perPiecePerDay') }}</span>
              </label>
              <div class="quantity-controls">
                <button class="qty-btn" @click="decreaseQuantity(service.id)">-</button>
                <input
                  type="number"
                  :value="service.quantity"
                  @input="updateQuantity(service.id, $event.target.value)"
                  class="qty-input"
                  min="1"
                />
                <button class="qty-btn" @click="increaseQuantity(service.id)">+</button>
              </div>
            </div>

            <div
              v-for="service in availableServices"
              :key="service.id"
              class="service-item"
            >
              <input
                type="checkbox"
                :id="`service-${service.id}`"
                :checked="false"
                @change="toggleService(service)"
                class="service-checkbox"
              />
              <label :for="`service-${service.id}`" class="service-label">
                <span class="service-name">{{ service.name }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Booking Summary -->
      <div class="right-column">
        <div class="summary-card">
          <div class="summary-header">
            <h3 class="summary-title">{{ t('carDetail.totalPayment') }}</h3>
            <button class="upgrade-btn" @click="showServicesModal = true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              {{ t('carDetail.upgrade') }}
            </button>
          </div>

          <!-- Payment Summary -->
          <div class="payment-summary">
            <div class="summary-section">
              <div class="summary-row">
                <span class="summary-label">{{ t('carDetail.payNow') }}</span>
                <div class="summary-value-group">
                  <span class="summary-info-icon">ℹ</span>
                  <span class="summary-amount discount">{{ formatCurrency(bookingSummary.discount) }}</span>
                  <span class="summary-amount total">{{ formatCurrency(bookingSummary.payNow) }} ฿</span>
                </div>
              </div>
              <div class="summary-details">
                <div class="detail-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 8l3 3 5-5" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ selectedInsurance.name }}</span>
                </div>
                <div class="detail-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 8l3 3 5-5" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ t('carDetail.noDeductibleExcept') }}</span>
                </div>
              </div>
            </div>

            <div class="summary-section">
              <div class="summary-row">
                <span class="summary-label">{{ t('carDetail.payLater') }}</span>
                <div class="summary-value-group">
                  <span class="summary-info-icon">ℹ</span>
                  <span class="summary-amount total">{{ formatCurrency(bookingSummary.payLater) }} ฿</span>
                </div>
              </div>
              <div class="summary-details">
                <div class="detail-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 8l3 3 5-5" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ t('carDetail.payFullOnPickup') }}</span>
                </div>
                <div class="detail-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 8l3 3 5-5" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ t('carDetail.canCancelChange') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Total -->
          <div class="total-section">
            <span class="total-label">{{ t('carDetail.payNow') }}</span>
            <span class="total-amount">{{ formatCurrency(bookingSummary.payNow) }} ฿</span>
          </div>

          <!-- Rent Button -->
          <button class="rent-button" @click="handleRentClick">
            {{ t('carDetail.rentCar') }}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l5 5-5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Card Info -->
          <div class="card-info">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="13" rx="2" stroke="#161c24" stroke-width="1.5" fill="none"/>
              <path d="M3 10h18" stroke="#161c24" stroke-width="1.5"/>
            </svg>
            <div class="info-text">
              <strong>{{ t('carDetail.creditCardRequired') }}</strong>
              <ul>
                <li>{{ t('carDetail.creditCardBullet1') }}</li>
                <li>{{ t('carDetail.creditCardBullet2') }}</li>
                <li>{{ t('carDetail.creditCardBullet3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Modal -->
    <Transition name="modal">
      <div v-if="showServicesModal" class="modal-overlay" @click="showServicesModal = false">
        <div class="services-modal" @click.stop>
          <div class="modal-header">
            <button class="back-button" @click="showServicesModal = false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#161c24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <h3 class="modal-title">{{ t('carDetail.services') }}</h3>
          </div>

          <div class="modal-services-list">
            <div v-for="service in servicesOptions" :key="service.id" class="modal-service-item">
              <div class="service-header">
                <input
                  type="checkbox"
                  :id="`modal-service-${service.id}`"
                  :checked="isServiceSelected(service.id)"
                  @change="toggleService(service)"
                />
                <label :for="`modal-service-${service.id}`">
                  <span class="service-name">{{ service.name }}</span>
                  <span class="service-price">{{ service.unitPrice.toLocaleString() }} {{ t('carDetail.perPiecePerDay') }}</span>
                </label>
              </div>
              <div v-if="isServiceSelected(service.id)" class="quantity-controls">
                <button @click="decreaseQuantity(service.id)">-</button>
                <input type="number" :value="getServiceQuantity(service.id)" @input="updateQuantity(service.id, $event.target.value)" min="1" />
                <button @click="increaseQuantity(service.id)">+</button>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="confirm-button" @click="showServicesModal = false">{{ t('carDetail.confirm') }}</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Insurance Comparison Modal -->
    <Transition name="modal">
      <div v-if="showInsuranceModal" class="modal-overlay" @click="showInsuranceModal = false">
        <div class="insurance-modal" @click.stop>
          <div class="insurance-modal-header">
            <button class="back-button" @click="showInsuranceModal = false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#161c24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <h3 class="modal-title">{{ t('carDetail.insuranceModalTitle') }}</h3>
            <button class="close-modal-button" @click="showInsuranceModal = false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="#161c24" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <div class="insurance-modal-content">
            <!-- Recommended Badge -->
            <div class="recommended-badge-container">
              <div class="recommended-badge">{{ t('carDetail.recommended') }}</div>
            </div>

            <!-- Header Row -->
            <div class="insurance-table-row header-row">
              <div class="table-cell header-cell left-align">
                <div class="cell-label">{{ t('carDetail.insuranceAndCoverage') }}</div>
              </div>
              <div class="table-cell header-cell center-align">
                <div class="insurance-title">{{ t('carDetail.cdwTitle') }}</div>
                <div class="insurance-subtitle">{{ t('carDetail.cdwSubtitle') }}</div>
              </div>
              <div class="table-cell header-cell center-align">
                <div class="insurance-title">{{ t('carDetail.scdwTitle') }}</div>
                <div class="insurance-subtitle">{{ t('carDetail.scdwSubtitle') }}</div>
              </div>
              <div class="table-cell header-cell center-align no-border">
                <div class="insurance-title">{{ t('carDetail.fullProtectionTitle') }}</div>
                <div class="insurance-subtitle">{{ t('carDetail.fullProtectionSubtitle') }}</div>
              </div>
            </div>

            <!-- Data Row 1 -->
            <div class="insurance-table-row data-row">
              <div class="table-cell left-align">
                <div class="cell-label">{{ t('carDetail.deductible') }}</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-data">{{ t('carDetail.coverage1') }}</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-data" v-html="t('carDetail.coverage2')"></div>
              </div>
              <div class="table-cell center-align no-border">
                <div class="cell-data-highlight">{{ t('carDetail.coverage3') }}</div>
              </div>
            </div>

            <!-- Data Row 2 -->
            <div class="insurance-table-row data-row">
              <div class="table-cell left-align">
                <div class="cell-label">Lorem Ipsum</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-data">Lorem Ipsum</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-data">Lorem Ipsum</div>
              </div>
              <div class="table-cell center-align no-border">
                <div class="cell-data-highlight">คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม</div>
              </div>
            </div>

            <!-- Data Row 3 -->
            <div class="insurance-table-row data-row">
              <div class="table-cell left-align">
                <div class="cell-label">Lorem Ipsum</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-data">Lorem Ipsum</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-data">Lorem Ipsum</div>
              </div>
              <div class="table-cell center-align no-border">
                <div class="cell-data-highlight">คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม</div>
              </div>
            </div>

            <!-- Price Row -->
            <div class="insurance-table-row data-row">
              <div class="table-cell left-align">
                <div class="cell-label">{{ t('carDetail.price') }}</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-price">0.00 ฿</div>
              </div>
              <div class="table-cell center-align">
                <div class="cell-price">500.00 ฿</div>
              </div>
              <div class="table-cell center-align no-border">
                <div class="cell-price">1,000.00 ฿</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const router = useRouter()
const { t } = useLanguage()

const activeTab = ref('booking')
const showServicesModal = ref(false)
const showInsuranceModal = ref(false)

// Mock car data
const carData = ref({
  name: 'TOYOTA YARIS ATIV 1.2 CC : BKK',
  coupon: 'NEWUSER10',
  image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
  price: 2100,
  pricePerDay: 700,
  days: 3,
  specs: {
    seats: '4',
    luggage: '2 เล็ก, 1 ใหญ่',
    transmission: 'ออโต้',
    engine: '1,197',
    extra: 'ไม่ออล'
  }
})

// Insurance options
const insuranceOptions = ref([
  {
    id: 'cdw',
    name: 'CDW',
    description: 'มีค่าเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท ... Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 0.00
  },
  {
    id: 'scdw',
    name: 'SCDW',
    description: 'ไม่ช่าล้ำใช้จ่ายส่วนแรก ยกเว้น, ยาง, ล้อ ... Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    price: 500.00
  },
  {
    id: 'full',
    name: 'FULL PROTECTION',
    description: 'คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม (ประกันภัยชั้น 1) ... Lorem Ipsum is simply dummy text of the printing and typesettin industr...',
    price: 1000.00
  }
])

const selectedInsurance = ref(insuranceOptions.value[0])

// Services
const servicesOptions = ref([
  {
    id: 'child-seat',
    name: 'Child Seat',
    description: '1,000 ฿/ชิ้น/วัน',
    unitPrice: 1000
  },
  {
    id: 'special-assistance',
    name: 'Special assistance',
    description: 'บริการช่วยเหลือพิเศษ',
    unitPrice: 500
  }
])

const selectedServices = ref([
  {
    id: 'child-seat',
    name: 'Child Seat',
    unitPrice: 1000,
    quantity: 2
  }
])

const availableServices = computed(() => {
  return servicesOptions.value.filter(
    service => !selectedServices.value.some(s => s.id === service.id)
  )
})

const servicesTotal = computed(() => {
  return selectedServices.value.reduce((total, service) => {
    return total + (service.quantity * service.unitPrice)
  }, 0)
})

const bookingSummary = computed(() => {
  const basePrice = carData.value.price
  const insurancePrice = selectedInsurance.value.price
  const servicesPrice = servicesTotal.value
  const discount = 101.12

  return {
    payNow: basePrice + insurancePrice - discount,
    payLater: servicesPrice,
    discount: discount
  }
})

// Methods
const selectInsurance = (insurance) => {
  selectedInsurance.value = insurance
}

const isServiceSelected = (serviceId) => {
  return selectedServices.value.some(s => s.id === serviceId)
}

const toggleService = (service) => {
  const index = selectedServices.value.findIndex(s => s.id === service.id)
  if (index > -1) {
    selectedServices.value.splice(index, 1)
  } else {
    selectedServices.value.push({
      ...service,
      quantity: 1
    })
  }
}

const getServiceQuantity = (serviceId) => {
  const service = selectedServices.value.find(s => s.id === serviceId)
  return service ? service.quantity : 1
}

const updateQuantity = (serviceId, value) => {
  const service = selectedServices.value.find(s => s.id === serviceId)
  if (service) {
    service.quantity = Math.max(1, parseInt(value) || 1)
  }
}

const increaseQuantity = (serviceId) => {
  const service = selectedServices.value.find(s => s.id === serviceId)
  if (service) {
    service.quantity++
  }
}

const decreaseQuantity = (serviceId) => {
  const service = selectedServices.value.find(s => s.id === serviceId)
  if (service && service.quantity > 1) {
    service.quantity--
  }
}

const handleRentClick = () => {
  router.push('/checkout')
}

const formatCurrency = (amount) => {
  return amount.toFixed(2)
}
</script>

<style scoped>
.car-detail-page {
  background: #F4F6F8;
  min-height: 100vh;
  padding: 80px 20px 60px;
  position: relative;
}

.close-button {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.2s;
}

.close-button:hover {
  transform: scale(1.05);
}

.car-detail-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px 1fr 380px;
  gap: 24px;
}

/* Left Column */
.left-column {
  background: white;
  border-radius: 16px;
  padding: 24px;
}

.car-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
}

.coupon-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #F9FAFB;
  border-radius: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #637381;
  margin-bottom: 20px;
}

.car-image-section {
  margin-bottom: 20px;
}

.main-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  background: #F9FAFB;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.asap-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: #FF595A;
  color: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 6px;
}

.gallery-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  background: #DFE3E8;
  border-radius: 50%;
}

.dot.active {
  background: #FF595A;
}

.car-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid #F4F6F8;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 16px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #637381;
}

.price-info {
  text-align: center;
}

.price-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #637381;
  margin-bottom: 8px;
}

.price-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 4px;
}

.price-amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #161c24;
}

.price-currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #161c24;
}

.price-note {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
}

/* Center Column */
.center-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.insurance-section,
.services-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
}

.section-header-with-icon {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
  margin: 0;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
  margin: 4px 0 0 0;
}

.insurance-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.insurance-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.insurance-option:hover {
  border-color: #FF595A;
}

.insurance-option.active {
  border-color: #FF595A;
  background: #FFF4F3;
}

.option-radio {
  width: 20px;
  height: 20px;
  border: 2px solid #DFE3E8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.insurance-option.active .option-radio {
  border-color: #FF595A;
}

.radio-dot {
  width: 10px;
  height: 10px;
  background: #FF595A;
  border-radius: 50%;
}

.option-content {
  flex: 1;
}

.option-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161c24;
  margin-bottom: 4px;
}

.option-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 11px;
  color: #637381;
  line-height: 1.4;
}

.option-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #161c24;
  flex-shrink: 0;
}

.option-arrow {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

.view-more-button {
  width: 100%;
  padding: 12px;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s;
}

.view-more-button:hover {
  border-color: #FF595A;
  color: #FF595A;
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.add-service-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: white;
  border: 1px solid #FF595A;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #FF595A;
  cursor: pointer;
  transition: all 0.2s;
}

.add-service-btn:hover {
  background: #FFF4F3;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.service-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.service-label {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.service-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #161c24;
}

.service-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  background: #F9FAFB;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.qty-btn:hover {
  background: #F4F6F8;
}

.qty-input {
  width: 60px;
  height: 32px;
  text-align: center;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  outline: none;
}

.qty-input:focus {
  border-color: #FF595A;
}

/* Right Column */
.right-column {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.summary-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.summary-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
  margin: 0;
}

.upgrade-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: white;
  border: 1px solid #FF595A;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #FF595A;
  cursor: pointer;
  transition: all 0.2s;
}

.upgrade-btn:hover {
  background: #FFF4F3;
}

.payment-summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.summary-section {
  padding: 16px;
  background: #F9FAFB;
  border-radius: 12px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.summary-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161c24;
}

.summary-value-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.summary-info-icon {
  width: 16px;
  height: 16px;
  background: #919EAB;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
}

.summary-amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.summary-amount.discount {
  color: #919EAB;
  text-decoration: line-through;
}

.summary-amount.total {
  color: #36B37E;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 11px;
  color: #637381;
  line-height: 1.4;
}

.total-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid #F4F6F8;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 20px;
}

.total-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
}

.total-amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FF595A;
}

.rent-button {
  width: 100%;
  padding: 16px;
  background: #FF595A;
  border: none;
  border-radius: 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
  margin-bottom: 20px;
}

.rent-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 89, 90, 0.3);
}

.card-info {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 12px;
}

.info-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 11px;
  color: #637381;
  line-height: 1.5;
}

.info-text strong {
  color: #161c24;
  display: block;
  margin-bottom: 6px;
}

.info-text ul {
  margin: 0;
  padding-left: 16px;
}

.info-text li {
  margin-bottom: 4px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.services-modal {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid #F4F6F8;
}

.back-button {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.back-button:hover {
  background: #F9FAFB;
}

.modal-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #161c24;
  margin: 0;
}

.modal-services-list {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
}

.modal-service-item {
  padding: 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  margin-bottom: 12px;
}

.service-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #F4F6F8;
}

.confirm-button {
  width: 100%;
  padding: 16px;
  background: #FF595A;
  border: none;
  border-radius: 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.confirm-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 89, 90, 0.3);
}

/* Insurance Comparison Modal */
.insurance-modal {
  background: #F8F8F8;
  border-radius: 16px;
  width: 100%;
  max-width: 1280px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.insurance-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 32px;
  background: transparent;
  gap: 16px;
}

.close-modal-button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
  padding: 8px;
}

.close-modal-button:hover {
  background: #F4F6F8;
}

.insurance-modal-content {
  padding: 0 32px 32px 32px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Recommended Badge */
.recommended-badge-container {
  position: relative;
  height: 32px;
  margin-bottom: 0;
}

.recommended-badge {
  position: absolute;
  right: 0;
  top: 9px;
  background: #FDE7E8;
  padding: 6px 12px;
  border-radius: 0;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #FF595A;
  letter-spacing: 0.07px;
}

/* Table Structure */
.insurance-table-row {
  display: flex;
  align-items: stretch;
  background: white;
  box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  overflow: hidden;
  min-height: 88px;
}

.insurance-table-row.header-row {
  min-height: 88.8px;
}

.insurance-table-row.data-row {
  flex: 1;
}

.table-cell {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  border-right: 1px solid #F6F6F6;
}

.table-cell.no-border {
  border-right: none;
}

.table-cell.left-align {
  align-items: flex-start;
}

.table-cell.center-align {
  align-items: center;
  text-align: center;
}

/* Header Cell Styles */
.cell-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.10px;
  margin: 0;
}

.header-cell .cell-label {
  font-size: 20px;
}

.insurance-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.10px;
  margin: 0 0 4px 0;
}

.insurance-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: black;
  letter-spacing: 0.06px;
  margin: 0;
  line-height: 1.4;
}

/* Data Cell Styles */
.data-row .cell-label {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.08px;
}

.cell-data {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: black;
  letter-spacing: 0.06px;
  margin: 0;
  line-height: 1.5;
}

.cell-data-highlight {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #36B37E;
  letter-spacing: 0.06px;
  margin: 0;
  line-height: 1.5;
}

.cell-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: black;
  letter-spacing: 0.10px;
  margin: 0;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .car-detail-container {
    grid-template-columns: 1fr;
  }

  .right-column {
    position: static;
  }

  .insurance-modal {
    max-width: 95vw;
  }

  .insurance-modal-content {
    padding: 0 20px 20px;
  }

  .table-cell {
    padding: 20px;
  }

  .insurance-title {
    font-size: 18px;
  }

  .insurance-subtitle {
    font-size: 11px;
  }

  .data-row .cell-label {
    font-size: 14px;
  }

  .cell-data,
  .cell-data-highlight {
    font-size: 11px;
  }

  .cell-price {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .insurance-modal-header {
    padding: 8px 16px;
  }

  .insurance-modal-content {
    padding: 0 16px 16px;
    gap: 12px;
  }

  .insurance-table-row {
    flex-direction: column;
    min-height: auto;
  }

  .table-cell {
    border-right: none;
    border-bottom: 1px solid #F6F6F6;
    padding: 16px;
  }

  .table-cell.no-border {
    border-bottom: none;
  }

  .table-cell.center-align {
    align-items: flex-start;
    text-align: left;
  }

  .recommended-badge {
    right: 16px;
  }
}
</style>
