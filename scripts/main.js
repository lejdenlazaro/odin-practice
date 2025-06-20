const object = {
    firstName: "Lejden",
    middleName: "Catampatan",
    lastName: "Lazaro",
    schoolId: "2022-55066",
    sex: "Male",
    age: 20
};

const random = {
    "+2134": "321",
    "+22": "2",
    "+21": "1",
    "+34": "3",
};

for(let key in object){
    console.log(`${key}: ${object[key]}`);
}

for(let key in random){
    console.log(`${key}: ${random[key]}`);
}