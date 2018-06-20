var APP_ID = 'tmpv7mJVJlm3bjiXnRPKaDk7-gzGzoHsz';
var APP_KEY = 'rymopC3Ge2j5tNyF6wxnDkub';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })
var query = new AV.Query('Mess');
query.find().then(function (Mess) {
  let array=Mess.map((item)=>item.attributes)
  console.log(array)
  for(let i=0;i<array.length;i++){
    let li=document.createElement('li')
    li.innerText=array[i].content
    let  MessagetList = document.querySelector('#MessagetList')
    MessagetList.appendChild(li)
  }
}, function (error) {
  // 异常处理
});

let myForm=document.querySelector('#postmessageform')
postmessageform.addEventListener('submit',function(e){
  //阻止默认事件
  e.preventDefault()
  //获取到输入的内容
  let content = myForm.querySelector('input[name=content]').value
  var Mess = AV.Object.extend('Mess');
  var Mess = new Mess();
  Mess.save({
      'content': content
     }).then(function(object) {
       window.location.reload()
     })
})