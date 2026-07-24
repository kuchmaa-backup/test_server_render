const server = Bun.serve({
  // Render автоматически передает нужный порт через переменную окружения
  port: process.env.PORT || 3000,
  fetch(req) {
    return new Response("Hello World from Bun!");
  },
});

console.log(`Bun server running on port ${server.port}`);
