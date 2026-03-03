// let nameInput= document.querySelector("#nameInput")
// let priceInput = document.querySelector("#priceInput")
// let add = document.querySelector("#add")
// let expenseList = document.querySelector("#expenseList")
// let total = document.querySelector("#total")
// let clear = document.querySelector("#clear")

// let totalAmount = 0
// /*
// <li   class="flex justify-between items-center border rounded-xl py-2.5 mt-2.5 ">
//                     <span class="">Nok</span> - <span class="">25000</span>
//                      <button id="delete" class="flex justify-center items-center border w-8 h-8 rounded-md hover:bg-red-600 hover:text-slate-50 shadow-md ">x</button>
//             </li>
//  */

//     add.addEventListener("click", () => {
//         let prPrice = Number(priceInput.value)
//        totalAmount += prPrice
//         let list = document.createElement("li")
//         list.innerHTML = `
//         <li   class="flex justify-between items-center border border-slate-200 shadow-md rounded-xl py-2.5 mt-2.5 px-6 ">
//                     <span>${nameInput.value}</span> - <span>${priceInput.value}</span>
//                      <button id="uchirish" class="flex justify-center items-center border w-8 h-8 rounded-md hover:bg-red-600 hover:text-slate-50 shadow-md ">x</button>
//             </li>
//         `
//         prPrice > 20000 ? list.classList.add("text-red-500") : list.classList.add("text-green-500")
//         total.innerHTML = totalAmount
//         expenseList.append(list)
//         nameInput.value = ""
//         priceInput.value = ""
//     })
//     document.addEventListener("click", (e) => {
//         if(e.target.id === "uchirish"){
//             e.target.parentElement.remove()
//         }
//     })
//     clear.addEventListener("click", () => {
//         expenseList.innerHTML =` <ul id="expenseList" class="space-y-3 mb-6"> </ul>`
// totalAmount = 0
//     })
// clear.addEventListener("click", () => {
//     expenseList.innerHTML =" "
//     total.innerHTML = 0
//     updateTotal(-total)
// })
// uchirish.addEventListener("click", () =>{
//     updateTotal( - total)
// })

const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const addBtn = document.querySelector("#add");
const expenseList = document.querySelector("#expenseList");
const totalDisplay = document.querySelector("#total");
const clearBtn = document.querySelector("#clear");

let totalAmount = 0;

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || !price || price <= 0) {
    alert("Ma'lumotlarni to'g'ri kiriting!");
    return;
  }

  totalAmount += price;

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center border border-slate-200 shadow-sm rounded-xl py-2.5 px-4 bg-white";

  // 20,000 dan oshsa qizil bo'lish logikasi
  const colorClass = price > 20000 ? "text-red-500" : "text-green-600";

  li.innerHTML = `
        <span class="${colorClass} font-medium">${name} - ${price.toLocaleString()} so'm</span>
        <button class="delete-btn text-gray-400 hover:text-red-600 font-bold text-xl px-2">×</button>
    `;

  // O'chirish tugmasi logikasi
  li.querySelector(".delete-btn").addEventListener("click", () => {
    totalAmount -= price;
    totalDisplay.innerHTML = `${totalAmount.toLocaleString()} so'm`;
    li.remove();
  });

  expenseList.appendChild(li);
  totalDisplay.innerHTML = `${totalAmount.toLocaleString()} so'm`;

  // Tozalash
  nameInput.value = "";
  priceInput.value = "";
  nameInput.focus();
});

clearBtn.addEventListener("click", () => {
  expenseList.innerHTML = "";
  totalAmount = 0;
  totalDisplay.innerHTML = "0 so'm";
});
