class Parent{
    assets="10"
    good_qua(){
        console.log("parent class-good qua")
    }
}
class Child extends Parent{
    bad_Qalities() {
        console.log("Child Class - Bad Qaulties")
    }
     
}
let c1=new Child()
console.log(c1.assets)
c1.good_qua()
c1.bad_Qalities()