# find-modis-tile [![Build Status](https://travis-ci.org/bencevans/find-modis-tile.svg?branch=master)](https://travis-ci.org/bencevans/find-modis-tile) [![Coverage Status](https://coveralls.io/repos/github/bencevans/find-modis-tile/badge.svg?branch=master)](https://coveralls.io/github/bencevans/find-modis-tile?branch=master)

> Find the MODIS X/Y for a given Longitude/Latitude

## Install

```
$ npm install --save find-modis-tile
```

## Usage

```js
const findModisTile = require('find-modis-tile');

const long = 0;
const lat = 0;

findModisTile(long, lat);
//=> { x: 17,
//=>   y: 8,
//=>   lonMin: -10.1532,
//=>   lonMax: 0.0085,
//=>   latMin: 0,
//=>   latMax: 10 }
```

## API

### findModisTile(lonLat)

#### lonLat

Type: `array[2]/number`

Longitude, Latitude array.

## License

MIT © [Ben Evans](http://bencevans.io)
