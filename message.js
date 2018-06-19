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
let myForm=document.querySelector('#postmessageform')
postmessageform.addEventListener('submit',function(e){
  //阻止默认事件
  e.preventDefault()
  //获取到输入的内容
  let content = myForm.querySelector('input[name=content]').value
  var Mess1 = AV.Object.extend('Mess');
  var Mess2 = new Mess();
  Mess.save({
      'content': content
     }).then(function(object) {
       alert('存入成功');
     })
})