




let main=document.querySelector('main');
let smartphone=document.getElementById('smartphone');
let pull=document.getElementById('pull');
let kalenji=document.getElementById('kalenji');
let delete1=document.getElementById('delete1');
let delete2=document.getElementById('delete2');
let delete3=document.getElementById('delete3');
let total=document.getElementById('total');
let inp1=document.getElementById('inp1');
let inp2=document.getElementById('inp2');
let inp3=document.getElementById('inp3');


delete1.onclick=function(){


total.innerHTML=parseInt(total.innerHTML)-inp1.value*499;
main.removeChild(smartphone);

}
delete2.onclick=function(){

    total.innerHTML=parseInt(total.innerHTML)-inp2.value*60;

    main.removeChild(pull);
    
  
    
    }
delete3.onclick=function(){
    total.innerHTML=parseInt(total.innerHTML)-inp3.value*99;
        main.removeChild(kalenji);
        
        
        }

        

let randomColor=function(){

let rvalue=function(){


return Math.round(Math.random()*255);

}
return 'rgb('+rvalue()+','+rvalue()+','+rvalue() +")" 



}

function increase(id,tot,ctn)

{
   let input=document.getElementById(id);
   let val=parseInt(input.value);
   val ++ ;
   input.value=val.toString();
   let total=document.getElementById(tot);
   
   total.innerHTML=parseInt(total.innerHTML)+ctn;



}

function decrease (id,tot,ctn)

{
    let input=document.getElementById(id);
    let val=parseInt(input.value);
    if (val>0)
    {val -- ;

    input.value=val.toString();
    
    let total=document.getElementById(tot);
    
    total.innerHTML=parseInt(total.innerHTML)-ctn;
    }
}




console.log(button3.length);

    
    











