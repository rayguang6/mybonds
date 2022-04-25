
// Function to set active class on list item menu
const currentLocation = location.href;
console.log('currentlocation = '+currentLocation);
const menuItem = document.querySelectorAll('.menu_a');
const menuLength = menuItem.length;
for(let i = 0; i< menuLength; i++){
    menuItem[i].classList.remove("active");
    if(menuItem[i].href === currentLocation){
        // console.log('menu item: '+ menuItem[i]);
        // console.log("menu href: " + menuItem[i].href);
        menuItem[i].className += " active";
    }
}