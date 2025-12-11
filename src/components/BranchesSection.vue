<template>
  <section class="branches-section">
    <div class="branches-container">
      <h1 class="branches-title">สาขาของเรา</h1>

      <!-- Tabs and Search -->
      <div class="tabs-search-row">
        <!-- Tabs -->
        <div class="tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab', { active: selectedTab === tab.id }]"
            @click="selectedTab = tab.id"
          >
            {{ tab.name }} ({{ tab.count }})
          </button>
        </div>

        <!-- Search Box -->
        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="ค้นหาจุดรับ/ส่งรถ..."
            class="search-input"
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="search-icon">
            <circle cx="9" cy="9" r="6" stroke="#919EAB" stroke-width="1.5" fill="none"/>
            <path d="M13 13l4 4" stroke="#919EAB" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>

      <!-- Branch List -->
      <div class="branches-list">
        <div
          v-for="branch in filteredBranches"
          :key="branch.id"
          class="branch-card"
        >
          <div class="branch-left">
            <div class="branch-status">
              <span class="status-dot"></span>
              <span class="status-text">{{ branch.hours }}</span>
            </div>

            <h3 class="branch-name">{{ branch.name }}</h3>
            <p class="branch-address">{{ branch.address }}</p>
          </div>

          <div class="branch-right">
            <button class="rent-button">
              เช่ารถ
            </button>

            <div class="branch-actions">
              <button class="action-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3h10v10H3V3z" stroke="#637381" stroke-width="1.5" fill="none"/>
                  <path d="M5 1v4M11 1v4M3 6h10" stroke="#637381" stroke-width="1.5"/>
                </svg>
                <span>โทร</span>
              </button>

              <button class="action-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="12" height="8" rx="1" stroke="#637381" stroke-width="1.5" fill="none"/>
                  <path d="M2 5l6 4 6-4" stroke="#637381" stroke-width="1.5"/>
                </svg>
                <span>ส่งอีเมล</span>
              </button>

              <button class="action-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6" r="2" stroke="#637381" stroke-width="1.5" fill="none"/>
                  <path d="M3 13a5 5 0 0110 0" stroke="#637381" stroke-width="1.5" fill="none"/>
                </svg>
                <span>ดูสัมภาร</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <!-- Items per page -->
        <div class="items-per-page">
          <select v-model="itemsPerPage" class="items-select">
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
          <span class="items-label">รายการ/หน้า</span>
        </div>

        <!-- Page Numbers -->
        <div class="page-numbers">
          <button class="page-arrow" :disabled="currentPage === 1" @click="currentPage--">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 6L8 10L12 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button
            v-for="page in visiblePages"
            :key="page"
            :class="['page-number', { active: page === currentPage }]"
            @click="currentPage = page"
          >
            {{ page }}
          </button>

          <button class="page-arrow" @click="currentPage++">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 6L12 10L8 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="why-choose-section">
      <div class="why-choose-container">
        <h2 class="why-choose-title">เพราะเราเข้าใจ<br />ทุกความต้องการ</h2>
        <p class="why-choose-subtitle">ของทุกการเดินทาง</p>

        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M32 20v16l8 8" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="feature-text">ปลอดล็อค ทุกการเดินทาง</p>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M20 32h24M32 20l12 12-12 12" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="feature-text">อิสระ ทุกการเดินทาง</p>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M24 40l8-16 8 16M28 35h8" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="feature-text">คุณภาพที่ดี ทุกการเดินทาง</p>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="white"/>
                <path d="M22 28l10 10 16-16" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="feature-text">อบอุ่น ทุกการเดินทาง</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedTab = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(6)
const visiblePages = ref([1])

const tabs = ref([
  { id: 'all', name: 'ทั้งหมด', count: 11 },
  { id: 'airport', name: 'สนามบิน', count: 8 },
  { id: 'branch', name: 'สาขา', count: 3 }
])

const branches = ref([
  {
    id: 1,
    type: 'airport',
    name: 'Suvarnabhumi Airport',
    address: 'ASAP Front desk is located on the 2nd floor, between exit 7 and 8, Suvarnabhumi Airport',
    hours: '08.00 น. - 00:00 น.'
  },
  {
    id: 2,
    type: 'airport',
    name: 'Don Mueang International Airport',
    address: 'ASAP front desk is located in the Domestic Airport Terminal 2, Exit 11, Don Mueang International Airport',
    hours: '08.00 น. - 21:00 น.'
  },
  {
    id: 3,
    type: 'airport',
    name: 'Chiang Mai International Airport',
    address: 'ASAP Front desk is located on the 1st floor exit 2 infront of Domestic arrival gate, Chiang Mai International Airport.',
    hours: '08.00 น. - 21:00 น.'
  },
  {
    id: 4,
    type: 'airport',
    name: 'Phuket International Airport',
    address: 'ASAP front desk is located on the 1st floor in the domestic arrival Terminal, exit 1, Phuket International Airport',
    hours: '08.00 น. - 00:00 น.'
  },
  {
    id: 5,
    type: 'airport',
    name: 'Hat Yai International Airport',
    address: 'ASAP front desk is located on the 1st floor, exit 8, Hat Yai International Airport',
    hours: '08.00 น. - 21:00 น.'
  },
  {
    id: 6,
    type: 'airport',
    name: 'Samui  International Airport',
    address: 'ASAP front desk is located in the Meeting Area near arrival hall, Samui Airport',
    hours: '08.00 น. - 18:00 น.'
  },
  {
    id: 7,
    type: 'airport',
    name: 'Udon Thani Airport',
    address: '557/5 Moo 5, Soi Ban Nong Tao Lek, Mak Khaeng, Muang, Udon Thani 41000, Thailand',
    hours: '08.00 น. - 18:00 น.'
  },
  {
    id: 8,
    type: 'airport',
    name: 'Krabi International Airport',
    address: '383 Charoen Mueang Road, Wat Ket Subdistrict, Mueang Chiang Mai District, Chiang Mai 50000',
    hours: '08.00 น. - 21:00 น.'
  },
  {
    id: 9,
    type: 'branch',
    name: 'Thepharak',
    address: '149 Moo 3, Theparak Road, Theparak Subdistrict, Mueang District, Samut Prakan 10270',
    hours: '08.00 น. - 18:00 น.'
  },
  {
    id: 10,
    type: 'branch',
    name: 'Asap Car rental Sadao Branch (Dannok)',
    address: 'Oscar Palace Hotel 108 Moo 7 Samnukkham, Samnak Kham, Sadao, Songkhla Province, 90320, Thailand',
    hours: '08.00 น. - 17:00 น.'
  },
  {
    id: 11,
    type: 'branch',
    name: 'asap Select Chiang Mai',
    address: '383 Charoen Mueang Road, Wat Ket Subdistrict, Mueang Chiang Mai District, Chiang Mai 50000',
    hours: '08.00 น. - 17:00 น.'
  }
])

const filteredBranches = computed(() => {
  let result = branches.value

  // Filter by tab
  if (selectedTab.value !== 'all') {
    result = result.filter(b => b.type === selectedTab.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(b =>
      b.name.toLowerCase().includes(query) ||
      b.address.toLowerCase().includes(query)
    )
  }

  return result
})
</script>

<style scoped>
.branches-section {
  background: white;
  padding: 80px 0 0 0;
  min-height: 100vh;
}

.branches-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 32px 80px 32px;
}

.branches-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #000;
  text-align: left;
  margin: 0 0 32px 0;
  line-height: 1.587;
}

.tabs-search-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 24px;
}

.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid #DFE3E8;
}

.tab {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #637381;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 16px 24px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  margin-bottom: -1px;
}

.tab:hover {
  color: #FF595A;
}

.tab.active {
  color: #FF595A;
  border-bottom-color: #FF595A;
}

.search-box {
  position: relative;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 14px 44px 14px 16px;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #161c24;
  outline: none;
  transition: border-color 0.2s;
  background: white;
}

.search-input:focus {
  border-color: #FF595A;
}

.search-input::placeholder {
  color: #919EAB;
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.branches-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 48px;
}

.branch-card {
  background: white;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  transition: all 0.2s;
  border-bottom: 1px solid #DFE3E8;
}

.branch-card:last-child {
  border-bottom: none;
}

.branch-left {
  flex: 1;
}

.branch-status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22C55E;
  border-radius: 50%;
}

.status-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #22C55E;
}

.branch-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
}

.branch-address {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #637381;
  line-height: 1.6;
  margin: 0;
}

.branch-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

.rent-button {
  background: #FF595A;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 12px 32px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.rent-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(255, 89, 90, 0.3);
}

.branch-actions {
  display: flex;
  gap: 16px;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 13px;
  color: #637381;
  cursor: pointer;
  transition: color 0.2s;
  padding: 4px;
}

.action-button:hover {
  color: #FF595A;
}

.action-button:hover svg path,
.action-button:hover svg rect,
.action-button:hover svg circle {
  stroke: #FF595A;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.items-per-page {
  display: flex;
  align-items: center;
  gap: 8px;
}

.items-select {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #161c24;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  outline: none;
}

.items-label {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  color: #637381;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-arrow {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #637381;
}

.page-arrow:hover:not(:disabled) {
  border-color: #FF595A;
  color: #FF595A;
}

.page-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #DFE3E8;
  border-radius: 8px;
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #637381;
  cursor: pointer;
  transition: all 0.2s;
}

.page-number:hover {
  border-color: #FF595A;
  color: #FF595A;
}

.page-number.active {
  background: #FF595A;
  border-color: #FF595A;
  color: white;
}

/* Why Choose Us Section */
.why-choose-section {
  background: #FF595A;
  padding: 60px 0;
  border-top-right-radius: 40px;
}

.why-choose-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  text-align: center;
}

.why-choose-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.3;
}

.why-choose-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin: 8px 0 48px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.feature-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin: 0;
  text-align: center;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .branches-section {
    padding: 80px 0 0 0;
  }

  .branches-title {
    font-size: 26px;
  }

  .tabs-search-row {
    flex-direction: column;
    align-items: stretch;
  }

  .tabs {
    overflow-x: auto;
  }

  .tab {
    font-size: 16px;
    padding: 12px 16px;
  }

  .search-box {
    width: 100%;
  }

  .branch-card {
    flex-direction: column;
  }

  .branch-name {
    font-size: 20px;
  }

  .branch-right {
    width: 100%;
    align-items: stretch;
  }

  .rent-button {
    width: 100%;
  }

  .branch-actions {
    justify-content: space-between;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .pagination {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
