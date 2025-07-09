# TrabalhoFinalReactNode

## Sobre o Trabalho
Este trabalho foi feita utilizando React.js e Node.js, na disciplina de Programação em Scripts, do terceiro semestre de Análise e Desenvolvimento de Sistema, na FATEC.
Foi desenvolvido em grupo, onde minha principal função foi na criação da interface do site.

## Funcionalidades do projeto
Esse projeto foi criado para ser uma página web de uma loja de automóveis. Nele é possível cadastrar funcionários, que serão responsáveis por manter os veículos do site, e manter os veículos que serão anunciados. Na parte dos veículos, quando se está logado no sistema, é possível habilitar ou desabilitar os anúncios dos veículos e editar as suas informações.

## Programas necessários:
* XAMPP
* Node.js (foi utilizada a versão: v22.14.0)
* Prisma
* vsCode

## Como visualizar o projeto
1. Crie um DB no XAMPP com o nome "locadora".
2. Há um arquivo chamado ".env". Pode ser necessário modificar o database_url.
3. No terminal do vsCode, digite: npx prisma db push
4. Depois: npx prisma Studio
5. Após isso, abra um novo terminal e digite: node --watch server.js
6. E por fim, para exibir a interface do site, abra novamente outro terminal e digite: npm run dev

### OBS:
Inicialmente não haverá logins no banco de dados, então utilize login: "adm" e senha: "adm". Para adicionar novos usuários, clique em "logado" em seguida "cadastrar".

## Adicionar imagens
Para adicionar uma imagem de um veículo, salve essa imagem na seguinte pasta: site-com-React-e-Node\imgVeiculos
