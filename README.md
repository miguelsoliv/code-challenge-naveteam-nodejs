# Code Challenge - Nave

## Informações gerais

#### Antes de começar:
* Instale as dependências do projeto: `yarn` || `npm i`
* Crie o seguinte banco de dados via docker: `docker run --name code_challenge_nave -e POSTGRES_PASSWORD=nave -p 5432:5432 -d postgres`
* Execute as migrations para criação das tabelas no banco: `yarn typeorm migration:run` || `npm run typeorm migration:run`

#### Comandos para iniciar/testar a API:
* Para iniciar o servidor de desenvolvimento: `yarn dev` || `npm run dev`
* Para executar os testes (não é preciso ter o banco criado): `yarn test` || `npm run test`

## Documentação via Insomnia

Baixe o arquivo `Insomnia_2020-08-09.json` para realizar a importação

## Estrutura do projeto

O projeto foi organizado com base no Package by Feature (pasta `useCases`) e com princípios do SOLID adaptados

## Endpoints

#### /users
#### /session
#### /projects
#### /navers
