// Chọn các phần tử cần thiết
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const scoreLabel = document.querySelector('.score');
const body = document.querySelector('body');
const checkButton = document.querySelector('.check'); // Chọn nút Check

// Khởi tạo các giá trị mặc định
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Số bí mật ngẫu nhiên từ 1 đến 20
let score = 20;


// Xử lý sự kiện khi nhấn nút "Check"
checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value); // Lấy giá trị người chơi đoán và chuyển sang số

  // Nếu không nhập số
  if (!guess) {
    message.textContent = '⛔ Bạn chưa nhập số!';

  // Nếu đoán đúng
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Chúc mừng! Bạn đoán đúng!';
    number.textContent = secretNumber;
    secretNumber = Math.trunc(Math.random() * 20) + 1; // Số bí mật ngẫu nhiên từ 1 đến 20
    // Thay đổi giao diện khi đoán đúng
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

  // Nếu đoán sai
  } else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '📈 Số quá cao!' : '📉 Số quá thấp!';
      score--; // Giảm điểm
      scoreLabel.textContent = score; // Cập nhật điểm số
    } else {
      message.textContent = '💥 Bạn đã thua cuộc!';
      scoreLabel.textContent = 0;
    }
  }
});

// Xử lý sự kiện khi nhấn nút "Chơi lại"
againButton.addEventListener('click', function () {
  // Khôi phục các giá trị mặc định
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Khôi phục lại giao diện mặc định
  message.textContent = 'Hãy bắt đầu đoán...';
  number.textContent = '?';
  scoreLabel.textContent = score;
  guessInput.value = '';

  // Khôi phục lại giao diện nền và kích thước số
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
console.log(secretNumber);