const Employee = require ('./employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber){
        super(id, name, email);
        this.officeNumber= officeNumber
    }
    getRole(){
        return 'manager'
    }
}

module.exports= Manager