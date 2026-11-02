# 超普通修仙模拟器 (Siêu Phổ Thông Tu Tiên Mô Phỏng Khí) — Bản Chuyển Đổi 1:1 (Cocos Creator 2.4.11 Web/AI Studio)

Dự án này được giải mã và chuyển đổi **nguyên bản 1:1** từ file `chaoputongxiuxianmoniqi.apk` (`com.lyyd.cptxxmnq`, phiên bản `1.0.4`) sang chuẩn Web/HTML5 để chạy trực tiếp trên trình duyệt hoặc tải lên **Google AI Studio** mà **không dựng lại, không mô phỏng giả lập**.

## 1. Kiến trúc & Quy trình giải mã 1:1
- **Giải mã XXTEA Bytecode (`.jsc` -> `.js`)**: Toàn bộ 6 file mã nguồn bị mã hóa XXTEA + nén Gzip của Cocos Creator 2.4.11 đã được giải mã 1:1 bằng khóa gốc trích xuất từ `lib/arm64-v8a/libcocos2djs.so` (`9a93f313-59af-49`):
  - `src/settings.27b54.js`: Cấu hình scene, group va chạm và danh sách bundle.
  - `src/cocos2d-js-web.js`: Engine Cocos Creator v2.4.11 gốc (`src/cocos2d-jsb.25176.jsc`) đã được gắn tầng tương thích DOM Canvas/WebAudio.
  - `src/webgl-adapter.js`: Bộ chuyển đổi WebGL 1:1 cho `window.gfx`, `window.renderer` (`ModelBatcher`, `ForwardRenderer`, `ProgramLib`, `NodeProxy`, `MemPool`, `NodeMemPool`) và `window.spine` (thay thế C++ JSB bindings của `libcocos2djs.so`).
  - `assets/main/index.231ca.js`: Toàn bộ 103 module logic/UI gốc của game (956 KB).
  - `assets/internal/index.2c377.js`, `assets/resources/index.30fd4.js`, `assets/story/index.2b5bf.js`.
- **Tách riêng 103 file mã nguồn (`src/scripts/`) & 22 bảng dữ liệu cốt truyện (`src/data/`)**:
  - `src/scripts/*.js`: Toàn bộ 103 module của game (`Game.js`, `Menu.js`, `Login.js`, `DataBox.js`, `FightBox.js`, `LianDan.js`, `LianQi.js`, `RoleBox.js`, `SkillBox.js`, `Story.js`, v.v.) đã được tách rời để dễ dàng đọc hiểu, dịch thuật hoặc chỉnh sửa với Gemini trong Google AI Studio.
  - `src/data/*.json`: Toàn bộ 22 bảng dữ liệu cốt truyện, cảnh giới, vật phẩm, công pháp, đan dược, pháp bảo (`main.json`, `step.json`, `fbStep.json`, `obj.json`, `guai.json`, `skill.json`, `title.json`, `lev.json`, `home.json`, `own.json`, `copy.json`, `lianDan.json`, `lianQi.json`, v.v.) trích xuất từ `assets/story/import/0e/0eb16ad8e.0e1c8.json`.
- **Loại bỏ SDK quảng cáo rác**: File nén ẩn `assets/1728530695` (6.37 MB chứa thư viện C++ quảng cáo Pangle `libPglbizssdk_ml.so`) và các lệnh gọi quảng cáo Android (`tapLogin`, `showVedio`) đã được nối tắt qua cầu nối JSB (`index.html`) giúp nhận thưởng trực tiếp mà không làm thay đổi bất kỳ logic hay tài nguyên nào của game.

## 2. Cách sử dụng
- **Chạy trực tiếp**: Mở qua bất kỳ HTTP server tĩnh nào (ví dụ `npx serve .` hoặc `python3 -m http.server 8080`) và truy cập `index.html`.
- **Tải lên Google AI Studio**:
  - Có thể tải các file trong `src/scripts/` và `src/data/` vào cửa sổ ngữ cảnh (Context) của Google AI Studio để phân tích logic, dịch thuật Việt hóa 1:1, hoặc chỉnh sửa thông số.
  - Hoặc sử dụng bản đóng gói đơn file `chaoputongxiuxianmoniqi_1to1.html` (tích hợp sẵn Virtual File System nén Gzip trong bộ nhớ) để chạy 1:1 ngay trong môi trường xem trước 1 file HTML.
