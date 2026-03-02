let nameInput= document.querySelector("#nameInput")
let priceInput = document.querySelector("#priceInput")
let add = document.querySelector("#add")
let expenseList = document.querySelector("#expenseList")
let total = document.querySelector("#total")
let clear = document.querySelector("#clear")

let totalAmount = 0
/*
<li   class="flex justify-between items-center border rounded-xl py-2.5 mt-2.5 ">
                    <span class="">Nok</span> - <span class="">25000</span>
                     <button id="delete" class="flex justify-center items-center border w-8 h-8 rounded-md hover:bg-red-600 hover:text-slate-50 shadow-md ">x</button>
            </li>
 */

    add.addEventListener("click", () => {
        let prPrice = Number(priceInput.value)
       totalAmount += prPrice
        let list = document.createElement("li")
        list.innerHTML = `
        <li   class="flex justify-between items-center border border-slate-200 shadow-md rounded-xl py-2.5 mt-2.5 px-6 ">
                    <span>${nameInput.value}</span> - <span>${priceInput.value}</span>
                     <button id="uchirish" class="flex justify-center items-center border w-8 h-8 rounded-md hover:bg-red-600 hover:text-slate-50 shadow-md ">x</button>
            </li>
        `
        prPrice > 20000 ? list.classList.add("text-red-500") : list.classList.add("text-green-500")
        total.innerHTML = totalAmount
        expenseList.append(list)
        nameInput.value = ""
        priceInput.value = ""
    })
    document.addEventListener("click", (e) => {
        if(e.target.id === "uchirish"){
            e.target.parentElement.remove()
        }
    })
    clear.addEventListener("click", () => {
        expenseList.innerHTML =` <ul id="expenseList" class="space-y-3 mb-6"> </ul>`  
totalAmount = 0
    })
clear.addEventListener("click", () => {
    expenseList.innerHTML =" "
    total.innerHTML = 0
    updateTotal(-total)
})
uchirish.addEventListener("click", () =>{
    updateTotal( - total)
})


