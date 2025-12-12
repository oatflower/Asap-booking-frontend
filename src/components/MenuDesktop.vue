<template>
  <header class="menu-desktop">
    <div class="menu-container">
      <!-- Hamburger Button -->
      <button class="hamburger-button" @click="showSidebar = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="#161c24" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="asap" />
      </div>

      <!-- Navigation Menu -->
      <nav class="nav-menu">
        <router-link
          v-for="item in menuItems"
          :key="item.text"
          :to="item.to"
          class="menu-item"
          :class="{ active: item.active }"
        >
          {{ item.text }}
        </router-link>
      </nav>

      <!-- Right Section -->
      <div class="menu-right">
        <!-- Language Selector with Dropdown -->
        <div class="language-selector" @click="toggleLanguageDropdown" v-click-outside="closeLanguageDropdown">
          <!-- Thai Flag -->
          <div v-if="currentLanguage === 'th'" class="flag-icon">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <rect width="32" height="32" rx="16" fill="#F4F6F8"/>
              <rect y="10" width="32" height="4" fill="#ED1C24"/>
              <rect y="14" width="32" height="4" fill="#FFFFFF"/>
              <rect y="18" width="32" height="4" fill="#241D4F"/>
            </svg>
          </div>
          <!-- UK Flag -->
          <div v-else-if="currentLanguage === 'en'" class="flag-icon">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <defs>
                <clipPath id="uk-flag-main">
                  <circle cx="16" cy="16" r="16"/>
                </clipPath>
              </defs>
              <rect width="32" height="32" fill="#012169" clip-path="url(#uk-flag-main)"/>
              <path d="M0 0L32 32M32 0L0 32" stroke="white" stroke-width="6" clip-path="url(#uk-flag-main)"/>
              <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" stroke-width="4" clip-path="url(#uk-flag-main)"/>
              <path d="M16 0V32M0 16H32" stroke="white" stroke-width="10" clip-path="url(#uk-flag-main)"/>
              <path d="M16 0V32M0 16H32" stroke="#C8102E" stroke-width="6" clip-path="url(#uk-flag-main)"/>
            </svg>
          </div>
          <!-- China Flag -->
          <div v-else-if="currentLanguage === 'zh'" class="flag-icon">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <circle cx="16" cy="16" r="16" fill="#DE2910"/>
              <polygon points="8,8 9,11 12,11 9.5,13 10.5,16 8,14 5.5,16 6.5,13 4,11 7,11" fill="#FFDE00"/>
            </svg>
          </div>
          <span class="language-text">{{ currentLanguage === 'th' ? 'ไทย' : currentLanguage === 'en' ? 'English' : 'Chinese' }}</span>
          <svg class="dropdown-icon" viewBox="0 0 16 16" width="16" height="16">
            <path d="M4 6L8 10L12 6" stroke="#837F7F" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- Language Dropdown -->
          <Transition name="dropdown">
            <div v-if="showLanguageDropdown" class="language-dropdown">
              <div class="dropdown-item" :class="{ active: selectedLanguage === 'th' }" @click.stop="selectLanguage('th')">
                <div class="dropdown-item-content">
                  <div class="flag-icon-small">
                    <svg viewBox="0 0 32 32" width="32" height="32">
                      <rect width="32" height="32" rx="16" fill="#F4F6F8"/>
                      <rect y="10" width="32" height="4" fill="#ED1C24"/>
                      <rect y="14" width="32" height="4" fill="#FFFFFF"/>
                      <rect y="18" width="32" height="4" fill="#241D4F"/>
                    </svg>
                  </div>
                  <span class="dropdown-text">ไทย</span>
                </div>
                <svg v-if="selectedLanguage === 'th'" class="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#36B37E"/>
                  <path d="M6 10l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="dropdown-item" :class="{ active: selectedLanguage === 'en' }" @click.stop="selectLanguage('en')">
                <div class="dropdown-item-content">
                  <div class="flag-icon-small">
                    <svg viewBox="0 0 32 32" width="32" height="32">
                      <defs>
                        <clipPath id="uk-flag">
                          <circle cx="16" cy="16" r="16"/>
                        </clipPath>
                      </defs>
                      <rect width="32" height="32" fill="#012169" clip-path="url(#uk-flag)"/>
                      <path d="M0 0L32 32M32 0L0 32" stroke="white" stroke-width="6" clip-path="url(#uk-flag)"/>
                      <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" stroke-width="4" clip-path="url(#uk-flag)"/>
                      <path d="M16 0V32M0 16H32" stroke="white" stroke-width="10" clip-path="url(#uk-flag)"/>
                      <path d="M16 0V32M0 16H32" stroke="#C8102E" stroke-width="6" clip-path="url(#uk-flag)"/>
                    </svg>
                  </div>
                  <span class="dropdown-text">English</span>
                </div>
                <svg v-if="selectedLanguage === 'en'" class="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#36B37E"/>
                  <path d="M6 10l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="dropdown-item" :class="{ active: selectedLanguage === 'zh' }" @click.stop="selectLanguage('zh')">
                <div class="dropdown-item-content">
                  <div class="flag-icon-small">
                    <svg viewBox="0 0 32 32" width="32" height="32">
                      <circle cx="16" cy="16" r="16" fill="#DE2910"/>
                      <polygon points="8,8 9,11 12,11 9.5,13 10.5,16 8,14 5.5,16 6.5,13 4,11 7,11" fill="#FFDE00"/>
                    </svg>
                  </div>
                  <span class="dropdown-text">Chinese</span>
                </div>
                <svg v-if="selectedLanguage === 'zh'" class="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#36B37E"/>
                  <path d="M6 10l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Not Logged In State -->
        <template v-if="!isLoggedIn">
          <!-- My Rental Schedule Link -->
          <router-link to="#" class="rental-link">
            ตารวจของฉัน
          </router-link>

          <!-- Login/Register Button -->
          <router-link to="/login" class="login-button">
            {{ t('nav.login') }}/{{ t('nav.register') }}
          </router-link>
        </template>

        <!-- Logged In State -->
        <template v-else>
          <!-- User Profile with Dropdown -->
          <div class="user-profile" @click="toggleProfileDropdown" v-click-outside="closeProfileDropdown">
            <div class="user-avatar">
              <img src="https://i.pravatar.cc/150?img=12" alt="User" class="avatar-image" />
            </div>
            <span class="user-name">{{ userName }}</span>
            <svg class="dropdown-icon" viewBox="0 0 16 16" width="16" height="16">
              <path d="M4 6L8 10L12 6" stroke="#837F7F" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <!-- Profile Dropdown -->
            <Transition name="dropdown">
              <div v-if="showProfileDropdown" class="profile-dropdown">
                <router-link to="/account" class="dropdown-item" @click.stop="closeProfileDropdown">
                  <div class="dropdown-item-content">
                    <svg class="dropdown-icon-large" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10h-8v11M3 5.5L11 2l8 3.5M3 5.5V18M11 2v11" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="8" cy="18" r="2" fill="#637381"/>
                      <circle cx="18" cy="18" r="2" fill="#637381"/>
                    </svg>
                    <span class="dropdown-text">{{ t('nav.bookingInfo') }}</span>
                  </div>
                </router-link>
                <router-link to="/account" class="dropdown-item" @click.stop="closeProfileDropdown">
                  <div class="dropdown-item-content">
                    <svg class="dropdown-icon-large" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="#637381" stroke-width="1.5"/>
                      <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <span class="dropdown-text">{{ t('nav.manageAccount') }}</span>
                  </div>
                </router-link>
                <div class="dropdown-item" @click.stop="handleLogout">
                  <div class="dropdown-item-content">
                    <svg class="dropdown-icon-large" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5m0 0l-5-5m5 5H9" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="dropdown-text">{{ t('nav.logout') }}</span>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </template>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <Transition name="sidebar">
      <div v-if="showSidebar" class="sidebar-overlay" @click="showSidebar = false">
        <div class="sidebar-menu" @click.stop>
          <!-- Sidebar Header -->
          <div class="sidebar-header">
            <div class="sidebar-logo">
              <img src="@/assets/images/logo.svg" alt="asap" style="height: 28px;" />
            </div>
            <button class="close-button" @click="showSidebar = false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="#161c24" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <!-- Sidebar Content -->
          <div class="sidebar-content">
            <!-- Menu Section -->
            <div class="sidebar-section">
              <div class="section-label">เมนู</div>
            </div>

            <!-- Navigation Links -->
            <router-link to="/" class="sidebar-item" @click="showSidebar = false">
              หน้าแรก
            </router-link>
            <router-link to="/cars" class="sidebar-item" @click="showSidebar = false">
              เช่ารถ
            </router-link>
            <router-link to="/promotions" class="sidebar-item" @click="showSidebar = false">
              โปรโมชั่น
            </router-link>
            <router-link to="/branches" class="sidebar-item" @click="showSidebar = false">
              จุดรับ-ส่งรถ
            </router-link>
            <router-link to="/articles" class="sidebar-item" @click="showSidebar = false">
              บทความ
            </router-link>
            <router-link to="/faq" class="sidebar-item" @click="showSidebar = false">
              คำถามที่พบบ่อย
            </router-link>
            <router-link to="/contact" class="sidebar-item" @click="showSidebar = false">
              ติดต่อเรา
            </router-link>
            <router-link to="/about" class="sidebar-item" @click="showSidebar = false">
              เกี่ยวกับเรา
            </router-link>

            <div class="sidebar-divider"></div>

            <!-- Account Section -->
            <div class="sidebar-section">
              <div class="section-label">บัญชี</div>
            </div>

            <router-link to="/account" class="sidebar-item with-arrow" @click="showSidebar = false">
              ข้อมูลการจอง
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="arrow-icon">
                <path d="M7 5l5 5-5 5" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>

            <router-link to="/account" class="sidebar-item with-arrow" @click="showSidebar = false">
              จัดการบัญชี
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="arrow-icon">
                <path d="M7 5l5 5-5 5" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>

            <div class="sidebar-divider"></div>

            <!-- Language Selector -->
            <div class="sidebar-item with-arrow language-item">
              <div class="language-content">
                <div class="flag-icon-sidebar">
                  <svg viewBox="0 0 32 32" width="24" height="24">
                    <rect width="32" height="32" rx="16" fill="#F4F6F8"/>
                    <rect y="10" width="32" height="4" fill="#ED1C24"/>
                    <rect y="14" width="32" height="4" fill="#FFFFFF"/>
                    <rect y="18" width="32" height="4" fill="#241D4F"/>
                  </svg>
                </div>
                <span>ภาษา</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="arrow-icon">
                <path d="M7 5l5 5-5 5" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Sidebar Footer -->
          <div class="sidebar-footer">
            <button class="logout-button" @click="handleLogout">
              ออกจากระบบ
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 17H4a1 1 0 01-1-1V4a1 1 0 011-1h3M13 13l4-4m0 0l-4-4m4 4H7" stroke="#FF6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const router = useRouter()
const { currentLanguage, setLanguage, t } = useLanguage()

const menuItems = computed(() => [
  { text: t('nav.home'), to: '/', active: false },
  { text: t('nav.cars'), to: '/cars', active: false },
  { text: t('nav.promotions'), to: '/promotions', active: false },
  { text: t('nav.branches'), to: '/branches', active: false },
  { text: t('nav.articles'), to: '/articles', active: false },
  { text: 'FAQ', to: '/faq', active: false },
  { text: t('nav.contact'), to: '/contact', active: false }
])

// Login state (set to false by default, true when user logs in)
const isLoggedIn = ref(true)
const userName = ref('สมชาย ใ...')

// Sidebar state
const showSidebar = ref(false)

// Language dropdown state
const showLanguageDropdown = ref(false)
const selectedLanguage = computed(() => currentLanguage.value)

// Profile dropdown state
const showProfileDropdown = ref(false)

// Toggle Language Dropdown
const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value
  showProfileDropdown.value = false
}

// Close Language Dropdown
const closeLanguageDropdown = () => {
  showLanguageDropdown.value = false
}

// Select Language
const selectLanguage = (lang) => {
  setLanguage(lang)
  showLanguageDropdown.value = false
}

// Toggle Profile Dropdown
const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value
  showLanguageDropdown.value = false
}

// Close Profile Dropdown
const closeProfileDropdown = () => {
  showProfileDropdown.value = false
}

// Handle logout
const handleLogout = () => {
  isLoggedIn.value = false
  userName.value = ''
  showSidebar.value = false
  showProfileDropdown.value = false
  router.push('/')
}

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<style scoped>
.menu-desktop {
  background: white;
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.03);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.menu-container {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 80px;
  padding: 0 32px;
  max-width: 1680px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  height: 32px;
  flex-shrink: 0;
}

.logo img {
  height: 100%;
  width: auto;
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.menu-item {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #161c24;
  padding: 4px 12px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
  border-radius: 6px;
  letter-spacing: 0.07px;
}

.menu-item:hover {
  background: #f8f9fa;
  color: #ff595a;
}

.menu-item.active {
  color: #ff595a;
  font-weight: 600;
}

/* Right Section */
.menu-right {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0;
}

/* Language Selector */
.language-selector {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 6px;
}

.language-selector:hover {
  background: #f8f9fa;
}

.flag-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.language-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #161c24;
  letter-spacing: 0.06px;
}

/* Divider */
.divider {
  width: 1px;
  height: 40px;
  background: #f0f0f0;
  margin: 0 4px;
}

/* Rental Link */
.rental-link {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #161c24;
  padding: 8px 16px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
  border-radius: 6px;
  letter-spacing: 0.07px;
}

.rental-link:hover {
  background: #f8f9fa;
  color: #ff595a;
}

/* Login/Register Button */
.login-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: white;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  padding: 10px 20px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  border-radius: 8px;
  letter-spacing: 0.07px;
  margin-left: 8px;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.2);
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 107, 107, 0.3);
}

/* User Profile */
.user-profile {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 6px;
  text-decoration: none;
}

.user-profile:hover {
  background: #f8f9fa;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #161c24;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 0.07px;
}

.dropdown-icon {
  flex-shrink: 0;
}

/* Language Dropdown */
.language-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  z-index: 100;
  padding: 8px;
}

.language-dropdown .dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 8px;
  gap: 12px;
}

.language-dropdown .dropdown-item:hover {
  background: #F9FAFB;
}

.language-dropdown .dropdown-item.active {
  background: #F9FAFB;
}

.dropdown-item-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.flag-icon-small {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.dropdown-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.07px;
}

.check-icon {
  flex-shrink: 0;
}

/* Profile Dropdown */
.profile-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 240px;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  z-index: 100;
  padding: 8px;
}

.profile-dropdown .dropdown-item {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 8px;
  text-decoration: none;
  color: #161C24;
}

.profile-dropdown .dropdown-item:hover {
  background: #F9FAFB;
}

.dropdown-icon-large {
  flex-shrink: 0;
}

/* Dropdown Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Hamburger Button - Hidden on desktop */
.hamburger-button {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
  flex-shrink: 0;
}

.hamburger-button:hover {
  background: #f8f9fa;
}

/* Sidebar Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
}

/* Sidebar Menu */
.sidebar-menu {
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background: white;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* Sidebar Header */
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #F4F6F8;
  flex-shrink: 0;
}



.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}

.close-button:hover {
  background: #f8f9fa;
}

/* Sidebar Content */
.sidebar-content {
  flex: 1;
  padding: 16px 0;
  overflow-y: auto;
}

.sidebar-section {
  padding: 16px 24px 8px;
}

.section-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #919EAB;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #161c24;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.sidebar-item:hover {
  background: #f8f9fa;
  color: #ff595a;
}

.sidebar-item.router-link-active {
  background: #FFF4F3;
  color: #ff595a;
  font-weight: 600;
}

.sidebar-item.with-arrow {
  gap: 12px;
}

.arrow-icon {
  flex-shrink: 0;
}

.language-item {
  cursor: pointer;
}

.language-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.flag-icon-sidebar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.sidebar-divider {
  height: 1px;
  background: #F4F6F8;
  margin: 12px 0;
}

/* Sidebar Footer */
.sidebar-footer {
  padding: 16px 24px 24px;
  border-top: 1px solid #F4F6F8;
  flex-shrink: 0;
}

.logout-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 20px;
  background: white;
  border: 1.5px solid #FF6B6B;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FF6B6B;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-button:hover {
  background: #FFF4F3;
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.2);
}

/* Sidebar Transitions */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
}

.sidebar-enter-active .sidebar-menu,
.sidebar-leave-active .sidebar-menu {
  transition: transform 0.3s ease;
}

.sidebar-enter-from .sidebar-menu,
.sidebar-leave-to .sidebar-menu {
  transform: translateX(-100%);
}

/* Responsive */
@media (max-width: 1280px) {
  .menu-container {
    gap: 16px;
  }

  .nav-menu {
    gap: 4px;
  }

  .menu-item {
    font-size: 13px;
    padding: 4px 8px;
  }
}

@media (max-width: 1024px) {
  .menu-desktop {
    display: none; /* Hide on tablet/mobile, show mobile menu instead */
  }
}
</style>
