document.addEventListener('DOMContentLoaded', function(){
    let output = document.getElementById('output')
    let searchTerm = sessionStorage.getItem('term')
    output.innerHTML = `This is what local storage saved: ${searchTerm}`
})