<template>
  <div class="change-password-page">
    <div class="change-password-container">
      <!-- Step 1: Enter Old Password -->
      <div v-if="currentStep === 1" class="password-form">
        <h2 class="page-title">{{ t('changePassword.titleOldPassword') }}</h2>

        <div class="form-group">
          <div class="input-with-icon">
            <input
              v-model="oldPassword"
              :type="showOldPassword ? 'text' : 'password'"
              class="password-input"
              :class="{ 'error': oldPasswordError }"
              :placeholder="t('changePassword.oldPasswordPlaceholder')"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
              <rect x="5" y="8" width="10" height="8" rx="1" stroke="#637381" stroke-width="1.5"/>
              <path d="M7 8V6a3 3 0 116 0v2" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <button type="button" class="toggle-password" @click="showOldPassword = !showOldPassword">
              <svg v-if="!showOldPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 7C8.067 7 6.5 8.567 6.5 10.5S8.067 14 10 14s3.5-1.567 3.5-3.5S11.933 7 10 7z" fill="#637381"/>
                <path d="M10 4C5 4 1.73 7.11 1 10.5 1.73 13.89 5 17 10 17s8.27-3.11 9-6.5C18.27 7.11 15 4 10 4z" stroke="#637381" stroke-width="1.5"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3l14 14M10 7c-1.933 0-3.5 1.567-3.5 3.5 0 .5.1.967.283 1.4M13.5 10.5c0 .85-.3 1.633-.8 2.25" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <p v-if="oldPasswordError" class="error-message">{{ oldPasswordError }}</p>
          <a href="#" class="forgot-link" @click.prevent="forgotPassword">{{ t('changePassword.forgotPassword') }}</a>
        </div>

        <button
          class="submit-button"
          :class="{ 'disabled': !oldPassword }"
          :disabled="!oldPassword"
          @click="verifyOldPassword"
        >
          {{ t('changePassword.nextButton') }}
        </button>
      </div>

      <!-- Step 2: Enter New Password -->
      <div v-if="currentStep === 2" class="password-form">
        <h2 class="page-title">{{ t('changePassword.titleNewPassword') }}</h2>

        <div class="form-group">
          <label class="field-label">{{ t('changePassword.passwordLabel') }}</label>
          <div class="input-with-icon">
            <input
              v-model="newPassword"
              :type="showNewPassword ? 'text' : 'password'"
              class="password-input"
              :placeholder="t('changePassword.newPasswordPlaceholder')"
              @input="validateNewPassword"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
              <rect x="5" y="8" width="10" height="8" rx="1" stroke="#637381" stroke-width="1.5"/>
              <path d="M7 8V6a3 3 0 116 0v2" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <button type="button" class="toggle-password" @click="showNewPassword = !showNewPassword">
              <svg v-if="!showNewPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 7C8.067 7 6.5 8.567 6.5 10.5S8.067 14 10 14s3.5-1.567 3.5-3.5S11.933 7 10 7z" fill="#637381"/>
                <path d="M10 4C5 4 1.73 7.11 1 10.5 1.73 13.89 5 17 10 17s8.27-3.11 9-6.5C18.27 7.11 15 4 10 4z" stroke="#637381" stroke-width="1.5"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3l14 14M10 7c-1.933 0-3.5 1.567-3.5 3.5 0 .5.1.967.283 1.4M13.5 10.5c0 .85-.3 1.633-.8 2.25" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <ul class="requirements-list">
            <li :class="{ 'valid': requirements.minLength }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" :stroke="requirements.minLength ? '#4CAF50' : '#C4CDD5'" stroke-width="1.5"/>
                <path v-if="requirements.minLength" d="M5 8l2 2 4-4" stroke="#4CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ t('changePassword.passwordRequirements.minLength') }}
            </li>
            <li :class="{ 'valid': requirements.uppercase }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" :stroke="requirements.uppercase ? '#4CAF50' : '#C4CDD5'" stroke-width="1.5"/>
                <path v-if="requirements.uppercase" d="M5 8l2 2 4-4" stroke="#4CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ t('changePassword.passwordRequirements.uppercase') }}
            </li>
            <li :class="{ 'valid': requirements.lowercase }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" :stroke="requirements.lowercase ? '#4CAF50' : '#C4CDD5'" stroke-width="1.5"/>
                <path v-if="requirements.lowercase" d="M5 8l2 2 4-4" stroke="#4CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ t('changePassword.passwordRequirements.lowercase') }}
            </li>
            <li :class="{ 'valid': requirements.number }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" :stroke="requirements.number ? '#4CAF50' : '#C4CDD5'" stroke-width="1.5"/>
                <path v-if="requirements.number" d="M5 8l2 2 4-4" stroke="#4CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ t('changePassword.passwordRequirements.number') }}
            </li>
          </ul>
        </div>

        <div class="form-group">
          <label class="field-label">{{ t('changePassword.confirmPasswordLabel') }}</label>
          <div class="input-with-icon">
            <input
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="password-input"
              :class="{ 'error': confirmPasswordError }"
              :placeholder="t('changePassword.confirmPasswordPlaceholder')"
              @input="validateConfirmPassword"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
              <rect x="5" y="8" width="10" height="8" rx="1" stroke="#637381" stroke-width="1.5"/>
              <path d="M7 8V6a3 3 0 116 0v2" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <button type="button" class="toggle-password" @click="showConfirmPassword = !showConfirmPassword">
              <svg v-if="!showConfirmPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 7C8.067 7 6.5 8.567 6.5 10.5S8.067 14 10 14s3.5-1.567 3.5-3.5S11.933 7 10 7z" fill="#637381"/>
                <path d="M10 4C5 4 1.73 7.11 1 10.5 1.73 13.89 5 17 10 17s8.27-3.11 9-6.5C18.27 7.11 15 4 10 4z" stroke="#637381" stroke-width="1.5"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3l14 14M10 7c-1.933 0-3.5 1.567-3.5 3.5 0 .5.1.967.283 1.4M13.5 10.5c0 .85-.3 1.633-.8 2.25" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <p v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</p>
        </div>

        <button
          class="submit-button"
          :class="{ 'disabled': !isPasswordValid }"
          :disabled="!isPasswordValid"
          @click="submitNewPassword"
        >
          {{ t('changePassword.nextButton') }}
        </button>
      </div>

      <!-- Step 3: Success -->
      <div v-if="currentStep === 3" class="success-screen">
        <div class="success-icon">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="60" fill="#FFE8E8"/>
            <circle cx="60" cy="75" r="8" fill="#FF6B6B"/>
            <path d="M56 75l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M45 55h30M50 45h20" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round"/>
            <path d="M40 65c0-11 9-20 20-20s20 9 20 20" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>

        <h2 class="success-title">{{ t('changePassword.successTitle') }}</h2>
        <p class="success-message">{{ t('changePassword.successMessage') }}</p>

        <button class="home-button" @click="goHome">
          {{ t('changePassword.goToHome') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const router = useRouter()
const { t } = useLanguage()

const currentStep = ref(1)
const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const showOldPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const oldPasswordError = ref('')
const confirmPasswordError = ref('')

const requirements = ref({
  minLength: false,
  uppercase: false,
  lowercase: false,
  number: false
})

const validateNewPassword = () => {
  requirements.value.minLength = newPassword.value.length >= 8
  requirements.value.uppercase = /[A-Z]/.test(newPassword.value)
  requirements.value.lowercase = /[a-z]/.test(newPassword.value)
  requirements.value.number = /[0-9]/.test(newPassword.value)

  if (confirmPassword.value) {
    validateConfirmPassword()
  }
}

const validateConfirmPassword = () => {
  if (confirmPassword.value && newPassword.value !== confirmPassword.value) {
    confirmPasswordError.value = t('changePassword.errorPasswordMismatch')
  } else {
    confirmPasswordError.value = ''
  }
}

const isPasswordValid = computed(() => {
  return requirements.value.minLength &&
         requirements.value.uppercase &&
         requirements.value.lowercase &&
         requirements.value.number &&
         newPassword.value === confirmPassword.value &&
         confirmPassword.value !== ''
})

const verifyOldPassword = () => {
  // Here you would verify with backend
  // Simulate error for demo:
  // if (oldPassword.value === 'wrong') {
  //   oldPasswordError.value = t('changePassword.errorOldPasswordIncorrect')
  //   return
  // }

  oldPasswordError.value = ''
  currentStep.value = 2
}

const submitNewPassword = async () => {
  if (isPasswordValid.value) {
    try {
      // Here you would send to backend
      // const response = await changePasswordAPI(oldPassword.value, newPassword.value)
      currentStep.value = 3
    } catch (error) {
      confirmPasswordError.value = t('changePassword.errorGeneral')
    }
  }
}

const forgotPassword = () => {
  // Navigate to reset password page
  router.push('/reset-password')
}

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.change-password-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F9FAFB;
  padding: 40px 20px;
}

.change-password-container {
  width: 100%;
  max-width: 520px;
}

/* Password Form */
.password-form {
  background: white;
  padding: 48px 40px;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}

.page-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #000;
  margin: 0 0 32px 0;
  text-align: left;
}

.form-group {
  margin-bottom: 24px;
}

.field-label {
  display: block;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #637381;
  margin-bottom: 8px;
}

.input-with-icon {
  position: relative;
}

.password-input {
  width: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #161c24;
  padding: 14px 48px 14px 48px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  background: white;
  transition: all 0.2s;
  box-sizing: border-box;
}

.password-input:focus {
  outline: none;
  border-color: #FF595A;
}

.password-input.error {
  border-color: #FF3B30;
  background: white;
}

.password-input::placeholder {
  color: #C4CDD5;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.toggle-password {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #FF3B30;
  margin: 8px 0 0 0;
}

.forgot-link {
  display: block;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #919EAB;
  text-decoration: none;
  margin-top: 12px;
  text-align: right;
}

.forgot-link:hover {
  color: #FF595A;
  text-decoration: underline;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
}

.requirements-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #919EAB;
  margin-bottom: 8px;
}

.requirements-list li.valid {
  color: #4CAF50;
}

.submit-button {
  width: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: white;
  background: #FF595A;
  padding: 16px 32px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.submit-button:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 89, 90, 0.3);
}

.submit-button.disabled {
  background: #919EAB;
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
  color: #000;
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
  font-weight: 700;
  font-size: 16px;
  color: white;
  background: #FF595A;
  padding: 16px 32px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.home-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 89, 90, 0.3);
}

@media (max-width: 768px) {
  .change-password-page {
    padding: 20px;
  }

  .password-form,
  .success-screen {
    padding: 32px 24px;
  }

  .page-title {
    font-size: 26px;
  }

  .success-title {
    font-size: 24px;
  }
}
</style>
