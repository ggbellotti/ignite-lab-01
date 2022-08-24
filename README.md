# Ignite Lab 01

## Informações
Nesse Ignite Lab, será feito uma plataforma para vender e assistir cursos (venda de produtos digitais). Para isso, iremos utilizar as tecnologias/ferramentas:
* NestJS
* GraphQL
* Apache Kafka
* Next.js
* Apollo Client (GraphQL)
* Auth0 (para autenticação)

## Iniciando o projeto
### Passo 1 - Clonando o repositório. 
Siga os comandos abaixo:
```bash
  git clone https://github.com/guilhermebellotti/ignite-lab-01.git
  
  cd ignite-lab-01/purchases
  yarn install # or npm install
  
  cd ignite-lab-01/classroom
  yarn install # or npm install
```
### Passo 2 - Crie as variáveis de ambiente. 
Faça uma cópia do arquivo de modelo `.env.example` (localizado dentro de cada pasta: `classrom` e `purchases`). Crie o arquivo `.env` na raiz de cada pasta (`classrom` e `purchases`) e adicione os valores nas variáveis. Para fazer isso, cadastre-se nos sites abaixo e siga os passos:

* [Auth0](https://auth0.com/) - Serviço de autenticação
  * Abra o site faça seu cadastro
  * Após fazer o cadastrado, e ter criado o `Tenant` (que seria o escopo da aplicação) crie uma API. 
    * Acesse o menu da lateral `Applications > APIs`
    * Dê um nome para a sua `API` e um `Identifier`. Além disso, deixe o `Signing Algorithm` como `RS256`. O `Identifier` precisa ser único, ou seja, não pode ter outro cadastrado e o `RS256` é mais seguro por solicitar duas chaves (uma pública e uma privada) para "liberar" o acesso.
  * Depois de inserir as informações e ter criado, copie e o `Identifier` (ou `Audience`) para o campo `AUTH0_AUDIENCE` do seu arquivo `.env`. Copie também o `issuer` (ou `DOMAIN`) para o campo `AUTH0_DOMAIN`.
    * Acessar a aba `Quick Start` irá facilitar o acesso as informações mencionadas acima
  * 


## Detalhes e anotações
### NestJS
Para facilitar a criação e o desenvolvimento, o NestJS possui `generators`. Com ele conseguimos gerar arquivos de forma mais rápida e automatizada. Podemos gerar `application, class, configuration, controller, decorator, filter, gateway, guard, interceptor, middleware,module, pipe, provider, resolver, service, library, sub-app e resource`.