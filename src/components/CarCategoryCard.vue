<template>
  <div class="car-category-card">
    <div class="card-header">
      <p class="car-count">{{ modelCount }} รุ่น</p>
      <h3 class="category-name">{{ categoryName }}</h3>
    </div>
    <div class="card-body">
      <div class="car-image">
        <!-- Placeholder for car image -->
        <div class="car-placeholder"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelCount: {
    type: Number,
    default: 1
  },
  categoryName: {
    type: String,
    default: 'Economy'
  }
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
  font-weight: 400;
  font-size: 16px;
  color: black;
  opacity: 0.7;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.08px;
}

.category-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.1px;
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
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.car-placeholder {
  width: 255px;
  height: 100%;
  background: linear-gradient(135deg, #d0d0d0 0%, #e8e8e8 50%, #ffffff 100%);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.car-placeholder::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

@media (max-width: 768px) {
  .car-category-card {
    width: 100%;
    max-width: 300px;
  }
}
</style>
