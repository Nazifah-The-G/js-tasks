let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
for(const prop in myObject){
    const key = prop;
    const type = typeof myObject.prop;
    console.log('key:',key,'|','type:',type);
}