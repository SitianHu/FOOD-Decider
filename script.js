// 获取按钮和显示结果的元素
const button = document.getElementById('decide-button');
const result = document.getElementById('result');

// 定义食物列表
const foods = ["西北风", "粑粑", "唐僧肉", "麦当劳"];

// 按钮点击事件
button.addEventListener('click', () => {
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  result.textContent = `今天吃：${randomFood} 🍴`;
});
