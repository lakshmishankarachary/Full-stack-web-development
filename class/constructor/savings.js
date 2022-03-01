class Savings_Account{
    min_bal=500;
    constructor(id,name,sal){
       this.id=id;
       this.name=name;
       this.sal=sal;
}
open_Acc() { }
deposit() { }
withdraw() { }
get_Bal() {
    return this.sal - this.min_Bal
}
get_Statement() { }
close_Acc() { }
}
let s1=new Savings_Account(101,"rahul",45000)
console.log(c1)