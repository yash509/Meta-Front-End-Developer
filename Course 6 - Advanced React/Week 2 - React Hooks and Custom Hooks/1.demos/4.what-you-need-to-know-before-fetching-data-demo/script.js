console.log('Another customer is approaching');

fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => console.log(data));

console.log(`Our valued customer, please
    give me a moment while I get some
    information back from the Records Dept`);