describe("pow", function() {
    // test group for all type checks
    describe("typechecks", () =>{
        // test for negative powers
        it("for negative n the result is NaN", function() {
        assert.isNaN(pow(2, -1));
        });

        // test for non-integer powers
        it("for non-integer n the result is NaN", function() {
        assert.isNaN(pow(2, 1.5));
        });
    });

    // main test group for pow, using power 3 only
    describe("raises x to power 3", function() {
        // making this a function so it can be called severally using a loop
        function makeTest(x) {
          let expected = x * x * x; //compute expected result

          it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
          });
        }

        // Testing the pow function with numbers 1-5
        for (let x = 1; x <= 5; x++) {
          makeTest(x);
        }
    });
  
});