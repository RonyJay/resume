!function () {
  var view = document.querySelector('section.Message')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.MessagetList = view.querySelector('#MessagetList')
      this.form = view.querySelector('form')
      this.initAV()
      this.loadMessages()
      this.bindEvents()
    },


    initAV: function () {
      var APP_ID = 'tmpv7mJVJlm3bjiXnRPKaDk7-gzGzoHsz';
      var APP_KEY = 'rymopC3Ge2j5tNyF6wxnDkub';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },

    loadMessages: function () {
      var query = new AV.Query('Mess');
      query.find().then((Mess) => {
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

      this.form.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log(this)
        controller.SaveMessage()
      
      })
    },


    SaveMessage: function () {
      console.log(this)
      let myForm = this.form
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
      var Mess = AV.Object.extend('Mess');
      var Mess = new Mess();
      Mess.save({
        'name': name,
        'content': content
      }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name} : ${object.attributes.content}`
        this.MessagetList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
      })
    },

  }
  controller.init(view)
}.call()
























