// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNo){
        super (name, id, email);
        this.officeNo = officeNo;
        this.type = 'manager';
    }


    getOfficeNo(){
        return this.officeNo;
    }

}

module.exports = Manager