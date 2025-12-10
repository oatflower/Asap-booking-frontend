# Translation Quick Reference Guide

## How to Use Translations in Components

### 1. Import the composable
```javascript
import { useLanguage } from '@/composables/useLanguage'
```

### 2. Get the translation function
```javascript
const { t } = useLanguage()
```

### 3. Use in templates

#### For regular text:
```vue
<h1>{{ t('checkout.driverInfoTitle') }}</h1>
<span>{{ t('payment.totalPrice') }}</span>
```

#### For placeholders:
```vue
<input :placeholder="t('checkout.emailPlaceholder')" />
<input :placeholder="t('payment.phonePlaceholder')" />
```

#### For dynamic content with variables:
```vue
<span>{{ t('checkout.carRental') }} (2 {{ t('checkout.days') }})</span>
<span>{{ t('payment.carRental') }} (x2 {{ t('payment.days') }})</span>
```

## Complete Translation Key List

### Checkout Page Keys (checkout.*)

```
checkout.timerText
checkout.minutes
checkout.progressStep1
checkout.progressStep2
checkout.progressStep3
checkout.specialOfferTitle
checkout.specialOfferSubtitle
checkout.save
checkout.seats
checkout.perDay
checkout.upgradeNow
checkout.driverInfoTitle
checkout.renterDriver
checkout.sameAsPrimary
checkout.titlePrefix
checkout.selectTitle
checkout.mr
checkout.mrs
checkout.miss
checkout.firstName
checkout.firstNamePlaceholder
checkout.lastName
checkout.lastNamePlaceholder
checkout.additionalDriver
checkout.addDriver
checkout.accountInfoTitle
checkout.email
checkout.emailPlaceholder
checkout.password
checkout.passwordPlaceholder
checkout.passwordMin8
checkout.passwordUppercase
checkout.passwordNumber
checkout.passwordSpecial
checkout.contactInfoTitle
checkout.phoneNumber
checkout.phonePlaceholder
checkout.flightNumber
checkout.flightPlaceholder
checkout.taxInvoiceTitle
checkout.personal
checkout.company
checkout.taxId
checkout.taxIdPlaceholder
checkout.taxIdHint
checkout.contactName
checkout.contactLastName
checkout.addressTitle
checkout.country
checkout.selectCountry
checkout.thailand
checkout.usa
checkout.province
checkout.selectProvince
checkout.bangkok
checkout.chiangmai
checkout.phuket
checkout.district
checkout.selectDistrict
checkout.subDistrict
checkout.selectSubDistrict
checkout.houseType
checkout.selectHouseType
checkout.house
checkout.condo
checkout.apartment
checkout.houseNumber
checkout.houseNumberPlaceholder
checkout.village
checkout.villagePlaceholder
checkout.building
checkout.buildingPlaceholder
checkout.soi
checkout.soiPlaceholder
checkout.road
checkout.roadPlaceholder
checkout.postalCode
checkout.postalCodePlaceholder
checkout.fullAddress
checkout.acceptTerms
checkout.termsConditions
checkout.privacyPolicy
checkout.carTitle
checkout.carSubtitle
checkout.pickup
checkout.pickupLocation
checkout.return
checkout.returnLocation
checkout.paymentBreakdown
checkout.carRental
checkout.days
checkout.insurance
checkout.deliveryFee
checkout.discount
checkout.subtotal
checkout.vat
checkout.grandTotal
checkout.paymentMethodTitle
checkout.payNow
checkout.payLater
checkout.discountBadge
checkout.proceed
checkout.creditCardNote
checkout.creditCardName
checkout.creditCardLimit
checkout.creditCardNoDebit
checkout.required
```

### Payment Page Keys (payment.*)

```
payment.timerText
payment.minutes
payment.gatewayTitle
payment.gatewaySubtitle
payment.carStatus
payment.renterDriver
payment.additionalDriver
payment.email
payment.phoneNumber
payment.pickupDropoffTitle
payment.pickupPoint
payment.dropoffPoint
payment.pickupService
payment.dropoffService
payment.serviceCharges
payment.carRental
payment.days
payment.insurance
payment.cdw
payment.cdwDescription
payment.additionalServices
payment.childSeat
payment.childSeatDescription
payment.specialAssistance
payment.specialAssistanceDescription
payment.totalToPay
payment.bookingInfo
payment.paymentTitle
payment.payNow
payment.payEarlySave
payment.payFullAmount
payment.noCancel
payment.acceptPrivacy
payment.ageRequirement
payment.creditCardTitle
payment.creditCardName
payment.creditCardLimit
payment.creditCardNoDebit
payment.totalPrice
payment.vat
payment.totalNet
payment.payButton
```

## Common Patterns

### Form Fields
```vue
<label>{{ t('checkout.email') }} <span class="required">{{ t('checkout.required') }}</span></label>
<input
  type="email"
  v-model="accountInfo.email"
  :placeholder="t('checkout.emailPlaceholder')"
  class="form-input"
/>
```

### Select Dropdowns
```vue
<select v-model="driverInfo.title" class="form-input">
  <option value="">{{ t('checkout.selectTitle') }}</option>
  <option value="mr">{{ t('checkout.mr') }}</option>
  <option value="mrs">{{ t('checkout.mrs') }}</option>
  <option value="miss">{{ t('checkout.miss') }}</option>
</select>
```

### Buttons
```vue
<button class="submit-button" @click="proceedToPayment">
  {{ t('checkout.proceed') }}
</button>
```

### Checkboxes with Links
```vue
<label for="terms">
  {{ t('checkout.acceptTerms') }}
  <a href="/terms">{{ t('checkout.termsConditions') }}</a>
</label>
```

### Dynamic Content
```vue
<span>{{ t('checkout.carRental') }} (2 {{ t('checkout.days') }})</span>
<span>{{ t('checkout.vat') }}</span>
```

## Testing Translations

To test different languages, the user can switch languages using the language selector in the navigation. The composable uses localStorage to persist the language choice.

## Tips

1. **Always use the t() function** - Never hardcode text in Thai, English, or Chinese
2. **Keep structure intact** - Only replace text content, not HTML structure or classes
3. **Use proper binding** - Use `:placeholder` for placeholders, not `placeholder`
4. **Be consistent** - Use the same translation key for the same text across the app
5. **Test all languages** - Make sure to test with Thai, English, and Chinese

## Search and Replace Examples

You can use these patterns to quickly update files:

### Find:
```
กรุณาทำรายการให้สำเร็จภายใน
```
### Replace:
```
{{ t('checkout.timerText') }}
```

### Find:
```
placeholder="กรอกชื่อ"
```
### Replace:
```
:placeholder="t('checkout.firstNamePlaceholder')"
```

### Find:
```
<span>นาที</span>
```
### Replace:
```
<span>{{ t('checkout.minutes') }}</span>
```
