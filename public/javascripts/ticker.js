/**
 * The Ticker component.
 * 
 * @created 28/09/2012 3:50PM
 * @author Victor Igbokwe, Segun Solaja
 */
var Ticker = (function() {

  var Ticker = function(options) {

    // use our defaults first in the case no options were provided.
    this.options = {
      min : 0,
      max : 100,
      step : 1
    };

    // see if any default values were provided.
    if (options !== null && options !== undefined) {

      // update our options with the user's options.
      for (var key in options) {
        // check for the value key/property.
        if (key === 'value') {
          var value = options[key];
          // check if the value is within range before changing it.
          if (this.withinRange(value)) {
            this.options.value = value;
          } else {
            if (options.min) {
              this.options.value = options.min;
            } else {
              this.options.value = this.options.min;
            }
          }
        } else {
          this.options[key] = options[key];
        }
      }
      
      if (this.options.value === undefined) {
        this.options.value = this.options.min;
      }
    }
  };

  /**
   * Prototype or clone the Ticker while adding utility functions to it.
   */
  Ticker.prototype = {
    /**
     * Checks if a number is an integer or a floating point.
     */
    isInt : function(n) {
      return typeof n === 'number' && parseFloat(n) == parseInt(n, 10)
          && !isNaN(n);
    },
    /**
     * Return the mininum value for this Ticker.
     */
    min : function() {
      return this.options.min;
    },
    /**
     * Return the maximum value for this Ticker.
     */
    max : function() {
      return this.options.max;
    },
    /**
     * Return the step value for this Ticker.
     */
    step : function() {
      return this.options.step;
    },
    /**
     * Return the actual/current value for this Ticker.
     */
    value : function() {
      return this.options.value;
    },
    /**
     * Sets a new value for this Ticker.
     */
    setValue : function(value) {
      // check if the provided value is within range (min and max).
      if (this.withinRange(value)) {
        this.options.value = value;
      }
      return this.value();
    },
    /**
     * Checks if a number is within range (the min and max values) of this
     * Ticker.
     */
    withinRange : function(num) {
      return (typeof num === 'number')
          && (num >= this.min() || num <= this.max());
    },
    /**
     * Checks if the value can be incremented from it's current value.
     */
    canIncrement : function() {
      /*
       * Make sure the current value is not equal or greater than the max value
       * for the Ticker and that an increment in the value will not make the
       * value greater than the max.
       */
      return this.value() < this.max()
          && (this.value() - this.step()) <= this.max();
    },
    /**
     * Define the increment function that adds the "step" value to the "value"
     * attribute of the Ticker.
     */
    increment : function() {
      /*
       * Check if incrementing the current value by the step is a valid
       * operation.
       */
      if (this.canIncrement()) {
        var value = this.value() + this.step();
        // Increment the value by the step value.
        this.options.value = this.isInt(value) ? value : parseFloat(value
            .toFixed(2));
      } else {
        // Set the value to the max value.
        this.options.value = this.max();
      }
      // Return the updated value (if it was indeed updated).
      return this.value();
    },
    /**
     * Checks if the value can be decremented from it's current value.
     */
    canDecrement : function() {
      /*
       * Make sure the current value is not equal or less than the min value for
       * the Ticker and that a decrement in the value will not make the value
       * less than the min.
       */
      return this.value() > this.min()
          && (this.value() - this.step()) >= this.min();
    },
    /**
     * Define the decrement function that subtracts the "step" value from the
     * "value" attribute of the Ticker.
     */
    decrement : function() {
      /*
       * Check if decrementing the current value by the step is a valid
       * operation.
       */
      if (this.canDecrement()) {
        var value = this.value() - this.step();
        // Decrement the value by the step value.
        this.options.value = this.isInt(value) ? value : parseFloat(value
            .toFixed(2));
      } else {
        // Set the value to the max value.
        this.options.value = this.min();
      }
      // Return the updated value (if it was indeed updated).
      return this.value();
    }
  }
  // Return the Ticker function.
  return Ticker;
})();
