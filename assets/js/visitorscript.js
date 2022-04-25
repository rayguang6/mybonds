// var visitorSwitch = document.querySelector(".visitorSwitch");
// var visitorSwitchLabel = document.querySelector(".visitorSwitchLabel");
// var visitorType = false; //default false, not resident
// visitorSwitch.addEventListener("click", changeVisitorType);
// function changeVisitorType() {
//     visitorType = !visitorType;
//     if (visitorType) {
//         visitorSwitchLabel.textContent = " is";
//         residentForm();
//     }
//     else {
//         visitorSwitchLabel.textContent = " is NOT";
//         nonResidentForm()
//     }
// }

// function residentForm() {
//     //remove nonResidentForm
//     document.querySelector(".visitorCarModel").innerHTML = "";
//     document.querySelector(".visitorCarNum").innerHTML = "";

//     //add residentForm
//     document.querySelector(".visitorAddress").innerHTML = "<p for=\"visitoraddress\" class=\"form-label\">Visitor Address at <img src=\"assets/images/resident.png\" alt=\"Bonds Logo\" width=\"75\"></p>\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-auto\">\n<select class=\"form-select visitorBlock\" aria-label=\"Default select example\">\n<option selected>Block</option>\n<option value=\"A\">Block A</option>\n<option value=\"B\">Block B</option>\n<option value=\"C\">Block C</option>\n<option value=\"C\">Block D</option>\n</select>\n</div>\n<div class=\"col-1\">\n<input type=\"text\" class=\"form-control w-2 visitorFloor\" id=\"visitorFloor\" placeholder=\"Floor\">\n</div>\n <div class=\"col-1\">\n<input type=\"text\" class=\"form-control w-2 visitorUnit\" id=\"visitorUnit\" placeholder=\"Unit\">\n</div>\n</div>\n</div>";
// }

// function nonResidentForm() {
//     //remove residentForm
//     document.querySelector(".visitorAddress").innerHTML = "";

//     //add nonResidentForm
//     document.querySelector(".visitorCarModel").innerHTML = "<label for=\"visitorcar\" class=\"form-label\">Visitor Car Model & Color</label>\n<input type=\"text\" class=\"form-control w-50\" id=\"visitorcar\" placeholder=\"e.g BMW M4 Blue\">";
//     document.querySelector(".visitorCarNum").innerHTML = "<label for=\"visitorcarnumber\" class=\"form-label\">Visitor Car Register Number</label>\n<input type=\"text\" class=\"form-control w-50\" id=\"visitorcarnumber\" placeholder=\"e.g PPP1234\">";
// }
