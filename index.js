
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

    const selectedRadio = document.querySelector('input[name="type"]:checked')
    if(!selectedRadio) {
        alert("Wybierz Przychody lub Wydatki.")
        return
    }

    const p = document.createElement('p');
    const formatted = amount.toFixed(2);
    p.textContent = (selectedRadio.value === 'revenues' ? '+ ' : '- ') + formatted;

    if(selectedRadio.value === 'revenues') {
        revenuesDiv.appendChild(p);        
    }
    else {
        expensesDiv.appendChild(p);        
    }

    inputAdd.value = ""

})