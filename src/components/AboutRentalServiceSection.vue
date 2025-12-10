<template>
  <section class="about-rental-section">
    <div class="rental-container">
      <!-- Left Column: Images -->
      <div class="left-column">
        <div class="image-grid">
          <div class="image-wrapper left-image">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop"
              alt="Car Rental Counter"
              class="rental-image"
            />
          </div>
          <div class="image-wrapper right-image">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=800&fit=crop"
              alt="Driving Experience"
              class="rental-image"
            />
            <div class="overlay-text">
              <p class="overlay-line">Get there ASAP,</p>
              <p class="overlay-line">Use ASAP.</p>
              <p class="overlay-line location">Don Muang</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Content -->
      <div class="right-column">
        <h2 class="section-title">บริการรถยนต์ให้เช่า</h2>

        <p class="main-description">
          เรามีรถมากกว่า <span class="highlight">9,000</span> คันในระบบ คุณจะได้รับบริการที่รวดเร็ว พร้อมคำปรึกษา และคำแนะนำอย่างตรงจุดทำให้มั่นใจได้ว่าทุกการเดินทางจะตรงเวลาและไม่สะดุด
        </p>

        <p class="sub-description">
          พร้อมกับงานมืออาชีพที่มุ่งเน้นการบริการด้วยใจ มั่นใจได้กับการดูแลช่วยเหลือตลอด 24 ชั่วโมง จากทีมงานมืออาชีพ พร้อมบริการประกันภัยรถยนต์ที่ครอบคลุมทุกการเดินทาง เพื่อให้คุ้มใจในแต่ละจดหมายในทุกเส้นทาง
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-rental-section {
  background: white;
  padding: 80px 0;
  width: 100%;
}

.rental-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Left Column - Images */
.left-column {
  width: 100%;
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
}

.image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.rental-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.left-image {
  border-radius: 24px 0 0 24px;
}

.right-image {
  border-radius: 0 24px 24px 0;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  background: rgba(139, 115, 185, 0.9);
  padding: 32px 24px;
  border-radius: 16px;
  width: 85%;
}

.overlay-line {
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin: 0;
  line-height: 1.4;
}

.overlay-line.location {
  margin-top: 8px;
  font-size: 18px;
}

/* Right Column - Content */
.right-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  line-height: 1.3;
}

.main-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #161c24;
  margin: 0;
  line-height: 1.8;
}

.main-description .highlight {
  color: #FF6B6B;
  font-weight: 700;
}

.sub-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #637381;
  margin: 0;
  line-height: 1.8;
}

@media (max-width: 1440px) {
  .rental-container {
    padding: 0 100px;
    gap: 60px;
  }

  .section-title {
    font-size: 36px;
  }

  .main-description {
    font-size: 17px;
  }

  .sub-description {
    font-size: 15px;
  }
}

@media (max-width: 1024px) {
  .rental-container {
    padding: 0 40px;
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .section-title {
    font-size: 32px;
  }

  .overlay-line {
    font-size: 18px;
  }

  .overlay-line.location {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .about-rental-section {
    padding: 60px 0;
  }

  .rental-container {
    padding: 0 20px;
    gap: 40px;
  }

  .image-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .left-image,
  .right-image {
    border-radius: 16px;
  }

  .image-wrapper {
    aspect-ratio: 4/3;
  }

  .overlay-text {
    padding: 24px 20px;
  }

  .overlay-line {
    font-size: 16px;
  }

  .overlay-line.location {
    font-size: 14px;
  }

  .section-title {
    font-size: 28px;
  }

  .main-description {
    font-size: 16px;
  }

  .sub-description {
    font-size: 15px;
  }
}
</style>
