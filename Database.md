### 1. **User (Người dùng)**

**Công dụng**: Lưu trữ thông tin của người dùng hệ thống.

| Thuộc tính      | Nghĩa tiếng Việt                                      |
| --------------- | ----------------------------------------------------- |
| `id`            | Mã định danh người dùng (UUID)                        |
| `name`          | Họ tên người dùng                                     |
| `email`         | Địa chỉ email (duy nhất)                              |
| `password_hash` | Mã băm mật khẩu                                       |
| `role`          | Vai trò của người dùng: `customer`, `admin`, `vendor` |
| `created_at`    | Thời điểm tạo người dùng                              |
| `updated_at`    | Thời điểm cập nhật gần nhất                           |

---

### 2. **Address (Địa chỉ)**

**Công dụng**: Lưu địa chỉ giao hàng của người dùng.

| Thuộc tính     | Nghĩa tiếng Việt               |
| -------------- | ------------------------------ |
| `id`           | Mã định danh địa chỉ           |
| `user_id`      | Tham chiếu đến người dùng      |
| `full_name`    | Họ tên người nhận              |
| `phone`        | Số điện thoại người nhận       |
| `address_line` | Địa chỉ cụ thể                 |
| `city`         | Thành phố                      |
| `province`     | Tỉnh/thành phố                 |
| `postal_code`  | Mã bưu điện                    |
| `is_default`   | Là địa chỉ mặc định (đúng/sai) |
| `created_at`   | Thời điểm tạo địa chỉ          |

---

### 3. **Category (Danh mục)** & **Product (Sản phẩm)**

**Công dụng**: Quản lý danh mục và sản phẩm.

**Category:**

| Thuộc tính    | Nghĩa tiếng Việt      |
| ------------- | --------------------- |
| `id`          | Mã định danh danh mục |
| `name`        | Tên danh mục          |
| `description` | Mô tả danh mục        |

**Product:**

| Thuộc tính    | Nghĩa tiếng Việt                 |
| ------------- | -------------------------------- |
| `id`          | Mã định danh sản phẩm            |
| `name`        | Tên sản phẩm                     |
| `description` | Mô tả sản phẩm                   |
| `price`       | Giá bán sản phẩm                 |
| `category_id` | Tham chiếu đến danh mục sản phẩm |
| `stock`       | Số lượng tồn kho                 |
| `image_url`   | URL ảnh sản phẩm                 |
| `created_at`  | Thời điểm tạo sản phẩm           |
| `updated_at`  | Thời điểm cập nhật sản phẩm      |

---

### 4. **Cart (Giỏ hàng)** & **CartItem (Mục trong giỏ hàng)**

**Công dụng**: Quản lý giỏ hàng của người dùng.

**Cart:**

| Thuộc tính   | Nghĩa tiếng Việt          |
| ------------ | ------------------------- |
| `id`         | Mã định danh giỏ hàng     |
| `user_id`    | Tham chiếu đến người dùng |
| `created_at` | Thời điểm tạo giỏ hàng    |

**CartItem:**

| Thuộc tính   | Nghĩa tiếng Việt                 |
| ------------ | -------------------------------- |
| `id`         | Mã định danh mục giỏ hàng        |
| `cart_id`    | Tham chiếu đến giỏ hàng          |
| `product_id` | Tham chiếu đến sản phẩm          |
| `quantity`   | Số lượng sản phẩm trong giỏ hàng |

---

### 5. **Order (Đơn hàng)** & **OrderItem (Chi tiết đơn hàng)**

**Công dụng**: Quản lý đơn hàng và các mặt hàng trong đơn.

**Order:**

| Thuộc tính    | Nghĩa tiếng Việt                                                        |
| ------------- | ----------------------------------------------------------------------- |
| `id`          | Mã định danh đơn hàng                                                   |
| `user_id`     | Tham chiếu đến người đặt hàng                                           |
| `status`      | Trạng thái: `pending`, `confirmed`, `shipped`, `delivered`, `cancelled` |
| `address_id`  | Địa chỉ giao hàng                                                       |
| `total_price` | Tổng giá trị đơn hàng                                                   |
| `created_at`  | Thời điểm tạo đơn hàng                                                  |
| `updated_at`  | Thời điểm cập nhật đơn hàng                                             |

**OrderItem:**

| Thuộc tính   | Nghĩa tiếng Việt                |
| ------------ | ------------------------------- |
| `id`         | Mã định danh mục trong đơn hàng |
| `order_id`   | Tham chiếu đến đơn hàng         |
| `product_id` | Tham chiếu đến sản phẩm         |
| `quantity`   | Số lượng sản phẩm               |
| `price`      | Giá tại thời điểm đặt hàng      |

---

### 6. **Payment (Thanh toán)**

**Công dụng**: Theo dõi thông tin thanh toán của đơn hàng.

| Thuộc tính       | Nghĩa tiếng Việt                                    |
| ---------------- | --------------------------------------------------- |
| `id`             | Mã định danh thanh toán                             |
| `order_id`       | Tham chiếu đến đơn hàng                             |
| `method`         | Phương thức thanh toán: `stripe`, `paypal`, `vnpay` |
| `payment_status` | Trạng thái thanh toán: `pending`, `paid`, `failed`  |
| `transaction_id` | Mã giao dịch                                        |
| `paid_at`        | Thời gian thanh toán                                |

---

### 7. **Notification (Thông báo)**

**Công dụng**: Gửi thông báo đến người dùng.

| Thuộc tính   | Nghĩa tiếng Việt                                 |
| ------------ | ------------------------------------------------ |
| `id`         | Mã định danh thông báo                           |
| `user_id`    | Tham chiếu đến người nhận thông báo              |
| `type`       | Loại thông báo: `order_status`, `promo`, `alert` |
| `content`    | Nội dung thông báo                               |
| `is_read`    | Đã đọc hay chưa (mặc định là `false`)            |
| `created_at` | Thời điểm tạo thông báo                          |

---
