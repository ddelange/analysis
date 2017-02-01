
// a list of contractions -> expansions for common street name suffixes

module.exports = {

  // full token expansions
	'aly\x03': 'alley\x03',
	'anx\x03': 'annex\x03',
	'ave\x03': 'avenue\x03',
	'byu\x03': 'bayou\x03',
	'bch\x03': 'beach\x03',
	'bnd\x03': 'bend\x03',
	'blf\x03': 'bluff\x03',
	'blfs\x03': 'bluffs\x03',
	'btm\x03': 'bottom\x03',
	'blvd\x03': 'boulevard\x03',
	'br\x03': 'branch\x03',
	'brg\x03': 'bridge\x03',
	'brk\x03': 'brook\x03',
	'byp\x03': 'bypass\x03',
	'cyn\x03': 'canyon\x03',
	'cp\x03': 'cape\x03',
	'cswy\x03': 'causeway\x03',
	'ctr\x03': 'center\x03',
	'chnnl\x03': 'channel\x03',
	'cir\x03': 'circle\x03',
	'clf\x03': 'cliff\x03',
	'cl\x03': 'close\x03',
	'clb\x03': 'club\x03',
	'cmn\x03': 'common\x03',
	'cmns\x03': 'commons\x03',
	'con\x03': 'connector\x03',
	'cor\x03': 'corridor\x03',
	'crse\x03': 'course\x03',
	'ct\x03': 'court\x03',
	'cv\x03': 'cove\x03',
	'crk\x03': 'creek\x03',
	'cres\x03': 'crescent\x03',
	'crst\x03': 'crest\x03',
	'xing\x03': 'crossing\x03',
	'xrd\x03': 'crossroad\x03',
	'xrds\x03': 'crossroads\x03',
	'curv\x03': 'curve\x03',
	'dl\x03': 'dale\x03',
	'dm\x03': 'dam\x03',
	'dr\x03': 'drive\x03',
	'esp\x03': 'esplanade\x03',
	'expy\x03': 'expressway\x03',
	'ext\x03': 'extended\x03',
	'fls\x03': 'falls\x03',
	'fry\x03': 'ferry\x03',
	'fld\x03': 'field\x03',
	'flds\x03': 'fields\x03',
	'flt\x03': 'flat\x03',
	'flts\x03': 'flats\x03',
	'frd\x03': 'ford\x03',
	'frst\x03': 'forest\x03',
	'frg\x03': 'forge\x03',
	'frk\x03': 'fork\x03',
	'frks\x03': 'forks\x03',
	'fwy\x03': 'freeway\x03',
	'gdn\x03': 'garden\x03',
	'gdns\x03': 'gardens\x03',
	'gtwy\x03': 'gateway\x03',
	'gln\x03': 'glen\x03',
	'grn\x03': 'green\x03',
	'grv\x03': 'grove\x03',
	'hbr\x03': 'harbor\x03',
	'hvn\x03': 'haven\x03',
	'hts\x03': 'heights\x03',
	'hwy\x03': 'highway\x03',
	'hl\x03': 'hill\x03',
	'hls\x03': 'hills\x03',
	'holw\x03': 'hollow\x03',
	'is\x03': 'isle\x03',
	'jct\x03': 'junction\x03',
	'ky\x03': 'key\x03',
	'kys\x03': 'keys\x03',
	'knl\x03': 'knoll\x03',
	'knls\x03': 'knolls\x03',
	'lndg\x03': 'landing\x03',
	'ln\x03': 'lane\x03',
	'lgt\x03': 'light\x03',
	'lgts\x03': 'lights\x03',
	'lck\x03': 'lock\x03',
	'lcks\x03': 'locks\x03',
	'mnr\x03': 'manor\x03',
	'mdw\x03': 'meadow\x03',
	'mdws\x03': 'meadows\x03',
	'ml\x03': 'mill\x03',
	'mls\x03': 'mills\x03',
	'mnt\x03': 'mountain\x03',
	'mt\x03': 'mount\x03',
	'mtwy\x03': 'motorway\x03',
	'nck\x03': 'neck\x03',
	'orch\x03': 'orchard\x03',
	'pkwy\x03': 'parkway\x03',
	'psge\x03': 'pasage\x03',
	'pr\x03': 'pier\x03',
	'pne\x03': 'pine\x03',
	'pnes\x03': 'pines\x03',
	'pl\x03': 'place\x03',
	'plz\x03': 'plaza\x03',
	'rnch\x03': 'ranch\x03',
	'rdg\x03': 'ridge\x03',
	'rdgs\x03': 'ridges\x03',
	'riv\x03': 'river\x03',
	'rd\x03': 'road\x03',
	'rte\x03': 'route\x03',
	'shr\x03': 'shore\x03',
	'shrs\x03': 'shores\x03',
	'skwy\x03': 'skyway\x03',
	'spg\x03': 'spring\x03',
	'spgs\x03': 'springs\x03',
	'sq\x03': 'square\x03',
	'st\x03': 'street\x03',
	'ste\x03': 'suite\x03',
	'terr\x03': 'terrace\x03',
	'tr\x03': 'trail\x03',
	'trfy\x03': 'trafficway\x03',
	'tunl\x03': 'tunnel\x03',
	'tpke\x03': 'turnpike\x03',
	'vly\x03': 'valley\x03',
	'vis\x03': 'vista\x03',
	'vlg\x03': 'village\x03',
	'wy\x03': 'way\x03',

	// partial-safe expansions
	'aly': 'alley',
	'anx': 'annex',
	'byu': 'bayou',
	'bch': 'beach',
	'bnd': 'bend',
	'blf': 'bluff',
	'blfs': 'bluffs',
	'btm': 'bottom',
	'blvd': 'boulevard',
	'brg': 'bridge',
	'brk': 'brook',
	'cyn': 'canyon',
	'cp': 'cape',
	'cswy': 'causeway',
	'ctr': 'center',
	'chnnl': 'channel',
	'clf': 'cliff',
	'clb': 'club',
	'cmn': 'common',
	'cmns': 'commons',
	'crse': 'course',
	'cv': 'cove',
	'crk': 'creek',
	'crst': 'crest',
	'xing': 'crossing',
	'xrd': 'crossroad',
	'xrds': 'crossroads',
	'dl': 'dale',
	'dm': 'dam',
	'expy': 'expressway',
	'fls': 'falls',
	'fry': 'ferry',
	'fld': 'field',
	'flds': 'fields',
	'flt': 'flat',
	'flts': 'flats',
	'frd': 'ford',
	'frst': 'forest',
	'frg': 'forge',
	'frk': 'fork',
	'frks': 'forks',
	'fwy': 'freeway',
	'gdn': 'garden',
	'gdns': 'gardens',
	'gtwy': 'gateway',
	'gln': 'glenn',
	'grn': 'green',
	'grv': 'grove',
	'hbr': 'harbor',
	'hvn': 'haven',
	'hts': 'heights',
	'hwy': 'highway',
	'hl': 'hill',
	'hls': 'hills',
	'holw': 'hollow',
	'jct': 'junction',
	'ky': 'key',
	'kys': 'keys',
	'knl': 'knoll',
	'knls': 'knolls',
	'lndg': 'landing',
	'ln': 'lane',
	'lgt': 'light',
	'lgts': 'lights',
	'lck': 'lock',
	'lcks': 'locks',
	'mnr': 'manor',
	'mdw': 'meadow',
	'mdws': 'meadows',
	'ml': 'mill',
	'mls': 'mills',
	'mnt': 'mountain',
	'mt': 'mount',
	'mtwy': 'motorway',
	'nck': 'neck',
	'pkwy': 'parkway',
	'psge': 'pasage',
	'pne': 'pine',
	'pnes': 'pines',
	'plz': 'plaza',
	'rnch': 'ranch',
	'rdg': 'ridge',
	'rdgs': 'ridges',
	'rd': 'road',
	'rte': 'route',
	'shr': 'shore',
	'shrs': 'shores',
	'skwy': 'skyway',
	'spg': 'spring',
	'spgs': 'springs',
	'ste': 'suite',
	'trfy': 'trafficway',
	'tunl': 'tunnel',
	'tpke': 'turnpike',
	'vly': 'valley',
	'vlg': 'village',
	'wy': 'way'
};
