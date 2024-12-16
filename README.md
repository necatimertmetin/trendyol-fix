
# Trendyol İçin Blur Kaldırma Extension'ı

Bu Chrome extension'ı, **trendyol.com** üzerindeki görsellerdeki blur etkisini kaldırır. Web sitesindeki `sexual-overlay` sınıfını `div` elemanlarından silerek bu efekti ortadan kaldırır. **React** ve **Vite** ile geliştirilmiş bu extension, hızlı performans ve kesintisiz bir gezinme deneyimi sunar.

## Özellikler

-   **Trendyol.com** üzerindeki `div` elemanlarından `sexual-overlay` sınıfını kaldırır.
-   Görselleri netleştirerek daha iyi bir gezinme deneyimi sağlar.

## Kurulum

### Manuel Kurulum

Extension'ı kurmak için aşağıdaki adımları izleyin:

1.  **Repository'i klonlayın veya indirin**:
    
    bash
    
    Kodu kopyala
    
    `git clone https://github.com/necatimertmetin/trendyol-fix.git` 
    
2.  **Projeyi Vite ile derleyin**:
    
    Proje klasöründe şu komutları çalıştırın:
    
    bash
    
    Kodu kopyala
    
    `npm install
    npm run build` 
    
3.  **Chrome'da Geliştirici Modunu etkinleştirin**:
    
    -   Chrome'u açın ve `chrome://extensions/` adresine gidin.
    -   Sağ üst köşedeki **Geliştirici modu** anahtarını etkinleştirin.
4.  **Extension'ı unpacked (açık) olarak yükleyin**:
    
    -   **Yüklenmemiş uzantıyı yükle** butonuna tıklayın.
    -   `dist` klasörünü seçin (bu klasör, `npm run build` komutunu çalıştırdıktan sonra oluşacaktır).
5.  **Trendyol.com'a gidin**:
    
    -   Extension yüklendikten sonra, **trendyol.com** adresine gidin ve görsellerdeki blur etkisinin kaldırıldığını görün.

### Extension'ı Kullanma

-   Sadece **trendyol.com** adresine gidin ve extension otomatik olarak görsellerdeki blur etkisini kaldıracak, ilgili `div` elemanlarındaki `sexual-overlay` sınıfını silecektir.

## Katkıda Bulunma

Projeye katkıda bulunmak isterseniz, bir sorun bildirebilir veya pull request gönderebilirsiniz. Yeni özellikler için kodlama stilini takip ettiğinizden ve testler eklediğinizden emin olun.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için LICENSE dosyasına göz atabilirsiniz.