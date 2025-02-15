//Khi sử dụng hot reload (HMR) trong development:
//+ Mỗi lần file được reload, một instance mới của PrismaClient sẽ được tạo => Database connection pool bị lỗi -> gây lỗi 'Too many connections'
//=> tái sử dụng instance cũ qua globalThis trong môi trường development tránh được connection leak
// Trong development: Instance luôn được gán vào global -> tái sử dụng khi reload
// Trong production: Luôn tạo instance mới -> phù hợp với serverless (AWS Lambda, Vercel,...)
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export default db;

//Lưu ý quan trọng:
//+ Trong NodeJS, bạn có thể dùng global hoặc globalThis tùy thích -> không ảnh hưởng logic
//+ Trong trình duyệt, global không tồn tại, nhưng globalThis trỏ đến window -> code vẫn chạy được
//+ Trong typescript khi khai báo như vậy typescript sẽ tự động gắn biến này vào globalThis (ko cần quan tâm đến môi trường
//=> Dùng globalThis để clean code và đa dạng nền tảng
