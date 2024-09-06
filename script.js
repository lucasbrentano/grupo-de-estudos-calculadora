const calculator = document.querySelector('.calculadora')
const display = document.querySelector('.display p')
const preview = document.querySelector('.preview p')
const keys = calculator.querySelector('.botoes')
const previousKeyType = calculator.dataset.previousKeyType
const botoesOperacoes = document.querySelector('.botoes-operacoes')

keys.addEventListener('click', e =>{
    let stringValores = ""
    let resultado

    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        var textoDisplay = document.getElementById("user-input")

        function containsOperator(text) {
            return /[+\-*/]/.test(text)
        }

        if (action === "positiveOrNegative") {
            let valor
            valor = -display.innerText
            display.innerText = valor.toString()
        }

        if (action === 'decimal') {
            if (!displayedNum.includes(".")) {
                display.textContent = displayedNum + '.'
            }
        }

        if (action === 'delete') {
            display.innerText = display.innerText.substring(0,display.innerText.length-1)
            if (display.innerText.length === 0) {
                display.textContent = "0"
            }
        }

        if (action === 'add'){
            if (!containsOperator(preview.textContent)) {
                preview.textContent = "";
            }
            if (preview.textContent.includes("=")) {
                preview.textContent = "" + display.textContent + "+"
                display.textContent = "0"
            } else {
                preview.textContent += display.textContent + "+"
                display.textContent = "0"
            }
        }

        if (action === 'subtract') {
            if (!containsOperator(preview.textContent)) {
                preview.textContent = ""
            }
            if (preview.textContent.includes("=")) {
                preview.textContent = "" + display.textContent + "-"
                display.textContent = "0"
            } else {
                preview.textContent += display.textContent + "-"
                display.textContent = "0"
            }
        }

        if (action === 'multiply') {
            if (!containsOperator(preview.textContent)) {
                preview.textContent = ""
            }
            if (preview.textContent.includes("=")) {
                preview.textContent = "" + display.textContent + "*"
                display.textContent = "0"
            } else {
                preview.textContent += display.textContent + "*"
                display.textContent = "0"
            }
        }

        if (action === 'divide') {
            if (!containsOperator(preview.textContent)) {
                preview.textContent = ""
            }
            if (preview.textContent.includes("=")) {
                preview.textContent = "" + display.textContent + "/"
                display.textContent = "0"
            } else {
                preview.textContent += display.textContent + "/"
                display.textContent = "0"
            }
        }

        if (action === 'equals') {
            stringValores = preview.textContent + display.textContent
            resultado = eval(stringValores)
            if (isNaN(resultado)||resultado === Infinity||resultado === -Infinity) {
                textoDisplay.style.fontSize = "34px";
                preview.textContent = "0"
                display.textContent = "Divisão por 0!"
            } else if (stringValores.includes("%")) {
                preview.textContent += display.textContent + "="
                stringValores = preview.textContent
                let arrayValores = stringValores.split("%")
                let valorPorcentagem = parseFloat(arrayValores[0])
                valorPorcentagem = valorPorcentagem / 100
                let valorNumero = parseFloat(arrayValores[1])
                let resultadoNumero = valorPorcentagem * valorNumero
                resultado = resultadoNumero.toString()
                display.textContent = resultado
            } else {
                preview.textContent += display.textContent + "="
                display.textContent = resultado
            }

        }
        if (action === 'percentage') {
            preview.textContent = display.textContent + "%"
            display.textContent = "0"
        }

        if (!action) {
            if (displayedNum === "0" || previousKeyType === botoesOperacoes.textContent) {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (action === 'clear') {
            preview.textContent = "0"
            display.textContent = "0"
            textoDisplay.style.fontSize = "96px";
        }
    }
})
