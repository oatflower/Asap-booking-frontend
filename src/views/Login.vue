<template>
  <div class="login">
    <LoginSection @login-success="handleLoginSuccess" />
  </div>
</template>

<script setup>
import LoginSection from '../components/LoginSection.vue'

const handleLoginSuccess = (email) => {
  console.log('Login successful for:', email)
  // Here you would typically:
  // 1. Store user session/token
  // 2. Update global state
  // 3. Redirect to home or dashboard
  alert('เข้าสู่ระบบสำเร็จ!')
  // For now, just redirect to home
  window.location.href = '/'
}
</script>

<style scoped>
.login {
  width: 100%;
}
</style>
