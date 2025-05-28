function vote(){
    var name=document.getElementById("name").value ;
    var age=document.getElementById("age").value ;
    
    if(age>=18){
        res.innerHTML="Eligible";
    }else{
        res.innerHTML="You are still a child 😁🤣";
    }
}