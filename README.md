<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>ShopStop</title>
  <link href="sstop.css" rel="stylesheet" type="text/css" />
  <link rel="shortcut icon" href="C:\Users\HP\OneDrive\Documents\ShopStop\logo.svg" type=" image/x-icon">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=poppins:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
</head>

<body>

    <div class="overlay" data-overlay></div>
      <div class="modal" data-modal>
    <div class="modal-close-overlay" data-modal-overlay></div>
    <div class="modal-content">
      <button class="modal-close-btn" data-modal-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div class="newsletter-img">
        <img src="C:\Users\HP\OneDrive\Documents\ShopStop\newsletter.png" alt="subscribe newsletter" width="400"
          height="400">
      </div>
      <div class="newsletter">
        <form action="#">
          <div class="newsletter-header">
            <h3 class="newsletter-title">Subscribe Newsletter</h3>
            <p class="newsletter-desc">
              Subscribe the <b>ShopStop</b> to get the latest news and updates.
            </p>
          </div>

          <input type="email" name="email" class="email-field" placeholder="Email Address" required>

          <button type="submit" class="btn-newsletter">Subscribe</button>

        </form>
      </div>
    </div>
  </div>
    
    
    <div class="notification-toast" data-toast>
        <button class="toast-close-btn" data-toast-close>
            <ion-icon name="close-outline"></ion-icon>
        </button>

    <div class="toast-banner">
        <img src="C:\Users\HP\OneDrive\Documents\ShopStop\products\jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70">
    </div>
    
    <div class="toast-detail">
    
            <p class="toast-message">
            Someone NEW just BOUGHT!
            </p>
            
            <p class="toast-title">
             Rose Gold Earrings.
            </p>
            
            <p class="toast-meta">
            <time datetime="PT2M">2 Minutes</time>ago
            </p>
        
    </div>
    
    </div>

  <script src="sstop.js"></script>
  <script src="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

</html>
