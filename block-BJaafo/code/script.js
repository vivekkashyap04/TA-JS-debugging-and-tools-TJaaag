function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  
  let fullName = fullName('Arya', 'Lanninster');
  fullName = fullName('Arya', 'Stark');
  let expectedName = "Arya Stark";
  if(fullName !== expectedName){
      throw new Error(`the output of ${fullName} is not equal to ${expectedName}`);
  }
//  
function totalAmount(amount,taxRate){
    return amount + (amount * taxRate);
}
let totalAmount = totalAmount(200,10);
totalAmount = totalAmount(100,10); //1100
let expectedAmount = 1100;
if(totalAmount !== expectedAmount){
    throw new Error(`the output of ${totalAmount} is not equal to ${expectedAmount}`);
}