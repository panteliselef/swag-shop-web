export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";


var observers = {};


let instance = null;

class NotificationService  {
  constructor() {
    if(!instance) {
      instance = this;
    }
    return instance;
  }

  postNotification = (notifName, data) => {
    let obs = observers[notifName];
    for (var i = 0; i< obs.length; i++) {
      var obj = obs[i];
      obj.callback(data);
    }
  }

  removeObserver = (observer,notifName) => {
    var obs =  observers[notifName];
    if (obs) {
      for(var i = 0; i< obs.length; i++){
        if (observer === obs[i].observer) {
          obs.splice(i,1);
          observers[notifName] = obs;
          break;
        }
      }
    }
  }


  addObserver = (notifName, observer, callback) => {
    let obs =  observers[notifName];

    if(!obs) {
      observers[notifName] = [];

    }

    let obj = {observer: observer, callback: callback};
    observers[notifName].push(obj);

  }
}

export default NotificationService;

