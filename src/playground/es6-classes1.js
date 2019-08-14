class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name; // || 'test';
        this.age = age;
    }
    getGreeting(){
        // console.log(`Hello ${this.name}`);
        return `Hello ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major; 
    }
    getDescription(){
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is: ${this.major} `
        }

        return description;
    }
}

// const me = new Person('Some Name'); 
// console.log(me);
// console.log(me.getDescription());

const other = new Student('Franklin', 27, 'Ing'); 
console.log(other);
console.log(other.getDescription());
console.log(other.hasMajor());


class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;   
    }
    getGreeting(){
        let message = super.getGreeting();
        if (this.homeLocation) {
            message = `Hi! I am ${this.name}. Im visiting from ${this.homeLocation}`;
        }else{
            message = `Hi! I am ${this.name}.`;
        }
        return message;
    }
}

console.log('---------------');
const tra = new Traveler('Jose', 35, 'Jamaica')
console.log(tra.getGreeting());

