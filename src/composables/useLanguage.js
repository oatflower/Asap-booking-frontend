import { ref, computed } from 'vue'

// Global state for language
const currentLanguage = ref(localStorage.getItem('language') || 'th')

// Translation dictionary
const translations = {
  th: {
    // Navigation
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับเรา',
      cars: 'รถให้เช่า',
      promotions: 'โปรโมชั่น',
      branches: 'สาขา',
      articles: 'บทความ',
      contact: 'ติดต่อเรา',
      login: 'เข้าสู่ระบบ',
      register: 'สมัครสมาชิก',
      bookingInfo: 'ข้อมูลการจอง',
      manageAccount: 'จัดการบัญชี',
      logout: 'ออกจากระบบ'
    },

    // Search Bar
    search: {
      pickupLocation: 'สถานที่รับรถ',
      returnLocation: 'สถานที่คืนรถ',
      from: 'From:',
      to: 'To:',
      coupon: 'Coupon:',
      searchCar: 'ค้นหารถ',
      bangkok: 'Bangkok',
      suvarnabhumiAirport: 'Suvarnabhumi Airport',
      donMueangAirport: 'Don Mueang International Airport'
    },

    // Online Check-in
    checkin: {
      title: 'เช็คอินออนไลน์',
      subtitle: 'กรุณากรอกข้อมูลและอัพโหลดเอกสารเพื่อทำการเช็คอิน',
      subtitleRetry: 'หรือ เลือกทำอีกครั้งเพื่อให้บริการ พร้อมอบเอกสาร',
      bookingInfo: 'ข้อมูลการจอง',
      bookingCode: 'รหัสจอง',
      pickup: 'รับรถ',
      return: 'คืนรถ',
      importantInfo: 'ข้อมูลสำคัญ',
      creditCardNotice: 'กรุณาเตรียมบัตรเครดิตสำหรับวางเงินมัดจำ ณ จุดรับรถ (ไม่สามารถใช้บัตรเดบิตได้) มัดจำจะถูกคืนให้ภายใน 7-14 วันทำการหลังจากคืนรถ',
      requiredDocuments: 'เอกสารที่ต้องใช้ในการเช่ารถ',
      driverQualifications: 'คุณสมบัติของผู้ขับ',
      uploadDocuments: 'อัพโหลดเอกสาร',
      driverLicense: 'สำเนาใบขับขี่',
      idCard: 'สำเนาบัตรประชาชน',
      required: '*',
      uploadPlaceholder: 'คลิกเพื่ออัพโหลดไฟล์หรือลากไฟล์มาวางที่นี่',
      uploadHint: 'รองรับไฟล์ JPG, PNG หรือ PDF ขนาดไม่เกิน 10MB',
      acceptTerms: 'ข้าพเจ้ายอมรับ',
      termsLink: 'ข้อกำหนดและเงื่อนไข',
      termsText: 'การเช่ารถ',
      certifyDocuments: 'ข้าพเจ้ารับรองว่าเอกสารที่อัพโหลดเป็นเอกสารที่ถูกต้องและยังไม่หมดอายุ',
      submit: 'ส่งข้อมูล',
      successTitle: 'ส่งข้อมูลสำเร็จ',
      successMessage: 'เอกสารของคุณถูกส่งเรียบร้อยแล้ว กรุณารอการตรวจสอบจากเจ้าหน้าที่',
      approvingTitle: 'เช็คอินออนไลน์',
      approvingSubtitle: 'กำลังตรวจสอบเอกสาร',
      pendingStatus: 'รอตรวจสอบเอกสาร',
      approvingMessage: 'เอกสารของคุณอยู่ระหว่างการตรวจสอบ',
      contactInfo: 'หากพบปัญหา โปรดติดต่อ',
      close: 'ปิด',
      viewBooking: 'ดูข้อมูลการจอง',
      errorTitle: 'เอกสารไม่ถูกต้อง',
      errorMessage: 'ส่งเอกสารอีกครั้งหรือ ติดต่อฝ่ายงานเพื่อขอข้อมูลวิธีการ พร้อมอบเอกสาร',
      retryButton: 'เช็คอินออนไลน์',
      days: 'วัน'
    },

    // Booking Confirmation
    confirmation: {
      title: 'เช่ารถสำเร็จ',
      subtitle: 'ระบบส่งสำเนาใบจองไปที่อีเมลแล้ว',
      successBanner: 'เช็คอินสำเร็จ',
      successMessage: 'ไม่ต้องเซ็นต์ \'เอกสารฉบับจริง\' มาใบเขียวอีกครั้ง',
      creditCardTitle: 'โปรดเตรียมบัตรเครดิตตัวจริงสำหรับวางมัดจำ',
      booking: 'ใบจอง',
      status: 'สถานะ',
      statusWaitingCheckin: 'รอเช็คอิน',
      statusPaidWaitingPickup: 'ชำระแล้ว-รอรับรถ',
      customer: 'ลูกค้า',
      fullName: 'ชื่อ-นามสกุล',
      phone: 'เบอร์โทรศัพท์',
      email: 'อีเมล',
      pickupService: 'บริการรับรถ',
      returnService: 'บริการคืนรถ',
      breakdown: 'รายละเอียด',
      carRental: 'ค่าเช่ารถ',
      insurance: 'ประกันภัย CDW',
      services: 'บริการเสริม',
      discount: 'ส่วนลด',
      subtotal: 'รวม',
      vat: 'ภาษีมูลค่าเพิ่ม (7%)',
      total: 'รวมทั้งสิ้น',
      payment: 'การชำระเงิน',
      dateTime: 'Date/Time',
      transactionId: 'Transaction ID',
      paymentMethod: 'Payment Method',
      viewDetails: 'การชำระเงินเสร็จสิ้น',
      home: 'หน้าแรก',
      checkin: 'เช็คอิน'
    },

    // Booking History
    history: {
      title: 'ข้อมูลการจอง',
      ongoing: 'กำลังดำเนินการ',
      completed: 'สิ้นสุดแล้ว',
      bookingCode: 'รหัสจอง',
      status: 'สถานะ',
      statusPaid: 'ชำระเงินสำเร็จ',
      checkinButton: 'เช็คอิน',
      waitingButton: 'รอดำเนินการ',
      detailsButton: 'รายละเอียด'
    },

    // Common
    common: {
      baht: '฿',
      perDay: '/ วัน',
      days: 'วัน',
      readMore: 'อ่านเพิ่มเติม',
      viewDetails: 'ดูรายละเอียด',
      book: 'จองเลย',
      submit: 'ส่ง',
      cancel: 'ยกเลิก',
      save: 'บันทึก',
      edit: 'แก้ไข',
      delete: 'ลบ',
      search: 'ค้นหา',
      filter: 'กรอง',
      all: 'ทั้งหมด'
    },

    // Home Page
    home: {
      title: 'เช่ารถราคาถูก รับส่งสนามบิน',
      subtitle: 'บริการรถเช่าคุณภาพ ราคาย่อมเยา',
      howItWorks: 'วิธีการใช้งาน',
      whyChooseUs: 'ทำไมต้องเลือกเรา',
      popularCars: 'รถยอดนิยม',
      testimonials: 'ความคิดเห็นลูกค้า'
    },

    // About Page
    about: {
      title: 'เกี่ยวกับเรา',
      subtitle: 'ผู้ให้บริการรถเช่าที่คุณไว้วางใจ',
      ourStory: 'เรื่องราวของเรา',
      ourMission: 'พันธกิจของเรา',
      ourVision: 'วิสัยทัศน์ของเรา',
      ourTeam: 'ทีมงานของเรา'
    },

    // Contact Page
    contact: {
      title: 'ติดต่อเรา',
      subtitle: 'มีคำถามหรือข้อสงสัย? ติดต่อเราได้ที่นี่',
      name: 'ชื่อ',
      email: 'อีเมล',
      phone: 'เบอร์โทรศัพท์',
      message: 'ข้อความ',
      send: 'ส่งข้อความ',
      address: 'ที่อยู่',
      workingHours: 'เวลาทำการ',
      followUs: 'ติดตามเรา'
    },

    // Cars Page
    cars: {
      title: 'รถให้เช่า',
      subtitle: 'เลือกรถที่เหมาะกับคุณ',
      filterBy: 'กรองตาม',
      carType: 'ประเภทรถ',
      priceRange: 'ช่วงราคา',
      seats: 'จำนวนที่นั่ง',
      transmission: 'ระบบเกียร์',
      automatic: 'อัตโนมัติ',
      manual: 'ธรรมดา',
      perDay: 'ต่อวัน',
      bookNow: 'จองเลย'
    },

    // Promotions Page
    promotions: {
      title: 'โปรโมชั่น',
      subtitle: 'ข้อเสนอพิเศษสำหรับคุณ',
      activePromotions: 'โปรโมชั่นที่ใช้งานได้',
      expiredPromotions: 'โปรโมชั่นที่หมดอายุ',
      validUntil: 'ใช้ได้ถึง',
      useCode: 'ใช้โค้ด',
      termsConditions: 'ข้อกำหนดและเงื่อนไข'
    },

    // Branches Page
    branches: {
      title: 'จุดรับ-ส่งรถ',
      subtitle: 'สาขาและจุดบริการของเรา',
      airport: 'สนามบิน',
      cityCenter: 'ใจกลางเมือง',
      openingHours: 'เวลาเปิด-ปิด',
      getDirections: 'ดูแผนที่'
    },

    // Articles Page
    articles: {
      title: 'บทความ',
      subtitle: 'เคล็ดลับและข้อมูลน่ารู้',
      categories: 'หมวดหมู่',
      latestArticles: 'บทความล่าสุด',
      popularArticles: 'บทความยอดนิยม',
      publishedOn: 'เผยแพร่เมื่อ'
    },

    // FAQ Page
    faq: {
      title: 'คำถามที่พบบ่อย',
      subtitle: 'คำตอบสำหรับคำถามที่พบบ่อย',
      booking: 'การจอง',
      payment: 'การชำระเงิน',
      insurance: 'ประกันภัย',
      driverRequirements: 'คุณสมบัติผู้ขับ',
      cancellation: 'การยกเลิก'
    },

    // Privacy Policy Page
    privacy: {
      title: 'นโยบายความเป็นส่วนตัว',
      subtitle: 'เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ',
      lastUpdated: 'อัปเดตล่าสุด',
      introduction: 'บทนำ',
      dataCollection: 'การเก็บรวบรวมข้อมูล',
      dataUsage: 'การใช้ข้อมูล',
      dataSecurity: 'ความปลอดภัยของข้อมูล',
      yourRights: 'สิทธิของคุณ'
    },

    // Hero Section
    hero: {
      rentWith: 'เช่ารถกับ',
      bestPrice: 'ราคาดีที่สุด',
      startingPrice: 'ราคาเริ่มต้นเพียง 2,000 ฿/วัน',
      carCare: 'รถดูแลดีที่สุด',
      maintenance: 'ดูแลทุกคัน มาตรฐานสูง',
      service: 'บริการดีที่สุด ใส่ใจทุกรายละเอียด',
      pickupLocation: 'รับรถ',
      selectLocation: 'เลือกสถานที่',
      pickupDate: 'วันที่รับรถ',
      pickupTime: 'เวลารับรถ',
      returnDate: 'วันที่คืนรถ',
      returnTime: 'เวลาคืนรถ',
      searchCars: 'ค้นหารถเช่า'
    },

    // Promotion Section
    promotion: {
      monthlyTitle: 'โปรโมชั่นประจำเดือน',
      hotDeals: 'ส่วนลดมากกว่า 30%'
    },

    // Category Section
    category: {
      title: 'หมวดหมู่รถเช่า',
      viewAll: 'ดูทั้งหมด'
    },

    // New Promotion Section
    newPromotion: {
      title: 'โปรโมชั่นใหม่ล่าสุด',
      viewAll: 'ดูทั้งหมด'
    },

    // Location Map Section
    locationMap: {
      title: 'สาขา asap ใกล้คุณ',
      description: 'มีสาขามากกว่า 11 แห่งทั่วประเทศ',
      viewAllBranches: 'ดูสาขาทั้งหมด'
    },

    // Branch Selection Section
    branchSelection: {
      title: 'เลือกสาขาที่สะดวก',
      description: 'รับและคืนรถได้ที่สาขาใดก็ได้',
      allBranches: 'สาขาทั้งหมด',
      airports: 'สนามบิน',
      cityBranches: 'สาขาในเมือง'
    },

    // App Download Section
    appDownload: {
      title: 'ดาวน์โหลดแอป asap',
      description: 'จองรถง่ายกว่าเดิม ใช้งานสะดวก รวดเร็ว',
      downloadOn: 'ดาวน์โหลดได้ที่',
      appStore: 'App Store',
      googlePlay: 'Google Play'
    },

    // Service Cards Section
    serviceCards: {
      title: 'บริการของเรา',
      easyBooking: 'จองง่าย',
      easyBookingDesc: 'จองรถออนไลน์ได้ง่ายๆ ภายในไม่กี่นาที',
      flexibleRental: 'เช่ายืดหยุ่น',
      flexibleRentalDesc: 'เลือกรับ-คืนรถได้ตามสะดวก',
      allInclusive: 'ครบวงจร',
      allInclusiveDesc: 'มีประกันและบริการเสริมครบครัน',
      support247: 'บริการ 24/7',
      support247Desc: 'ทีมงานพร้อมดูแลตลอด 24 ชั่วโมง'
    },

    // Why Choose Us Section
    whyChoose: {
      title: 'ทำไมต้องเลือก',
      titleHighlight: 'asap',
      qualityCars: 'รถคุณภาพ',
      qualityCarsDesc: 'รถทุกคันผ่านการตรวจสอบอย่างละเอียด',
      bestPrice: 'ราคาดีที่สุด',
      bestPriceDesc: 'รับประกันราคาที่คุ้มค่าที่สุด',
      easyProcess: 'ขั้นตอนง่าย',
      easyProcessDesc: 'จองและรับรถได้ง่ายและรวดเร็ว',
      trustworthy: 'น่าเชื่อถือ',
      trustworthyDesc: 'บริการมากว่า 10 ปี มีลูกค้าหลายพันราย'
    },

    // Travel Blog Section
    travelBlog: {
      title: 'บทความท่องเที่ยว',
      readMore: 'อ่านเพิ่มเติม',
      viewAll: 'ดูทั้งหมด'
    },

    // About sections
    aboutHero: {
      title: 'เกี่ยวกับ',
      titleHighlight: 'asap',
      description: 'ผู้ให้บริการรถเช่าชั้นนำของไทย'
    },

    aboutImage: {
      yearsExperience: 'ปี',
      experienceText: 'ประสบการณ์',
      happyCustomers: 'ลูกค้า',
      customersText: 'ที่พึงพอใจ'
    },

    aboutServices: {
      title: 'บริการของเรา',
      service1Title: 'เช่ารถระยะสั้น',
      service1Desc: 'เหมาะสำหรับการเดินทางท่องเที่ยวและทำธุรกิจ',
      service2Title: 'เช่ารถระยะยาว',
      service2Desc: 'แพ็คเกจพิเศษสำหรับการเช่าแบบรายเดือน',
      service3Title: 'บริการรถรับส่ง',
      service3Desc: 'บริการรถรับส่งสนามบินและจุดหมายต่างๆ',
      service4Title: 'ประกันครบวงจร',
      service4Desc: 'ประกันภัยครอบคลุมทุกความเสี่ยง'
    },

    aboutWhyChoose: {
      mainTitle: 'เพราะเรา',
      mainTitleHighlight: 'เข้าใจ',
      mainTitleLine2: 'ทุกความต้องการ',
      subtitle: 'ของทุกการเดินทาง',
      feature1Title: 'ปลดล็อก',
      feature1TitleNormal: 'ทุกการเดินทาง',
      feature1Desc: 'เปิดประสบการณ์การเดินทางแบบไม่มีสิ่งกีดขวาง รักษาไฟล์รายงานนอกเมนูลงทะเบียนรายเดือนบ่งชี้กง เพื่อทุก asap เท่านั้นเป้าหมายรถของเคาเดินทางและกล้า',
      feature2Title: 'อิสระ',
      feature2TitleNormal: 'ทุกการเดินทาง',
      feature2Desc: 'เลือกเส้นทางและเวลาส่งออนใจได้อย่างเต็มที่ ด้วยรถเช่าระดับ จบทั้งหมด ซึ่งทำทางท้องบังประทามรถการเดินทางที่ตรงใจ และไว้กว่าอุดจงทจา',
      feature3Title: 'ทุกมาที่มีค่า',
      feature3TitleNormal: 'ทุกการเดินทาง',
      feature3Desc: 'ระหัสโฉะะนองคุณ ปลากรรวดเจริงและเป็นงเบิยเฮิอง ส่องจำ นุ่มทงของปสมันหน์ และชั้งเกี้ยบยซ่องงงตจา',
      feature4Title: 'อบอุ่น',
      feature4TitleNormal: 'ทุกการเดินทาง',
      feature4Desc: 'เดินทางอย่างมั่นใจด้วยระบบการบริการที่คำนึงถึงความปลอดถัยและดูงดเดกอสจาได รองรับจาร กั้งจ้เคาระหางเรซงเจกงทังจเดียนนกระทบทม ตอบถี 24 ชั่วโมง'
    },

    aboutRentalService: {
      title: 'บริการรถยนต์ให้เช่า',
      carsCount: '9,000',
      mainDesc: 'เรามีรถมากกว่า {count} คันในระบบ คุณจะได้รับบริการที่รวดเร็ว พร้อมคำปรึกษา และคำแนะนำอย่างตรงจุดทำให้มั่นใจได้ว่าทุกการเดินทางจะตรงเวลาและไม่สะดุด',
      subDesc: 'พร้อมกับงานมืออาชีพที่มุ่งเน้นการบริการด้วยใจ มั่นใจได้กับการดูแลช่วยเหลือตลอด 24 ชั่วโมง จากทีมงานมืออาชีพ พร้อมบริการประกันภัยรถยนต์ที่ครอบคลุมทุกการเดินทาง เพื่อให้คุ้มใจในแต่ละจดหมายในทุกเส้นทาง',
      overlayLine1: 'Get there ASAP,',
      overlayLine2: 'Use ASAP.',
      overlayLocation: 'Don Muang'
    },

    aboutLocationMap: {
      title: 'เช่ารถได้สะดวก',
      titleHighlight: 'ทุกจุดหมาย',
      subtitle: 'สาขาครอบคลุมทั้งในกรุงเทพ',
      subtitleLine2: 'สนามบิน และเมืองหลักทั่วประเทศ'
    },

    // Contact Form Section
    contactForm: {
      title: 'ติดต่อ',
      titleHighlight: 'เอแซ็ป',
      firstName: 'ชื่อ',
      firstNamePlaceholder: 'สมชาย',
      lastName: 'นามสกุล',
      lastNamePlaceholder: 'ใจดี',
      emailLabel: 'อีเมล',
      emailPlaceholder: 'Example@gmail.com',
      phoneLabel: 'เบอร์โทรศัพท์',
      phonePlaceholder: '909990000',
      subjectLabel: 'หัวข้อ',
      subjectPlaceholder: 'การเช่ารถมากว่า 1 เดือน',
      messageLabel: 'ข้อความ',
      messagePlaceholder: 'สนใจเช่ารถเป็นระยะเวลา 2 เดือนขึ้นไป มีส่วนลดเพิ่มเติมไหมครับ',
      submit: 'ส่งข้อความ',
      submitSuccess: 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว!',
      companyName: 'บริษัท ชิมแอฮจิคติด ออโต้ เพอร์ฟอร์มานซ์ จำกัด (มหาชน)',
      companyAddress: '149 หมู่ 3 ถ.เทพารักษ์ ต.เทพารักษ์ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270'
    },

    // Car Listing Section
    carListing: {
      allCars: 'ทั้งหมด',
      compact: 'Compact',
      largeCar: 'Large Car',
      suvPpvMpv: 'SUV / PPV / MPV',
      peopleCarriers: 'People Carriers',
      pickupTruck: 'Pickup/Truck',
      evHybrid: 'EV / Hybridge',
      premiumCars: 'Premium Cars',
      filters: 'ตัวกรอง',
      sortBy: 'ตัดให้ดีที่สุด',
      perDay: '/วัน',
      itemsPerPage: 'รายการ/หน้า',
      whyChooseTitle: 'เพราะเราเข้าใจ',
      whyChooseTitleLine2: 'ทุกความต้องการ',
      whyChooseSubtitle: 'ของทุกการเดินทาง',
      feature1: 'ปลอดล็อค ทุกการเดินทาง',
      feature2: 'อิสระ ทุกการเดินทาง',
      feature3: 'คุณภาพที่ดี ทุกการเดินทาง',
      feature4: 'อบอุ่น ทุกการเดินทาง'
    },

    // Promotions Section
    promotionsPage: {
      title: 'โปรโมชั่น',
      searchPlaceholder: 'ค้นหาโปรโมชั่น...',
      sortLabel: 'เรียงตาม',
      sortExpiry: 'วันหมดอายุ',
      sortNewest: 'ใหม่ล่าสุด',
      sortPopular: 'ยอดนิยม',
      useBy: 'ใช้ลงทะเบียน:',
      useCoupon: 'ใช้คูปอง',
      badgeMonth: 'JULY SALE',
      badgeText: 'เข้ารถ',
      promoTitle: 'ถูกคุ้ม',
      promoSubtitle: 'จริง',
      promoSubtitleSmall: 'เกินต้าน',
      downloadVia: 'ดาวน์โหลดผ่าน',
      appName: 'asap app'
    },

    // Branches Page
    branchesPage: {
      title: 'สาขาของเรา',
      searchPlaceholder: 'ค้นหาจุดรับ/ส่งรถ...',
      allTab: 'ทั้งหมด',
      airportTab: 'สนามบิน',
      branchTab: 'สาขา',
      rentCar: 'เช่ารถ',
      call: 'โทร',
      sendEmail: 'ส่งอีเมล',
      viewDetails: 'ดูสัมภาร',
      itemsPerPage: 'รายการ/หน้า',
      whyChooseTitle: 'เพราะเราเข้าใจ',
      whyChooseTitleLine2: 'ทุกความต้องการ',
      whyChooseSubtitle: 'ของทุกการเดินทาง',
      feature1: 'ปลอดล็อค ทุกการเดินทาง',
      feature2: 'อิสระ ทุกการเดินทาง',
      feature3: 'คุณภาพที่ดี ทุกการเดินทาง',
      feature4: 'อบอุ่น ทุกการเดินทาง'
    },

    // Articles Page
    articlesPage: {
      title: 'บทความ',
      searchPlaceholder: 'ค้นหาบทความ...',
      categoryLabel: 'หมวดหมู่',
      categoryAll: 'ทั้งหมด',
      categoryRental: 'เริ่มต้นเช่ารถ',
      categoryBooking: 'การจองและการยกเลิก',
      categoryTips: 'เคล็ดลับและคำแนะนำ',
      sortLabel: 'เรียงตาม',
      sortLatest: 'ล่าสุด-เก่าสุด',
      sortOldest: 'เก่าสุด-ล่าสุด',
      sortPopular: 'ยอดนิยม'
    },

    // FAQ Page
    faqPage: {
      title: 'คำถามที่พบบ่อย',
      category1: 'การเปลี่ยนแปลง/ยกเลิกการจอง',
      category2: 'การรับ-คืนรถ',
      category3: 'เอกสารที่ต้องใช้',
      category4: 'ประเภทและประกันของรถ',
      category5: 'การชำระเงิน',
      category6: 'ติดต่อฝ่ายบริการลูกค้า'
    },

    // Login Page
    login: {
      title: 'เข้าสู่ระบบ',
      email: 'อีเมล',
      emailPlaceholder: 'อีเมล',
      password: 'รหัสผ่าน',
      passwordPlaceholder: 'รหัสผ่าน',
      forgotPassword: 'ลืมรหัสผ่าน?',
      loginButton: 'เข้าสู่ระบบ',
      divider: 'หรือ เข้าสู่ระบบด้วย',
      noAccount: 'ยังไม่มีบัญชี?',
      registerHere: 'ลงทะเบียนที่นี่',
      errorEmailNotFound: 'ไม่พบบัญชีนี้ใช้อีเมลในระบบ อีเมลนี้ยังไม่ได้ลงทะเบียน กรุณาตรวจสอบและกรอกข้อมูลใหม่อีกครั้ง',
      errorInvalidCredentials: 'อีเมล หรือรหัสผ่านของคุณไม่ถูกต้อง กรุณาตรวจสอบ และกรอกข้อมูลใหม่อีกครั้ง'
    },

    // Register Page
    register: {
      title: 'สมัครบัญชี',
      email: 'อีเมล',
      emailPlaceholder: 'อีเมล*',
      password: 'รหัสผ่าน',
      passwordPlaceholder: 'รหัสผ่าน*',
      confirmPassword: 'ยืนยัน รหัสผ่าน',
      confirmPasswordPlaceholder: 'ยืนยัน รหัสผ่าน*',
      registerButton: 'ลงทะเบียน',
      divider: 'หรือ สมัครบัญชีด้วย',
      haveAccount: 'มีบัญชีอยู่แล้ว?',
      loginHere: 'เข้าสู่ระบบที่นี่',
      passwordRequirements: {
        minLength: 'ต้องมีความยาว อย่างน้อย 8 ตัวอักษร',
        uppercase: 'ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ (A–Z) อย่างน้อย 1 ตัว',
        lowercase: 'ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์เล็ก (a–z) อย่างน้อย 1 ตัว',
        number: 'ต้องมี ตัวเลข (0–9) อย่างน้อย 1 ตัว'
      },
      errorEmailInUse: 'อีเมลนี้ถูกใช้งานแล้ว',
      errorPasswordMismatch: 'รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน',
      errorGeneral: 'ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบ และกรอกข้อมูลใหม่อีกครั้ง'
    },

    // Email Verification Page
    emailVerification: {
      title: 'โปรดยืนยันอีเมลของคุณ',
      description: 'ระบบส่งลิงค์ไปยังอีเมลของคุณ โปรดคลิกลิงค์เพื่อทำการยืนยันอีเมล',
      resendCountdown: 'ส่งอีกครั้งใน {countdown} วินาที',
      resendButton: 'ส่งลิงค์ยืนยันอีกครั้ง',
      emailIncorrect: 'อีเมลไม่ถูกต้อง?',
      changeEmail: 'เปลี่ยนอีเมล',
      skipForTest: 'ข้ามไปก่อน (เพื่อทดสอบ)',
      resendSuccess: 'ส่งลิงค์ยืนยันอีเมลใหม่แล้ว!'
    },

    // Registration Success Page
    registrationSuccess: {
      title: 'สมัครบัญชีสำเร็จ',
      welcome: 'ยินดีต้อนรับสู่ ASAP!',
      goToHome: 'ไปที่หน้าแรก',
      info1: 'คุณสามารถเริ่มใช้งานบริการของเราได้ทันที',
      info2: 'หากมีคำถาม สามารถ',
      contactUs: 'ติดต่อเรา',
      info2End: 'ได้ตลอดเวลา'
    },

    // Reset Password Page
    resetPassword: {
      title: 'รีเซ็ตรหัสผ่าน',
      subtitle: 'กรอกอีเมลเพื่อรีเซ็ตรหัスผ่าน',
      emailPlaceholder: 'อีเมล*',
      nextButton: 'ต่อไป',
      newPasswordTitle: 'กรอกรหัสผ่านใหม่',
      password: 'รหัสผ่าน',
      newPasswordPlaceholder: 'รหัสผ่านใหม่*',
      confirmPassword: 'ยืนยัน รหัสผ่าน',
      confirmPasswordPlaceholder: 'ยืนยัน รหัสผ่าน*',
      passwordRequirements: {
        minLength: 'ต้องมีความยาว อย่างน้อย 8 ตัวอักษร',
        uppercase: 'ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ (A-Z) อย่างน้อย 1 ตัว',
        lowercase: 'ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์เล็ก (a-z) อย่างน้อย 1 ตัว',
        number: 'ต้องมี ตัวเลข (0-9) อย่างน้อย 1 ตัว'
      },
      errorPasswordMismatch: 'รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน',
      successTitle: 'รีเซ็ตรหัสผ่านสำเร็จ',
      successMessage: 'ยินดีต้อนรับสู่ ASAP!',
      loginButton: 'เข้าสู่ระบบ'
    },

    // Account Page
    account: {
      title: 'จัดการบัญชี',
      menu: {
        topics: 'หัวข้อ',
        bookings: 'ข้อมูลการจอง',
        personal: 'ข้อมูลทั่วไป',
        tax: 'ที่อยู่ใบกำกับภาษี',
        settings: 'ข้อมูลบัญชี',
        terms: 'เงื่อนไขและข้อตกลง'
      }
    },

    // Change Email Page
    changeEmail: {
      title: 'กรอกอีเมลใหม่',
      newEmailPlaceholder: 'อีเมลใหม่*',
      nextButton: 'ต่อไป',
      successTitle: 'เปลี่ยนอีเมลสำเร็จ',
      successMessage: 'ยินดีต้อนรับสู่ ASAP!',
      goToHome: 'ไปที่หน้าแรก',
      errorInvalidEmail: 'ไม่สามารถใช้อีเมลนี้ได้ กรุณากรอกอีเมลใหม่',
      errorEmailInUse: 'อีเมลนี้ถูกใช้งานแล้ว กรุณาใช้อีเมลอื่น',
      errorSendFailed: 'ไม่สามารถส่งลิงก์ต่องอีเมล'
    },

    // Change Password Page
    changePassword: {
      titleOldPassword: 'กรอกรหัสผ่านเดิม',
      titleNewPassword: 'กรอกรหัสผ่านใหม่',
      oldPasswordPlaceholder: 'รหัสผ่าน*',
      newPasswordPlaceholder: 'รหัสผ่านใหม่*',
      confirmPasswordPlaceholder: 'ยืนยัน รหัสผ่าน*',
      passwordLabel: 'รหัสผ่าน',
      confirmPasswordLabel: 'ยืนยัน รหัสผ่าน',
      forgotPassword: 'ลืมรหัสผ่าน?',
      nextButton: 'ต่อไป',
      passwordRequirements: {
        minLength: 'ต้องมีความยาว อย่างน้อย 8 ตัวอักษร',
        uppercase: 'ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ (A-Z) อย่างน้อย 1 ตัว',
        lowercase: 'ต้องประกอบด้วย ตัวอักษรภาษาอังกฤษพิมพ์เล็ก (a-z) อย่างน้อย 1 ตัว',
        number: 'ต้องมี ตัวเลข (0-9) อย่างน้อย 1 ตัว'
      },
      errorOldPasswordIncorrect: 'รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง',
      errorPasswordMismatch: 'รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน',
      errorGeneral: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
      successTitle: 'เปลี่ยนรหัสผ่านสำเร็จ',
      successMessage: 'ยินดีต้อนรับสู่ ASAP!',
      goToHome: 'กลับไปที่หน้าแรก'
    },

    // Promotion Detail Page
    promotionDetail: {
      bookEarly: 'จองก่อน ลดก่อน',
      discountUpTo: 'คูปองส่วนลดสูงสุด 50%',
      validUntil: 'ใช้ลงทะเบียน',
      hours: 'ชั่วโมง',
      termsConditions: 'รายละเอียดและเงื่อนไขใน',
      useCoupon: 'ใช้คูปอง',
      aboutPromotion: 'เกี่ยวกับโปรโมชั่น',
      eligibilityConditions: 'เงื่อนไขการรับสิทธิ์',
      disclaimer1: '*เงื่อนไขเป็นไปตามที่บริษัทกำหนด',
      disclaimer2: '*บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขต่างๆ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า',
      badgeText: 'เข้ารถ',
      badgeMonth: 'JULY SALE',
      promoTitle: 'ถูกคุ้ม',
      promoSubtitle: 'จริง',
      promoSubtitleSmall: 'เกินต้าน',
      downloadApp: 'ดาวน์โหลดผ่าน',
      appName: 'asap app',
      downloadText: 'Download "Asap App"'
    },

    // Article Detail Page
    articleDetail: {
      tags: '#ก',
      share: '#ส',
      relatedArticles: 'บทความแนะนำ',
      articles: 'บทความ'
    },

    // Car Detail Page
    carDetail: {
      priceFor: 'ราคาข้า',
      daysStarting: 'วัน เริ่มต้นเพียง',
      or: 'หรือ',
      perDay: 'บาท/วัน',
      insurance: 'ประกันภัย',
      insuranceSubtitle: 'ซื้อพัตกรด ยิ่งหายห่วง',
      insuranceDetails: 'รายละเอียดประกันภัยเพิ่มเติม',
      services: 'บริการเสริม',
      servicesSubtitle: 'ค่าเช่ารถ, รถเช็ง และอื่นๆ',
      addService: 'เพิ่มบริการ',
      perPiecePerDay: '฿/ชิ้น/วัน',
      totalPayment: 'ยอดที่ต้องชำระทั้งหมด',
      upgrade: 'อัพเกรด',
      payNow: 'ชำระทันที',
      payLater: 'ชำระที่หลัง',
      payFullOnPickup: 'ช่าระเต็มจำนวนเมื่อรับรถ',
      canCancelChange: 'สามารถยกเลิกละเปลี่ยนแปลงการจะได้ภายใน 48 ชม. ก่อนบริริจระ เงื่อนในการยกเลิก',
      rentCar: 'เช่ารถ',
      creditCardRequired: 'โปรดเรียนบัตรเคดิตวิเจ้าขจจำหวัดสำหรับงงลบัรา',
      creditCardBullet1: 'ซื่อบัด ซื้อเสี่ยงภัยกันขิ้ดเต่อข',
      creditCardBullet2: 'มีวงเงินอย่างน้อย 6,000 บาท',
      creditCardBullet3: 'ไม่บัปบัตรเดบิต, บัตรเคดิตของบุคคลอื่น',
      confirm: 'ยืนยัน',
      insuranceModalTitle: 'รายละเอียดประกันเพิ่มเติม',
      recommended: 'แนะนำ',
      insuranceAndCoverage: 'ประกันแล้วความคุ้มครอง',
      cdwTitle: 'CDW',
      cdwSubtitle: 'ค่าเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท',
      scdwTitle: 'SCDW',
      scdwSubtitle: 'ไม่มีค่าเสียหายส่วนแรก ยกเว้นกระจก, ยาง, ล้อ',
      fullProtectionTitle: 'FULL PROTECTION',
      fullProtectionSubtitle: 'คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม (ประกันภัยชั้น 1)',
      deductible: 'ค่าเสียหายส่วนแรก',
      coverage1: 'คุ้มครอง 5,350 - 16,050 บาท',
      coverage2: 'ไม่มีค่าเสียหายส่วนแรก<br/>ยกเว้นกระจก, ยาง, ล้อ',
      coverage3: 'คุ้มครองทุกกรณี ไม่ต้องจ่ายเพิ่ม',
      price: 'ราคา',
      noDeductibleExcept: 'ไม่ต้ามจากดสิกเด่เนบี้ยแบบงการะหากใ'
    },

    // Booking Detail Page
    bookingDetail: {
      breadcrumbAccount: 'บัญชี',
      breadcrumbBookingInfo: 'ข้อมูลการจอง',
      bookingReceipt: 'ใบจอง',
      bookingTime: 'เวลาจอง',
      statusCancelled: 'สถานะ: ยกเลิกล้มเอ้อ เมื่อ',
      bookingCode: 'รหัสจอง',
      pickupReturn: 'จุดรับ/ส่งรถ',
      driverInfo: 'ข้อมูลผู้ขับขี่/ผู้เช่า',
      email: 'อีเมล',
      additionalDriver: 'ผู้ขับขี่เล่น',
      phoneNumber: 'เบอร์โทรศัพท์',
      serviceCharges: 'ค่าบริการ',
      carRental: 'ค่าเช่ารถ',
      carRentalDays: 'ค่าเช่ารถ (x2 วัน)',
      insurance: 'ประกันภัย',
      extraServices: 'บริการอเล่น',
      discount: 'ส่วนลด',
      otherDiscounts: 'ส่วนลดอื่นๆ',
      subtotal: 'รากรวม',
      vat: 'ภาษีมูลค่าเพิ่ม (7%)',
      totalNet: 'ราคารวมสุทธิ',
      payment: 'การชำระเงิน',
      paymentSuccess: 'การชำระเงินสำเร็จ',
      dateTime: 'Date/Time',
      transactionId: 'Transaction ID',
      paymentMethod: 'Payment Method',
      cancelBooking: 'ยกเลิกการจอง',
      confirmCancel: 'ยืนยันการยกเลิก?',
      confirmCancelMessage: 'คุณแน่ใจหรือว่าต้องการยกเลิกการจองนี้?',
      cancel: 'ยกเลิก',
      confirm: 'ยืนยัน',
      pickupService: 'จุดรับรถ: + บริการ Pick-Up Service',
      dropoffService: 'จุดส่งรถ: + บริการ Drop-Off Service'
    },

    // Checkout Page
    checkout: {
      timerText: 'กรุณาทำรายการให้สำเร็จภายใน',
      minutes: 'นาที',
      progressStep1: 'บริการเสริม',
      progressStep2: 'ข้อมูลผู้เช่า/ขับขี่',
      progressStep3: 'ชำระเงิน',
      specialOfferTitle: 'ข้อเสนอพิเศษ!',
      specialOfferSubtitle: 'อัปเกรดรถของคุณในราคาพิเศษก่อนสิ้นสุดโปรโมชั่น',
      save: 'ประหยัด',
      seats: 'ที่นั่ง',
      perDay: '/วัน',
      upgradeNow: 'อัปเกรดเลย',
      driverInfoTitle: 'ข้อมูลผู้ขับขี่/ผู้เช่า',
      renterDriver: 'ผู้เช่า/ผู้ขับขี่',
      sameAsPrimary: 'ผู้จองคนเดียวกับผู้ขับขี่ (ผู้เช่า)',
      titlePrefix: 'คำนำหน้า',
      selectTitle: 'เลือกคำนำหน้า',
      mr: 'นาย',
      mrs: 'นาง',
      miss: 'นางสาว',
      firstName: 'ชื่อ',
      firstNamePlaceholder: 'กรอกชื่อ',
      lastName: 'นามสกุล',
      lastNamePlaceholder: 'กรอกนามสกุล',
      additionalDriver: 'ผู้ขับขี่เสริม',
      addDriver: 'เพิ่มผู้ขับขี่',
      accountInfoTitle: 'ข้อมูลบัญชี',
      email: 'อีเมล',
      emailPlaceholder: 'example@email.com',
      password: 'รหัสผ่าน',
      passwordPlaceholder: 'กรอกรหัสผ่าน',
      passwordMin8: 'อย่างน้อย 8 ตัวอักษร',
      passwordUppercase: 'มีตัวพิมพ์ใหญ่',
      passwordNumber: 'มีตัวเลข',
      passwordSpecial: 'มีอักขระพิเศษ (!@#$%)',
      contactInfoTitle: 'ข้อมูลติดต่อ',
      phoneNumber: 'เบอร์โทรศัพท์',
      phonePlaceholder: '812345678',
      flightNumber: 'หมายเลขเที่ยวบิน (ถ้ามี)',
      flightPlaceholder: 'TG123',
      taxInvoiceTitle: 'ใบกำกับภาษี',
      personal: 'บุคคลธรรมดา',
      company: 'นิติบุคคล',
      taxId: 'เลขประจำตัวผู้เสียภาษี',
      taxIdPlaceholder: '1234567890123',
      taxIdHint: 'กรอกเลขประจำตัวผู้เสียภาษี 13 หลัก',
      contactName: 'ชื่อผู้ติดต่อ',
      contactLastName: 'นามสกุลผู้ติดต่อ',
      addressTitle: 'ที่อยู่',
      country: 'ประเทศ',
      selectCountry: 'เลือกประเทศ',
      thailand: 'ไทย',
      usa: 'สหรัฐอเมริกา',
      province: 'จังหวัด',
      selectProvince: 'เลือกจังหวัด',
      bangkok: 'กรุงเทพมหานคร',
      chiangmai: 'เชียงใหม่',
      phuket: 'ภูเก็ต',
      district: 'เขต/อำเภอ',
      selectDistrict: 'เลือกเขต/อำเภอ',
      subDistrict: 'แขวง/ตำบล',
      selectSubDistrict: 'เลือกแขวง/ตำบล',
      houseType: 'ประเภทที่อยู่',
      selectHouseType: 'เลือกประเภท',
      house: 'บ้าน',
      condo: 'คอนโด',
      apartment: 'อพาร์ทเมนต์',
      houseNumber: 'บ้านเลขที่',
      houseNumberPlaceholder: '123',
      village: 'หมู่บ้าน',
      villagePlaceholder: 'หมู่บ้าน',
      building: 'อาคาร',
      buildingPlaceholder: 'ชื่ออาคาร',
      soi: 'ซอย',
      soiPlaceholder: 'ซอย',
      road: 'ถนน',
      roadPlaceholder: 'ถนน',
      postalCode: 'รหัสไปรษณีย์',
      postalCodePlaceholder: '10500',
      fullAddress: 'ที่อยู่เต็ม',
      acceptTerms: 'ฉันยอมรับ',
      termsConditions: 'ข้อกำหนดและเงื่อนไข',
      privacyPolicy: 'นโยบายความเป็นส่วนตัว',
      carTitle: 'TOYOTA YARIS CROSS',
      carSubtitle: 'หรือรถเทียบเท่า',
      pickup: 'รับรถ',
      pickupLocation: 'สถานที่รับรถ',
      return: 'คืนรถ',
      returnLocation: 'สถานที่คืนรถ',
      paymentBreakdown: 'รายละเอียดการชำระเงิน',
      carRental: 'ค่าเช่ารถ',
      days: 'วัน',
      insurance: 'ประกันภัย SCDW',
      deliveryFee: 'ค่าบริการรับ-ส่ง',
      discount: 'ส่วนลด',
      subtotal: 'รวม',
      vat: 'ภาษีมูลค่าเพิ่ม (7%)',
      grandTotal: 'ยอดรวมทั้งหมด',
      paymentMethodTitle: 'วิธีการชำระเงิน',
      payNow: 'ชำระทันที',
      payLater: 'ชำระทีหลัง',
      discountBadge: 'ลด 5%',
      proceed: 'ดำเนินการต่อ',
      creditCardNote: 'โปรดเตรียมบัตรเครดิต',
      creditCardName: 'ชื่อบัตรตรงกับชื่อผู้เช่า',
      creditCardLimit: 'มีวงเงินอย่างน้อย ฿6,000',
      creditCardNoDebit: 'ไม่รับบัตรเดบิต',
      required: '*'
    },

    // Payment Page
    payment: {
      timerText: 'กรุณาทำรายการให้สำเร็จภายใน',
      minutes: 'นาที',
      gatewayTitle: 'ช่องทางการชำระเงิน',
      gatewaySubtitle: 'ตาม Payment Gateway',
      carStatus: 'สถานะ: รอชำระเงิน',
      renterDriver: 'ข้อมูลผู้เช่า/ขับขี่',
      additionalDriver: 'ผู้ขับขี่เสริม',
      email: 'อีเมล',
      phoneNumber: 'เบอร์โทรศัพท์',
      pickupDropoffTitle: 'จุดรับ/ส่งรถ',
      pickupPoint: 'จุดรับรถ',
      dropoffPoint: 'จุดส่งรถ',
      pickupService: 'บริการ Pick-Up Service',
      dropoffService: 'บริการ Drop-Off Service',
      serviceCharges: 'ค่าบริการ',
      carRental: 'ค่าเช่ารถ',
      days: 'วัน',
      insurance: 'ประกันภัย',
      cdw: 'CDW',
      cdwDescription: 'คุ้มครองความเสียหายส่วนแรก อยู่ที่ 5,350 - 16,050 บาท',
      additionalServices: 'บริการเสริม',
      childSeat: 'Child Seat',
      childSeatDescription: 'อุปกรณ์เพื่อความปลอดภัยของเด็กขณะเดินทาง',
      specialAssistance: 'Special assistance',
      specialAssistanceDescription: 'บริการช่วยเหลือพิเศษที่ผู้ให้บริการจัดเตรียมไว้ให้',
      totalToPay: 'ยอดที่ต้องชำระทั้งหมด',
      bookingInfo: 'ข้อมูลการจอง',
      paymentTitle: 'การชำระเงิน',
      payNow: 'ชำระทันที',
      payEarlySave: 'จ่ายก่อนประหยัดกว่า',
      payFullAmount: 'ชำระเต็มจำนวน',
      noCancel: 'ไม่สามารถยกลิกและเปลี่ยนแปลงการเช่าได้',
      acceptPrivacy: 'ฉันได้อ่านและยอมรับข้อกำหนดและเงื่อนไขที่ระบุไว้ใน นโยบายความเป็นส่วนตัว',
      ageRequirement: 'ผู้ขับขี่อายุมากกว่า 21 ปี *ต้องมีใบขับขี่อย่างน้อย 1 ปี',
      creditCardTitle: 'โปรดเตรียมบัตรเครดิตตัวจริงสำหรับวางมัดจำ',
      creditCardName: 'ชื่อบัตร ชื่อเดียวกันกับชื่อผู้จอง',
      creditCardLimit: 'มีวงเงินอย่างน้อย 6,000 บาท',
      creditCardNoDebit: 'ไม่รับบัตรเดบิต, บัตรเครดิตของบุคคลอื่น',
      totalPrice: 'ราคารวม',
      vat: 'ภาษีมูลค่าเพิ่ม (7%)',
      totalNet: 'ราคารวมสุทธิ',
      payButton: 'ชำระเงิน'
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      cars: 'Cars',
      promotions: 'Promotions',
      branches: 'Branches',
      articles: 'Articles',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      bookingInfo: 'Booking Information',
      manageAccount: 'Manage Account',
      logout: 'Logout'
    },

    // Search Bar
    search: {
      pickupLocation: 'Pickup Location',
      returnLocation: 'Return Location',
      from: 'From:',
      to: 'To:',
      coupon: 'Coupon:',
      searchCar: 'Search',
      bangkok: 'Bangkok',
      suvarnabhumiAirport: 'Suvarnabhumi Airport',
      donMueangAirport: 'Don Mueang International Airport'
    },

    // Online Check-in
    checkin: {
      title: 'Online Check-in',
      subtitle: 'Please fill in the information and upload documents for check-in',
      subtitleRetry: 'Or choose to submit again to complete document submission',
      bookingInfo: 'Booking Information',
      bookingCode: 'Booking Code',
      pickup: 'Pickup',
      return: 'Return',
      importantInfo: 'Important Information',
      creditCardNotice: 'Please prepare a credit card for deposit at the pickup location (debit cards are not accepted). The deposit will be refunded within 7-14 business days after returning the car',
      requiredDocuments: 'Required Documents for Car Rental',
      driverQualifications: 'Driver Qualifications',
      uploadDocuments: 'Upload Documents',
      driverLicense: 'Driver\'s License Copy',
      idCard: 'ID Card Copy',
      required: '*',
      uploadPlaceholder: 'Click to upload file or drag and drop here',
      uploadHint: 'Supports JPG, PNG or PDF files up to 10MB',
      acceptTerms: 'I accept the',
      termsLink: 'Terms and Conditions',
      termsText: 'for car rental',
      certifyDocuments: 'I certify that the uploaded documents are valid and not expired',
      submit: 'Submit',
      successTitle: 'Successfully Submitted',
      successMessage: 'Your documents have been submitted successfully. Please wait for staff verification',
      approvingTitle: 'Online Check-in',
      approvingSubtitle: 'Verifying Documents',
      pendingStatus: 'Pending Document Verification',
      approvingMessage: 'Your documents are being verified',
      contactInfo: 'If you have any issues, please contact',
      close: 'Close',
      viewBooking: 'View Booking Information',
      errorTitle: 'Invalid Documents',
      errorMessage: 'Please resubmit documents or contact our team for information on document submission',
      retryButton: 'Check-in Online',
      days: 'days'
    },

    // Booking Confirmation
    confirmation: {
      title: 'Booking Successful',
      subtitle: 'A copy of the booking has been sent to your email',
      successBanner: 'Check-in Successful',
      successMessage: 'No need to bring \'original documents\' again',
      creditCardTitle: 'Please prepare your credit card for deposit',
      booking: 'Booking',
      status: 'Status',
      statusWaitingCheckin: 'Waiting for Check-in',
      statusPaidWaitingPickup: 'Paid - Waiting for Pickup',
      customer: 'Customer',
      fullName: 'Full Name',
      phone: 'Phone Number',
      email: 'Email',
      pickupService: 'Pickup Service',
      returnService: 'Return Service',
      breakdown: 'Breakdown',
      carRental: 'Car Rental',
      insurance: 'CDW Insurance',
      services: 'Additional Services',
      discount: 'Discount',
      subtotal: 'Subtotal',
      vat: 'VAT (7%)',
      total: 'Total',
      payment: 'Payment',
      dateTime: 'Date/Time',
      transactionId: 'Transaction ID',
      paymentMethod: 'Payment Method',
      viewDetails: 'Payment Completed',
      home: 'Home',
      checkin: 'Check-in'
    },

    // Booking History
    history: {
      title: 'Booking Information',
      ongoing: 'Ongoing',
      completed: 'Completed',
      bookingCode: 'Booking Code',
      status: 'Status',
      statusPaid: 'Payment Successful',
      checkinButton: 'Check-in',
      waitingButton: 'Pending',
      detailsButton: 'Details'
    },

    // Common
    common: {
      baht: '฿',
      perDay: '/ day',
      days: 'days',
      readMore: 'Read More',
      viewDetails: 'View Details',
      book: 'Book Now',
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      search: 'Search',
      filter: 'Filter',
      all: 'All'
    },

    // Home Page
    home: {
      title: 'Affordable Car Rental & Airport Transfer',
      subtitle: 'Quality car rental service at reasonable prices',
      howItWorks: 'How It Works',
      whyChooseUs: 'Why Choose Us',
      popularCars: 'Popular Cars',
      testimonials: 'Customer Reviews'
    },

    // About Page
    about: {
      title: 'About Us',
      subtitle: 'Your Trusted Car Rental Provider',
      ourStory: 'Our Story',
      ourMission: 'Our Mission',
      ourVision: 'Our Vision',
      ourTeam: 'Our Team'
    },

    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'Have questions? Get in touch with us',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send Message',
      address: 'Address',
      workingHours: 'Working Hours',
      followUs: 'Follow Us'
    },

    // Cars Page
    cars: {
      title: 'Car Rental',
      subtitle: 'Choose the perfect car for you',
      filterBy: 'Filter By',
      carType: 'Car Type',
      priceRange: 'Price Range',
      seats: 'Seats',
      transmission: 'Transmission',
      automatic: 'Automatic',
      manual: 'Manual',
      perDay: 'per day',
      bookNow: 'Book Now'
    },

    // Promotions Page
    promotions: {
      title: 'Promotions',
      subtitle: 'Special Offers for You',
      activePromotions: 'Active Promotions',
      expiredPromotions: 'Expired Promotions',
      validUntil: 'Valid Until',
      useCode: 'Use Code',
      termsConditions: 'Terms & Conditions'
    },

    // Branches Page
    branches: {
      title: 'Pick-up & Drop-off Locations',
      subtitle: 'Our Branches and Service Points',
      airport: 'Airport',
      cityCenter: 'City Center',
      openingHours: 'Opening Hours',
      getDirections: 'Get Directions'
    },

    // Articles Page
    articles: {
      title: 'Articles',
      subtitle: 'Tips and useful information',
      categories: 'Categories',
      latestArticles: 'Latest Articles',
      popularArticles: 'Popular Articles',
      publishedOn: 'Published on'
    },

    // FAQ Page
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions',
      booking: 'Booking',
      payment: 'Payment',
      insurance: 'Insurance',
      driverRequirements: 'Driver Requirements',
      cancellation: 'Cancellation'
    },

    // Privacy Policy Page
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'We value your privacy',
      lastUpdated: 'Last Updated',
      introduction: 'Introduction',
      dataCollection: 'Data Collection',
      dataUsage: 'Data Usage',
      dataSecurity: 'Data Security',
      yourRights: 'Your Rights'
    },

    // Hero Section
    hero: {
      rentWith: 'Rent with',
      bestPrice: 'Best Prices',
      startingPrice: 'Starting from only 2,000 ฿/day',
      carCare: 'Best Maintained Cars',
      maintenance: 'All cars maintained to highest standards',
      service: 'Best service with attention to every detail',
      pickupLocation: 'Pickup',
      selectLocation: 'Select Location',
      pickupDate: 'Pickup Date',
      pickupTime: 'Pickup Time',
      returnDate: 'Return Date',
      returnTime: 'Return Time',
      searchCars: 'Search Cars'
    },

    // Promotion Section
    promotion: {
      monthlyTitle: 'Monthly Promotions',
      hotDeals: 'Discounts over 30%'
    },

    // Category Section
    category: {
      title: 'Car Categories',
      viewAll: 'View All'
    },

    // New Promotion Section
    newPromotion: {
      title: 'Latest Promotions',
      viewAll: 'View All'
    },

    // Location Map Section
    locationMap: {
      title: 'asap branches near you',
      description: 'More than 11 branches nationwide',
      viewAllBranches: 'View All Branches'
    },

    // Branch Selection Section
    branchSelection: {
      title: 'Choose a Convenient Branch',
      description: 'Pick up and return at any branch',
      allBranches: 'All Branches',
      airports: 'Airports',
      cityBranches: 'City Branches'
    },

    // App Download Section
    appDownload: {
      title: 'Download asap App',
      description: 'Book cars easier, more convenient, faster',
      downloadOn: 'Download on',
      appStore: 'App Store',
      googlePlay: 'Google Play'
    },

    // Service Cards Section
    serviceCards: {
      title: 'Our Services',
      easyBooking: 'Easy Booking',
      easyBookingDesc: 'Book cars online easily within minutes',
      flexibleRental: 'Flexible Rental',
      flexibleRentalDesc: 'Choose pickup and return at your convenience',
      allInclusive: 'All-Inclusive',
      allInclusiveDesc: 'Complete insurance and additional services',
      support247: '24/7 Service',
      support247Desc: 'Our team is ready to help 24 hours a day'
    },

    // Why Choose Us Section
    whyChoose: {
      title: 'Why Choose',
      titleHighlight: 'asap',
      qualityCars: 'Quality Cars',
      qualityCarsDesc: 'All cars thoroughly inspected',
      bestPrice: 'Best Prices',
      bestPriceDesc: 'Guaranteed best value pricing',
      easyProcess: 'Easy Process',
      easyProcessDesc: 'Book and pick up quickly and easily',
      trustworthy: 'Trustworthy',
      trustworthyDesc: 'Over 10 years of service, thousands of customers'
    },

    // Travel Blog Section
    travelBlog: {
      title: 'Travel Articles',
      readMore: 'Read More',
      viewAll: 'View All'
    },

    // About sections
    aboutHero: {
      title: 'About',
      titleHighlight: 'asap',
      description: 'Thailand\'s Leading Car Rental Provider'
    },

    aboutImage: {
      yearsExperience: 'Years',
      experienceText: 'Experience',
      happyCustomers: 'Customers',
      customersText: 'Satisfied'
    },

    aboutServices: {
      title: 'Our Services',
      service1Title: 'Short-term Rental',
      service1Desc: 'Perfect for travel and business trips',
      service2Title: 'Long-term Rental',
      service2Desc: 'Special packages for monthly rentals',
      service3Title: 'Transfer Service',
      service3Desc: 'Airport transfer and destination services',
      service4Title: 'Comprehensive Insurance',
      service4Desc: 'Insurance covering all risks'
    },

    aboutWhyChoose: {
      mainTitle: 'Because we',
      mainTitleHighlight: 'understand',
      mainTitleLine2: 'every need',
      subtitle: 'of every journey',
      feature1Title: 'Unlock',
      feature1TitleNormal: 'every journey',
      feature1Desc: 'Experience travel without obstacles, maintaining flexibility for all your journeys with asap',
      feature2Title: 'Freedom',
      feature2TitleNormal: 'every journey',
      feature2Desc: 'Choose your route and time with confidence with premium rental cars that match your travel needs',
      feature3Title: 'Value',
      feature3TitleNormal: 'every journey',
      feature3Desc: 'Affordable prices, fast and reliable service for smooth journeys',
      feature4Title: 'Care',
      feature4TitleNormal: 'every journey',
      feature4Desc: 'Travel with confidence with a service system focused on safety, supported by 24-hour assistance'
    },

    aboutRentalService: {
      title: 'Car Rental Service',
      carsCount: '9,000',
      mainDesc: 'We have over {count} cars in our system. You will receive fast service with precise consultation and advice, ensuring every journey is on time and uninterrupted',
      subDesc: 'With professional work focused on service with care. Rest assured with 24-hour assistance from professional staff, along with comprehensive car insurance for every journey, giving you peace of mind on every route',
      overlayLine1: 'Get there ASAP,',
      overlayLine2: 'Use ASAP.',
      overlayLocation: 'Don Muang'
    },

    aboutLocationMap: {
      title: 'Rent cars conveniently',
      titleHighlight: 'everywhere',
      subtitle: 'Branches covering Bangkok,',
      subtitleLine2: 'airports, and major cities nationwide'
    },

    // Contact Form Section
    contactForm: {
      title: 'Contact',
      titleHighlight: 'asap',
      firstName: 'First Name',
      firstNamePlaceholder: 'John',
      lastName: 'Last Name',
      lastNamePlaceholder: 'Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'Example@gmail.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '909990000',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Rental over 1 month',
      messageLabel: 'Message',
      messagePlaceholder: 'Interested in renting for 2 months or more, are there additional discounts?',
      submit: 'Send Message',
      submitSuccess: 'Your message has been sent successfully!',
      companyName: 'Chimahajikitit Auto Performance Public Company Limited',
      companyAddress: '149 Moo 3, Thepharak Road, Thepharak, Mueang Samut Prakan, Samut Prakan 10270'
    },

    // Car Listing Section
    carListing: {
      allCars: 'All',
      compact: 'Compact',
      largeCar: 'Large Car',
      suvPpvMpv: 'SUV / PPV / MPV',
      peopleCarriers: 'People Carriers',
      pickupTruck: 'Pickup/Truck',
      evHybrid: 'EV / Hybrid',
      premiumCars: 'Premium Cars',
      filters: 'Filters',
      sortBy: 'Best Match',
      perDay: '/day',
      itemsPerPage: 'items/page',
      whyChooseTitle: 'Because we understand',
      whyChooseTitleLine2: 'every need',
      whyChooseSubtitle: 'of every journey',
      feature1: 'Unlock every journey',
      feature2: 'Freedom every journey',
      feature3: 'Quality every journey',
      feature4: 'Care every journey'
    },

    // Promotions Section
    promotionsPage: {
      title: 'Promotions',
      searchPlaceholder: 'Search promotions...',
      sortLabel: 'Sort by',
      sortExpiry: 'Expiry Date',
      sortNewest: 'Newest',
      sortPopular: 'Popular',
      useBy: 'Use by:',
      useCoupon: 'Use Coupon',
      badgeMonth: 'JULY SALE',
      badgeText: 'Rent',
      promoTitle: 'Great Value',
      promoSubtitle: 'Really',
      promoSubtitleSmall: 'Amazing',
      downloadVia: 'Download via',
      appName: 'asap app'
    },

    // Branches Page
    branchesPage: {
      title: 'Our Branches',
      searchPlaceholder: 'Search pickup/drop-off locations...',
      allTab: 'All',
      airportTab: 'Airport',
      branchTab: 'Branch',
      rentCar: 'Rent Car',
      call: 'Call',
      sendEmail: 'Send Email',
      viewDetails: 'View Details',
      itemsPerPage: 'items/page',
      whyChooseTitle: 'Because we understand',
      whyChooseTitleLine2: 'every need',
      whyChooseSubtitle: 'of every journey',
      feature1: 'Unlock every journey',
      feature2: 'Freedom every journey',
      feature3: 'Quality every journey',
      feature4: 'Care every journey'
    },

    // Articles Page
    articlesPage: {
      title: 'Articles',
      searchPlaceholder: 'Search articles...',
      categoryLabel: 'Category',
      categoryAll: 'All',
      categoryRental: 'Getting Started',
      categoryBooking: 'Booking & Cancellation',
      categoryTips: 'Tips & Advice',
      sortLabel: 'Sort by',
      sortLatest: 'Latest-Oldest',
      sortOldest: 'Oldest-Latest',
      sortPopular: 'Popular'
    },

    // FAQ Page
    faqPage: {
      title: 'Frequently Asked Questions',
      category1: 'Booking Changes/Cancellations',
      category2: 'Pickup & Return',
      category3: 'Required Documents',
      category4: 'Car Types & Insurance',
      category5: 'Payment',
      category6: 'Customer Service'
    },

    // Login Page
    login: {
      title: 'Login',
      email: 'Email',
      emailPlaceholder: 'Email',
      password: 'Password',
      passwordPlaceholder: 'Password',
      forgotPassword: 'Forgot Password?',
      loginButton: 'Login',
      divider: 'Or login with',
      noAccount: 'Don\'t have an account?',
      registerHere: 'Register here',
      errorEmailNotFound: 'This email is not registered in our system. Please check and try again',
      errorInvalidCredentials: 'Your email or password is incorrect. Please check and try again'
    },

    // Register Page
    register: {
      title: 'Register Account',
      email: 'Email',
      emailPlaceholder: 'Email*',
      password: 'Password',
      passwordPlaceholder: 'Password*',
      confirmPassword: 'Confirm Password',
      confirmPasswordPlaceholder: 'Confirm Password*',
      registerButton: 'Register',
      divider: 'Or register with',
      haveAccount: 'Already have an account?',
      loginHere: 'Login here',
      passwordRequirements: {
        minLength: 'Must be at least 8 characters long',
        uppercase: 'Must contain at least 1 uppercase letter (A–Z)',
        lowercase: 'Must contain at least 1 lowercase letter (a–z)',
        number: 'Must contain at least 1 number (0–9)'
      },
      errorEmailInUse: 'This email is already in use',
      errorPasswordMismatch: 'Password and confirm password do not match',
      errorGeneral: 'Unable to save data. Please check and try again'
    },

    // Email Verification Page
    emailVerification: {
      title: 'Please Verify Your Email',
      description: 'We\'ve sent a verification link to your email. Please click the link to verify your email',
      resendCountdown: 'Resend in {countdown} seconds',
      resendButton: 'Resend Verification Link',
      emailIncorrect: 'Email incorrect?',
      changeEmail: 'Change Email',
      skipForTest: 'Skip for now (Testing)',
      resendSuccess: 'Verification link has been resent!'
    },

    // Registration Success Page
    registrationSuccess: {
      title: 'Registration Successful',
      welcome: 'Welcome to ASAP!',
      goToHome: 'Go to Home',
      info1: 'You can start using our services immediately',
      info2: 'If you have any questions, feel free to',
      contactUs: 'contact us',
      info2End: 'anytime'
    },

    // Reset Password Page
    resetPassword: {
      title: 'Reset Password',
      subtitle: 'Enter your email to reset password',
      emailPlaceholder: 'Email*',
      nextButton: 'Next',
      newPasswordTitle: 'Enter New Password',
      password: 'Password',
      newPasswordPlaceholder: 'New Password*',
      confirmPassword: 'Confirm Password',
      confirmPasswordPlaceholder: 'Confirm Password*',
      passwordRequirements: {
        minLength: 'Must be at least 8 characters long',
        uppercase: 'Must contain at least 1 uppercase letter (A-Z)',
        lowercase: 'Must contain at least 1 lowercase letter (a-z)',
        number: 'Must contain at least 1 number (0-9)'
      },
      errorPasswordMismatch: 'Password and confirm password do not match',
      successTitle: 'Password Reset Successful',
      successMessage: 'Welcome to ASAP!',
      loginButton: 'Login'
    },

    // Account Page
    account: {
      title: 'Manage Account',
      menu: {
        topics: 'Topics',
        bookings: 'Booking Information',
        personal: 'Personal Information',
        tax: 'Tax Invoice Address',
        settings: 'Account Information',
        terms: 'Terms and Conditions'
      }
    },

    // Change Email Page
    changeEmail: {
      title: 'Enter New Email',
      newEmailPlaceholder: 'New Email*',
      nextButton: 'Next',
      successTitle: 'Email Changed Successfully',
      successMessage: 'Welcome to ASAP!',
      goToHome: 'Go to Home',
      errorInvalidEmail: 'Cannot use this email. Please enter a new email',
      errorEmailInUse: 'This email is already in use. Please use another email',
      errorSendFailed: 'Failed to send link to email'
    },

    // Change Password Page
    changePassword: {
      titleOldPassword: 'Enter Old Password',
      titleNewPassword: 'Enter New Password',
      oldPasswordPlaceholder: 'Password*',
      newPasswordPlaceholder: 'New Password*',
      confirmPasswordPlaceholder: 'Confirm Password*',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm Password',
      forgotPassword: 'Forgot Password?',
      nextButton: 'Next',
      passwordRequirements: {
        minLength: 'Must be at least 8 characters long',
        uppercase: 'Must contain at least 1 uppercase letter (A-Z)',
        lowercase: 'Must contain at least 1 lowercase letter (a-z)',
        number: 'Must contain at least 1 number (0-9)'
      },
      errorOldPasswordIncorrect: 'Incorrect password. Please try again',
      errorPasswordMismatch: 'Password and confirm password do not match',
      errorGeneral: 'An error occurred. Please try again',
      successTitle: 'Password Changed Successfully',
      successMessage: 'Welcome to ASAP!',
      goToHome: 'Back to Home'
    },

    // Promotion Detail Page
    promotionDetail: {
      bookEarly: 'Book Early, Save More',
      discountUpTo: 'Coupon up to 50% discount',
      validUntil: 'Valid Until',
      hours: 'hours',
      termsConditions: 'Details and Conditions',
      useCoupon: 'Use Coupon',
      aboutPromotion: 'About Promotion',
      eligibilityConditions: 'Eligibility Conditions',
      disclaimer1: '*Terms and conditions apply as specified by the company',
      disclaimer2: '*The company reserves the right to change terms and conditions without prior notice',
      badgeText: 'Rent',
      badgeMonth: 'JULY SALE',
      promoTitle: 'Great Value',
      promoSubtitle: 'Really',
      promoSubtitleSmall: 'Amazing',
      downloadApp: 'Download via',
      appName: 'asap app',
      downloadText: 'Download "Asap App"'
    },

    // Article Detail Page
    articleDetail: {
      tags: 'Tags',
      share: 'Share',
      relatedArticles: 'Recommended Articles',
      articles: 'Articles'
    },

    // Car Detail Page
    carDetail: {
      priceFor: 'Price for',
      daysStarting: 'days starting from',
      or: 'or',
      perDay: 'baht/day',
      insurance: 'Insurance',
      insuranceSubtitle: 'Buy insurance, worry less',
      insuranceDetails: 'View more insurance details',
      services: 'Additional Services',
      servicesSubtitle: 'Car rental, child seat, and more',
      addService: 'Add Service',
      perPiecePerDay: '฿/piece/day',
      totalPayment: 'Total Amount to Pay',
      upgrade: 'Upgrade',
      payNow: 'Pay Now',
      payLater: 'Pay Later',
      payFullOnPickup: 'Pay full amount when picking up the car',
      canCancelChange: 'Can cancel or change within 48 hours before service. Cancellation conditions',
      rentCar: 'Rent Car',
      creditCardRequired: 'Please prepare your credit card for deposit',
      creditCardBullet1: 'For insurance purchase and deposit',
      creditCardBullet2: 'Minimum credit limit of 6,000 baht',
      creditCardBullet3: 'Debit cards or other person\'s credit cards not accepted',
      confirm: 'Confirm',
      insuranceModalTitle: 'Additional Insurance Details',
      recommended: 'Recommended',
      insuranceAndCoverage: 'Insurance and Coverage',
      cdwTitle: 'CDW',
      cdwSubtitle: 'Deductible is 5,350 - 16,050 baht',
      scdwTitle: 'SCDW',
      scdwSubtitle: 'No deductible except glass, tire, wheel',
      fullProtectionTitle: 'FULL PROTECTION',
      fullProtectionSubtitle: 'Full coverage, no extra payment (Class 1 Insurance)',
      deductible: 'Deductible',
      coverage1: 'Coverage 5,350 - 16,050 baht',
      coverage2: 'No deductible<br/>except glass, tire, wheel',
      coverage3: 'Full coverage, no extra payment',
      price: 'Price',
      noDeductibleExcept: 'No need to pay deductible for normal damage'
    },

    // Booking Detail Page
    bookingDetail: {
      breadcrumbAccount: 'Account',
      breadcrumbBookingInfo: 'Booking Information',
      bookingReceipt: 'Booking Receipt',
      bookingTime: 'Booking Time',
      statusCancelled: 'Status: Cancelled on',
      bookingCode: 'Booking Code',
      pickupReturn: 'Pickup/Return Location',
      driverInfo: 'Driver/Renter Information',
      email: 'Email',
      additionalDriver: 'Additional Driver',
      phoneNumber: 'Phone Number',
      serviceCharges: 'Service Charges',
      carRental: 'Car Rental',
      carRentalDays: 'Car Rental (x2 days)',
      insurance: 'Insurance',
      extraServices: 'Extra Services',
      discount: 'Discount',
      otherDiscounts: 'Other Discounts',
      subtotal: 'Subtotal',
      vat: 'VAT (7%)',
      totalNet: 'Total Net',
      payment: 'Payment',
      paymentSuccess: 'Payment Successful',
      dateTime: 'Date/Time',
      transactionId: 'Transaction ID',
      paymentMethod: 'Payment Method',
      cancelBooking: 'Cancel Booking',
      confirmCancel: 'Confirm Cancellation?',
      confirmCancelMessage: 'Are you sure you want to cancel this booking?',
      cancel: 'Cancel',
      confirm: 'Confirm',
      pickupService: 'Pickup Location: + Pick-Up Service',
      dropoffService: 'Return Location: + Drop-Off Service'
    },

    // Checkout Page
    checkout: {
      timerText: 'Please complete the transaction within',
      minutes: 'minutes',
      progressStep1: 'Additional Services',
      progressStep2: 'Renter/Driver Information',
      progressStep3: 'Payment',
      specialOfferTitle: 'Special Offer!',
      specialOfferSubtitle: 'Upgrade your car at a special price before the promotion ends',
      save: 'Save',
      seats: 'seats',
      perDay: '/day',
      upgradeNow: 'Upgrade Now',
      driverInfoTitle: 'Driver/Renter Information',
      renterDriver: 'Renter/Driver',
      sameAsPrimary: 'Same as primary driver (renter)',
      titlePrefix: 'Title',
      selectTitle: 'Select Title',
      mr: 'Mr.',
      mrs: 'Mrs.',
      miss: 'Miss',
      firstName: 'First Name',
      firstNamePlaceholder: 'Enter first name',
      lastName: 'Last Name',
      lastNamePlaceholder: 'Enter last name',
      additionalDriver: 'Additional Driver',
      addDriver: 'Add Driver',
      accountInfoTitle: 'Account Information',
      email: 'Email',
      emailPlaceholder: 'example@email.com',
      password: 'Password',
      passwordPlaceholder: 'Enter password',
      passwordMin8: 'At least 8 characters',
      passwordUppercase: 'Contains uppercase letter',
      passwordNumber: 'Contains number',
      passwordSpecial: 'Contains special character (!@#$%)',
      contactInfoTitle: 'Contact Information',
      phoneNumber: 'Phone Number',
      phonePlaceholder: '812345678',
      flightNumber: 'Flight Number (optional)',
      flightPlaceholder: 'TG123',
      taxInvoiceTitle: 'Tax Invoice',
      personal: 'Individual',
      company: 'Company',
      taxId: 'Tax ID',
      taxIdPlaceholder: '1234567890123',
      taxIdHint: 'Enter 13-digit tax ID',
      contactName: 'Contact First Name',
      contactLastName: 'Contact Last Name',
      addressTitle: 'Address',
      country: 'Country',
      selectCountry: 'Select Country',
      thailand: 'Thailand',
      usa: 'United States',
      province: 'Province',
      selectProvince: 'Select Province',
      bangkok: 'Bangkok',
      chiangmai: 'Chiang Mai',
      phuket: 'Phuket',
      district: 'District',
      selectDistrict: 'Select District',
      subDistrict: 'Sub-district',
      selectSubDistrict: 'Select Sub-district',
      houseType: 'Address Type',
      selectHouseType: 'Select Type',
      house: 'House',
      condo: 'Condo',
      apartment: 'Apartment',
      houseNumber: 'House Number',
      houseNumberPlaceholder: '123',
      village: 'Village',
      villagePlaceholder: 'Village',
      building: 'Building',
      buildingPlaceholder: 'Building name',
      soi: 'Soi',
      soiPlaceholder: 'Soi',
      road: 'Road',
      roadPlaceholder: 'Road',
      postalCode: 'Postal Code',
      postalCodePlaceholder: '10500',
      fullAddress: 'Full Address',
      acceptTerms: 'I accept the',
      termsConditions: 'Terms and Conditions',
      privacyPolicy: 'Privacy Policy',
      carTitle: 'TOYOTA YARIS CROSS',
      carSubtitle: 'or equivalent',
      pickup: 'Pickup',
      pickupLocation: 'Pickup Location',
      return: 'Return',
      returnLocation: 'Return Location',
      paymentBreakdown: 'Payment Breakdown',
      carRental: 'Car Rental',
      days: 'days',
      insurance: 'SCDW Insurance',
      deliveryFee: 'Pickup-Delivery Fee',
      discount: 'Discount',
      subtotal: 'Subtotal',
      vat: 'VAT (7%)',
      grandTotal: 'Grand Total',
      paymentMethodTitle: 'Payment Method',
      payNow: 'Pay Now',
      payLater: 'Pay Later',
      discountBadge: '5% Off',
      proceed: 'Proceed',
      creditCardNote: 'Please Prepare Credit Card',
      creditCardName: 'Card name matches renter name',
      creditCardLimit: 'Minimum credit limit ฿6,000',
      creditCardNoDebit: 'No debit cards accepted',
      required: '*'
    },

    // Payment Page
    payment: {
      timerText: 'Please complete the transaction within',
      minutes: 'minutes',
      gatewayTitle: 'Payment Gateway',
      gatewaySubtitle: 'Payment Channel',
      carStatus: 'Status: Awaiting Payment',
      renterDriver: 'Renter/Driver Information',
      additionalDriver: 'Additional Driver',
      email: 'Email',
      phoneNumber: 'Phone Number',
      pickupDropoffTitle: 'Pickup/Drop-off Point',
      pickupPoint: 'Pickup Point',
      dropoffPoint: 'Drop-off Point',
      pickupService: 'Pick-Up Service',
      dropoffService: 'Drop-Off Service',
      serviceCharges: 'Service Charges',
      carRental: 'Car Rental',
      days: 'days',
      insurance: 'Insurance',
      cdw: 'CDW',
      cdwDescription: 'Covers first damage deductible of 5,350 - 16,050 Baht',
      additionalServices: 'Additional Services',
      childSeat: 'Child Seat',
      childSeatDescription: 'Safety equipment for children during travel',
      specialAssistance: 'Special assistance',
      specialAssistanceDescription: 'Special assistance service provided by the service provider',
      totalToPay: 'Total Amount to Pay',
      bookingInfo: 'Booking Information',
      paymentTitle: 'Payment',
      payNow: 'Pay Now',
      payEarlySave: 'Pay early and save more',
      payFullAmount: 'Pay full amount',
      noCancel: 'Cannot cancel or modify the rental',
      acceptPrivacy: 'I have read and accept the terms and conditions stated in the Privacy Policy',
      ageRequirement: 'Driver must be over 21 years old *Must have driver\'s license for at least 1 year',
      creditCardTitle: 'Please prepare your actual credit card for deposit',
      creditCardName: 'Card name must match the booking name',
      creditCardLimit: 'Minimum credit limit of 6,000 Baht',
      creditCardNoDebit: 'No debit cards or other person\'s credit cards accepted',
      totalPrice: 'Total Price',
      vat: 'VAT (7%)',
      totalNet: 'Net Total',
      payButton: 'Pay'
    }
  },

  zh: {
    // Navigation
    nav: {
      home: '首页',
      about: '关于我们',
      cars: '租车',
      promotions: '优惠活动',
      branches: '分店',
      articles: '文章',
      contact: '联系我们',
      login: '登录',
      register: '注册',
      bookingInfo: '预订信息',
      manageAccount: '管理账户',
      logout: '登出'
    },

    // Search Bar
    search: {
      pickupLocation: '取车地点',
      returnLocation: '还车地点',
      from: 'From:',
      to: 'To:',
      coupon: 'Coupon:',
      searchCar: '搜索',
      bangkok: 'Bangkok',
      suvarnabhumiAirport: 'Suvarnabhumi Airport',
      donMueangAirport: 'Don Mueang International Airport'
    },

    // Online Check-in
    checkin: {
      title: '在线办理登机手续',
      subtitle: '请填写信息并上传文件以办理登机手续',
      subtitleRetry: '或选择重新提交以完成文件提交',
      bookingInfo: '预订信息',
      bookingCode: '预订代码',
      pickup: '取车',
      return: '还车',
      importantInfo: '重要信息',
      creditCardNotice: '请在取车地点准备信用卡用于押金（不接受借记卡）。押金将在还车后 7-14 个工作日内退还',
      requiredDocuments: '租车所需文件',
      driverQualifications: '驾驶员资格',
      uploadDocuments: '上传文件',
      driverLicense: '驾驶证复印件',
      idCard: '身份证复印件',
      required: '*',
      uploadPlaceholder: '点击上传文件或将文件拖放到此处',
      uploadHint: '支持 JPG、PNG 或 PDF 文件，最大 10MB',
      acceptTerms: '我接受',
      termsLink: '条款和条件',
      termsText: '租车',
      certifyDocuments: '我证明上传的文件有效且未过期',
      submit: '提交',
      successTitle: '提交成功',
      successMessage: '您的文件已成功提交。请等待工作人员验证',
      approvingTitle: '在线办理登机手续',
      approvingSubtitle: '验证文件中',
      pendingStatus: '待文件验证',
      approvingMessage: '您的文件正在验证中',
      contactInfo: '如有任何问题，请联系',
      close: '关闭',
      viewBooking: '查看预订信息',
      errorTitle: '无效文件',
      errorMessage: '请重新提交文件或联系我们的团队获取文件提交信息',
      retryButton: '在线办理登机手续',
      days: '天'
    },

    // Booking Confirmation
    confirmation: {
      title: '预订成功',
      subtitle: '预订副本已发送至您的电子邮件',
      successBanner: '办理登机成功',
      successMessage: '无需再携带 \'原始文件\'',
      creditCardTitle: '请准备您的信用卡用于押金',
      booking: '预订',
      status: '状态',
      statusWaitingCheckin: '等待办理登机',
      statusPaidWaitingPickup: '已付款 - 等待取车',
      customer: '客户',
      fullName: '全名',
      phone: '电话号码',
      email: '电子邮件',
      pickupService: '取车服务',
      returnService: '还车服务',
      breakdown: '明细',
      carRental: '租车费用',
      insurance: 'CDW 保险',
      services: '附加服务',
      discount: '折扣',
      subtotal: '小计',
      vat: '增值税 (7%)',
      total: '总计',
      payment: '付款',
      dateTime: 'Date/Time',
      transactionId: 'Transaction ID',
      paymentMethod: 'Payment Method',
      viewDetails: '付款完成',
      home: '首页',
      checkin: '办理登机'
    },

    // Booking History
    history: {
      title: '预订信息',
      ongoing: '进行中',
      completed: '已完成',
      bookingCode: '预订代码',
      status: '状态',
      statusPaid: '付款成功',
      checkinButton: '办理登机',
      waitingButton: '待处理',
      detailsButton: '详情'
    },

    // Common
    common: {
      baht: '฿',
      perDay: '/ 天',
      days: '天',
      readMore: '阅读更多',
      viewDetails: '查看详情',
      book: '立即预订',
      submit: '提交',
      cancel: '取消',
      save: '保存',
      edit: '编辑',
      delete: '删除',
      search: '搜索',
      filter: '筛选',
      all: '全部'
    },

    // Home Page
    home: {
      title: '廉价租车 & 机场接送',
      subtitle: '优质租车服务，价格合理',
      howItWorks: '使用方法',
      whyChooseUs: '为什么选择我们',
      popularCars: '热门车型',
      testimonials: '客户评价'
    },

    // About Page
    about: {
      title: '关于我们',
      subtitle: '值得信赖的租车服务提供商',
      ourStory: '我们的故事',
      ourMission: '我们的使命',
      ourVision: '我们的愿景',
      ourTeam: '我们的团队'
    },

    // Contact Page
    contact: {
      title: '联系我们',
      subtitle: '有问题？请与我们联系',
      name: '姓名',
      email: '电子邮件',
      phone: '电话',
      message: '留言',
      send: '发送留言',
      address: '地址',
      workingHours: '工作时间',
      followUs: '关注我们'
    },

    // Cars Page
    cars: {
      title: '租车',
      subtitle: '选择适合您的车辆',
      filterBy: '筛选条件',
      carType: '车型',
      priceRange: '价格范围',
      seats: '座位数',
      transmission: '变速箱',
      automatic: '自动',
      manual: '手动',
      perDay: '每天',
      bookNow: '立即预订'
    },

    // Promotions Page
    promotions: {
      title: '优惠活动',
      subtitle: '为您提供特别优惠',
      activePromotions: '有效优惠',
      expiredPromotions: '已过期优惠',
      validUntil: '有效期至',
      useCode: '使用代码',
      termsConditions: '条款和条件'
    },

    // Branches Page
    branches: {
      title: '取车和还车地点',
      subtitle: '我们的分店和服务点',
      airport: '机场',
      cityCenter: '市中心',
      openingHours: '营业时间',
      getDirections: '获取路线'
    },

    // Articles Page
    articles: {
      title: '文章',
      subtitle: '提示和有用信息',
      categories: '分类',
      latestArticles: '最新文章',
      popularArticles: '热门文章',
      publishedOn: '发布于'
    },

    // FAQ Page
    faq: {
      title: '常见问题',
      subtitle: '常见问题解答',
      booking: '预订',
      payment: '付款',
      insurance: '保险',
      driverRequirements: '驾驶员要求',
      cancellation: '取消'
    },

    // Privacy Policy Page
    privacy: {
      title: '隐私政策',
      subtitle: '我们重视您的隐私',
      lastUpdated: '最后更新',
      introduction: '简介',
      dataCollection: '数据收集',
      dataUsage: '数据使用',
      dataSecurity: '数据安全',
      yourRights: '您的权利'
    },

    // Hero Section
    hero: {
      rentWith: '租车与',
      bestPrice: '最优价格',
      startingPrice: '起价仅 2,000 ฿/天',
      carCare: '最佳保养车辆',
      maintenance: '所有车辆均按最高标准保养',
      service: '最佳服务，关注每个细节',
      pickupLocation: '取车',
      selectLocation: '选择地点',
      pickupDate: '取车日期',
      pickupTime: '取车时间',
      returnDate: '还车日期',
      returnTime: '还车时间',
      searchCars: '搜索车辆'
    },

    // Promotion Section
    promotion: {
      monthlyTitle: '每月优惠',
      hotDeals: '折扣超过 30%'
    },

    // Category Section
    category: {
      title: '车辆类别',
      viewAll: '查看全部'
    },

    // New Promotion Section
    newPromotion: {
      title: '最新优惠',
      viewAll: '查看全部'
    },

    // Location Map Section
    locationMap: {
      title: 'asap 分店就在您附近',
      description: '全国超过 11 家分店',
      viewAllBranches: '查看所有分店'
    },

    // Branch Selection Section
    branchSelection: {
      title: '选择便利的分店',
      description: '可在任何分店取车和还车',
      allBranches: '所有分店',
      airports: '机场',
      cityBranches: '市区分店'
    },

    // App Download Section
    appDownload: {
      title: '下载 asap 应用',
      description: '预订更便捷、更方便、更快速',
      downloadOn: '下载于',
      appStore: 'App Store',
      googlePlay: 'Google Play'
    },

    // Service Cards Section
    serviceCards: {
      title: '我们的服务',
      easyBooking: '轻松预订',
      easyBookingDesc: '在几分钟内轻松在线预订车辆',
      flexibleRental: '灵活租赁',
      flexibleRentalDesc: '根据您的方便选择取车和还车',
      allInclusive: '全包服务',
      allInclusiveDesc: '完整的保险和附加服务',
      support247: '24/7 服务',
      support247Desc: '我们的团队全天候为您服务'
    },

    // Why Choose Us Section
    whyChoose: {
      title: '为什么选择',
      titleHighlight: 'asap',
      qualityCars: '优质车辆',
      qualityCarsDesc: '所有车辆均经过彻底检查',
      bestPrice: '最优价格',
      bestPriceDesc: '保证最佳性价比',
      easyProcess: '简易流程',
      easyProcessDesc: '快速便捷地预订和取车',
      trustworthy: '值得信赖',
      trustworthyDesc: '超过 10 年的服务经验，数千名客户'
    },

    // Travel Blog Section
    travelBlog: {
      title: '旅游文章',
      readMore: '阅读更多',
      viewAll: '查看全部'
    },

    // About sections
    aboutHero: {
      title: '关于',
      titleHighlight: 'asap',
      description: '泰国领先的租车服务提供商'
    },

    aboutImage: {
      yearsExperience: '年',
      experienceText: '经验',
      happyCustomers: '客户',
      customersText: '满意'
    },

    aboutServices: {
      title: '我们的服务',
      service1Title: '短期租赁',
      service1Desc: '适合旅游和商务出行',
      service2Title: '长期租赁',
      service2Desc: '月租特惠套餐',
      service3Title: '接送服务',
      service3Desc: '机场接送和目的地服务',
      service4Title: '全面保险',
      service4Desc: '涵盖所有风险的保险'
    },

    aboutWhyChoose: {
      mainTitle: '因为我们',
      mainTitleHighlight: '理解',
      mainTitleLine2: '每一个需求',
      subtitle: '每一次旅程',
      feature1Title: '解锁',
      feature1TitleNormal: '每一次旅程',
      feature1Desc: '体验无障碍旅行，与 asap 一起保持灵活性',
      feature2Title: '自由',
      feature2TitleNormal: '每一次旅程',
      feature2Desc: '自信地选择您的路线和时间，高端租车满足您的旅行需求',
      feature3Title: '价值',
      feature3TitleNormal: '每一次旅程',
      feature3Desc: '实惠的价格，快速可靠的服务，让旅程顺畅',
      feature4Title: '关怀',
      feature4TitleNormal: '每一次旅程',
      feature4Desc: '自信出行，服务系统专注安全，24小时支援'
    },

    aboutRentalService: {
      title: '汽车租赁服务',
      carsCount: '9,000',
      mainDesc: '我们的系统中拥有超过 {count} 辆车。您将获得快速服务、精准咨询和建议，确保每次旅程准时无阻',
      subDesc: '专业工作专注于用心服务。24小时专业人员协助，全面汽车保险覆盖每次旅程，让您在每条路线上都安心',
      overlayLine1: 'Get there ASAP,',
      overlayLine2: 'Use ASAP.',
      overlayLocation: 'Don Muang'
    },

    aboutLocationMap: {
      title: '便捷租车',
      titleHighlight: '随处可得',
      subtitle: '分店覆盖曼谷、',
      subtitleLine2: '机场和全国主要城市'
    },

    // Contact Form Section
    contactForm: {
      title: '联系',
      titleHighlight: 'asap',
      firstName: '名',
      firstNamePlaceholder: '张',
      lastName: '姓',
      lastNamePlaceholder: '三',
      emailLabel: '电子邮件',
      emailPlaceholder: 'Example@gmail.com',
      phoneLabel: '电话号码',
      phonePlaceholder: '909990000',
      subjectLabel: '主题',
      subjectPlaceholder: '租赁超过 1 个月',
      messageLabel: '留言',
      messagePlaceholder: '有兴趣租赁 2 个月或更长时间，是否有额外折扣？',
      submit: '发送留言',
      submitSuccess: '您的留言已成功发送！',
      companyName: 'Chimahajikitit Auto Performance 股份有限公司',
      companyAddress: '149 Moo 3, Thepharak Road, Thepharak, Mueang Samut Prakan, Samut Prakan 10270'
    },

    // Car Listing Section
    carListing: {
      allCars: '全部',
      compact: '紧凑型',
      largeCar: '大型车',
      suvPpvMpv: 'SUV / PPV / MPV',
      peopleCarriers: '多人车',
      pickupTruck: '皮卡/卡车',
      evHybrid: '电动车 / 混合动力',
      premiumCars: '豪华车',
      filters: '筛选',
      sortBy: '最佳匹配',
      perDay: '/天',
      itemsPerPage: '项目/页',
      whyChooseTitle: '因为我们理解',
      whyChooseTitleLine2: '每一个需求',
      whyChooseSubtitle: '每一次旅程',
      feature1: '解锁每一次旅程',
      feature2: '自由每一次旅程',
      feature3: '品质每一次旅程',
      feature4: '关怀每一次旅程'
    },

    // Promotions Section
    promotionsPage: {
      title: '优惠活动',
      searchPlaceholder: '搜索优惠...',
      sortLabel: '排序',
      sortExpiry: '到期日期',
      sortNewest: '最新',
      sortPopular: '热门',
      useBy: '使用期限：',
      useCoupon: '使用优惠券',
      badgeMonth: '七月促销',
      badgeText: '租车',
      promoTitle: '超值优惠',
      promoSubtitle: '真的',
      promoSubtitleSmall: '惊人',
      downloadVia: '下载通过',
      appName: 'asap 应用'
    },

    // Branches Page
    branchesPage: {
      title: '我们的分店',
      searchPlaceholder: '搜索取车/还车地点...',
      allTab: '全部',
      airportTab: '机场',
      branchTab: '分店',
      rentCar: '租车',
      call: '致电',
      sendEmail: '发送邮件',
      viewDetails: '查看详情',
      itemsPerPage: '项目/页',
      whyChooseTitle: '因为我们理解',
      whyChooseTitleLine2: '每一个需求',
      whyChooseSubtitle: '每一次旅程',
      feature1: '解锁每一次旅程',
      feature2: '自由每一次旅程',
      feature3: '品质每一次旅程',
      feature4: '关怀每一次旅程'
    },

    // Articles Page
    articlesPage: {
      title: '文章',
      searchPlaceholder: '搜索文章...',
      categoryLabel: '分类',
      categoryAll: '全部',
      categoryRental: '入门指南',
      categoryBooking: '预订和取消',
      categoryTips: '提示和建议',
      sortLabel: '排序',
      sortLatest: '最新-最旧',
      sortOldest: '最旧-最新',
      sortPopular: '热门'
    },

    // FAQ Page
    faqPage: {
      title: '常见问题',
      category1: '预订变更/取消',
      category2: '取车和还车',
      category3: '所需文件',
      category4: '车型和保险',
      category5: '付款',
      category6: '客户服务'
    },

    // Login Page
    login: {
      title: '登录',
      email: '电子邮件',
      emailPlaceholder: '电子邮件',
      password: '密码',
      passwordPlaceholder: '密码',
      forgotPassword: '忘记密码？',
      loginButton: '登录',
      divider: '或使用以下方式登录',
      noAccount: '还没有账户？',
      registerHere: '在此注册',
      errorEmailNotFound: '此电子邮件未在我们的系统中注册。请检查并重试',
      errorInvalidCredentials: '您的电子邮件或密码不正确。请检查并重试'
    },

    // Register Page
    register: {
      title: '注册账户',
      email: '电子邮件',
      emailPlaceholder: '电子邮件*',
      password: '密码',
      passwordPlaceholder: '密码*',
      confirmPassword: '确认密码',
      confirmPasswordPlaceholder: '确认密码*',
      registerButton: '注册',
      divider: '或使用以下方式注册',
      haveAccount: '已有账户？',
      loginHere: '在此登录',
      passwordRequirements: {
        minLength: '必须至少 8 个字符长',
        uppercase: '必须包含至少 1 个大写字母 (A–Z)',
        lowercase: '必须包含至少 1 个小写字母 (a–z)',
        number: '必须包含至少 1 个数字 (0–9)'
      },
      errorEmailInUse: '此电子邮件已被使用',
      errorPasswordMismatch: '密码和确认密码不匹配',
      errorGeneral: '无法保存数据。请检查并重试'
    },

    // Email Verification Page
    emailVerification: {
      title: '请验证您的电子邮件',
      description: '我们已向您的电子邮件发送了验证链接。请点击链接以验证您的电子邮件',
      resendCountdown: '{countdown} 秒后重新发送',
      resendButton: '重新发送验证链接',
      emailIncorrect: '电子邮件不正确？',
      changeEmail: '更改电子邮件',
      skipForTest: '暂时跳过（测试）',
      resendSuccess: '验证链接已重新发送！'
    },

    // Registration Success Page
    registrationSuccess: {
      title: '注册成功',
      welcome: '欢迎来到 ASAP！',
      goToHome: '前往首页',
      info1: '您现在可以立即开始使用我们的服务',
      info2: '如有任何问题，请随时',
      contactUs: '联系我们',
      info2End: ''
    },

    // Reset Password Page
    resetPassword: {
      title: '重置密码',
      subtitle: '输入您的电子邮件以重置密码',
      emailPlaceholder: '电子邮件*',
      nextButton: '下一步',
      newPasswordTitle: '输入新密码',
      password: '密码',
      newPasswordPlaceholder: '新密码*',
      confirmPassword: '确认密码',
      confirmPasswordPlaceholder: '确认密码*',
      passwordRequirements: {
        minLength: '必须至少 8 个字符长',
        uppercase: '必须包含至少 1 个大写字母 (A-Z)',
        lowercase: '必须包含至少 1 个小写字母 (a-z)',
        number: '必须包含至少 1 个数字 (0-9)'
      },
      errorPasswordMismatch: '密码和确认密码不匹配',
      successTitle: '密码重置成功',
      successMessage: '欢迎来到 ASAP！',
      loginButton: '登录'
    },

    // Account Page
    account: {
      title: '管理账户',
      menu: {
        topics: '主题',
        bookings: '预订信息',
        personal: '个人信息',
        tax: '税务发票地址',
        settings: '账户信息',
        terms: '条款和条件'
      }
    },

    // Change Email Page
    changeEmail: {
      title: '输入新电子邮件',
      newEmailPlaceholder: '新电子邮件*',
      nextButton: '下一步',
      successTitle: '电子邮件更改成功',
      successMessage: '欢迎来到 ASAP！',
      goToHome: '前往首页',
      errorInvalidEmail: '无法使用此电子邮件。请输入新电子邮件',
      errorEmailInUse: '此电子邮件已被使用。请使用其他电子邮件',
      errorSendFailed: '无法发送链接至电子邮件'
    },

    // Change Password Page
    changePassword: {
      titleOldPassword: '输入旧密码',
      titleNewPassword: '输入新密码',
      oldPasswordPlaceholder: '密码*',
      newPasswordPlaceholder: '新密码*',
      confirmPasswordPlaceholder: '确认密码*',
      passwordLabel: '密码',
      confirmPasswordLabel: '确认密码',
      forgotPassword: '忘记密码？',
      nextButton: '下一步',
      passwordRequirements: {
        minLength: '必须至少 8 个字符长',
        uppercase: '必须包含至少 1 个大写字母 (A-Z)',
        lowercase: '必须包含至少 1 个小写字母 (a-z)',
        number: '必须包含至少 1 个数字 (0-9)'
      },
      errorOldPasswordIncorrect: '密码不正确。请重试',
      errorPasswordMismatch: '密码和确认密码不匹配',
      errorGeneral: '发生错误。请重试',
      successTitle: '密码更改成功',
      successMessage: '欢迎来到 ASAP！',
      goToHome: '返回首页'
    },

    // Promotion Detail Page
    promotionDetail: {
      bookEarly: '早预订，多省钱',
      discountUpTo: '优惠券最高 50% 折扣',
      validUntil: '有效期至',
      hours: '小时',
      termsConditions: '详情和条件',
      useCoupon: '使用优惠券',
      aboutPromotion: '关于促销',
      eligibilityConditions: '资格条件',
      disclaimer1: '*条款和条件由公司规定',
      disclaimer2: '*公司保留在不事先通知的情况下更改条款和条件的权利',
      badgeText: '租车',
      badgeMonth: '七月促销',
      promoTitle: '超值优惠',
      promoSubtitle: '真的',
      promoSubtitleSmall: '惊人',
      downloadApp: '下载通过',
      appName: 'asap 应用',
      downloadText: '下载 "Asap App"'
    },

    // Article Detail Page
    articleDetail: {
      tags: '标签',
      share: '分享',
      relatedArticles: '推荐文章',
      articles: '文章'
    },

    // Car Detail Page
    carDetail: {
      priceFor: '价格为',
      daysStarting: '天起',
      or: '或',
      perDay: '泰铢/天',
      insurance: '保险',
      insuranceSubtitle: '购买保险，减少担忧',
      insuranceDetails: '查看更多保险详情',
      services: '附加服务',
      servicesSubtitle: '租车、儿童座椅等',
      addService: '添加服务',
      perPiecePerDay: '฿/件/天',
      totalPayment: '应付总额',
      upgrade: '升级',
      payNow: '立即支付',
      payLater: '稍后支付',
      payFullOnPickup: '取车时支付全额',
      canCancelChange: '可在服务前 48 小时内取消或更改。取消条件',
      rentCar: '租车',
      creditCardRequired: '请准备信用卡用于押金',
      creditCardBullet1: '用于购买保险和押金',
      creditCardBullet2: '最低信用额度 6,000 泰铢',
      creditCardBullet3: '不接受借记卡或他人信用卡',
      confirm: '确认',
      insuranceModalTitle: '附加保险详情',
      recommended: '推荐',
      insuranceAndCoverage: '保险和覆盖',
      cdwTitle: 'CDW',
      cdwSubtitle: '免赔额为 5,350 - 16,050 泰铢',
      scdwTitle: 'SCDW',
      scdwSubtitle: '无免赔额，但玻璃、轮胎、车轮除外',
      fullProtectionTitle: '全面保护',
      fullProtectionSubtitle: '全面覆盖，无需额外付款（一级保险）',
      deductible: '免赔额',
      coverage1: '覆盖 5,350 - 16,050 泰铢',
      coverage2: '无免赔额<br/>但玻璃、轮胎、车轮除外',
      coverage3: '全面覆盖，无需额外付款',
      price: '价格',
      noDeductibleExcept: '正常损坏无需支付免赔额'
    },

    // Booking Detail Page
    bookingDetail: {
      breadcrumbAccount: '账户',
      breadcrumbBookingInfo: '预订信息',
      bookingReceipt: '预订收据',
      bookingTime: '预订时间',
      statusCancelled: '状态：已取消于',
      bookingCode: '预订代码',
      pickupReturn: '取车/还车地点',
      driverInfo: '驾驶员/租车人信息',
      email: '电子邮件',
      additionalDriver: '附加驾驶员',
      phoneNumber: '电话号码',
      serviceCharges: '服务费',
      carRental: '租车费用',
      carRentalDays: '租车费用（x2 天）',
      insurance: '保险',
      extraServices: '额外服务',
      discount: '折扣',
      otherDiscounts: '其他折扣',
      subtotal: '小计',
      vat: '增值税（7%）',
      totalNet: '总净额',
      payment: '付款',
      paymentSuccess: '付款成功',
      dateTime: 'Date/Time',
      transactionId: 'Transaction ID',
      paymentMethod: 'Payment Method',
      cancelBooking: '取消预订',
      confirmCancel: '确认取消？',
      confirmCancelMessage: '您确定要取消此预订吗？',
      cancel: '取消',
      confirm: '确认',
      pickupService: '取车地点：+ 取车服务',
      dropoffService: '还车地点：+ 还车服务'
    },

    // Checkout Page
    checkout: {
      timerText: '请在以下时间内完成交易',
      minutes: '分钟',
      progressStep1: '附加服务',
      progressStep2: '租车人/驾驶员信息',
      progressStep3: '付款',
      specialOfferTitle: '特别优惠！',
      specialOfferSubtitle: '在促销结束前以特价升级您的车辆',
      save: '节省',
      seats: '座位',
      perDay: '/天',
      upgradeNow: '立即升级',
      driverInfoTitle: '驾驶员/租车人信息',
      renterDriver: '租车人/驾驶员',
      sameAsPrimary: '与主要驾驶员（租车人）相同',
      titlePrefix: '称谓',
      selectTitle: '选择称谓',
      mr: '先生',
      mrs: '女士',
      miss: '小姐',
      firstName: '名字',
      firstNamePlaceholder: '输入名字',
      lastName: '姓氏',
      lastNamePlaceholder: '输入姓氏',
      additionalDriver: '附加驾驶员',
      addDriver: '添加驾驶员',
      accountInfoTitle: '账户信息',
      email: '电子邮件',
      emailPlaceholder: 'example@email.com',
      password: '密码',
      passwordPlaceholder: '输入密码',
      passwordMin8: '至少8个字符',
      passwordUppercase: '包含大写字母',
      passwordNumber: '包含数字',
      passwordSpecial: '包含特殊字符 (!@#$%)',
      contactInfoTitle: '联系信息',
      phoneNumber: '电话号码',
      phonePlaceholder: '812345678',
      flightNumber: '航班号（如有）',
      flightPlaceholder: 'TG123',
      taxInvoiceTitle: '税务发票',
      personal: '个人',
      company: '公司',
      taxId: '税号',
      taxIdPlaceholder: '1234567890123',
      taxIdHint: '输入13位税号',
      contactName: '联系人名字',
      contactLastName: '联系人姓氏',
      addressTitle: '地址',
      country: '国家',
      selectCountry: '选择国家',
      thailand: '泰国',
      usa: '美国',
      province: '省份',
      selectProvince: '选择省份',
      bangkok: '曼谷',
      chiangmai: '清迈',
      phuket: '普吉岛',
      district: '区/县',
      selectDistrict: '选择区/县',
      subDistrict: '街道/乡镇',
      selectSubDistrict: '选择街道/乡镇',
      houseType: '地址类型',
      selectHouseType: '选择类型',
      house: '房屋',
      condo: '公寓',
      apartment: '公寓楼',
      houseNumber: '门牌号',
      houseNumberPlaceholder: '123',
      village: '村庄',
      villagePlaceholder: '村庄',
      building: '建筑物',
      buildingPlaceholder: '建筑物名称',
      soi: '巷',
      soiPlaceholder: '巷',
      road: '道路',
      roadPlaceholder: '道路',
      postalCode: '邮政编码',
      postalCodePlaceholder: '10500',
      fullAddress: '完整地址',
      acceptTerms: '我接受',
      termsConditions: '条款和条件',
      privacyPolicy: '隐私政策',
      carTitle: 'TOYOTA YARIS CROSS',
      carSubtitle: '或同等车型',
      pickup: '取车',
      pickupLocation: '取车地点',
      return: '还车',
      returnLocation: '还车地点',
      paymentBreakdown: '付款明细',
      carRental: '租车费用',
      days: '天',
      insurance: 'SCDW保险',
      deliveryFee: '取车-送车费用',
      discount: '折扣',
      subtotal: '小计',
      vat: '增值税（7%）',
      grandTotal: '总计',
      paymentMethodTitle: '付款方式',
      payNow: '立即付款',
      payLater: '稍后付款',
      discountBadge: '优惠5%',
      proceed: '继续',
      creditCardNote: '请准备信用卡',
      creditCardName: '卡片姓名与租车人姓名一致',
      creditCardLimit: '最低信用额度 ฿6,000',
      creditCardNoDebit: '不接受借记卡',
      required: '*'
    },

    // Payment Page
    payment: {
      timerText: '请在以下时间内完成交易',
      minutes: '分钟',
      gatewayTitle: '支付网关',
      gatewaySubtitle: '支付渠道',
      carStatus: '状态：等待付款',
      renterDriver: '租车人/驾驶员信息',
      additionalDriver: '附加驾驶员',
      email: '电子邮件',
      phoneNumber: '电话号码',
      pickupDropoffTitle: '取车/还车地点',
      pickupPoint: '取车地点',
      dropoffPoint: '还车地点',
      pickupService: '取车服务',
      dropoffService: '还车服务',
      serviceCharges: '服务费',
      carRental: '租车费用',
      days: '天',
      insurance: '保险',
      cdw: 'CDW',
      cdwDescription: '覆盖首次损坏免赔额 5,350 - 16,050 泰铢',
      additionalServices: '附加服务',
      childSeat: '儿童座椅',
      childSeatDescription: '儿童旅行安全设备',
      specialAssistance: '特别协助',
      specialAssistanceDescription: '服务提供商准备的特别协助服务',
      totalToPay: '应付总额',
      bookingInfo: '预订信息',
      paymentTitle: '付款',
      payNow: '立即付款',
      payEarlySave: '提前付款节省更多',
      payFullAmount: '全额付款',
      noCancel: '无法取消或修改租车',
      acceptPrivacy: '我已阅读并接受隐私政策中规定的条款和条件',
      ageRequirement: '驾驶员必须年满21岁 *必须持有驾驶执照至少1年',
      creditCardTitle: '请准备您的实际信用卡用于押金',
      creditCardName: '卡片姓名必须与预订姓名一致',
      creditCardLimit: '最低信用额度6,000泰铢',
      creditCardNoDebit: '不接受借记卡或他人信用卡',
      totalPrice: '总价',
      vat: '增值税（7%）',
      totalNet: '净总额',
      payButton: '付款'
    }
  }
}

export function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const currentLang = computed(() => currentLanguage.value)

  return {
    currentLanguage: currentLang,
    setLanguage,
    t
  }
}
