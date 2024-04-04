const person = {
    firstName: 'shiva',
    lastName: 'kumar',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'john smith';
console.log(person.fullName); // Output: john smith
