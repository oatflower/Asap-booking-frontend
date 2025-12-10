<template>
  <div class="promotion-card">
    <img :src="imageUrl" :alt="title" class="card-image" />
  </div>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.promotion-card {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background: white;
}

.promotion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .promotion-card {
    border-radius: 12px;
  }
}
</style>
