# Store Revenue Map

1. [Primeiros passos](#Primeiros-Passos)
2. [Instruções de Build](#Instruções-de-Build)
3. [Bibliotecas Terceiras](#Bibliotecas-Terceiras)

## Primeiros Passos

1. Baixe ou clone o repositório.
```
https://gitlab.com/olavoparno/gfn_frontend_challenge_olavo-parno.git
```
2. Execute ***npm install*** para instalar todas dependências.
3. Execute ***npm start*** para servir o projeto sob o endereço: http://localhost:8080/.

## Instruções de Build

* Depois de todas dependências instaladas, execute ***npm run build*** e sirva os arquivos disponibilizados na pasta ***dist***.

## Bibliotecas Terceiras

* [React-Leaflet](https://react-leaflet.js.org), biblioteca de mapas derivada da própria [Leaflet](https://leafletjs.com).

## TODO

* Por favor note que este projeto ainda necessita a implementação do Redux/Mobx para solução de problemas de performance e manutenibilidade de código. Como um paliativo, todos components rodam sob a execução do método ***shouldComponentUpdate***.
* Este projeto ainda necessita a implementação de testes unitários ainda mais por não ter seguido o padrão ***vermelho, verde, refatore***.