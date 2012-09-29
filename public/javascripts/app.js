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
      rpdi: {constant: 0.0, value: 0.0}
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
    calculatePrice: function() {
      var o = this.options;
      // compute the price of the comodity using variables affecting it.
      var price =
        o.coefficient
        + (o.importersULC.constant * o.importersULC.value)
        + (o.population.constant * o.population.value)
        + (o.openness.constant * o.openness.value)
        + (o.tradeFXRating.constant * o.tradeFXRating.value)
        + (o.outputGap.constant * o.outputGap.value)
        + (o.ownTFP.constant * o.ownTFP.value)
        + (o.ownULC.constant * o.ownULC.value)
        + (o.oil.constant * o.oil.value)
        + (o.lcpi.constant * o.lcpi.value)
        + (o.stocks.constant * o.stocks.value)
        + (o.reer.constant * o.reer.value)
        + (o.rpdi.constant * o.rpdi.value);
      // return the resulting price.
      return parseFloat(price.toFixed(2));
    }
  };
  // Return the Comodity function.
  return Comodity;
})();
