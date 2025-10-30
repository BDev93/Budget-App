
const addBtn = document.getElementById("add-btn")
const inputAdd = document.getElementById("input-add")
const inputName = document.getElementById("input-name")

const revenuesList = document.getElementById("revenues-list")
const expensesList = document.getElementById("expenses-list")
const savingsList = document.getElementById("savings-list")

const revenuesTotalDisplay = document.getElementById("revenues-total")
const expensesTotalDisplay = document.getElementById("expenses-total")
const balanceDisplay = document.getElementById("balance")
const savingsDisplay = document.getElementById("savings")

let revenuesSum = 0;
let expensesSum = 0;
let savingsSum = 0;

function updateTotals() {
    revenuesTotalDisplay.textContent = "Suma: " + revenuesSum + "zł"
    expensesTotalDisplay.textContent = "Suma: " + expensesSum + "zł"
    savingsDisplay.textContent = savingsSum + " zł"
    const balance = revenuesSum - expensesSum
    balanceDisplay.textContent = balance + " zł"
}

function createEntry(type, amount, name) {
    const p = document.createElement('p')

    p.dataset.amount = amount
    p.dataset.type = type

    let prefix = ''
    if (type === 'revenues') prefix = '+ '
    else if (type === 'expenses') prefix = '- '
    else if (type === 'savings') prefix = '♥ '

    p.textContent = prefix + amount + "zł (" + name + ") "

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', function(){
        const amt = Number(p.dataset.amount)
        const t = p.dataset.type
        if (t === 'revenues') {
            revenuesSum -= amt
            if (revenuesSum < 0) revenuesSum = 0 
        } else if ( t === 'expenses'){
            expensesSum -= amt
            if (expensesSum < 0) expensesSum = 0
        } else if (t === 'savings'){
            savingsSum -= amt
            if(savingsSum < 0) savingsSum = 0
        }
        p.remove()
        updateTotals()

    })

    p.appendChild(deleteBtn)
    return p


}


addBtn.addEventListener('click', function(){
    const nameStr = inputName.value.trim()
    if(nameStr === ""){
        alert("Wpisz nazwę przychodu lub wydatku.")
        return
    }
    
    const valueStr = inputAdd.value.trim();
    if(valueStr === ""){
        alert("Wpisz kwotę.")
        return
    }

    let amount = parseFloat(valueStr.replace(',', '.'))
    if(isNaN(amount)){
        alert('Podaj poprawną liczbę (np. 123.45')
        return
    }

    amount = Math.round(amount)

    const selectedRadio = document.querySelector('input[name="type"]:checked')
    if(!selectedRadio) {
        alert("Wybierz Przychody lub Wydatki.")
        return
    }

    const type = selectedRadio.value 

    if(type === 'revenues') {
        revenuesSum += amount
    } else if(type === 'expenses'){
        expensesSum += amount
    } else if(type === 'savings'){
        savingsSum += amount
    }

    const entry = createEntry(type, amount, nameStr)

    if (type === 'revenues') {
        revenuesList.appendChild(entry)
    } else if (type === 'expenses') {
        expensesList.appendChild(entry)
    } else if (type === 'savings') {
        savingsList.appendChild(entry)
    }

    updateTotals()

   

  

    inputAdd.value = ""
    inputName.value = ""

})