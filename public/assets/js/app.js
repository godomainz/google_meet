var MyApp = (function () {
    function init(uid, mid) {
      console.log(uid);
      console.log(mid);
    }
    
    return {
      _init: function (uid, mid) {
        init(uid, mid);
      },
    };
  })();
  