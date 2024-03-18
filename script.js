// function sleep(tm){
//     setTimeout(()=>{},tm)
// }
// let fun = function () {
//     let div = document.getElementById('word');
//     let str = "Tejas Jadhav is Programmer";
//     let tempstr="";
    
//         for(let i = str.length - 1;i>=0;i--){
//             if(div.innerText==str){
//                 div.innerHTML="";
//                 i = str.length - 1;
//             }
//             sleep(1000);
//             tempstr = str.charAt(i) + tempstr;
//             div.innerText ="|"+tempstr;
//         }
// }
// fun();
let convertGrade=function(char){
    if(char.toLowerCase()=='ex'){
        return 10.0;
    }
    else if(char.toLowerCase()=='aa'){
        return 9.0;
    }
    else if(char.toLowerCase()=='ab'){
        return 8.5;
    }
    else if(char.toLowerCase()=='bb'){
        return 8.0;
    }
    else if(char.toLowerCase()=='bc'){
        return 7.5;
    }
    else if(char.toLowerCase()=='cc'){
        return 7.0;
    }
    else if(char.toLowerCase()=='cd'){
        return 6.5;
    }
    else if(char.toLowerCase()=='dd'){
        return 6.0;
    }
    else if(char.toLowerCase()=='de'){
        return 5.5;
    }else if(char.toLowerCase()=='ee'){
        return 5.0;
    }else if(char.toLowerCase()=='ff'){    
        alert("Sorry, you are fail but your SGPA will be following..");
        
        return 4;
    }
}
let SGPACalculator=function(){
    
    let arr=document.getElementsByTagName('input');
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+convertGrade(arr[i].value);
    }
   
    let sgpa=sum/arr.length;  
    
    
    let care=document.getElementById('shows');
    document.getElementById('main2').style.display="block";
    care.innerHTML="Bhai Party Cahiye!!<br>SGPA toh Dekh :"+parseInt(sgpa*100)/100;


}
