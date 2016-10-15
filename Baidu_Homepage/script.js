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

//显示侧边栏
function displaySidebar(){
    sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
}

//隐藏侧边栏
function hideSidebar(){
    sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';

}

window.onload = function(){
    //绑定设置按钮的鼠标事件
    setting = document.getElementById('setting');
    setting.onmousemove = displaySearchMenu;
    setting.onmouseout = hideSearchMenu;
    //绑定更多功能的鼠标事件
    sidebarTitle = document.getElementById('sidebarTitle');
    sidebar = document.getElementById('sidebar');
    sidebarTitle.onmousemove = displaySidebar;
    sidebar.onmouseleave = hideSidebar;


}
