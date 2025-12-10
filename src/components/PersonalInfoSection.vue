<template>
  <div class="personal-info">
    <div class="section-header">
      <h2 class="section-title">ข้อมูลทั่วไป</h2>
      <button class="edit-button" @click="isEditing = !isEditing">
        {{ isEditing ? 'ยกเลิก' : 'แก้ไข' }}
      </button>
    </div>

    <!-- Error Alert -->
    <div v-if="showError" class="error-alert">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="alert-icon">
        <circle cx="10" cy="10" r="9" fill="#FF6B6B"/>
        <path d="M10 6v4m0 2h.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <div class="alert-content">
        <h4 class="alert-title">ไม่สามารถบันทึกได้</h4>
        <p class="alert-message">ข้อมูลส่วนตัวไม่ถูกต้องตามข้อมูล ไม่สตรวจสอบและกรอกข้อมูลให้ครบถ้วน</p>
      </div>
    </div>

    <div class="info-container">
      <!-- Profile Picture -->
      <div class="profile-picture">
        <div class="avatar">
          <img
            v-if="formData.profileImage"
            :src="formData.profileImage"
            alt="Profile"
          />
          <div v-else class="avatar-placeholder">
            <span>{{ getInitials(formData.firstName, formData.lastName) }}</span>
          </div>
        </div>
        <button v-if="isEditing" class="change-photo">แก้ไข</button>
      </div>

      <!-- Personal Information Form -->
      <div class="form-section">
        <h3 class="form-title">ข้อมูลส่วนตัว*</h3>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">ชื่อ*</label>
            <input
              v-model="formData.firstName"
              type="text"
              class="form-input"
              :disabled="!isEditing"
            />
          </div>

          <div class="form-group">
            <label class="form-label">นามสกุล*</label>
            <input
              v-model="formData.lastName"
              type="text"
              class="form-input"
              :disabled="!isEditing"
            />
          </div>

          <div class="form-group">
            <label class="form-label">วัน/เดือน/ปีเกิด*</label>
            <input
              v-model="formData.birthDate"
              type="date"
              class="form-input"
              :disabled="!isEditing"
            />
          </div>

          <div class="form-group">
            <label class="form-label">สัญชาติ*</label>
            <select
              v-model="formData.nationality"
              class="form-select"
              :disabled="!isEditing"
            >
              <option value="ไทย">ไทย</option>
              <option value="อังกฤษ">อังกฤษ</option>
              <option value="จีน">จีน</option>
              <option value="ญี่ปุ่น">ญี่ปุ่น</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">เพศ*</label>
            <select
              v-model="formData.gender"
              class="form-select"
              :disabled="!isEditing"
            >
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="ไม่ระบุ">ไม่ระบุ</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="form-section">
        <h3 class="form-title">ช่องทางการติดต่อ*</h3>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">เบอร์โทรศัพท์*</label>
            <div class="phone-input">
              <select
                v-model="formData.phoneCode"
                class="phone-code"
                :disabled="!isEditing"
              >
                <option value="+66">🇹🇭 +66</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+86">🇨🇳 +86</option>
              </select>
              <input
                v-model="formData.phone"
                type="tel"
                class="form-input phone-number"
                placeholder="909990000"
                :disabled="!isEditing"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">อีเมล*</label>
            <input
              v-model="formData.email"
              type="email"
              class="form-input"
              :disabled="!isEditing"
            />
          </div>
        </div>
      </div>

      <!-- Save Button and Last Updated -->
      <div class="form-footer">
        <div class="last-updated">
          อัพเดทล่าสุด: {{ lastUpdated }}
        </div>
        <button
          v-if="isEditing"
          class="save-button"
          @click="saveChanges"
        >
          บันทึก
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isEditing = ref(false)
const lastUpdated = ref('01/01/2025')
const showError = ref(false)

const formData = ref({
  profileImage: '',
  firstName: 'สมชาย',
  lastName: 'ใจดี',
  birthDate: '2542-08-10',
  nationality: 'ไทย',
  gender: 'ชาย',
  phoneCode: '+66',
  phone: '909990000',
  email: 'Example@gmail.com'
})

const getInitials = (firstName, lastName) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
}

const saveChanges = () => {
  // Here you would save the changes to the backend
  isEditing.value = false
  const today = new Date()
  lastUpdated.value = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`
}
</script>

<style scoped>
.personal-info {
  width: 100%;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161c24;
  margin: 0;
}

.edit-button {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #FF6B6B;
  background: none;
  border: 1.5px solid #FF6B6B;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-button:hover {
  background: #FF6B6B;
  color: white;
}

/* Error Alert */
.error-alert {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  background: #FFF4E6;
  border: 1px solid #FFB84D;
  border-radius: 12px;
  margin-bottom: 24px;
}

.alert-icon {
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.alert-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #161c24;
  margin: 0;
}

.alert-message {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #637381;
  line-height: 1.6;
  margin: 0;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Profile Picture */
.profile-picture {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: white;
}

.change-photo {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #637381;
  background: none;
  border: 1.5px solid #DFE3E8;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.change-photo:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

/* Form Sections */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #161c24;
  margin: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #637381;
}

.form-input,
.form-select {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #161c24;
  padding: 12px 16px;
  border: 1.5px solid #DFE3E8;
  border-radius: 8px;
  background: white;
  transition: all 0.2s;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #FF6B6B;
}

.form-input:disabled,
.form-select:disabled {
  background: #F9FAFB;
  color: #637381;
  cursor: not-allowed;
}

.phone-input {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
}

.phone-code {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #161c24;
  padding: 12px;
  border: 1.5px solid #DFE3E8;
  border-radius: 8px;
  background: white;
  transition: all 0.2s;
}

.phone-code:focus {
  outline: none;
  border-color: #FF6B6B;
}

.phone-code:disabled {
  background: #F9FAFB;
  color: #637381;
  cursor: not-allowed;
}

.phone-number {
  flex: 1;
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

.save-button {
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

.save-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 107, 107, 0.3);
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .section-title {
    font-size: 24px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .phone-input {
    grid-template-columns: 1fr;
  }

  .form-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .save-button {
    width: 100%;
  }
}
</style>
