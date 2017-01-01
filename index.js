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

const findByCoords = coords => {
  let [lon, lat] = coords;

  return lookup.find(tile => {
    return (lon >= tile.lonMin && lon <= tile.lonMax) &&
           (lat >= tile.latMin && lat <= tile.latMax);
  });
};

module.exports = findByCoords;
