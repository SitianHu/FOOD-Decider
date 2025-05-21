const button = document.getElementById('decide-button');
const result = document.getElementById('result');
const historyList = document.getElementById('history');

const drinks = [
  "喜茶", "茶颜悦色", "一点点", "coco", "茶百道", "蜜雪冰城", "奈雪",
  "霸王茶姬", "古茗", "沪上阿姨", "乐乐茶", "益禾堂", "柠季",
  "冰美式", "现榨橙汁", "椰椰青提", "红豆豆乳", "气泡水", "香芋芋泥奶茶"
];

let history = [];
let drinkCount = {};

function pickRandomDrink() {
  return drinks[Math.floor(Math.random() * drinks.length)];
}

function updateResult(drink) {
  result.innerHTML = `今天喝：<a href="https://www.baidu.com/s?wd=${encodeURIComponent(drink)}" target="_blank">${drink}</a> 🧋`;

  // 飘落 emoji
  const emoji = document.createElement('div');
  emoji.textContent = "🧋";
  emoji.style.position = "absolute";
  emoji.style.left = Math.random() * 80 + "%";
  emoji.style.top = "-30px";
  emoji.style.fontSize = "24px";
  emoji.style.animation = "fall 2s linear forwards";
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 2000);

  // 统计次数
  drinkCount[drink] = (drinkCount[drink] || 0) + 1;

  // 显示记录（只显示最近3条）
  history.unshift(drink);
  history = history.slice(0, 3);
  historyList.innerHTML = history.map(d => `✓ ${d}`).join('<br>');

  // 彩蛋提示
  if (drinkCount[drink] === 3) {
    alert(`🍹你已经抽到【${drink}】三次啦，是不是命中注定的真爱？`);
  }
}

button.addEventListener('click', () => {
  const drink = pickRandomDrink();
  updateResult(drink);
});

// emoji 动画样式注入
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
