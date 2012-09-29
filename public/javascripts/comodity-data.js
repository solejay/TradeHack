// define the comodities or pull from an external source.
  var comodities = {
    chicken: new Comodity({
      name: 'Chicken',
      desc: 'Retail price of Chicken...',
      key: 'chicken',
      coefficient: -2338.14,
      importersULC: {
        name: 'TW Importers ULC',
      	constant: -22.65,
      	min: 77,
      	max: 137,
      	value: 86,
      	step: 1
      },
      population: {
        name: 'Population',
        constant: 40.96,
        min: 113,
        max: 166,
        value: 113,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: 203.20,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: -16.32,
        min: 3,
        max: 5,
        value: 4.9,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: 13.68,
        min: -71,
        max: -3,
        value: -3.27,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: 1.80,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: 5.59,
        min: 29,
        max: 182,
        value: 112,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: -5.92,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: 0.93,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: 13.03,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant: -4.56,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: -30.76,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      }
    }),
    blacktea: new Comodity({
	  name: 'Black Tea',
	  desc: 'Retail price of Black Tea',
	  key: 'blacktea',
	  coefficient: -3.42,
	  importersULC: {
	    name: 'TW Importers ULC',
	  	constant: 0.18,
	  	min: 77,
	  	max: 137,
	  	value: 86,
	  	step: 1
	  },
	  population: {
	    name: 'Population',
	    constant: 2.74,
	    min: 113,
	    max: 166,
	    value: 113,
	    step: 1
	  },
	  openness: {
	    name: 'Openness',
	    constant: 12.85,
	    min: 2,
	    max: 5,
	    value: 5,
	    step: 0.05
	  },
	  tradeFXRating: {
	    name: 'Trade FX Rating',
	    constant: -33.05,
	    min: 3,
	    max: 5,
	    value: 5,
	    step: 0.1
	  },
	  outputGap: {
	    name: 'Output Gap',
	    constant: 2.72,
	    min: -71,
	    max: -3,
	    value: -3,
	    step: 1
	  },
	  ownTFP: {
	    name: 'Own TFP',
	    constant: 0.81,
	    min: -1,
	    max: 38,
	    value: 3,
	    step: 1
	  },
	  ownULC: {
	    name: 'Own ULC',
	    constant: 1.10,
	    min: 29,
	    max: 182,
	    value: 122,
	    step: 1
	  },
	  oil: {
	    name: 'Oil',
	    constant: -1.31,
	    min: 13,
	    max: 111,
	    value: 20,
	    step: 1
	  },
	  lcpi: {
	    name: 'LCPI',
	    constant: -0.37,
	    min: 35,
	    max: 179,
	    value: 35,
	    step: 1
	  },
	  stocks: {
	    name: 'Stocks',
	    constant: -0.30,
	    min: -7,
	    max: 3,
	    value: 3,
	    step: 0.05
	  },
	  reer: {
	    name: 'REER',
	    constant:-1.15,
	    min: 28,
	    max: 113,
	    value: 89,
	    step: 1
	  },
	  rpdi: {
	    name: 'RPDI',
	    constant: -3.96,
	    min: 10,
	    max: 53,
	    value: 38,
	    step: 1
	  }
	}),
	water: new Comodity({
      name: 'Water',
      desc: 'Retail price of Bottled Water',
      key: 'water',
      coefficient: 4800.97,
      importersULC: {
        name: 'TW Importers ULC',
      	constant: -37.64,
      	min: 77,
      	max: 137,
      	value: 86,
      	step: 1
      },
      population: {
        name: 'Population',
        constant: 1.04,
        min: 113,
        max: 166,
        value: 112,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: 123.48,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: 56.21,
        min: 3,
        max: 5,
        value: 5,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: 9.66,
        min: -71,
        max: -3,
        value: -3,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: 16.02,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: 30.90,
        min: 29,
        max: 182,
        value: 122,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: -16.93,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: -7.71,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: -76.11,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant:-42.83,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: -42.55,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      }
    }),
    soap: new Comodity({
      name: 'Soap',
      desc: 'Retail price of a bar of Soap',
      key: 'soap',
      coefficient: -1417.56,
      importersULC: {
        name: 'TW Importers ULC',
      	constant: 2.13,
      	min: 77,
      	max: 137,
      	value: 86,
      	step: 1
      },
      population: {
        name: 'Population',
        constant: 8.84,
        min: 113,
        max: 166,
        value: 113,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: 7.23,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: 22.94,
        min: 3,
        max: 5,
        value: 5,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: 1.27,
        min: -71,
        max: -3,
        value: -3,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: -0.43,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: -2.24,
        min: 29,
        max: 182,
        value: 122,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: 0.40,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: -0.04,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: -0.04,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant: 3.09,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: 3.18,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      }
    }),
    shoe: new Comodity({
      name: 'Shoe',
      desc: 'Retail price of a pair of Shoes',
      key: 'shoe',
      coefficient: 394384.03,
      importersULC: {
        name: 'TW Importers ULC',
      	constant: -228.40,
      	min: 77,
      	max: 137,
      	value: 86,
      	step: 1
      },
      population: {
        name: 'Population',
        constant:-2394.73,
        min: 113,
        max: 166,
        value: 112,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: -2492.31,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: -3690.06,
        min: 3,
        max: 5,
        value: 5,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: -594.05,
        min: -71,
        max: -3,
        value: -3,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: -93.82,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: 934.14,
        min: 29,
        max: 182,
        value: 122,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: -340.63,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: -111.64,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: -4209.32,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant:-1706.67,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: -90.95,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      }
    })
  };