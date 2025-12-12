<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-main">
        <!-- Logo and Contact Row -->
        <div class="footer-header">
          <div class="logo-section">
            <img src="@/assets/images/logo.svg" alt="asap" />
          </div>

          <div class="contact-section">
            <a href="tel:020918000" class="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.6227 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4136 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#FF595A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>02 091 8000</span>
            </a>

            <a href="https://line.me/R/ti/p/@asapcarrental" target="_blank" class="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="#FF595A" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="#FF595A" stroke-width="2"/>
              </svg>
              <span>@asapcarrental</span>
            </a>

            <a href="https://facebook.com/asapcarrental" target="_blank" class="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#FF595A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Asap Car Rental</span>
            </a>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Links and App Download Section -->
        <div class="footer-content">
          <!-- Column 1: เช่ารถประเภท -->
          <div class="footer-column">
            <h4 class="column-title">เช่ารถประเภท</h4>
            <ul class="link-list">
              <li><a href="#" class="footer-link">รถยนต์ขนาดเล็กประหยัดน้ำมัน</a></li>
              <li><a href="#" class="footer-link">รถยนต์ขนาดกลางถึงใหญ่</a></li>
              <li><a href="#" class="footer-link">รถอเนกประสงค์ / รถเพื่อการท่องเที่ยว / รถครอบครัว</a></li>
              <li><a href="#" class="footer-link">รถตู้โดยสาร / รถสำหรับผู้โดยสารหลายคน</a></li>
              <li><a href="#" class="footer-link">รถกระบะ / รถบรรทุกขนาดเล็ก</a></li>
              <li><a href="#" class="footer-link">รถยนต์ไฟฟ้า / รถยนต์ไฮบริด</a></li>
              <li><a href="#" class="footer-link">รถยนต์ระดับพรีเมียม / รถหรู</a></li>
            </ul>
          </div>

          <!-- Column 2: บริการ -->
          <div class="footer-column">
            <h4 class="column-title">บริการ</h4>
            <ul class="link-list">
              <li><a href="#" class="footer-link">เช่ารถระยะสั้น-ยาว</a></li>
              <li><a href="#" class="footer-link">โปรโมช่ัน</a></li>
              <li><a href="#" class="footer-link">จุดส่งรถ</a></li>
            </ul>
          </div>

          <!-- Column 3: เงื่อนไขและข้อตกลง + App Download -->
          <div class="footer-column-group">
            <div class="footer-column">
              <h4 class="column-title">เงื่อนไขและข้อตกลง</h4>
              <ul class="link-list">
                <li><a href="#" class="footer-link">ข้อกำหนดและเงื่อนไข</a></li>
                <li><router-link to="/privacy-policy" class="footer-link">นโยบายความเป็นส่วนตัว</router-link></li>
                <li><a href="#" class="footer-link">บัญชีและการจอง</a></li>
              </ul>
            </div>

            <!-- App Download Section -->
            <div class="app-download">
              <h4 class="column-title app-title">แอปพลิเคชัน</h4>
              <div class="download-buttons">
                <a href="#" class="store-button">
                  <svg viewBox="0 0 120 40" width="120" height="40">
                    <rect width="120" height="40" rx="6" fill="#000"/>
                    <path d="M24.5 20.3c0-2.4 1.4-3.8 3.4-3.8 1.3 0 2.3.6 2.9 1.6l-1.2.7c-.4-.6-.9-1-1.7-1-1.2 0-2.1 1-2.1 2.5s.9 2.5 2.1 2.5c.8 0 1.4-.4 1.7-1l1.2.7c-.6 1-1.6 1.6-2.9 1.6-2 0-3.4-1.4-3.4-3.8z" fill="#fff"/>
                    <path d="M38.5 14.5h1.3v9h-1.3v-9z" fill="#fff"/>
                    <path d="M32 20.3c0-2.3 1.6-3.8 3.6-3.8s3.6 1.5 3.6 3.8-1.6 3.8-3.6 3.8-3.6-1.5-3.6-3.8zm5.9 0c0-1.5-.9-2.5-2.3-2.5s-2.3 1-2.3 2.5.9 2.5 2.3 2.5 2.3-1 2.3-2.5z" fill="#fff"/>
                    <text x="60" y="15" fill="#fff" font-size="8" font-family="Arial">Download on the</text>
                    <text x="60" y="26" fill="#fff" font-size="14" font-weight="600" font-family="Arial">App Store</text>
                  </svg>
                </a>
                <a href="#" class="store-button">
                  <svg viewBox="0 0 135 40" width="135" height="40">
                    <rect width="135" height="40" rx="6" fill="#000"/>
                    <text x="45" y="14" fill="#fff" font-size="7" font-family="Arial">GET IT ON</text>
                    <text x="45" y="27" fill="#fff" font-size="13" font-weight="600" font-family="Arial">Google Play</text>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>©2025. asap Car Rent. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-section {
  width: 100%;
  background: #F9FAFB;
  padding: 40px 0 20px;
}

.footer-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
}

.footer-main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  height: 40px;
}

.logo-section img {
  height: 100%;
  width: auto;
}

.contact-section {
  display: flex;
  gap: 32px;
  align-items: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #637381;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s;
}

.contact-item:hover {
  color: #FF595A;
}

.contact-item svg {
  flex-shrink: 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: #DFE3E8;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.5fr;
  gap: 60px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-column-group {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.column-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #161c24;
  margin: 0;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #637381;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #FF595A;
}

.app-download {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.app-title {
  margin-bottom: 4px;
}

.download-buttons {
  display: flex;
  gap: 12px;
}

.store-button {
  display: block;
  transition: opacity 0.2s;
}

.store-button:hover {
  opacity: 0.8;
}

.store-button svg {
  display: block;
}

.copyright {
  text-align: center;
  padding-top: 20px;
}

.copyright p {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #919EAB;
  margin: 0;
}

@media (max-width: 1440px) {
  .footer-container {
    padding: 0 100px;
  }

  .footer-content {
    gap: 40px;
  }
}

@media (max-width: 1024px) {
  .footer-container {
    padding: 0 40px;
  }

  .footer-header {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }

  .contact-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-column-group {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 30px 0 20px;
  }

  .footer-container {
    padding: 0 20px;
  }

  .footer-main {
    gap: 24px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .footer-column-group {
    grid-column: span 1;
  }

  .footer-column {
    gap: 12px;
  }

  .column-title {
    font-size: 14px;
  }

  .footer-link {
    font-size: 13px;
  }

  .contact-section {
    width: 100%;
  }

  .download-buttons {
    flex-direction: column;
  }

  .store-button svg {
    height: 36px;
    width: auto;
  }
}
</style>
