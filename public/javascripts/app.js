/**
 * The Comodity component.
 * 
 * @created 28/09/2012 6:19PM
 * @author Victor Igbokwe, Segun Solaja
 */
var Comodity = (function() {

  /**
   * Comodity with possible default options provided.
   */
  var Comodity = function(options) {

    // use our defaults first in the case no options were provided.
    this.options = {
      name: 'Comodity Name',
      desc: 'Description',
      key: 'keyname',
      coefficient: 0.0,
      importersULC: {constant: 0.0, value: 0.0},
      population: {constant: 0.0, value: 0.0},
      openness: {constant: 0.0, value: 0.0},
      tradeFXRating: {constant: 0.0, value: 0.0},
      outputGap: {constant: 0.0, value: 0.0},
      ownTFP: {constant: 0.0, value: 0.0},
      ownULC: {constant: 0.0, value: 0.0},
      oil: {constant: 0.0, value: 0.0},
      lcpi: {constant: 0.0, value: 0.0},
      stocks: {constant: 0.0, value: 0.0},
      reer: {constant: 0.0, value: 0.0},
      rpdi: {constant: 0.0, value: 0.0},
      tarrif: {constant: 0.0, value: 0.0}
    };

    // see if any default values were provided.
    if (options !== null && options !== undefined) {
      // update our options with the user's options.
      for (var key in options) {
        this.options[key] = options[key];
      }
    }
  };

  /**
   * Prototype or clone the Comodity while adding utility functions to it.
   */
  Comodity.prototype = {
    calculateChange: function(con, value) {
      if (con === 0) return 1
      else return con * ((value - con) / con);
    },
    calculatePrice: function() {
      var o = this.options;
      // compute the price of the comodity using variables affecting it.
      var price =
        o.coefficient
        + this.calculateChange(o.importersULC.constant, o.importersULC.value)
        + this.calculateChange(o.population.constant, o.population.value)
        + this.calculateChange(o.openness.constant, o.openness.value)
        + this.calculateChange(o.tradeFXRating.constant, o.tradeFXRating.value)
        + this.calculateChange(o.outputGap.constant, o.outputGap.value)
        + this.calculateChange(o.ownTFP.constant, o.ownTFP.value)
        + this.calculateChange(o.ownULC.constant, o.ownULC.value)
        + this.calculateChange(o.oil.constant, o.oil.value)
        + this.calculateChange(o.lcpi.constant, o.lcpi.value)
        + this.calculateChange(o.stocks.constant, o.stocks.value)
        + this.calculateChange(o.reer.constant, o.reer.value)
        + this.calculateChange(o.rpdi.constant, o.rpdi.value)
        + this.calculateChange(o.tarrif.constant, o.tarrif.value);
      // return the resulting price.
      return parseFloat(price.toFixed(2));
    }
  };
  // Return the Comodity function.
  return Comodity;
})();
