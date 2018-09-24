Olá Olavo.

Abaixo segue a avaliação do seu projeto. Não necessariamente algumas das suas decisões de projeto não foram boas, mas avaliamos conforme o que foi especificado no documento.

Gostei da forma como o projeto foi componentizado, separando de forma clara cada item do layout em um componente. Por outro lado, faltou ter uma melhor separação de responsabilidades. A view (jsx) deve ter como única responsabilidade a renderização de componentes, deixando o gerenciamento de stados a cargo de uma outra entidade.

# Avaliação

## Layout

- Campo Pesquisa
    - Estilo próximo do protótipo, mas com dimensões bem diferentes :/
- Campo Faturamento minimo esperado
    - Estilo próximo do protótipo, mas com dimensões bem diferentes :/
- Listagem paginada
    - Estilo próximo do protótipo, mas com diferenças nas dimensões :/
    - Não consegui visualizar o *empty state* da tabela :/
    - Paginação
        - Estilo próximo do protótipo :)
        - Destaca página corrente :)
        - Incluído os itens *Primeira* e *Última* que não estavam no protótipo :/
- Mapa
    - Estilo muito próximo ao do protótipo :)
    - Não inclído o navegador de nível de zoom :/
- Geral
    - Muito próximo ao protótipo com pequenos ajustes necessários em tamanhos de fontes e espaçamentos :)
    - Responsivo [extra] :)
        - Campo de faturamento poderia estar após o campo de filtro 

## Funcional

- Campo Pesquisa
    - Busca é aplicada na digitação :)
    - Não tem tratamento de caracteres acentuado :/
    - Quando não encontra o resultado, traz todos os elementos :/
- Campo Faturamento minimo esperado
    - Aplicado durante a digitação :)
    - Ao apagar o valor do campo, ele não volta para o valor default :/
- Listagem paginada
    - Dados da tabela estão ordenados :)
    - Destaque dos valores mínimos :)
    - Formatação dos números conforme protótipo :)
    - Paginação
        - Navegação funciona perfeitamente :)
- Mapa
    - O filtro é aplicado :)
    - Em algums situações não exibia todos os itens que estavam na tabela :/
    - Destaca valores mínimos :)
- Itens opcionais [extra]
    - Permite reordenar a listagem pelas colunas :)
    - Routing não implementado
  
## Arquitetura/código

- Node/NPM
    - Uso do npm e webpack para build :)
    - O projeto não menciona versão de node utilizado :/
    - Algumas dependencias de runtime estão configuradas como devDependencies :/
    - CSS do Leaflet foi versionado em `src/components/map/map.scss` :(
- Desenvolvimento
    - Comentários dos commits coerentes com o que foi versionado :)
    - Documentação de build :)
    - Fez uso do Webpack [extra] :)
    - ES6 com babel [extra] :)
    - Linter não definido (eslint) no projeto [extra]
- JS
    - Fez uso do React [extra] :)
    - Fez uso do Leaflet [extra] :)
    - O gerenciamento do estado ficou a cargo dos componentes :(
    - Arquitetura
        - Bem componentizado :)
            - Criado componentes onde fazia sentido :)
        - Gerenciamento de estado :/
          - A decisão de deixar o gerencimanto de estado nos componentes fere o princípio da responsabilidade única.
        - Incluída uma entidade de serviço para recuperação de dados :)
    - Alguns problemas de identação que dificultaram a leitura :/
- CSS
    - Fez uso de pré-processador (`scss`) [extra] :)
    - Reconheci o uso da metodologia BEM, mas com varias situações onde se recorreu ao uso de tags html :)
    - Estão componentizados de certa forma, apensar de todos os componentes estarem em dois arquivos :/
        - Cada componente poderia estar em um arquivo separado
    - Arquivos de `scss` estão em estrutura de diretório à parte :/
        - poderiam estar junto aos respectivos componentes
    - Alguns problemas de identação que dificultaram a leitura :/
- Testes
    - Nenhum teste unitário [extra]
- Dist
    - Não existem referências externas :)
    - Não tratado questão de cache dos arquivos estáticos :(
    - Bundles gerados com bons tamanhos para os propósitos do projeto :/
        - `main.js` : 317KB
    - Ao usar o projeto gerado no dist, a aplicação não encontra os dados das stores :/
