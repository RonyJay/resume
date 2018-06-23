!function () {
  var view = document.querySelector('section.Message')
  var model = {
    //初始化
    init:function(){
      var APP_ID = 'tmpv7mJVJlm3bjiXnRPKaDk7-gzGzoHsz';
      var APP_KEY = 'rymopC3Ge2j5tNyF6wxnDkub';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    //获取数据
    fetch:function(){
      var query = new AV.Query('Mess');
      return query.find()
    },
    //保存数据
    save:function(name,content){
      var Mess = AV.Object.extend('Mess');
      var Mess = new Mess();
      return Mess.save({
        'name': name,
        'content': content
      })
    }
  }
  var controller = {
    view: null,
    model:null,
    init: function (view,model) {
      this.view = view
      this.model=model
      this.MessagetList = view.querySelector('#MessagetList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },



    loadMessages: function () {
      this.model.fetch().then((Mess) => {
        let array = Mess.map((item) => item.attributes)
        for (let i = 0; i < array.length; i++) {
          let li = document.createElement('li')
          li.innerText = `${array[i].name} : ${array[i].content}`
          this.MessagetList.appendChild(li)
        }
      }, function (error) {
        // 异常处理
      });
    },

    bindEvents: function () {
      this.form.addEventListener('submit',  (e)=> {
        e.preventDefault()
        this.SaveMessage()

      })
    },


    SaveMessage: function () {
      let myForm = this.form
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
      this.model.save(name,content).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name} : ${object.attributes.content}`
        this.MessagetList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
      })
    },

  }
  controller.init(view,model)
}.call()
























