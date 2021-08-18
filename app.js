document.getElementById('generate-button').addEventListener('click',function(){
debugger;
 const randomValue= Math.round(Math.random()*10000); 
 const pin=randomValue+'';
 if(pin.length==4){
    const input=document.getElementById('generate-input');
    input.value=randomValue;
 }
 else{
    const randomValue= Math.round(Math.random()*10000); 
    const input=document.getElementById('generate-input');
    input.value=randomValue;

 }
 

});


document.getElementById('display-pin').addEventListener('click',function(event){
const value=event.target.innerText;
if(isNaN(value)){
    if(value=='C'){
        const displayInput=document.getElementById('display-input');
        displayInput.value='';
    }
    
    

}
// }
else{
const displayInput=document.getElementById('display-input');
const inputValue=displayInput.value+value;
displayInput.value=inputValue;
}


});

document.getElementById('submit-button').addEventListener('click',function(){
    const input=document.getElementById('generate-input');
    const inputValue=input.value;
    const displayInput=document.getElementById('display-input');
    const displayInputValue=displayInput.value;

    if(inputValue==displayInputValue){
      document.getElementById('success').style.display='block';
      document.getElementById('cross').style.display='none';
    }
    else{
        document.getElementById('cross').style.display='block';
        document.getElementById('success').style.display='none';
    }
})