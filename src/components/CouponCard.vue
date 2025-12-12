<template>
  <div class="coupon-card">
    <!-- Badge -->
    <div class="badge">
      <span>{{ badge }}</span>
    </div>

    <!-- Card Content -->
    <div class="card-content">
      <!-- Header with Icon and Info -->
      <div class="coupon-header">
        <div class="icon-circle">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#637381" stroke-width="2"/>
            <path d="M8.5 12L11 14.5L16 9.5" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="coupon-info">
          <h3 class="coupon-title">{{ title }}</h3>
        </div>
      </div>

      <!-- Meta Info -->
      <div class="coupon-meta">
        <span class="expire-date">{{ expireText }}</span>
        <div class="countdown" v-if="showCountdown">
          <svg viewBox="0 0 16 16" width="16" height="16">
            <circle cx="8" cy="8" r="6" stroke="#ff595a" stroke-width="1.5" fill="none"/>
            <path d="M8 5V8L10 10" stroke="#ff595a" stroke-width="1.5" stroke-linecap="round" fill="none"/>
          </svg>
          <span>{{ countdown }}</span>
        </div>
      </div>

      <!-- Details Link -->
      <button class="details-btn">
        <span>รายละเอียดและเงื่อนไข</span>
        <svg viewBox="0 0 8 12" width="8" height="12">
          <path d="M1.5 1L6.5 6L1.5 11" stroke="#161c24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Code and Button -->
      <div class="coupon-actions">
        <div class="code-input">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#919eab" stroke-width="1.5"/>
            <path d="M7 7h4v4H7V7z" stroke="#919eab" stroke-width="1.5"/>
            <path d="M7 15h10M7 18h7" stroke="#919eab" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>{{ code }}</span>
        </div>
        <button class="use-btn">ใช้คูปอง</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: {
    type: String,
    default: 'จองก่อน ลดก่อน'
  },
  title: {
    type: String,
    default: 'คูปองส่วนลดสูงสุด 50%'
  },
  expireText: {
    type: String,
    default: 'ใช้สิทธิ์ภายใน: 31 ส.ค. 68'
  },
  countdown: {
    type: String,
    default: '02:59:00 ชั่วโมง'
  },
  showCountdown: {
    type: Boolean,
    default: true
  },
  code: {
    type: String,
    default: 'NEWCAR1000'
  }
})
</script>

<style scoped>
.coupon-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  padding-top: 12px;
}

.badge {
  position: absolute;
  top: 0;
  left: 12px;
  height: 32px;
  padding: 0 16px;
  background: linear-gradient(135deg, #ff595a 0%, #ff7676 100%);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  z-index: 10;
}

.badge span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: white;
  white-space: nowrap;
}

.card-content {
  background: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
}

.coupon-header {
  display: flex;
  gap: 16px;
  align-items: center;
}

.icon-circle {
  width: 48px;
  height: 48px;
  background: #f4f6f8;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.coupon-info {
  flex: 1;
}

.coupon-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #161c24;
  margin: 0;
  line-height: 1.4;
}

.coupon-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.expire-date {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #637381;
}

.countdown {
  background: #fff5f5;
  border-radius: 100px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.countdown span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #ff595a;
  white-space: nowrap;
}

.details-btn {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;
}

.details-btn span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #161c24;
}

.details-btn:hover span {
  color: #ff595a;
}

.details-btn:hover svg path {
  stroke: #ff595a;
}

.divider {
  height: 1px;
  width: 100%;
  margin: 8px 0;
  background: repeating-linear-gradient(
    to right,
    #dfe3e8 0,
    #dfe3e8 8px,
    transparent 8px,
    transparent 16px
  );
}

.coupon-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.code-input {
  flex: 1;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.code-input svg {
  opacity: 0.4;
  flex-shrink: 0;
}

.code-input span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #161c24;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.use-btn {
  background: #ff595a;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.use-btn:hover {
  background: #e84849;
}

@media (max-width: 768px) {
  .coupon-card {
    max-width: 100%;
  }

  .card-content {
    padding: 20px;
  }

  .coupon-title {
    font-size: 18px;
  }

  .use-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
