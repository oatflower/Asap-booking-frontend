<template>
  <Transition name="slide">
    <div v-if="isOpen" class="side-panel-overlay" @click="closePanel">
      <div class="side-panel" @click.stop>
        <!-- Close Button -->
        <button class="close-btn" @click="closePanel">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M18 6L6 18" stroke="#161c24" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <!-- Car Info -->
        <div class="car-header">
          <h2 class="car-name">{{ car?.model || 'TOYOTA YARIS ATIV 1.2 CC : BKK' }}</h2>
          <div class="coupon-badge" v-if="car?.coupon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="5" width="12" height="6" rx="1" stroke="#919EAB" stroke-width="1.2" fill="none"/>
            </svg>
            {{ car.coupon }}
          </div>
        </div>

        <!-- Car Image -->
        <div class="car-image">
          <img :src="car?.image || 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400'" :alt="car?.model" />
          <div class="asap-badge">asap</div>
        </div>

        <!-- Insurance Section -->
        <div class="section">
          <div class="section-header">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L4 5v5c0 4.5 3 8.5 6 10 3-1.5 6-5.5 6-10V5l-6-3z" stroke="#637381" stroke-width="1.5" fill="none"/>
            </svg>
            <span class="section-title">ประกันภัย</span>
          </div>

          <div class="insurance-options">
            <div
              v-for="ins in insuranceOptions"
              :key="ins.id"
              :class="['insurance-option', { active: selectedInsurance === ins.id }]"
              @click="selectedInsurance = ins.id"
            >
              <div class="radio">
                <div v-if="selectedInsurance === ins.id" class="radio-dot"></div>
              </div>
              <div class="option-info">
                <span class="option-name">{{ ins.name }}</span>
                <span class="option-desc">{{ ins.desc }}</span>
              </div>
              <span class="option-price">{{ ins.price }} ฿/วัน</span>
            </div>
          </div>
        </div>

        <!-- Services Section -->
        <div class="section">
          <div class="section-header">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="6" width="12" height="9" rx="1" stroke="#637381" stroke-width="1.5" fill="none"/>
            </svg>
            <span class="section-title">บริการเสริม</span>
            <button class="add-btn">+ เพิ่มบริการ</button>
          </div>

          <div class="service-item">
            <input type="checkbox" id="child-seat" v-model="childSeatSelected" class="checkbox" />
            <label for="child-seat" class="service-label">
              <span>Child Seat</span>
              <span class="service-price">1,000 ฿/ชิ้น/วัน</span>
            </label>
            <div v-if="childSeatSelected" class="qty-controls">
              <button class="qty-btn" @click="childSeatQty = Math.max(1, childSeatQty - 1)">-</button>
              <span class="qty-value">{{ childSeatQty }}</span>
              <button class="qty-btn" @click="childSeatQty++">+</button>
            </div>
          </div>

          <div class="service-item">
            <input type="checkbox" id="special" v-model="specialSelected" class="checkbox" />
            <label for="special" class="service-label">
              <span>Special assistance</span>
            </label>
          </div>
        </div>

        <!-- Summary -->
        <div class="summary">
          <div class="summary-row">
            <span>ชำระทันที</span>
            <span class="summary-price">{{ totalPrice.toFixed(2) }} ฿</span>
          </div>
        </div>

        <!-- Rent Button -->
        <button class="rent-btn" @click="handleRent">
          เช่ารถ
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5l5 5-5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
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

const insuranceOptions = [
  { id: 'cdw', name: 'CDW', desc: 'มีค่าเสียหายส่วนแรก', price: '0.00' },
  { id: 'scdw', name: 'SCDW', desc: 'ไม่ต้องจ่ายส่วนแรก ยกเว้นยาง', price: '500.00' },
  { id: 'full', name: 'FULL PROTECTION', desc: 'คุ้มครองทุกกรณี', price: '1,000.00' }
]

const selectedInsurance = ref('cdw')
const childSeatSelected = ref(true)
const childSeatQty = ref(2)
const specialSelected = ref(false)

const totalPrice = computed(() => {
  let base = parseFloat(props.car?.price?.replace(',', '') || 800)
  const insPrice = parseFloat(insuranceOptions.find(i => i.id === selectedInsurance.value)?.price.replace(',', '') || 0)
  const services = childSeatSelected.value ? 1000 * childSeatQty.value : 0
  return base + insPrice + services
})

const closePanel = () => emit('close')

const handleRent = () => {
  closePanel()
  router.push('/checkout')
}

watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
.side-panel-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.side-panel {
  width: 40%;
  min-width: 400px;
  max-width: 100%;
  height: 100%;
  background: white;
  padding: 24px;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #F4F6F8;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.car-header {
  margin-bottom: 16px;
  padding-right: 48px;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px;
}

.coupon-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #F9FAFB;
  border-radius: 6px;
  font-size: 12px;
  color: #637381;
}

.car-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
}

.car-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.asap-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: #FF595A;
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 6px;
}

.section {
  margin-bottom: 24px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161c24;
  flex: 1;
}

.add-btn {
  background: none;
  border: 1px solid #FF595A;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #FF595A;
  cursor: pointer;
}

.insurance-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.insurance-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.insurance-option:hover, .insurance-option.active {
  border-color: #FF595A;
}

.insurance-option.active {
  background: #FFF4F3;
}

.radio {
  width: 20px;
  height: 20px;
  border: 2px solid #DFE3E8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.insurance-option.active .radio {
  border-color: #FF595A;
}

.radio-dot {
  width: 10px;
  height: 10px;
  background: #FF595A;
  border-radius: 50%;
}

.option-info {
  flex: 1;
}

.option-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #161c24;
}

.option-desc {
  display: block;
  font-size: 11px;
  color: #919EAB;
}

.option-price {
  font-size: 14px;
  font-weight: 700;
  color: #161c24;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #F4F6F8;
}

.checkbox {
  width: 18px;
  height: 18px;
  accent-color: #FF595A;
}

.service-label {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #161c24;
  cursor: pointer;
}

.service-price {
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
  border-radius: 8px;
  background: #F9FAFB;
  font-size: 16px;
  cursor: pointer;
}

.qty-value {
  width: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.summary {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
}

.summary-price {
  color: #FF595A;
}

.rent-btn {
  width: 100%;
  padding: 16px;
  background: #FF595A;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
}

.rent-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255,89,90,0.3);
}

/* Slide Transition */
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s;
}
.slide-enter-active .side-panel, .slide-leave-active .side-panel {
  transition: transform 0.3s;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
}
.slide-enter-from .side-panel, .slide-leave-to .side-panel {
  transform: translateX(100%);
}

@media (max-width: 480px) {
  .side-panel {
    width: 100%;
  }
}
</style>
