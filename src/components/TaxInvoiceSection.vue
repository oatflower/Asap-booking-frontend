<template>
  <div class="tax-invoice">
    <h2 class="section-title">ที่อยู่ใบกำกับภาษี</h2>

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
      <!-- Type Selection -->
      <div class="form-section">
        <h3 class="form-title">ข้อมูลใบกำกับภาษี*</h3>

        <div class="tax-type-selector">
          <label class="radio-label">
            <input
              v-model="taxType"
              type="radio"
              value="individual"
              name="taxType"
            />
            <span>บุคคลธรรมดา</span>
          </label>
          <label class="radio-label">
            <input
              v-model="taxType"
              type="radio"
              value="corporate"
              name="taxType"
            />
            <span>นิติบุคคล</span>
          </label>
        </div>
      </div>

      <!-- Corporate Form -->
      <div v-if="taxType === 'corporate'" class="form-section">
        <div class="form-grid">
          <div class="form-group full-width">
            <label class="form-label">ชื่อบริษัท*</label>
            <input
              v-model="corporateData.companyName"
              type="text"
              class="form-input"
              placeholder="บริษัท เทคโนโลยี จำกัด (มหาชน)"
            />
          </div>

          <div class="form-group">
            <label class="form-label">เลขประจำตัวผู้เสียภาษี 13 หลัก (บริษัท)*</label>
            <input
              v-model="corporateData.taxId"
              type="text"
              class="form-input"
              placeholder="0123456789012"
              maxlength="13"
            />
          </div>

          <div class="form-group"></div>

          <div class="form-group">
            <label class="form-label">ชื่อสาขา*</label>
            <input
              v-model="corporateData.branchName"
              type="text"
              class="form-input"
              placeholder="สาขากรุงเทพมหานคร"
            />
          </div>

          <div class="form-group">
            <label class="form-label">เลขที่สาขา*</label>
            <input
              v-model="corporateData.branchCode"
              type="text"
              class="form-input"
              placeholder="00000"
            />
          </div>
        </div>
      </div>

      <!-- Contact Information (for both types) -->
      <div class="form-section">
        <h3 class="form-title">ข้อมูลผู้ติดต่อ*</h3>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">ชื่อ*</label>
            <input
              v-model="contactData.firstName"
              type="text"
              class="form-input"
              placeholder="สมชาย"
            />
          </div>

          <div class="form-group">
            <label class="form-label">นามสกุล*</label>
            <input
              v-model="contactData.lastName"
              type="text"
              class="form-input"
              placeholder="ใจดี"
            />
          </div>

          <div class="form-group">
            <label class="form-label">เบอร์โทรศัพท์*</label>
            <div class="phone-input">
              <select v-model="contactData.phoneCode" class="phone-code">
                <option value="+66">🇹🇭 +66</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>
              <input
                v-model="contactData.phone"
                type="tel"
                class="form-input phone-number"
                placeholder="909990000"
              />
            </div>
          </div>

          <div class="form-group" v-if="taxType === 'individual'">
            <label class="form-label">เลขประจำตัวผู้เสียภาษี 13 หลัก*</label>
            <input
              v-model="individualData.taxId"
              type="text"
              class="form-input"
              placeholder="0123456789012"
              maxlength="13"
            />
          </div>
        </div>
      </div>

      <!-- Address Information -->
      <div class="form-section">
        <h3 class="form-title">ข้อมูลที่อยู่*</h3>

        <div class="form-grid">
          <div class="form-group full-width">
            <label class="form-label">อีเมล (สำหรับ E-Tax)*</label>
            <input
              v-model="addressData.email"
              type="email"
              class="form-input"
              placeholder="accounting@technology.co.th"
            />
          </div>

          <div class="form-group">
            <label class="form-label">ที่อยู่เลขที่*</label>
            <input
              v-model="addressData.houseNumber"
              type="text"
              class="form-input"
              placeholder="123/4"
            />
          </div>

          <div class="form-group">
            <label class="form-label">หมู่บ้าน/อาคาร</label>
            <input
              v-model="addressData.building"
              type="text"
              class="form-input"
              :placeholder="taxType === 'corporate' ? 'อาคารเอ็ม ทาวเวอร์' : 'สุขสันต์วิลเลจ'"
            />
          </div>

          <div class="form-group">
            <label class="form-label">ซอย</label>
            <input
              v-model="addressData.soi"
              type="text"
              class="form-input"
              :placeholder="taxType === 'corporate' ? 'สาทร 5' : 'สุขุมวิท 64'"
            />
          </div>

          <div class="form-group">
            <label class="form-label">ถนน</label>
            <input
              v-model="addressData.road"
              type="text"
              class="form-input"
              :placeholder="taxType === 'corporate' ? 'สาทรใต้' : 'สุขุมวิท'"
            />
          </div>

          <div class="form-group">
            <label class="form-label">ประเทศ*</label>
            <select v-model="addressData.country" class="form-select">
              <option value="ไทย">ไทย</option>
              <option value="สหรัฐอเมริกา">สหรัฐอเมริกา</option>
              <option value="จีน">จีน</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">เมือง/รัฐ*</label>
            <select v-model="addressData.city" class="form-select">
              <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
              <option value="เชียงใหม่">เชียงใหม่</option>
              <option value="ภูเก็ต">ภูเก็ต</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">อำเภอ/เขต*</label>
            <select v-model="addressData.district" class="form-select">
              <option value="สาทร" v-if="taxType === 'corporate'">สาทร</option>
              <option value="บางกะปิ" v-if="taxType === 'individual'">บางกะปิ</option>
              <option value="ปทุมวัน">ปทุมวัน</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">ตำบล/แขวง*</label>
            <select v-model="addressData.subdistrict" class="form-select">
              <option value="ยานนาวา" v-if="taxType === 'corporate'">ยานนาวา</option>
              <option value="แขวงหัวหมาก" v-if="taxType === 'individual'">แขวงหัวหมาก</option>
              <option value="ทุ่งมหาเมฆ">ทุ่งมหาเมฆ</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">รหัสไปรษณีย์*</label>
            <input
              v-model="addressData.postalCode"
              type="text"
              class="form-input"
              :placeholder="taxType === 'corporate' ? '10120' : '10240'"
              maxlength="5"
            />
          </div>
        </div>
      </div>

      <!-- Save Button and Last Updated -->
      <div class="form-footer">
        <div class="last-updated">
          อัพเดทล่าสุด: {{ lastUpdated }}
        </div>
        <button class="save-button" @click="saveChanges">
          บันทึก
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const taxType = ref('individual')
const lastUpdated = ref('01/01/2025')
const showError = ref(false)

const errors = ref({
  companyName: '',
  taxId: '',
  branchName: '',
  branchCode: '',
  firstName: '',
  lastName: '',
  phone: '',
  individualTaxId: '',
  email: '',
  houseNumber: '',
  soi: '',
  road: '',
  postalCode: ''
})

const corporateData = ref({
  companyName: '',
  taxId: '',
  branchName: '',
  branchCode: ''
})

const individualData = ref({
  taxId: '0123456789012'
})

const contactData = ref({
  firstName: 'สมชาย',
  lastName: 'ใจดี',
  phoneCode: '+66',
  phone: '909990000'
})

const addressData = ref({
  email: 'accounting@technology.co.th',
  houseNumber: '123/4',
  building: 'สุขสันต์วิลเลจ',
  soi: 'สุขุมวิท 64',
  road: 'สุขุมวิท',
  country: 'ไทย',
  city: 'กรุงเทพมหานคร',
  district: 'บางกะปิ',
  subdistrict: 'แขวงหัวหมาก',
  postalCode: '10240'
})

// Watch tax type changes to update example data
watch(taxType, (newType) => {
  if (newType === 'corporate') {
    corporateData.value = {
      companyName: 'บริษัท เทคโนโลยี จำกัด (มหาชน)',
      taxId: '0123456789012',
      branchName: 'สาขากรุงเทพมหานคร',
      branchCode: '00000'
    }
    addressData.value.building = 'อาคารเอ็ม ทาวเวอร์'
    addressData.value.soi = 'สาทร 5'
    addressData.value.road = 'สาทรใต้'
    addressData.value.district = 'สาทร'
    addressData.value.subdistrict = 'ยานนาวา'
    addressData.value.postalCode = '10120'
  } else {
    addressData.value.building = 'สุขสันต์วิลเลจ'
    addressData.value.soi = 'สุขุมวิท 64'
    addressData.value.road = 'สุขุมวิท'
    addressData.value.district = 'บางกะปิ'
    addressData.value.subdistrict = 'แขวงหัวหมาก'
    addressData.value.postalCode = '10240'
  }
})

const saveChanges = () => {
  // Here you would save the changes to the backend
  const today = new Date()
  lastUpdated.value = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`
}
</script>

<style scoped>
.tax-invoice {
  width: 100%;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161c24;
  margin: 0 0 32px 0;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
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

/* Tax Type Selector */
.tax-type-selector {
  display: flex;
  gap: 32px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #637381;
}

.radio-label input[type="radio"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #FF6B6B;
}

.radio-label input[type="radio"]:checked + span {
  color: #FF6B6B;
  font-weight: 600;
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

/* Form Grid */
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

.form-group.full-width {
  grid-column: 1 / -1;
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

.form-input::placeholder {
  color: #919EAB;
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

  .tax-type-selector {
    flex-direction: column;
    gap: 16px;
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
