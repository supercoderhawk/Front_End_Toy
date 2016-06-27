function displaySearchMenu(){
    menu = document.getElementById('searchMenu');
    menu.style.display = 'block';
    //menu.style.margin = 'auto';
    //alert('a');
}

function hideSearchMenu(){
    menu = document.getElementById('searchMenu');
    menu.style.display = 'none';
}

window.onload = function(){
    //绑定设置按钮的鼠标事件
    setting = document.getElementById('setting');
    setting.onmousemove = displaySearchMenu;
    setting.onmouseout = hideSearchMenu;
}
