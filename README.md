## 🚀 Tính Năng Nổi Bật

- Đăng nhập, đăng ký
- Light Mode, Dark Mode
- Mời người dùng tham gia Server
- Thêm, sửa, xóa Server
- Thêm, sửa, xóa Channel
- Thêm, sửa, xóa Message
- Quản lý member
- Tìm kiếm channel, member
- Direct message
- Video call
- Voice call
- Chat real-time

## 📦 Cài Đặt

1. Clone repository

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Chuyển đến thư mục

```bash
cd your-repo
```

3. Cài đặt thư viện

```bash
npm install
```

4. Tạo file .env với cấu trúc như sau

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=

UPLOADTHING_TOKEN=

LIVEKIT_API_KEY =
LIVEKIT_API_SECRET =
NEXT_PUBLIC_LIVEKIT_URL =
```

5. Chạy prisma

```bash
npx prisma db push

npx prisma generate
```

6. Chạy ứng dụng

```bash
npm run dev
```
