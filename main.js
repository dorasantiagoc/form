document.addEventListener('DOMContentLoaded', function () {
    
    function validarFormulario(event) {
        event.preventDefault(); 
        
        let valorA = parseFloat(document.querySelector('input[placeholder="campo A"]').value);
        let valorB = parseFloat(document.querySelector('input[placeholder="campo B"]').value);
        
        if (valorB > valorA) {
            alert('formulário válido! pois o número B é maior que A.');
        } 
        else {
            alert('formulário inválido! pois o número B deve ser maior que A.');
        }
    }
    
    document.querySelector('form').addEventListener('submit', validarFormulario);
});