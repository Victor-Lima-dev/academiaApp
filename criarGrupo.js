const formGrupo = document.querySelector("#formGrupo")

const grupoNome = document.querySelector("#grupoNome")

const itensGrupos = document.querySelector("#itensGrupos")

const resetarDadosGrupo = document.querySelector("#resetar")

resetarDadosGrupo.addEventListener("click",()=>
{
resetarDados()
criarGrupo()
})


formGrupo.addEventListener("submit",(e)=>
{
    e.preventDefault()
    grupoValidacao()
})

let dadosGrupos = []

const grupoValidacao = ()=>
{
    if(grupoNome.value === " ")
    {
        console.log("preencha")
    }
    else
    {
        acessarDadosGrupos()
    }
}

const acessarDadosGrupos = ()=>
{
    dadosGrupos.push(
        {
            nome : grupoNome.value
        }
    )
localStorage.setItem("dadosGrupos", JSON.stringify(dadosGrupos))
console.log(dadosGrupos)

criarGrupo()
}

const criarGrupo = ()=>
{
    itensGrupos.innerHTML = " "

    dadosGrupos.map((x) =>{
        return itensGrupos.innerHTML +=
        `<div>
        <h1 class="section__titulo id="nomeGrupo">${x.nome}</h1>
        <div class="treinos" id="treinos">
            <ul class="lista__treino">
                <li class="lista__item">Treino</li>
                <li class="lista__item">Treino</li>
                <li class="lista__item">Treino</li>
                <div class="icones">
                    <i onclick="deletar(this)" class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </ul>
        </div>
        <div class="treinos" id="treinos">
            <ul class="lista__treino">
                <li class="lista__item">Treino</li>
                <li class="lista__item">Treino</li>
                <li class="lista__item">Treino</li>
                <div class="icones">
                    <i onclick="deletar(this)" class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </ul>
        </div>
    </div>`
    })

resetarGrupo()
}

const resetarGrupo = () =>
{
    grupoNome.value = " "
}

const resetarDados = () =>
{
    dadosGrupos = []
    localStorage.setItem("dadosGrupos", JSON.stringify(dadosGrupos))
}

(()=>{
    dadosGrupos = JSON.parse(localStorage.getItem("dadosGrupos"))
    criarGrupo()
})()

