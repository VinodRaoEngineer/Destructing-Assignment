// 6. Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.

function extractNameAndStreet(person) {
    
    const { name, address: { street } } = person;

    
    return { name, street };
}


const personObject = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Cityville",
        country: "Countryland"
    }
};

const result = extractNameAndStreet(personObject);


console.log(result);
