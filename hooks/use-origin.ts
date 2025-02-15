/**
 * 1. Mục đích chính:
 * + Tránh lỗi hydration trong SSR: ngăn server truy cập window (chỉ có trên client)
 * + Lấy origin URL sau khi component được mount trên client
 * + Trả về null trong lần render đầu để tránh mismatch giữa server và client
 *
 * 2. Xử lý:
 * + Kiểm tra sự tồn tại của window trước khi truy cập
 * + Fallback về empty string nếu không có window (trên server)
 *
 * 3. Ưu điểm:
 * + An toàn với SSR: không gây lỗi "window is not defined"
 * + Tự động cập nhật: đảm bảo origin luôn chính xác khi deploy lên domain khác
 * + Dễ tái sử dụng: có thể dùng ở bất kỳ component nào cần origin
 *
 * 4. Hữu ích:
 * + Tạo dynamic links (mời bạn bè, chia sẻ content)
 * + Gọi API với baseURL động
 * + Hiển thị domain hiện tại trong UI
 * + Xử lý authentication redirects
 */

import { useState, useEffect } from "react";

const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!mounted) {
    return null;
  }

  return origin;
};

export default useOrigin;
