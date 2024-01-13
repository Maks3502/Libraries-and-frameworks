const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
let currentKeyIndex;
let gameStarted = false;

function startGame() {
  currentKeyIndex = 0;
  gameStarted = true;
  updateKey();
}

function updateKey() {
  document.getElementById('key').innerText = keys[currentKeyIndex];
}

function handleKeyDown(event) {
  if (gameStarted) {
    const pressedKey = event.key.toUpperCase();
    const correctKey = keys[currentKeyIndex];

    if (pressedKey === correctKey) {
      currentKeyIndex++;

      if (currentKeyIndex === keys.length) {
        PNotify.success({
          title: 'Ви виграли!',
          text: 'Вітаємо! Ви правильно натиснули всі клавіші.',
        });
        newGame();
      } else {
        updateKey();
      }
    } else {
      PNotify.error({
        title: 'Помилка',
        text: 'Натискання неправильної клавіші. Гра закінчена.',
      });
      newGame();
    }
  }
}

function handleKeyPress(event) {
  event.preventDefault();
}

function newGame() {
  gameStarted = false;
  document.getElementById('status').innerText = 'Натисни правильну клавішу для початку гри.';
  startGame();
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keypress', handleKeyPress);
document.getElementById('newGameBtn').addEventListener('click', newGame);


startGame();






const chartData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  datasets: [{
    label: 'Продажі за останній місяць',
    data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
    backgroundColor: 'rgba(33, 150, 243, 0.5)',
    borderColor: '#2196f3',
    borderWidth: 1
  }]
};

const salesChartCanvas = document.querySelector('#sales-chart');

const salesChart = new Chart(salesChartCanvas, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        }
      }]
    }
  }
});
