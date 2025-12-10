<template>
  <div class="change-email-page">
    <div class="change-email-container">
      <!-- Step 1: Enter New Email -->
      <div v-if="currentStep === 1" class="email-form">
        <h2 class="page-title">{{ t('changeEmail.title') }}</h2>

        <div class="form-group">
          <div class="input-with-icon">
            <input
              v-model="newEmail"
              type="email"
              class="email-input"
              :class="{ 'error': errorMessage }"
              :placeholder="t('changeEmail.newEmailPlaceholder')"
              @input="validateEmail"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
              <path d="M3 6l7 5 7-5M3 6v8a2 2 0 002 2h10a2 2 0 002-2V6M3 6a2 2 0 012-2h10a2 2 0 012 2" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>

        <button
          class="submit-button"
          :class="{ 'disabled': !isEmailValid || errorMessage }"
          :disabled="!isEmailValid || errorMessage"
          @click="submitEmail"
        >
          {{ t('changeEmail.nextButton') }}
        </button>
      </div>

      <!-- Step 2: Success -->
      <div v-if="currentStep === 2" class="success-screen">
        <div class="success-icon">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="60" fill="#FFE8E8"/>
            <path d="M40 50l20 15 20-15M40 50v30a4 4 0 004 4h32a4 4 0 004-4V50M40 50a4 4 0 014-4h32a4 4 0 014 4" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="60" cy="75" r="8" fill="#FF6B6B"/>
            <path d="M56 75l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <h2 class="success-title">{{ t('changeEmail.successTitle') }}</h2>
        <p class="success-message">{{ t('changeEmail.successMessage') }}</p>

        <button class="home-button" @click="goHome">
          {{ t('changeEmail.goToHome') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const router = useRouter()
const { t } = useLanguage()

const currentStep = ref(1)
const newEmail = ref('')
const isEmailValid = ref(false)
const errorMessage = ref('')

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  isEmailValid.value = emailRegex.test(newEmail.value)

  // Clear error message when user types
  if (errorMessage.value) {
    errorMessage.value = ''
  }
}

const submitEmail = async () => {
  if (isEmailValid.value) {
    // Here you would typically send the email change request to your backend
    // For demonstration purposes, you can simulate different error scenarios:

    // Example error scenarios (you can remove these in production):
    // if (newEmail.value === 'invalid@test.com') {
    //   errorMessage.value = t('changeEmail.errorInvalidEmail')
    //   return
    // }
    // if (newEmail.value === 'used@test.com') {
    //   errorMessage.value = t('changeEmail.errorEmailInUse')
    //   return
    // }
    // if (newEmail.value === 'error@test.com') {
    //   errorMessage.value = `${t('changeEmail.errorSendFailed')} ${newEmail.value}`
    //   return
    // }

    try {
      // Simulate API call
      // const response = await changeEmailAPI(newEmail.value)
      // if (response.success) {
        currentStep.value = 2
      // } else {
      //   errorMessage.value = response.message
      // }
    } catch (error) {
      // Handle API errors here
      errorMessage.value = `${t('changeEmail.errorSendFailed')} ${newEmail.value}`
    }
  }
}

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.change-email-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F9FAFB;
  padding: 40px 20px;
}

.change-email-container {
  width: 100%;
  max-width: 480px;
}

/* Email Form */
.email-form {
  background: white;
  padding: 48px 40px;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}

.page-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161c24;
  margin: 0 0 32px 0;
  text-align: center;
}

.form-group {
  margin-bottom: 32px;
}

.input-with-icon {
  position: relative;
}

.email-input {
  width: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #161c24;
  padding: 14px 16px;
  padding-left: 48px;
  border: 1.5px solid #DFE3E8;
  border-radius: 8px;
  background: white;
  transition: all 0.2s;
  box-sizing: border-box;
}

.email-input:focus {
  outline: none;
  border-color: #FF6B6B;
}

.email-input.error {
  border-color: #FF6B6B;
  background: #FFF5F5;
}

.email-input::placeholder {
  color: #C4CDD5;
}

.error-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #FF6B6B;
  margin: 8px 0 0 0;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.submit-button {
  width: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  padding: 14px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.2);
}

.submit-button:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 107, 107, 0.3);
}

.submit-button.disabled {
  background: #E5E7EB;
  box-shadow: none;
  cursor: not-allowed;
}

/* Success Screen */
.success-screen {
  background: white;
  padding: 60px 40px;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.success-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.success-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161c24;
  margin: 0 0 12px 0;
}

.success-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #637381;
  margin: 0 0 40px 0;
}

.home-button {
  width: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  padding: 14px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.2);
}

.home-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 107, 107, 0.3);
}

@media (max-width: 768px) {
  .change-email-page {
    padding: 20px;
  }

  .email-form,
  .success-screen {
    padding: 32px 24px;
  }

  .page-title,
  .success-title {
    font-size: 24px;
  }
}
</style>
