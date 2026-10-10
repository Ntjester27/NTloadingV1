/**
 * ====================================================================
 *                 FIVEM CUSTOM LOADING SCREEN CONFIGURATION
 * ====================================================================
 * Bu yapılandırma dosyası üzerinden Loading Screen'in tüm özelliklerini,
 * renklerini, metinlerini, müziklerini ve arkaplanını değiştirebilirsiniz.
 * HTML veya CSS dosyalarını düzenlemenize gerek yoktur.
 * ====================================================================
 */

const Config = {
    // ----------------------------------------------------------------
    // 1. GENEL SUNUCU BİLGİLERİ (SERVER INFORMATION)
    // ----------------------------------------------------------------
    server: {
        name: "LUMINA ROLEPLAY",             // Sunucu adı
        tagline: "Yeni Nesil Şehir & Kaliteli Rol Deneyimi", // Slogan / Alt başlık
        logo: "assets/logo.png",            // Sunucu logosu (assets/logo.png veya doğrudan görsel URL'si)
        statusBadge: "V2.5 • Çevrimiçi",     // Bilgi panelindeki yeşil durum rozeti
    },

    // ----------------------------------------------------------------
    // 1.1 KARŞILAMA YAZISI (Ekranın ortasındaki büyük yazı ve altındaki dönen mesajlar)
    // ----------------------------------------------------------------
    greeting: {
        prefix: "Hoş geldin,",    // Oyuncu adından önce yazan kısım
        defaultName: "Oyuncu",    // Oyuncu adı gelene kadar (ve tarayıcı testinde) görünen isim
        interval: 4000,           // Alttaki mesajın değişme süresi (milisaniye)
        messages: [
            "Şehir sokakları senin için aydınlatılıyor, az bekle...",
            "Harita nesneleri ve yapılar senkronize ediliyor...",
            "Özel araç paketleri ve karakter modelleri yükleniyor...",
            "Karakter veritabanı bağlanıyor, rol deneyimin başlıyor...",
            "Neredeyse bitti, Lumina Roleplay'e hoş geldin!"
        ],
    },

    // ----------------------------------------------------------------
    // 2. TEMA VE RENK PALETİ (THEME & ACCENT COLORS)
    // ----------------------------------------------------------------
    theme: {
        // Ana vurgu rengi (Butonlar, bar glow'u, aktif sekmeler için)
        primaryColor: "#6366f1",            // Indigo Mor (Örn: #06b6d4, #3b82f6, #ec4899, #10b981)
        secondaryColor: "#a855f7",          // İkincil Mor/Pembe
        accentGradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
        
        // Kart ve arka plan cam efekti renkleri
        cardBackground: "rgba(13, 17, 28, 0.75)",
        cardBorder: "rgba(255, 255, 255, 0.08)",
        textColor: "#f8fafc",
        mutedTextColor: "#94a3b8",
        
        // Video veya görseller üzerindeki karartma / okunabilirlik katmanı (0.0 - 1.0)
        darkOverlayOpacity: 0.4,

        // Başlık yazı tipi ("Hoş geldin", yüzde, oyun başlıkları). Bilgisayarda kurulu bir yazı tipi adı yazın.
        fontDisplay: '"Orbitron", "Bahnschrift", "Agency FB", "Segoe UI", sans-serif',
    },

    // ----------------------------------------------------------------
    // 2.1 BUTON VE SEKME YAZILARI
    // ----------------------------------------------------------------
    texts: {
        infoButton: "Bilgiler",     // Sol kenardaki buton
        gameButton: "Mini Oyun",    // Sağ üstteki oyun butonu
        musicOption: "Müzik",       // Ses anahtarı
        videoOption: "Video",
        tabs: {                     // Bilgi panelindeki sekme adları
            staff: "Ekip",
            rules: "Kurallar",
            keybinds: "Tuşlar",
            gallery: "Galeri",
        },
    },

    // ----------------------------------------------------------------
    // 3. ARKA PLAN SİSTEMİ (BACKGROUND SYSTEM)
    // ----------------------------------------------------------------
    background: {
        // Arka plan türü: 'video' | 'youtube' | 'image'
        // 'video'   : assets/videos klasöründeki yerel video dosyasını oynatır. (Önerilen: Hatasız ve yüksek performans)
        // 'youtube' : Belirtilen YouTube videosunu sessiz olarak arka planda oynatır.
        // 'image'   : Aşağıdaki görsel listesini slayt gösterisi olarak döner.
        // Hata durumunda sıra: youtube -> yerel video -> görsel slaytı (ekran asla siyah kalmaz)
        defaultType: "youtube",

        // Video özelliğini genel olarak aç / kapat (false yapılırsa doğrudan görsel slaytı devreye girer)
        videoEnabled: true,

        // 3.1 Yerel Video Ayarları (1080p İndirilen Video)
        // NOT: FiveM H.264 (.mp4) oynatamaz; oyun içinde çalışması için .webm (VP9/VP8) kullanın.
        localVideo: {
            path: "", // Boş: yerel video yok. Kullanmak için "assets/videos/dosya.webm" yazın
        },

        // 3.2 YouTube Video Ayarları
        youtube: {
            videoId: "hKt7nUCu7Kg",   // Video kimliği veya tam YouTube bağlantısı
            failTimeout: 20000,       // Bu süre (ms) içinde oynamazsa sıradaki yola / görsellere geçilir
            // Tanılama: true iken ekranın üstünde YouTube'un oynayıp oynamadığı ve hata sebebi yazar.
            // YouTube açılmazsa true yapıp ekran görüntüsü alın.
            debug: false,
            // (İsteğe bağlı) Kendi web sitenizde yayınladığınız yt.html adresi, örn. "https://siteniz.com/yt.html".
            // Boş bırakılırsa oyun sunucusunun kendi adresi kullanılır.
            relayUrl: "",
        },

        // 3.3 Görsel Slayt Ayarları (Video kapalıyken veya yüklenemediğinde kullanılır)
        images: [
            "assets/images/vinewood.png",
            "assets/images/moon.png"
        ],
        slideInterval: 8000, // Görseller arası otomatik geçiş süresi (milisaniye)
    },

    // ----------------------------------------------------------------
    // 4. MÜZİK OYNATICI (MUSIC PLAYER)
    // ----------------------------------------------------------------
    music: {
        // Ses kaynağı: 'music' | 'video'
        // 'music' : Aşağıdaki şarkı listesi çalar, arka plan videosu sessiz oynar.
        // 'video' : Arka plan videosunun (YouTube / yerel video) kendi sesi çalar, şarkı listesi susar.
        //           Video açılamazsa veya sesi yoksa otomatik olarak müziğe dönülür.
        source: "video",
        // Oyuncu, çalardaki düğmeyle müzik / video sesi arasında kendi geçiş yapabilsin mi?
        // (Seçimi hatırlanır ve yukarıdaki varsayılanın önüne geçer.)
        allowSourceSwitch: true,

        enabled: true,            // Müzik çaların görünürlüğü (true: açık, false: gizli)
        autoplay: true,           // Sayfa açıldığında otomatik çalma denemesi
        defaultVolume: 25,        // Varsayılan ses seviyesi (0 - 100)
        rememberVolume: true,     // localStorage ile kullanıcının son seçtiği ses seviyesini hatırla
        shuffle: false,           // Karışık çalma varsayılanı
        repeat: true,             // Liste bittiğinde başa dön

        // Şarkı Listesi (Proje içi yerel MP3 veya doğrudan harici ses URL'si)
        playlist: [
            {
                title: "Lost in Night City",
                artist: "Lumina Radio",
                src: "assets/music/fire.mp3",
                cover: "assets/images/vinewood.png"
            },
            {
                title: "Neon Horizon",
                artist: "Synthwave Pulse",
                src: "assets/music/fire.mp3",
                cover: "assets/images/moon.png"
            }
        ]
    },

    // ----------------------------------------------------------------
    // 5. SOL BİLGİ PANELİ VE SEKMELER (LEFT INFO PANEL & TABS)
    // ----------------------------------------------------------------
    panel: {
        // Bilgi paneli ekran açıldığında açık mı gelsin? (false: kapalı gelir, sol kenardaki "Bilgiler" butonuyla açılır)
        startOpen: false,
        defaultTab: "staff", // Başlangıçta açık olan sekme: 'staff', 'rules', 'keybinds', 'gallery'
        tabs: {
            // Yetkili ekibi listesi. İsimleri ve rolleri kendi ekibinize göre değiştirin.
            // avatar : Görsel yolu (örn. "assets/images/staff/ali.png"). Boş bırakılırsa ismin baş harfleri gösterilir.
            // color  : Rol rengi (isteğe bağlı).
            staff: {
                members: [
                    { name: "Ad Soyad", role: "Kurucu", avatar: "", color: "#f59e0b" },
                    { name: "Ad Soyad", role: "Yönetici", avatar: "", color: "#ef4444" },
                    { name: "Ad Soyad", role: "Geliştirici", avatar: "", color: "#22d3ee" },
                    { name: "Ad Soyad", role: "Destek Ekibi", avatar: "", color: "#4ade80" }
                ]
            },
            rules: {
                list: [
                    { num: "01", title: "RDM & VDM Yasaktır", desc: "Rolsel geçerli bir sebep olmaksızın oyunculara saldırmak veya araçla ezmek kesinlikle yasaktır." },
                    { num: "02", title: "Metagaming Yapılamaz", desc: "Rol dışı platformlardan (Discord vb.) elde edilen bilgileri rol içinde kullanamazsınız." },
                    { num: "03", title: "Hayatın Değeri (Fear RP)", desc: "Silah zoru altındayken karakterinizin hayatını korumak ve korkuyu sergilemek zorundasınız." },
                    { num: "04", title: "Powergaming Yasaktır", desc: "Gerçek hayatta yapılması fiziksel olarak imkansız eylemleri role aktaramazsınız." },
                    { num: "05", title: "Rol İçi Saygı", desc: "Rol ortamında şahsi küfür, hakaret ve toksik davranışlar doğrudan sunucudan uzaklaştırılma sebebidir." }
                ]
            },
            keybinds: {
                keys: [
                    { key: "F1", desc: "Akıllı Telefonu Aç / Kapat" },
                    { key: "F2", desc: "Gelişmiş Envanter Ekranı" },
                    { key: "F3", desc: "Animasyon & İfade Menüsü" },
                    { key: "K", desc: "Emniyet Kemerini Bağla" },
                    { key: "B", desc: "İşaret Etme / Parmağı Doğrult" },
                    { key: "Z", desc: "Ses Mesafesi (Fısıltı/Normal/Bağır)" },
                    { key: "Y", desc: "Araç Motorunu Çalıştır / Durdur" },
                    { key: "G", desc: "Araç Kapılarını Kilitle / Aç" }
                ]
            },
            gallery: {
                images: [
                    { src: "assets/images/vinewood.png", caption: "Vinewood Tepeleri & Gün Batımı Manzarası" },
                    { src: "assets/images/moon.png", caption: "Los Santos Gece Gökyüzü & Dolunay" }
                ]
            }
        }
    },

    // ----------------------------------------------------------------
    // 5.1 SOSYAL / BAĞLANTI BUTONLARI (Ekranın sağ üstündeki logolu butonlar)
    // ----------------------------------------------------------------
    // icon  : 'discord' | 'website' | 'store' | 'wiki' | 'youtube' | 'instagram'
    // url   : Tıklanınca açılacak adres.
    // copy  : (İsteğe bağlı) Doluysa tıklanınca adres açılmaz, bu metin panoya kopyalanır.
    // İstemediğiniz butonun satırını silmeniz yeterli.
    socials: [
        { icon: "discord", label: "Discord", url: "https://discord.gg/lumina", copy: "discord.gg/lumina" },
        { icon: "website", label: "Web Sitesi", url: "https://lumina-rp.com" },
        { icon: "store", label: "Tebex Mağaza", url: "https://lumina.tebex.io" },
        { icon: "wiki", label: "Kural Rehberi", url: "https://wiki.lumina-rp.com" }
    ],

    // ----------------------------------------------------------------
    // 6. YÜKLEME ÇUBUĞU VE DURUM METİNLERİ (LOADING BAR)
    // ----------------------------------------------------------------
    loader: {
        stages: [
            { threshold: 0, text: "Sunucu bağlantısı kuruluyor..." },
            { threshold: 20, text: "Oyun haritası ve yapılar yükleniyor..." },
            { threshold: 45, text: "Özel araç ve giysi paketleri indiriliyor..." },
            { threshold: 70, text: "Sunucu eklentileri ve komut dosyaları başlatılıyor..." },
            { threshold: 90, text: "Karakter verileri ve kullanıcı arayüzü hazırlanıyor..." },
            { threshold: 99, text: "Şehre giriş yapılıyor, iyi roller!" }
        ],
        // Tarayıcıda (FiveM dışı) test edilirken otomatik ilerleme simülasyonu
        simulateInBrowser: true,
        simulationDuration: 10000, // 10 saniyede %100'e ulaşır
    },

    // ----------------------------------------------------------------
    // 6.1 MİNİ OYUN (Sağ üstteki "Mini Oyun" butonu)
    // ----------------------------------------------------------------
    // Yükleme beklenirken oynanan yılan oyunu. Oyun açıkken arka plan videosu ve müzik durur,
    // kapatılınca kaldığı yerden devam eder.
    minigame: {
        enabled: true,   // false yapılırsa buton gizlenir
        botCount: 8,     // Arenadaki rakip yılan sayısı
        foodCount: 420,  // Arenadaki yem sayısı
        botNames: ["Kobra", "Engerek", "Piton", "Anakonda", "Mamba", "Boa", "Çıngırak", "Kral", "Şahmeran", "Zehir"],

        speed: 170,          // Yılanın normal hızı
        boostSpeed: 310,     // Hızlanınca (fare basılı / Boşluk)
        growthPerFood: 1.5,  // Her yemin eklediği parça sayısı. Artırırsanız büyümek kolaylaşır

        // Süper yem (altın yıldız): yılanlardan kaçar, yiyen yılan bir anda 8-9 katına çıkar.
        specialFoodCount: 2,     // Arenada aynı anda kaç süper yem olsun (0: kapalı)
        specialFleeSpeed: 185,   // Kaçma hızı. Yılan normalde 170, hızlanınca 310 gider; düşürürseniz yakalamak kolaylaşır

        // Ölüm ekranı
        trollRestartButton: true, // "Tekrar Oyna" butonu fareden iki kez kaçsın mı?
        deathTitles: ["Yandın!", "Geçmiş olsun", "F", "Olmadı be", "Hadi ya"], // Ölüm ekranı başlığı (rastgele)
        // Ölünce rastgele biri gösterilir. {killer}: sizi yiyen yılanın adı, {score}: skorunuz
        deathMessages: [
            "{killer} seni öğle yemeği yaptı.",
            "Yılan mıydın, solucan mı? Karar veremedik.",
            "Sunucu senden hızlı yükleniyor.",
            "Direksiyon sende değildi galiba.",
            "{score} puanla mı hava atacaktın?",
            "Fare kablosu mu takıldı?",
            "{killer}: \"Eline sağlık, doydum.\""
        ],
    },

    // ----------------------------------------------------------------
    // 7. EFEKTLER VE PERFORMANS (FX & MICRO-ANIMATIONS)
    // ----------------------------------------------------------------
    effects: {
        cursorGlow: false,         // Fareyi takip eden yumuşak ambient spotlight ışığı
        backgroundParticles: false,// Arka planda 60fps hafif parıldayan nebula parçacıkları
        cardHover3D: true,         // Kartlarda yumuşak hover ve derinlik efekti
    }
};

window.Config = Config;
