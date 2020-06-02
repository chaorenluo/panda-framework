export default {
  list (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove () {
          target.removeEventListener(eventType, callback);
        }
      };
    } else if (target.attachEvent) {
      // IE8
      target.attachEvent('on' + eventType, callback);
      return {
        remove () {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  }
};
