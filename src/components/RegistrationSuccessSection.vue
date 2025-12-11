<template>
  <section class="success-section">
    <div class="success-container">
      <div class="success-card">
        <!-- Success Icon -->
        <div class="icon-wrapper">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" class="success-icon">
            <!-- Image frame -->
            <rect x="25" y="30" width="70" height="55" rx="4" stroke="#DFE3E8" stroke-width="3" fill="white"/>
            <circle cx="45" cy="50" r="6" fill="#DFE3E8"/>
            <path d="M30 75 L50 60 L70 70 L90 50" stroke="#DFE3E8" stroke-width="3" fill="none"/>

            <!-- Success checkmark circle -->
            <circle cx="80" cy="70" r="22" fill="#22C55E"/>
            <circle cx="80" cy="70" r="18" fill="#4ADE80"/>
            <path d="M70 70 L77 77 L90 64" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <h2 class="success-title">{{ t('registrationSuccess.title') }}</h2>
        <p class="success-description">
          {{ t('registrationSuccess.welcome') }}
        </p>

        <!-- Home Button -->
        <router-link to="/" class="home-button">
          {{ t('registrationSuccess.goToHome') }}
        </router-link>

        <!-- Additional Info -->
        <div class="info-text">
          <p>{{ t('registrationSuccess.info1') }}</p>
          <p>{{ t('registrationSuccess.info2') }}<router-link to="/contact" class="contact-link">{{ t('registrationSuccess.contactUs') }}</router-link>{{ t('registrationSuccess.info2End') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<style scoped>
.success-section {
  background: white;
  padding: 80px 0;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.success-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.success-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.icon-wrapper {
  margin-bottom: 16px;
}

.success-icon {
  width: 150px;
  height: 150px;
}

.success-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #000;
  margin: 0;
  line-height: 1.587;
}

.success-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  margin: 0;
  line-height: 1.587;
}

.home-button {
  width: 100%;
  max-width: 300px;
  padding: 16px 32px;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 20px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #161C24;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.home-button:hover {
  border-color: #FF595A;
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.info-text {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-text p {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #919EAB;
  margin: 0;
  line-height: 1.6;
}

.contact-link {
  color: #FF6B6B;
  text-decoration: none;
  font-weight: 600;
}

.contact-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .success-section {
    padding: 80px 0;
  }

  .success-card {
    padding: 48px 24px;
  }

  .success-title {
    font-size: 26px;
  }

  .success-description {
    font-size: 16px;
  }

  .home-button {
    width: 100%;
  }
}
</style>
