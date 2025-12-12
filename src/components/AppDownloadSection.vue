<template>
  <section class="app-download-section">
    <div class="app-container">
      <div class="content-card">
        <!-- Left Content -->
        <div class="left-content">
          <!-- App Logo -->
          <div class="app-logo">
            <img src="@/assets/images/logo.svg" alt="asap" class="logo-img" />
          </div>

          <!-- Text Content -->
          <div class="text-content">
            <h2 class="app-title">จองสะดวกขึ้นผ่านแอปเอเเซ็ป  (asap app)</h2>
            <p class="app-subtitle">ค้นหารถเช่า check-in สะสม ASC Coin ผ่านแอป</p>
          </div>

          <!-- Download Buttons -->
          <div class="download-buttons">
            <a href="#" class="store-button">
              <div class="button-content">
                <svg viewBox="0 0 24 24" width="24" height="24" class="store-icon">
                  <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div class="text-col">
                  <span class="small">Download on the</span>
                  <span class="large">App Store</span>
                </div>
              </div>
            </a>
            <a href="#" class="store-button">
              <div class="button-content">
                <svg viewBox="0 0 24 24" width="24" height="24" class="store-icon">
                  <path fill="currentColor" d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm10.893 9.476l2.285-2.285 4.442 2.56c.746.43.746 1.116 0 1.546l-4.442 2.56-2.285-2.285L12.407 12l2.096-2.096zm-1.414 1.414L4.503 21.29l8.586-8.586zm0-2.828L4.503 2.29l8.586 8.586z"/>
                </svg>
                <div class="text-col">
                  <span class="small">GET IT ON</span>
                  <span class="large">Google Play</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Right Content - Phone Image -->
        <div class="right-content">
           <img src="@/assets/images/app_download/img_phones.png" alt="ASAP App" class="phones-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for static images
</script>

<style scoped>
.app-download-section {
  width: 100%;
  background: #FF595A;
  border-radius: 0px 80px 0px 0px;
}

.app-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 128px 200px 192px;
}

.content-card {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 32px;
  padding: 32px;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid #DFE3E8;
  overflow: visible;
}

.left-content {
  flex: 0 0 700px;
  max-width: 700px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.app-logo {
  width: 100px;
  height: 100px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.app-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #161C24;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.app-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #161C24;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.download-buttons {
  display: flex;
  align-items: center;
  gap: 32px;
}

.store-button {
  display: flex;
  align-items: center;
  background: #000000;
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid rgba(181, 178, 178, 0.5);
}

.store-button:hover {
  transform: translateY(-2px);
  background: #222;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.store-icon {
  width: 28px;
  height: 28px;
}

.text-col {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.text-col .small {
  font-size: 10px;
  opacity: 0.9;
}

.text-col .large {
  font-size: 18px;
  font-weight: 600;
}

.right-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-right: -100px;
  margin-top: -150px;
  margin-bottom: -150px;
}

.phones-img {
  max-width: 520px;
  height: auto;
  object-fit: contain;
  z-index: 2;
}

/* Responsive */
@media (max-width: 1440px) {
  .app-container {
    padding: 80px 100px 120px;
  }

  .left-content {
    flex: 0 0 550px;
    max-width: 550px;
  }

  .phones-img {
    max-width: 450px;
  }
}

@media (max-width: 1024px) {
  .app-download-section {
    border-radius: 0px 60px 0px 0px;
  }

  .app-container {
    padding: 60px 40px 80px;
  }

  .content-card {
    flex-direction: column;
    text-align: center;
    padding: 32px;
  }

  .left-content {
    flex: none;
    max-width: 100%;
    align-items: center;
  }

  .app-logo {
    width: 80px;
    height: 80px;
  }

  .app-title {
    font-size: 28px;
  }

  .download-buttons {
    justify-content: center;
    gap: 16px;
  }

  .right-content {
    margin: 20px 0 -60px;
  }

  .phones-img {
    max-width: 350px;
  }
}

@media (max-width: 768px) {
  .app-download-section {
    border-radius: 0px 40px 0px 0px;
  }

  .app-container {
    padding: 40px 20px 60px;
  }

  .content-card {
    padding: 24px;
  }

  .left-content {
    gap: 24px;
  }

  .app-title {
    font-size: 24px;
  }

  .app-subtitle {
    font-size: 14px;
  }

  .download-buttons {
    flex-direction: column;
    gap: 12px;
  }

  .store-badge {
    height: 48px;
  }

  .phones-img {
    max-width: 280px;
  }
}
</style>
