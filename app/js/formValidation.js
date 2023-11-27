
function validator(form, inputs){

inputs.forEach( input =>{
    input.addEventListener('input', ()=>{
        if(input.value.trim() == '' || input.value == 'default'){
            input.classList.add('error');
           
        } else{
            input.classList.remove('error');
         
        }
    })
   
})


function validation(){
    let dataValidated = 0;
  
    inputs.forEach( input =>{
        if(input.value.trim() == '' || input.value == 'default'){
            input.classList.add('error');
        } else{
            input.classList.remove('error')
        }
    })

    inputs.forEach( input =>{
        if(input.classList.contains('error')){
            dataValidated += 1;
        }  
    })


    if( dataValidated == 0){
        return 'true'
    }else{
        return 'false'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validation();

    if( validation() == 'true'){
        console.log('data send');
    }
})

}

export default validator;