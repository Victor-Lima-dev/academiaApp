const exercicio = document.querySelector("#exercicio")
const series = document.querySelector("#series")
const carga = document.querySelector("#carga")
const form = document.querySelector("#form")
const treinos = document.querySelector("#treinos")

const selecionarTreino = document.querySelector("#selecionarTreino")

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
            <div class="icones">
                    <i onClick="editar(this)" class="fa-regular fa-pen-to-square"></i>
                    <i onClick="deletar(this), criarExercicio()"class="fa-solid fa-trash"></i>
                </div>
    </ul>`
    })

selecionarTreino.innerHTML = ""
   dados.map((x,y) => {
               return selecionarTreino.innerHTML +=
       `<ul class="lista__treino click" id ="${y}">
           <li class="lista__item">${x.exercicio}</li>
          <li class="lista__item">${x.series}</li>
           <li class="lista__item">${x.carga}</li>
           <div class="icones">
                    <i onClick="editar(this)" class="fa-regular fa-pen-to-square"></i>
                    <i onClick="deletar(this), criarExercicio()"class="fa-solid fa-trash"></i>
                </div>
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

const deletar = (e)=>
{

    e.parentElement.parentElement.remove()
    //selecionarTreino.innerHTML = ""  
    dados.splice(e.parentElement.parentElement.id, 1)

    localStorage.setItem("dados", JSON.stringify(dados))


}

const editar = (e) =>
{
    let treinoSelecionado = e.parentElement.parentElement

    exercicio.value = treinoSelecionado.children[0].textContent
    series.value = treinoSelecionado.children[1].textContent
    carga.value = treinoSelecionado.children[2].textContent

    deletar(e)
}