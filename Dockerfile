FROM node:18-slim

WORKDIR /app

COPY package*.json ./

#ติดตั้ง Dependencies
RUN npm ci

#คัดลอกไฟล์ทั้งหมดไปที่ Container
COPY . .

RUN npm run build

#เปิด Port (ของ Vite) 
EXPOSE 3000

#สั่งรัน
CMD ["npx", "serve", "-s", "dist"]
