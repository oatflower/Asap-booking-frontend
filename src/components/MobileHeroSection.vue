<template>
  <section class="mobile-hero">
    <div class="hero-bg">
      <img src="@/assets/images/mobile/mobile-hero-bg-3cbd97.png" alt="Background" class="bg-img" />
    </div>

    <div class="search-card-container">
      <div class="search-card">
        <!-- Location Section -->
        <div class="input-section">
          <div class="input-row">
            <div class="input-label-bold">รับรถ: Bangkok</div>
            <div class="input-value">Suvarnabhumi Airport</div>
          </div>
          <div class="divider-line">
            <div class="swap-circle">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 6L1 9M1 9L4 12M1 9H17M14 6L17 9M17 9L14 12" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="input-row">
            <div class="input-label-bold">คืนรถ: Bangkok</div>
            <div class="input-value">Suvarnabhumi Airport</div>
          </div>
        </div>

        <!-- Date Section -->
        <div class="input-section">
          <div class="input-row">
            <div class="input-label">เริ่ม:</div>
            <div class="input-value-bold">01/08/2025 - 09:00 น.</div>
          </div>
          <div class="divider-line">
            <div class="swap-circle">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 6L1 9M1 9L4 12M1 9H17M14 6L17 9M17 9L14 12" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="input-row">
            <div class="input-label">ถึง:</div>
            <div class="input-value-bold">03/08/2025 - 09:00 น.</div>
          </div>
        </div>

        <!-- Coupon Section -->
        <div class="coupon-section">
          <div class="coupon-row">
            <div class="coupon-label">คูปอง:</div>
            <div class="coupon-value">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 5.5V4C13.5 3.44772 13.0523 3 12.5 3H3.5C2.94772 3 2.5 3.44772 2.5 4V5.5C3.32843 5.5 4 6.17157 4 7C4 7.82843 3.32843 8.5 2.5 8.5V10C2.5 10.5523 2.94772 11 3.5 11H12.5C13.0523 11 13.5 10.5523 13.5 10V8.5C12.6716 8.5 12 7.82843 12 7C12 6.17157 12.6716 5.5 13.5 5.5Z" stroke="#FF595A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <span>NEWUSER10</span>
            </div>
          </div>
        </div>

        <!-- Search Button -->
        <button class="search-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>ค้นหารถ</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mobile-hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f9fafb;
  padding-bottom: 16px;
}

.hero-bg {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-bottom-left-radius: 30px;
  position: relative;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.search-card-container {
  padding: 0 32px;
  margin-top: -16px;
  position: relative;
  z-index: 10;
}

.search-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 326px;
  max-width: 100%;
  margin: 0 auto;
}

.input-section {
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-row {
  padding: 0 14px;
  display: flex;
  flex-direction: column;
}

.input-label-bold {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.input-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.input-value {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.input-value-bold {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.divider-line {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.divider-line::before {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    #dfe3e8 0,
    #dfe3e8 4px,
    transparent 4px,
    transparent 8px
  );
}

.swap-circle {
  width: 24px;
  height: 24px;
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.swap-circle svg {
  width: 18px;
  height: 18px;
}

.coupon-section {
  background: white;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  padding: 16px 14px;
}

.coupon-row {
  display: flex;
  flex-direction: column;
}

.coupon-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.coupon-value {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coupon-value span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #ff595a;
}

.search-btn {
  background: #ff595a;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  cursor: pointer;
  width: 100%;
}

.search-btn svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
</style>
