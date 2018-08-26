window.Model  = function(options){
    let resourceName=options.resourceName
    return{
        init:function(){
                var APP_ID = 'tmpv7mJVJlm3bjiXnRPKaDk7-gzGzoHsz';
                var APP_KEY = 'rymopC3Ge2j5tNyF6wxnDkub';
                AV.init({
                  appId: APP_ID,
                  appKey: APP_KEY
                });
        },
        fetch:function(){
            var query = new AV.Query(resourceName)
            return query.find()
        },
        save:function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)

        }
    }
}


