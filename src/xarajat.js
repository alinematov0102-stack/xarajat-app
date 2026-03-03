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

  if (!name || isNaN(price) || price <= 0) {
    alert("Iltimos, mahsulot nomi va narxini to'g'ri kiriting!");
    return;
  }

  totalAmount += price;

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center border border-slate-200 shadow-sm rounded-xl py-2.5 px-4 bg-white mt-2";

  const colorClass = price > 20000 ? "text-red-500" : "text-green-600";

  li.innerHTML = `
        <span class="${colorClass} font-medium">${name} - ${price.toLocaleString()} so'm</span>
        <button class="delete-btn text-gray-400 hover:text-red-600 font-bold text-xl px-2 cursor-pointer">×</button>
    `;

  li.querySelector(".delete-btn").addEventListener("click", () => {
    totalAmount -= price;
    totalDisplay.innerHTML = `${totalAmount.toLocaleString()} so'm`;
    li.remove();
  });

  expenseList.appendChild(li);
  totalDisplay.innerHTML = `${totalAmount.toLocaleString()} so'm`;

  nameInput.value = "";
  priceInput.value = "";
  nameInput.focus();
});

clearBtn.addEventListener("click", () => {
  expenseList.innerHTML = "";
  totalAmount = 0;
  totalDisplay.innerHTML = "0 so'm";
});
