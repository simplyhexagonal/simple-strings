const {
  removeDiacritics,
  makeUrlSafe,
} = require('@simplyhexagonal/simple-strings');

console.log(
  removeDiacritics('¿¡Árvíztűrő tükörfúrógép!?')
);

console.log(
  makeUrlSafe('¿¡Árvíztűrő tükörfúrógép!?')
);
