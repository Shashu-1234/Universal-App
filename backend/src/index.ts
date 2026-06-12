import { createApp } from './app.js';

const port = Number(process.env.PORT ?? 3000);
const app = createApp();

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend listening on ${port}`);
  });
}

export { app };
