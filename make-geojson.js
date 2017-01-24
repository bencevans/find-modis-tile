const fs = require('fs');
const path = require('path');

const readLookupSync = () => {
  let raw = fs.readFileSync(
    path.resolve(__dirname, 'lookup.csv'),
    'utf8'
  );
  let lookup = raw.split('\n');

  // Remove headers
  lookup.shift();

  // Structure data
  lookup = lookup.map(tile => {
    tile = tile.split(',');
    return {
      x: parseInt(tile[0], 10),
      y: parseInt(tile[1], 10),
      lonMin: parseFloat(tile[2], 10),
      lonMax: parseFloat(tile[3], 10),
      latMin: parseFloat(tile[4], 10),
      latMax: parseFloat(tile[5], 10)
    };
  });

  return lookup;
};

const lookup = readLookupSync();

let features = lookup.map(item => {
  // console.log(item);
  let {
    x, y, lonMin, lonMax, latMin, latMax
  } = item;
  return {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [lonMin, latMax],
          [lonMax, latMax],
          [lonMin, latMax],
          [lonMin, latMin],
          [lonMin, latMax]
        ]
      ]
    },
    "properties": {
      "x": x,
      y: y
    }
  }
});

console.log(features)
let geojson = {
  "type": "FeatureCollection",
  "features": features
}
fs.writeFileSync('lookup.geojson', JSON.stringify(geojson, null, 2), 'utf8');
// console.log(features)
