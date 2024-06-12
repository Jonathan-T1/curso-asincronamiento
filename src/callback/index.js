function sum(num1,num2) {
    return num1 + num2;
}

function calc(num1,num2,callback) {
    return callback(num1,num2);    
}

console.log(calc(2,2,sum));


setTimeout(function(){
    console.log('Hola Vida bella');
},5000)

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting,2000,'Jonathan');

function calculateDiscountedPrice(price,discuntPercentage){

    const discount = (price*discuntPercentage)/100
    const pricewhitDiscount = price - discount

    return pricewhitDiscount
}

const originalPrice=1000
const discountPercentage=20
const finalPrice=calculateDiscountedPrice(originalPrice,discountPercentage)

console.log('Original Price: $'+originalPrice)
console.log('Discount: '+discountPercentage+'%')
console.log('Price with discount: $'+finalPrice)


function sacarhipotenusa(base,altural){
    a = altural**2;
    b = base**2;
    c = b + a ;
    raiz = Math.sqrt(c);
    console.log(`La hipotenusa de el triangulo es ${raiz}`)
}

setTimeout(sacarhipotenusa,8000,9,12)
    