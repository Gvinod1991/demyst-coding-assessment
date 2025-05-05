
FROM node:20

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

CMD ["node", "dist/app.js"]

EXPOSE 3001
