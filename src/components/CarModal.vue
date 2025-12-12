<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <!-- Centered Modal -->
      <div class="modal-container" @click.stop>
        <!-- Close Button -->
        <button class="close-btn" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M18 6L6 18" stroke="#637381" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <!-- Insurance Details View -->
        <div v-if="showInsuranceDetails" class="insurance-details-view">
          <!-- Header -->
          <div class="details-header">
            <button class="back-btn" @click="showInsuranceDetails = false">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M20 8L12 16L20 24" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <h2 class="details-title">รายละเอียดประกันเพิ่มเติม</h2>
          </div>

          <!-- Insurance Comparison Table -->
          <div class="insurance-table">
            <!-- Table Header Row -->
            <div class="table-row table-header-row">
              <div class="table-cell header-cell">
                <span class="header-text">ประกันและความคุ้มครอง</span>
              </div>
              <div class="table-cell">
                <span class="insurance-name">CDW</span>
                <span class="insurance-desc">ค่าเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท</span>
              </div>
              <div class="table-cell">
                <span class="insurance-name">SCDW</span>
                <span class="insurance-desc">ไม่มีค่าเสียหายส่วนแรก ยกเว้นกระจก, ยาง, ล้อ</span>
              </div>
              <div class="table-cell recommended-cell">
                <div class="recommend-badge">แนะนำ</div>
                <span class="insurance-name">FULL PROTECTION</span>
                <span class="insurance-desc">คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม (ประกันภัยชั้น 1)</span>
              </div>
            </div>

            <!-- Row: ค่าเสียหายส่วนแรก -->
            <div class="table-row">
              <div class="table-cell header-cell">
                <span class="row-title">ค่าเสียหายส่วนแรก</span>
              </div>
              <div class="table-cell">
                <span class="cell-text">คุ้มครอง 5,350 - 16,050 บาท</span>
              </div>
              <div class="table-cell">
                <span class="cell-text">ไม่มีค่าเสียหายส่วนแรก<br/>ยกเว้นกระจก, ยาง, ล้อ</span>
              </div>
              <div class="table-cell">
                <span class="cell-text success">คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม</span>
              </div>
            </div>

            <!-- Row: กระจก ยาง ล้อ -->
            <div class="table-row">
              <div class="table-cell header-cell">
                <span class="row-title">กระจก, ยาง, ล้อ</span>
              </div>
              <div class="table-cell">
                <span class="cell-text">ไม่คุ้มครอง</span>
              </div>
              <div class="table-cell">
                <span class="cell-text">ไม่คุ้มครอง</span>
              </div>
              <div class="table-cell">
                <span class="cell-text success">คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม</span>
              </div>
            </div>

            <!-- Row: อุบัติเหตุ -->
            <div class="table-row">
              <div class="table-cell header-cell">
                <span class="row-title">อุบัติเหตุ</span>
              </div>
              <div class="table-cell">
                <span class="cell-text">จ่ายส่วนต่างตามจริง</span>
              </div>
              <div class="table-cell">
                <span class="cell-text">จ่ายส่วนต่างตามจริง</span>
              </div>
              <div class="table-cell">
                <span class="cell-text success">คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม</span>
              </div>
            </div>

            <!-- Row: ราคา -->
            <div class="table-row">
              <div class="table-cell header-cell">
                <span class="row-title">ราคา</span>
              </div>
              <div class="table-cell">
                <span class="price-text">0.00 ฿</span>
              </div>
              <div class="table-cell">
                <span class="price-text">500.00 ฿</span>
              </div>
              <div class="table-cell">
                <span class="price-text">1,000.00 ฿</span>
              </div>
            </div>

            <!-- Row: Action -->
            <div class="table-row action-row">
              <div class="table-cell header-cell"></div>
              <div class="table-cell">
                <button
                  :class="['select-btn', { active: selectedInsurance === 'cdw' }]"
                  @click="selectInsuranceAndClose('cdw')"
                >
                  {{ selectedInsurance === 'cdw' ? 'เลือกอยู่' : 'เลือก' }}
                </button>
              </div>
              <div class="table-cell">
                <button
                  :class="['select-btn', { active: selectedInsurance === 'scdw' }]"
                  @click="selectInsuranceAndClose('scdw')"
                >
                  {{ selectedInsurance === 'scdw' ? 'เลือกอยู่' : 'เลือก' }}
                </button>
              </div>
              <div class="table-cell">
                <button
                  :class="['select-btn', { active: selectedInsurance === 'full' }]"
                  @click="selectInsuranceAndClose('full')"
                >
                  {{ selectedInsurance === 'full' ? 'เลือกอยู่' : 'เลือก' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Modal Content -->
        <div v-else class="modal-body">
          <!-- Left Column - Car Info -->
          <div class="left-column">
            <!-- Car Header -->
            <div class="car-header">
              <h2 class="car-name">{{ car?.model || 'TOYOTA YARIS ATIV 1.2 CC : BKK' }}</h2>
              <div class="coupon-badge" v-if="car?.coupon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 5.5C1 4.67157 1.67157 4 2.5 4H13.5C14.3284 4 15 4.67157 15 5.5V6.5C14.1716 6.5 13.5 7.17157 13.5 8C13.5 8.82843 14.1716 9.5 15 9.5V10.5C15 11.3284 14.3284 12 13.5 12H2.5C1.67157 12 1 11.3284 1 10.5V9.5C1.82843 9.5 2.5 8.82843 2.5 8C2.5 7.17157 1.82843 6.5 1 6.5V5.5Z" stroke="#919EAB" stroke-width="1" fill="none"/>
                </svg>
                <span>{{ car.coupon }}</span>
              </div>
            </div>

            <!-- Car Image -->
            <div class="car-image-section">
              <img :src="car?.image" :alt="car?.model" class="car-image" />
              <div class="carousel-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>

            <!-- Car Specs -->
            <div class="car-specs">
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 9C10.6569 9 12 7.65685 12 6C12 4.34315 10.6569 3 9 3C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9Z" stroke="#637381" stroke-width="1.2"/>
                  <path d="M15 15C15 12.2386 12.3137 10 9 10C5.68629 10 3 12.2386 3 15" stroke="#637381" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
                <span>4</span>
              </div>
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="3" y="5" width="9" height="11" rx="1" stroke="#637381" stroke-width="1.2"/>
                  <path d="M6 5V3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5V5" stroke="#637381" stroke-width="1.2"/>
                </svg>
                <span>2 เล็ก, 1 ใหญ่</span>
              </div>
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="5" width="4" height="10" rx="0.5" fill="#637381"/>
                  <rect x="7" y="3" width="4" height="12" rx="0.5" fill="#637381"/>
                  <rect x="12" y="7" width="4" height="8" rx="0.5" fill="#637381"/>
                </svg>
                <span>ออโต้</span>
              </div>
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#637381" stroke-width="1.2"/>
                  <text x="9" y="12" text-anchor="middle" font-size="6" fill="#637381">CC</text>
                </svg>
                <span>1,197</span>
              </div>
              <div class="spec-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.5 15V4C2.5 3.17157 3.17157 2.5 4 2.5H10C10.8284 2.5 11.5 3.17157 11.5 4V15M2.5 15H11.5M2.5 15H1M11.5 15H17M11.5 8H14C14.8284 8 15.5 8.67157 15.5 9.5V14" stroke="#637381" stroke-width="1.2" stroke-linecap="round"/>
                  <rect x="4" y="4" width="5" height="3" fill="#637381"/>
                </svg>
                <span>แก๊สโซฮอล</span>
              </div>
            </div>

            <!-- Price Section -->
            <div class="price-section">
              <p class="price-label">ราคาเช่า 3 วัน เริ่มต้นเพียง</p>
              <div class="price-main">
                <span class="price-amount">{{ formatPrice(totalPrice) }}</span>
                <span class="price-currency">฿</span>
              </div>
              <p class="price-per-day">หรือ <strong>{{ formatPrice(basePrice) }}</strong> บาท/วัน</p>
            </div>
          </div>

          <!-- Middle Column - Options -->
          <div class="middle-column">
            <!-- Insurance Section Header -->
            <div class="section-card">
              <div class="section-header">
                <div class="section-info">
                  <div class="section-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2L4 5v5c0 4.5 3 8.5 6 10 3-1.5 6-5.5 6-10V5l-6-3z" stroke="#637381" stroke-width="1.5" fill="none"/>
                      <path d="M7 10l2 2 4-4" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="section-text">
                    <span class="section-title">ประกันภัย</span>
                    <span class="section-subtitle">ยิ่งอัพเกรด ยิ่งหายห่วง</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Insurance Options -->
            <div class="options-card">
              <div
                v-for="ins in insuranceOptions"
                :key="ins.id"
                :class="['option-item', { selected: selectedInsurance === ins.id }]"
                @click="selectedInsurance = ins.id"
              >
                <div :class="['radio-btn', { selected: selectedInsurance === ins.id }]"></div>
                <div class="option-content">
                  <div class="option-row">
                    <span class="option-name">{{ ins.name }}</span>
                    <div class="option-price-row">
                      <span class="option-price">{{ ins.priceLabel }}</span>
                      <span class="option-unit" v-if="ins.price === 0">฿/วัน</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <p class="option-desc">{{ ins.desc }}</p>
                </div>
              </div>

              <div class="more-link" @click="showInsuranceDetails = true">
                <span>รายละเอียดประกันเพิ่มเติม</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="#161C24" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <!-- Services Section Header -->
            <div class="section-card">
              <div class="section-header">
                <div class="section-info">
                  <div class="section-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 3h14v14H3z" stroke="#637381" stroke-width="1.5"/>
                      <path d="M7 7h6M7 10h6M7 13h4" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="section-text">
                    <span class="section-title">บริการเสริม</span>
                    <span class="section-subtitle">คาร์ซีท, รถเข็น และอื่นๆ</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Items -->
            <div class="options-card">
              <div class="service-item">
                <div
                  :class="['checkbox-btn', { checked: childSeatSelected }]"
                  @click="childSeatSelected = !childSeatSelected"
                >
                  <svg v-if="childSeatSelected" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="service-content" @click="childSeatSelected = !childSeatSelected">
                  <span class="service-name">Child Seat</span>
                  <span class="service-price">1,000 ฿/ชิ้น/วัน</span>
                </div>
                <div v-if="childSeatSelected" class="qty-controls">
                  <button class="qty-btn" @click="childSeatQty = Math.max(1, childSeatQty - 1)">-</button>
                  <input type="text" :value="childSeatQty" class="qty-input" readonly />
                  <button class="qty-btn" @click="childSeatQty++">+</button>
                </div>
              </div>

              <div class="service-item">
                <div
                  :class="['checkbox-btn', { checked: specialSelected }]"
                  @click="specialSelected = !specialSelected"
                >
                  <svg v-if="specialSelected" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="service-content" @click="specialSelected = !specialSelected">
                  <span class="service-name">Special assistance</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Summary -->
          <div class="right-column">
            <!-- Payment Options -->
            <div class="summary-header">
              <span class="summary-title">ยอดที่ต้องชำระทั้งหมด</span>
            </div>

            <div class="payment-options">
              <div
                :class="['payment-option', { selected: paymentMethod === 'now' }]"
                @click="paymentMethod = 'now'"
              >
                <div :class="['radio-btn', { selected: paymentMethod === 'now' }]"></div>
                <div class="payment-content">
                  <div class="payment-row">
                    <div class="payment-title">
                      <span>ชำระทันที</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="info-icon">
                        <circle cx="8" cy="8" r="6" stroke="#919EAB" stroke-width="1.2"/>
                        <path d="M8 7v4M8 5v.5" stroke="#919EAB" stroke-width="1.2" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div class="payment-price">
                      <span class="old-price">({{ formatPrice(totalPrice) }} ฿)</span>
                      <span class="new-price">{{ formatPrice(discountedPrice) }}</span>
                      <span class="currency">฿</span>
                    </div>
                  </div>
                  <div class="payment-benefits">
                    <div class="benefit">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7l3 3 5-5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                      <span>จ่ายก่อนประหยัดกว่า</span>
                    </div>
                    <div class="benefit warning">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7l3 3 5-5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                      <span>ไม่สามารถยกเลิกและเปลี่ยนแปลงการเช่าได้</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                :class="['payment-option', { selected: paymentMethod === 'later' }]"
                @click="paymentMethod = 'later'"
              >
                <div :class="['radio-btn', { selected: paymentMethod === 'later' }]"></div>
                <div class="payment-content">
                  <div class="payment-row">
                    <div class="payment-title">
                      <span>ชำระทีหลัง</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="info-icon">
                        <circle cx="8" cy="8" r="6" stroke="#919EAB" stroke-width="1.2"/>
                        <path d="M8 7v4M8 5v.5" stroke="#919EAB" stroke-width="1.2" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div class="payment-price">
                      <span class="later-price">{{ formatPrice(totalPrice) }}</span>
                      <span class="currency">฿</span>
                    </div>
                  </div>
                  <div class="payment-benefits">
                    <div class="benefit">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7l3 3 5-5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                      <span>ชำระเต็มจำนวนเมื่อรับรถ</span>
                    </div>
                    <div class="benefit">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7l3 3 5-5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                      <span>ยกเลิกได้ภายใน 48 ชม. ก่อนรับรถ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Bar -->
            <div class="action-bar">
              <div class="total-info">
                <span class="total-label">{{ paymentMethod === 'now' ? 'ชำระทันที' : 'ชำระทีหลัง' }}</span>
                <div class="total-amount">
                  <span class="amount">{{ formatPrice(paymentMethod === 'now' ? discountedPrice : totalPrice) }}</span>
                  <span class="currency">฿</span>
                </div>
              </div>
              <button class="rent-btn" @click="handleRent">
                เช่ารถ
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 5l5 5-5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <!-- Credit Notice -->
            <div class="credit-notice">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="3" y="7" width="26" height="18" rx="2" stroke="#161C24" stroke-width="1.5"/>
                <path d="M3 13h26" stroke="#161C24" stroke-width="1.5"/>
              </svg>
              <div class="notice-content">
                <span class="notice-title">โปรดเตรียมบัตรเครดิตสำหรับวางมัดจำ</span>
                <ul class="notice-list">
                  <li>ชื่อบัตรเดียวกันกับชื่อผู้จอง</li>
                  <li>มีวงเงินอย่างน้อย 6,000 บาท</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  isOpen: Boolean,
  car: Object
})

const emit = defineEmits(['close'])

// Insurance options
const insuranceOptions = [
  { id: 'cdw', name: 'CDW', price: 0, priceLabel: '0.00', desc: 'มีค่าเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท' },
  { id: 'scdw', name: 'SCDW', price: 500, priceLabel: '+500.00', desc: 'ไม่มีค่าเสียหายส่วนแรก ยกเว้นกระจก, ยาง, ล้อ' },
  { id: 'full', name: 'FULL PROTECTION', price: 1000, priceLabel: '+1,000.00', desc: 'คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม (ประกันภัยชั้น 1)' }
]

// State
const selectedInsurance = ref('cdw')
const childSeatSelected = ref(true)
const childSeatQty = ref(2)
const specialSelected = ref(false)
const paymentMethod = ref('now')
const showInsuranceDetails = ref(false)

// Computed
const basePrice = computed(() => {
  return parseFloat(props.car?.price?.replace(',', '') || 700)
})

const totalPrice = computed(() => {
  const days = 3
  let total = basePrice.value * days
  const insOption = insuranceOptions.find(i => i.id === selectedInsurance.value)
  total += (insOption?.price || 0) * days
  if (childSeatSelected.value) {
    total += 1000 * childSeatQty.value * days
  }
  return total
})

const discountedPrice = computed(() => {
  return totalPrice.value * 0.95 // 5% discount for pay now
})

// Methods
const formatPrice = (price) => {
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const closeModal = () => {
  showInsuranceDetails.value = false
  emit('close')
}

const handleRent = () => {
  closeModal()
  router.push('/checkout')
}

const selectInsuranceAndClose = (insuranceId) => {
  selectedInsurance.value = insuranceId
  showInsuranceDetails.value = false
}

watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
}

.modal-container {
  background: #F8F8F8;
  border-radius: 24px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: white;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 10;
  transition: transform 0.2s;
}

.close-btn:hover {
  transform: scale(1.05);
}

/* Content */
.modal-body {
  display: flex;
  gap: 24px;
  padding: 24px;
}

/* Left Column */
.left-column {
  width: 320px;
  flex-shrink: 0;
}

.car-info-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 22.4px -11px rgba(0, 0, 0, 0.05);
}

.car-header {
  margin-bottom: 16px;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px;
  line-height: 1.587;
}

.coupon-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #4F4D4D;
}

.car-image-section {
  margin-bottom: 16px;
  text-align: center;
}

.car-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #E5E3E3;
}

.dot.active {
  background: #161C24;
}

.car-specs {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 0;
  border-top: 1px solid #E5E3E3;
  margin-bottom: 16px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.spec-item svg {
  opacity: 0.5;
}

.spec-item span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #454F5B;
}

.price-section {
  text-align: center;
}

.price-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #4F4D4D;
  margin: 0 0 4px;
}

.price-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.price-amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #161C24;
}

.price-currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #837F7F;
}

.price-per-day {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #4F4D4D;
  margin: 4px 0 0;
}

.price-per-day strong {
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
}

/* Middle Column */
.middle-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-card {
  background: white;
  border-radius: 16px;
  padding: 16px 24px;
  box-shadow: 0 0 22.4px -11px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-text {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #9C9797;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: white;
  border: 1px solid #637381;
  border-radius: 12px;
  padding: 8px 16px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #637381;
  cursor: pointer;
}

/* Options Card */
.options-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 22.4px -11px rgba(0, 0, 0, 0.05);
}

.option-item {
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid #E5E3E3;
  cursor: pointer;
}

.option-item:last-of-type {
  border-bottom: none;
}

.option-item.selected {
  background: #FFF8F8;
}

.radio-btn {
  width: 20px;
  height: 20px;
  border: 2px solid #DFE3E8;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;
}

.radio-btn.selected {
  border-color: #FF595A;
  background: #FF595A;
  position: relative;
}

.radio-btn.selected::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.option-content {
  flex: 1;
}

.option-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.option-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000;
}

.option-price-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.option-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000;
}

.option-unit {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #919EAB;
}

.option-desc {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #9C9797;
  margin: 0;
  line-height: 1.5;
}

.more-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  border-top: 1px solid #E5E3E3;
}

/* Service Items */
.service-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid #E5E3E3;
}

.service-item:last-child {
  border-bottom: none;
}

.checkbox-btn {
  width: 20px;
  height: 20px;
  border: 2px solid #DFE3E8;
  border-radius: 6px;
  flex-shrink: 0;
}

.checkbox-btn.checked {
  background: #FF595A;
  border-color: #FF595A;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000;
}

.service-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
}

.qty-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  background: white;
  font-size: 18px;
  font-weight: 600;
  color: #637381;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-input {
  width: 48px;
  height: 32px;
  text-align: center;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #454F5B;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  outline: none;
}

/* Right Column */
.right-column {
  width: 300px;
  flex-shrink: 0;
}

.summary-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 0 22.4px -11px rgba(0, 0, 0, 0.05);
}

.summary-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.summary-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

/* Payment Options */
.payment-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.payment-option {
  display: flex;
  gap: 12px;
  padding: 16px;
  border: 1px solid #E5E3E3;
  border-radius: 16px;
  cursor: pointer;
}

.payment-option.selected {
  border-color: #FF595A;
  background: #FFF8F8;
}

.payment-content {
  flex: 1;
}

.payment-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.payment-title {
  display: flex;
  align-items: center;
  gap: 4px;
}

.payment-title span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000;
}

.info-icon {
  opacity: 0.5;
}

.payment-price {
  display: flex;
  align-items: center;
  gap: 4px;
}

.old-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #9C9797;
  text-decoration: line-through;
}

.new-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FF595A;
}

.later-price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
}

.currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #837F7F;
}

.payment-benefits {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.benefit {
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

.benefit svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.benefit span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #22C55E;
  line-height: 1.4;
}

.benefit a {
  color: #2563EB;
  text-decoration: underline;
}

/* Action Bar */
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: white;
  border: 1px solid #E5E3E3;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 0 22.4px -11px rgba(0, 0, 0, 0.05);
}

.total-info {
  display: flex;
  flex-direction: column;
}

.total-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.total-amount {
  display: flex;
  align-items: center;
  gap: 4px;
}

.total-amount .amount {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}

.total-amount .currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #837F7F;
}

.rent-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #FF595A;
  border: none;
  border-radius: 16px;
  padding: 16px 32px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
}

.rent-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 89, 90, 0.3);
}

/* Credit Notice */
.credit-notice {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.notice-content {
  flex: 1;
}

.notice-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000;
  display: block;
  margin-bottom: 8px;
}

.notice-list {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #637381;
  margin: 0;
  padding-left: 16px;
  line-height: 1.6;
}

.notice-list li {
  margin-bottom: 2px;
}

/* Insurance Details View */
.insurance-details-view {
  padding: 24px;
}

.details-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.back-btn {
  background: white;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}

.back-btn:hover {
  transform: scale(1.05);
}

.details-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin: 0;
}

.insurance-table {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 4px 3px 4px 0px rgba(0, 0, 0, 0.03);
}

.table-row {
  display: flex;
}

.table-row:not(:last-child) .table-cell {
  border-bottom: 1px solid #F6F6F6;
}

.table-cell {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #F6F6F6;
}

.table-cell:last-child {
  border-right: none;
}

.table-cell.header-cell {
  background: #F8F8F8;
  align-items: flex-start;
  text-align: left;
  min-width: 200px;
  flex: 0 0 200px;
}

.header-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}

.row-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.insurance-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
}

.insurance-desc {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #000;
  line-height: 1.5;
}

.recommended-cell {
  position: relative;
}

.recommend-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #FDE7E8;
  color: #FF595A;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 16px;
}

.cell-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #000;
  line-height: 1.5;
}

.cell-text.success {
  color: #36B37E;
}

.price-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}

.select-btn {
  background: white;
  border: 1px solid #FF595A;
  border-radius: 12px;
  padding: 12px 32px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FF595A;
  cursor: pointer;
  transition: all 0.2s;
}

.select-btn:hover {
  background: #FFF8F8;
}

.select-btn.active {
  background: #FF595A;
  color: white;
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s, opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .modal-body {
    flex-direction: column;
  }

  .left-column,
  .middle-column,
  .right-column {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .modal-overlay {
    padding: 16px;
  }

  .modal-container {
    max-height: 95vh;
  }

  .modal-body {
    padding: 16px;
  }

  .car-specs {
    flex-wrap: wrap;
    gap: 12px;
  }

  .insurance-table {
    overflow-x: auto;
  }

  .table-row {
    min-width: 800px;
  }

  .table-cell.header-cell {
    min-width: 150px;
    flex: 0 0 150px;
  }
}
</style>
