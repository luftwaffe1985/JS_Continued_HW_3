"use strict";

// Задание 1

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const btnElement = document.querySelector(".button");
// btnElement.addEventListener("click", function (e) {
//   console.log(e.type, "addEventListener event");
// });
// window.addEventListener("load", function (e) {
//   console.log("page has been loaded");
// });

// Задание 2

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// document.querySelectorAll("button").forEach((element) =>
//   element.addEventListener("click", function (e) {
//     console.log(`${element.innerText}`);
//   })
// );

// const buttons = document.querySelectorAll("[id^=button]:not(#button5)"); // коллекция всех кнопок за исключением 5
// console.log(buttons);

// let count = 0;
// document.querySelector("#button4").addEventListener("click", function (e) {
//   count++;
//   console.log(`Количество нажатий на кнопку равно ${count}`);
// });

// document.querySelector("#button5").addEventListener("mouseover", function (e) {
//   this.innerText = "Догони меня!";
//   this.style.backgroundColor = "red";
//   this.style.transition = "all 1s ease-in-out";
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   this.style.transform = `translate(${x}px, ${y}px)`;
// });
// Кнопка бегает при наведении

// Задание 3

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// РЕШЕНИЕ ЧЕРЕЗ ООП

// class Block {
//   constructor(id, text, clickHandler, mouseoverHandler, mouseoutHandler) {
//     this.id = id;
//     this.text = text;
//     this.clickHandler = clickHandler;
//     this.mouseoverHandler = mouseoverHandler;
//     this.mouseoutHandler = mouseoutHandler;
//   }
// }

// const arr = [
//   new Block("add", "Добавление заголовка", addHeading),
//   new Block("remove", "Удаление заголовка", removeHeading),
//   new Block("hover", "Наведение", null, hoverIn, hoverOut),
// ];

// function addHeading() {
//   const headingEl = document.createElement("h1");
//   headingEl.textContent = "Новый заголовок";
//   document.body.appendChild(headingEl);
// }

// function removeHeading() {
//   const heading = document.querySelector("h1");
//   if (heading) {
//     heading.remove();
//   }
// }

// function hoverIn() {
//   console.log("Вы навели на данную кнопку");
// }

// function hoverOut() {
//   console.log("Наведения на кнопку больше нет");
// }

// function createButtonsAndAddEvents() {
//   const div = document.querySelector("div");
//   arr.forEach((elem) => {
//     const btn = document.createElement("button");
//     btn.id = elem.id;
//     btn.textContent = elem.text;
//     div.appendChild(btn);
//     if (elem.clickHandler) {
//       btn.onclick = elem.clickHandler;
//     }
//     if (elem.mouseoverHandler) {
//       btn.onmouseover = elem.mouseoverHandler;
//     }
//     if (elem.mouseoutHandler) {
//       btn.onmouseout = elem.mouseoutHandler;
//     }
//   });
// }

// createButtonsAndAddEvents();

// Задание 4

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// document.querySelector("#add").addEventListener("click", addListItem);
// document.querySelector("#remove").addEventListener("click", removeListItem);
// document.querySelector("#addClass").addEventListener("click", addClass);

// function addListItem() {
//   const list = document.querySelector("ul");
//   const newItem = document.createElement("li");
//   newItem.textContent = "новый элемент списка";
//   list.appendChild(newItem);
// }

// function removeListItem() {
//   const list = document.querySelector("ul");
//   if (list.firstElementChild) {
//     list.firstElementChild.remove();
//   }
// }

// function addClass() {
//   this.classList.add("click");
// }
