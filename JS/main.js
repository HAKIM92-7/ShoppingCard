




let main=document.querySelector('main');
let smartphone=document.getElementById('smartphone');
let pull=document.getElementById('pull');
let kalenji=document.getElementById('kalenji');
let button3=document.getElementsByClassName('delete');
let total=document.getElementById('total');
let inp=document.getElementsByClassName('inp');

button3[0].onclick=function(){


total.innerHTML=parseInt(total.innerHTML)-inp[0].value*499;
main.removeChild(smartphone);

}
button3[1].onclick=function(){

    total.innerHTML=parseInt(total.innerHTML)-inp[1].value*60;

    main.removeChild(pull);
    
  
    
    }
button3[2].onclick=function(){
    total.innerHTML=parseInt(total.innerHTML)-inp[2].value*99;
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

    
    











