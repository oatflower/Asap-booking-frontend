<template>
  <section class="faq-section">
    <div class="faq-container">
      <h1 class="faq-title">คำถามที่พบบ่อย</h1>

      <!-- FAQ Categories -->
      <div class="faq-categories">
        <!-- Category 1 -->
        <div class="faq-category">
          <h2 class="category-title">การเปลี่ยนแปลง/ยกเลิกการจอง</h2>

          <div class="faq-items">
            <div
              v-for="(item, index) in booking"
              :key="index"
              class="faq-item"
            >
              <button
                :class="['faq-question', { active: item.isOpen }]"
                @click="toggleItem('booking', index)"
              >
                <span>{{ item.question }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="['toggle-icon', { rotated: item.isOpen }]"
                >
                  <path d="M6 8l4 4 4-4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="item.isOpen" class="faq-answer">
                <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Category 2 -->
        <div class="faq-category">
          <h2 class="category-title">การรับ-คืนรถ</h2>

          <div class="faq-items">
            <div
              v-for="(item, index) in pickupReturn"
              :key="index"
              class="faq-item"
            >
              <button
                :class="['faq-question', { active: item.isOpen }]"
                @click="toggleItem('pickupReturn', index)"
              >
                <span>{{ item.question }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="['toggle-icon', { rotated: item.isOpen }]"
                >
                  <path d="M6 8l4 4 4-4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="item.isOpen" class="faq-answer">
                <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Category 3 -->
        <div class="faq-category">
          <h2 class="category-title">เอกสารที่ต้องใช้</h2>

          <div class="faq-items">
            <div
              v-for="(item, index) in documents"
              :key="index"
              class="faq-item"
            >
              <button
                :class="['faq-question', { active: item.isOpen }]"
                @click="toggleItem('documents', index)"
              >
                <span>{{ item.question }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="['toggle-icon', { rotated: item.isOpen }]"
                >
                  <path d="M6 8l4 4 4-4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="item.isOpen" class="faq-answer">
                <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Category 4 -->
        <div class="faq-category">
          <h2 class="category-title">ประเภทและประกันของรถ</h2>

          <div class="faq-items">
            <div
              v-for="(item, index) in carInsurance"
              :key="index"
              class="faq-item"
            >
              <button
                :class="['faq-question', { active: item.isOpen }]"
                @click="toggleItem('carInsurance', index)"
              >
                <span>{{ item.question }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="['toggle-icon', { rotated: item.isOpen }]"
                >
                  <path d="M6 8l4 4 4-4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="item.isOpen" class="faq-answer">
                <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Category 5 -->
        <div class="faq-category">
          <h2 class="category-title">การชำระเงิน</h2>

          <div class="faq-items">
            <div
              v-for="(item, index) in payment"
              :key="index"
              class="faq-item"
            >
              <button
                :class="['faq-question', { active: item.isOpen }]"
                @click="toggleItem('payment', index)"
              >
                <span>{{ item.question }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="['toggle-icon', { rotated: item.isOpen }]"
                >
                  <path d="M6 8l4 4 4-4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="item.isOpen" class="faq-answer">
                <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Category 6 -->
        <div class="faq-category">
          <h2 class="category-title">ติดต่อฝ่ายบริการลูกค้า</h2>

          <div class="faq-items">
            <div
              v-for="(item, index) in customerService"
              :key="index"
              class="faq-item"
            >
              <button
                :class="['faq-question', { active: item.isOpen }]"
                @click="toggleItem('customerService', index)"
              >
                <span>{{ item.question }}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="['toggle-icon', { rotated: item.isOpen }]"
                >
                  <path d="M6 8l4 4 4-4" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="item.isOpen" class="faq-answer">
                <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const booking = ref([
  {
    question: 'เปลี่ยนรับหรือจองรถได้กี่ครั้ง?',
    answer: [
      'Lorem ipsum dolor sit amet consectetur. Enim nisl integer dignissim nisl eget. Est posuere sed eu donec dignissim ut viverra volutpat. Ipsum vulputat placerat hac elit purus tellus ut.',
      'Lorem ipsum dolor sit amet consectetur. Enim nisl integer dignissim nisl eget. Est posuere sed eu donec dignissim ut viverra volutpat. Ipsum vulputat placerat hac elit purus tellus ut.',
      'Lorem ipsum dolor sit amet consectetur. Enim nisl integer dignissim nisl eget. Est posuere sed eu donec dignissim ut viverra volutpat. Ipsum vulputat placerat hac elit purus tellus ut.'
    ],
    isOpen: true
  },
  {
    question: 'ยกเลิกการจองล่วงหน้าก่อนกี่วัน?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'มีค่าธรรมเนียมการยกเลิกหรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  }
])

const pickupReturn = ref([
  {
    question: 'สามารถรับหรือคืนรถนอก/สาขาถูกที่ยิดได้หรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'ต้องมีเงินมัดจำหรือ?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'สามารถเติมน้ำมันซื้อค่าบริษัทหรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  }
])

const documents = ref([
  {
    question: 'ต้องใช้เอกสารอะไรในการรับรถ?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'ใช้ใบขับขี่ต่างประเทศได้หรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'อายุขับขี่ต้องอย่างน้อยก่อทาง?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  }
])

const carInsurance = ref([
  {
    question: 'มีรถประเภทใดให้เลือกบ้าง?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'รถทุกคันประกันภัยหรือไหมทั้งหรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'สามารถเพิ่มประกันเสริมไดนรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  }
])

const payment = ref([
  {
    question: 'รองรับการชำระเงินอย่างไร?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'ต้องชำระขึ้นครั้งหรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'มีค่าธรรมเนียมแบบส่งหมองหรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  }
])

const customerService = ref([
  {
    question: 'ติดต่อสอบวามได้อย่างไร?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'อาจมีการตอบทางทีมบริการกาติดอายุกี่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  },
  {
    question: 'บริการลูกฉบับ 24 ชม. หรือไม่?',
    answer: ['คำตอบสำหรับคำถามนี้'],
    isOpen: false
  }
])

const toggleItem = (category, index) => {
  const categories = {
    booking,
    pickupReturn,
    documents,
    carInsurance,
    payment,
    customerService
  }

  categories[category].value[index].isOpen = !categories[category].value[index].isOpen
}
</script>

<style scoped>
.faq-section {
  background: #F9FAFB;
  padding: 120px 0 80px 0;
  min-height: 100vh;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 32px;
}

.faq-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #161c24;
  text-align: center;
  margin: 0 0 64px 0;
}

.faq-categories {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.faq-category {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.category-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #161c24;
  margin: 0;
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #161c24;
  text-align: left;
}

.faq-question:hover {
  background: #F9FAFB;
}

.faq-question.active {
  color: #FF6B6B;
}

.toggle-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.toggle-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 24px 24px 24px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-answer p {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 15px;
  color: #637381;
  line-height: 1.8;
  margin: 0 0 16px 0;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .faq-section {
    padding: 100px 0 60px 0;
  }

  .faq-title {
    font-size: 32px;
    margin-bottom: 48px;
  }

  .category-title {
    font-size: 20px;
  }

  .faq-question {
    padding: 16px 20px;
    font-size: 15px;
  }

  .faq-answer {
    padding: 0 20px 20px 20px;
  }

  .faq-answer p {
    font-size: 14px;
  }
}
</style>
