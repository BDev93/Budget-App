
const addBtn = document.getElementById("add-btn")
const inputAdd = document.getElementById("input-add")
const revenuesDiv = document.getElementById("revenues")
const expensesDiv = document.getElementById("expenses")

addBtn.addEventListener('click', function(){
    const valueStr = inputAdd.value.trim();
    if(valueStr === ""){
        alert("Wpisz kwotę.")
        return
    }

    const amount = parseFloat(valueStr.replace(',', '.'))
    if(isNaN(amount)){
        alert('Podaj poprawną liczbę (np. 123.45')
        return
    }

    const selectRadio = document.querySelector('input[name="type"]:checked')
    if(!selectRadio) {
        alert("Wybierz Przychody lub Wydatki.")
        return
    }

})