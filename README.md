<a href="https://pedrofnseca.github.io/Jogo-NIM/"> <h1> Jogo NIM </h1> </a> 

<h3>Estimula a realização de cálculos mentais para conseguir ganhar do adversário.</h3>

<h4>O jogo se inicia com um numero predefinido de peças pelo usuario. Cada jogada consiste em retirar algumas peças dentre um total estabelecido. Ganha o jogador que retirar a última peça.</h4>


A primeira vez que fiz algo relacionado a esse jogo foi em Python como atividade no curso da USP na plataforma COURSERA, mas ele era bem simples e rodava no terminal. Então eu resolvi construir ele de uma forma mais amigavel.


Quando comecei a criar esse projeto pela primeira vez em html, encontrei algumas dificuldades, pois eu tentei fazer ele de uma forma totalmente diferente, fiz utilizando 4 telas html, e o JavaScript as gerenciavam, fui testando cada uma modularmente. Quando terminei o projeto por completo, ele parou de funcionar e as variveis que estavam de modo global que continham os parametros, resetavam o valor e ficavam indefinidas. Tentei de algumas formas resolver esse caso, mas sempre sem sucesso. Então decidi fazer de uma forma mais simples, transformar os 4 arquivos em um. No html deixei somente um conteiner e fui constuindo todas as telas em js para nao perder as variaveis quando fosse trocado as telas, por isso construi o projeto praticamente inteiro em JS.

<br>

<h1>COMO JOGAR?</h1>
Ao pedir para testarem o jogo algumas pessoas não conseguiram entender muito bem o funcionamento do jogo, então resolvi adicionar esse topico, para ficar melhor a experiência de quem for jogar

<br>

<h2>Defina os parametros da rodada</h2>

![image](https://user-images.githubusercontent.com/97262778/172015872-6a9bbe19-7d1a-441d-b734-48a2066d30a7.png)

- A quantidade total de peças se refere a quantidade total de peças que terá durante a rodada
- Já as peças por rodada é a quantiade de  peças que cada jogador poderá coletar no máximo por vez (as jogadas acontem alternadamente)

<h2>Jogando</h2>

![image](https://user-images.githubusercontent.com/97262778/172015912-76255009-cd0f-41ca-b7f7-7f166875f4d8.png)

- O jogo irá decidir quem irá começar e avisar quem começou, apresentará a quantidade que ainda resta no tabuleiro
- O aviso ele serve para dizer quantas peças pode ser retirado naquela vez (foi definido o máximo na rodada anterior)

<h2>Dicas</h2>

![image](https://user-images.githubusercontent.com/97262778/172016245-5fefa9de-e901-4596-aa42-ae6f6940d85c.png)

- Para conseguir ganhar da maquina existe algumas tecnicas matemáticas para conseguir ganhar (não é muito dificil), mas pense em algum método, pois existe!
- Quando você puder retire todas as peças (assim você irá ganhar) exemplo -> caso o total tenha 2 peças e no aviso permita retirar ≤ 2 retire.

#

<h3>Te desafio a jogar e tentar ganhar do PC, ele tem uma forma de jogar bem peculiar!🧐 <a href="https://pedrofnseca.github.io/Jogo-NIM/">JOGAR</a></h3>

