function pow(x, n){
    //type checks first
    if (n < 0) return NaN; //for negative powers
    if (Math.round(n) != n) return NaN; //for fractional powers

    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}