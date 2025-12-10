# Checkout.vue Translation Updates

This document shows the key changes needed to integrate translations into Checkout.vue.

## 1. Import useLanguage at the top of the script section

```vue
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const router = useRouter()
const { t } = useLanguage()
```

## 2. Sample Translation Replacements

### Timer Banner (Line 10)
```vue
<!-- Before -->
<span class="timer-text">กรุณาทำรายการให้สำเร็จภายใน <strong>09:59</strong> นาที</span>

<!-- After -->
<span class="timer-text">{{ t('checkout.timerText') }} <strong>09:59</strong> {{ t('checkout.minutes') }}</span>
```

### Progress Steps (Lines 23, 28, 33)
```vue
<!-- Before -->
<span class="step-label">บริการเสริม</span>
<span class="step-label">ข้อมูลผู้เช่า/ขับขี่</span>
<span class="step-label">ชำระเงิน</span>

<!-- After -->
<span class="step-label">{{ t('checkout.progressStep1') }}</span>
<span class="step-label">{{ t('checkout.progressStep2') }}</span>
<span class="step-label">{{ t('checkout.progressStep3') }}</span>
```

### Special Offer Section (Lines 44-45)
```vue
<!-- Before -->
<h2 class="offer-title">ข้อเสนอพิเศษ!</h2>
<p class="offer-subtitle">อัปเกรดรถของคุณในราคาพิเศษก่อนสิ้นสุดโปรโมชั่น</p>

<!-- After -->
<h2 class="offer-title">{{ t('checkout.specialOfferTitle') }}</h2>
<p class="offer-subtitle">{{ t('checkout.specialOfferSubtitle') }}</p>
```

### Offer Cards (Lines 50, 66, 70-74)
```vue
<!-- Before -->
<div class="offer-badge">ประหยัด 15%</div>
<span>{{ car.seats }} ที่นั่ง</span>
<div class="original-price">฿{{ car.originalPrice }}/วัน</div>
<div class="offer-price">฿{{ car.offerPrice }}/วัน</div>
<button class="upgrade-button" @click="selectUpgrade(car)">อัปเกรดเลย</button>

<!-- After -->
<div class="offer-badge">{{ t('checkout.save') }} 15%</div>
<span>{{ car.seats }} {{ t('checkout.seats') }}</span>
<div class="original-price">฿{{ car.originalPrice }}{{ t('checkout.perDay') }}</div>
<div class="offer-price">฿{{ car.offerPrice }}{{ t('checkout.perDay') }}</div>
<button class="upgrade-button" @click="selectUpgrade(car)">{{ t('checkout.upgradeNow') }}</button>
```

### Driver Information Section (Lines 89, 94, 97)
```vue
<!-- Before -->
<h2 class="section-title">ข้อมูลผู้ขับขี่/ผู้เช่า</h2>
<h3 class="form-subtitle">ผู้เช่า/ผู้ขับขี่</h3>
<label for="sameAsPrimary">ผู้จองคนเดียวกับผู้ขับขี่ (ผู้เช่า)</label>

<!-- After -->
<h2 class="section-title">{{ t('checkout.driverInfoTitle') }}</h2>
<h3 class="form-subtitle">{{ t('checkout.renterDriver') }}</h3>
<label for="sameAsPrimary">{{ t('checkout.sameAsPrimary') }}</label>
```

### Form Fields (Lines 103-118)
```vue
<!-- Before -->
<label>คำนำหน้า <span class="required">*</span></label>
<select v-model="driverInfo.title" class="form-input">
  <option value="">เลือกคำนำหน้า</option>
  <option value="นาย">นาย</option>
  <option value="นาง">นาง</option>
  <option value="นางสาว">นางสาว</option>
</select>

<label>ชื่อ <span class="required">*</span></label>
<input type="text" v-model="driverInfo.firstName" placeholder="กรอกชื่อ" class="form-input" />

<label>นามสกุล <span class="required">*</span></label>
<input type="text" v-model="driverInfo.lastName" placeholder="กรอกนามสกุล" class="form-input" />

<!-- After -->
<label>{{ t('checkout.titlePrefix') }} <span class="required">{{ t('checkout.required') }}</span></label>
<select v-model="driverInfo.title" class="form-input">
  <option value="">{{ t('checkout.selectTitle') }}</option>
  <option value="นาย">{{ t('checkout.mr') }}</option>
  <option value="นาง">{{ t('checkout.mrs') }}</option>
  <option value="นางสาว">{{ t('checkout.miss') }}</option>
</select>

<label>{{ t('checkout.firstName') }} <span class="required">{{ t('checkout.required') }}</span></label>
<input type="text" v-model="driverInfo.firstName" :placeholder="t('checkout.firstNamePlaceholder')" class="form-input" />

<label>{{ t('checkout.lastName') }} <span class="required">{{ t('checkout.required') }}</span></label>
<input type="text" v-model="driverInfo.lastName" :placeholder="t('checkout.lastNamePlaceholder')" class="form-input" />
```

### Additional Driver (Lines 125, 130)
```vue
<!-- Before -->
<h3 class="form-subtitle">ผู้ขับขี่เสริม</h3>
<button class="add-button" type="button">
  <svg>...</svg>
  เพิ่มผู้ขับขี่
</button>

<!-- After -->
<h3 class="form-subtitle">{{ t('checkout.additionalDriver') }}</h3>
<button class="add-button" type="button">
  <svg>...</svg>
  {{ t('checkout.addDriver') }}
</button>
```

### Account Information (Lines 169, 174, 178)
```vue
<!-- Before -->
<h2 class="section-title">ข้อมูลบัญชี</h2>
<label>อีเมล <span class="required">*</span></label>
<input type="email" v-model="accountInfo.email" placeholder="example@email.com" class="form-input" />
<label>รหัสผ่าน <span class="required">*</span></label>
<input :type="showPassword ? 'text' : 'password'" v-model="accountInfo.password" placeholder="กรอกรหัสผ่าน" class="form-input" />

<!-- After -->
<h2 class="section-title">{{ t('checkout.accountInfoTitle') }}</h2>
<label>{{ t('checkout.email') }} <span class="required">{{ t('checkout.required') }}</span></label>
<input type="email" v-model="accountInfo.email" :placeholder="t('checkout.emailPlaceholder')" class="form-input" />
<label>{{ t('checkout.password') }} <span class="required">{{ t('checkout.required') }}</span></label>
<input :type="showPassword ? 'text' : 'password'" v-model="accountInfo.password" :placeholder="t('checkout.passwordPlaceholder')" class="form-input" />
```

### Password Validation (Lines 206, 212, 218, 224)
```vue
<!-- Before -->
<span>อย่างน้อย 8 ตัวอักษร</span>
<span>มีตัวพิมพ์ใหญ่</span>
<span>มีตัวเลข</span>
<span>มีอักขระพิเศษ (!@#$%)</span>

<!-- After -->
<span>{{ t('checkout.passwordMin8') }}</span>
<span>{{ t('checkout.passwordUppercase') }}</span>
<span>{{ t('checkout.passwordNumber') }}</span>
<span>{{ t('checkout.passwordSpecial') }}</span>
```

### Contact Information (Lines 237, 242, 254)
```vue
<!-- Before -->
<h2 class="section-title">ข้อมูลติดต่อ</h2>
<label>เบอร์โทรศัพท์ <span class="required">*</span></label>
<input type="tel" v-model="contactInfo.phone" placeholder="812345678" class="form-input phone-input" />
<label>หมายเลขเที่ยวบิน (ถ้ามี)</label>
<input type="text" v-model="contactInfo.flightNumber" placeholder="TG123" class="form-input" />

<!-- After -->
<h2 class="section-title">{{ t('checkout.contactInfoTitle') }}</h2>
<label>{{ t('checkout.phoneNumber') }} <span class="required">{{ t('checkout.required') }}</span></label>
<input type="tel" v-model="contactInfo.phone" :placeholder="t('checkout.phonePlaceholder')" class="form-input phone-input" />
<label>{{ t('checkout.flightNumber') }}</label>
<input type="text" v-model="contactInfo.flightNumber" :placeholder="t('checkout.flightPlaceholder')" class="form-input" />
```

### Tax Invoice (Lines 268, 278, 287, 294)
```vue
<!-- Before -->
<h2 class="section-title">ใบกำกับภาษี</h2>
<span>บุคคลธรรมดา</span>
<span>นิติบุคคล</span>
<label>เลขประจำตัวผู้เสียภาษี <span class="required">*</span></label>
<input type="text" v-model="taxInfo.taxId" placeholder="1234567890123" maxlength="13" class="form-input" />
<span class="input-hint">กรอกเลขประจำตัวผู้เสียภาษี 13 หลัก</span>

<!-- After -->
<h2 class="section-title">{{ t('checkout.taxInvoiceTitle') }}</h2>
<span>{{ t('checkout.personal') }}</span>
<span>{{ t('checkout.company') }}</span>
<label>{{ t('checkout.taxId') }} <span class="required">{{ t('checkout.required') }}</span></label>
<input type="text" v-model="taxInfo.taxId" :placeholder="t('checkout.taxIdPlaceholder')" maxlength="13" class="form-input" />
<span class="input-hint">{{ t('checkout.taxIdHint') }}</span>
```

### Address Section (Lines 336, 341, 349, etc.)
```vue
<!-- Before -->
<h2 class="section-title">ที่อยู่</h2>
<label>ประเทศ <span class="required">*</span></label>
<select v-model="addressInfo.country" class="form-input">
  <option value="">เลือกประเทศ</option>
  <option value="ไทย">ไทย</option>
  <option value="สหรัฐอเมริกา">สหรัฐอเมริกา</option>
</select>

<!-- After -->
<h2 class="section-title">{{ t('checkout.addressTitle') }}</h2>
<label>{{ t('checkout.country') }} <span class="required">{{ t('checkout.required') }}</span></label>
<select v-model="addressInfo.country" class="form-input">
  <option value="">{{ t('checkout.selectCountry') }}</option>
  <option value="ไทย">{{ t('checkout.thailand') }}</option>
  <option value="สหรัฐอเมริกา">{{ t('checkout.usa') }}</option>
</select>
```

### Terms and Conditions (Lines 432, 436)
```vue
<!-- Before -->
<label for="terms">ฉันยอมรับ<a href="/terms">ข้อกำหนดและเงื่อนไข</a></label>
<label for="privacy">ฉันยอมรับ<a href="/privacy-policy">นโยบายความเป็นส่วนตัว</a></label>

<!-- After -->
<label for="terms">{{ t('checkout.acceptTerms') }}<a href="/terms">{{ t('checkout.termsConditions') }}</a></label>
<label for="privacy">{{ t('checkout.acceptTerms') }}<a href="/privacy-policy">{{ t('checkout.privacyPolicy') }}</a></label>
```

### Right Column Summary (Lines 452-453, 462-463, 472-473, 482-483)
```vue
<!-- Before -->
<h3 class="car-title">TOYOTA YARIS CROSS</h3>
<p class="car-subtitle">หรือรถเทียบเท่า</p>
<span>รับรถ</span>
<span>สถานที่รับรถ</span>
<span>คืนรถ</span>
<span>สถานที่คืนรถ</span>

<!-- After -->
<h3 class="car-title">{{ t('checkout.carTitle') }}</h3>
<p class="car-subtitle">{{ t('checkout.carSubtitle') }}</p>
<span>{{ t('checkout.pickup') }}</span>
<span>{{ t('checkout.pickupLocation') }}</span>
<span>{{ t('checkout.return') }}</span>
<span>{{ t('checkout.returnLocation') }}</span>
```

### Payment Breakdown (Lines 499-514)
```vue
<!-- Before -->
<h4 class="breakdown-title">รายละเอียดการชำระเงิน</h4>
<span>ค่าเช่ารถ (2 วัน)</span>
<span>ประกันภัย SCDW</span>
<span>ค่าบริการรับ-ส่ง</span>
<span>ส่วนลด (NEWUSER10)</span>
<span>รวม</span>
<span>ภาษีมูลค่าเพิ่ม (7%)</span>

<!-- After -->
<h4 class="breakdown-title">{{ t('checkout.paymentBreakdown') }}</h4>
<span>{{ t('checkout.carRental') }} (2 {{ t('checkout.days') }})</span>
<span>{{ t('checkout.insurance') }}</span>
<span>{{ t('checkout.deliveryFee') }}</span>
<span>{{ t('checkout.discount') }} (NEWUSER10)</span>
<span>{{ t('checkout.subtotal') }}</span>
<span>{{ t('checkout.vat') }}</span>
```

### Total and Payment Method (Lines 530, 537, 546-563, 572-573)
```vue
<!-- Before -->
<span class="total-label">ยอดรวมทั้งหมด</span>
<h4 class="payment-title">วิธีการชำระเงิน</h4>
<span class="payment-name">ชำระทันที</span>
<span class="discount-badge">ลด 5%</span>
<span class="payment-name">ชำระทีหลัง</span>
<button class="submit-button" @click="proceedToPayment">ดำเนินการต่อ</button>

<!-- After -->
<span class="total-label">{{ t('checkout.grandTotal') }}</span>
<h4 class="payment-title">{{ t('checkout.paymentMethodTitle') }}</h4>
<span class="payment-name">{{ t('checkout.payNow') }}</span>
<span class="discount-badge">{{ t('checkout.discountBadge') }}</span>
<span class="payment-name">{{ t('checkout.payLater') }}</span>
<button class="submit-button" @click="proceedToPayment">{{ t('checkout.proceed') }}</button>
```

### Credit Card Note (Lines 586-591)
```vue
<!-- Before -->
<strong>โปรดเตรียมบัตรเครดิต</strong>
<ul>
  <li>ชื่อบัตรตรงกับชื่อผู้เช่า</li>
  <li>มีวงเงินอย่างน้อย ฿6,000</li>
  <li>ไม่รับบัตรเดบิต</li>
</ul>

<!-- After -->
<strong>{{ t('checkout.creditCardNote') }}</strong>
<ul>
  <li>{{ t('checkout.creditCardName') }}</li>
  <li>{{ t('checkout.creditCardLimit') }}</li>
  <li>{{ t('checkout.creditCardNoDebit') }}</li>
</ul>
```

## Notes:
- All hardcoded Thai text should be replaced with `{{ t('checkout.keyName') }}`
- For placeholders in inputs, use `:placeholder="t('checkout.keyName')"`
- The pattern shown above should be applied consistently throughout the entire file
- Keep all styling and structure intact, only replace text content with translation calls
