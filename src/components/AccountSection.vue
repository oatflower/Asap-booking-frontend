<template>
  <section class="account-section">
    <div class="account-container">
      <h1 class="account-title">{{ t('account.title') }}</h1>

      <div class="account-content">
        <!-- Sidebar -->
        <aside class="account-sidebar">
          <div class="sidebar-header">{{ t('account.menu.topics') }}</div>
          <nav class="sidebar-menu">
            <button
              v-for="item in menuItems"
              :key="item.id"
              :class="['menu-item', { active: activeSection === item.id }]"
              @click="activeSection = item.id"
            >
              <component :is="item.icon" class="menu-icon" />
              <span>{{ t(item.label) }}</span>
            </button>
          </nav>
        </aside>

        <!-- Content Area -->
        <main class="account-main">
          <BookingHistorySection v-if="activeSection === 'bookings'" />
          <PersonalInfoSection v-if="activeSection === 'personal'" />
          <TaxInvoiceSection v-if="activeSection === 'tax'" />
          <AccountSettingsSection v-if="activeSection === 'settings'" />
          <TermsConditionsSection v-if="activeSection === 'terms'" />
        </main>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import BookingHistorySection from './BookingHistorySection.vue'
import PersonalInfoSection from './PersonalInfoSection.vue'
import TaxInvoiceSection from './TaxInvoiceSection.vue'
import AccountSettingsSection from './AccountSettingsSection.vue'
import TermsConditionsSection from './TermsConditionsSection.vue'

const { t } = useLanguage()

// Icons as functional components
const CarIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none' }, [
  h('path', { d: 'M4 8L6 4H14L16 8M4 8V14H16V8M4 8H16M6 14H7M13 14H14', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const UserIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none' }, [
  h('circle', { cx: '10', cy: '7', r: '3', stroke: 'currentColor', 'stroke-width': '1.5' }),
  h('path', { d: 'M5 15c0-2.5 2-4 5-4s5 1.5 5 4', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' })
])

const DocumentIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none' }, [
  h('path', { d: 'M6 2h6l4 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
  h('path', { d: 'M12 2v4h4M8 10h4M8 14h4', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' })
])

const SettingsIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none' }, [
  h('circle', { cx: '10', cy: '10', r: '3', stroke: 'currentColor', 'stroke-width': '1.5' }),
  h('path', { d: 'M10 2v2m0 12v2M4.93 4.93l1.41 1.41m7.32 7.32l1.41 1.41M2 10h2m12 0h2M4.93 15.07l1.41-1.41m7.32-7.32l1.41-1.41', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' })
])

const ShieldIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none' }, [
  h('path', { d: 'M10 2L4 5v5c0 4 2.5 7 6 8 3.5-1 6-4 6-8V5l-6-3z', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const activeSection = ref('bookings')

const menuItems = ref([
  { id: 'bookings', label: 'account.menu.bookings', icon: CarIcon },
  { id: 'personal', label: 'account.menu.personal', icon: UserIcon },
  { id: 'tax', label: 'account.menu.tax', icon: DocumentIcon },
  { id: 'settings', label: 'account.menu.settings', icon: SettingsIcon },
  { id: 'terms', label: 'account.menu.terms', icon: ShieldIcon }
])
</script>

<style scoped>
.account-section {
  background: #F9FAFB;
  padding: 120px 0 80px 0;
  min-height: 100vh;
}

.account-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
}

.account-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #161c24;
  text-align: center;
  margin: 0 0 48px 0;
}

.account-content {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 32px;
  align-items: start;
}

/* Sidebar */
.account-sidebar {
  background: white;
  border-radius: 16px;
  padding: 24px 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 100px;
}

.sidebar-header {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #919EAB;
  padding: 0 24px 16px 24px;
  border-bottom: 1px solid #F4F6F8;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  padding-top: 8px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border: none;
  background: none;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #637381;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  text-align: left;
}

.menu-item:hover {
  background: #F9FAFB;
  color: #161c24;
}

.menu-item.active {
  background: #FFF5F5;
  color: #FF6B6B;
  border-left-color: #FF6B6B;
  font-weight: 600;
}

.menu-icon {
  flex-shrink: 0;
  color: currentColor;
}

/* Main Content */
.account-main {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  min-height: 600px;
}

@media (max-width: 1024px) {
  .account-content {
    grid-template-columns: 240px 1fr;
    gap: 24px;
  }

  .account-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .account-section {
    padding: 100px 0 60px 0;
  }

  .account-container {
    padding: 0 20px;
  }

  .account-title {
    font-size: 32px;
    margin-bottom: 32px;
  }

  .account-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .account-sidebar {
    padding: 16px 0;
  }

  .menu-item {
    padding: 10px 20px;
    font-size: 14px;
  }

  .account-main {
    padding: 24px 20px;
  }
}
</style>
