function query (selector) {
    return document.querySelector(selector)
}

function queryAll (selector) {
    return document.querySelectorAll(selector)
}

document.addEventListener('DOMContentLoaded', function () {
    query('#buttonaboutus').addEventListener('submit', function (event) {
        let input = query('#emergency-button')
        event.preventDefault()
        updateList(input.value)
    })