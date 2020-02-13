function decrypt(){
  let textarea = document.getElementById('encrypted').value.split('');
  textarea.map((symbol,i) => {
    if(i < textarea.length-1 && symbol === textarea[i+1]){
      textarea.splice(i+1, 1);
    }
  });
  document.getElementById('answer').innerHTML = textarea.join('');
}