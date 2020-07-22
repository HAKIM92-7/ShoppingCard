let j=1;
let sum=499+60+99;

var button1=document.getElementsByClassName('plus');
var total=document.querySelector('#hautdepage>p');
var quantity=document.getElementsByClassName('textquantity');

for (let i=0;i<quantity.length;i++)
{quantity[i].innerHTML=`Quantité =  ${j}`;}
total.innerHTML =`Total Panier : ${sum} DT`;
for (let i=0 ; i<button1.length ;i++)
{
button1[i].onclick=function() {
    j++;
    quantity[i].innerHTML = `Quantité =  ${j}`; 
    if (i==0){
    sum+=499;
    total.innerHTML= `Total Panier: ${sum} DT`;}
    else if(i==1) 
    {   sum+=60;         
        total.innerHTML= `Total Panier: ${sum} DT`;
    } 
    else 
    {sum+=99;
     
    total.innerHTML= `Total Panier: ${sum} DT`;
    } //nombre de click 

}}

let button2=document.getElementsByClassName('moins');

for(let i=0; i<button2.length ;i++)
{
button2[i].onclick=function() {
    if(j>1)
    {j--;}

    quantity[i].innerHTML = `Quantité =  ${j}`;   //nombre de click 
    
    if (i==0){
        if (sum>658)
        {sum-=499;}
        total.innerHTML= `Total Panier: ${sum} DT`;}
        else if(i==1) 
        {   if(sum>658)
            {sum-=60;}         
            total.innerHTML= `Total Panier: ${sum} DT`;
        } 
        else 
        {
             if(sum>658)
            {sum-=99;}
         
        total.innerHTML= `Total Panier: ${sum} DT`;
        } //nombre de click 
    
    
} 
}


let main=document.querySelector('main');
let smartphone=document.getElementById('smartphone');
let pull=document.getElementById('pull');
let kalenji=document.getElementById('kalenji');
let button3=document.getElementsByClassName('delete');

button3[0].onclick=function(){

main.removeChild(smartphone);
j=0;
total.innerHTML= `total : 0 DT`;

}
button3[1].onclick=function(){

    main.removeChild(pull);
    
  
    
    }
button3[2].onclick=function(){

        main.removeChild(kalenji);
        
        
        }
        

let randomColor=function(){

let rvalue=function(){


return Math.round(Math.random()*255);

}
return 'rgb('+rvalue()+','+rvalue()+','+rvalue() +")" 



}






    
    











