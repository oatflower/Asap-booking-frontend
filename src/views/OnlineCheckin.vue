<template>
  <div class="online-checkin">
    <!-- Error Banner -->
    <div v-if="hasDocumentError" class="error-banner">
      <div class="banner-container">
        <div class="banner-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="error-icon">
            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="banner-text">
            <span class="error-title">{{ t('checkin.errorTitle') }}</span>
            <span class="error-message">{{ t('checkin.errorMessage') }}</span>
          </div>
        </div>
        <div class="banner-actions">
          <button class="retry-button" @click="scrollToUpload">
            {{ t('checkin.retryButton') }}
          </button>
          <button class="close-banner-error" @click="hasDocumentError = false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 6l8 8m0-8l-8 8" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="checkin-container">
      <!-- Header -->
      <div class="checkin-header">
        <h1 class="page-title">{{ t('checkin.title') }}</h1>
        <p class="page-subtitle">{{ hasDocumentError ? t('checkin.subtitleRetry') : t('checkin.subtitle') }}</p>
      </div>

      <!-- Booking Information Card -->
      <div class="booking-info-card">
        <div class="card-title">{{ t('checkin.bookingInfo') }}</div>

        <div class="booking-details">
          <div class="car-section">
            <img :src="bookingData.carImage" :alt="bookingData.carName" class="car-image" />
            <div class="car-info">
              <h3 class="car-name">{{ bookingData.carName }}</h3>
              <div class="car-pricing">
                <span class="currency-symbol">{{ t('common.baht') }}</span>
                <span class="car-price">{{ bookingData.price.toLocaleString() }}</span>
                <span class="price-period">/ {{ bookingData.days }} {{ t('checkin.days') }}</span>
              </div>
            </div>
            <div class="booking-code-box">
              <div class="code-label">{{ t('checkin.bookingCode') }}</div>
              <div class="code-value">{{ bookingData.code }}</div>
            </div>
          </div>

          <div class="trip-info-grid">
            <div class="trip-item">
              <div class="trip-label">{{ t('checkin.pickup') }}</div>
              <div class="trip-datetime">{{ bookingData.pickupDate }}</div>
              <div class="trip-location">{{ bookingData.pickupLocation }}</div>
            </div>

            <div class="swap-icon-container">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M15 8l4 4-4 4" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <div class="trip-item">
              <div class="trip-label">{{ t('checkin.return') }}</div>
              <div class="trip-datetime">{{ bookingData.dropoffDate }}</div>
              <div class="trip-location">{{ bookingData.dropoffLocation }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Credit Card Deposit Notice -->
      <div class="notice-card">
        <div class="notice-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#FF595A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="notice-content">
          <div class="notice-title">{{ t('checkin.importantInfo') }}</div>
          <div class="notice-text">{{ t('checkin.creditCardNotice') }}</div>
        </div>
      </div>

      <!-- Required Documents Section -->
      <div class="collapsible-section">
        <div class="section-header" @click="toggleSection('documents')">
          <div class="section-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="section-icon">
              <path d="M6 9l4 4 4-4" stroke="#161C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ t('checkin.requiredDocuments') }}</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" :class="['chevron-icon', { expanded: expandedSections.documents }]">
            <path d="M6 8l4 4 4-4" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <Transition name="expand">
          <div v-if="expandedSections.documents" class="section-content">
            <ul class="document-list">
              <li>ใบขับขี่ที่ยังไม่หมดอายุ (ใบขับขี่ไทยหรือใบขับขี่สากล)</li>
              <li>บัตรประชาชนหรือหนังสือเดินทาง</li>
              <li>บัตรเครดิตสำหรับวางเงินมัดจำ (ต้องเป็นชื่อเดียวกับผู้เช่า)</li>
            </ul>
          </div>
        </Transition>
      </div>

      <!-- Driver Qualifications Section -->
      <div class="collapsible-section">
        <div class="section-header" @click="toggleSection('qualifications')">
          <div class="section-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="section-icon">
              <path d="M10 11a3 3 0 100-6 3 3 0 000 6zM4 18a6 6 0 0112 0" stroke="#161C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ t('checkin.driverQualifications') }}</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" :class="['chevron-icon', { expanded: expandedSections.qualifications }]">
            <path d="M6 8l4 4 4-4" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <Transition name="expand">
          <div v-if="expandedSections.qualifications" class="section-content">
            <ul class="document-list">
              <li>อายุไม่ต่ำกว่า 21 ปี</li>
              <li>มีใบขับขี่ที่ถูกต้องตามกฎหมายอย่างน้อย 1 ปี</li>
              <li>สำหรับชาวต่างชาติ ต้องมีใบขับขี่สากล (International Driving Permit)</li>
            </ul>
          </div>
        </Transition>
      </div>

      <!-- Document Upload Section -->
      <div class="upload-section">
        <h2 class="upload-title">{{ t('checkin.uploadDocuments') }}</h2>

        <!-- Driver's License Upload -->
        <div class="upload-field">
          <label class="upload-label">{{ t('checkin.driverLicense') }} <span class="required">{{ t('checkin.required') }}</span></label>
          <div class="upload-area" @click="triggerFileInput('license')" @dragover.prevent @drop.prevent="handleDrop($event, 'license')">
            <input
              ref="licenseInput"
              type="file"
              accept="image/*,.pdf"
              @change="handleFileSelect($event, 'license')"
              style="display: none"
            />
            <div v-if="!uploadedFiles.license" class="upload-placeholder">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="24" fill="#F4F6F8"/>
                <path d="M24 20v8m-4-4h8" stroke="#637381" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <div class="upload-text">{{ t('checkin.uploadPlaceholder') }}</div>
              <div class="upload-hint">{{ t('checkin.uploadHint') }}</div>
            </div>
            <div v-else class="uploaded-file">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="file-icon">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="file-name">{{ uploadedFiles.license.name }}</span>
              <button class="remove-file" @click.stop="removeFile('license')">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 6l8 8m0-8l-8 8" stroke="#FF595A" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- ID Card Upload -->
        <div class="upload-field">
          <label class="upload-label">{{ t('checkin.idCard') }} <span class="required">{{ t('checkin.required') }}</span></label>
          <div class="upload-area" @click="triggerFileInput('idCard')" @dragover.prevent @drop.prevent="handleDrop($event, 'idCard')">
            <input
              ref="idCardInput"
              type="file"
              accept="image/*,.pdf"
              @change="handleFileSelect($event, 'idCard')"
              style="display: none"
            />
            <div v-if="!uploadedFiles.idCard" class="upload-placeholder">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="24" fill="#F4F6F8"/>
                <path d="M24 20v8m-4-4h8" stroke="#637381" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <div class="upload-text">{{ t('checkin.uploadPlaceholder') }}</div>
              <div class="upload-hint">{{ t('checkin.uploadHint') }}</div>
            </div>
            <div v-else class="uploaded-file">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="file-icon">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="file-name">{{ uploadedFiles.idCard.name }}</span>
              <button class="remove-file" @click.stop="removeFile('idCard')">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 6l8 8m0-8l-8 8" stroke="#FF595A" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Terms and Conditions -->
      <div class="terms-section">
        <label class="checkbox-label">
          <input type="checkbox" v-model="acceptTerms" class="checkbox-input" />
          <span class="checkbox-text">{{ t('checkin.acceptTerms') }} <a href="#" class="terms-link">{{ t('checkin.termsLink') }}</a> {{ t('checkin.termsText') }}</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" v-model="acceptDocuments" class="checkbox-input" />
          <span class="checkbox-text">{{ t('checkin.certifyDocuments') }}</span>
        </label>
      </div>

      <!-- Submit Button -->
      <div class="submit-section">
        <button
          class="submit-button"
          :disabled="!canSubmit"
          @click="submitCheckin"
        >
          {{ t('checkin.submit') }}
        </button>
      </div>
    </div>

    <!-- Approving Modal -->
    <Transition name="modal">
      <div v-if="showApprovingModal" class="modal-overlay" @click="closeApprovingModal">
        <div class="modal-content approving-modal" @click.stop>
          <div class="modal-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="#FF595A" stroke-width="4" fill="none"/>
              <path d="M32 20v16m0 8h.01" stroke="#FF595A" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </div>
          <h2 class="modal-title">{{ t('checkin.approvingTitle') }}</h2>
          <p class="modal-subtitle">{{ t('checkin.approvingSubtitle') }}</p>

          <div class="modal-booking-info">
            <div class="modal-info-row">
              <span class="modal-info-label">{{ t('checkin.bookingCode') }}:</span>
              <span class="modal-info-value">{{ bookingData.code }}</span>
            </div>
            <div class="modal-info-row">
              <span class="modal-info-label">{{ t('nav.cars') }}:</span>
              <span class="modal-info-value">{{ bookingData.carName }}</span>
            </div>
            <div class="modal-info-row">
              <span class="modal-info-label">{{ t('checkin.pickup') }}:</span>
              <span class="modal-info-value">{{ bookingData.pickupDate }}</span>
            </div>
          </div>

          <div class="modal-status">
            <div class="status-badge pending">{{ t('checkin.pendingStatus') }}</div>
          </div>

          <p class="modal-message">{{ t('checkin.approvingMessage') }}<br/>{{ t('checkin.contactInfo') }} <a href="tel:020918000" class="contact-link">02-091-8000</a></p>

          <button class="modal-button secondary" @click="goToBookingHistory">
            {{ t('checkin.viewBooking') }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- Success Modal -->
    <Transition name="modal">
      <div v-if="showSuccessModal" class="modal-overlay" @click="closeSuccessModal">
        <div class="modal-content success-modal" @click.stop>
          <div class="modal-icon success">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" fill="#36B37E"/>
              <path d="M20 32l8 8 16-16" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="modal-title">{{ t('checkin.successTitle') }}</h2>
          <p class="modal-message">{{ t('checkin.successMessage') }}<br/>{{ t('checkin.contactInfo') }} <a href="tel:020918000" class="contact-link">02-091-8000</a></p>
          <button class="modal-button primary" @click="showApproving">
            {{ t('checkin.close') }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const route = useRoute()
const router = useRouter()
const { t } = useLanguage()

// Booking data
const bookingData = ref({
  code: route.params.code || 'AB09L',
  carName: 'TOYOTA YARIS ATIV 1.2 CC : BKK',
  carImage: 'https://placehold.co/300x200',
  price: 9000,
  days: 3,
  pickupDate: '01/08/2025 - 09:00 น.',
  pickupLocation: 'สนามบินสุวรรณภูมิ',
  dropoffDate: '03/08/2025 - 09:00 น.',
  dropoffLocation: 'สนามบินสุวรรณภูมิ'
})

// Expanded sections
const expandedSections = ref({
  documents: true,
  qualifications: true
})

// File uploads
const uploadedFiles = ref({
  license: null,
  idCard: null
})

const licenseInput = ref(null)
const idCardInput = ref(null)

// Terms acceptance
const acceptTerms = ref(false)
const acceptDocuments = ref(false)

// Modals
const showSuccessModal = ref(false)
const showApprovingModal = ref(false)

// Check for document error from query parameter
const hasDocumentError = ref(route.query.error === 'document')

// Computed
const canSubmit = computed(() => {
  return uploadedFiles.value.license &&
         uploadedFiles.value.idCard &&
         acceptTerms.value &&
         acceptDocuments.value
})

// Methods
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}

const triggerFileInput = (type) => {
  if (type === 'license') {
    licenseInput.value.click()
  } else {
    idCardInput.value.click()
  }
}

const handleFileSelect = (event, type) => {
  const file = event.target.files[0]
  if (file) {
    uploadedFiles.value[type] = file
  }
}

const handleDrop = (event, type) => {
  const file = event.dataTransfer.files[0]
  if (file) {
    uploadedFiles.value[type] = file
  }
}

const removeFile = (type) => {
  uploadedFiles.value[type] = null
  if (type === 'license') {
    licenseInput.value.value = ''
  } else {
    idCardInput.value.value = ''
  }
}

const submitCheckin = () => {
  if (canSubmit.value) {
    showSuccessModal.value = true
  }
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
}

const showApproving = () => {
  showSuccessModal.value = false
  showApprovingModal.value = true
}

const closeApprovingModal = () => {
  showApprovingModal.value = false
  // Simulate document approval - redirect to booking confirmation with success flag
  // In production, this would be based on actual approval status
  router.push('/booking-confirmation?checkinSuccess=true')
}

const goToBookingHistory = () => {
  router.push('/booking-history')
}

const scrollToUpload = () => {
  // Scroll to upload section
  const uploadSection = document.querySelector('.upload-section')
  if (uploadSection) {
    uploadSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  // Clear error state
  hasDocumentError.value = false
}
</script>

<style scoped>
.online-checkin {
  min-height: 100vh;
  background: #F9FAFB;
  padding: 40px 0;
}

.online-checkin:has(.error-banner) {
  padding-top: 120px;
}

.checkin-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.checkin-header {
  margin-bottom: 32px;
}

.page-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
}

.page-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #637381;
  margin: 0;
}

/* Booking Info Card */
.booking-info-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
}

.card-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #161C24;
  margin-bottom: 20px;
}

.booking-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.car-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.car-image {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
}

.car-info {
  flex: 1;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
  margin: 0 0 8px 0;
}

.car-pricing {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.currency-symbol {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #FF595A;
}

.car-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FF595A;
}

.price-period {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
}

.booking-code-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 20px;
  background: #F4F6F8;
  border-radius: 8px;
}

.code-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #637381;
}

.code-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #161C24;
}

.trip-info-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: center;
}

.trip-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.trip-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #637381;
}

.trip-datetime {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #161C24;
}

.trip-location {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
}

.swap-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Notice Card */
.notice-card {
  background: #FFF5F5;
  border: 1px solid #FFE5E5;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
}

.notice-icon {
  flex-shrink: 0;
}

.notice-content {
  flex: 1;
}

.notice-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FF595A;
  margin-bottom: 8px;
}

.notice-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
  line-height: 1.6;
}

/* Collapsible Sections */
.collapsible-section {
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.section-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;
}

.section-header:hover {
  background: #F9FAFB;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #161C24;
}

.section-icon {
  flex-shrink: 0;
}

.chevron-icon {
  flex-shrink: 0;
  transition: transform 0.3s;
}

.chevron-icon.expanded {
  transform: rotate(180deg);
}

.section-content {
  padding: 0 20px 20px 52px;
}

.document-list {
  margin: 0;
  padding-left: 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
  line-height: 1.8;
}

.document-list li {
  margin-bottom: 8px;
}

/* Upload Section */
.upload-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
}

.upload-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #161C24;
  margin: 0 0 24px 0;
}

.upload-field {
  margin-bottom: 24px;
}

.upload-field:last-child {
  margin-bottom: 0;
}

.upload-label {
  display: block;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161C24;
  margin-bottom: 12px;
}

.required {
  color: #FF595A;
}

.upload-area {
  border: 2px dashed #DFE3E8;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.upload-area:hover {
  border-color: #FF595A;
  background: #FFF5F5;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.upload-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #161C24;
}

.upload-hint {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #637381;
}

.uploaded-file {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.file-icon {
  flex-shrink: 0;
}

.file-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #161C24;
}

.remove-file {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.remove-file:hover {
  transform: scale(1.1);
}

/* Terms Section */
.terms-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.checkbox-input {
  margin-top: 2px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #FF595A;
}

.checkbox-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #161C24;
  line-height: 1.6;
}

.terms-link {
  color: #FF595A;
  text-decoration: none;
  font-weight: 600;
}

.terms-link:hover {
  text-decoration: underline;
}

/* Submit Section */
.submit-section {
  display: flex;
  justify-content: center;
}

.submit-button {
  background: #FF595A;
  border: none;
  border-radius: 20px;
  padding: 16px 48px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 89, 90, 0.3);
}

.submit-button:disabled {
  background: #919EAB;
  cursor: not-allowed;
  box-shadow: none;
}

/* Modals */
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
  padding: 24px;
}

.modal-content {
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.modal-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.modal-icon.success svg {
  animation: scaleIn 0.3s ease-out;
}

.modal-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #161C24;
  margin: 0 0 12px 0;
}

.modal-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #637381;
  margin: 0 0 24px 0;
}

.modal-booking-info {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
}

.modal-info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.modal-info-row:last-child {
  margin-bottom: 0;
}

.modal-info-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
}

.modal-info-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #161C24;
}

.modal-status {
  margin-bottom: 24px;
}

.status-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.status-badge.pending {
  background: #FFF5E6;
  color: #FFA000;
}

.modal-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #637381;
  line-height: 1.6;
  margin: 0 0 32px 0;
}

.contact-link {
  color: #FF595A;
  text-decoration: none;
  font-weight: 600;
}

.contact-link:hover {
  text-decoration: underline;
}

.modal-button {
  border: none;
  border-radius: 20px;
  padding: 16px 32px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.modal-button.primary {
  background: #FF595A;
  color: white;
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
}

.modal-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 89, 90, 0.3);
}

.modal-button.secondary {
  background: white;
  color: #161C24;
  border: 1px solid #DFE3E8;
}

.modal-button.secondary:hover {
  background: #F9FAFB;
}

/* Transitions */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .checkin-container {
    padding: 0 16px;
  }

  .page-title {
    font-size: 26px;
  }

  .trip-info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .swap-icon-container {
    transform: rotate(90deg);
  }

  .car-section {
    flex-wrap: wrap;
  }

  .modal-content {
    padding: 24px;
  }

  .error-banner {
    padding: 12px 16px;
  }

  .banner-container {
    flex-direction: column;
    gap: 16px;
  }

  .retry-button {
    width: 100%;
  }
}

/* Error Banner */
.error-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF595A 100%);
  padding: 16px 32px;
  z-index: 100;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.3);
}

.banner-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.error-icon {
  flex-shrink: 0;
}

.banner-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.error-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.error-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: white;
  opacity: 0.9;
}

.retry-button {
  background: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #FF595A;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  flex-shrink: 0;
}

.retry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

.close-banner-error {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.close-banner-error:hover {
  transform: scale(1.1);
}
</style>
