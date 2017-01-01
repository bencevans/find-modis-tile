import test from 'ava';
import inModisTile from './';

test('output', t => {
  let coords = [0, 0];
  let tile = inModisTile(coords);
  t.is(tile.x, 17);
  t.is(tile.y, 8);
});
