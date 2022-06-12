const givenObj = {
    "address.street" : "jalan sakura",
    "address.provice" : "banten",
    "address.city" : "tangerang",
    "person.name" : "john",
    "person.email" : "john@doe.com",
    "userType" : "admin",
    "accessLevel" : "QA",
};

function objectConversion(obj){
    const newObj = {};

    for(const property in obj){
        let propArr  = property.split(".");
        
        let currentObj = newObj;

        while(propArr.length > 1) {
            let prop = propArr.shift();
            currentObj[prop] = currentObj[prop] || {};
            console.log(currentObj[prop])
            currentObj = currentObj[prop];
        }
        
        currentObj[propArr[0]] = obj[property];
    }

    return newObj;
}

console.log(objectConversion(givenObj));

