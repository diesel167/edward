function decrypt(){
  let textarea = document.getElementById('encrypted').value.split('');
  let isFinished = false;
  let anyChanges = false;
  while(!isFinished){
     textarea.map((symbol,i) => {
       if(i < textarea.length-1 && symbol === textarea[i+1]){
         textarea.splice(i,1);
         textarea.splice(i,1);
         anyChanges = true;
       }
     });
     if(!anyChanges){
       isFinished = true;
     } 
     anyChanges = false;
  }
  document.getElementById('answer').innerHTML = textarea.join('');
}
