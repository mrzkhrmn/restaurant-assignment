## Restaurant Assignment

Bu proje, bir restoran yönetim uygulaması oluşturmak için React ve Vite kullanılarak geliştirilmiştir. Kullanıcıların restoranları listeleyebileceği, detaylarına ulaşabileceği ve login olabileceği bir uygulamadır.

---

### 🚀 Proje Özellikleri
- **React**: UI oluşturmak için.
- **Vite**: Hızlı geliştirme ortamı.
- **Axios**: API çağrıları için.
- **React Router**: Sayfa yönlendirmesi için.
- **TailwindCSS**: Modern ve esnek tasarım.

---

### 📦 Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

#### 1. Depoyu Klonlayın
```bash
git clone https://github.com/username/restaurant-assignment.git
cd restaurant-assignment
```

#### 2. Gerekli Bağımlılıkları Yükleyin
```bash
npm install
```

#### 3. Uygulamayı Çalıştırın
```bash
npm run dev
```

#### 4. Projeyi Derleyin (Production)
```bash
npm run build
```

#### 5. Preview için
```bash
npm run preview
```

---

### 📂 Proje Yapısı
```plaintext
restaurant-assignment/
├── public/                 # Statik dosyalar
├── src/
│   ├── components/         # UI bileşenleri
│   ├── pages/              # Sayfa bileşenleri
│   ├── services/           # API istekleri için servisler
│   ├── App.jsx             # Ana uygulama dosyası
│   ├── main.jsx            # Giriş dosyası
├── package.json            # Proje bağımlılıkları ve script'ler
├── tailwind.config.js      # TailwindCSS konfigürasyonu
└── README.md               # Proje dokümantasyonu
```

---

### ⚙️ Kullanılan Teknolojiler

| Teknoloji           | Açıklama                                              |
|---------------------|------------------------------------------------------|
| **React**           | Kullanıcı arayüzlerini oluşturmak için.              |
| **Vite**            | Hızlı ve optimize geliştirme ortamı.                 |
| **Axios**           | API isteklerini yönetmek için.                       |
| **React Router**    | Sayfa yönlendirmesi için.                            |
| **TailwindCSS**     | Tasarımı hızlandırmak için CSS araçları.             |

---

### 📜 Scriptler

| Komut         | Açıklama                              |
|---------------|--------------------------------------|
| `npm run dev` | Geliştirme ortamını başlatır.         |
| `npm run build` | Projeyi production için derler.     |
| `npm run preview` | Derlenmiş projeyi test eder.      |
| `npm run lint` | Kod hatalarını kontrol eder.        |

---

### 💡 Geliştirme Notları
- **TailwindCSS**: `tailwind.config.js` dosyasından özelleştirme yapabilirsiniz.
- **Axios**: Tüm API çağrıları için bir `axiosInstance` kullanıldı.
- **React Router**: Çok sayfalı bir uygulama yapısı sağlandı.

---