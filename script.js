const calculator = document.querySelector('.calculadora')
const display = document.querySelector('.display p')
const preview = document.querySelector('.preview p')
const keys = calculator.querySelector('.botoes')
const previousKeyType = calculator.dataset.previousKeyType
const botoesOperacoes = document.querySelector('.botoes-operacoes')

keys.addEventListener('click', e =>{
    let arrayValores = []
    let stringValores = ""

    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if (!action) {
            if (displayedNum === "0") {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
        }

        if (action === 'add'){
            operacao = "+"
            display.textContent = displayedNum + '+'
        }

        if (action === 'subtract') {
            operacao = "-"
            display.textContent = displayedNum + '-'
        }

        if (action === 'multiply') {
            operacao = "*"
            display.textContent = displayedNum + '*'
        }

        if (action === 'divide') {
            operacao = "/"
            display.textContent = displayedNum + '/'
        }

        if (action === 'equals') {
            console.log("Funcionou")
            let valor1 = 0
            let valor2 = 0
            let resultado = 0
            stringValores = display.textContent
            switch (operacao) {
                case "+":
                    arrayValores = stringValores.split("+")
                    valor1 = parseFloat(arrayValores[0])
                    valor2 = parseFloat(arrayValores[1])
                    resultado = valor1 + valor2
                    preview.textContent = valor1 + " + " + valor2 + " ="
                    display.textContent = resultado
                    break
                case "-":
                    arrayValores = stringValores.split("-")
                    valor1 = parseFloat(arrayValores[0])
                    valor2 = parseFloat(arrayValores[1])
                    resultado = valor1 + valor2
                    preview.textContent = valor1 + " - " + valor2 + " ="
                    display.textContent = resultado
                    break
                case "*":
                    arrayValores = stringValores.split("*")
                    valor1 = parseFloat(arrayValores[0])
                    valor2 = parseFloat(arrayValores[1])
                    resultado = valor1 * valor2
                    preview.textContent = valor1 + " * " + valor2 + " ="
                    display.textContent = resultado
                    break
                case "/":
                    arrayValores = stringValores.split("/")
                    valor1 = parseFloat(arrayValores[0])
                    valor2 = parseFloat(arrayValores[1])
                    resultado = valor1 / valor2
                    preview.textContent = valor1 + " / " + valor2 + " ="
                    if (valor2 === 0) {
                        var textoDisplay = document.getElementById("user-input")
                        textoDisplay.style.fontSize = "34px";
                        display.textContent = "Divisão por ZERO"
                    }
            }
        }

        if (!action) {
            if (displayedNum === "0" || previousKeyType === botoesOperacoes.textContent) {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (action === 'clear') {
            display.textContent = "0"
        }
    }
})
