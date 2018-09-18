# Store Revenue Map

1. [Getting started](#Getting-Started)
2. [Build instructions](#Build-Instructions)
3. [Third-party Libraries](#Third-party-Libraries)

## Getting Started

1. Download or clone this repository.
```
https://gitlab.com/olavoparno/gfn_frontend_challenge_olavo-parno.git
```
2. Run ***npm install*** in order to install all dependencies.
3. Run ***npm run start*** in order to serve it under the following address: http://localhost:8080/.

## Build Instructions

* After all dependencies have been installed, run ***npm run build*** and serve the files on the ***dist*** folder.

## Third-party Libraries

* [React-Leaflet](https://react-leaflet.js.org), map library derived from [Leaflet](https://leafletjs.com) itself.

## TODO

* Please note that this project needs a Redux/Mobx implementation in order to solve performance and maintenance issues. As a paliative, all components are run under the method ***shouldComponentUpdate***.
* This project also needs to have unit tests implemented specially because the pattern ***red, green, refactor*** was not followed.