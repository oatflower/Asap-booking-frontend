<template>
  <section class="login-section">
    <div class="login-container">
      <div class="login-card">
        <h2 class="login-title">{{ t('login.title') }}</h2>

        <!-- Error Alert Banner -->
        <div v-if="errorMessage" class="error-alert">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="alert-icon">
            <circle cx="10" cy="10" r="8" fill="#FF6B6B"/>
            <path d="M10 6v4M10 14h.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>{{ errorMessage }}</span>
        </div>

        <form class="login-form" @submit.prevent="handleLogin">
          <!-- Email Input -->
          <div class="form-group">
            <label :class="['form-label', { 'error-label': hasError }]">{{ t('login.email') }}</label>
            <div class="input-with-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
                <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                <path d="M2 5l8 6 8-6" stroke="#919EAB" stroke-width="1.5" fill="none"/>
              </svg>
              <input
                type="email"
                v-model="formData.email"
                :placeholder="t('login.emailPlaceholder')"
                :class="['form-input with-icon', { 'error': hasError }]"
                @input="clearError"
                required
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="form-group">
            <label :class="['form-label', { 'error-label': hasError }]">{{ t('login.password') }}</label>
            <div class="input-with-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
                <rect x="4" y="9" width="12" height="8" rx="1" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                <path d="M7 9V6a3 3 0 016 0v3" stroke="#919EAB" stroke-width="1.5"/>
              </svg>
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="formData.password"
                :placeholder="t('login.passwordPlaceholder')"
                :class="['form-input with-icon with-toggle', { 'error': hasError }]"
                @input="clearError"
                required
              />
              <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path v-if="!showPassword" d="M10 7a3 3 0 100 6 3 3 0 000-6zM2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                  <path v-else d="M3 3l14 14M10 7a3 3 0 103 3M2 10s3-6 8-6c1.5 0 2.9.5 4 1.3M18 10s-1.5 3-4 4.5" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Forgot Password Link -->
          <div class="forgot-password">
            <router-link to="/reset-password" class="forgot-link">{{ t('login.forgotPassword') }}</router-link>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="login-button" :disabled="!isFormValid">
            {{ t('login.loginButton') }}
          </button>
        </form>

        <!-- Social Login Divider -->
        <div class="divider-section">
          <div class="divider-line"></div>
          <span class="divider-text">{{ t('login.divider') }}</span>
          <div class="divider-line"></div>
        </div>

        <!-- Social Login Buttons -->
        <div class="social-buttons">
          <button class="social-button facebook">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" fill="#1877F2"/>
              <path d="M11 13V10h2l.3-2H11V7c0-.6.1-1 1-1h1V4h-1.5C10 4 9 4.9 9 6.5V8H7v2h2v3h2z" fill="white"/>
            </svg>
            <span>Facebook</span>
          </button>
          <button class="social-button gmail">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18 15a1 1 0 01-1 1H3a1 1 0 01-1-1V6l8 5 8-5v9z" fill="#EA4335"/>
              <path d="M18 5v1l-8 5-8-5V5a1 1 0 011-1h14a1 1 0 011 1z" fill="#EA4335"/>
              <path d="M2 6l8 5V6L2 6z" fill="#C5221F"/>
              <path d="M18 6l-8 5V6l8 0z" fill="#C5221F"/>
            </svg>
            <span>Gmail</span>
          </button>
        </div>

        <!-- Register Link -->
        <div class="register-link">
          <span>{{ t('login.noAccount') }}</span>
          <router-link to="/register" class="link">{{ t('login.registerHere') }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const emit = defineEmits(['login-success'])
const { t } = useLanguage()

const formData = ref({
  email: '',
  password: ''
})

const showPassword = ref(false)
const errorMessage = ref('')
const hasError = ref(false)

// Mock user accounts for demo
const mockAccounts = [
  { email: 'user@asap.com', password: 'Password123' }
]

const isFormValid = computed(() => {
  return formData.value.email && formData.value.password && !hasError.value
})

const clearError = () => {
  errorMessage.value = ''
  hasError.value = false
}

const handleLogin = () => {
  // Clear previous errors
  errorMessage.value = ''
  hasError.value = false

  // Check if email exists in system
  const accountExists = mockAccounts.find(acc => acc.email === formData.value.email)

  if (!accountExists) {
    // Email not found error
    errorMessage.value = t('login.errorEmailNotFound')
    hasError.value = true
    return
  }

  // Check if password matches
  if (accountExists.password !== formData.value.password) {
    // Wrong password error
    errorMessage.value = t('login.errorInvalidCredentials')
    hasError.value = true
    return
  }

  // Login successful
  emit('login-success', formData.value.email)
}
</script>

<style scoped>
.login-section {
  background: #F9FAFB;
  padding: 100px 0;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.login-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.login-card {
  background: white;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
}

.login-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #161c24;
  text-align: center;
  margin: 0 0 32px 0;
}

.error-alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: #FFF4E6;
  border-left: 4px solid #FF6B6B;
  border-radius: 8px;
  margin-bottom: 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #B76E00;
  line-height: 1.5;
}

.alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #919EAB;
  transition: color 0.2s;
}

.form-label.error-label {
  color: #FF3B30;
}

.input-with-icon {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.form-input {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  padding: 14px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}

.form-input.with-icon {
  padding-left: 44px;
}

.form-input.with-toggle {
  padding-right: 44px;
}

.form-input:focus {
  border-color: #FF6B6B;
}

.form-input.error {
  border-color: #FF3B30;
}

.form-input.error:focus {
  border-color: #FF3B30;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.forgot-password {
  text-align: right;
  margin-top: -8px;
}

.forgot-link {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #919EAB;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: #FF6B6B;
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  border: none;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 107, 107, 0.3);
}

.login-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.divider-section {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #DFE3E8;
}

.divider-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #919EAB;
  white-space: nowrap;
}

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  background: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #637381;
  cursor: pointer;
  transition: all 0.2s;
}

.social-button:hover {
  border-color: #FF6B6B;
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.register-link {
  text-align: center;
  margin-top: 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #637381;
}

.link {
  color: #FF6B6B;
  text-decoration: none;
  font-weight: 600;
  margin-left: 4px;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-section {
    padding: 80px 0;
  }

  .login-card {
    padding: 32px 24px;
  }

  .login-title {
    font-size: 28px;
  }

  .social-buttons {
    grid-template-columns: 1fr;
  }
}
</style>
