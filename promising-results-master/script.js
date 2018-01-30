slowMath.add(2, 6)
.then(function (result) {
    console.log (result);
    return slowMath.multiply(result, 2);
}).then(function (result) { //if promise is successful do this
    console.log (result);
    return slowMath.divide(result, 4);
}).then(function (result) {
    console.log (result);
    return slowMath.subtract(result, 3);
}).then(function (result) {
    console.log (result);
    return slowMath.add(result, 98);
}).then(function (result) {
    console.log (result);
    return slowMath.remainder(result, 2);
}).then(function (result) {
    console.log (result);
    return slowMath.multiply(result, 50);
}).then(function (result) {
    console.log (result);
    return slowMath.remainder(result, 40);
}).then(function (result) {
    console.log (result);
    return slowMath.add(result, 32);
}).then(function (result) {
    console.log ('The final result is ' + result);

}).catch(function(err){
    console.log (err)
});
