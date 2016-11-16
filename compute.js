function testComputeArea() {
    var width = 3;
    var height = 4;
    var expected = 12;

    if (computeArea(width, height) === expected) {
        console.log('SUCCESS: `computeArea` is working');
    } else {
        console.log('FAILURE: `computeArea` is not working');
    }
}

function computeArea(width, height) {
    var expected = width * height;
    console.log(expected);
    return expected;
}

testComputeArea();
