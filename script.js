// 获取按钮和显示结果的元素
const button = document.getElementById('decide-button');
const result = document.getElementById('result');

// 定义食物列表
const foods = ["喜茶", "茶颜", "一点点", "coco", "茶百道", "蜜雪冰城", "茶话弄",
               "霸王茶姬", "茉沏", "茉莉奶白", "马伍旺", "奈雪", "KOI", "茶救星球",
               "去茶山", "茶理宜世", "百分茶", "古茗", "阿嬷手作", "柠檬向右",
               "柠季", "茉酸奶", "7分甜", "书亦烧仙草", "沪上阿姨", "爷爷不泡茶",
               "丘大叔", "益禾堂", "乐乐茶"];

// 按钮点击事件
button.addEventListener('click', () => {
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  result.textContent = `今天喝：${randomFood} 🥤`;
});
