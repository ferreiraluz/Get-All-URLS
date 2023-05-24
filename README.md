# Código para Recuperar URLs de um Domínio

Este código é usado para recuperar todas as URLs encontradas em um determinado domínio. Ele utiliza a biblioteca `cheerio` para fazer o parsing do HTML e a biblioteca `request-promise` para realizar as requisições HTTP.

## Pré-requisitos
- Certifique-se de ter o Node.js instalado em seu ambiente.

## Instalação
1. Faça o download ou clone o repositório.
2. Abra o terminal e navegue até o diretório onde o código está localizado.
3. Execute o seguinte comando para instalar as dependências necessárias:
   ```
   npm install cheerio request-promise
   ```

## Como Usar
1. Abra o arquivo `index.js` em um editor de texto.
2. Na variável `domain`, insira o domínio que deseja percorrer (por exemplo, 'https://www.exemplo.com').
3. Salve o arquivo.
4. No terminal, execute o seguinte comando para executar o código:
   ```
   node index.js
   ```

O código irá iniciar o processo de rastreamento de URLs dentro do domínio especificado. Após a conclusão, ele imprimirá todas as URLs encontradas no console.

Certifique-se de substituir `'your url'` na linha `const domain = 'your url';` pelo domínio que deseja percorrer.

## Observações
- O código utiliza uma abordagem de rastreamento em profundidade (depth-first) para percorrer as URLs encontradas.
- O código trata erros de requisição e imprime mensagens de erro no console caso ocorram problemas durante o processo de rastreamento.
- O código evita o rastreamento de URLs já visitadas para evitar ciclos infinitos.
- A variável `allUrls` armazena todas as URLs encontradas durante o processo e é retornada como resultado da função `getAllUrlsInDomain`.

**Nota:** Este código é apenas um exemplo e pode ser personalizado para atender às suas necessidades específicas. Certifique-se de entender e adaptar o código de acordo com seus requisitos.
