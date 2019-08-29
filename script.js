let form = document.querySelector('form')
let term = document.getElementById('term')

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(){
        localStorage.clear()
        let termValue = term.value
        localStorage.setItem('term',termValue)
    })
})