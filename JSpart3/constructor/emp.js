class Emp{
  constructor(a,b,c){
      this.emp_id=a
      this.emp_name=b
      this.emp_sal=c
}
    get_emp_details(){
        console.log("emp_name:",this.emp_name)
    }
}
let e1=new Emp(101,"lak",45000)
let e2=new Emp(102,"laks",45000)
console.log(e1)
e1.get_emp_details()