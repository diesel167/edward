function decrypt(){
  let textarea = document.getElementById('encrypted').value.split('');  
  for(let i = 0; i < textarea.length-1; i++){
    if(textarea[i] === textarea[i+1]){
      textarea.splice(i, 2);
      i--;
    }
  }
  document.getElementById('answer').innerHTML = textarea.join('');
}
