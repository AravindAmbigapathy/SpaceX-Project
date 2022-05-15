

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.querySelector('body').addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
console.log('scrolled up');
} else {
       console.log('scrolled down');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
