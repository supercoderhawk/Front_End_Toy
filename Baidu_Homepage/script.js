//设置搜索框相机样式
search = document.getElementById('searchButton');
search.onfocus = function(){
  search.parentNode.style.border = '1px solid #4791ff';
  search.parentNode.style.borderRight = 'none';
}
search.onblur = function(){
  search.parentNode.style.border = '1px solid #b8b8b8';
  search.parentNode.style.borderRight = 'none';
}
//设置侧边栏事件
more = document.getElementById('more');
side = document.getElementById('sidebar');
more.onmousemove = function(){
  side.style.display = 'block';
}
side.onmouseleave = function() {
  this.style.display = 'none';
}
//设置 “设置” 超链接事件
setting = document.getElementById('searchMenu');
menu = document.getElementById('setting');
setting.onmousemove = function () {
  menu.style.display = 'block';
}
menu.onmouseleave = function () {
  this.style.display = 'none';
}
