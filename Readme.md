
# Netflix Clone

![netflix](https://user-images.githubusercontent.com/26524921/210449653-407ce35f-5bfa-4db3-b265-841b600ae1ca.png)


## Como visualizar o projeto?
Disponível do link https://netflix-clone-react-jsc.netlify.app/

ou

Ao realizar clone no repositório, digite 'npm install' ou 'yarn install' caso use Yarn.

## Tecnologias Usadas
React Js e API (The Movie Data Base - TMBD)


https://user-images.githubusercontent.com/26524921/174922567-c50dee41-22d3-45b9-a10e-a0785514475b.mp4

![arremessando alto](https://user-images.githubusercontent.com/26524921/174926730-ca35dbe7-edd4-4d58-8ada-234984ee2e06.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/26524921/174926922-dc3ecb2a-0caa-4e1b-b6cc-31d1eaf69db7.png">
</p>



## Função barra escura ao ativar barra de rolagem

![image](https://user-images.githubusercontent.com/26524921/174916562-5bb94c31-1136-48e7-9e6c-82c4c8868cef.png)
![image](https://user-images.githubusercontent.com/26524921/174916438-60612daf-9614-4080-a278-ddde5529bd66.png)


Foi adicionada a função para caso o usuário role a barra de rolagem, fosse adicionada a classe do CSS responsável por definir o background escuro. Sendo que se a condição não fosse verdadeira o JavaScript a preencha com nenhum conteúdo.

Para a implementação da função, foi utilizado o useState definido como false:
![image](https://user-images.githubusercontent.com/26524921/174910250-b003e0df-16e8-493e-8602-99ffdf68a90b.png)

Onde no momento que a barra de rolagem estiver em uma posição maior que 10 será definido como true, fazendo com que o javaScript adicione a class Blackground--color ao header.
![image](https://user-images.githubusercontent.com/26524921/174910656-424ce355-d564-4838-a28e-cceaa5947bc9.png)


## Filme em destaque

Pada exibir o filme em destaque foi utilizada uma função onde irá receber os dados de alguma das listas da API, posteriormente fazendo uma seleção aleatória de um item para que seja buscado as informações dele dentro da API.
![image](https://user-images.githubusercontent.com/26524921/174919968-f12611f0-cf73-46d5-89b6-242493868006.png)

Houve um problema de em alguns filmes a descrição ser muito grande quebrando o site, para correção este erro, foi adicionado no index.js do FeaturedMovie uma limitação de 200 caracteres na descrição.
![image](https://user-images.githubusercontent.com/26524921/174920316-dc824a0a-5940-4e9d-88d0-7c78bc7087aa.png)


#
Um pouco mais sobre o projeto neste [link](https://www.youtube.com/watch?v=A6O_-JCGnmA) no youtube.
Para dúvidas ou sugestões poderá me contatar através do meu [email](mailto:jonathancosta746@gmail.com) ou [Linkedin](https://www.linkedin.com/in/jonathansantos-costa/).







