
const btnAvanco = document.getElementById('frente');
const btnVoltar = document.getElementById('voltar');

const projetos = document.querySelectorAll('.container .box')

btnAvanco.addEventListener('click', function(){
    for (elemento in projetos){
        if(projetos[elemento].nextElementSibling === null){
            projetos[elemento].classList.remove('active')
            projetos[0].classList.add('active')
            break
        }else if(projetos[elemento].classList.contains('active')){
            
            projetos[elemento].nextElementSibling.classList.add('active')
            projetos[elemento].classList.remove('active')
            break
        }
    }
})

btnVoltar.addEventListener('click', function(){
    for (elemento in projetos){
        if(projetos[0].classList.contains('active')){
            projetos[projetos.length-1].classList.add('active')
            projetos[0].classList.remove('active')
            break
        }else if(projetos[elemento].classList.contains('active')){
            projetos[elemento].previousElementSibling.classList.add('active')
            projetos[elemento].classList.remove('active')
            break
        }
    }
})