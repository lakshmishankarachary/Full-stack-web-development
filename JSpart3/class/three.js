class Saving_Account{
    min_bal=5000;
    open_Account(){
        console.log("account opened successfully")
    }
    get_min_bal(){
        console.log("min balance is:5000")
    }
}
let c1=new Saving_Account()
let c2=new Saving_Account()
console.log(c1.min_bal)        
c1.open_Account()
c2.get_min_bal()
