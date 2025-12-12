<template>
  <div class="sticky-search-bar" :class="{ visible: isVisible }">
    <div class="search-bar-content">
      <!-- Location Section -->
      <div class="section location-section">
        <!-- Input Group: Pickup -->
        <div class="input-group">
          <div class="label-row">
            <span class="label">รับรถ: Bangkok</span>
          </div>
          <div class="value-row">Suvarnabhumi Airport</div>
        </div>

        <div class="swap-icon">
          <img src="@/assets/images/icon_swap.svg" alt="swap" />
        </div>

        <!-- Input Group: Dropoff -->
        <div class="input-group">
          <div class="label-row">
            <span class="label">คืนรถ: Bangkok</span>
          </div>
          <div class="value-row">Suvarnabhumi Airport</div>
        </div>
      </div>

      <div class="divider-vertical"></div>

      <!-- Date Section -->
      <div class="section date-section">
        <!-- Input Group: Start Date -->
        <div class="input-group">
          <div class="label-row">
            <span class="label-light">เริ่ม:</span>
          </div>
          <div class="value-row">01/08/2025 - 09:00 น.</div>
        </div>

        <div class="arrows-icon">
          <img src="@/assets/images/icon_arrows.svg" alt="arrows" />
        </div>

        <!-- Input Group: End Date -->
        <div class="input-group">
          <div class="label-row">
            <span class="label-light">ถึง:</span>
          </div>
          <div class="value-row">03/08/2025 - 09:00 น.</div>
        </div>
      </div>

      <div class="divider-vertical"></div>

      <!-- Input Group: Coupon -->
      <div class="input-group coupon-group">
        <div class="label-row">
          <span class="label-light">คูปอง:</span>
        </div>
        <div class="value-row coupon">
          <img src="@/assets/images/icon_ticket.svg" alt="coupon" class="coupon-icon"/>
          <span>NEWUSER10</span>
        </div>
      </div>

      <!-- Search Button -->
      <button class="search-btn">
        <img src="@/assets/images/icon_search.svg" alt="search" />
        <span>ค้นหารถ</span>
      </button>

    </div>
  </div>
</template>

<script setup>
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped>
.sticky-search-bar {
  position: fixed;
  top: 88px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  transform: translateY(-150%);
  transition: transform 0.4s ease-in-out;
  pointer-events: none;
}

.sticky-search-bar.visible {
  transform: translateY(0);
  pointer-events: auto;
}

.search-bar-content {
  background: white;
  border-radius: 0;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.03);
  width: 100%;
}

.section {
  display: flex;
  align-items: center;
  gap: 0;
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  padding: 16px 0;
  height: 72px;
}

.location-section,
.date-section {
  flex: 1;
}

.input-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 0 14px;
}

.label-row {
  display: flex;
  align-items: center;
}

.label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.label-light {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.value-row {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
  white-space: nowrap;
}

.value-row.coupon {
  color: #FF595A;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.coupon-icon {
  width: 16px;
  height: 16px;
}

.swap-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid #dfe3e8;
  border-radius: 100px;
  flex-shrink: 0;
}

.swap-icon img {
  width: 24px;
  height: 24px;
}

.arrows-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  opacity: 0.2;
  flex-shrink: 0;
}

.arrows-icon img {
  width: 18px;
  height: 18px;
}

.divider-vertical {
  width: 1px;
  height: 40px;
  background: #dfe3e8;
  flex-shrink: 0;
}

.coupon-group {
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  padding: 16px 14px;
  width: 150px;
  height: 72px;
  flex-shrink: 0;
}

.search-btn {
  background: #ff595a;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.587;
  letter-spacing: 0.5%;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}

.search-btn img {
  width: 24px;
  height: 24px;
}

.search-btn:hover {
  background: #e04f50;
}

@media (max-width: 1280px) {
  .sticky-search-bar {
    display: none;
  }
}
</style>
