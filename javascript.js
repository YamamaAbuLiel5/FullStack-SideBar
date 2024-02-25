

function showSidebar() {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('overlay').style.display = 'block';
}

function hideSidebar() {
    document.getElementById('sidebar').style.left = '-300px'; 
    document.getElementById('overlay').style.display = 'none';
}
