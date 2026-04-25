self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // এটি ব্রাউজারকে সিগনাল দেয় যে অ্যাপটি অফলাইনেও কাজ করতে সক্ষম
});
