import {
  faithPacks,
  featuredSurahs,
  homeHighlights,
  learningModules as baseLearningModules,
  prayers as basePrayers,
  qaris,
  siteConfig,
  stories as baseStories,
  type FaithPack,
  type LearningModule,
  type Prayer,
  type Story
} from "./contents";

export { faithPacks, featuredSurahs, homeHighlights, qaris, siteConfig };
export type { FaithPack, LearningModule, Prayer, Story };

const prayerDetails: Record<string, Partial<Prayer>> = {
  "before-eating": {
    source: "Hadis Umar bin Abi Salamah dalam Sahih Bukhari dan Sahih Muslim: Nabi mengajarkan menyebut nama Allah, makan dengan tangan kanan, dan makan dari bagian yang dekat.",
    note: "KAPAN DIBACA\nSesaat sebelum mulai makan atau minum. Jika lupa di awal, baca nama Allah ketika teringat sesuai tuntunan yang dipelajari.\n\nCARA MENGAMALKAN\n1. Pastikan makanan halal dan baik.\n2. Mulai dengan menyebut nama Allah.\n3. Makan dengan tangan kanan dan jaga adab saat makan bersama.\n\nCATATAN\nJangan memaksa satu redaksi panjang sebagai satu-satunya doa sebelum makan. Basmalah memiliki dasar yang kuat."
  },
  "after-eating": {
    source: "Riwayat Abu Dawud dan Tirmidzi tentang pujian kepada Allah setelah makan. Nomor hadis dapat berbeda menurut edisi; produk komersial sebaiknya mencantumkan edisi rujukan.",
    note: "KAPAN DIBACA\nSetelah selesai makan.\n\nMAKNA PRAKTIS\nDoa ini menanamkan rasa syukur bahwa makanan dan kemampuan memperolehnya adalah rezeki dari Allah.\n\nCARA MENGAMALKAN\nBaca dengan tenang dan pahami artinya. Tidak ada kebutuhan menetapkan hitungan pengulangan tertentu tanpa dalil."
  },
  "enter-bathroom": {
    source: "Riwayat Bukhari dan Muslim dari Anas bin Malik tentang doa perlindungan sebelum masuk tempat buang hajat.",
    note: "KAPAN DIBACA\nSebelum memasuki toilet atau tempat buang hajat.\n\nPENTING\nDoa masuk kamar mandi berbeda dengan niat mandi wajib. Jangan mencampur dua hal tersebut dalam materi.\n\nADAB RINGKAS\nBaca sebelum masuk, jaga kebersihan, dan hindari membaca zikir panjang ketika sedang berada di tempat buang hajat."
  },
  "leave-bathroom": {
    source: "Riwayat Abu Dawud dan Tirmidzi dari Aisyah tentang ucapan ‘Ghufrānaka’ setelah keluar dari tempat buang hajat.",
    note: "KAPAN DIBACA\nSetelah keluar dari toilet.\n\nCATATAN\nRedaksinya singkat. Jangan menambahkan kalimat lain lalu menganggap semuanya satu hadis yang sama."
  },
  "wake-up": {
    source: "Riwayat Bukhari tentang zikir ketika bangun tidur.",
    note: "KAPAN DIBACA\nKetika bangun dari tidur.\n\nMAKNA\nDoa ini mengingatkan hubungan antara tidur, kehidupan, kematian, dan kembali kepada Allah.\n\nPRAKTIK\nBaca setelah sadar dari tidur, kemudian lanjutkan aktivitas pagi dan ibadah sesuai waktunya."
  },
  knowledge: {
    source: "Al-Qur'an, Surah Taha 20:114.",
    note: "KAPAN DIBACA\nSebelum atau ketika belajar, dan dapat dibaca kapan saja sebagai doa memohon tambahan ilmu.\n\nPRAKTIK\nGabungkan doa dengan usaha nyata: membaca, mencatat, mengulang, bertanya, dan mengamalkan ilmu."
  },
  parents: {
    source: "Al-Qur'an, Surah Al-Isra 17:23–24.",
    note: "KAPAN DIBACA\nKetika mendoakan kedua orang tua.\n\nKONTEKS AYAT\nDoa ini berada dalam rangkaian perintah berbuat baik kepada orang tua.\n\nPRAKTIK\nJangan berhenti pada ucapan doa; wujudkan melalui sikap hormat, bantuan, komunikasi yang baik, dan memenuhi hak mereka selama tidak bertentangan dengan kewajiban agama."
  },
  "good-world-hereafter": {
    source: "Al-Qur'an, Surah Al-Baqarah 2:201.",
    note: "KAPAN DIBACA\nDapat dibaca dalam doa pribadi kapan saja.\n\nCAKUPAN MAKNA\nMemohon kebaikan dunia, kebaikan akhirat, dan perlindungan dari azab neraka. Karena cakupannya luas, doa ini cocok menjadi salah satu doa utama yang dihafal.\n\nCATATAN\nAyat tersebut tidak menetapkan jumlah pengulangan tertentu."
  },
  anxiety: {
    source: "Al-Qur'an, Surah Ali 'Imran 3:173.",
    note: "KONTEKS\nKalimat ‘Hasbunallāhu wa ni‘mal wakīl’ muncul sebagai ungkapan tawakal ketika orang beriman menghadapi ancaman. Label ‘saat kesulitan’ adalah penggunaan makna, bukan nama baku doa dalam ayat.\n\nPENTING\nDukungan spiritual dapat berjalan bersama bantuan profesional. Untuk kecemasan berat atau menetap, aplikasi tidak boleh diposisikan sebagai pengganti layanan kesehatan."
  },
  travel: {
    source: "Al-Qur'an, Surah Az-Zukhruf 43:13–14. Sahih Muslim juga memuat doa safar yang lebih panjang.",
    note: "KAPAN DIBACA\nKetika menaiki kendaraan dan memulai perjalanan.\n\nCARA MENGAMALKAN\nBaca dengan memahami nikmat kendaraan dan keselamatan perjalanan.\n\nCATATAN SUMBER\nBagian pada kartu ini berasal dari ayat Al-Qur'an. Bila menambahkan doa safar lengkap dari hadis, tampilkan sebagai teks terpisah agar sumbernya tidak bercampur."
  },
  "for-deceased": {
    source: "Bagian dari doa jenazah dalam riwayat Sahih Muslim.",
    note: "KAPAN DIBACA\nKetika mendoakan seorang Muslim yang telah wafat dan dapat menjadi bagian dari doa jenazah sesuai tuntunan yang dipelajari.\n\nKATA GANTI\nLafaz pada kartu menggunakan kata ganti laki-laki tunggal. Sesuaikan kata ganti untuk perempuan atau kelompok.\n\nCATATAN\nAplikasi tidak menggantikan pembelajaran fikih shalat jenazah secara lengkap."
  },
  istighfar: {
    source: "Istighfar merupakan zikir umum memohon ampun; banyak riwayat sahih menunjukkan Nabi memperbanyak istighfar.",
    note: "MAKNA\nIstighfar bukan hanya ucapan lisan. Tobat yang benar berkaitan dengan penyesalan, berhenti dari dosa, dan tekad memperbaiki diri. Bila kesalahan menyangkut hak orang lain, hak tersebut perlu diselesaikan sesuai kemampuan dan ketentuan.\n\nKAPAN DIBACA\nSebagai zikir harian atau ketika menyadari kesalahan."
  }
};

const additionalPrayers: Prayer[] = [
  {
    id: "ghusl-intention",
    title: "Niat mandi wajib",
    category: "Bersuci",
    arabic: "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ فَرْضًا لِلّٰهِ تَعَالَى",
    latin: "Nawaitul ghusla liraf'il hadatsil akbari fardhan lillāhi ta‘ālā.",
    meaning: "Saya berniat mandi untuk mengangkat hadas besar karena Allah Ta'ala.",
    source: "Ini contoh lafaz niat yang populer dalam pembelajaran fikih di Indonesia. Prinsip niat berdasar hadis ‘amal tergantung niat’ dalam Sahih Bukhari dan Sahih Muslim; tidak ada lafaz khusus mandi wajib yang diwajibkan dari Nabi.",
    note: "PENTING\nNiat pada dasarnya berada di hati. Lafaz Arab di atas adalah contoh untuk membantu pemahaman, bukan hadis dan bukan kalimat yang harus diucapkan agar mandi sah.\n\nKAPAN NIAT\nNiat hadir ketika mulai melakukan mandi wajib, dengan rincian posisi niat mengikuti mazhab yang dipelajari.\n\nSETELAH NIAT\n1. Bersihkan najis/kotoran bila ada.\n2. Berwudhu bila mengikuti tata cara mandi janabah yang lebih sempurna.\n3. Siram kepala dan pastikan air mencapai pangkal rambut.\n4. Ratakan air ke seluruh tubuh, termasuk lipatan dan area yang mudah terlewat.\n\nRUJUKAN TATA CARA\nRiwayat Aisyah dan Maimunah tentang mandi janabah Nabi terdapat dalam Sahih Bukhari dan Sahih Muslim."
  },
  {
    id: "after-wudhu",
    title: "Doa setelah wudhu",
    category: "Bersuci",
    arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    latin: "Asyhadu allā ilāha illallāhu wahdahu lā syarīka lah, wa asyhadu anna Muhammadan ‘abduhu wa rasūluh.",
    meaning: "Aku bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah semata, tiada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.",
    source: "Sahih Muslim dari Umar bin Khattab tentang syahadat setelah menyempurnakan wudhu.",
    note: "KAPAN DIBACA\nSetelah selesai berwudhu.\n\nCARA\nSelesaikan wudhu terlebih dahulu lalu baca syahadat dengan memahami maknanya. Tambahan doa lain sesudahnya memiliki riwayat tersendiri; sumbernya perlu dipisahkan bila ditampilkan."
  },
  {
    id: "before-sleep",
    title: "Doa sebelum tidur",
    category: "Harian",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    latin: "Bismikallāhumma amūtu wa ahyā.",
    meaning: "Dengan nama-Mu ya Allah, aku mati dan aku hidup.",
    source: "Riwayat Sahih Bukhari.",
    note: "KAPAN DIBACA\nKetika hendak tidur.\n\nADAB TERKAIT\nDapat dipelajari bersama adab tidur lain yang memiliki dasar riwayat, misalnya berwudhu dan berbaring pada sisi kanan. Jangan menggabungkan seluruh adab menjadi satu lafaz doa."
  },
  {
    id: "leave-home",
    title: "Doa keluar rumah",
    category: "Harian",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin: "Bismillāh, tawakkaltu ‘alallāh, lā haula wa lā quwwata illā billāh.",
    meaning: "Dengan nama Allah, aku bertawakal kepada Allah. Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.",
    source: "Riwayat Abu Dawud dan Tirmidzi.",
    note: "KAPAN DIBACA\nKetika keluar rumah.\n\nMAKNA\nMenggabungkan basmalah, tawakal, dan pengakuan bahwa kekuatan sejati berasal dari Allah. Cukup dibaca ketika keluar; tidak perlu menetapkan hitungan khusus."
  },
  {
    id: "enter-home",
    title: "Zikir ketika masuk rumah",
    category: "Harian",
    arabic: "بِسْمِ اللَّهِ",
    latin: "Bismillāh.",
    meaning: "Dengan nama Allah.",
    source: "Sahih Muslim menyebut mengingat Allah ketika masuk rumah dan ketika makan; An-Nur 24:61 juga mengajarkan memberi salam ketika memasuki rumah.",
    note: "KAPAN DIBACA\nKetika memasuki rumah.\n\nADAB\nSebut nama Allah dan ucapkan salam kepada penghuni rumah. Untuk materi produksi, lebih baik mempertahankan lafaz yang jelas sumbernya daripada membuat formula panjang tanpa rujukan."
  }
];

export const prayers: Prayer[] = [
  ...basePrayers.map((item) => ({ ...item, ...(prayerDetails[item.id] ?? {}) })),
  ...additionalPrayers
];

const learningDetails: Record<string, Partial<LearningModule>> = {
  wudhu: {
    summary: "Wudhu adalah ibadah bersuci yang memiliki syarat, bagian wajib, sunnah, dan pembatal. Materi ini memberi kerangka praktis sambil menandai bagian yang memiliki perbedaan mazhab.",
    essentials: ["Niat sesuai ketentuan mazhab yang diikuti", "Air yang suci dan dapat digunakan untuk bersuci", "Air mengenai anggota wudhu yang wajib", "Tidak ada penghalang kedap air pada bagian yang harus terkena air"],
    steps: [
      "Niat berwudhu di dalam hati dan mulai dengan basmalah. Pelafalan niat bukan syarat universal; rincian hukumnya berbeda dalam tradisi fikih.",
      "Mencuci kedua telapak tangan dan membersihkan kotoran yang dapat menghalangi air.",
      "Berkumur dan membersihkan hidung sebagai bagian dari tata cara wudhu yang diajarkan dalam hadis; rincian status hukumnya berbeda antar mazhab.",
      "Membasuh seluruh wajah dari batas yang dijelaskan dalam fikih, memastikan bagian yang wajib terkena air tidak terlewat.",
      "Membasuh kedua tangan sampai siku, termasuk sela jari dan bagian siku.",
      "Mengusap kepala sesuai cara yang dipelajari. Luas bagian kepala yang wajib diusap memiliki rincian berbeda antar mazhab.",
      "Membasuh kedua kaki sampai mata kaki dan perhatikan tumit serta sela jari yang sering tidak terkena air.",
      "Menjaga tertib sesuai mazhab yang diikuti, tidak berlebihan menggunakan air, lalu membaca zikir setelah wudhu bila mampu."
    ],
    caution: "KESALAHAN YANG SERING TERJADI\n• Air tidak mengenai tumit, sela jari, atau bagian wajah yang wajib.\n• Ada cat/kosmetik/lapisan kedap air yang mencegah air sampai ke kulit.\n• Menganggap semua sunnah sebagai rukun atau sebaliknya.\n• Berlebihan menggunakan air.\n\nPEMBATAL WUDHU\nBuang air dari qubul/dubur dan hilang kesadaran termasuk pembatal yang umum dibahas. Perkara seperti sentuhan kulit, tidur dalam kondisi tertentu, dan hal lain memiliki rincian mazhab.\n\nRUJUKAN DASAR\nAl-Ma'idah 5:6 dan hadis-hadis sifat wudhu Nabi dalam Sahih Bukhari/Sahih Muslim."
  },
  ghusl: {
    summary: "Mandi wajib bertujuan mengangkat hadas besar. Bagian minimal dan tata cara yang lebih sempurna perlu dibedakan agar pengguna memahami mana inti kewajiban dan mana sunnah.",
    essentials: ["Niat mengangkat hadas besar", "Menghilangkan najis bila ada", "Air mencapai seluruh bagian tubuh yang wajib terkena air", "Tidak ada penghalang yang mencegah air sampai ke kulit/rambut yang diwajibkan"],
    steps: [
      "Niat di dalam hati untuk mengangkat hadas besar. Contoh lafaz dapat membantu belajar, tetapi tidak wajib diucapkan dan bukan hadis.",
      "Cuci kedua tangan lalu bersihkan bagian tubuh yang terkena kotoran atau najis.",
      "Berwudhu seperti wudhu untuk shalat bila mengikuti tata cara mandi janabah yang lebih sempurna sebagaimana riwayat Aisyah dan Maimunah.",
      "Siram kepala dan sela rambut dengan baik sampai air mencapai pangkal rambut.",
      "Ratakan air ke seluruh tubuh. Perhatikan ketiak, pusar, lipatan kulit, belakang telinga, sela jari, dan area yang mudah terlewat.",
      "Pastikan tidak ada bagian tubuh yang tetap kering atau tertutup lapisan kedap air.",
      "Setelah selesai, jangan menganggap mandi wajib harus diulang hanya karena tidak membaca satu lafaz tertentu; yang dinilai adalah terpenuhinya ketentuan mandi menurut fikih yang diikuti."
    ],
    caution: "NIAT\nContoh populer: نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ فَرْضًا لِلّٰهِ تَعَالَى — ‘Saya berniat mandi untuk mengangkat hadas besar karena Allah Ta'ala.’ Ini contoh lafaz pembelajaran, bukan hadis dan bukan bacaan wajib.\n\nKESALAHAN UMUM\n• Mengira mandi tidak sah karena lupa melafalkan niat Arab.\n• Pangkal rambut atau lipatan tubuh tidak terkena air.\n• Mencampur doa masuk kamar mandi dengan niat mandi wajib.\n• Mengira mandi wajib harus berlangsung lama.\n\nFAQ SINGKAT\nApakah harus wudhu lagi? Jika mandi dilakukan dengan tata cara yang mencakup wudhu dan tidak terjadi pembatal setelahnya, terdapat rincian fikih tentang kecukupannya. Sediakan opsi mazhab untuk versi lanjutan.\n\nRUJUKAN\nAl-Ma'idah 5:6; riwayat Aisyah dan Maimunah tentang mandi janabah Nabi dalam Sahih Bukhari dan Sahih Muslim."
  },
  tayammum: {
    summary: "Tayamum adalah pengganti bersuci dengan air pada kondisi yang dibenarkan syariat, bukan sekadar pilihan karena ingin lebih praktis.",
    essentials: ["Ada alasan yang membolehkan tayamum", "Niat", "Media tayamum yang sah menurut mazhab yang diikuti", "Mengusap anggota yang ditentukan sesuai tata cara"],
    steps: [
      "Pastikan memang ada alasan yang membolehkan tayamum, misalnya air tidak tersedia atau tidak dapat digunakan karena alasan yang diakui syariat.",
      "Niat tayamum untuk memperoleh kebolehan melakukan ibadah yang mensyaratkan bersuci sesuai fikih yang diikuti.",
      "Gunakan permukaan atau media yang termasuk sha‘id yang suci menurut mazhab yang dipelajari.",
      "Usapkan ke wajah sesuai tata cara.",
      "Usapkan ke tangan sesuai batas dan tata cara yang diajarkan dalam mazhab yang diikuti.",
      "Pahami kapan tayamum berakhir, misalnya ketika sebabnya hilang atau terjadi pembatal yang relevan."
    ],
    caution: "KESALAHAN UMUM\n• Tayamum padahal air mudah tersedia dan aman digunakan.\n• Menganggap semua permukaan otomatis sah tanpa melihat ketentuan media.\n• Tidak memahami kapan tayamum harus diulang.\n\nRUJUKAN\nAn-Nisa 4:43, Al-Ma'idah 5:6, dan hadis Ammar bin Yasir dalam Sahih Bukhari/Sahih Muslim."
  },
  "salah-basics": {
    summary: "Panduan dasar shalat dari persiapan sampai salam, dengan penekanan pada syarat, rukun, tuma'ninah, bacaan pokok, dan ruang perbedaan gerakan sunnah antar mazhab.",
    essentials: ["Masuk waktu", "Bersuci", "Menutup aurat", "Menghadap kiblat bagi yang mampu", "Niat", "Melaksanakan rukun shalat dengan tuma'ninah"],
    steps: [
      "Pastikan waktu shalat sudah masuk, bersuci, pakaian/tempat suci dari najis sesuai ketentuan, aurat tertutup, dan menghadap kiblat bagi yang mampu.",
      "Niat shalat lalu takbiratul ihram. Niat berada di hati; lafaz niat yang dipelajari di sebagian tempat bukan syarat universal.",
      "Berdiri bagi yang mampu, membaca Al-Fatihah pada tempat yang diwajibkan dan pelajari bacaan dengan benar.",
      "Rukuk dengan tuma'ninah, kemudian i'tidal dengan tenang.",
      "Sujud dengan tuma'ninah, duduk di antara dua sujud, lalu sujud kedua.",
      "Ulangi rangkaian sesuai jumlah rakaat sambil menjaga urutan dan tuma'ninah.",
      "Lakukan tasyahud pada tempatnya dan akhiri shalat dengan salam sesuai tuntunan yang diikuti."
    ],
    caution: "KESALAHAN UMUM\n• Terlalu cepat sehingga tidak tuma'ninah.\n• Tidak mempelajari Al-Fatihah dan bacaan pokok.\n• Menyalahkan variasi gerakan sunnah yang berasal dari perbedaan riwayat/mazhab.\n• Memakai jadwal waktu yang salah lokasi.\n\nRUJUKAN\nHadis ‘shalatlah sebagaimana kalian melihat aku shalat’ dalam Sahih Bukhari dan hadis orang yang buruk shalatnya dalam Sahih Bukhari/Sahih Muslim."
  },
  "fasting-basics": {
    summary: "Panduan puasa Ramadan yang membahas tujuan, waktu, niat, pembatal, adab, dan kondisi khusus tanpa menggantikan fatwa atau konsultasi kesehatan.",
    essentials: ["Memastikan masuknya Ramadan menurut otoritas/metode yang diikuti", "Niat sesuai ketentuan fikih", "Menahan diri dari hal yang membatalkan dari fajar sampai matahari terbenam", "Memahami keringanan pada kondisi tertentu"],
    steps: [
      "Pastikan jadwal fajar dan magrib sesuai lokasi pengguna dan sumber waktu yang dapat dipercaya.",
      "Niat puasa sesuai ketentuan mazhab yang diikuti; rincian waktu niat dapat berbeda.",
      "Sejak fajar, tahan diri dari makan, minum, hubungan seksual, dan pembatal lain yang dijelaskan dalam fikih.",
      "Jaga ucapan dan perilaku. Puasa tidak hanya soal lapar dan haus.",
      "Jika mengalami sakit atau kondisi khusus, pelajari keringanan syariat dan konsultasikan kondisi medis kepada tenaga kesehatan bila perlu.",
      "Berbuka ketika matahari terbenam dan pelajari ketentuan qadha/fidyah untuk kondisi yang relevan."
    ],
    caution: "KESALAHAN UMUM\n• Menggunakan jadwal waktu dari kota yang salah.\n• Menganggap semua obat atau prosedur medis memiliki hukum sama.\n• Memberi fatwa sendiri untuk sakit, kehamilan, menyusui, atau perjalanan.\n\nFAQ\nMakan karena lupa: terdapat hadis sahih bahwa orang yang makan/minum karena lupa melanjutkan puasanya. Ini berbeda dengan sengaja.\n\nRUJUKAN\nAl-Baqarah 2:183–187 dan bab puasa dalam Sahih Bukhari/Sahih Muslim."
  },
  "zakat-basics": {
    summary: "Peta belajar zakat yang membedakan zakat fitrah dan zakat harta, syarat, nisab, haul, kadar, serta kelompok penerima tanpa mengunci angka ekonomi yang cepat berubah.",
    essentials: ["Identifikasi jenis zakat", "Periksa syarat wajib", "Gunakan nilai nisab terkini bila relevan", "Hitung sesuai jenis harta", "Salurkan kepada penerima yang berhak"],
    steps: [
      "Tentukan apakah yang dibahas zakat fitrah atau zakat harta.",
      "Periksa syarat kewajiban dan objek harta yang terkena zakat.",
      "Untuk zakat harta, ambil nilai nisab terbaru dari lembaga/otoritas tepercaya; jangan memakai angka lama yang di-hard-code.",
      "Hitung kadar sesuai jenis harta dan metode yang diakui oleh rujukan yang digunakan.",
      "Periksa delapan kelompok penerima zakat dan salurkan melalui penerima/lembaga yang tepercaya.",
      "Simpan catatan perhitungan agar mudah diperiksa kembali."
    ],
    caution: "PRODUKSI\nNilai emas/perak atau komoditas acuan berubah. Kalkulator zakat profesional harus menyimpan tanggal nilai acuan dan sumber data.\n\nRUJUKAN\nAt-Taubah 9:60 tentang kelompok penerima zakat dan lembaga zakat resmi/tepercaya untuk angka serta metode terkini."
  },
  "janazah-basics": {
    summary: "Orientasi pengurusan jenazah sebagai fardu kifayah: menjaga kehormatan, memandikan, mengkafani, menshalatkan, dan menguburkan dengan bimbingan orang yang kompeten.",
    essentials: ["Menjaga kehormatan dan privasi jenazah", "Mematuhi ketentuan syariat", "Mengikuti prosedur kesehatan dan hukum pemakaman setempat", "Belajar praktik dengan pembimbing"],
    steps: [
      "Amankan privasi jenazah dan jangan menyebarkan foto atau video tanpa kebutuhan yang sah.",
      "Hubungi keluarga, pengurus jenazah, atau pihak yang kompeten untuk mengatur proses sesuai syariat dan aturan setempat.",
      "Pelajari tata cara memandikan jenazah dari pembimbing; perhatikan jenis kelamin, aurat, kebersihan, dan kehormatan.",
      "Pelajari pengkafanan sesuai ketentuan yang digunakan di komunitas.",
      "Pelajari tata cara shalat jenazah, termasuk posisi imam, takbir, doa, dan salam sesuai mazhab.",
      "Laksanakan pemakaman dengan mematuhi ketentuan agama dan aturan kesehatan/hukum lokal."
    ],
    caution: "PENTING\nModul digital tidak cukup untuk praktik pertama kali. Pengurusan jenazah menyangkut kehormatan, kesehatan, dan hukum; praktik nyata idealnya dibimbing orang berpengalaman.\n\nRUJUKAN\nHadis-hadis pengurusan jenazah dalam kitab sahih/sunan serta panduan lembaga keagamaan setempat."
  },
  "tajwid-basics": {
    summary: "Belajar tajwid secara bertahap: makhraj dan sifat huruf, mad, nun sukun/tanwin, mim sukun, qalqalah, waqaf, lalu latihan mendengar dan koreksi guru.",
    essentials: ["Makhraj huruf", "Panjang-pendek bacaan", "Hukum nun sukun/tanwin", "Hukum mim sukun", "Waqaf dan ibtida'", "Latihan bersama guru/qari"],
    steps: [
      "Mulai dari makhraj huruf dan bedakan pasangan huruf yang sering tertukar.",
      "Pelajari mad dasar dan ukur panjang dengan konsisten sesuai riwayat bacaan yang dipakai.",
      "Pelajari izhar, idgham, iqlab, dan ikhfa pada nun sukun/tanwin dengan contoh ayat.",
      "Pelajari hukum mim sukun: ikhfa syafawi, idgham mimi, dan izhar syafawi.",
      "Pelajari qalqalah dan kesalahan umum yang membuat bunyinya terlalu kuat atau lemah.",
      "Latih waqaf dan ibtida' agar berhenti tidak merusak makna.",
      "Dengarkan qari, rekam bacaan sendiri, lalu minta koreksi guru. Skor AI hanya alat bantu dan tidak menggantikan talaqqi."
    ],
    caution: "KESALAHAN UMUM\n• Menghafal nama hukum tetapi tidak bisa mendengar perbedaannya.\n• Terlalu bergantung pada transliterasi Latin.\n• Menganggap deteksi suara otomatis sama dengan tashih guru.\n• Tidak konsisten dengan riwayat/qira'ah yang digunakan.\n\nRUJUKAN\nAl-Muzzammil 73:4 tentang tartil, kitab tajwid tepercaya, dan pembelajaran langsung dengan guru."
  }
};

export const learningModules: LearningModule[] = baseLearningModules.map((item) => ({
  ...item,
  ...(learningDetails[item.id] ?? {})
}));

const storyDetails: Record<string, Partial<Story>> = {
  adam: {
    summary: "KONTEKS\nKisah Nabi Adam memuat penciptaan manusia, amanah, ilmu, godaan, kesalahan, tobat, dan permulaan kehidupan di bumi.\n\nALUR KISAH\n1. Allah memberitakan kepada malaikat tentang penciptaan khalifah di bumi.\n2. Adam diajari nama-nama, menonjolkan hubungan antara ilmu dan tanggung jawab.\n3. Malaikat menaati perintah sujud sebagai penghormatan yang diperintahkan, sedangkan Iblis menolak karena kesombongan.\n4. Adam dan pasangannya mendapat kenikmatan serta satu larangan, kemudian tergelincir oleh godaan setan.\n5. Adam menerima kalimat untuk bertobat dan Allah menerima tobatnya. Kehidupan di bumi kemudian menjadi ruang ujian dengan petunjuk dari Allah.",
    lesson: "PELAJARAN\n• Ilmu terkait dengan amanah.\n• Kesombongan dapat menghalangi ketaatan.\n• Manusia dapat salah, tetapi pintu tobat terbuka.\n• Godaan tidak menghapus tanggung jawab pribadi.\n\nCATATAN EDITORIAL\nJangan menambahkan nama tempat, jenis pohon, atau cerita israiliyat sebagai fakta pasti tanpa dasar yang kuat.",
    sourceHint: "RUJUKAN UTAMA\nAl-Baqarah 2:30–39; Al-A'raf 7:11–27; Taha 20:115–123."
  },
  nuh: {
    summary: "KONTEKS\nNabi Nuh digambarkan sebagai rasul yang menyeru kaumnya dengan sabar dalam masa yang sangat panjang.\n\nALUR KISAH\n1. Surah Nuh menggambarkan dakwah malam dan siang, terbuka maupun lebih pribadi.\n2. Banyak kaumnya menolak dan enggan mendengar.\n3. Nuh diperintahkan membuat bahtera di bawah petunjuk Allah dan diejek oleh kaumnya.\n4. Ketika ketetapan datang, orang beriman diselamatkan sementara banjir menjadi hukuman bagi penentang.\n5. Kisah keluarga Nuh menunjukkan bahwa hubungan darah tidak menggantikan iman dan tanggung jawab pribadi.\n6. Air surut dan bahtera berlabuh; kisah berakhir sebagai peringatan bagi generasi setelahnya.",
    lesson: "PELAJARAN\n• Konsistensi tidak selalu menghasilkan penerimaan cepat.\n• Kebenaran tidak diukur hanya dari banyaknya pengikut.\n• Kedekatan keluarga tidak menghapus tanggung jawab moral.\n\nCATATAN EDITORIAL\nLokasi bahtera atau klaim arkeologis tertentu tidak boleh ditampilkan sebagai fakta agama tanpa sumber yang dapat dipertanggungjawabkan.",
    sourceHint: "RUJUKAN UTAMA\nSurah Nuh 71; Hud 11:25–49; Al-Mu'minun 23:23–30."
  },
  ibrahim: {
    summary: "KONTEKS\nNabi Ibrahim hadir dalam Al-Qur'an sebagai teladan tauhid, keberanian moral, doa untuk keluarga, dan sosok penting dalam mata rantai para nabi.\n\nALUR KISAH\n1. Ibrahim menolak penyembahan berhala dan berdialog dengan ayah/kaumnya.\n2. Dalam Al-An'am terdapat dialog tentang bintang, bulan, dan matahari yang berakhir pada penegasan menghadapkan diri kepada Pencipta langit dan bumi.\n3. Ia mengalami berbagai ujian, hijrah, dan memohon kebaikan untuk keturunannya.\n4. Bersama Ismail, Ibrahim terkait dengan pembangunan Ka'bah dan doa bagi Makkah.\n5. Ujian pengorbanan menjadi bagian penting dalam tradisi Islam dan berkaitan dengan ketaatan.",
    lesson: "PELAJARAN\n• Keyakinan perlu disertai keberanian moral.\n• Tauhid menolak penghambaan kepada selain Allah.\n• Keluarga dan generasi berikutnya termasuk amanah spiritual.\n\nLINTAS TRADISI\nIbrahim dihormati dalam agama-agama Ibrahimik, tetapi penjelasan teologis tiap tradisi harus dipisahkan.",
    sourceHint: "RUJUKAN UTAMA\nAl-An'am 6:74–83; Al-Baqarah 2:124–132; Ibrahim 14:35–41; As-Saffat 37:83–113."
  },
  yusuf: {
    summary: "KONTEKS\nSurah Yusuf menyajikan alur yang sangat utuh: mimpi masa kecil, kecemburuan saudara, masa sulit, fitnah, penjara, amanah pemerintahan, hingga rekonsiliasi keluarga.\n\nALUR KISAH\n1. Yusuf menceritakan mimpi kepada ayahnya, Ya'qub.\n2. Saudara-saudaranya dikuasai kecemburuan lalu menyingkirkannya ke dalam sumur.\n3. Yusuf dibawa ke Mesir dan tumbuh di rumah al-Aziz.\n4. Ia menghadapi godaan dan fitnah, tetapi memilih menjaga integritas meski berujung penjara.\n5. Di penjara, Yusuf menafsirkan mimpi dan tetap berdakwah.\n6. Tafsir mimpi raja tentang masa panen dan krisis membuka jalan baginya memegang amanah pengelolaan pangan.\n7. Ketika berkuasa dan bertemu saudara-saudaranya, Yusuf memilih memaafkan. Keluarga akhirnya dipertemukan kembali.",
    lesson: "PELAJARAN\n• Integritas paling nyata ketika ada kesempatan berbuat salah tanpa pengawasan.\n• Kesulitan dapat menjadi bagian dari jalan menuju amanah yang lebih besar.\n• Memaafkan saat memiliki kekuatan untuk membalas adalah bentuk kekuatan moral.",
    sourceHint: "RUJUKAN UTAMA\nSurah Yusuf 12:1–111. Untuk halaman lanjutan, buat navigasi per fase kisah dan tautkan ayat yang relevan."
  },
  musa: {
    summary: "KONTEKS\nNabi Musa adalah salah satu nabi yang paling sering dikisahkan dalam Al-Qur'an. Kisahnya mencakup penyelamatan sejak bayi, Madyan, panggilan kenabian, konfrontasi dengan Fir'aun, eksodus Bani Israil, dan ujian kepemimpinan.\n\nALUR KISAH\n1. Musa lahir pada masa penindasan dan diselamatkan sejak bayi.\n2. Setelah sebuah peristiwa yang membuatnya meninggalkan Mesir, ia menuju Madyan.\n3. Dalam perjalanan kembali, Musa menerima panggilan kenabian dan meminta Harun menjadi pendamping.\n4. Musa menghadapi Fir'aun, membawa tanda-tanda, dan berhadapan dengan para penyihir.\n5. Allah menyelamatkan Musa dan pengikutnya ketika laut terbelah, sementara Fir'aun tenggelam.\n6. Setelah keluar dari penindasan, Musa tetap menghadapi berbagai ujian dalam membimbing komunitas.",
    lesson: "PELAJARAN\n• Kezaliman perlu dihadapi dengan keberanian dan petunjuk.\n• Pemimpin dapat meminta bantuan; Musa memohon agar Harun mendampinginya.\n• Bebas dari penindasan tidak otomatis mengakhiri ujian moral sebuah komunitas.",
    sourceHint: "RUJUKAN UTAMA\nTaha 20; Al-Qasas 28; Asy-Syu'ara 26:10–68; Al-A'raf 7:103–160."
  },
  muhammad: {
    summary: "KONTEKS\nSirah Nabi Muhammad perlu dibaca bertahap dan sumbernya dibedakan antara Al-Qur'an, hadis sahih, dan karya sirah.\n\nFASE MAKKAH\nMuhammad menerima wahyu pertama sekitar usia empat puluh tahun. Dakwah menegaskan tauhid, akhirat, keadilan, amanah, dan perlindungan terhadap pihak lemah. Tekanan Quraisy meningkat; sebagian sahabat hijrah ke Habasyah.\n\nHIJRAH\nSetelah terbentuk dukungan dari Yatsrib, Nabi dan para sahabat berhijrah ke Madinah. Hijrah bukan sekadar perpindahan tempat, tetapi perubahan fase komunitas.\n\nFASE MADINAH\nNabi memimpin masyarakat yang menghadapi tantangan sosial, politik, ekonomi, perjanjian, dan konflik. Periode ini mencakup Badar, Uhud, Khandaq, Hudaibiyah, serta berbagai interaksi dengan komunitas lain.\n\nFATHU MAKKAH DAN AKHIR KEHIDUPAN\nMakkah akhirnya dibuka. Pada akhir kehidupan, Nabi menyampaikan pesan penting tentang amanah, hak, persaudaraan, dan tanggung jawab.",
    lesson: "PELAJARAN\n• Amanah dan konsistensi adalah inti kepemimpinan.\n• Strategi damai dan perjanjian memiliki posisi penting dalam sirah.\n• Kekuatan tidak menghapus kewajiban berbelas kasih dan adil.\n\nCATATAN EDITORIAL\nJangan menampilkan semua cerita sirah populer sebagai hadis sahih. Beri label tingkat sumber bila versi lanjutan dibuat.",
    sourceHint: "RUJUKAN\nAl-Qur'an; Sahih Bukhari; Sahih Muslim; karya sirah klasik yang dikaji dengan kritik riwayat. Untuk produk komersial, cantumkan daftar pustaka dan edisi yang digunakan."
  },
  "jesus-christianity": {
    summary: "KONTEKS\nDalam Kekristenan, Yesus Kristus berada di pusat iman. Materi netral perlu menjelaskan keyakinan Kristen sebagaimana dipahami pemeluknya dan tidak mencampurnya dengan pandangan agama lain.\n\nGARIS BESAR\n1. Injil-injil Perjanjian Baru menceritakan kelahiran, baptisan, pengajaran, perumpamaan, mukjizat, dan pembentukan komunitas murid.\n2. Kasih kepada Tuhan dan sesama, pertobatan, Kerajaan Allah, pengampunan, belas kasih, dan pelayanan menjadi tema penting.\n3. Tradisi Kristen menempatkan penyaliban dan kebangkitan Yesus sebagai peristiwa pusat iman. Penjelasan teologis tentang maknanya memiliki variasi antar gereja dan denominasi.",
    lesson: "PRINSIP EDITORIAL\n• Jelaskan doktrin berdasarkan sumber Kristen, bukan dengan istilah agama lain.\n• Jangan menyamakan pandangan Kristen tentang Yesus dengan pandangan Islam; masing-masing harus punya halaman terpisah.\n• Jika membahas Trinitas, keselamatan, sakramen, atau denominasi, gunakan sumber gereja/denominasi yang relevan.",
    sourceHint: "RUJUKAN AWAL\nInjil Matius, Markus, Lukas, dan Yohanes; sumber resmi denominasi/gereja untuk uraian doktrinal."
  },
  "early-church": {
    summary: "KONTEKS\nKomunitas Kristen awal berkembang dari kelompok para murid di wilayah Yudea menjadi jaringan komunitas di berbagai kota Kekaisaran Romawi.\n\nPERKEMBANGAN\n1. Kisah Para Rasul menggambarkan komunitas awal, pewartaan para rasul, dan perluasan misi kepada non-Yahudi.\n2. Pada abad-abad berikutnya, struktur gereja, liturgi, kanon, dan bahasa teologis berkembang melalui proses panjang dan perdebatan.\n3. Sejarah kemudian melahirkan tradisi gereja Timur dan Barat serta denominasi yang lebih luas. Karena itu, ‘Kristen’ tidak boleh disajikan seolah semua komunitas memiliki praktik identik.",
    lesson: "PELAJARAN\n• Tradisi keagamaan berkembang melalui sejarah dan komunitas.\n• Perbedaan denominasi memiliki konteks historis dan teologis.\n• Gunakan tanggal dan istilah sejarah secara hati-hati serta bedakan sumber primer dan kajian modern.",
    sourceHint: "RUJUKAN AWAL\nKisah Para Rasul; sejarah gereja akademik; dokumen gereja terkait."
  },
  buddha: {
    summary: "KONTEKS\nSiddhartha Gautama dikenal dalam tradisi Buddhis sebagai Buddha setelah mencapai pencerahan. Detail biografis hadir dalam beragam tradisi tekstual, sehingga materi perlu membedakan narasi tradisional, sejarah, dan inti ajaran.\n\nGARIS BESAR\n1. Narasi Buddhis menggambarkan Siddhartha meninggalkan kehidupan istana setelah berhadapan dengan kenyataan usia tua, sakit, dan kematian.\n2. Setelah mencoba asketisme ekstrem, ia menempuh jalan tengah.\n3. Menurut tradisi Buddhis, ia mencapai pencerahan melalui meditasi.\n4. Ia kemudian mengajar tentang penderitaan, sebabnya, kemungkinan berakhirnya, dan jalan praktik; komunitas sangha berkembang dan ajaran menyebar luas.",
    lesson: "PELAJARAN DAN CATATAN\n• Welas asih dan kebijaksanaan adalah tema penting.\n• Theravada, Mahayana, dan Vajrayana memiliki teks dan penekanan berbeda.\n• Jangan menyederhanakan nirwana sebagai ‘surga’ karena konsepnya tidak identik.",
    sourceHint: "RUJUKAN AWAL\nKanon sesuai tradisi Buddhis dan sumber resmi komunitas Theravada, Mahayana, atau Vajrayana."
  },
  confucius: {
    summary: "KONTEKS\nKongzi/Confucius adalah guru dan pemikir Tiongkok kuno yang berpengaruh besar pada pendidikan, etika, keluarga, dan kehidupan sosial.\n\nTEMA PENTING\n1. Belajar dan refleksi dipandang sebagai proses pembentukan karakter sepanjang hidup.\n2. Ren sering diterjemahkan sebagai kemanusiaan/kebajikan, yi berkaitan dengan kepatutan moral, dan li mencakup tata perilaku serta ritus. Terjemahan istilah dapat berbeda.\n3. Relasi keluarga dan sosial menjadi ruang penting untuk melatih tanggung jawab dan kebajikan.",
    lesson: "PELAJARAN\n• Pendidikan bukan hanya penguasaan informasi, tetapi pembentukan karakter.\n• Rasa hormat perlu berjalan bersama tanggung jawab moral.\n• Istilah klasik sebaiknya tidak diterjemahkan terlalu sederhana tanpa penjelasan konteks.",
    sourceHint: "RUJUKAN AWAL\nLunyu/Analects; sumber komunitas Khonghucu dan kajian akademik."
  },
  "hindu-ramayana": {
    summary: "KONTEKS\nRamayana adalah epos besar dengan banyak versi dan tradisi penafsiran di India serta Asia Tenggara. Produk profesional harus menyebut versi yang digunakan.\n\nGARIS BESAR\nKisah berpusat pada Rama, Sita, Lakshmana, Hanuman, dan konflik dengan Ravana. Tema dharma, kesetiaan, pengabdian, kekuasaan, dan pilihan moral sangat kuat. Selain Valmiki Ramayana, terdapat banyak adaptasi regional dan sastra yang menekankan aspek berbeda.\n\nPENGARUH DI ASIA\nRamayana memengaruhi seni, wayang, tari, sastra, dan tradisi lokal, termasuk di Indonesia.",
    lesson: "PRINSIP EDITORIAL\n• Jangan menganggap satu versi mewakili seluruh tradisi Hindu.\n• Sebutkan edisi atau versi yang digunakan.\n• Bedakan pembahasan agama, sastra, dan adaptasi budaya.",
    sourceHint: "RUJUKAN AWAL\nValmiki Ramayana dan sumber Hindu/kajian regional sesuai versi yang ditampilkan."
  },
  "guru-nanak": {
    summary: "KONTEKS\nGuru Nanak adalah guru pertama dalam tradisi Sikh. Ajarannya menekankan pengabdian kepada Tuhan Yang Esa, kerja jujur, berbagi, kesetaraan, dan penolakan diskriminasi.\n\nGARIS BESAR\n1. Kehidupan spiritual dihubungkan dengan kerja jujur dan tanggung jawab sosial.\n2. Langar atau dapur komunitas menjadi simbol nyata pelayanan dan kesetaraan.\n3. Setelah Guru Nanak, kepemimpinan dilanjutkan oleh para Guru berikutnya hingga Guru Granth Sahib diperlakukan sebagai Guru yang kekal dalam tradisi Sikh.",
    lesson: "PELAJARAN\n• Kesetaraan manusia diwujudkan melalui tindakan, bukan hanya teori.\n• Pelayanan sosial merupakan bagian penting dari spiritualitas Sikh.\n• Jangan menyamakan Sikh dengan Hindu atau Islam hanya karena ada istilah/lingkungan sejarah yang berdekatan.",
    sourceHint: "RUJUKAN AWAL\nGuru Granth Sahib serta sumber gurdwara dan organisasi Sikh tepercaya."
  },
  "moses-judaism": {
    summary: "KONTEKS\nDalam Yudaisme, Musa merupakan tokoh sentral yang terkait dengan keluarnya bangsa Israel dari Mesir, perjanjian, dan penerimaan Torah menurut tradisi Yahudi.\n\nGARIS BESAR\n1. Kitab Keluaran menceritakan penindasan bangsa Israel, panggilan Musa, rangkaian peristiwa di Mesir, dan keluar dari perbudakan.\n2. Musa dikaitkan dengan penerimaan hukum dan perjanjian di Sinai.\n3. Narasi berikutnya menggambarkan perjalanan di padang gurun, pembentukan hukum komunitas, dan tantangan kepemimpinan.\n4. Tradisi interpretasi Yahudi terhadap Torah berkembang sangat luas dalam sejarah.",
    lesson: "PELAJARAN EDITORIAL\n• Pembebasan dan tanggung jawab hukum berjalan bersama dalam narasi Torah.\n• Yudaisme memiliki keragaman tradisi dan interpretasi; materi rinci perlu merujuk komunitas yang sesuai.\n• Jangan mengambil gambaran Musa dari agama lain untuk menjelaskan pandangan Yahudi.",
    sourceHint: "RUJUKAN AWAL\nTorah, terutama Exodus/Keluaran, Leviticus/Imamat, Numbers/Bilangan, dan Deuteronomy/Ulangan; sumber komunitas Yahudi sesuai tradisi."
  }
};

export const stories: Story[] = baseStories.map((item) => ({
  ...item,
  ...(storyDetails[item.id] ?? {})
}));
