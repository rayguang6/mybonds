
function changeProfileImage() {
  document.getElementById("modals").style.display = "block";
}
var tempImg = "";
function loadNewImage() {
  tempImg = URL.createObjectURL(event.target.files[0]);
  // image.src = URL.createObjectURL(event.target.files[0])
}

function cancelUpload(){
    document.getElementById("modals").style.display = "none";
}

function confirmChange() {
  var image = document.getElementById("profile-image");
  image.src = tempImg;
  document.getElementById("modals").style.display = "none";
}

function closemodals() {
  document.getElementById("modals").style.display = "none";
}

function edit() {
  var allitem = document.getElementById("mainForm").querySelectorAll("input")
  // var allitem = document.querySelectorAll("input");
  for (var i = 0; i < allitem.length; i++) {
    allitem[i].disabled = false;
  }
  var allitemselect = document.querySelectorAll("select");
  for (var i = 0; i < allitemselect.length; i++) {
    allitemselect[i].disabled = false;
  }
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("editValidationBtn").innerHTML =
    " <input type='submit' class='btn btn-primary w-25 mt-4' value='Confirm'/><button type='button' class='btn btn-danger w-25 mt-4' onclick='cancelEdit()' style='margin-left:3%;'>Cancel</button>";
  document.getElementById("editSuggestion").innerHTML="<p style='color:red;'>⁕Edit the details inside the text box</p>"
}

function cancelEdit() {
  document.getElementById("editBtn").style.display = "";
  document.getElementById("editValidationBtn").innerHTML = "";

  var allitem = document.getElementById("mainForm").querySelectorAll("input")
  for (var i = 0; i < allitem.length; i++) {
    allitem[i].disabled = true;
  }
  var allitemselect = document.querySelectorAll("select");
  for (var i = 0; i < allitemselect.length; i++) {
    allitemselect[i].disabled = true;
  }
  location.reload();
}

function handleEdit(event) {
  console.log(document.getElementById("profile-firstName").value);
}

var confirmed = false;

function confirmEdit() {
  if (!confirmed) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("confirmationDiv").style.display = "block";
    document.body.style.overflow = "hidden"
    return false;
  } else {
    return true;
  }
}

function editNo() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("confirmationDiv").style.display = "none";
  document.body.style.overflow = "auto"
}

function confirmDelete() {
  console.log("lol");
  document.getElementById("overlayDelete").style.display = "block";
  document.getElementById("deleteDiv").style.display = "block";
  document.body.style.overflow = "hidden"

}

function deleteAccount() {
  console.log("delete");
  document.getElementById("overlayDelete").style.display = "none";
  document.getElementById("deleteDiv").style.display = "none";
  document.body.style.overflow = "auto"

}

function deleteNo() {
  document.getElementById("overlayDelete").style.display = "none";
  document.getElementById("deleteDiv").style.display = "none";
  document.body.style.overflow = "auto"
}

var initialTogglestate = true
if(initialTogglestate){
  document.getElementById("toggleSideButton").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-compact-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z'/></svg>"
}


function toggleSide(){
  console.log("lol")
  if(initialTogglestate){
    document.getElementById("profileSideBar").style.display = "none"
    document.getElementById("minimizeProfileSide").style.display = "flex"
  }
  else{
    document.getElementById("profileSideBar").style.display = "block"
    document.getElementById("minimizeProfileSide").style.display = "none"
  }
  initialTogglestate = !initialTogglestate
}

// set size of container based on sidebar
// $(window).resize(function() { setSizes(); });

// function setSizes() {
//     var sidebarWidth = $("#sidebar").width();
//     $("#main_content").css({"margin-left":sidebarWidth});

//     console.log('sidebar width: '+sidebarWidth);
// }
