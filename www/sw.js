// Service worker tối thiểu để Chrome cho phép "Cài đặt ứng dụng". Không cache bản đồ.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
