let form = document.querySelector('form')
let term = document.getElementById('term')

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(){
        sessionStorage.clear()
        let termValue = term.value
        sessionStorage.setItem('term',termValue)
    })
})