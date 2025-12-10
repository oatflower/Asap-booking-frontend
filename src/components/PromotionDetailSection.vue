<template>
  <section class="promotion-detail-section">
    <div class="promotion-detail-container">
      <div class="detail-content">
        <!-- Left: Promotion Image -->
        <div class="promo-image-container">
          <div class="promo-image">
            <div class="promo-badge">
              <span class="badge-text">{{ t('promotionDetail.badgeText') }}</span>
              <span class="badge-month">{{ t('promotionDetail.badgeMonth') }}</span>
            </div>
            <div class="promo-content-overlay">
              <h2 class="promo-title-large">{{ t('promotionDetail.promoTitle') }}</h2>
              <p class="promo-subtitle">{{ t('promotionDetail.promoSubtitle') }}</p>
              <p class="promo-subtitle-small">{{ t('promotionDetail.promoSubtitleSmall') }}</p>
            </div>
            <div class="promo-app-section">
              <div class="asap-logo">
                <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
                  <rect width="80" height="30" rx="15" fill="#FF6B6B"/>
                  <text x="40" y="20" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">asap</text>
                </svg>
              </div>
              <div class="app-downloads">
                <div class="download-button">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C6.13 2 3 5.13 3 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.88-1.17-.88-1.17-.72-.49.06-.48.06-.48.8.05 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8.013 8.013 0 0017 9c0-3.87-3.13-7-7-7z" fill="white"/>
                  </svg>
                  <span>{{ t('promotionDetail.downloadText') }}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="search-icon">
                    <circle cx="7" cy="7" r="5" stroke="white" stroke-width="1.5" fill="none"/>
                    <path d="M10 10l3 3" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="store-buttons">
                  <img src="data:image/svg+xml,%3Csvg width='80' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='24' rx='4' fill='black'/%3E%3Ctext x='40' y='16' font-family='Arial' font-size='8' fill='white' text-anchor='middle'%3EApp Store%3C/text%3E%3C/svg%3E" alt="App Store" />
                  <img src="data:image/svg+xml,%3Csvg width='80' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='24' rx='4' fill='black'/%3E%3Ctext x='40' y='16' font-family='Arial' font-size='8' fill='white' text-anchor='middle'%3EGoogle Play%3C/text%3E%3C/svg%3E" alt="Google Play" />
                </div>
              </div>
              <p class="download-text">{{ t('promotionDetail.downloadApp') }}<br />{{ t('promotionDetail.appName') }}</p>
            </div>
          </div>
        </div>

        <!-- Right: Promotion Details -->
        <div class="promo-info-container">
          <!-- Alert -->
          <div class="alert-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L1 14h14L8 1z" fill="#FF6B6B"/>
              <path d="M8 6v3M8 11h.01" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>{{ t('promotionDetail.bookEarly') }}</span>
          </div>

          <!-- Title and Expiry -->
          <div class="promo-header">
            <div class="promo-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#F4F6F8"/>
                <rect x="14" y="18" width="20" height="12" rx="2" stroke="#919EAB" stroke-width="2" fill="none"/>
                <path d="M20 18v12M28 18v12" stroke="#919EAB" stroke-width="2" stroke-dasharray="3 3"/>
              </svg>
            </div>
            <div class="promo-title-info">
              <h1 class="promo-title">{{ t('promotionDetail.discountUpTo') }}</h1>
              <div class="promo-meta">
                <span>{{ t('promotionDetail.validUntil') }}: {{ promotion.expiry }}</span>
                <div class="countdown">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#FF6B6B" stroke-width="1.5" fill="none"/>
                    <path d="M7 4v3l2 2" stroke="#FF6B6B" stroke-width="1.5"/>
                  </svg>
                  <span class="countdown-text">{{ countdown }} {{ t('promotionDetail.hours') }}</span>
                </div>
              </div>
              <router-link to="/promotions" class="back-link">
                {{ t('promotionDetail.termsConditions') }}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Coupon Code Box -->
          <div class="coupon-box">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="ticket-icon">
              <rect x="2" y="7" width="16" height="6" rx="1" stroke="#637381" stroke-width="1.5" fill="none"/>
              <path d="M7 7v6M13 7v6" stroke="#637381" stroke-width="1.5" stroke-dasharray="2 2"/>
            </svg>
            <input
              type="text"
              :value="promotion.code"
              readonly
              class="coupon-input"
            />
            <button class="use-coupon-button" @click="useCoupon">
              {{ t('promotionDetail.useCoupon') }}
            </button>
          </div>

          <!-- Terms Sections -->
          <div class="terms-section">
            <h3 class="section-title">{{ t('promotionDetail.aboutPromotion') }}</h3>
            <ul class="terms-list">
              <li>Lorem ipsum dolor sit amet consectetur. Viverra enim nulla pharetra ut molestie. Diam non augue libero cras in feugiat id.</li>
              <li>Id turpis vel orci sit at mattis dignissim. Libero elementum ac adipiscing aenean risus. Sem vel donec malesuada ultricies ultrices mattis faucibus</li>
              <li>varius tristique. Amet enim egestas risus risus sit consequat eget morbi.</li>
              <li>Ac tempor fames pellentesque a ac in donec. Porttitor orci integer sed dolor donec ac in lorem ultrices. Euismod id neque iaculis consequat.</li>
            </ul>
          </div>

          <div class="terms-section">
            <h3 class="section-title">{{ t('promotionDetail.eligibilityConditions') }}</h3>
            <ul class="terms-list">
              <li>Lorem ipsum dolor sit amet consectetur. Viverra enim nulla pharetra ut molestie. Diam non augue libero cras in feugiat id.</li>
              <li>Id turpis vel orci sit at mattis dignissim. Libero elementum ac adipiscing aenean risus. Sem vel donec malesuada ultricies ultrices mattis faucibus</li>
              <li>varius tristique. Amet enim egestas risus risus sit consequat eget morbi.</li>
              <li>Ac tempor fames pellentesque a ac in donec. Porttitor orci integer sed dolor donec ac in lorem ultrices. Euismod id neque iaculis consequat.</li>
            </ul>
          </div>

          <div class="disclaimer">
            <p>{{ t('promotionDetail.disclaimer1') }}</p>
            <p>{{ t('promotionDetail.disclaimer2') }}</p>
          </div>
        </div>
      </div>

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/promotions" class="breadcrumb-link">{{ t('promotions.title') }}</router-link>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">{{ promotion.title }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const router = useRouter()
const { t } = useLanguage()

const promotion = ref({
  title: 'ลดสูงสุด 50% เข้ารถเดือน กรกฎาคม ถูก...',
  code: 'NEWCAR1000',
  expiry: '31 ส.ค. 68'
})

const countdown = ref('02:59:00')
let countdownInterval = null

onMounted(() => {
  // Start countdown timer
  let hours = 2
  let minutes = 59
  let seconds = 0

  countdownInterval = setInterval(() => {
    if (seconds > 0) {
      seconds--
    } else if (minutes > 0) {
      minutes--
      seconds = 59
    } else if (hours > 0) {
      hours--
      minutes = 59
      seconds = 59
    }

    countdown.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})

const useCoupon = () => {
  router.push({
    name: 'CarListing',
    query: { coupon: promotion.value.code }
  })
}
</script>

<style scoped>
.promotion-detail-section {
  background: #F9FAFB;
  padding: 120px 0 80px 0;
  min-height: 100vh;
}

.promotion-detail-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.detail-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 32px;
}

/* Left: Promotion Image */
.promo-image-container {
  position: sticky;
  top: 120px;
  align-self: start;
}

.promo-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #1a1a2e 0%, #2d3142 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
}

.promo-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #FFD93D;
  padding: 6px 16px;
  border-radius: 6px;
  transform: rotate(-5deg);
  z-index: 2;
}

.badge-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #161c24;
  display: block;
}

.badge-month {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #161c24;
}

.promo-content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.promo-title-large {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 64px;
  font-weight: 800;
  color: #FF6B6B;
  margin: 0;
  line-height: 1;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

.promo-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin: 8px 0 0 0;
  line-height: 1;
}

.promo-subtitle-small {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: white;
  margin: 4px 0 0 0;
}

.promo-app-section {
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.asap-logo {
  width: fit-content;
}

.download-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 8px 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: white;
}

.app-downloads {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.store-buttons {
  display: flex;
  gap: 8px;
}

.store-buttons img {
  height: 28px;
}

.download-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 10px;
  color: white;
  margin: 0;
  line-height: 1.4;
}

/* Right: Promotion Info */
.promo-info-container {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
}

.alert-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #FFE4E6;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FF6B6B;
}

.promo-header {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.promo-icon {
  flex-shrink: 0;
}

.promo-title-info {
  flex: 1;
}

.promo-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #161c24;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.promo-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #637381;
}

.countdown {
  display: flex;
  align-items: center;
  gap: 6px;
}

.countdown-text {
  color: #FF6B6B;
  font-weight: 600;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #637381;
  text-decoration: none;
  transition: color 0.2s;
}

.back-link:hover {
  color: #FF6B6B;
}

.coupon-box {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #F9FAFB;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 32px;
}

.ticket-icon {
  flex-shrink: 0;
}

.coupon-input {
  flex: 1;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #161c24;
  background: transparent;
  border: none;
  outline: none;
}

.use-coupon-button {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.3);
}

.use-coupon-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 107, 107, 0.4);
}

.terms-section {
  margin-bottom: 32px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #161c24;
  margin: 0 0 16px 0;
}

.terms-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.terms-list li {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
  line-height: 1.6;
  padding-left: 20px;
  position: relative;
}

.terms-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #FF6B6B;
  font-weight: 700;
}

.disclaimer {
  padding-top: 24px;
  border-top: 1px solid #F4F6F8;
}

.disclaimer p {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  color: #919EAB;
  margin: 4px 0;
  line-height: 1.5;
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
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
  color: #DFE3E8;
}

.breadcrumb-current {
  color: #161c24;
}

@media (max-width: 1024px) {
  .detail-content {
    grid-template-columns: 1fr;
  }

  .promo-image-container {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .promotion-detail-section {
    padding: 100px 0 60px 0;
  }

  .promo-info-container {
    padding: 24px;
  }

  .promo-title {
    font-size: 20px;
  }

  .coupon-box {
    flex-wrap: wrap;
  }

  .use-coupon-button {
    width: 100%;
  }
}
</style>
