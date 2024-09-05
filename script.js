const calculator = document.querySelector('.calculadora')
const display = document.querySelector('.display p')
const keys = calculator.querySelector('.botoes')
const previousKeyType = calculator.dataset.previousKeyType
const botoesOperacoes = document.querySelector('.botoes-operacoes')

keys.addEventListener('click', e =>{
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
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            calculator.dataset.previousKeyType = botoesOperacoes.textContent
        }
        if (!action) {
            if (displayedNum === "0" || previousKeyType === botoesOperacoes.textContent) {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
    }
})
