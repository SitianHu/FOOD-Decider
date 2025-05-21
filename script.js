const button = document.getElementById('decide-button');
const againButton = document.getElementById('again-button');
const result = document.getElementById('result');
const historyList = document.getElementById('history');

const foods = [
  "喜茶", "茶颜", "一点点", "coco", "茶百道", "蜜雪冰城", "茶话弄",
  "霸王茶姬", "茉沏", "茉莉奶白", "马伍旺", "奈雪", "KOI", "茶救星球",
  "去茶山", "茶理宜世", "百分茶", "古茗", "阿嬷手作", "柠檬向右",
  "柠季", "茉酸奶", "7分甜", "书亦烧仙草", "沪上阿姨", "爷爷不泡茶",
  "丘大叔", "益禾堂", "乐乐茶"
];

function pickRandomFood() {
  return foods[Math.floor(Math.random() * foods.length)];
}

function showResult(food, prefix = "今天喝：") {
  result.textContent = `${prefix}${food} 🥤`;
  const li = document.createElement('li');
  li.textContent = `✓ ${food}`;
  historyList.prepend(li); // 最新的放在最上面
}

button.addEventListener('click', () => {
  button.style.animation = 'shake 0.5s';
  setTimeout(() => { button.style.animation = ''; }, 500);
  const food = pickRandomFood();
  showResult(food);
  againButton.style.display = 'inline-block';
});

againButton.addEventListener('click', () => {
  const food = pickRandomFood();
  showResult(food, "不如试试：");
});
