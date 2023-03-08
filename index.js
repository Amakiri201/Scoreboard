let countEl = document.getElementById("count-el")

let count = 0 

function increment1() {
    count += 1
    countEl.innerText = count
}

function increment2() {
    count += 2
    countEl.innerText = count
}

function increment3() {
    count += 3
    countEl.innerText = count
}

function decrement1() {
    count -= 1
    countEl.innerText = count
}

function decrement2() {
    count -= 2
    countEl.innerText = count
}

function decrement3() {
    count -= 3
    countEl.innerText = count
}

let countAl = document.getElementById("count-al")

let point = 0 

function increase1() {
    point += 1
    countAl.innerText = point
}

function increase2() {
    point += 1
    countAl.innerText = point
}

function increase3() {
    point += 1
    countAl.innerText = point
}

function decrease1() {
    point -= 1
    countAl.innerText = point
}

function decrease2() {
    point -= 1
    countAl.innerText = point
}

function decrease3() {
    point -= 1
    countAl.innerText = point
}

function reset() {
    count = 0
    countAl.innerText = 0
    countEl.innerText = 0
}