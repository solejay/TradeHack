/**
 * The Comodity component.
 * 
 * @created 28/09/2012 6:19PM
 * @author Victor Igbokwe, Segun Solaja
 */
var Comodity = (function() {

  var Comodity = function(options) {

    // use our defaults first in the case no options were provided.
    this.options = {
      name: 'Comodity Name',
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
    }
  };

  /**
   * Prototype or clone the Comodity while adding utility functions to it.
   */
  Comodity.prototype = {
    calculatePrice: function() {
    }
  };
  // Return the Comodity function.
  return Comodity;
}();
