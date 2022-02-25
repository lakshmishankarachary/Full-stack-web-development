let size=[10,20,30,40,30]
let new_Size=[];
for(var i=0; i<=size.length-1; i++){
    if(new_Size.indexOf(size[i])==-1){
        new_Size.push(size[i])
    }
}
console.log(new_Size)