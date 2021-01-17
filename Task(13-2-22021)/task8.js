function assertObjectsEqual(actual, expected, testName){
    var a = JSON.stringify(actual)
    var b = JSON.stringify(expected)
    
    console.log(a === b)
    
}

var expected = {'foo': 5, 'bar': 6};
var actual = {'foo': 5, 'bar': 6}


console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'));
