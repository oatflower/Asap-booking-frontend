<template>
  <div class="booking-history">
    <!-- Header with Tabs -->
    <div class="section-header">
      <h2 class="section-title">{{ t('history.title') }}</h2>
      <div class="tabs">
        <button
          :class="['tab', { active: activeTab === 'ongoing' }]"
          @click="activeTab = 'ongoing'"
        >
          {{ t('history.ongoing') }}
        </button>
        <button
          :class="['tab', { active: activeTab === 'completed' }]"
          @click="activeTab = 'completed'"
        >
          {{ t('history.completed') }}
        </button>
      </div>
    </div>

    <!-- Ongoing Bookings -->
    <div v-if="activeTab === 'ongoing'" class="bookings-list">
      <div
        v-for="booking in ongoingBookings"
        :key="booking.id"
        class="booking-card"
      >
        <img :src="booking.carImage" :alt="booking.carName" class="car-image" />

        <div class="booking-content">
          <div class="car-header">
            <h3 class="car-name">{{ booking.carName }}</h3>
            <div class="price-info">
              <span class="currency">{{ t('common.baht') }}</span>
              <span class="price">{{ booking.price.toLocaleString() }}</span>
              <span class="period">/ {{ booking.days }} {{ t('common.days') }}</span>
            </div>
            <div :class="['status', booking.statusClass]">
              {{ t('history.status') }}: {{ booking.status }}
            </div>
          </div>

          <div class="trip-details">
            <!-- Pickup -->
            <div class="trip-section">
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
                </svg>
                <span class="trip-text">{{ booking.pickup.date }}</span>
              </div>
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                  <circle cx="8" cy="6.91" r="2" fill="#637381"/>
                </svg>
                <span class="trip-text">{{ booking.pickup.location }}</span>
              </div>
            </div>

            <!-- Swap Icon -->
            <div class="swap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#DFE3E8" opacity="0.2"/>
                <path d="M8 10h8M12 6l4 4-4 4" stroke="#161C24" stroke-width="1.5" stroke-linecap="round" opacity="0.2"/>
              </svg>
            </div>

            <!-- Dropoff -->
            <div class="trip-section">
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
                </svg>
                <span class="trip-text">{{ booking.dropoff.date }}</span>
              </div>
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                  <circle cx="8" cy="6.91" r="2" fill="#637381"/>
                </svg>
                <span class="trip-text">{{ booking.dropoff.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="booking-actions">
          <div class="booking-code">
            <span class="code-label">{{ t('history.bookingCode') }}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#9C9797" stroke-width="1" fill="none"/>
            </svg>
            <span class="code-value">{{ booking.code }}</span>
          </div>
          <button
            v-if="booking.canCheckin"
            class="btn-primary"
            @click="goToCheckin(booking)"
          >
            {{ t('history.checkinButton') }}
          </button>
          <button
            v-else
            class="btn-secondary"
            @click="viewDetails(booking)"
          >
            {{ t('history.waitingButton') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Completed Bookings -->
    <div v-if="activeTab === 'completed'" class="bookings-list">
      <div
        v-for="booking in completedBookings"
        :key="booking.id"
        class="booking-card"
      >
        <img :src="booking.carImage" :alt="booking.carName" class="car-image" />

        <div class="booking-content">
          <div class="car-header">
            <h3 class="car-name">{{ booking.carName }}</h3>
            <div class="price-info">
              <span class="currency">{{ t('common.baht') }}</span>
              <span class="price">{{ booking.price.toLocaleString() }}</span>
              <span class="period">/ {{ booking.days }} {{ t('common.days') }}</span>
            </div>
            <div class="status completed-status">
              {{ t('history.status') }}: {{ booking.status }}
            </div>
          </div>

          <div class="trip-details">
            <!-- Pickup -->
            <div class="trip-section">
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
                </svg>
                <span class="trip-text">{{ booking.pickup.date }}</span>
              </div>
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                  <circle cx="8" cy="6.91" r="2" fill="#637381"/>
                </svg>
                <span class="trip-text">{{ booking.pickup.location }}</span>
              </div>
            </div>

            <!-- Swap Icon -->
            <div class="swap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#DFE3E8" opacity="0.2"/>
                <path d="M8 10h8M12 6l4 4-4 4" stroke="#161C24" stroke-width="1.5" stroke-linecap="round" opacity="0.2"/>
              </svg>
            </div>

            <!-- Dropoff -->
            <div class="trip-section">
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2.67" y="1.33" width="10.67" height="12" rx="1" stroke="#637381" stroke-width="0.5"/>
                </svg>
                <span class="trip-text">{{ booking.dropoff.date }}</span>
              </div>
              <div class="trip-row">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6.83" r="5.26" stroke="#637381" stroke-width="0.5"/>
                  <circle cx="8" cy="6.91" r="2" fill="#637381"/>
                </svg>
                <span class="trip-text">{{ booking.dropoff.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="booking-actions">
          <div class="booking-code">
            <span class="code-label">{{ t('history.bookingCode') }}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#9C9797" stroke-width="1" fill="none"/>
            </svg>
            <span class="code-value">{{ booking.code }}</span>
          </div>
          <button class="btn-secondary" @click="viewDetails(booking)">
            {{ t('history.detailsButton') }}
          </button>
        </div>
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
const activeTab = ref('ongoing')

const ongoingBookings = ref([
  {
    id: 1,
    carName: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    carImage: 'https://placehold.co/300x200',
    price: 9000,
    days: 3,
    status: 'ชำระเงินสำเร็จ',
    statusClass: 'success',
    code: 'AB09L',
    pickup: {
      date: '01 ก.ค. 68, 08:00',
      location: 'Suvarnabhumi International Airport'
    },
    dropoff: {
      date: '03 ก.ค. 68, 08:00',
      location: 'Don Mueang International Airport'
    },
    canCheckin: true
  },
  {
    id: 2,
    carName: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    carImage: 'https://placehold.co/300x200',
    price: 9000,
    days: 3,
    status: 'ชำระเงินสำเร็จ',
    statusClass: 'success',
    code: 'AB09L',
    pickup: {
      date: '01 ก.ค. 68, 08:00',
      location: 'Suvarnabhumi International Airport'
    },
    dropoff: {
      date: '03 ก.ค. 68, 08:00',
      location: 'Don Mueang International Airport'
    },
    canCheckin: false
  },
  {
    id: 3,
    carName: 'TOYOTA YARIS CROSS 1.2 CC : BKK',
    carImage: 'https://placehold.co/300x200',
    price: 9000,
    days: 3,
    status: 'ชำระเงินสำเร็จ',
    statusClass: 'success',
    code: 'AB09L',
    pickup: {
      date: '01 ก.ค. 68, 08:00',
      location: 'Suvarnabhumi International Airport'
    },
    dropoff: {
      date: '03 ก.ค. 68, 08:00',
      location: 'Don Mueang International Airport'
    },
    canCheckin: false
  }
])

const completedBookings = ref([])

const goToCheckin = (booking) => {
  router.push(`/checkin/${booking.code}`)
}

const viewDetails = (booking) => {
  router.push(`/booking/${booking.id}`)
}
</script>

<style scoped>
.booking-history {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Section Header */
.section-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #161C24;
  margin: 0;
  letter-spacing: 0.12px;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid #E5E3E3;
}

.tab {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #637381;
  padding: 12px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.08px;
}

.tab:hover {
  color: #FF595A;
}

.tab.active {
  color: #FF595A;
  font-weight: 600;
  border-bottom-color: #FF595A;
}

/* Bookings List */
.bookings-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Booking Card */
.booking-card {
  display: grid;
  grid-template-columns: 300px 1fr auto;
  gap: 24px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;
}

.booking-card:hover {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
}

/* Car Image */
.car-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

/* Booking Content */
.booking-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.car-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.car-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #161C24;
  margin: 0;
  letter-spacing: 0.08px;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 4px;
}

.currency {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #837F7F;
  letter-spacing: 0.06px;
}

.price {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.10px;
}

.period {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #837F7F;
  letter-spacing: 0.06px;
}

.status {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.07px;
  margin-top: 4px;
}

.status.success {
  color: #36B37E;
}

.completed-status {
  color: #637381;
}

/* Trip Details */
.trip-details {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  align-items: start;
}

.trip-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.trip-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.trip-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #161C24;
  letter-spacing: 0.06px;
}

.swap-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
}

/* Booking Actions */
.booking-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}

.booking-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 20px;
  background: #F9FAFB;
  border-radius: 12px;
  min-width: 140px;
}

.code-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #637381;
  letter-spacing: 0.06px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.code-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #161C24;
  letter-spacing: 0.10px;
}

/* Buttons */
.btn-primary {
  padding: 12px 32px;
  background: #FF595A;
  border: none;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.08px;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  min-width: 140px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
}

.btn-secondary {
  padding: 12px 32px;
  background: white;
  border: 1.5px solid #DFE3E8;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #637381;
  letter-spacing: 0.08px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  min-width: 140px;
}

.btn-secondary:hover {
  background: #F9FAFB;
  border-color: #637381;
}

/* Responsive */
@media (max-width: 1024px) {
  .booking-card {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .car-image {
    width: 100%;
  }

  .booking-actions {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .trip-details {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .swap-icon {
    transform: rotate(90deg);
    padding: 8px 0;
  }

  .booking-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>
