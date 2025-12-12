<template>
  <section class="branch-selection-section">
    <div class="container">
      <!-- Location Cards Carousel -->
      <div class="carousel-wrapper">
        <div class="carousel-track" :style="{ transform: `translateX(${carouselOffset}px)` }">
          <div
            v-for="(branch, index) in displayBranches"
            :key="index"
            class="location-card"
            :style="{ backgroundImage: `url(${branch.image})` }"
          >
            <div class="location-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C16 17 20 13 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13 8 17 12 21Z" fill="white"/>
                <circle cx="12" cy="9" r="3" fill="#FF595A"/>
              </svg>
              <span>{{ branch.shortName }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Car Image (Fixed Center) -->
      <div class="car-wrapper">
        <img :src="carImage" alt="Car" class="car-image" />
      </div>

      <!-- Content Below Car -->
      <div class="content-wrapper">
        <h2 class="section-title">เลือกสาขารับรถ & จองเลย</h2>

        <!-- Controls -->
        <div class="controls-wrapper">
          <div class="dropdown-container" @click="toggleDropdown" v-click-outside="closeDropdown">
            <div class="selected-option">
              <span>{{ selectedBranch.name }}</span>
              <svg class="chevron-icon" :class="{ rotated: isOpen }" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <transition name="fade">
              <div v-if="isOpen" class="dropdown-options">
                <div
                  v-for="branch in branches"
                  :key="branch.id"
                  class="option"
                  :class="{ active: selectedBranch.id === branch.id }"
                  @click.stop="selectBranch(branch)"
                >
                  {{ branch.name }}
                </div>
              </div>
            </transition>
          </div>

          <button class="book-button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.75 15.75L12.4875 12.4875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            จองเลย
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Import images
import imgBangkok from '@/assets/images/branch-bangkok-new-70c080.png'
import imgPhuket from '@/assets/images/branch-phuket-new-70c080.png'
import imgKrabi from '@/assets/images/branch-krabi-new.png'
import carImage from '@/assets/images/branch-car-new-4714f6.png'

const branches = [
  { id: 'bkk', name: 'กรุงเทพ - สนามบิน สุวรรณภูมิ', shortName: 'กรุงเทพมหานคร', image: imgBangkok },
  { id: 'kbv', name: 'กระบี่ - อ่าวนาง', shortName: 'กระบี่', image: imgKrabi },
  { id: 'hkt', name: 'ภูเก็ต - สนามบินนานาชาติภูเก็ต', shortName: 'ภูเก็ต', image: imgPhuket }
]

// Create infinite loop array for carousel
const displayBranches = computed(() => {
  return [...branches, ...branches, ...branches]
})

const selectedBranch = ref(branches[0])
const selectedIndex = ref(0)
const isOpen = ref(false)

// Calculate carousel offset based on selected branch
const carouselOffset = computed(() => {
  const cardWidth = 570
  const gap = 32
  const totalCardWidth = cardWidth + gap
  // Center the selected card
  const centerOffset = (window.innerWidth - cardWidth) / 2 - 56
  return centerOffset - (selectedIndex.value + branches.length) * totalCardWidth
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectBranch = (branch) => {
  selectedBranch.value = branch
  selectedIndex.value = branches.findIndex(b => b.id === branch.id)
  isOpen.value = false
}

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<style scoped>
.branch-selection-section {
  padding: 120px 0 64px;
  padding-bottom: 150px;
  background: white;
  width: 100%;
  overflow: visible;
  position: relative;
  z-index: 10;
}

.container {
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

/* Carousel */
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  margin-bottom: -150px;
  position: relative;
  z-index: 1;
}

.carousel-track {
  display: flex;
  gap: 32px;
  transition: transform 0.5s ease-out;
  padding-bottom: 40px;
}

.location-card {
  flex-shrink: 0;
  width: 570px;
  height: 320px;
  border-radius: 32px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  position: relative;
}

.location-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 8px 20px;
  border-radius: 100px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.location-badge span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161C24;
  line-height: 1.587;
}

/* Car */
.car-wrapper {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.car-image {
  width: 492px;
  height: auto;
  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.15));
}

/* Content */
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding-top: 32px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 64px;
  font-weight: 700;
  color: #161C24;
  text-align: center;
  margin: 0;
  opacity: 0.96;
  line-height: 1.587;
}

/* Controls */
.controls-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 0 120px;
  position: relative;
  z-index: 100;
}

.dropdown-container {
  width: 429px;
  position: relative;
  height: 56px;
  background: #F8F8F8;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 14px;
  height: 100%;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161C24;
}

.chevron-icon {
  transition: transform 0.3s;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-options {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  padding: 8px;
  z-index: 9999;
  overflow: hidden;
}

.option {
  padding: 12px 16px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #161C24;
  border-radius: 8px;
  transition: background 0.2s;
}

.option:hover {
  background: #F4F6F8;
}

.option.active {
  background: #FFE9E9;
  color: #FF595A;
  font-weight: 600;
}

.book-button {
  height: 56px;
  padding: 10px 32px;
  background: #FF595A;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s;
  white-space: nowrap;
}

.book-button:hover {
  background: #E84849;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1440px) {
  .container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 48px;
  }

  .location-card {
    width: 450px;
    height: 260px;
  }

  .controls-wrapper {
    padding: 0 60px;
  }
}

@media (max-width: 1024px) {
  .branch-selection-section {
    padding: 80px 0 48px;
  }

  .section-title {
    font-size: 36px;
  }

  .location-card {
    width: 380px;
    height: 220px;
    border-radius: 24px;
  }

  .location-badge span {
    font-size: 22px;
  }

  .car-image {
    width: 400px;
  }

  .controls-wrapper {
    padding: 0 20px;
    flex-direction: column;
  }

  .dropdown-container {
    width: 100%;
    max-width: 400px;
  }

  .book-button {
    width: 100%;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .branch-selection-section {
    padding: 60px 0 40px;
  }

  .carousel-wrapper {
    margin-bottom: -100px;
  }

  .carousel-track {
    gap: 16px;
  }

  .location-card {
    width: 300px;
    height: 180px;
    border-radius: 20px;
  }

  .location-badge {
    padding: 6px 14px;
  }

  .location-badge span {
    font-size: 18px;
  }

  .car-image {
    width: 320px;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>
