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
                  class="toggle-icon"
                >
                  <path v-if="item.isOpen" d="M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
                  <path v-else d="M10 4v12M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
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
                  class="toggle-icon"
                >
                  <path v-if="item.isOpen" d="M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
                  <path v-else d="M10 4v12M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
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
                  class="toggle-icon"
                >
                  <path v-if="item.isOpen" d="M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
                  <path v-else d="M10 4v12M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
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
                  class="toggle-icon"
                >
                  <path v-if="item.isOpen" d="M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
                  <path v-else d="M10 4v12M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
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
                  class="toggle-icon"
                >
                  <path v-if="item.isOpen" d="M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
                  <path v-else d="M10 4v12M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
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
                  class="toggle-icon"
                >
                  <path v-if="item.isOpen" d="M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
                  <path v-else d="M10 4v12M4 10h12" stroke="#161C24" stroke-width="2" stroke-linecap="round"/>
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
  background: white;
  padding: 80px 0;
  min-height: 100vh;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 32px;
}

.faq-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #000;
  text-align: left;
  margin: 0 0 48px 0;
}

.faq-categories {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 16px;
  overflow: hidden;
}

.faq-category {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 24px;
  border-bottom: 1px solid #DFE3E8;
}

.faq-category:last-child {
  border-bottom: none;
}

.category-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #000;
  margin: 0 0 16px 0;
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 0;
  overflow: hidden;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

.faq-item:first-child {
  border-top: none;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  background: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: left;
}

.faq-question:hover {
  color: #FF595A;
}

.faq-question.active {
  font-weight: 700;
  color: #000;
}

.toggle-icon {
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 0 16px 0;
  border-top: 1px solid #DFE3E8;
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
  font-size: 16px;
  color: #637381;
  line-height: 1.6;
  margin: 16px 0 0 0;
}

.faq-answer p:first-child {
  margin-top: 16px;
}

@media (max-width: 768px) {
  .faq-section {
    padding: 80px 0 60px 0;
  }

  .faq-title {
    font-size: 26px;
    margin-bottom: 32px;
  }

  .faq-category {
    padding: 20px;
  }

  .category-title {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .faq-question {
    padding: 14px 0;
    font-size: 15px;
  }

  .faq-answer {
    padding: 0 0 14px 0;
  }

  .faq-answer p {
    font-size: 15px;
    margin-top: 14px;
  }
}
</style>
