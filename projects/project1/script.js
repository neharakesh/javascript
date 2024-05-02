const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body')

buttons.forEach(function(button){
  
  button.addEventListener('click',function(e){
    
    if(e.target.id==='grey'){
      body.style.background=e.target.id;
      body.style.color='white';
    }
    if(e.target.id==='yellow'){
      body.style.background=e.target.id;
      body.style.color='black';
    }
    if(e.target.id==='white'){
      body.style.background=e.target.id;
      body.style.color='black';
    }
    if(e.target.id==='blue'){
      body.style.background=e.target.id;
      body.style.color='white';
    }
  });
});




const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`please give a valid ${height}`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give a valid ${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/1000)).toFixed(2);
    results.innerHTML=<span>${bmi}</span>
  };
});