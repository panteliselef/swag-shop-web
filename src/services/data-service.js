import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service';


let ns = new NotificationService();



let instance = null;

var wishlist = [];

class DataService {
 constructor() {
   if(!instance) {
     instance = this;
   }
   return instance;
 }

  itemOnWishList = (item) => {
    for(var i = 0; i< wishlist.length; i++){
      if(wishlist[i]._id ===item._id) {
        return true;
      }
    }
    return false;
  }

  addWishListItem = item => {
    wishlist.push(item);
    ns.postNotification(NOTIF_WISHLIST_CHANGED,wishlist);
  }

  removeWishListItem = item => {
    for (var x = 0; x < wishlist.length; x++) {
      if (wishlist[x]._id === item._id) {
        wishlist.splice(x,1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED,wishlist);
        break;
      }
    }
  }
 
}

export default DataService;