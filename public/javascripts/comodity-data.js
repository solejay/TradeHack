// define the comodities or pull from an external source.
  var comodities = {
    chicken: new Comodity({
      name: 'Chicken',  
      desc: 'Retail price of Chicken',
      key: 'chicken',
      coefficient: -2.598874888,
      importersULC: {
        name: 'TW Importers ULC',
        constant: -0.215454788,
        min: 77,
        max: 137,
        value: 86,
        step: 1
      },
      population: {
        name: 'Population',
        constant: 104.2896122,
        min: 113,
        max: 166,
        value: 113,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: 0.394337564,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: -0.80365684,
        min: 3,
        max: 5,
        value: 4.9,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: -0.324777822,
        min: -71,
        max: -3,
        value: -3.27,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: 0,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: 0.03937721,
        min: 29,
        max: 182,
        value: 121,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: 0,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: 0,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: 0,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant: 0.040472518,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: -0.165409326,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      },
      tarrif: {
        name: 'Tariff',
        constant: -1.986639975,
        min: 20,
        max: 40,
        value: 30,
        step: 1
      }
    }),
    blacktea: new Comodity({
    name: 'Black Tea',
    desc: 'Retail price of Black Tea',
    key: 'blacktea',
    coefficient: -6.317154677,
      importersULC: {
        name: 'TW Importers ULC',
        constant: -0.114175116,
        min: 77,
        max: 137,
        value: 86,
        step: 1
      },
      population: {
        name: 'Population',
        constant: 252.9397405,
        min: 113,
        max: 166,
        value: 113,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: 0.10035023,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: -2.185253424,
        min: 3,
        max: 5,
        value: 4.9,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: -0.914166375,
        min: -71,
        max: -3,
        value: -3.27,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: 0,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: -0.237135505,
        min: 29,
        max: 182,
        value: 121,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: 0,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: 0,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: 0,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant: 0.025800878,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: -0.32564611,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      },
      tarrif: {
        name: 'Tariff',
        constant: 0.224664878,
        min: 55,
        max: 114,
        value: 55,
        step: 1
    }
  }),
  water: new Comodity({
      name: 'Bottled Water',
      desc: 'Retail price of Bottled Water',
      key: 'water',
      coefficient: -7.959606598,
      importersULC: {
        name: 'TW Importers ULC',
        constant: -4.1881714,
        min: 77,
        max: 137,
        value: 86,
        step: 1
      },
      population: {
        name: 'Population',
        constant: 320.6022513,
        min: 113,
        max: 166,
        value: 113,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: -0.295210486,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: -1.594987639,
        min: 3,
        max: 5,
        value: 4.9,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: -1.430093049,
        min: -71,
        max: -3,
        value: -3.27,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: 0,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: 3.000202843,
        min: 29,
        max: 182,
        value: 121,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: 0,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: 0,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: 0,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant: -3.908023569,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: -0.634615455,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      },
      tarrif: {
        name: 'Tarifff',
        constant: 1.657207335,
        min: 40,
        max: 600,
        value: 40,
        step: 1
    }
    }),
    soap: new Comodity({
      name: 'Bar of Soap',
      desc: 'Retail price of a bar of Soap',
      key: 'soap',
      coefficient: -2.396504376,
      importersULC: {
        name: 'TW Importers ULC',
        constant: -4.069767442,
        min: 77,
        max: 137,
        value: 86,
        step: 1
      },
      population: {
        name: 'Population',
        constant: 105.5577732,
        min: 113,
        max: 166,
        value: 113,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: 0.628442564,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: -0.103716757,
        min: 3,
        max: 5,
        value: 4.9,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: 0,
        min: -71,
        max: -3,
        value: -3.27,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: 0,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: -0.958482212,
        min: 29,
        max: 182,
        value: 121,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: 0,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: 0,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: 0,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant: 1.134082087,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: -0.218478876,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      },
      tarrif: {
        name: 'Tariff',
        constant: 0.433568897,
        min: 29,
        max: 150,
        value: 29,
        step: 1
      }
    }),


    shoe: new Comodity({
      name: 'Shoes',
      desc: 'Retail price of a pair of Shoes',
      key: 'shoe',
      coefficient: 9.673624784,
      importersULC: {
        name: 'TW Importers ULC',
        constant: 1.292327552,
        min: 77,
        max: 137,
        value: 86,
        step: 1
      },
      population: {
        name: 'Population',
        constant: -381.0998776,
        min: 113,
        max: 166,
        value: 113,
        step: 1
      },
      openness: {
        name: 'Openness',
        constant: -0.023962603,
        min: 2,
        max: 5,
        value: 5,
        step: 0.05
      },
      tradeFXRating: {
        name: 'Trade FX Rating',
        constant: 0.337861459,
        min: 3,
        max: 5,
        value: 4.9,
        step: 0.1
      },
      outputGap: {
        name: 'Output Gap',
        constant: 0.723045297,
        min: -71,
        max: -3,
        value: -3.27,
        step: 1
      },
      ownTFP: {
        name: 'Own TFP',
        constant: 0,
        min: -1,
        max: 38,
        value: 3,
        step: 1
      },
      ownULC: {
        name: 'Own ULC',
        constant: 0.276391195,
        min: 29,
        max: 182,
        value: 121,
        step: 1
      },
      oil: {
        name: 'Oil',
        constant: 0,
        min: 13,
        max: 111,
        value: 20,
        step: 1
      },
      lcpi: {
        name: 'LCPI',
        constant: 0,
        min: 35,
        max: 179,
        value: 35,
        step: 1
      },
      stocks: {
        name: 'Stocks',
        constant: 0,
        min: -7,
        max: 3,
        value: 3,
        step: 0.05
      },
      reer: {
        name: 'REER',
        constant: -0.454776857,
        min: 28,
        max: 113,
        value: 89,
        step: 1
      },
      rpdi: {
        name: 'RPDI',
        constant: 0.121120519,
        min: 10,
        max: 53,
        value: 38,
        step: 1
      },
      tarrif: {
        name: 'Tariff',
        constant: -0.058180338,
        min: 15,
        max: 45,
        value: 15,
        step: 1
      }
    })
  };