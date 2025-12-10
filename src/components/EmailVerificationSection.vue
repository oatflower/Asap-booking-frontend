<template>
  <section class="verification-section">
    <div class="verification-container">
      <div class="verification-card">
        <!-- Icon -->
        <div class="icon-wrapper">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" class="mail-icon">
            <!-- Envelope base -->
            <rect x="20" y="40" width="80" height="50" rx="4" fill="#FFE4E6"/>
            <path d="M20 45 L60 70 L100 45" stroke="#FF6B6B" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Clock circle -->
            <circle cx="75" cy="30" r="20" fill="#FF6B6B"/>
            <circle cx="75" cy="30" r="16" fill="#FFB3BA"/>
            <path d="M75 22 V30 H82" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <h2 class="verification-title">{{ t('emailVerification.title') }}</h2>
        <p class="verification-description">
          {{ t('emailVerification.description') }}
        </p>

        <div class="email-display">
          {{ email }}
        </div>

        <!-- Resend Link -->
        <button class="resend-button" @click="handleResend" :disabled="countdown > 0">
          <span v-if="countdown > 0">{{ t('emailVerification.resendCountdown').replace('{countdown}', countdown) }}</span>
          <span v-else>{{ t('emailVerification.resendButton') }}</span>
        </button>

        <!-- Change Email Link -->
        <div class="change-email">
          <span>{{ t('emailVerification.emailIncorrect') }}</span>
          <button @click="$emit('change-email')" class="link-button">
            {{ t('emailVerification.changeEmail') }}
          </button>
        </div>

        <!-- Skip for now (Debug) -->
        <button @click="$emit('verify-success')" class="skip-button">
          {{ t('emailVerification.skipForTest') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const props = defineProps({
  email: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['verify-success', 'change-email'])
const { t } = useLanguage()

const countdown = ref(0)
let timer = null

const startCountdown = () => {
  countdown.value = 60
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

const handleResend = () => {
  console.log('Resending verification email to:', props.email)
  alert(t('emailVerification.resendSuccess'))
  startCountdown()
}

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.verification-section {
  background: #F9FAFB;
  padding: 100px 0;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.verification-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.verification-card {
  background: white;
  border-radius: 24px;
  padding: 60px 48px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-wrapper {
  margin-bottom: 32px;
}

.mail-icon {
  width: 120px;
  height: 120px;
}

.verification-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #161c24;
  margin: 0 0 16px 0;
}

.verification-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #637381;
  margin: 0 0 32px 0;
  line-height: 1.6;
}

.email-display {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #FF6B6B;
  padding: 16px 24px;
  background: #FFF5F5;
  border-radius: 12px;
  margin-bottom: 24px;
  width: 100%;
  word-break: break-all;
}

.resend-button {
  width: 100%;
  padding: 14px;
  background: white;
  border: 1.5px solid #DFE3E8;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #637381;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 16px;
}

.resend-button:hover:not(:disabled) {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

.resend-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.change-email {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
  margin-bottom: 16px;
}

.link-button {
  background: none;
  border: none;
  color: #FF6B6B;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  margin-left: 4px;
}

.link-button:hover {
  text-decoration: underline;
}

.skip-button {
  margin-top: 16px;
  padding: 8px 16px;
  background: #F4F6F8;
  border: none;
  border-radius: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #919EAB;
  cursor: pointer;
  transition: all 0.2s;
}

.skip-button:hover {
  background: #E5E7EB;
}

@media (max-width: 768px) {
  .verification-section {
    padding: 80px 0;
  }

  .verification-card {
    padding: 48px 24px;
  }

  .verification-title {
    font-size: 26px;
  }

  .verification-description {
    font-size: 15px;
  }

  .email-display {
    font-size: 16px;
  }
}
</style>
