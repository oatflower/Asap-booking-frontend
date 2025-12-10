<template>
  <div class="booking-detail-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <router-link to="/account" class="breadcrumb-link">{{ t('bookingDetail.breadcrumbAccount') }}</router-link>
      <span class="breadcrumb-separator">›</span>
      <router-link to="/account" class="breadcrumb-link">{{ t('bookingDetail.breadcrumbBookingInfo') }}</router-link>
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-current">{{ bookingData.bookingId }}</span>
    </div>

    <div class="booking-container">
      <div class="booking-header">
        <h1 class="page-title">{{ t('bookingDetail.bookingReceipt') }}</h1>
        <div class="booking-date">{{ t('bookingDetail.bookingTime') }}: {{ bookingData.bookingDate }}</div>
      </div>

      <div class="booking-content">
        <!-- Car Info Card -->
        <div class="car-card">
          <div class="car-image">
            <img :src="bookingData.carImage" :alt="bookingData.carName" />
          </div>
          <div class="car-details">
            <h3 class="car-name">{{ bookingData.carName }}</h3>
            <div class="car-price">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="baht-icon">
                <text x="2" y="13" font-family="Arial" font-size="14" font-weight="bold" fill="#FF6B6B">฿</text>
              </svg>
              <span class="amount">{{ bookingData.dailyRate.toLocaleString() }}</span>
              <span class="period">{{ bookingData.days }} วัน</span>
            </div>
            <div v-if="bookingData.status === 'cancelled'" class="cancel-status">
              {{ t('bookingDetail.statusCancelled') }} {{ bookingData.cancelledDate }}
            </div>
          </div>
          <div class="booking-code-card">
            <div class="code-label">{{ t('bookingDetail.bookingCode') }}</div>
            <div class="code-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="ticket-icon">
                <rect x="2" y="4" width="12" height="8" rx="1" stroke="#637381" stroke-width="1.2" />
                <path d="M5 4v8M11 4v8" stroke="#637381" stroke-width="1.2" stroke-dasharray="2 2" />
              </svg>
              <span class="code">{{ bookingData.bookingId }}</span>
            </div>
          </div>
        </div>

        <!-- Trip Details -->
        <div class="trip-card">
          <!-- Pickup -->
          <div class="trip-section">
            <div class="trip-row">
              <div class="trip-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="icon">
                  <rect x="3" y="2" width="10" height="10" rx="1" stroke="#637381" stroke-width="1.2" />
                  <path d="M5 0v3M11 0v3M3 5h10" stroke="#637381" stroke-width="1.2" stroke-linecap="round" />
                </svg>
                <span>{{ bookingData.pickup.date }}</span>
              </div>
              <div class="trip-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="icon">
                  <circle cx="8" cy="8" r="6" stroke="#637381" stroke-width="1.2" />
                  <path d="M8 5v3l2 1" stroke="#637381" stroke-width="1.2" stroke-linecap="round" />
                </svg>
                <span>{{ bookingData.pickup.time }}</span>
              </div>
            </div>
            <div class="trip-location">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="icon">
                <circle cx="8" cy="8" r="5" stroke="#637381" stroke-width="1.2" />
                <circle cx="8" cy="8" r="2" fill="#637381" />
              </svg>
              <span>{{ bookingData.pickup.location }}</span>
            </div>
          </div>

          <div class="trip-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12m0 0l4-4m-4 4l-4-4" stroke="#DFE3E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <!-- Return -->
          <div class="trip-section">
            <div class="trip-row">
              <div class="trip-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="icon">
                  <rect x="3" y="2" width="10" height="10" rx="1" stroke="#637381" stroke-width="1.2" />
                  <path d="M5 0v3M11 0v3M3 5h10" stroke="#637381" stroke-width="1.2" stroke-linecap="round" />
                </svg>
                <span>{{ bookingData.return.date }}</span>
              </div>
              <div class="trip-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="icon">
                  <circle cx="8" cy="8" r="6" stroke="#637381" stroke-width="1.2" />
                  <path d="M8 5v3l2 1" stroke="#637381" stroke-width="1.2" stroke-linecap="round" />
                </svg>
                <span>{{ bookingData.return.time }}</span>
              </div>
            </div>
            <div class="trip-location">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="icon">
                <circle cx="8" cy="8" r="5" stroke="#637381" stroke-width="1.2" />
                <circle cx="8" cy="8" r="2" fill="#637381" />
              </svg>
              <span>{{ bookingData.return.location }}</span>
            </div>
          </div>
        </div>

        <!-- Contact & Driver Info -->
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">{{ t('bookingDetail.driverInfo') }}</div>
            <div class="info-value">: {{ bookingData.contact.driverName }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">{{ t('bookingDetail.email') }}</div>
            <div class="info-value">: {{ bookingData.contact.email }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">{{ t('bookingDetail.additionalDriver') }}</div>
            <div class="info-value">: -</div>
          </div>
          <div class="info-item">
            <div class="info-label">{{ t('bookingDetail.phoneNumber') }}</div>
            <div class="info-value">: {{ bookingData.contact.phone }}</div>
          </div>
        </div>

        <!-- Services -->
        <div class="services-section">
          <h3 class="section-title">{{ t('bookingDetail.pickupReturn') }}</h3>
          <div class="service-amount">{{ bookingData.services.total.toFixed(2) }} ฿</div>

          <div v-for="(service, index) in bookingData.services.items" :key="index" class="service-item">
            <div class="service-header">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="service-icon">
                <circle cx="6" cy="6" r="5" fill="#FF6B6B"/>
              </svg>
              <span class="service-date">{{ service.date }}</span>
            </div>
            <div class="service-details">
              <div class="service-type">{{ service.type }}</div>
              <div class="service-location">{{ service.location }}</div>
            </div>
            <div class="service-price">{{ service.price.toFixed(2) }} ฿</div>
          </div>
        </div>

        <!-- Price Breakdown -->
        <div class="pricing-section">
          <h3 class="section-title">{{ t('bookingDetail.serviceCharges') }}</h3>
          <div class="price-total">{{ bookingData.pricing.carRental.toLocaleString() }}.00 ฿</div>

          <div class="price-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="price-icon">
              <path d="M2 6h12M5 2v4M11 2v4M3 4h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#919EAB" stroke-width="1.2" fill="none"/>
            </svg>
            <span class="price-label">{{ t('bookingDetail.carRentalDays') }}</span>
            <span class="price-value">{{ bookingData.pricing.carRental.toLocaleString() }}.00 ฿</span>
          </div>

          <div class="price-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="price-icon">
              <circle cx="8" cy="8" r="6" stroke="#919EAB" stroke-width="1.2" fill="none"/>
              <path d="M8 5v3.5M8 11h.01" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="price-label">{{ t('bookingDetail.insurance') }}</span>
            <span class="price-value">{{ bookingData.pricing.insurance.toFixed(2) }} ฿</span>
          </div>

          <div class="price-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="price-icon">
              <rect x="3" y="5" width="10" height="8" rx="1" stroke="#919EAB" stroke-width="1.2" fill="none"/>
              <path d="M5 5V4a3 3 0 016 0v1" stroke="#919EAB" stroke-width="1.2"/>
              <circle cx="8" cy="9" r="1" fill="#919EAB"/>
            </svg>
            <span class="price-label">{{ t('bookingDetail.extraServices') }}</span>
            <span class="price-value">{{ bookingData.pricing.extraServices.toFixed(2) }} ฿</span>
          </div>
        </div>

        <!-- Discounts -->
        <div class="discount-section">
          <h3 class="section-title">{{ t('bookingDetail.discount') }}</h3>
          <div class="discount-total">-{{ bookingData.discounts.total.toLocaleString() }}.00 ฿</div>

          <div class="discount-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="discount-icon">
              <path d="M2 4h12l-1 8H3L2 4z" stroke="#919EAB" stroke-width="1.2" fill="none"/>
              <path d="M5 4V3a3 3 0 016 0v1" stroke="#919EAB" stroke-width="1.2"/>
            </svg>
            <span class="discount-label">{{ bookingData.discounts.items[0].name }}</span>
            <span class="discount-value">-{{ bookingData.discounts.items[0].amount.toLocaleString() }}.00 ฿</span>
          </div>

          <div class="discount-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="discount-icon">
              <rect x="2" y="5" width="12" height="8" rx="1" stroke="#919EAB" stroke-width="1.2" fill="none"/>
              <path d="M5 5V4a1 1 0 011-1h4a1 1 0 011 1v1" stroke="#919EAB" stroke-width="1.2"/>
            </svg>
            <span class="discount-label">{{ t('bookingDetail.otherDiscounts') }}</span>
            <span class="discount-value">{{ bookingData.discounts.items[1].amount.toFixed(2) }} ฿</span>
          </div>
        </div>

        <!-- Summary -->
        <div class="summary-section">
          <div class="summary-row">
            <span class="summary-label">{{ t('bookingDetail.subtotal') }}</span>
            <span class="summary-value">{{ bookingData.summary.subtotal.toLocaleString() }}.00 ฿</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">{{ t('bookingDetail.vat') }}</span>
            <span class="summary-value">{{ bookingData.summary.vat.toFixed(2) }} ฿</span>
          </div>
          <div class="summary-row total">
            <span class="summary-label">{{ t('bookingDetail.totalNet') }}</span>
            <span class="summary-value">{{ bookingData.summary.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} ฿</span>
          </div>
        </div>

        <!-- Payment Info -->
        <div class="payment-section">
          <div class="payment-header">
            <h3 class="payment-title">{{ t('bookingDetail.payment') }}</h3>
            <button class="payment-status-button">{{ t('bookingDetail.paymentSuccess') }}</button>
          </div>

          <div class="payment-details">
            <div class="payment-row">
              <span class="payment-label">{{ t('bookingDetail.dateTime') }}</span>
              <span class="payment-separator">:</span>
              <span class="payment-value">{{ bookingData.payment.dateTime }}</span>
            </div>
            <div class="payment-row">
              <span class="payment-label">{{ t('bookingDetail.transactionId') }}</span>
              <span class="payment-separator">:</span>
              <span class="payment-value">{{ bookingData.payment.transactionId }}</span>
            </div>
            <div class="payment-row">
              <span class="payment-label">{{ t('bookingDetail.paymentMethod') }}</span>
              <span class="payment-separator">:</span>
              <span class="payment-value">{{ bookingData.payment.method }}</span>
            </div>
          </div>
        </div>

        <!-- Cancel Booking Button (only shown if not cancelled) -->
        <div v-if="bookingData.status !== 'cancelled'" class="cancel-button-wrapper">
          <button class="cancel-booking-button" @click="showCancelModal = true">
            {{ t('bookingDetail.cancelBooking') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Cancel Confirmation Modal -->
    <div v-if="showCancelModal" class="modal-overlay" @click="showCancelModal = false">
      <div class="modal-card" @click.stop>
        <h3 class="modal-title">{{ t('bookingDetail.confirmCancel') }}</h3>
        <p class="modal-message">{{ t('bookingDetail.confirmCancelMessage') }}</p>

        <div class="modal-actions">
          <button class="modal-button cancel" @click="showCancelModal = false">
            {{ t('bookingDetail.cancel') }}
          </button>
          <button class="modal-button confirm" @click="confirmCancelBooking">
            {{ t('bookingDetail.confirm') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const route = useRoute()
const router = useRouter()
const { t } = useLanguage()

const showCancelModal = ref(false)

// Mock booking data (in real app, fetch based on route.params.id)
const bookingData = ref({
  bookingId: 'AB09L',
  bookingDate: '01 ก.ค. 68, 08:00',
  status: 'active', // 'active', 'cancelled', 'completed'
  cancelledDate: '',
  carName: 'TOYOTA YARIS ATIV 1.2 CC : BKK',
  carImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop',
  dailyRate: 2100,
  days: 3,
  pickup: {
    date: '01 ก.ค. 68, 08:00',
    time: '08:00',
    location: 'Suvarnabhumi International Airport'
  },
  return: {
    date: '03 ก.ค. 68, 08:00',
    time: '08:00',
    location: 'Don Mueang International Airport'
  },
  contact: {
    driverName: 'นาย สมชาย ใจดี',
    email: 'Example@gmail.com',
    phone: '0909990000'
  },
  services: {
    total: 100.00,
    items: [
      {
        date: '01/08/2025',
        type: 'จุดรับรถ: + บริการ Pick-Up Service',
        location: 'Paragon - Exit1',
        price: 50.00
      },
      {
        date: '03/08/2025',
        type: 'จุดส่งรถ: + บริการ Drop-Off Service',
        location: 'Paragon - Exit1',
        price: 50.00
      }
    ]
  },
  pricing: {
    carRental: 2100,
    insurance: 0.00,
    extraServices: 0.00
  },
  discounts: {
    total: 210,
    items: [
      { name: 'NEWUSER10 (-10%)', amount: 210 },
      { name: 'ส่วนลดอื่นๆ', amount: 0.00 }
    ]
  },
  summary: {
    subtotal: 1890.00,
    vat: 132.30,
    total: 2022.30
  },
  payment: {
    dateTime: '01/12/2025, 24:24',
    transactionId: '0000001',
    method: 'Credit Card Master-1234'
  }
})

const confirmCancelBooking = () => {
  // Update booking status to cancelled
  bookingData.value.status = 'cancelled'
  bookingData.value.cancelledDate = new Date().toLocaleDateString('th-TH', {
    day: '2-digit',
    month: 'short',
    year: '2-digit'
  })

  // Close modal
  showCancelModal.value = false

  // Scroll to top to see cancelled status
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.booking-detail-page {
  background: #F9FAFB;
  min-height: 100vh;
  padding: 100px 0 60px;
}

.breadcrumb {
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
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
  color: #919EAB;
}

.breadcrumb-current {
  color: #161c24;
  font-weight: 500;
}

.booking-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.booking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #161c24;
  margin: 0;
}

.booking-date {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
}

.booking-content {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
}

/* Car Card */
.car-card {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 24px;
}

.car-image {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background: #F9FAFB;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
  margin: 0;
}

.car-price {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
}

.baht-icon {
  flex-shrink: 0;
}

.amount {
  font-weight: 600;
  font-size: 16px;
  color: #FF6B6B;
}

.period {
  font-size: 14px;
  color: #637381;
}

.cancel-status {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #FF3B30;
  margin-top: 4px;
}

.booking-code-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.code-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
}

.code-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #F9FAFB;
  border-radius: 8px;
}

.code {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #161c24;
}

/* Trip Card */
.trip-card {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.trip-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.trip-row {
  display: flex;
  gap: 24px;
}

.trip-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
}

.trip-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
}

.trip-arrow {
  display: flex;
  justify-content: center;
  margin: 12px 0;
}

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 24px;
}

.info-item {
  display: flex;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
}

.info-label {
  color: #637381;
  min-width: 140px;
}

.info-value {
  color: #161c24;
  font-weight: 500;
}

/* Services Section */
.services-section {
  padding-bottom: 24px;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 24px;
  position: relative;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
  margin: 0 0 16px 0;
}

.service-amount {
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
}

.service-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  margin-bottom: 16px;
  align-items: start;
}

.service-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.service-icon {
  flex-shrink: 0;
}

.service-date {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #637381;
  font-weight: 500;
}

.service-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.service-type {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #161c24;
  font-weight: 500;
}

.service-location {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #637381;
}

.service-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #161c24;
  font-weight: 500;
  text-align: right;
}

/* Pricing Section */
.pricing-section {
  padding-bottom: 24px;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 24px;
  position: relative;
}

.price-total {
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
}

.price-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.price-icon {
  flex-shrink: 0;
}

.price-label {
  flex: 1;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
}

.price-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #161c24;
  font-weight: 500;
}

/* Discount Section */
.discount-section {
  padding-bottom: 24px;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 24px;
  position: relative;
}

.discount-total {
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
}

.discount-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.discount-icon {
  flex-shrink: 0;
}

.discount-label {
  flex: 1;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
}

.discount-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #161c24;
  font-weight: 500;
}

/* Summary Section */
.summary-section {
  padding-bottom: 24px;
  border-bottom: 1px solid #F4F6F8;
  margin-bottom: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
}

.summary-label {
  color: #637381;
}

.summary-value {
  color: #161c24;
  font-weight: 500;
}

.summary-row.total {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #F4F6F8;
}

.summary-row.total .summary-label {
  font-size: 16px;
  font-weight: 600;
  color: #FF6B6B;
}

.summary-row.total .summary-value {
  font-size: 18px;
  font-weight: 700;
  color: #FF6B6B;
}

/* Payment Section */
.payment-section {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 20px;
}

.payment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.payment-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
  margin: 0;
}

.payment-status-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 13px;
  padding: 6px 16px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: default;
}

.payment-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.payment-row {
  display: flex;
  gap: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
}

.payment-label {
  min-width: 140px;
  color: #161c24;
  font-weight: 500;
}

.payment-separator {
  color: #637381;
}

.payment-value {
  color: #161c24;
}

/* Cancel Button */
.cancel-button-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

.cancel-booking-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 32px;
  background: white;
  color: #FF3B30;
  border: 1.5px solid #FF3B30;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.cancel-booking-button:hover {
  background: #FFF4F3;
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(255, 59, 48, 0.2);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
}

.modal-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #161c24;
  margin: 0 0 12px 0;
  text-align: center;
}

.modal-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
  margin: 0 0 24px 0;
  text-align: center;
  line-height: 1.5;
}

.modal-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.modal-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-button.cancel {
  background: #F4F6F8;
  color: #637381;
}

.modal-button.cancel:hover {
  background: #DFE3E8;
}

.modal-button.confirm {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  color: white;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.2);
}

.modal-button.confirm:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 16px rgba(255, 107, 107, 0.3);
}

@media (max-width: 768px) {
  .booking-detail-page {
    padding: 80px 0 40px;
  }

  .booking-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .page-title {
    font-size: 24px;
  }

  .booking-content {
    padding: 24px 20px;
  }

  .car-card {
    grid-template-columns: 1fr;
  }

  .booking-code-card {
    align-items: flex-start;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .service-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .service-price {
    text-align: left;
  }

  .service-amount,
  .price-total,
  .discount-total {
    position: static;
    margin-top: 8px;
  }
}
</style>
