FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 4173

CMD [ "pnpm", "run", "preview" ]