const fs = require('fs');

const CURRENT_ENV = process.env.NODE_ENV;
const source = `.env.${CURRENT_ENV}`;
const target = '.env.local';

try {
  fs.unlinkSync(target);
} catch {}

fs.copyFileSync(source, target);

console.log({ CURRENT_ENV });
