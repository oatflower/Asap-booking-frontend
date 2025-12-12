<template>
  <div class="car-category-card">
    <div class="card-header">
      <p class="car-count">{{ modelCount }} รุ่น</p>
      <h3 class="category-name">{{ categoryName }}</h3>
    </div>
    <div class="card-body">
      <div class="car-image">
        <img :src="carImage" :alt="categoryName" class="car-img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Import car images
import carEconomy from '@/assets/images/car-economy.svg'
import carCompact from '@/assets/images/car-compact.svg'
import carSedan from '@/assets/images/car-sedan.svg'
import carSuv from '@/assets/images/car-suv.svg'
import carPickup from '@/assets/images/car-pickup.svg'
import carVan from '@/assets/images/car-van.svg'
import carLuxury from '@/assets/images/car-luxury.svg'
import carEv from '@/assets/images/car-ev.svg'

const props = defineProps({
  modelCount: {
    type: Number,
    default: 1
  },
  categoryName: {
    type: String,
    default: 'Economy'
  },
  carType: {
    type: String,
    default: 'economy'
  }
})

const carImages = {
  economy: carEconomy,
  compact: carCompact,
  sedan: carSedan,
  suv: carSuv,
  pickup: carPickup,
  van: carVan,
  luxury: carLuxury,
  ev: carEv
}

const carImage = computed(() => {
  return carImages[props.carType] || carEconomy
})
</script>

<style scoped>
.car-category-card {
  width: 272px;
  height: 244px;
  background: linear-gradient(90deg, #f4f6f8 0%, #f4f6f8 100%);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.car-category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.car-count {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: black;
  opacity: 0.7;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.5%;
  line-height: 1.587;
}

.category-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.5%;
  line-height: 1.587;
}

.card-body {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

.car-image {
  width: 100%;
  height: 139px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.car-img {
  width: 255px;
  height: 139px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .car-category-card {
    width: 100%;
    max-width: 300px;
  }
}
</style>
