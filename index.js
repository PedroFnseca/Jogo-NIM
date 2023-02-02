var container = document.getElementById('container') // declarado como global para diminuir linhas de codigo
var emoji = '' // variavel que irá armazenar o emoji escolhido

//===========================================================================================//

//                  Funções que alteram as telas

function telaIntroducao(){
    // Essa é a tela que é a primeira a ser carregada, explicando regras

    container.innerHTML = ''

    container.innerHTML = '<h2>Seja bem vindo ao jogo do NIM!</h2>'

    container.innerHTML += '<h3>Tente ganhar da maquina!</h3>'

    container.innerHTML += '<p>Para jogar esse jogo é necessário dar uma quantidade de peças iniciais.</p>'

    container.innerHTML += '<p>As jogadas são feitas alternadamente, e deve retirar uma quantidade de peças, dentre um total que varia de acordo com o que foi definido. O ganhador é aquele que retirar a ultima peça da mesa.</p>'

    container.innerHTML += '<h3><a href="https://github.com/pedroFnseca/Jogo-NIM/blob/main/README.md" target="_blank">SOBRE/REGRAS</a></h3>'
    
    container.innerHTML += '<button onclick="telaParametros()" class="btn">OK</button>'
}


function telaParametros(){
    // Tela onde se coleta os parametros da rodada

    container.innerHTML = ''

    container.innerHTML += '<h2>Defina os parametros da rodada!</h2>'

    container.innerHTML += '<br>'

    container.innerHTML += '<label for="rodada-pcs" class="title-input">Total de peças:</label>'
    container.innerHTML += '<input id="rodada-pcs" type="number">'
    container.innerHTML += '<p class="descreve-input">Essa será a quantidade total de peças da rodada</p>'

    container.innerHTML += '<br>'

    container.innerHTML += '<label for="max-pcs" class="title-input">Peças por jogada:</label>'
    container.innerHTML += '<input id="max-pcs" type="number">'
    container.innerHTML += '<p class="descreve-input">Quantidade de peças que cada jogador poderá pegar por vez</p>'

    container.innerHTML += '<label class="title-input" >Escolha um emoji</label>'
    container.innerHTML += '<select id="emoji"> <option value="🔴" >🔴</option> <option value="⚫" >⚫</option> <option value="👽" >👽</option> <option value="👾" >👾</option> <option value="🧑🏻‍💻" >🧑🏻‍💻</option> <option value="🦖" >🦖</option> </select>'

    container.innerHTML += '<br><br>'

    container.innerHTML += '<button onclick="verifica(true)" class="btn">Modo normal</button>'
    container.innerHTML += '<button onclick="verifica(false)" class="btn">Modo dificil</button>'
}


function telaJogo(){
    // Tela onde se faz tudo acontecer

    container.innerHTML = ''   

    container.innerHTML += '<div id="pcs-iniciais"></div>'

    container.innerHTML += '<div id="itens"></div>'

    container.innerHTML += '<div id="jogadaUSer">'

    container.innerHTML += '<div id="pcs-atual"></div>'
    container.innerHTML += '<label for="pcs-user">Quantas peças?</label>'
    container.innerHTML += '<input id="pcs-user" type="number">'
    container.innerHTML += '<button class="btn" id="btn-jogar" onclick="jogoNim()" >retirar</button>'

    container.innerHTML += '</div>'

    container.innerHTML += '<div id="aviso"></div>'
    container.innerHTML += '<div id="msg"></div>'

    carregar()
}


function telaGanhador(){
    // Tela onde é montado a estrura para dizer quem ganhou

    container.innerHTML = ''

    container.innerHTML += '<div id="parabens"></div>'

    container.innerHTML += '<div id="jogar-novamente">'
    
    // if(modo_jogo !== 'dificil'){
        container.innerHTML += '<label for="jogar-dnv">Que tal mais uma partida?</label>'
        container.innerHTML += '<button onclick="telaParametros()" class="btn">Vamos</button>'
    // }

    container.innerHTML += '</div>'

    ganhador()
}


//===============================================//

var rodada_pcs, max_pcs, vencedor, modo_jogo


function verifica(is_normal){
    // Onde se faz as verificações dos parametros e passa para a proxima tela se tudo estiver de acordo

    is_normal ? modo_jogo = 'normal' : modo_jogo = 'dificil'

    // Atribuindo valor para o emoji
    let select = document.getElementById('emoji') 
    emoji = select.value

    rodada_pcs = document.getElementById('rodada-pcs') // Quantidade total de peças no jogo
    max_pcs = document.getElementById('max-pcs') // Maximo de peças que podem ser retiradas

    // Conversões para deixar o codigo enxuto em algumas partes das verificações
    value_rodadaPcs = parseInt(rodada_pcs.value) 
    value_maxPcs = parseInt(max_pcs.value)

    // Verfica se o user digitou algum valor
    if (max_pcs.value.length == 0 || max_pcs.value.length == 0){
        alert('Digite algum valor para começar')
        return
    }

    // Verifica se o usuario nao digitou um valor invalido em qtd total de peças
    else if (value_rodadaPcs < 1){
        alert('Digite um valor maior que 1 para a rodada')

        rodada_pcs.value = '' // Limpa a quantidade de peças da partida
        return
    }

    // Verifica se o user colocou um valor invalido que nao possibilite o jogo rodar
    else if(value_maxPcs >= value_rodadaPcs || value_maxPcs <= 1){
        alert(`Impossivel jogar nesse modo!\nTente um valor menor que a quantidade de peças por rodada: ${value_rodadaPcs} e maior que 1`)

        max_pcs.value = '' // Limpa a a quantidade de peças por rodada
        return
    }

    else if (rodada_pcs.value >= 150){
        alert('Esse valor irá travar o seu pc/celular \n\nDigite um valor menor que 150 em total de peças.')
        rodada_pcs.value = ''
        return
    }

    if(modo_jogo == 'dificil'){
        if(rodada_pcs.value < 10){
            alert('Digite um valor maior que 10 para o modo dificil')
            rodada_pcs.value = ''
            max_pcs.value = ''
            return
        }
    }

    // Se ocorrer tudo certo o jogo irá começar
    max_pcs = parseInt(max_pcs.value)
    rodada_pcs = parseInt(rodada_pcs.value)
    telaJogo()
}


function jogoNim(){
    // Ativada toda vez que o botão é clicado

    var serRetiradas = document.getElementById('pcs-user')

    // Caso o usuario aperte sem digitar
    if(serRetiradas.value.length <= 0){
        alert('Digite algum valor')
    }

    // Caso o user retire uma quantidade que nao dê
    else if (serRetiradas.value > max_pcs || serRetiradas.value > rodada_pcs){ // dps colocar .value
        alert('Jogada invalida! \n\nLeia o aviso')
        serRetiradas.value = '' // Limpa caixa de texto
    }

    // Caso user queira retirar um numero menor igual 0
    else if (serRetiradas.value <= 0){
        alert('Jogada invalida! \n\nDigite um numero maior que 0')
        serRetiradas.value = '' // Limpa a caixa de texto
    }
    
    // Caso ocorra tudo certo
    else{
        rodada_pcs -= serRetiradas.value // Retira as peças
        seAcabou('usuario')
        escolhe_jogada()
        seAcabou('pc')
        imprime()
    }

    // Limpa e coloca o focus na caixa de texto
    document.getElementById('pcs-user').value = ''
    document.getElementById('pcs-user').focus()
}


function imprime(){
    // Função responsavel por atualizar a quantidade de peças 

    var itens = document.getElementById('itens') // Coleta da div para escrever os itens do jogo
    let aviso = document.getElementById('aviso') // Onde aparece o aviso

    itens.innerText = '' // Limpa para enviar o valor atualizado

    for (let i = 0; i < rodada_pcs; i++) {
        itens.innerText += ` ${emoji} ` 
    }

    // Atualiza o valor das peças
    let atuais = document.getElementById('pcs-atual')
    atuais.innerHTML = ''
    atuais.innerHTML = `<h4>Peças atuais: ${rodada_pcs}</h4>`

    obs()
}


function carregar(){
    // É chamada quando a tela do jogo é carregado

    // rodada_pcs = parseInt(rodada_pcs) 
    // max_pcs = parseInt(max_pcs)
    pcs_iniciais = rodada_pcs

    let aviso = document.getElementById('aviso')
    let iniciais = document.getElementById('pcs-iniciais')

    iniciais.innerHTML = ''

    iniciais.innerHTML = `<h3>Peças iniciais: ${rodada_pcs}</h3>`
    
    obs()

    escolhe_jogada()

    imprime() 
}

function obs(){
    // Mostra o aviso de acordo com o que resta de peças

    if(max_pcs < rodada_pcs){
        aviso.innerHTML = `<h4>AVISO: o número maximo a ser retirado é ≤ que ${max_pcs}</h4>`
    }
    else{
        aviso.innerHTML = `<h4>AVISO: o número maximo a ser retirado é ≤ que ${rodada_pcs}</h4>`
    }
}

function escolhe_jogada(){
    // Responsavel por decidir quem começa e dizer quantas peças o pc retirou

    msg = document.getElementById('msg')

    msg.innerHTML = ''

    is_jogador_inicia = (rodada_pcs % (max_pcs+1)) == 0

    if (is_jogador_inicia && pcs_iniciais == rodada_pcs){
        msg.innerHTML = 'Você começa'
    }
    else if(!is_jogador_inicia && pcs_iniciais == rodada_pcs){
        msg.innerText = 'O PC começou'
        aux = modo_jogo === 'normal' ? jogada_pc_normal() : jogada_pc_dificil()
        rodada_pcs -= aux
        msg.innerText += ` e retirou ${aux} peças.`
    }
    else{
        aux = modo_jogo === 'normal' ? jogada_pc_normal() : jogada_pc_dificil()
        rodada_pcs -= aux
        msg.innerText = `PC retirou ${aux} peças.`
    }
}


function seAcabou(ganhador){
    // verifica se o jogo acabou para trocar de pagina

    if (rodada_pcs == 0){
        vencedor = ganhador
        telaGanhador()
        // manda para a variavel o ganhador
    }
}

function jogada_pc_normal(){
    // Funçãoq que assegura o cerebro do pc

    // Caso dê para o computador retirar tudo ele retira
    if(rodada_pcs == max_pcs){
        seAcabou('pc')
        return max_pcs
    }
    
    else if (rodada_pcs == 0){
        seAcabou('usuario')
    }

    // Aletoriza a jogada do computador
    else{
        aux = Math.floor(Math.random() * max_pcs + 1)

        if (rodada_pcs < max_pcs){
            return rodada_pcs
        }

        return aux
    }
}

function jogada_pc_dificil(){
    let computadorRemove = 1

    while (computadorRemove != max_pcs){
        if ((rodada_pcs - computadorRemove) % (max_pcs +1) == 0){
            return computadorRemove
        }
        else{
            computadorRemove = computadorRemove + 1
        }
    }

    return computadorRemove
}

function ganhador(){
    // Reponsavel por dizer quem ganhou a partida

    let parabens = document.getElementById('parabens')

    parabens.innerHTML = '' // Limpa para receber novos dados

    if (vencedor == 'pc'){
        parabens.innerHTML = '<h2>Poxa que pena! 😞</h2>'
        parabens.innerHTML += '<h3>Não foi dessa vez</h3>'
        if(modo_jogo == 'dificil'){
            parabens.innerHTML += '<h3>Achou que não seria dificil?</h3>'
        }
        parabens.innerHTML += '<iframe src="https://giphy.com/embed/jAe22Ec5iICCk"></iframe>'
    }
    else if(vencedor == 'usuario'){
        parabens.innerHTML = '<h2>Parabéns você ganhou! 😁🎉</h2>'
        parabens.innerHTML += '<h3>Você é um(a) gênio(a)!</h3>'
        parabens.innerHTML += '<iframe src="https://giphy.com/embed/102h4wsmCG2s12"></iframe>'
        // if(modo_jogo == 'dificil'){
        //     container.innerHTML += '<br>'
        //     container.innerHTML += '<label for="jogar-dnv">Que tal ir no modo impossivel?</label>'
        //     container.innerHTML += '<button onclick="telaParametros()" class="btn">Vamos</button>'
        // }
    }
    else{
        parabens.innerHTML = '<h1>DEU BUG AAAAA</h1>'
    }
}


document.addEventListener('keypress', function(e){
    if(e.which == 13){
        jogoNim()
    }
 }, false);