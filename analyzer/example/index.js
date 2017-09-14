
var requireDir = require('require-dir'),
    tokenizer = requireDir('../../tokenizer'),
    config = requireDir('../../config'),
    util = require('../../lib/util');

function analyzer( ctx ){
  return util.chain(
    tokenizer.unique,
    tokenizer.diacritic,
    tokenizer.charmap.bind({ map: config.character_map }),
    tokenizer.lowercase,
    tokenizer.ordinals,
    tokenizer.singular,
    tokenizer.synonyms.bind({ map: config.first_token, position: 1 }),
    tokenizer.synonyms.bind({ map: config.address_suffix }),
    tokenizer.synonyms.bind({ map: config.directionals }),
    tokenizer.unique
  );
}

module.exports = util.cache( analyzer );
