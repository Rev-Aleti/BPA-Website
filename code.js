// These functions are only used in the explore page (Explore.html) to show and hide different categories
function showCrafts() {
    document.getElementById('crafts').style.display='block';
    document.getElementById('tech').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('food').style.display='none';
}
function showTech() {
    document.getElementById('crafts').style.display='none';
    document.getElementById('tech').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('food').style.display='none';
}
function showHome() {
    document.getElementById('crafts').style.display='none';
    document.getElementById('tech').style.display='none';
    document.getElementById('home').style.display='block';
    document.getElementById('food').style.display='none';
}
function showFood() {
    document.getElementById('crafts').style.display='none';
    document.getElementById('tech').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('food').style.display='block';
}