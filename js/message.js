!function () {
  var model=Model({resourceName:'Mess'})
  var view = View('section.Message')
  var controller = Controller({
    MessagetList:null,
    form:null,
    init:function(view,controller){
      this.MessagetList = view.querySelector('#MessagetList')
      this.form = view.querySelector('form')
      this.loadMessages()
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
      this.model.save({'name':name,'content':content}).then(function (object) {
        let li = document.createElement('li')
        if(name===''||content===''){
          alert('请输入完整内容')
        }else{
        li.innerText = `${object.attributes.name} : ${object.attributes.content}`
        this.MessagetList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''}
      })
    }

  })
  controller.init(view,model)

}.call()