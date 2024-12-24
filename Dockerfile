FROM node:22 as api-service
# 選擇 img + 建立 docker as api-service 是取名用
WORKDIR /app
# 建立並進入工作資料夾
COPY ./ ./
# 從左邊路徑拷貝到右邊路徑
RUN npm install -g pnpm
RUN pnpm i -g @nestjs/cli
RUN cd ./apps/backend && pnpm i