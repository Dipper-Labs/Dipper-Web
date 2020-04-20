// Smooth Scroll handler methods
function easeInOutQuad(t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

export function scrollTo(scroller, to, duration, cb) {
  const start = scroller.scrollTop
  const change = to - start
  const increment = 20
  let currentTime = 0
  const animateScroll = function () {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    scroller.scrollTop = Math.round(val)
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    } else if (cb && typeof cb === 'function') {
      cb()
    }
  }
  animateScroll()
}

// Return an element's offset wrt document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
export function offsetTop(el) {
  if (!el.getClientRects().length) {
    return 0
  }
  const bcr = el.getBoundingClientRect()
  const win = el.ownerDocument.defaultView
  return bcr.top + win.pageYOffset
};


export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
  if (r != null) return unescape(r[2]);
  return null;
}


export function device() {
  var device = {};
  // var ua = navigator.userAgent;
  var ua = navigator.userAgent;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

  device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;

  // Android
  if (android) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  // Pixel Ratio
  device.pixelRatio = window.devicePixelRatio || 1;

  // keng..
  device.isWeixin = /MicroMessenger/i.test(ua);
  return device;
};

export function userAgentInfo(key) {
  let uaArr = navigator.userAgent.split(" ");
  let patt = new RegExp(`${key}/`);
  let info = '';
  uaArr.map((item) => {
    if (patt.test(item)) {
      info = item.split('/')[1]
    }
  })
  return info;
}

/*
 * 日期格式化，eg:formatDate("124578787","YY-MM-DD")；
 */
export function formatDate(time, format) {
  Date.prototype.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1,
      // month
      'd+': this.getDate(),
      // day
      'h+': this.getHours(),
      // hour
      'm+': this.getMinutes(),
      // minute
      's+': this.getSeconds(),
      // second
      'q+': Math.floor((this.getMonth() + 3) / 3),
      // quarter
      'S': this.getMilliseconds()
      // millisecond
    };
    if (/(y+)/.test(format) || /(Y+)/.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  };
  return (new Date(time)).format(format);
};

export function addClass(elements, cName) {
  if (!hasClass(elements, cName)) {
    elements.className += " " + cName;
  };
};

export function hasClass(elements, cName) {
  return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
};

export function removeClass(elements, cName) {
  if (hasClass(elements, cName)) {
    elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " "); // replace方法是替换
  };
};


export function isH5() {
  let sUserAgent = navigator.userAgent.toLowerCase();
  let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  let bIsMidp = sUserAgent.match(/midp/i) == "midp";
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  let bIsUcBrowser = sUserAgent.match(/ucbrowser/i) == "ucbrowser";
  let bIsAndroid = sUserAgent.match(/android/i) == "android";
  let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsUcBrowser) {
    return true;
  } else {
    return false;
  }

}
