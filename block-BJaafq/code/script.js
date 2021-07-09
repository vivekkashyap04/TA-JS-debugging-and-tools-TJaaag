function test(message,callback){
    try{
        callback();
        console.log(message);
    }
    catch(error){
        console.error(error);
        console.log(message);
    }
}
function expect(actual){
    return {
        toEqual:function (expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        isEqualString:function(expected){
            if(typeof actual !== expected){
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        }
    };
}



function sum(numA,numB){
    return numA + numB;
}

function mul(numA,numB){
    return numA * numB;
}
test('add 10 and 20',() => {
    expect(add(10,20)).toEqual(30);
})
test('add 10 and 20',() => {
    expect(add(10,'20')).toEqualString("number");
})
test('add 10 and 20',() => {
    expect(add(10,20)).toEqualString("number");
})
test('add 10 and 20',() => {
    expect(add(20,20)).toEqual(30);
})
test('add 10 and 20',() => {
    expect(add(50,20)).toEqual(70);
})
test('add 10 and 20',() => {
    expect(mul(10,20)).toEqual(30);
})
test('add 10 and 20',() => {
    expect(mul(10,'20')).toEqualString("number");
})
test('add 10 and 20',() => {
    expect(mul(10,20)).toEqualString("number");
})
test('add 10 and 20',() => {
    expect(mul(20,20)).toEqual(30);
})
test('add 10 and 20',() => {
    expect(mul(50,20)).toEqual(70);
})