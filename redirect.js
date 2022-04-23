setTimeout("confirm()",10000);

var result = confirm(
  'FANZAに遷移しますか？'
  );

if (result){
  function redirect(){
  location.href="https://www.dmm.co.jp";
  }
  
else (){
  console.log('遷移しませんでした');
  }
