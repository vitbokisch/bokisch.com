self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', async (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
      const clients = await self.clients.matchAll()
      await self.registration.unregister()
      for (const client of clients) client.navigate(client.url)
    })()
  )
})
