export const siteConfig = {
  name: "Nurul Quran",
  version: "V2",
  owner: "DiTz Store",
  tagline: "Qur'an, ibadah, kisah & pengetahuan agama dalam satu ruang.",
  primaryModule: "Islam",
  supportEmail: "ditzstoreofficial@gmail.com",
  productMode: true
} as const;

export const qaris = [
  { id: "ar.alafasy", name: "Mishary Rashid Alafasy" },
  { id: "ar.abdurrahmaansudais", name: "Abdurrahman As-Sudais" },
  { id: "ar.mahermuaiqly", name: "Maher Al Muaiqly" },
  { id: "ar.saoodshuraym", name: "Saud Ash-Shuraym" },
  { id: "ar.abdulsamad", name: "Abdul Basit Abdus Samad" },
  { id: "ar.husary", name: "Mahmoud Khalil Al-Husary" },
  { id: "ar.shaatree", name: "Abu Bakr Ash-Shatri" },
  { id: "ar.aymanswoaid", name: "Ayman Sowaid" }
] as const;

export type Prayer = {
  id: string;
  title: string;
  category: string;
  arabic: string;
  latin: string;
  meaning: string;
  source: string;
  note?: string;
};

export const prayers: Prayer[] = [
  {
    id: "before-eating",
    title: "Doa sebelum makan",
    category: "Harian",
    arabic: "بِسْمِ اللَّهِ",
    latin: "Bismillāh.",
    meaning: "Dengan nama Allah.",
    source: "Doa singkat yang dianjurkan sebelum makan."
  },
  {
    id: "after-eating",
    title: "Doa sesudah makan",
    category: "Harian",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    latin: "Alhamdu lillāhilladzī ath'amanī hādzā wa razaqanīhi min ghairi haulin minnī wa lā quwwah.",
    meaning: "Segala puji bagi Allah yang telah memberiku makanan ini dan rezeki tanpa daya dan kekuatan dariku.",
    source: "Riwayat Abu Dawud dan Tirmidzi; tampilkan bersama rujukan saat dipakai di produk komersial."
  },
  {
    id: "enter-bathroom",
    title: "Doa masuk kamar mandi",
    category: "Harian",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    latin: "Allāhumma innī a'ūdzu bika minal-khubutsi wal-khabā'its.",
    meaning: "Ya Allah, aku berlindung kepada-Mu dari keburukan dan hal-hal yang buruk.",
    source: "Riwayat Bukhari dan Muslim."
  },
  {
    id: "leave-bathroom",
    title: "Doa keluar kamar mandi",
    category: "Harian",
    arabic: "غُفْرَانَكَ",
    latin: "Ghufrānaka.",
    meaning: "Aku memohon ampunan-Mu.",
    source: "Riwayat Abu Dawud dan Tirmidzi."
  },
  {
    id: "wake-up",
    title: "Doa bangun tidur",
    category: "Harian",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    latin: "Alhamdu lillāhilladzī ahyānā ba'da mā amātanā wa ilaihin-nusyūr.",
    meaning: "Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami dan kepada-Nya kebangkitan.",
    source: "Riwayat Bukhari."
  },
  {
    id: "knowledge",
    title: "Doa memohon ilmu",
    category: "Belajar",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    latin: "Rabbi zidnī 'ilmā.",
    meaning: "Ya Tuhanku, tambahkanlah kepadaku ilmu.",
    source: "Al-Qur'an, Taha 20:114."
  },
  {
    id: "parents",
    title: "Doa untuk kedua orang tua",
    category: "Keluarga",
    arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    latin: "Rabbirhamhumā kamā rabbayānī shaghīrā.",
    meaning: "Wahai Tuhanku, sayangilah keduanya sebagaimana mereka menyayangiku ketika kecil.",
    source: "Al-Qur'an, Al-Isra 17:24."
  },
  {
    id: "good-world-hereafter",
    title: "Doa kebaikan dunia dan akhirat",
    category: "Pilihan",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    latin: "Rabbanā ātinā fid-dunyā hasanah, wa fil-ākhirati hasanah, wa qinā 'adzāban-nār.",
    meaning: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat serta lindungilah kami dari azab neraka.",
    source: "Al-Qur'an, Al-Baqarah 2:201."
  },
  {
    id: "anxiety",
    title: "Doa saat menghadapi kesulitan",
    category: "Ketenangan",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    latin: "Hasbunallāhu wa ni'mal-wakīl.",
    meaning: "Cukuplah Allah bagi kami dan Dia sebaik-baik pelindung.",
    source: "Al-Qur'an, Ali 'Imran 3:173."
  },
  {
    id: "travel",
    title: "Doa perjalanan",
    category: "Perjalanan",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ",
    latin: "Subhānalladzī sakhkhara lanā hādzā wa mā kunnā lahu muqrinīn, wa innā ilā rabbinā lamunqalibūn.",
    meaning: "Mahasuci Dia yang menundukkan kendaraan ini bagi kami, padahal kami tidak mampu menguasainya, dan kepada Tuhan kami akan kembali.",
    source: "Al-Qur'an, Az-Zukhruf 43:13–14."
  },
  {
    id: "for-deceased",
    title: "Doa untuk orang yang wafat",
    category: "Keluarga",
    arabic: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ",
    latin: "Allāhummaghfir lahu warhamhu wa 'āfihi wa'fu 'anhu.",
    meaning: "Ya Allah, ampunilah dia, rahmatilah dia, berilah keselamatan kepadanya, dan maafkanlah dia.",
    source: "Bagian dari doa jenazah dalam riwayat Muslim.",
    note: "Gunakan dhamir yang sesuai bila mendoakan perempuan atau kelompok."
  },
  {
    id: "istighfar",
    title: "Istighfar singkat",
    category: "Dzikir",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    latin: "Astaghfirullāh.",
    meaning: "Aku memohon ampun kepada Allah.",
    source: "Dzikir umum memohon ampun."
  }
];

export type LearningModule = {
  id: string;
  title: string;
  category: string;
  level: "Dasar" | "Menengah";
  summary: string;
  steps: string[];
  essentials?: string[];
  caution?: string;
};

export const learningModules: LearningModule[] = [
  {
    id: "wudhu",
    title: "Wudhu",
    category: "Bersuci",
    level: "Dasar",
    summary: "Panduan ringkas bersuci sebelum ibadah tertentu. Urutan rinci dapat memiliki perbedaan penjelasan antar mazhab.",
    essentials: ["Niat", "Air suci dan menyucikan", "Membasuh anggota wudhu sesuai ketentuan"],
    steps: [
      "Niat berwudhu dan memulai dengan basmalah.",
      "Mencuci kedua telapak tangan.",
      "Berkumur dan membersihkan hidung.",
      "Membasuh wajah.",
      "Membasuh kedua tangan sampai siku.",
      "Mengusap kepala dan telinga.",
      "Membasuh kedua kaki sampai mata kaki.",
      "Menjaga tertib dan membaca doa setelah wudhu bila mampu."
    ],
    caution: "Untuk pembelajaran fikih rinci, tampilkan pilihan mazhab atau rujukan guru/ustaz yang tepercaya."
  },
  {
    id: "ghusl",
    title: "Mandi wajib",
    category: "Bersuci",
    level: "Dasar",
    summary: "Mandi untuk mengangkat hadas besar. Inti utamanya adalah niat dan meratakan air ke seluruh tubuh sesuai ketentuan fikih.",
    essentials: ["Niat", "Menghilangkan najis bila ada", "Air mengenai seluruh bagian tubuh"],
    steps: [
      "Niat mandi wajib.",
      "Membersihkan tangan dan bagian tubuh yang perlu dibersihkan terlebih dahulu.",
      "Berwudhu bila mengikuti tata cara yang disunnahkan.",
      "Menyiram kepala dan memastikan air mencapai pangkal rambut.",
      "Meratakan air ke seluruh tubuh, termasuk lipatan dan bagian yang mudah terlewat.",
      "Pastikan tidak ada bagian tubuh yang tetap kering."
    ],
    caution: "Detail sebab wajib mandi dan tata caranya dapat berbeda dalam pembahasan fikih; sediakan rujukan mazhab bila produk diperluas."
  },
  {
    id: "tayammum",
    title: "Tayamum",
    category: "Bersuci",
    level: "Dasar",
    summary: "Bersuci menggunakan media yang dibolehkan ketika air tidak tersedia atau tidak dapat digunakan menurut ketentuan syariat.",
    steps: [
      "Pastikan ada alasan yang membolehkan tayamum.",
      "Niat tayamum.",
      "Gunakan permukaan berdebu atau media yang dibolehkan sesuai pendapat fikih yang diikuti.",
      "Usapkan ke wajah.",
      "Usapkan ke tangan sesuai tata cara yang diajarkan."
    ],
    caution: "Batas media dan urutan detail tayamum berbeda dalam sejumlah mazhab."
  },
  {
    id: "salah-basics",
    title: "Dasar shalat",
    category: "Shalat",
    level: "Dasar",
    summary: "Pengenalan urutan umum shalat: syarat, gerakan utama, dan bacaan yang perlu dipelajari bertahap.",
    steps: [
      "Pastikan syarat shalat terpenuhi: waktu, bersuci, menutup aurat, dan menghadap kiblat.",
      "Niat dan takbiratul ihram.",
      "Berdiri dan membaca bacaan yang diwajibkan/dituntunkan.",
      "Rukuk, i'tidal, sujud, dan duduk di antara dua sujud dengan tuma'ninah.",
      "Ulangi sesuai jumlah rakaat.",
      "Tasyahud dan salam untuk menutup shalat."
    ],
    caution: "Aplikasi sebaiknya membedakan mana rukun, wajib, dan sunnah berdasarkan rujukan fikih yang dipilih."
  },
  {
    id: "fasting-basics",
    title: "Dasar puasa Ramadan",
    category: "Puasa",
    level: "Dasar",
    summary: "Ringkasan tujuan, niat, waktu, serta hal-hal yang perlu dijaga selama puasa.",
    steps: [
      "Pelajari waktu mulai dan berakhir puasa di lokasi pengguna.",
      "Niat sesuai ketentuan yang diikuti.",
      "Menahan diri dari hal-hal yang membatalkan sejak fajar sampai matahari terbenam.",
      "Menjaga ucapan dan perilaku.",
      "Berbuka ketika waktunya tiba dan mengganti puasa bila memang diwajibkan karena uzur tertentu."
    ],
    caution: "Kasus medis, perjalanan, kehamilan, dan kondisi khusus perlu rujukan fikih serta tenaga kesehatan bila terkait kesehatan."
  },
  {
    id: "zakat-basics",
    title: "Pengenalan zakat",
    category: "Muamalah",
    level: "Menengah",
    summary: "Memahami perbedaan zakat fitrah dan zakat harta, siapa yang wajib, serta siapa penerima yang berhak.",
    steps: [
      "Kenali jenis zakat yang relevan.",
      "Periksa syarat wajib dan ketentuan nisab/haul jika berlaku.",
      "Hitung berdasarkan jenis harta dan ketentuan yang tepercaya.",
      "Salurkan kepada penerima yang berhak atau lembaga resmi/tepercaya.",
      "Simpan catatan perhitungan untuk transparansi pribadi."
    ],
    caution: "Besaran nisab mengikuti nilai komoditas dan rujukan setempat; jangan hard-code angka ekonomi tanpa pembaruan."
  },
  {
    id: "janazah-basics",
    title: "Pengenalan pengurusan jenazah",
    category: "Fardu Kifayah",
    level: "Menengah",
    summary: "Peta belajar awal tentang memandikan, mengkafani, menshalatkan, dan menguburkan jenazah.",
    steps: [
      "Hormati martabat jenazah dan jaga privasi.",
      "Pelajari tata cara memandikan dari pembimbing yang kompeten.",
      "Pelajari pengkafanan sesuai ketentuan.",
      "Pelajari tata cara shalat jenazah.",
      "Ikuti aturan pemakaman setempat dan ketentuan syariat."
    ],
    caution: "Modul ini sengaja bersifat pengantar; praktik langsung sebaiknya dibimbing orang yang berpengalaman."
  },
  {
    id: "tajwid-basics",
    title: "Tajwid dasar",
    category: "Al-Qur'an",
    level: "Dasar",
    summary: "Mulai dari makhraj, panjang-pendek, nun sukun/tanwin, mim sukun, dan latihan mendengar qari.",
    steps: [
      "Pelajari makhraj huruf secara bertahap.",
      "Kenali mad dasar dan panjang bacaannya.",
      "Pelajari hukum nun sukun dan tanwin.",
      "Pelajari hukum mim sukun.",
      "Dengarkan contoh qari lalu rekam bacaan sendiri.",
      "Minta koreksi guru untuk bagian yang sulit."
    ],
    caution: "Deteksi suara otomatis hanya alat bantu dan tidak menggantikan talaqqi dengan guru."
  }
];

export type Story = {
  id: string;
  title: string;
  tradition: string;
  kind: "Kisah" | "Tokoh" | "Sejarah";
  summary: string;
  lesson: string;
  sourceHint: string;
};

export const stories: Story[] = [
  {
    id: "adam",
    title: "Nabi Adam",
    tradition: "Islam",
    kind: "Kisah",
    summary: "Kisah awal manusia, amanah, pilihan, kesalahan, dan tobat sebagaimana diceritakan dalam Al-Qur'an.",
    lesson: "Tanggung jawab, kerendahan hati, dan pentingnya kembali kepada Allah setelah berbuat salah.",
    sourceHint: "Lihat antara lain Al-Baqarah 2:30–39 dan Al-A'raf 7:11–27."
  },
  {
    id: "nuh",
    title: "Nabi Nuh",
    tradition: "Islam",
    kind: "Kisah",
    summary: "Kisah dakwah yang panjang, keteguhan menghadapi penolakan, dan peristiwa banjir besar dalam tradisi Islam.",
    lesson: "Kesabaran, konsistensi, dan tanggung jawab menyampaikan kebaikan.",
    sourceHint: "Surah Nuh dan bagian-bagian dalam Hud 11."
  },
  {
    id: "ibrahim",
    title: "Nabi Ibrahim",
    tradition: "Islam",
    kind: "Tokoh",
    summary: "Tokoh penting dalam tradisi Ibrahimik; dalam Islam dikenal karena keteguhan tauhid, ujian, dan keteladanan keluarga.",
    lesson: "Keberanian memegang prinsip dan ketaatan yang dibangun dengan keyakinan.",
    sourceHint: "Lihat antara lain Al-An'am 6:74–83 dan As-Saffat 37:99–113."
  },
  {
    id: "yusuf",
    title: "Nabi Yusuf",
    tradition: "Islam",
    kind: "Kisah",
    summary: "Perjalanan dari pengkhianatan saudara, masa sulit, hingga menjadi sosok yang dipercaya dan memilih memaafkan.",
    lesson: "Integritas, kesabaran, dan memaafkan ketika memiliki kekuatan untuk membalas.",
    sourceHint: "Surah Yusuf."
  },
  {
    id: "musa",
    title: "Nabi Musa",
    tradition: "Islam",
    kind: "Tokoh",
    summary: "Kisah perjuangan menghadapi Fir'aun, pembebasan Bani Israil, dan berbagai ujian kepemimpinan.",
    lesson: "Keberanian menghadapi kezaliman dan pentingnya memohon pertolongan Tuhan.",
    sourceHint: "Tersebar di banyak surah, termasuk Taha dan Al-Qasas."
  },
  {
    id: "muhammad",
    title: "Nabi Muhammad",
    tradition: "Islam",
    kind: "Sejarah",
    summary: "Ringkasan sirah: fase Makkah, hijrah, fase Madinah, pembentukan komunitas, dan penyampaian risalah Islam.",
    lesson: "Keteguhan, amanah, kasih sayang, strategi, dan tanggung jawab sosial.",
    sourceHint: "Gunakan sumber sirah dan hadis terverifikasi untuk versi panjang."
  },
  {
    id: "jesus-christianity",
    title: "Yesus dalam tradisi Kristen",
    tradition: "Kristen",
    kind: "Tokoh",
    summary: "Dalam Kekristenan, Yesus berada di pusat iman dan kisah Injil, termasuk pengajaran, pelayanan, penyaliban, dan kebangkitan menurut keyakinan Kristen.",
    lesson: "Kasih, pengampunan, pelayanan, dan iman menjadi tema penting dalam banyak tradisi Kristen.",
    sourceHint: "Rujuk Injil dan sumber gereja/denominasi terkait untuk uraian doktrinal."
  },
  {
    id: "early-church",
    title: "Komunitas Kristen awal",
    tradition: "Kristen",
    kind: "Sejarah",
    summary: "Gambaran bagaimana komunitas pengikut Yesus berkembang pada abad-abad awal dan membentuk tradisi gerejawi yang beragam.",
    lesson: "Komunitas, pengabdian, dan perkembangan tradisi dari masa ke masa.",
    sourceHint: "Gunakan sejarah gereja akademik dan sumber denominasi untuk detail."
  },
  {
    id: "buddha",
    title: "Siddhartha Gautama",
    tradition: "Buddhisme",
    kind: "Tokoh",
    summary: "Tokoh utama dalam Buddhisme yang dikenal sebagai Buddha setelah mencapai pencerahan menurut tradisi Buddhis.",
    lesson: "Perhatian pada penderitaan, latihan batin, kebijaksanaan, dan welas asih.",
    sourceHint: "Rujuk kanon dan sumber komunitas Buddhis sesuai tradisi Theravada, Mahayana, atau Vajrayana."
  },
  {
    id: "confucius",
    title: "Kongzi (Confucius)",
    tradition: "Khonghucu",
    kind: "Tokoh",
    summary: "Guru dan pemikir Tiongkok kuno yang ajarannya menekankan pembentukan karakter, relasi sosial, pendidikan, dan etika.",
    lesson: "Belajar seumur hidup, rasa hormat, tanggung jawab, dan pembentukan kebajikan.",
    sourceHint: "Rujuk Lunyu/Analects dan sumber komunitas Khonghucu."
  },
  {
    id: "hindu-ramayana",
    title: "Ramayana sebagai kisah etika dan pengabdian",
    tradition: "Hindu",
    kind: "Kisah",
    summary: "Ramayana hadir dalam banyak versi di Asia dan menjadi sumber kisah tentang dharma, kesetiaan, pengabdian, serta pilihan moral.",
    lesson: "Tanggung jawab, kesetiaan, dan pertimbangan moral dalam menjalankan dharma.",
    sourceHint: "Versi dan penafsiran berbeda antar wilayah dan tradisi; tampilkan sumber edisi yang digunakan."
  },
  {
    id: "guru-nanak",
    title: "Guru Nanak",
    tradition: "Sikh",
    kind: "Tokoh",
    summary: "Pendiri tradisi Sikh yang menekankan pengabdian kepada Tuhan, kerja jujur, berbagi, dan kesetaraan manusia.",
    lesson: "Kejujuran, pelayanan, kesetaraan, dan kehidupan spiritual yang terhubung dengan tindakan sosial.",
    sourceHint: "Rujuk Guru Granth Sahib dan sumber gurdwara/organisasi Sikh tepercaya."
  },
  {
    id: "moses-judaism",
    title: "Musa dalam tradisi Yahudi",
    tradition: "Yahudi",
    kind: "Tokoh",
    summary: "Dalam Yudaisme, Musa merupakan tokoh sentral yang terkait dengan keluarnya bangsa Israel dari Mesir dan penerimaan Taurat menurut tradisi Yahudi.",
    lesson: "Kepemimpinan, hukum, perjanjian, dan tanggung jawab komunitas.",
    sourceHint: "Rujuk Torah/Tanakh dan sumber komunitas Yahudi sesuai tradisi."
  }
];

export type FaithPack = {
  id: string;
  name: string;
  shortName: string;
  symbol: string;
  overview: string;
  scripture: string[];
  figures: string[];
  places: string[];
  themes: string[];
  observances: string[];
  practiceOverview: string;
  note: string;
};

export const faithPacks: FaithPack[] = [
  {
    id: "islam",
    name: "Islam",
    shortName: "Islam",
    symbol: "☪",
    overview: "Tradisi monoteistik yang berpusat pada keimanan kepada Allah, Al-Qur'an, kenabian Muhammad, ibadah, akhlak, dan tanggung jawab sosial.",
    scripture: ["Al-Qur'an", "Hadis sebagai sumber penting dalam memahami sunnah"],
    figures: ["Nabi Muhammad", "Nabi Ibrahim", "Nabi Musa", "Nabi Isa", "para sahabat dan ulama"],
    places: ["Masjid", "Makkah", "Madinah"],
    themes: ["Tauhid", "ibadah", "akhlak", "keadilan", "rahmat", "amanah"],
    observances: ["Ramadan", "Idulfitri", "Iduladha", "shalat Jumat"],
    practiceOverview: "Ibadah utama mencakup syahadat, shalat, zakat, puasa Ramadan, dan haji bagi yang memenuhi syarat.",
    note: "Rincian fikih dapat berbeda menurut mazhab dan otoritas keagamaan."
  },
  {
    id: "christianity",
    name: "Kekristenan",
    shortName: "Kristen",
    symbol: "✝",
    overview: "Tradisi iman yang berpusat pada Yesus Kristus dan berkembang dalam banyak gereja serta denominasi dengan penekanan teologis yang beragam.",
    scripture: ["Alkitab: Perjanjian Lama dan Perjanjian Baru"],
    figures: ["Yesus Kristus", "para rasul", "tokoh gereja dalam berbagai tradisi"],
    places: ["Gereja", "tempat ziarah dan komunitas sesuai denominasi"],
    themes: ["Kasih", "iman", "pengampunan", "pelayanan", "harapan"],
    observances: ["Natal", "Paskah", "ibadah mingguan dan kalender gerejawi sesuai tradisi"],
    practiceOverview: "Bentuk ibadah, sakramen/ordinansi, tata gereja, dan liturgi berbeda antar denominasi.",
    note: "Gunakan sumber denominasi terkait ketika membahas doktrin yang spesifik."
  },
  {
    id: "catholicism",
    name: "Katolik",
    shortName: "Katolik",
    symbol: "☩",
    overview: "Tradisi Kristen Katolik menekankan iman kepada Kristus, kehidupan sakramental, Kitab Suci, Tradisi, dan persekutuan gereja yang dipimpin Paus dan para uskup.",
    scripture: ["Alkitab Katolik", "dokumen magisterium dan tradisi gereja sebagai rujukan penting"],
    figures: ["Yesus Kristus", "Maria", "para rasul", "para kudus"],
    places: ["Gereja/paroki", "katedral", "tempat ziarah"],
    themes: ["Kasih", "sakramen", "pelayanan", "persekutuan", "belas kasih"],
    observances: ["Misa", "Natal", "Paskah", "masa Adven dan Prapaskah"],
    practiceOverview: "Kehidupan ibadah berpusat pada liturgi dan sakramen; praktik devosi dapat berbeda antar komunitas dan budaya.",
    note: "Untuk materi resmi gunakan Katekismus dan sumber gereja yang relevan."
  },
  {
    id: "hinduism",
    name: "Hindu",
    shortName: "Hindu",
    symbol: "ॐ",
    overview: "Kumpulan tradisi keagamaan yang sangat beragam dengan konsep seperti dharma, karma, samsara, moksha, bhakti, serta berbagai jalan spiritual.",
    scripture: ["Veda", "Upanishad", "Bhagavad Gita", "Ramayana dan Mahabharata dalam berbagai tradisi"],
    figures: ["beragam dewa/dewi dan guru sesuai aliran", "tokoh-tokoh epik"],
    places: ["Pura/mandir", "tempat suci dan rumah ibadah keluarga"],
    themes: ["Dharma", "karma", "bhakti", "pengetahuan", "pengendalian diri"],
    observances: ["Hari raya berbeda menurut wilayah; di Indonesia termasuk Nyepi dalam tradisi Hindu Bali"],
    practiceOverview: "Puja, doa, persembahan, meditasi, yoga spiritual, dan ritus keluarga bervariasi menurut sampradaya dan budaya.",
    note: "Hinduisme sangat beragam; hindari menyajikan satu aliran sebagai mewakili semuanya."
  },
  {
    id: "buddhism",
    name: "Buddhisme",
    shortName: "Buddha",
    symbol: "☸",
    overview: "Tradisi yang berakar pada ajaran Buddha dan berfokus pada pemahaman penderitaan, sebabnya, kemungkinan berakhirnya, dan jalan latihan menuju pembebasan.",
    scripture: ["Kanon Pali/Tipitaka dalam Theravada", "beragam sutra dalam Mahayana dan tradisi lainnya"],
    figures: ["Siddhartha Gautama (Buddha)", "bhikkhu/bhikkhuni", "bodhisattva dalam tradisi tertentu"],
    places: ["Vihara", "monasteri", "stupa dan tempat ziarah"],
    themes: ["Empat Kebenaran Mulia", "Jalan Mulia Berunsur Delapan", "welas asih", "kebijaksanaan", "perhatian penuh"],
    observances: ["Waisak/Vesak", "hari uposatha dalam sebagian tradisi"],
    practiceOverview: "Meditasi, pembacaan teks, puja, dana, sila, dan praktik komunitas berbeda menurut Theravada, Mahayana, Vajrayana, dan tradisi lokal.",
    note: "Gunakan sumber dari tradisi spesifik saat memberi instruksi praktik."
  },
  {
    id: "confucianism",
    name: "Khonghucu",
    shortName: "Khonghucu",
    symbol: "儒",
    overview: "Tradisi etika, spiritual, dan budaya yang berakar pada ajaran Kongzi/Confucius serta menekankan pembentukan kebajikan dan harmoni dalam relasi manusia.",
    scripture: ["Lunyu/Analects", "kumpulan kitab klasik yang dipelajari dalam tradisi Ru"],
    figures: ["Kongzi (Confucius)", "Mengzi (Mencius)", "para cendekia dan guru tradisi"],
    places: ["Litang/kelenteng dan ruang penghormatan sesuai komunitas"],
    themes: ["Ren", "Yi", "Li", "Xiao", "pendidikan", "harmoni sosial"],
    observances: ["Peringatan dan ritus komunitas berbeda menurut negara dan organisasi"],
    practiceOverview: "Penghormatan kepada Tian, pembinaan moral, penghormatan leluhur, pendidikan, dan ritus komunitas memiliki bentuk yang beragam.",
    note: "Istilah dan praktik dapat berbeda antara tradisi keagamaan, filosofis, dan budaya."
  },
  {
    id: "judaism",
    name: "Yudaisme",
    shortName: "Yahudi",
    symbol: "✡",
    overview: "Tradisi monoteistik yang berpusat pada perjanjian, Torah, kehidupan komunitas, hukum dan etika Yahudi, dengan ragam denominasi dan kebiasaan.",
    scripture: ["Tanakh", "Torah", "Talmud sebagai sumber penting dalam tradisi rabinik"],
    figures: ["Abraham", "Musa", "para nabi", "rabi dan cendekia"],
    places: ["Sinagoga", "rumah dan komunitas sebagai ruang penting praktik"],
    themes: ["Perjanjian", "mitzvot", "keadilan", "belajar", "komunitas"],
    observances: ["Shabbat", "Pesach/Passover", "Rosh Hashanah", "Yom Kippur"],
    practiceOverview: "Doa, studi Torah, Shabbat, kalender hari raya, serta aturan hidup berbeda dalam detail antar komunitas Yahudi.",
    note: "Gunakan sumber dari komunitas Ortodoks, Konservatif/Masorti, Reform, atau tradisi lain sesuai konteks."
  },
  {
    id: "sikhism",
    name: "Sikhisme",
    shortName: "Sikh",
    symbol: "☬",
    overview: "Tradisi monoteistik yang lahir di Punjab dan menekankan pengabdian kepada Tuhan, kerja jujur, berbagi, kesetaraan, dan pelayanan.",
    scripture: ["Guru Granth Sahib"],
    figures: ["Guru Nanak", "sepuluh Guru Sikh", "tokoh komunitas Sikh"],
    places: ["Gurdwara"],
    themes: ["Naam Simran", "kerja jujur", "seva", "kesetaraan", "keberanian"],
    observances: ["Vaisakhi", "gurpurab dan peringatan komunitas"],
    practiceOverview: "Doa, kirtan, membaca/menyimak Guru Granth Sahib, langar, dan seva menjadi bagian penting kehidupan komunitas.",
    note: "Untuk detail Khalsa dan lima K, gunakan sumber gurdwara atau organisasi Sikh tepercaya."
  }
];

export const featuredSurahs = [
  { number: 1, name: "Al-Fatihah", arabic: "الفاتحة", ayahs: 7 },
  { number: 18, name: "Al-Kahf", arabic: "الكهف", ayahs: 110 },
  { number: 36, name: "Yasin", arabic: "يس", ayahs: 83 },
  { number: 55, name: "Ar-Rahman", arabic: "الرحمن", ayahs: 78 },
  { number: 56, name: "Al-Waqi'ah", arabic: "الواقعة", ayahs: 96 },
  { number: 67, name: "Al-Mulk", arabic: "الملك", ayahs: 30 }
] as const;

export const homeHighlights = [
  { title: "Qur'an 30 Juz", text: "Baca Arab, terjemahan Indonesia, audio per ayat, 8 qari, bookmark dan lanjut terakhir." },
  { title: "Belajar Ibadah", text: "Wudhu, mandi wajib, tayamum, shalat, puasa, zakat, tajwid, dan modul lanjutan." },
  { title: "Kumpulan Doa", text: "Doa harian, keluarga, belajar, perjalanan, ketenangan, dzikir, dan pencarian cepat." },
  { title: "Kisah & Tokoh", text: "Kisah nabi, sejarah Islam, serta tokoh dan cerita dari tradisi lain dengan sumber yang jelas." },
  { title: "Lintas Agama", text: "Pengenalan kitab, tokoh, tempat ibadah, tema, hari penting, dan praktik secara netral." },
  { title: "White-label Ready", text: "Brand, warna, nama produk, email, modul, dan data dipisah agar mudah dijual ulang." }
] as const;
