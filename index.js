
const addBtn = document.getElementById("add-btn")
const inputAdd = document.getElementById("input-add")
const inputName = document.getElementById("input-name")
const revenuesDiv = document.getElementById("revenues")
const expensesDiv = document.getElementById("expenses")

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
    const formatted = Math.round(amount);
    p.textContent = (selectedRadio.value === 'revenues' ? '+ ' : '- ') + 
    formatted + "zł"  +  " (" + nameStr +  ")";

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', () => {
        p.remove();
    })

    p.appendChild(deleteBtn)

    if(selectedRadio.value === 'revenues') {
        revenuesDiv.appendChild(p);        
    }
    else {
        expensesDiv.appendChild(p);        
    }

    inputAdd.value = ""
    inputName.value = ""

})