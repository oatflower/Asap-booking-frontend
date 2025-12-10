<template>
  <section class="register-section">
    <div class="register-container">
      <div class="register-card">
        <h2 class="register-title">{{ t('register.title') }}</h2>

        <!-- Error Alert Banner -->
        <div v-if="generalError" class="error-alert">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="alert-icon">
            <circle cx="10" cy="10" r="8" fill="#FF9800"/>
            <path d="M10 6v4M10 14h.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>{{ generalError }}</span>
        </div>

        <form class="register-form" @submit.prevent="handleRegister">
          <!-- Email Input -->
          <div class="form-group">
            <label class="form-label">{{ t('register.email') }}</label>
            <div class="input-with-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
                <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                <path d="M2 5l8 6 8-6" stroke="#919EAB" stroke-width="1.5" fill="none"/>
              </svg>
              <input
                type="email"
                v-model="formData.email"
                :placeholder="t('register.emailPlaceholder')"
                :class="['form-input with-icon', { 'error': errors.email }]"
                @blur="validateEmail"
                required
              />
            </div>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
          </div>

          <!-- Password Input -->
          <div class="form-group">
            <label class="form-label">{{ t('register.password') }}</label>
            <div class="input-with-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
                <rect x="4" y="9" width="12" height="8" rx="1" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                <path d="M7 9V6a3 3 0 016 0v3" stroke="#919EAB" stroke-width="1.5"/>
              </svg>
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="formData.password"
                :placeholder="t('register.passwordPlaceholder')"
                class="form-input with-icon with-toggle"
                @input="validatePassword"
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

          <!-- Password Requirements -->
          <div class="password-requirements">
            <div class="requirement" :class="{ valid: validations.length }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="check-icon">
                <circle cx="8" cy="8" r="7" :stroke="validations.length ? '#22C55E' : '#DFE3E8'" stroke-width="1.5" fill="none"/>
                <path v-if="validations.length" d="M5 8l2 2 4-4" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ t('register.passwordRequirements.minLength') }}</span>
            </div>
            <div class="requirement" :class="{ valid: validations.uppercase }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="check-icon">
                <circle cx="8" cy="8" r="7" :stroke="validations.uppercase ? '#22C55E' : '#DFE3E8'" stroke-width="1.5" fill="none"/>
                <path v-if="validations.uppercase" d="M5 8l2 2 4-4" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ t('register.passwordRequirements.uppercase') }}</span>
            </div>
            <div class="requirement" :class="{ valid: validations.lowercase }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="check-icon">
                <circle cx="8" cy="8" r="7" :stroke="validations.lowercase ? '#22C55E' : '#DFE3E8'" stroke-width="1.5" fill="none"/>
                <path v-if="validations.lowercase" d="M5 8l2 2 4-4" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ t('register.passwordRequirements.lowercase') }}</span>
            </div>
            <div class="requirement" :class="{ valid: validations.number }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="check-icon">
                <circle cx="8" cy="8" r="7" :stroke="validations.number ? '#22C55E' : '#DFE3E8'" stroke-width="1.5" fill="none"/>
                <path v-if="validations.number" d="M5 8l2 2 4-4" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ t('register.passwordRequirements.number') }}</span>
            </div>
          </div>

          <!-- Confirm Password Input -->
          <div class="form-group">
            <label class="form-label">{{ t('register.confirmPassword') }}</label>
            <div class="input-with-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
                <rect x="4" y="9" width="12" height="8" rx="1" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                <path d="M7 9V6a3 3 0 016 0v3" stroke="#919EAB" stroke-width="1.5"/>
              </svg>
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="formData.confirmPassword"
                :placeholder="t('register.confirmPasswordPlaceholder')"
                :class="['form-input with-icon with-toggle', { 'error': errors.confirmPassword }]"
                @blur="validateConfirmPassword"
                @input="validateConfirmPassword"
                required
              />
              <button type="button" class="toggle-password" @click="showConfirmPassword = !showConfirmPassword">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path v-if="!showConfirmPassword" d="M10 7a3 3 0 100 6 3 3 0 000-6zM2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#919EAB" stroke-width="1.5" fill="none"/>
                  <path v-else d="M3 3l14 14M10 7a3 3 0 103 3M2 10s3-6 8-6c1.5 0 2.9.5 4 1.3M18 10s-1.5 3-4 4.5" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <p v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</p>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="register-button" :disabled="!isFormValid">
            {{ t('register.registerButton') }}
          </button>
        </form>

        <!-- Social Login Divider -->
        <div class="divider-section">
          <div class="divider-line"></div>
          <span class="divider-text">{{ t('register.divider') }}</span>
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
          <button class="social-button google">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18 10.2c0-.6 0-1.2-.1-1.7H10v3.3h4.5c-.2 1-.8 1.9-1.7 2.5v2h2.7c1.6-1.5 2.5-3.6 2.5-6.1z" fill="#4285F4"/>
              <path d="M10 18c2.3 0 4.2-.8 5.6-2.1l-2.7-2c-.8.5-1.7.9-2.9.9-2.2 0-4.1-1.5-4.8-3.5H2.4v2.1C3.8 16 6.7 18 10 18z" fill="#34A853"/>
              <path d="M5.2 11.3c-.4-1.1-.4-2.3 0-3.4V5.8H2.4C1 7.3.5 9.1.5 11s.5 3.7 1.9 5.2l2.8-2.1z" fill="#FBBC04"/>
              <path d="M10 5.2c1.2 0 2.3.4 3.2 1.2l2.4-2.4C14.2 2.7 12.3 2 10 2 6.7 2 3.8 4 2.4 6.6l2.8 2.1c.7-2 2.6-3.5 4.8-3.5z" fill="#EA4335"/>
            </svg>
            <span>Google</span>
          </button>
        </div>

        <!-- Login Link -->
        <div class="login-link">
          <span>{{ t('register.haveAccount') }}</span>
          <router-link to="/login" class="link">{{ t('register.loginHere') }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const emit = defineEmits(['register-success'])
const { t } = useLanguage()

const formData = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const validations = ref({
  length: false,
  uppercase: false,
  lowercase: false,
  number: false
})

const errors = ref({
  email: '',
  confirmPassword: ''
})

const generalError = ref('')

// List of existing emails (for demo purposes)
const existingEmails = ['test@example.com', 'user@test.com', 'demo@asap.com']

const validatePassword = () => {
  const password = formData.value.password
  validations.value = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password)
  }
}

const validateEmail = () => {
  errors.value.email = ''
  if (formData.value.email && existingEmails.includes(formData.value.email.toLowerCase())) {
    errors.value.email = t('register.errorEmailInUse')
  }
}

const validateConfirmPassword = () => {
  errors.value.confirmPassword = ''
  if (formData.value.confirmPassword && formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = t('register.errorPasswordMismatch')
  }
}

const isFormValid = computed(() => {
  return (
    formData.value.email &&
    formData.value.password &&
    formData.value.confirmPassword &&
    formData.value.password === formData.value.confirmPassword &&
    validations.value.length &&
    validations.value.uppercase &&
    validations.value.lowercase &&
    validations.value.number &&
    !errors.value.email &&
    !errors.value.confirmPassword
  )
})

const handleRegister = () => {
  // Clear previous general error
  generalError.value = ''

  // Validate all fields
  validateEmail()
  validateConfirmPassword()

  // If form has specific field errors, don't proceed
  if (errors.value.email || errors.value.confirmPassword) {
    generalError.value = t('register.errorGeneral')
    return
  }

  if (isFormValid.value) {
    // Simulate a registration attempt that might fail (for demo)
    // In a real app, this would be an API call
    const registrationFailed = Math.random() < 0.2 // 20% chance of random failure for demo

    if (registrationFailed) {
      generalError.value = t('register.errorGeneral')
    } else {
      emit('register-success', formData.value.email)
    }
  }
}
</script>

<style scoped>
.register-section {
  background: #F9FAFB;
  padding: 100px 0;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.register-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.register-card {
  background: white;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
}

.register-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #161c24;
  text-align: center;
  margin: 0 0 32px 0;
}

.error-alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #FFF4E6;
  border-left: 4px solid #FF9800;
  border-radius: 8px;
  margin-bottom: 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  color: #B76E00;
  line-height: 1.5;
}

.alert-icon {
  flex-shrink: 0;
}

.register-form {
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

.error-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #FF3B30;
  margin: 4px 0 0 0;
  line-height: 1.4;
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

.password-requirements {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
}

.requirement {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #919EAB;
  transition: color 0.2s;
}

.requirement.valid {
  color: #22C55E;
}

.check-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.register-button {
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

.register-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0px 8px 24px rgba(255, 107, 107, 0.3);
}

.register-button:disabled {
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

.login-link {
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
  .register-section {
    padding: 80px 0;
  }

  .register-card {
    padding: 32px 24px;
  }

  .register-title {
    font-size: 28px;
  }

  .social-buttons {
    grid-template-columns: 1fr;
  }
}
</style>
