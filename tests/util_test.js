const { urlSlice, urlBreak, doesMatch } = require('../src/util');

describe("util", function() {

    describe("method urlSlice", function() {
  
    it("should handle urls with query string", function() {

        var result = urlBreak("/this/is/sample?q1=val&q2=val3", 0);
        expect(result.url).toEqual("/this/is/sample");
        expect(result.queryStr).toEqual("q1=val&q2=val3");

    });

    it("should handle urls with hash", function() {

        var result = urlBreak("/this/is/sample#q1=val&q2=val3", 0);
        expect(result.url).toEqual("/this/is/sample");
        expect(result.hashStr).toEqual("q1=val&q2=val3");
      
    });

    it("should handle urls with both query string and hash", function() {
      
        var result = urlBreak("/this/is/sample?q1=val&q2=val3#q2=val2&q3=val4", 0);
        expect(result.url).toEqual("/this/is/sample");
        expect(result.queryStr).toEqual("q1=val&q2=val3");
        expect(result.hashStr).toEqual("q2=val2&q3=val4");

    });

    it("should only slice the hash string after the first fragment identifier if there are multiple", function() {

        var result = urlBreak("/this/is/sample?q1=val&q2=val3#q1=val#q2=val3", 0);
        expect(result.hashStr).toEqual("q1=val#q2=val3");
        
    });
    
    it("should only slice the query string after the first query params identifier if there are multiple", function() {

        var result = urlBreak("/this/is/sample?q1=val&q2=val3?q1=val#q2=val3", 0);
        expect(result.queryStr).toEqual("q1=val&q2=val3?q1=val");
        
    });

    it("should slice the hash string correctly if a query params identifier appears in the fragment string", function() {

        var result = urlBreak("/this/is/sample#q1=val&q2=val3&q1=val?q2=val3", 0);
        expect(result.hashStr).toEqual("q1=val&q2=val3&q1=val?q2=val3");
        
    });

});

describe("method doesmath", function() {
    it("should similar URLs", function() {

        var result = doesMatch("/(sri.*)", "/?(s...*)");
        expect(result).toEqual(true);
        
    });
});
});