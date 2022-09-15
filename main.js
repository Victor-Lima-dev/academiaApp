const exercicio = document.querySelector("#exercicio")
const series = document.querySelector("#series")
const carga = document.querySelector("#carga")
const form = document.querySelector("#form")
const treinos = document.querySelector("#treinos")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validacao()
})

const validacao = ()=>
{
    if(exercicio.value === "" || series.value ==="" || carga.value === "")
    {
        //adicionar alguma mensagem de erro
    }
    else
    {
        acessarDados()
    }
}

let dados = []

const acessarDados = ()=>
{
    dados.push({
        exercicio : exercicio.value,
        series : series.value,
         carga: carga.value
    })
    localStorage.setItem("dados", JSON.stringify(dados))
    console.log(dados)
    criarExercicio()
}

const criarExercicio = ()=>
{
    treinos.innerHTML = ""

    dados.map((x,y) => {
        return treinos.innerHTML +=
        `<ul class="lista__treino" id ="${y}">
            <li class="lista__item">${x.exercicio}</li>
            <li class="lista__item">${x.series}</li>
            <li class="lista__item">${x.carga}</li>
    </ul>`
    })

    resetarForm()
}

const resetarForm = ()=>
{
    exercicio.value = ""
    series.value = ""
    carga.value = ""
}

(()=>{
    dados = JSON.parse(localStorage.getItem("dados")) || []
    criarExercicio();
})()
