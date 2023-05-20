"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////

Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture
*/

const rows = document.querySelector(".text").value;
const clickButton = document.querySelector(".btn");
const output = document.querySelector(".output");

function handleUpperCase() {
  const arrayName = rows.split("\n");
  let output = [];
  for (let n of arrayName) {
    const [first, second] = n.trim().toLowerCase().split("_");
    output.push(`${first}${second[0].toUpperCase()}${second.slice(1)}`);
  }
  return output.join("\n");
}

clickButton.addEventListener("click", () => {
  output.innerHTML = handleUpperCase(rows);
});
