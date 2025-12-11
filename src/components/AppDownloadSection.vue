<template>
  <section class="app-download-section">
    <div class="app-container">
      <div class="content-wrapper">
        <!-- White Box Container -->
        <div class="white-box">
          <!-- Left Content -->
          <div class="left-content">
            <!-- App Logo -->
            <div class="app-logo">
              <div class="logo-square">
                <span class="logo-text">asap</span>
              </div>
            </div>

            <!-- Text Content -->
            <div class="text-content">
              <h2 class="app-title">จองสะดวกขึ้นผ่านแอปเอเชป (asap app)</h2>
              <p class="app-subtitle">กับการผ่า check-in สะสม ASC Coin ผ่านแอป</p>
            </div>

            <!-- Download Buttons -->
            <div class="download-buttons">
              <a href="#" class="store-button app-store">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div class="button-text">
                  <span class="small">Download on the</span>
                  <span class="large">App Store</span>
                </div>
              </a>

              <a href="#" class="store-button google-play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm12.05-8.5l-2.6-2.6 7.25-7.25c.5.25.8.75.8 1.3v15.7c0 .55-.3 1.05-.8 1.3l-7.25-7.25 2.6-2.6zm-5.7 5.7L4.16 22.85c.24.12.5.15.74.15.37 0 .74-.11 1.05-.35L17.4 15.5l-2.6-2.6-5.45 5.45zM4.16 1.15L9.35 6.3 14.8 1.85c-.31-.24-.68-.35-1.05-.35-.24 0-.5.03-.74.15L4.16 1.15z"/>
                </svg>
                <div class="button-text">
                  <span class="small">GET IT ON</span>
                  <span class="large">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Content - Phones (Outside white box, on coral background) -->
        <div class="right-content">
          <div class="phones-wrapper">
            <!-- Purple Circle Background -->
            <div class="circle-bg purple"></div>
            <div class="circle-bg pink"></div>

            <!-- Coin 1 (Top) -->
            <div class="coin coin-1">
              <div class="coin-face">
                <span class="coin-symbol">₵</span>
              </div>
              <div class="coin-edge"></div>
            </div>

            <!-- Coin 2 (Bottom Right) -->
            <div class="coin coin-2">
              <div class="coin-face">
                <span class="coin-symbol">₵</span>
              </div>
              <div class="coin-edge"></div>
            </div>

            <!-- Phone Images -->
            <img
              :src="appPhoneImage"
              alt="ASAP App Phone"
              class="phone phone-1"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import appPhoneImage from '@/assets/images/app-phone.png'
</script>

<style scoped>
.app-download-section {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 50%, #FF8A8A 100%);
  padding: 40px 0;
  width: 100%;
  position: relative;
  overflow: visible;
}

.app-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
}

.content-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 550px;
}

.white-box {
  background: white;
  border-radius: 32px;
  padding: 60px;
  width: 55%;
  z-index: 2;
  position: relative;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.1);
}

.left-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.app-logo {
  display: flex;
  align-items: center;
}

.logo-square {
  width: 88px;
  height: 88px;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 24px rgba(255, 107, 107, 0.3);
}

.logo-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: white;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.app-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #161c24;
  margin: 0;
  line-height: 1.4;
}

.app-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #637381;
  margin: 0;
}

.download-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.store-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.store-button:hover {
  background: rgba(0, 0, 0, 1);
  transform: translateY(-2px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.button-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.button-text .small {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 10px;
  font-weight: 400;
  opacity: 0.9;
}

.button-text .large {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.right-content {
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  z-index: 3;
}

.phones-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.circle-bg {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.circle-bg.purple {
  top: 15%;
  left: -10%;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(186, 104, 200, 0.4) 0%, rgba(186, 104, 200, 0.1) 100%);
}

.circle-bg.pink {
  bottom: 10%;
  right: -15%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(236, 64, 122, 0.3) 0%, rgba(236, 64, 122, 0.05) 100%);
}

.phone {
  position: absolute;
  width: 520px;
  height: auto;
  z-index: 2;
}

.phone-1 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.coin {
  position: absolute;
  width: 110px;
  height: 110px;
  z-index: 4;
  transform-style: preserve-3d;
}

.coin-face {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #F4C430 0%, #E5A500 50%, #D4AF37 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 12px 32px rgba(212, 175, 55, 0.5);
  position: relative;
  border: 5px solid #F4D03F;
}

.coin-face::before {
  content: '';
  position: absolute;
  inset: 10px;
  background: radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.4), transparent 60%);
  border-radius: 50%;
}

.coin-edge {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 5px;
  left: 0;
  background: linear-gradient(135deg, #B8860B 0%, #8B6914 100%);
  z-index: -1;
}

.coin-symbol {
  font-family: 'Georgia', serif;
  font-size: 52px;
  font-weight: bold;
  color: rgba(101, 67, 33, 0.7);
  z-index: 2;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.coin-1 {
  top: 8%;
  left: 35%;
  animation: float 3s ease-in-out infinite;
}

.coin-2 {
  bottom: 8%;
  right: 8%;
  animation: float 3s ease-in-out infinite 1.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@media (max-width: 1440px) {
  .app-container {
    padding: 0 100px;
  }

  .white-box {
    padding: 50px;
    width: 50%;
  }

  .right-content {
    right: 80px;
    width: 450px;
  }
}

@media (max-width: 1024px) {
  .app-container {
    padding: 0 40px;
  }

  .white-box {
    padding: 40px;
    width: 100%;
  }

  .app-title {
    font-size: 28px;
  }

  .right-content {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    height: 400px;
    margin-top: -100px;
  }

  .phone {
    width: 180px;
  }

  .coin {
    width: 80px;
    height: 80px;
  }

  .coin-symbol {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .app-download-section {
    padding: 30px 0;
  }

  .app-container {
    padding: 0 20px;
  }

  .content-wrapper {
    flex-direction: column;
    min-height: auto;
  }

  .white-box {
    width: 100%;
    padding: 32px 24px;
    border-radius: 24px;
  }

  .left-content {
    align-items: center;
    text-align: center;
  }

  .logo-square {
    width: 72px;
    height: 72px;
  }

  .logo-text {
    font-size: 24px;
  }

  .app-title {
    font-size: 24px;
  }

  .app-subtitle {
    font-size: 14px;
  }

  .download-buttons {
    width: 100%;
    justify-content: center;
  }

  .store-button {
    flex: 1;
    min-width: 140px;
  }

  .right-content {
    height: 350px;
    margin-top: -80px;
  }

  .phone {
    width: 140px;
  }

  .phone-1 {
    left: 20%;
  }

  .phone-2 {
    right: 10%;
  }

  .circle-bg.purple {
    width: 200px;
    height: 200px;
  }

  .circle-bg.pink {
    width: 250px;
    height: 250px;
  }

  .coin {
    width: 60px;
    height: 60px;
  }

  .coin-symbol {
    font-size: 28px;
  }
}
</style>
