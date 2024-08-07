if (!Math.trunc) { // if no such function
    // implement it
    Math.trunc = function(number) {
        // Math.ceil and Math.floor exist even in ancient JavaScript engines
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
  }