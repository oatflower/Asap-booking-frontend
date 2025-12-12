<template>
  <div class="search-bar">
    <div class="search-bar-container">
      <!-- Pick-up Location -->
      <div class="search-field location-field">
        <div class="field-content">
          <div class="location-city">{{ t('search.bangkok') }}</div>
          <div class="location-detail">{{ t('search.suvarnabhumiAirport') }}</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="swap-icon">
          <path d="M4 8h12M12 4l4 4-4 4" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="divider"></div>

      <!-- Return Location -->
      <div class="search-field location-field">
        <div class="field-content">
          <div class="location-city">{{ t('search.bangkok') }}</div>
          <div class="location-detail">{{ t('search.suvarnabhumiAirport') }}</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Pick-up Date & Time -->
      <div class="search-field date-field">
        <div class="field-content">
          <div class="date-label">{{ t('search.from') }}</div>
          <div class="date-value">01/08/2025 - 09:00 น.</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Return Date & Time -->
      <div class="search-field date-field">
        <div class="field-content">
          <div class="date-label">{{ t('search.to') }}</div>
          <div class="date-value">03/08/2025 - 09:00 น.</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Coupon Code -->
      <div class="search-field coupon-field">
        <div class="field-content">
          <div class="coupon-label">{{ t('search.coupon') }}</div>
          <div class="coupon-value">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="coupon-icon">
              <rect x="2" y="5" width="12" height="6" rx="1" stroke="#FF6B6B" stroke-width="1.2" fill="none"/>
            </svg>
            {{ couponCode || 'NEWUSER10' }}
          </div>
        </div>
      </div>

      <!-- Search Button -->
      <button class="search-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="search-icon">
          <circle cx="9" cy="9" r="6" stroke="white" stroke-width="2" fill="none"/>
          <path d="M13 13l4 4" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="search-text">{{ t('search.searchCar') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const props = defineProps({
  couponCode: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.search-bar {
  width: 100%;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  padding: 12px 0;
  position: sticky;
  top: 80px;
  z-index: 100;
}

.search-bar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 0;
}

.search-field {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  flex: 1;
}

.search-field.location-field {
  flex: 1.2;
  position: relative;
}

.search-field.date-field {
  flex: 1;
}

.search-field.coupon-field {
  flex: 0.9;
}

.field-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

/* Location Fields */
.location-city {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #161c24;
  line-height: 1.2;
}

.location-detail {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #637381;
}

.swap-icon {
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.2s;
}

.swap-icon:hover {
  transform: scale(1.1);
}

/* Date Fields */
.date-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #637381;
}

.date-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #161c24;
  cursor: pointer;
}

/* Coupon Field */
.coupon-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #637381;
}

.coupon-value {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FF6B6B;
  cursor: pointer;
}

.coupon-icon {
  flex-shrink: 0;
}

.divider {
  width: 1px;
  height: 44px;
  background: #DFE3E8;
}

.search-button {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  border: none;
  border-radius: 12px;
  height: 48px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.3);
  flex-shrink: 0;
  margin-left: 16px;
}

.search-icon {
  flex-shrink: 0;
}

.search-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: white;
  white-space: nowrap;
}

.search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 16px rgba(255, 107, 107, 0.4);
}

@media (max-width: 1280px) {
  .search-bar-container {
    gap: 8px;
    flex-wrap: wrap;
  }

  .search-field {
    padding: 0 12px;
  }
}

@media (max-width: 768px) {
  .search-bar {
    display: none;
  }
}
</style>
