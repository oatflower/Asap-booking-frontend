<template>
  <section class="branch-selection-section">
    <div class="branch-container">
      <!-- Content Area -->
      <div class="content-wrapper">
        <!-- Destination Images -->
        <div class="destinations-wrapper">
          <!-- Left Image - Krabi -->
          <div class="destination-card left">
            <img
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop"
              alt="กระบี่"
              class="destination-image"
            />
            <div class="location-tag">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" fill="white"/>
              </svg>
              <span>กระบี่</span>
            </div>
          </div>

          <!-- Center Image with Car - Bangkok -->
          <div class="destination-card center">
            <img
              src="https://images.unsplash.com/photo-1563492065213-f0e8a469d6f7?w=800&h=400&fit=crop"
              alt="กรุงเทพมหานคร"
              class="destination-image"
            />
            <div class="location-tag">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" fill="white"/>
              </svg>
              <span>กรุงเทพมหานคร</span>
            </div>

            <!-- Car Overlay -->
            <div class="car-overlay">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=300&fit=crop"
                alt="Car"
                class="car-image"
              />
            </div>
          </div>

          <!-- Right Image - Krabi -->
          <div class="destination-card right">
            <img
              src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop"
              alt="กระบี่"
              class="destination-image"
            />
            <div class="location-tag">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" fill="white"/>
              </svg>
              <span>กระบี่</span>
            </div>
          </div>
        </div>

        <!-- Booking Section -->
        <div class="booking-section">
          <h2 class="booking-title">เลือกสาขารับรถ & จองเลย</h2>

          <div class="booking-controls">
            <!-- Branch Dropdown -->
            <div class="dropdown-wrapper">
              <select v-model="selectedBranch" class="branch-dropdown">
                <option value="กรุงเทพ - สนามบิน สุวรรณภูมิ">กรุงเทพ - สนามบิน สุวรรณภูมิ</option>
                <option value="กรุงเทพ - สนามบิน ดอนเมือง">กรุงเทพ - สนามบิน ดอนเมือง</option>
                <option value="เชียงใหม่ - สนามบิน เชียงใหม่">เชียงใหม่ - สนามบิน เชียงใหม่</option>
                <option value="ภูเก็ต - สนามบิน ภูเก็ต">ภูเก็ต - สนามบิน ภูเก็ต</option>
                <option value="กระบี่ - สนามบิน กระบี่">กระบี่ - สนามบิน กระบี่</option>
                <option value="สมุย - สนามบิน สมุย">สมุย - สนามบิน สมุย</option>
              </select>
              <svg class="dropdown-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <!-- Book Now Button -->
            <button class="book-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="8" cy="8" r="6" stroke="white" stroke-width="2"/>
                <path d="M13 13L17 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>จองเลย</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedBranch = ref('กรุงเทพ - สนามบิน สุวรรณภูมิ')
</script>

<style scoped>
.branch-selection-section {
  background: white;
  padding: 0;
  width: 100%;
  position: relative;
}

.branch-container {
  width: 100%;
  min-height: 600px;
}

.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(248, 250, 251, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
}

.destinations-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 0;
  height: 400px;
  position: relative;
}

.destination-card {
  position: relative;
  overflow: hidden;
}

.destination-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.destination-card.left .destination-image {
  border-radius: 0 0 120px 0;
}

.destination-card.right .destination-image {
  border-radius: 0 0 0 120px;
}

.location-tag {
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: white;
}

.destination-card.center {
  position: relative;
  z-index: 2;
}

.car-overlay {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(30%);
  width: 500px;
  height: 250px;
  z-index: 10;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.2));
}

.car-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.booking-section {
  padding: 80px 200px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: white;
}

.booking-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  text-align: center;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.21px;
}

.booking-controls {
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 800px;
}

.dropdown-wrapper {
  flex: 1;
  position: relative;
}

.branch-dropdown {
  width: 100%;
  height: 56px;
  padding: 0 48px 0 20px;
  border: 1px solid #dfe3e8;
  border-radius: 8px;
  background: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #161c24;
  cursor: pointer;
  appearance: none;
  transition: all 0.2s;
}

.branch-dropdown:hover {
  border-color: #c4cdd5;
}

.branch-dropdown:focus {
  outline: none;
  border-color: #ff595a;
  box-shadow: 0 0 0 3px rgba(255, 89, 90, 0.1);
}

.dropdown-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.book-button {
  height: 56px;
  padding: 0 32px;
  background: linear-gradient(135deg, #ff595a 0%, #ff3d3e 100%);
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0px 4px 12px rgba(255, 89, 90, 0.3);
  white-space: nowrap;
}

.book-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 16px rgba(255, 89, 90, 0.4);
}

.book-button:active {
  transform: translateY(0);
}

@media (max-width: 1440px) {
  .booking-section {
    padding: 60px 100px;
  }
}

@media (max-width: 1024px) {
  .destinations-wrapper {
    height: 300px;
  }

  .booking-section {
    padding: 60px 40px;
  }

  .booking-title {
    font-size: 36px;
  }

  .car-overlay {
    width: 400px;
    height: 200px;
  }

  .location-tag {
    font-size: 12px;
    padding: 6px 12px;
  }
}

@media (max-width: 768px) {
  .destinations-wrapper {
    grid-template-columns: 1fr;
    height: auto;
  }

  .destination-card {
    height: 200px;
  }

  .destination-card.left,
  .destination-card.right {
    display: none;
  }

  .destination-card.center .destination-image {
    border-radius: 0;
  }

  .car-overlay {
    width: 280px;
    height: 140px;
    transform: translateX(-50%) translateY(20%);
  }

  .booking-section {
    padding: 100px 20px 60px;
  }

  .booking-title {
    font-size: 28px;
  }

  .booking-controls {
    flex-direction: column;
    gap: 12px;
  }

  .branch-dropdown,
  .book-button {
    height: 48px;
    font-size: 14px;
  }

  .book-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
