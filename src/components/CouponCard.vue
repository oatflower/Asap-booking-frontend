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
          <svg viewBox="0 0 29 29" width="29" height="29">
            <path d="M14.5 2V27M2 14.5H27M21.5 7.5L7.5 21.5M21.5 21.5L7.5 7.5" stroke="#637381" stroke-width="2" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="coupon-info">
          <h3 class="coupon-title">{{ title }}</h3>
          <div class="coupon-meta">
            <span class="expire-date">{{ expireText }}</span>
            <div class="countdown" v-if="showCountdown">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <circle cx="8" cy="8" r="6" stroke="#ff595a" stroke-width="1.5" fill="none"/>
                <path d="M8 4V8L10.5 10.5" stroke="#ff595a" stroke-width="1.5" stroke-linecap="round" fill="none"/>
              </svg>
              <span>{{ countdown }}</span>
            </div>
          </div>
          <button class="details-btn">
            <span>รายละเอียดและเงื่อนไข</span>
            <svg viewBox="0 0 8 8" width="8" height="8">
              <path d="M2 1L5 4L2 7" stroke="#161c24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Code and Button -->
      <div class="coupon-actions">
        <div class="code-input">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="#919eab" stroke-width="2" fill="none"/>
            <path d="M9 9h2v2H9V9zM9 13h6M9 15h6" stroke="#919eab" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>{{ code }}</span>
        </div>
        <button class="use-btn">ใช้เลย</button>
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
  max-width: 400px;
  height: 163px;
}

.badge {
  position: absolute;
  top: -12px;
  left: -9px;
  height: 32px;
  padding: 0 12px;
  background: linear-gradient(135deg, #ff595a 0%, #ff7676 100%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(255, 89, 90, 0.3);
  z-index: 10;
}

.badge::after {
  content: '';
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid #ff595a;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
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
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 0px 34.2px -15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.card-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -20px;
  background:
    radial-gradient(circle at 0% 50%, transparent 10px, white 10px),
    radial-gradient(circle at 100% 50%, transparent 10px, white 10px);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: left center, right center;
  pointer-events: none;
}

.coupon-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.icon-circle {
  width: 51px;
  height: 51px;
  background: #c4cdd5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.coupon-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.coupon-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #282727;
  margin: 0;
  line-height: 1.2;
}

.coupon-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.expire-date {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4f4d4d;
}

.countdown {
  background: #f4f6f8;
  border-radius: 100px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
}

.countdown svg {
  opacity: 0.8;
}

.countdown span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
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
  margin-top: 4px;
}

.details-btn span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #161c24;
}

.details-btn:hover span {
  color: #ff595a;
}

.divider {
  height: 1px;
  width: 100%;
  background: repeating-linear-gradient(
    to right,
    #282727 0,
    #282727 5px,
    transparent 5px,
    transparent 10px
  );
  opacity: 0.2;
}

.coupon-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.code-input {
  flex: 1;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 8px 10px 8px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.code-input svg {
  opacity: 0.2;
  flex-shrink: 0;
}

.code-input span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #161c24;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.use-btn {
  background: #ff595a;
  border: none;
  border-radius: 12px;
  padding: 0 16px;
  height: 40px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
  white-space: nowrap;
  flex-shrink: 0;
}

.use-btn:hover {
  background: #ff4445;
}

@media (max-width: 768px) {
  .coupon-card {
    max-width: 100%;
  }

  .coupon-title {
    font-size: 18px;
  }

  .expire-date {
    font-size: 12px;
  }
}
</style>
