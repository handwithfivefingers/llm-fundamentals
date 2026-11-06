# How LLM Work ?

## Cấu trúc nền tảng
1. Neural networks
2. Transformer

## Nhìn nhận và số hóa ngôn ngữ
1. Tokens
2. Embeddings
3. Attention/Self-attention

## Trí thông minh và học tập
1. Model weights
2. Pretraining
3. Fine-tuning

## Hoạt động thực tế
1. Inference

## Neural Networks
- Giả lập mạng lưới tế bào thần kinh não bộ con người. 
- Nhiều layers kết nối để xử lý thông tin, cơ bản bao gồm:

1. Input Layer: Nhận dữ liệu (Text, Pixel, ...etc)
2. Hidden Layer: Nằm giữa Input và Output Layer. Xử lý toán học phức tạp để trích xuất đặc trưng của dữ liệu. Từ vài lớp đến vài trăm lớp ( Deep Network )
3. Output Layer: Trả kết quả

Thành phần:
1. Trọng số (weights): mức độ quan trọng của input. weight càng lớn càng ảnh hưởng đến output
2. Định thiên (bias): Hằng số giúp dịch chuyển hàm kích hoạt, tăng độ linh hoạt khi khớp dữ liệu
3. Hàm kích hoạt (Activation function): Quyết định có truyền tín hiệu đi tiếp hay không bằng cách chuyển đổi các phép tính tuyến tính thành phi tuyến tính.

Quy trình học hỏi:
1. Lan truyền xuôi (Forward Propagation): Dữ liệu đi từ lớp đầu vào, qua các lớp ẩn (nhân với trọng số và cộng bias) để tạo ra một kết quả dự đoán ở lớp đầu ra.
2. Tính toán độ lỗi (Loss Function): Máy tính so sánh kết quả dự đoán với kết quả chính xác thực tế (nhãn dữ liệu) để đo lường xem mạng đang đoán sai bao nhiêu.
3. Lan truyền ngược (Backpropagation): Lỗi này được truyền ngược từ cuối lên đầu mạng. Máy tính sử dụng giải tích (đạo hàm) để tính xem từng trọng số đóng góp bao nhiêu vào sai sót đó.
4. Cực tiểu hóa độ lỗi (Gradient Descent): Thuật toán tối ưu hóa sẽ điều chỉnh lại toàn bộ trọng số và định thiên một chút để giảm lỗi cho lần đoán sau. Quá trình này lặp lại hàng triệu lần cho đến khi mạng đạt độ chính xác mong muốn.


Neural network phổ biến:
• Mạng lan truyền thẳng (Feedforward - FNN): Dữ liệu chỉ đi theo một chiều. Dùng cho các bài toán phân loại dữ liệu dạng bảng đơn giản.
• Mạng thần kinh tích chập (Convolutional - CNN): Chuyên dùng để xử lý hình ảnh và video. Nó có khả năng quét qua các vùng của ảnh để nhận diện đường nét, hình dáng, vật thể.
• Mạng thần kinh hồi quy (Recurrent - RNN): Thiết kế cho dữ liệu có tính tuần tự hoặc thời gian (chuỗi văn bản, giọng nói, giá chứng khoán). Nó có "bộ nhớ" để nhớ các từ/dữ liệu đã xuất hiện trước đó.
• Mạng Transformer: Kiến trúc hiện đại nhất hiện nay, thay thế RNN trong xử lý ngôn ngữ tự nhiên. Nhờ cơ chế "Tự chú ý" (Self-Attention), Transformer có thể hiểu ngữ cảnh của những câu cực dài. Đây chính là công nghệ đứng sau các mô hình như ChatGPT, Gemini.
Bạn


