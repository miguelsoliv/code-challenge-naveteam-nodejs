# Code Challenge - Nave

## Informações gerais

#### Antes de começar:
1. Instale as dependências do projeto: `yarn` || `npm i`
2. Crie o seguinte banco de dados via docker: `docker run --name code_challenge_nave -e POSTGRES_PASSWORD=nave -p 5432:5432 -d postgres`
3. Execute as migrations para criação das tabelas no banco: `yarn typeorm migration:run` || `npm run typeorm migration:run`

#### Comandos para iniciar/testar a API:
* Para iniciar o servidor de desenvolvimento: `yarn dev` || `npm run dev`
* Para executar os testes (não é preciso ter o banco criado): `yarn test` || `npm run test`

## Documentação via Insomnia

Baixe o arquivo `Insomnia_2020-08-09.json` para realizar a importação ou importe diretamente via URL `https://github.com/miguelsoliv/code-challenge-naveteam-nodejs/blob/master/Insomnia_2020-08-09.json`

## Estrutura do projeto

O projeto foi organizado com base no Package by Feature (pasta `useCases`) e com princípios do SOLID adaptados

## Testes

Para facilitar a execução dos testes foram criadas imitações dos repositórios de acesso ao Postgres (fake repositories). A cada execução dos testes o "banco" é zerado, pois os dados estão sendo salvos somente em memória.

## Endpoints

<details>
  <summary>[POST] /users</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/users</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>POST</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td><strong>Required:</strong> <br> <code>name=[string]</code> <br> <code>email=[string]</code><br> <code>password=[string]</code></td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 201 CREATED<br> <strong>Content:</strong> <code>{ "name": "User", "email": "user@example.com", "id": 1 }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 409 CONFLICT <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Email already in use" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>{ "name": "User", "email": "user@example.com", "password": "123456" }</code></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[POST] /session</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/session</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>POST</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td><strong>Required:</strong> <br> <code>email=[string]</code><br> <code>password=[string]</code></td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 200 OK<br> <strong>Content:</strong> <code>{ "user": { "id": 1, "name": "User", "email": "user@example.com" }, "token": "JWT here" }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 406 NOT ACCEPTABLE <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Email or password invalid" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>{ "email": "user@example.com", "password": "123456" }</code></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[POST] /projects</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/projects</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>POST</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td><strong>Required:</strong> <br> <code>name=[string]</code><br> <code>navers=[number[]]</code></td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 201 CREATED<br> <strong>Content:</strong> <code>{ "name": "Cool Project", "id": 1 }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" }</code> or <code>{ "status": "error", "message": "Naver with ID 1 not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>{ "name": "Cool Project", "navers": [] }</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[GET] /projects</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/projects</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>GET</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 200 OK<br> <strong>Content:</strong> <code>[{ "name": "Cool Project", "id": 1 }]</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>/projects</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[PUT] /projects/:id</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/projects/:id</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>PUT</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td><strong>Required:</strong> <br> <code>id=[number]</code></td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td><strong>Required:</strong> <br> <code>name=[string]</code> <br> <code>navers=[number[]]</code></td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 200 OK<br> <strong>Content:</strong> <code>{ "id": 1, "name": "Awesome Project" }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 401 UNAUTHORIZED <br> <strong>Content:</strong> <code>{ "status": "error", "message": "This project is not related to you" }</code> <br> <strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" }</code>, <code>{ "status": "error", "message": "Project not found" }</code> or <code>{ "status": "error", "message": "Naver with ID 1 not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>{ "name": "Awesome Project", "navers": [1] }</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[GET] /projects/:id</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/projects/:id</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>GET</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td><strong>Required:</strong> <br> <code>id=[number]</code></td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 200 OK<br> <strong>Content:</strong> <code>{ "id": 1, "name": "Awesome Project", "navers": [{ "id": 1, "name": "John Doe", "birthdate": "2000-10-10", "admission_date": "2020-10-02", "job_role": "Dev" }] }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Project not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>/projects/1</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[DELETE] /projects/:id</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/projects/:id</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>DELETE</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td><strong>Required:</strong> <br> <code>id=[number]</code></td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 204 NO CONTENT<br> <strong>Content:</strong> None</td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 401 UNAUTHORIZED <br> <strong>Content:</strong> <code>{ "status": "error", "message": "This project is not related to you" }</code> <br> <strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" } </code> or <code>{ "status": "error", "message": "Project not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>/projects/1</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[POST] /navers</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/navers</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>POST</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td><strong>Required:</strong> <br> <code>name=[string]</code> <br> <code>admission_date=[Date]</code> <br> <code>birthdate=[Date]</code> <br> <code>job_role=[string]</code> <br> <code>projects=[number[]]</code></td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 201 CREATED<br> <strong>Content:</strong> <code>{ "name": "John Doe", "birthdate": "2000-08-08", "admission_date": "2020-08-08", "job_role": "Desenvolvedor", "id": 1 }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" }</code> or <code>{ "status": "error", "message": "Project with ID 1 not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>{ "name": "John Doe", "admission_date": "2020-08-08", "birthdate": "2000-08-08", "job_role": "Desenvolvedor", "projects": [] }</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[GET] /navers</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/navers</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>GET</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 200 OK<br> <strong>Content:</strong> <code>[{ "name": "John Doe", "birthdate": "2000-08-08", "admission_date": "2020-08-08", "job_role": "Desenvolvedor", "id": 1 }]</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>/navers</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[PUT] /navers/:id</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/navers/:id</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>PUT</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td><strong>Required:</strong> <br> <code>id=[number]</code></td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td><strong>Required:</strong> <br> <code>name=[string]</code> <br> <code>admission_date=[Date]</code> <br> <code>birthdate=[Date]</code> <br> <code>job_role=[string]</code> <br> <code>projects=[number[]]</code></td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 200 OK<br> <strong>Content:</strong> <code>{ "id": 1, "name": "John Doe!", "birthdate": "2000-10-10", "admission_date": "2020-10-02", "job_role": "Dev" }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 401 UNAUTHORIZED <br> <strong>Content:</strong> <code>{ "status": "error", "message": "This project is not related to you" }</code> <br> <strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" }</code>, <code>{ "status": "error", "message": "Naver not found" }</code> or <code>{ "status": "error", "message": "Project with ID 1 not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>{ "name": "John Doe!", "admission_date": "2020-10-02", "birthdate": "2000-10-10", "job_role": "Dev", "projects": [1] }</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[GET] /navers/:id</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/navers/:id</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>GET</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td><strong>Required:</strong> <br> <code>id=[number]</code></td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 200 OK<br> <strong>Content:</strong> <code>{ "id": 1, "name": "John Doe!", "admission_date": "2020-10-02", "birthdate": "2000-10-10", "job_role": "Dev", "projects": [{ "id": 1, "name": "Awesome Project" }] }</code></td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Naver not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>/navers/1</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>[DELETE] /navers/:id</summary>
  <table style="margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Get Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>URL</td>
        <td><code>/navers/:id</code></td>
      </tr>
      <tr>
        <td>Method</td>
        <td><code>DELETE</code></td>
      </tr>
      <tr>
        <td>URL Params</td>
        <td><strong>Required:</strong> <br> <code>id=[number]</code></td>
      </tr>
      <tr>
        <td>Data Params</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Success Response</td>
        <td><strong>Code:</strong> 204 NO CONTENT<br> <strong>Content:</strong> None</td>
      </tr>
      <tr>
        <td>Error Response</td>
        <td><strong>Code:</strong> 401 UNAUTHORIZED <br> <strong>Content:</strong> <code>{ "status": "error", "message": "This naver is not related to you" }</code> <br> <strong>Code:</strong> 404 NOT FOUND <br> <strong>Content:</strong> <code>{ "status": "error", "message": "Invalid user" } </code> or <code>{ "status": "error", "message": "Naver not found" }</code></td>
      </tr>
      <tr>
        <td>Sample Request</td>
        <td><code>/navers/1</code></td>
      </tr>
      <tr>
        <td>Notes</td>
        <td><strong>Authentication required</strong></td>
      </tr>
    </tbody>
  </table>
</details>
