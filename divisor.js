function testIsdivisible() {
    if (isDivisible(10, 2) && !isDivisible(11, 2)) {
        console.log('Success: `Is divisible` is working');
    } else {
        console.log('Failue : `Is divisible` is not working');
    }
}

function isDivisible(divisor, divisee) {
    /* if (divisor % divisee === 0) {
         return true;
     } else {
         return false;
     }*/

    return divisor % divisee === 0;

}

testIsdivisible();
