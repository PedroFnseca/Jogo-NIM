> # Jogo NIM
>  - ## <a href="https://pedrofnseca.github.io/Jogo-NIM/">JOGAR<a>
> ### Estimula a realização de cálculos mentais para conseguir ganhar do adversário.

<br>

> # Ideia 💡
### A primeira vez que fiz algo relacionado a esse jogo foi em Python, como atividade no curso da USP na plataforma COURSERA, mas ele era bem simples e rodava no terminal. Então eu resolvi construir ele de uma forma mais amigavel.

<br>

> # Desafios 🦖
### Quando comecei a criar esse projeto pela primeira vez em html, encontrei algumas dificuldades, pois eu tentei fazer ele de uma forma totalmente diferente, utilizando 4 telas html e o JavaScript as gerênciavam, fui testando cada uma modularmente. 
### Ao terminar o projeto por completo, ele parou de funcionar e as variáveis que estavam de modo global que continham os parametros, resetavam o valor e ficavam indefinidas. Tentei de algumas formas resolver esse caso porem sem sucesso. 
### Então decidi fazer de uma forma mais simples, transformar os 4 arquivos em um. No html deixei somente um conteiner e fui constuindo todas as telas em js para nao perder as variáveis quando fosse trocado as telas, por isso construi o projeto praticamente inteiro em JS.

<br>

> # COMO JOGAR? 🤔
> ### Ao pedir para testarem o jogo, algumas pessoas não conseguiram entender muito bem o funcionamento do jogo, então resolvi adicionar esse tópico, para melhorar a experiência do jogador.

<br>

> ## Defina os parâmetros da rodada 🛠️

![image](https://user-images.githubusercontent.com/97262778/172015872-6a9bbe19-7d1a-441d-b734-48a2066d30a7.png)

- ### O total de peças se refere a quantidade total de peças que terá durante uma unica rodada.
- ### Já as "peças por rodada" é a quantidade de peças que cada jogador poderá coletar no máximo por vez (as jogadas acontecem alternadamente).

<br>

> ## Jogando 🎮

![image](https://user-images.githubusercontent.com/97262778/172015912-76255009-cd0f-41ca-b7f7-7f166875f4d8.png)

- ### O jogo irá decidir quem vai começar e apresentará a quantidade de peças que ainda resta no tabuleiro.
- ### O aviso serve para informar quantas peças podem ser retiradas naquela vez (foi definido o máximo na rodada anterior).

<br>

> # Dicas 📈

![image](https://user-images.githubusercontent.com/97262778/172016245-5fefa9de-e901-4596-aa42-ae6f6940d85c.png)

- ### Existem algumas tecnicas matemáticas para conseguir ganhar da máquina (não é muito dificil), mas pense em algum método, pois existe!
- ### Quando você puder, retire todas as peças (assim você irá ganhar). Exemplo ➡ caso o total tenha 2 peças e no aviso permita ≤ 2, retire.


<br>

> # Ultimas atualizações 📰🔭
 - ### Deixar o usuário escolher como será a peça do tabuleiro ex: 🔴, ⚫, 👾, 🧑‍💻 ...
 - ### interface melhorada.

> # Futuras atualizações 🚀
> ### Em busca de melhorias nesse projeto ...

 - ### Adicionar um modo novo, onde seja mais dificil de ganhar do computador, trazendo um novo desafio para o jogador!
    - ### Para realizar esse modo o algotimo irá realizar calculos matemáticos para ganhar do usuário, tornando assim impossível dele ganhar.
 - ### Multiplayer online
