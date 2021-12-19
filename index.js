(function(){
  document.body.onmousemove = function(e){
    this.style.perspectiveOrigin = '' + e.pageX + 'px ' + e.pageY + 'px';
  }
}())