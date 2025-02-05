const buttons = document.querySelectorAll(".btn")
const value = document.querySelector(".value")

let counter = Number(localStorage.getItem('counter')) || 0

updateCounter(counter)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let className = e.currentTarget.classList
        if (className.contains('increase')) {
            counter++
        } else if (className.contains('decrease')) {
            counter--
        } else {
            counter = 0;
            localStorage.removeItem('counter')
        }
        
        updateCounter(counter)
    })
})

function updateCounter(count) {
    value.textContent = count
    updateColor(count)
    localStorage.setItem('counter', count)
}

function updateColor(count) {
    if (count > 0) {
        value.style.color = 'rgb(132, 253, 132)'
    } else if (count < 0) {
        value.style.color = 'rgb(253, 107, 107)'
    } else {
        value.style.color = ''
    }
}
