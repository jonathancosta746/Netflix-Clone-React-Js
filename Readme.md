
# Netflix Clone

https://user-images.githubusercontent.com/26524921/174672780-310fab7d-3693-4ad1-97ee-3faa92f85c38.mp4


## Tecnologias Usadas
React Js e API(The Movie Data Base - TMBD)

## Como visualizar o projeto?
Ao realizar clone no repositório, digite 'npm install' ou 'yarn install' caso use Yarn.


## Função barra escura ao ativar barra de rolagem

![image](https://user-images.githubusercontent.com/26524921/174916562-5bb94c31-1136-48e7-9e6c-82c4c8868cef.png)
![image](https://user-images.githubusercontent.com/26524921/174916438-60612daf-9614-4080-a278-ddde5529bd66.png)


Foi adicionada a função para caso o usuário role a barra de rolagem, fosse adicionada a classe do css responsavel por definir o background escuro. Sendo que se a condição não fosse verdadeira o JavaScript a preencha com nenhum conteudo.

Para a implementação da função, foi utilizado o useState definido como false:
![image](https://user-images.githubusercontent.com/26524921/174910250-b003e0df-16e8-493e-8602-99ffdf68a90b.png)

Onde no momento que a barra de rolagem estiver em uma posição maior que 10 será definido como true, fazendo com que o javaScript adicione a class Blackground--color ao header.
![image](https://user-images.githubusercontent.com/26524921/174910656-424ce355-d564-4838-a28e-cceaa5947bc9.png)





