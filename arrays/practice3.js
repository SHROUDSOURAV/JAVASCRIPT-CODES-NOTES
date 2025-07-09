// create an array and store ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']
// remove the first company from the array
// remove uber and add ola in its place
// add amazon at the end

let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

companies.shift();  // remove first element/company from the array

companies.splice(1,1,'Ola');    // remove Uber and add Ola in its place

companies.push('Amazon');   // add amazon at the end

console.log(companies);