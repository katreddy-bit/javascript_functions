const person = {
    firstName: 'shiva',
    lastName: 'kumar',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('please enter a string ....')
        const parts = value.split(' ');
        if (parts.length!==2) 
            throw new Error('Enter  first name and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try{
    person.fullName = true;

}
catch (e) {
    console.log(e);
}
console.log(person.fullName); // Output: john smith
