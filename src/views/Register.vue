<template>
  <div class="register">
    <RegisterSection
      v-if="step === 'register'"
      @register-success="handleRegisterSuccess"
    />
    <EmailVerificationSection
      v-else-if="step === 'verification'"
      :email="userEmail"
      @verify-success="handleVerifySuccess"
      @change-email="handleChangeEmail"
    />
    <RegistrationSuccessSection
      v-else-if="step === 'success'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RegisterSection from '../components/RegisterSection.vue'
import EmailVerificationSection from '../components/EmailVerificationSection.vue'
import RegistrationSuccessSection from '../components/RegistrationSuccessSection.vue'

const step = ref('register') // 'register', 'verification', 'success'
const userEmail = ref('')

const handleRegisterSuccess = (email) => {
  userEmail.value = email
  step.value = 'verification'
}

const handleVerifySuccess = () => {
  step.value = 'success'
}

const handleChangeEmail = () => {
  step.value = 'register'
}
</script>

<style scoped>
.register {
  width: 100%;
}
</style>
