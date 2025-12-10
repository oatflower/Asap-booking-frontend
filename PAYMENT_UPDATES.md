# Payment.vue Translation Updates

This document shows the key changes needed to integrate translations into Payment.vue.

## 1. Import useLanguage at the top of the script section

```vue
<script setup>
import { ref } from 'vue'
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
<span class="timer-text">{{ t('payment.timerText') }} <strong>09:59</strong> {{ t('payment.minutes') }}</span>
```

### Payment Gateway Section (Line 19)
```vue
<!-- Before -->
<div class="gateway-title">ช่องทางการชำระเงิน<br/>ตาม Payment Gateway</div>

<!-- After -->
<div class="gateway-title">{{ t('payment.gatewayTitle') }}<br/>{{ t('payment.gatewaySubtitle') }}</div>
```

### Car Status (Line 33)
```vue
<!-- Before -->
<div class="car-status">สถานะ: รอชำระเงิน</div>

<!-- After -->
<div class="car-status">{{ t('payment.carStatus') }}</div>
```

### Booking Information (Lines 87-94, 99-100, 104-105)
```vue
<!-- Before -->
<span class="info-label">ข้อมูลผู้เช่า/ขับขี่</span>
<span class="info-label">ผู้ขับขี่เสริม</span>
<span class="info-label">อีเมล</span>
<span class="info-label">เบอร์โทรศัพท์</span>

<!-- After -->
<span class="info-label">{{ t('payment.renterDriver') }}</span>
<span class="info-label">{{ t('payment.additionalDriver') }}</span>
<span class="info-label">{{ t('payment.email') }}</span>
<span class="info-label">{{ t('payment.phoneNumber') }}</span>
```

### Pickup/Dropoff Section (Lines 122, 144, 156)
```vue
<!-- Before -->
<div class="section-title">จุดรับ/ส่งรถ</div>
<div class="service-label"><span class="label-bold">จุดรับรถ:</span> + บริการ Pick-Up Service</div>
<div class="service-label"><span class="label-bold">จุดส่งรถ:</span> + บริการ Drop-Off Service</div>

<!-- After -->
<div class="section-title">{{ t('payment.pickupDropoffTitle') }}</div>
<div class="service-label"><span class="label-bold">{{ t('payment.pickupPoint') }}:</span> + {{ t('payment.pickupService') }}</div>
<div class="service-label"><span class="label-bold">{{ t('payment.dropoffPoint') }}:</span> + {{ t('payment.dropoffService') }}</div>
```

### Service Breakdown (Lines 173, 187, 201, 227)
```vue
<!-- Before -->
<div class="breakdown-title">ค่าบริการ</div>
<span class="item-label">ค่าเช่ารถ (x2 วัน)</span>
<span class="item-label">ประกันภัย</span>
<span class="item-label">บริการเสริม</span>

<!-- After -->
<div class="breakdown-title">{{ t('payment.serviceCharges') }}</div>
<span class="item-label">{{ t('payment.carRental') }} (x2 {{ t('payment.days') }})</span>
<span class="item-label">{{ t('payment.insurance') }}</span>
<span class="item-label">{{ t('payment.additionalServices') }}</span>
```

### Insurance Detail (Lines 211, 217)
```vue
<!-- Before -->
<span class="detail-box-title">CDW</span>
<div class="detail-box-description">คุ้มครองความเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท</div>

<!-- After -->
<span class="detail-box-title">{{ t('payment.cdw') }}</span>
<div class="detail-box-description">{{ t('payment.cdwDescription') }}</div>
```

### Additional Services (Lines 238, 244, 248, 255)
```vue
<!-- Before -->
<span class="detail-box-title">Child Seat</span>
<div class="detail-box-description">อุปกรณ์เพื่อความปลอดภัยของเด็กขณะเดินทาง</div>
<span class="detail-box-title">Special assistance</span>
<div class="detail-box-description">บริการช่วยเหลือพิเศษที่ผู้ให้บริการจัดเตรียมไว้ให้</div>

<!-- After -->
<span class="detail-box-title">{{ t('payment.childSeat') }}</span>
<div class="detail-box-description">{{ t('payment.childSeatDescription') }}</div>
<span class="detail-box-title">{{ t('payment.specialAssistance') }}</span>
<div class="detail-box-description">{{ t('payment.specialAssistanceDescription') }}</div>
```

### Right Column Summary (Lines 265, 272, 283)
```vue
<!-- Before -->
<h2 class="summary-title">ยอดที่ต้องชำระทั้งหมด</h2>
<span class="header-label">ข้อมูลการจอง</span>
<h3 class="payment-section-title">การชำระเงิน</h3>

<!-- After -->
<h2 class="summary-title">{{ t('payment.totalToPay') }}</h2>
<span class="header-label">{{ t('payment.bookingInfo') }}</span>
<h3 class="payment-section-title">{{ t('payment.paymentTitle') }}</h3>
```

### Payment Method Details (Lines 288, 305, 311, 317)
```vue
<!-- Before -->
<span class="payment-name">ชำระทันที</span>
<span>จ่ายก่อนประหยัดกว่า</span>
<span>ชำระเต็มจำนวน</span>
<span>ไม่สามารถยกลิกและเปลี่ยนแปลงการเช่าได้</span>

<!-- After -->
<span class="payment-name">{{ t('payment.payNow') }}</span>
<span>{{ t('payment.payEarlySave') }}</span>
<span>{{ t('payment.payFullAmount') }}</span>
<span>{{ t('payment.noCancel') }}</span>
```

### Terms Checkboxes (Lines 335, 347)
```vue
<!-- Before -->
<span class="checkbox-text">ฉันได้อ่านและยอมรับข้อกำหนดและเงื่อนไขที่ระบุไว้ใน นโยบายความเป็นส่วนตัว</span>
<span class="checkbox-text">ผู้ขับขี่อายุมากกว่า 21 ปี *ต้องมีใบขับขี่อย่างน้อย 1 ปี</span>

<!-- After -->
<span class="checkbox-text">{{ t('payment.acceptPrivacy') }}</span>
<span class="checkbox-text">{{ t('payment.ageRequirement') }}</span>
```

### Credit Card Note (Lines 359, 365-367)
```vue
<!-- Before -->
<span class="note-title">โปรดเตรียมบัตรเครดิตตัวจริงสำหรับวางมัดจำ</span>
<div class="note-content">
  ชื่อบัตร ชื่อเดียวกันกับชื่อผู้จอง<br/>
  มีวงเงินอย่างน้อย 6,000 บาท<br/>
  ไม่รับบัตรเดบิต, บัตรเครดิตของบุคคลอื่น
</div>

<!-- After -->
<span class="note-title">{{ t('payment.creditCardTitle') }}</span>
<div class="note-content">
  {{ t('payment.creditCardName') }}<br/>
  {{ t('payment.creditCardLimit') }}<br/>
  {{ t('payment.creditCardNoDebit') }}
</div>
```

### Price Summary (Lines 376, 384, 392)
```vue
<!-- Before -->
<span class="summary-label">ราคารวม</span>
<span class="summary-label">ภาษีมูลค่าเพิ่ม (7%)</span>
<span class="summary-label-total">ราคารวมสุทธิ</span>

<!-- After -->
<span class="summary-label">{{ t('payment.totalPrice') }}</span>
<span class="summary-label">{{ t('payment.vat') }}</span>
<span class="summary-label-total">{{ t('payment.totalNet') }}</span>
```

### Submit Button (Line 402)
```vue
<!-- Before -->
<button class="submit-button" @click="processPayment">ชำระเงิน</button>

<!-- After -->
<button class="submit-button" @click="processPayment">{{ t('payment.payButton') }}</button>
```

## Notes:
- All hardcoded Thai text should be replaced with `{{ t('payment.keyName') }}`
- For dynamic content that includes variables, use template strings or concatenation with translation functions
- The pattern shown above should be applied consistently throughout the entire file
- Keep all styling and structure intact, only replace text content with translation calls
- Some numeric values and data-specific content (like dates, prices, car names) should remain dynamic
