# FiveM Loading Screen

Video arka planlı, müzik çalarlı, bilgi panelli ve mini oyunlu yükleme ekranı.

## Kurulum

1. `loadscreen` klasörünü sunucunuzun `resources` klasörüne koyun.
2. `server.cfg` dosyasına `ensure loadscreen` satırını ekleyin.
3. `html/config.js` dosyasını açıp kendi bilgilerinizi yazın.

Değişiklikten sonra konsola `restart loadscreen` yazın ve oyuna yeniden bağlanın.

## Neyi nereden değiştiririm

Her şey `html/config.js` dosyasındadır. Dosyanın içinde her ayarın yanında açıklaması yazar.

| Ne | config.js içindeki bölüm |
|---|---|
| Sunucu adı, slogan, logo | `server` |
| Ortadaki "Hoş geldin" yazısı ve dönen mesajlar | `greeting` |
| Renkler ve yazı tipi | `theme` |
| Buton ve sekme yazıları | `texts` |
| Arka plan: YouTube, yerel video ya da resim | `background` |
| Ses: müzik mi video sesi mi, şarkı listesi, ses seviyesi | `music` |
| Bilgi paneli: ekip, kurallar, tuşlar, galeri | `panel` |
| Sağ üstteki Discord / site / mağaza butonları | `socials` |
| Yükleme çubuğundaki aşama yazıları | `loader` |
| Mini oyun: aç/kapat, bot isimleri ve sayısı, yem, hız, büyüme, süper yem, ölüm yazıları | `minigame` |
| Parçacık, fare ışığı, kart efektleri | `effects` |

`html/js` içindeki kod dosyaları karıştırılmıştır (okunmaz) ve düzenlenmez; ayar değiştirmek için onlara girmeniz gerekmez.

## Kendi dosyalarınız

Dosyayı ilgili klasöre koyun, yolunu `config.js` içine yazın.

| Dosya | Klasör |
|---|---|
| Logo | `html/assets/` |
| Resimler | `html/assets/images/` |
| Müzik (`.mp3`, `.ogg`) | `html/assets/music/` |
| Video (`.webm`) | `html/assets/videos/` |

- Dosya adlarında boşluk ve Türkçe karakter kullanmayın.
- **FiveM `.mp4` videoları oynatmaz.** Yerel video kullanacaksanız `.webm` biçimine çevirin.
- Dosyalar her oyuncuya indirilir; videoyu küçük tutun.

## Bilmeniz gerekenler

- **Yedek sırası:** YouTube → yerel video → resimler. Biri açılmazsa sıradakine geçilir, bu yüzden `background.images` içinde en az bir resim bırakın.
- **Video sesi:** `music.source: "video"` iken video açılmazsa ya da sesi yoksa otomatik olarak müziğe dönülür.
- **Oyuncu seçimi:** Oyuncunun Müzik/Video seçimi ve ses seviyesi hatırlanır. Herkes için sabit olsun isterseniz `music.allowSourceSwitch: false` yapın.
- **Mini oyun:** Oyun açıkken video ve müzik durur. Sunucu yüklemesi arkada sürer; bitince ekran kapanır.

## Test

Sunucuyu başlatıp FiveM'de F8'e basın ve `connect localhost` yazın. Değişiklikten sonra yeniden bağlanın.

YouTube açılmazsa `config.js` içinde `background.youtube.debug` değerini `true` yapın; ekranın üstünde sebebi yazar.

## Sorun giderme

| Sorun | Çözüm |
|---|---|
| Ekran boş geliyor | `config.js` içinde virgül, tırnak ya da parantez eksik |
| Video oyunda oynamıyor | Dosya `.mp4`; `.webm` biçimine çevirin |
| Resim ya da logo görünmüyor | Dosya yolunu ve büyük-küçük harfi kontrol edin |
| Değişiklik görünmüyor | `restart loadscreen` yazıp yeniden bağlanın |

## Lisans

[MIT](LICENSE)
