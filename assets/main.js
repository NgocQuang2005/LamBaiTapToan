let questions = [
  {
    question:
      "Trong một lớp học có 20 học sinh, nếu có 10 học sinh đi ra ngoài thì còn lại bao nhiêu học sinh trong lớp?",
    answers: [
      { text: "10", correct: true },
      { text: "15", correct: false },
      { text: "20", correct: false },
      { text: "5", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Nếu bạn có 30 viên bi, và bạn cho bạn của bạn 10 viên, thì bạn còn lại bao nhiêu viên bi?",
    answers: [
      { text: "20", correct: true },
      { text: "10", correct: false },
      { text: "25", correct: false },
      { text: "15", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Có 40 quả táo trong giỏ, bạn đã ăn 10 quả, vậy trong giỏ còn lại bao nhiêu quả táo?",
    answers: [
      { text: "30", correct: true },
      { text: "25", correct: false },
      { text: "35", correct: false },
      { text: "20", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Bạn có 50 kẹo, bạn cho 20 kẹo cho bạn bè, vậy bạn còn lại bao nhiêu kẹo?",
    answers: [
      { text: "30", correct: true },
      { text: "40", correct: false },
      { text: "20", correct: false },
      { text: "10", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Trong một buổi tiệc có 70 chiếc bánh, nếu có 30 chiếc đã được ăn, vậy còn lại bao nhiêu chiếc bánh?",
    answers: [
      { text: "40", correct: true },
      { text: "50", correct: false },
      { text: "60", correct: false },
      { text: "30", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Bạn có 80 viên bi, và bạn đã cho 30 viên cho bạn bè. Bạn còn lại bao nhiêu viên bi?",
    answers: [
      { text: "50", correct: true },
      { text: "60", correct: false },
      { text: "70", correct: false },
      { text: "40", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Có 90 quyển sách trong thư viện. Nếu 40 quyển sách bị hư hỏng, vậy trong thư viện còn lại bao nhiêu quyển sách?",
    answers: [
      { text: "50", correct: true },
      { text: "60", correct: false },
      { text: "70", correct: false },
      { text: "40", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Một hộp có 25 viên kẹo, và bạn có 3 hộp như vậy. Tổng cộng bạn có bao nhiêu viên kẹo?",
    answers: [
      { text: "75", correct: true },
      { text: "65", correct: false },
      { text: "85", correct: false },
      { text: "70", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Nếu trong một hộp có 40 viên bi, và bạn đã lấy ra 10 viên, còn lại bao nhiêu viên bi?",
    answers: [
      { text: "30", correct: true },
      { text: "25", correct: false },
      { text: "20", correct: false },
      { text: "15", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Có 100 quả bóng trong một buổi lễ, nếu 25 quả bóng bị vỡ, vậy còn lại bao nhiêu quả bóng?",
    answers: [
      { text: "75", correct: true },
      { text: "85", correct: false },
      { text: "70", correct: false },
      { text: "80", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Nếu bạn có 60 đồng xu và bạn đã tiêu tốn 15 đồng, bạn còn lại bao nhiêu đồng?",
    answers: [
      { text: "45", correct: true },
      { text: "50", correct: false },
      { text: "40", correct: false },
      { text: "35", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Có 30 viên kẹo trong một túi, bạn đã ăn 5 viên, vậy còn lại bao nhiêu viên kẹo?",
    answers: [
      { text: "25", correct: true },
      { text: "20", correct: false },
      { text: "15", correct: false },
      { text: "10", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Một giỏ có 50 quả cam, bạn đã bán 20 quả. Vậy bạn còn lại bao nhiêu quả cam?",
    answers: [
      { text: "30", correct: true },
      { text: "25", correct: false },
      { text: "40", correct: false },
      { text: "35", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Có 100 chiếc ghế trong hội trường, nếu 45 chiếc bị hỏng, còn lại bao nhiêu chiếc ghế?",
    answers: [
      { text: "55", correct: true },
      { text: "50", correct: false },
      { text: "60", correct: false },
      { text: "40", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Bạn có 12 viên bi đỏ và 18 viên bi xanh. Tổng cộng bạn có bao nhiêu viên bi?",
    answers: [
      { text: "30", correct: true },
      { text: "28", correct: false },
      { text: "32", correct: false },
      { text: "25", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Trong một khu vườn có 20 cây, nếu 5 cây đã chết, vậy còn lại bao nhiêu cây?",
    answers: [
      { text: "15", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "12", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Có 50 bông hoa trong vườn, nếu bạn đã hái 20 bông, còn lại bao nhiêu bông hoa?",
    answers: [
      { text: "30", correct: true },
      { text: "25", correct: false },
      { text: "20", correct: false },
      { text: "40", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Nếu một chiếc bánh có 12 miếng, và bạn ăn 3 miếng, bạn còn lại bao nhiêu miếng bánh?",
    answers: [
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "10", correct: false },
      { text: "11", correct: false },
    ],
    type: "choice",
  },
  {
    question:
      "Có 60 quả bóng bay, và bạn đã thả 20 quả. Vậy còn lại bao nhiêu quả bóng bay?",
    answers: [
      { text: "40", correct: true },
      { text: "35", correct: false },
      { text: "50", correct: false },
      { text: "30", correct: false },
    ],
    type: "choice",
  },
  {
    question: "15 + 2 là bằng bao nhiêu?",
    answers: [
      { text: "16", correct: true },
      { text: "17", correct: false },
      { text: "18", correct: false },
      { text: "15", correct: false },
    ],
    type: "choice",
  },
  {
    question: "25 - 10 là bằng bao nhiêu?",
    answers: [
      { text: "15", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "5", correct: false },
    ],
    type: "choice",
  },
  {
    question: "30 + 5 là bằng bao nhiêu?",
    answers: [
      { text: "35", correct: true },
      { text: "30", correct: false },
      { text: "40", correct: false },
      { text: "25", correct: false },
    ],
    type: "choice",
  },
  {
    question: "40 - 20 là bằng bao nhiêu?",
    answers: [
      { text: "20", correct: true },
      { text: "25", correct: false },
      { text: "30", correct: false },
      { text: "15", correct: false },
    ],
    type: "choice",
  },
  {
    question: "50 + 10 là bằng bao nhiêu?",
    answers: [
      { text: "60", correct: true },
      { text: "50", correct: false },
      { text: "70", correct: false },
      { text: "40", correct: false },
    ],
    type: "choice",
  },
  {
    question: "70 - 30 là bằng bao nhiêu?",
    answers: [
      { text: "40", correct: true },
      { text: "50", correct: false },
      { text: "60", correct: false },
      { text: "30", correct: false },
    ],
    type: "choice",
  },
  {
    question: "35 + 15 là bằng bao nhiêu?",
    answers: [
      { text: "50", correct: true },
      { text: "45", correct: false },
      { text: "55", correct: false },
      { text: "60", correct: false },
    ],
    type: "choice",
  },
  {
    question: "80 - 40 là bằng bao nhiêu?",
    answers: [
      { text: "40", correct: true },
      { text: "50", correct: false },
      { text: "30", correct: false },
      { text: "60", correct: false },
    ],
    type: "choice",
  },
  {
    question: "20 + 20 là bằng bao nhiêu?",
    answers: [
      { text: "40", correct: true },
      { text: "30", correct: false },
      { text: "20", correct: false },
      { text: "50", correct: false },
    ],
    type: "choice",
  },
  {
    question: "45 - 5 là bằng bao nhiêu?",
    answers: [
      { text: "40", correct: true },
      { text: "35", correct: false },
      { text: "45", correct: false },
      { text: "50", correct: false },
    ],
    type: "choice",
  },
  {
    question: "60 + 20 là bằng bao nhiêu?",
    answers: [
      { text: "80", correct: true },
      { text: "70", correct: false },
      { text: "90", correct: false },
      { text: "75", correct: false },
    ],
    type: "choice",
  },
  {
    question: "90 - 50 là bằng bao nhiêu?",
    answers: [
      { text: "40", correct: true },
      { text: "30", correct: false },
      { text: "50", correct: false },
      { text: "20", correct: false },
    ],
    type: "choice",
  },
  {
    question: "25 + 25 là bằng bao nhiêu?",
    answers: [
      { text: "50", correct: true },
      { text: "45", correct: false },
      { text: "35", correct: false },
      { text: "30", correct: false },
    ],
    type: "choice",
  },
  {
    question: "100 - 10 là bằng bao nhiêu?",
    answers: [
      { text: "90", correct: true },
      { text: "80", correct: false },
      { text: "70", correct: false },
      { text: "100", correct: false },
    ],
    type: "choice",
  },
  {
    question: "30 + 30 là bằng bao nhiêu?",
    answers: [
      { text: "60", correct: true },
      { text: "50", correct: false },
      { text: "70", correct: false },
      { text: "40", correct: false },
    ],
    type: "choice",
  },
];

let currentQuestionIndex = null;
let answeredQuestions = new Set();
let timer;
let timeLimit = 300; // Thời gian tối đa là bằng 60 giây
let timeLeft;

function startGame() {
  questions = shuffleArray(questions);
  createQuestionBoxes();
  document.getElementById("reset-btn").style.display = "none"; // Ẩn nút reset khi bắt đầu trò chơi
}

function createQuestionBoxes() {
  const grid = document.getElementById("question-grid");
  grid.innerHTML = "";
  questions.forEach((_, index) => {
    const box = document.createElement("button");
    box.classList.add("btn", "btn-outline-primary", "m-2", "p-3");
    box.innerText = "?"; // Hiển thị dấu "?" thay vì số câu hỏi
    box.addEventListener("click", () => selectQuestion(index));
    grid.appendChild(box);
  });
}

function selectQuestion(index) {
  if (answeredQuestions.has(index)) return; // Không chọn lại câu hỏi đã trả lời
  currentQuestionIndex = index;
  document.getElementById("question-container").classList.remove("d-none");
  document.getElementById("question-grid").classList.add("d-none");
  document.getElementById("reset-btn").style.display = "none"; // Ẩn nút reset khi chọn câu hỏi
  nextQuestion();
}

function nextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  document.getElementById("question").innerText = question.question;
  document.getElementById("answer-input").style.display = "none";
  document.getElementById("answer-buttons").style.display = "flex";

  // Tạo các nút trả lời
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn", "btn-primary", "m-2");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    document.getElementById("answer-buttons").appendChild(button);
  });

  startTimer(); // Bắt đầu bộ đếm thời gian khi câu hỏi được hiển thị
  updateTimerDisplay(timeLimit); // Cập nhật thời gian hiển thị
}

function resetState() {
  document.getElementById("answer-buttons").innerHTML = "";
  clearInterval(timer);
  document.getElementById("timer-display").innerText = ""; // Xóa thời gian khi reset
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  showModal(
    "alertModal",
    correct ? "Chúc mừng Bé đã trả lời đúng!" : "Rất tiếc, Bé đã trả lời sai."
  );

  showCorrectAnswer();
  document.getElementById("next-btn").style.display = "block";
  clearInterval(timer);
  answeredQuestions.add(currentQuestionIndex); // Đánh dấu câu hỏi đã trả lời

  // Đổi màu cho câu hỏi đã trả lời
  const questionButton = document.querySelector(
    `#question-grid button:nth-child(${currentQuestionIndex + 1})`
  );
  questionButton.classList.remove("btn-outline-primary");
  questionButton.classList.add(correct ? "btn-success" : "btn-danger");

  // Ẩn phần câu hỏi sau khi trả lời
  document.getElementById("question-container").classList.add("d-none");
  document.getElementById("question-grid").classList.remove("d-none");

  // Hiện nút reset để Bé có thể chơi lại
  document.getElementById("reset-btn").style.display = "block"; // Hiện nút reset
}

function showModal(modalId, message) {
  const modalBody = document.getElementById(modalId + "Body");
  modalBody.innerText = message;
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

function showCorrectAnswer() {
  Array.from(document.getElementById("answer-buttons").children).forEach(
    (button) => {
      const correct = button.dataset.correct === "true";
      setStatusClass(button, correct);
    }
  );
}

function setStatusClass(element, correct) {
  element.classList.add(correct ? "btn-success" : "btn-danger");
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timeLeft = timeLimit;
  updateTimerDisplay(timeLeft);
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      showModal("timeUpModal", "Thời gian đã hết! Bạn chưa trả lời câu hỏi.");
      document.getElementById("question-container").classList.add("d-none");
      document.getElementById("question-grid").classList.remove("d-none");
      answeredQuestions.add(currentQuestionIndex); // Đánh dấu câu hỏi đã trả lời
      // Đổi màu cho câu hỏi đã trả lời
      const questionButton = document.querySelector(
        `#question-grid button:nth-child(${currentQuestionIndex + 1})`
      );
      questionButton.classList.remove("btn-outline-primary");
      questionButton.classList.add("btn-danger");
      document.getElementById("reset-btn").style.display = "block"; // Hiện nút reset khi hết thời gian
    } else {
      timeLeft--;
      updateTimerDisplay(timeLeft);
    }
  }, 1000);
}

function updateTimerDisplay(time) {
  const minutes = Math.floor(time / 60); // Lấy số phút
  const seconds = time % 60; // Lấy số giây còn lại
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds; // Định dạng giây với 2 chữ số

  const timerDisplay = document.getElementById("timer-display");
  timerDisplay.innerText = `${minutes}:${formattedSeconds}`; // Hiển thị định dạng phút:giây
}

document.getElementById("next-btn").addEventListener("click", () => {
  document.getElementById("question-container").classList.add("d-none");
  document.getElementById("question-grid").classList.remove("d-none");

  // Hiện nút reset ngay cả khi đã trả lời hết câu hỏi
  document.getElementById("reset-btn").style.display = "block"; // Hiện nút reset

  // Kiểm tra nếu đã trả lời hết câu hỏi
  if (answeredQuestions.size === questions.length) {
    showModal(
      "completionModal",
      "Bé đã hoàn thành tất cả các câu hỏi! Chúc mừng Bé!"
    );
  }
});

// Hàm reset game
function resetGame() {
  answeredQuestions.clear(); // Xóa tất cả các câu hỏi đã trả lời
  currentQuestionIndex = null; // Đặt lại chỉ số câu hỏi hiện tại
  startGame(); // Bắt đầu trò chơi mới
}

document.getElementById("reset-btn").addEventListener("click", resetGame);

// Bắt đầu trò chơi
startGame();
