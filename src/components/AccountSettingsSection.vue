<template>
  <div class="account-settings">
    <h2 class="section-title">ข้อมูลบัญชี</h2>

    <div class="settings-container">
      <!-- Email Section -->
      <div class="form-section">
        <h3 class="form-title">อีเมล</h3>

        <div class="input-group">
          <div class="input-with-icon">
            <input
              v-model="accountData.email"
              type="email"
              class="form-input"
              disabled
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="input-icon">
              <rect x="5" y="8" width="10" height="8" rx="1" stroke="#637381" stroke-width="1.5"/>
              <path d="M7 8V6a3 3 0 116 0v2" stroke="#637381" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <button class="change-button" @click="showChangeEmailModal = true">เปลี่ยนอีเมล</button>
        </div>
      </div>

      <!-- Password Section -->
      <div class="form-section">
        <h3 class="form-title">รหัสผ่าน</h3>

        <div class="input-group">
          <div class="input-with-icon">
            <input
              type="password"
              value="••••••••"
              class="form-input"
              disabled
            />
          </div>
          <button class="change-button" @click="changePassword">เปลี่ยนรหัสผ่าน</button>
        </div>
      </div>

      <!-- Social Media Linking Section -->
      <div class="form-section">
        <h3 class="form-title">ลิงก์ไปยัง Social</h3>

        <!-- Gmail -->
        <div class="social-section">
          <h4 class="social-title">Gmail</h4>
          <div class="social-card">
            <div class="social-info">
              <div class="social-avatar">
                <svg v-if="!socialAccounts.gmail.connected" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#E5E7EB"/>
                  <circle cx="16" cy="13" r="5" fill="#9CA3AF"/>
                  <path d="M8 26c0-4 3-7 8-7s8 3 8 7" fill="#9CA3AF"/>
                </svg>
                <img v-else src="https://i.pravatar.cc/48?img=12" alt="Profile" style="width: 48px; height: 48px; border-radius: 50%;" />
              </div>
              <div class="social-text">
                <div v-if="!socialAccounts.gmail.connected">
                  <p class="social-label">เพิ่มบัญชี Gmail ของคุณ</p>
                </div>
                <div v-else>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                      <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
                      <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                      <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
                    </svg>
                    <p class="social-name">{{ socialAccounts.gmail.email }}</p>
                  </div>
                  <p class="social-note">*หากต้องการเปลี่ยนบัญชี กรุณาทำการยกเลิกการเชื่อมต่อก่อน</p>
                </div>
              </div>
            </div>
            <button v-if="!socialAccounts.gmail.connected" class="add-social-button google" @click="connectGmail">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="social-icon">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
                <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
              </svg>
              <span>เพิ่มบัญชี Google</span>
              <span class="plus-icon">+</span>
            </button>
            <button v-else class="disconnect-button" @click="requestDisconnect('gmail')">
              ยกเลิกการเชื่อมต่อ
            </button>
          </div>
        </div>

        <!-- Facebook -->
        <div class="social-section">
          <h4 class="social-title">Facebook</h4>
          <div class="social-card">
            <div class="social-info">
              <div class="social-avatar">
                <svg v-if="!socialAccounts.facebook.connected" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#E5E7EB"/>
                  <circle cx="16" cy="13" r="5" fill="#9CA3AF"/>
                  <path d="M8 26c0-4 3-7 8-7s8 3 8 7" fill="#9CA3AF"/>
                </svg>
                <img v-else src="https://i.pravatar.cc/48?img=12" alt="Profile" style="width: 48px; height: 48px; border-radius: 50%;" />
              </div>
              <div class="social-text">
                <div v-if="!socialAccounts.facebook.connected">
                  <p class="social-label">เพิ่มบัญชี Facebook ของคุณ</p>
                </div>
                <div v-else>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="#1877F2"/>
                      <path d="M12 10.125L12.375 7.5H9.75V5.625C9.75 4.8 10.125 4.125 11.25 4.125H12.5V1.875C12.5 1.875 11.5 1.75 10.5 1.75C8.5 1.75 7.125 3 7.125 5.25V7.5H4.75V10.125H7.125V16.75H9.75V10.125H12Z" fill="white"/>
                    </svg>
                    <p class="social-name">{{ socialAccounts.facebook.name }}</p>
                  </div>
                  <p class="social-note">*หากต้องการเปลี่ยนบัญชี กรุณาทำการยกเลิกการเชื่อมต่อก่อน</p>
                </div>
              </div>
            </div>
            <button v-if="!socialAccounts.facebook.connected" class="add-social-button facebook" @click="connectFacebook">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="social-icon">
                <circle cx="9" cy="9" r="9" fill="#1877F2"/>
                <path d="M12 10.125L12.375 7.5H9.75V5.625C9.75 4.8 10.125 4.125 11.25 4.125H12.5V1.875C12.5 1.875 11.5 1.75 10.5 1.75C8.5 1.75 7.125 3 7.125 5.25V7.5H4.75V10.125H7.125V16.75H9.75V10.125H12Z" fill="white"/>
              </svg>
              <span>เพิ่มบัญชี Facebook</span>
              <span class="plus-icon">+</span>
            </button>
            <button v-else class="disconnect-button" @click="requestDisconnect('facebook')">
              ยกเลิกการเชื่อมต่อ
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="form-footer">
        <div class="last-updated">
          อัพเดทล่าสุด: {{ lastUpdated }}
        </div>
        <button class="delete-button" @click="showDeleteModal = true">
          ลบบัญชี
        </button>
      </div>
    </div>

    <!-- Cannot Delete Modal -->
    <div v-if="showCannotDeleteModal" class="modal-overlay" @click="showCannotDeleteModal = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">ไม่สามารถลบบัญชีได้</h3>
        <p class="modal-message">
          เนื่องจากขณะนี้ บัญชีของคุณกำลังดำเนินการเช่ารถอยู่
          หากพบปัญหา กรุณาติดต่อเจ้าหน้าที่
          <br/>
          090 000 9999
        </p>
        <button class="modal-button-primary" @click="showCannotDeleteModal = false">
          ปิด
        </button>
      </div>
    </div>

    <!-- Gmail Connection Success Modal -->
    <div v-if="showGmailSuccessModal" class="modal-overlay" @click="showGmailSuccessModal = false">
      <div class="modal-content social-success-modal" @click.stop>
        <div class="success-icon-large">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#E8F5E9"/>
            <path d="M56 28L34 50L24 40" stroke="#4CAF50" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="gmail-icon-overlay">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M44.28 24.53c0-1.59-.14-3.13-.41-4.6H24v8.7h11.36c-.52 2.81-2.1 5.19-4.48 6.79v5.64h7.26c4.26-3.92 6.71-9.69 6.71-16.53z" fill="#4285F4"/>
              <path d="M24 48c6.48 0 11.91-2.14 15.89-5.81l-7.26-5.64c-2.14 1.43-4.87 2.28-8.09 2.28-6.23 0-11.51-4.2-13.4-9.86H3.84v5.82C7.84 42.62 15.29 48 24 48z" fill="#34A853"/>
              <path d="M10.57 28.57c-.45-1.35-.71-2.79-.71-4.28s.26-2.93.71-4.28v-5.82H3.84C2.26 16.43 1.5 19.13 1.5 22s.76 5.57 2.34 7.82l6.73-5.25z" fill="#FBBC05"/>
              <path d="M24 9.54c3.51 0 6.66 1.21 9.14 3.58l6.85-6.85C35.91 2.37 30.48 0 24 0 15.29 0 7.84 5.38 3.84 13.19l6.73 5.82C12.49 13.74 17.77 9.54 24 9.54z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <h3 class="modal-title">เชื่อมบัญชี Gmail สำเร็จ</h3>
        <p class="modal-email">{{ socialAccounts.gmail.email }}</p>
        <button class="modal-button-primary" @click="showGmailSuccessModal = false">
          ปิด
        </button>
      </div>
    </div>

    <!-- Facebook Connection Success Modal -->
    <div v-if="showFacebookSuccessModal" class="modal-overlay" @click="showFacebookSuccessModal = false">
      <div class="modal-content social-success-modal" @click.stop>
        <div class="success-icon-large">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#E3F2FD"/>
            <path d="M56 28L34 50L24 40" stroke="#1877F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="facebook-icon-overlay">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#1877F2"/>
              <path d="M32 27L33 20H26V15.5C26 13 27 12 29.5 12H33V5.5C33 5.5 30.5 5 28 5C23 5 19 8 19 14V20H13V27H19V45H26V27H32Z" fill="white"/>
            </svg>
          </div>
        </div>
        <h3 class="modal-title">เชื่อมบัญชี Facebook สำเร็จ</h3>
        <p class="modal-email">{{ socialAccounts.facebook.name }}</p>
        <button class="modal-button-primary" @click="showFacebookSuccessModal = false">
          ปิด
        </button>
      </div>
    </div>

    <!-- Disconnect Confirmation Modal -->
    <div v-if="showDisconnectModal" class="modal-overlay" @click="showDisconnectModal = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">
          {{ disconnectType === 'gmail' ? 'ยืนยันการยกเลิกการเชื่อมต่อบัญชี Gmail?' : 'ยืนยันการยกเลิกการเชื่อมต่อบัญชี Facebook?' }}
        </h3>
        <p class="modal-message">
          บัญชี <strong>{{ disconnectType === 'gmail' ? socialAccounts.gmail.email : socialAccounts.facebook.name }}</strong> ของคุณ<br/>
          จะถูกยกเลิกการเชื่อมต่อกับ asap
        </p>
        <div class="modal-actions">
          <button class="modal-button-secondary" @click="showDisconnectModal = false">
            ยกเลิก
          </button>
          <button class="modal-button-danger" @click="confirmDisconnect">
            ยืนยัน
          </button>
        </div>
      </div>
    </div>

    <!-- Disconnect Success Modal -->
    <div v-if="showDisconnectSuccessModal" class="modal-overlay" @click="showDisconnectSuccessModal = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">
          {{ disconnectType === 'gmail' ? 'ยกเลิกการเชื่อมต่อบัญชี Gmail สำเร็จ' : 'ยกเลิกการเชื่อมต่อบัญชี Facebook สำเร็จ' }}
        </h3>
        <p class="modal-message">
          สามารถเชื่อมบัญชีได้อีกภายหลัง
        </p>
        <button class="modal-button-primary" @click="showDisconnectSuccessModal = false">
          ปิด
        </button>
      </div>
    </div>

    <!-- Change Email Confirmation Modal -->
    <div v-if="showChangeEmailModal" class="modal-overlay" @click="showChangeEmailModal = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">ต้องการเปลี่ยนอีเมล?</h3>
        <p class="modal-message">
          ระบบจะส่งลิงก์ยืนยันตัวตนไปที่อีเมลใหม่ของคุณ
        </p>
        <div class="modal-actions">
          <button class="modal-button-secondary" @click="showChangeEmailModal = false">
            ยกเลิก
          </button>
          <button class="modal-button-primary" @click="confirmChangeEmail">
            เปลี่ยนอีเมล
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal-overlay" @click="showDeleteModal = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">ทำต้องการลบบัญชี?</h3>
        <p class="modal-message">
          ประวัติการจองรถ, ประวัติการใช้งาน และความนอนและลบ
          (ทำมี) จะถูกลบและไม่สามารถกู้คืนได้
        </p>
        <div class="modal-actions">
          <button class="modal-button-danger" @click="confirmDelete">
            ยกเลิก
          </button>
          <button class="modal-button-secondary" @click="showDeleteModal = false">
            ตำเนินการต่อ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const lastUpdated = ref('01/01/2025')
const showDeleteModal = ref(false)
const showCannotDeleteModal = ref(false)
const showChangeEmailModal = ref(false)

// Social media connection state
const showGmailSuccessModal = ref(false)
const showFacebookSuccessModal = ref(false)
const showDisconnectModal = ref(false)
const showDisconnectSuccessModal = ref(false)
const disconnectType = ref('') // 'gmail' or 'facebook'

const accountData = ref({
  email: 'Example@gmail.com'
})

const socialAccounts = ref({
  gmail: {
    connected: false,
    email: '',
    profilePic: ''
  },
  facebook: {
    connected: false,
    name: '',
    profilePic: ''
  }
})

const confirmChangeEmail = () => {
  showChangeEmailModal.value = false
  router.push('/change-email')
}

const changePassword = () => {
  router.push('/change-password')
}

const connectGmail = () => {
  // Here you would implement actual Google OAuth
  // For now, simulate successful connection
  socialAccounts.value.gmail = {
    connected: true,
    email: 'somchai_jaidee@gmail.com',
    profilePic: '/path/to/profile.jpg'
  }
  showGmailSuccessModal.value = true
}

const connectFacebook = () => {
  // Here you would implement actual Facebook OAuth
  // For now, simulate successful connection
  socialAccounts.value.facebook = {
    connected: true,
    name: 'Somchai Jaidee',
    profilePic: '/path/to/profile.jpg'
  }
  showFacebookSuccessModal.value = true
}

const requestDisconnect = (type) => {
  disconnectType.value = type
  showDisconnectModal.value = true
}

const confirmDisconnect = () => {
  if (disconnectType.value === 'gmail') {
    socialAccounts.value.gmail = {
      connected: false,
      email: '',
      profilePic: ''
    }
  } else if (disconnectType.value === 'facebook') {
    socialAccounts.value.facebook = {
      connected: false,
      name: '',
      profilePic: ''
    }
  }
  showDisconnectModal.value = false
  showDisconnectSuccessModal.value = true
}

const confirmDelete = () => {
  showDeleteModal.value = false
  // Navigate to account deleted page
  window.location.href = '/account-deleted'
}
</script>

<style scoped>
.account-settings {
  width: 100%;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161c24;
  margin: 0 0 32px 0;
}

.settings-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Form Sections */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #161c24;
  margin: 0;
}

/* Input Groups */
.input-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.input-with-icon {
  flex: 1;
  position: relative;
}

.form-input {
  width: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #637381;
  padding: 12px 16px;
  padding-right: 45px;
  border: 1.5px solid #DFE3E8;
  border-radius: 8px;
  background: #F9FAFB;
}

.input-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.change-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #637381;
  background: white;
  border: 1.5px solid #DFE3E8;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.change-button:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

/* Social Media Section */
.social-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}

.social-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
  margin: 0;
}

.social-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  gap: 16px;
}

.social-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-avatar {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.social-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.social-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #637381;
  margin: 0;
}

.social-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #161c24;
  margin: 0;
}

.social-note {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #919EAB;
  margin: 4px 0 0 0;
}

.add-social-button {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 16px;
  border: 1.5px solid;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.add-social-button.google {
  color: #4285F4;
  background: white;
  border-color: #4285F4;
}

.add-social-button.google:hover {
  background: #F0F7FF;
}

.add-social-button.facebook {
  color: #1877F2;
  background: white;
  border-color: #1877F2;
}

.add-social-button.facebook:hover {
  background: #F0F7FF;
}

.social-icon {
  flex-shrink: 0;
}

.plus-icon {
  font-size: 18px;
  font-weight: 400;
}

.disconnect-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #637381;
  background: white;
  border: 1.5px solid #DFE3E8;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.disconnect-button:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

/* Form Footer */
.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid #F4F6F8;
}

.last-updated {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #919EAB;
}

.delete-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: white;
  background: linear-gradient(135deg, #FF5757 0%, #FF3838 100%);
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(255, 87, 87, 0.2);
}

.delete-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 87, 87, 0.3);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 440px;
  width: calc(100% - 40px);
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
}

.modal-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #161c24;
  margin: 0 0 16px 0;
  text-align: center;
}

.modal-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #637381;
  line-height: 1.7;
  margin: 0 0 24px 0;
  text-align: center;
}

.modal-button-primary {
  width: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: white;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.2);
}

.modal-button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 107, 107, 0.3);
}

.modal-actions {
  display: flex;
  gap: 12px;
}

.modal-actions .modal-button-primary {
  flex: 1;
  width: auto;
  padding: 12px 24px;
}

.modal-button-danger {
  flex: 1;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: white;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(255, 107, 107, 0.2);
}

.modal-button-danger:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 107, 107, 0.3);
}

.modal-button-secondary {
  flex: 1;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #637381;
  background: white;
  padding: 12px 24px;
  border: 1.5px solid #DFE3E8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-button-secondary:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

/* Social Success Modal Styles */
.social-success-modal {
  text-align: center;
}

.success-icon-large {
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
}

.gmail-icon-overlay,
.facebook-icon-overlay {
  position: absolute;
  bottom: -8px;
  right: -8px;
  background: white;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.modal-email {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #161c24;
  margin: 0 0 24px 0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 24px;
  }

  .input-group {
    flex-direction: column;
    align-items: stretch;
  }

  .change-button {
    width: 100%;
  }

  .social-card {
    flex-direction: column;
    align-items: stretch;
  }

  .add-social-button {
    justify-content: center;
  }

  .form-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .delete-button {
    width: 100%;
  }

  .modal-content {
    padding: 24px;
  }

  .modal-actions {
    flex-direction: column;
  }
}
</style>
