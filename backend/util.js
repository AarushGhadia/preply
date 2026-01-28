const user = {
    name: "Manish",
    age: 26,
    location: "India",
    body: {
        height: "5.9ft",
        weight: "70kg"
    }
}

console.log("1",user.name);

const { name,age } = user;

console.log("2",name);
console.log(age);

try {
    // some code
} catch (error) {
    // handle error
}

const users = [
        {
            "username": "manish",
            "name": "Manish",
            "password": "Q1e2r3s4"
        }
    ]