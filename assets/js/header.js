
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    var sidebar = `
    <!--////////////////////
                Sidebar Start
            ////////////////////-->
            
            <!-- <?php include('sidebar.php'); ?> -->
            <div class="col-auto col-md-3 col-lg-3 col-xl-2 px-sm-2 py-4 pe-4 bg-white" id="sidebar">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <!-- Logo Area -->
                    <a id="logo" href="empty-page.html" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline"><img src="assets/images/resident.png" alt="Bonds Logo" width="150"></span>
                        <span class="fs-5 d-sm-none"><img src="assets/images/resident-favicon.png" alt="Bonds Logo" width="30"></span>
                    </a>
            
                    <!-- Menu Start -->
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-4" id="menu">
                        <li class="nav-item mt-2">
                            <a href="maintenance.html" class="nav-link active">
                                <i class="fs-5 bi bi-house"></i> <span class="fs-6 ms-1 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>
            
                        <li class="nav-item mt-2">
                            <a href="covid19.html" class="nav-link">
                                <i class="fs-5 bi bi-shield-plus"></i><span class="fs-6 ms-1 d-none d-sm-inline">Covid 19</span>
                            </a>
                        </li>
            
                        <li class="nav-item mt-2">
                            <a href="visitorpass.html" class="nav-link">
                                <i class="fs-5 bi bi-person-bounding-box"></i><span class="fs-6 ms-1 d-none d-sm-inline">Visitor Pass</span>
                            </a>
                        </li>
            
                        <li class="nav-item mt-2">
                            <a href="explore.html" class="nav-link">
                                <i class="fs-5 bi bi-compass"></i><span class="fs-6 ms-1 d-none d-sm-inline">Explore</span>
                            </a>
                        </li>
                        <li class="nav-item mt-2">
                            <a href="empty-page.html" class="nav-link">
                                <i class="fs-5 bi bi-bookmark"></i><span class="fs-6 ms-1 d-none d-sm-inline">Blank Page</span>
                            </a>
                        </li>
                        
                    </ul>
                    <!-- Menu End -->
                    <hr>
                    
                    <!-- Profile Start -->
                    <div class="dropdown w-100 mb-5 py-md-2" id="profile">
                        <a href="#" class=" text-decoration-none d-flex align-items-center justify-content-center" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="">
                                <img src="assets/images/profile-image.png" alt="profile" width="50" height="50" class="rounded-circle">
                            </div>
                            
                            <span class="d-none d-sm-inline ps-1">
                                <div class="">
                                    <h6 class="fw-bold">Ray Guang</h6>
                                    <h6>A100</h6>
                                </div>
                            </span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                            <li>
                                <a class="dropdown-item text-primary" href="profile.html">
                                <i class="fs-6 bi bi-person"></i>
                                    <span class="ms-2">Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item text-danger" href="#">
                                <i class="fs-6 bi bi-box-arrow-right"></i>
                                <span class="ms-2">Logout</span>
                            </a></li>
                        </ul>
                    </div>
                    <!-- Profile End -->
                </div>
            </div>


            <!--////////////////////
                Sidebar End
            ////////////////////-->
    
    `


    var topbar = `
    <!--////////////////////
                    Top Bar Start
                ////////////////////-->

                <!-- <?php include('topbar.php'); ?> -->
                <div class="container-fluid ps-2" id="topbar_container">
                    <nav class="navbar navbar-expand-lg navbar-light mt-3" id="topbar">
                      <div class="container-fluid">
                        <!-- Page Title -->
                        <h2 class="navbar-brand fw-bolder fs-2 mydarkgreen" id="page_title">Bonds App</h2>
                  
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <span class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto me-3">
                                
                                <!-- chat icon -->
                                <li class="nav-item dropdown">
                  
                                    <a class="nav-link" href="#" id="notification-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mygreen bi bi-chat-dots-fill fs-3"></i>
                                      </a>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notification-dropdown">
                                      <li><a class="dropdown-item" href="#"><img src="assets/images/profile-image.png" width="30" alt="">I Love You</a><hr class="dropdown-divider"></li>                    
                                      <li><a class="dropdown-item" href="#"><img src="assets/images/profile-image.png" width="30" alt="">I Hate You</a><hr class="dropdown-divider"></li>                    
                                      <li><a class="dropdown-item" href="#"><img src="assets/images/profile-image.png" width="30" alt="">I Want You</a><hr class="dropdown-divider"></li>                    
                                    </ul>
                                </li>
                                <!-- chat icon end -->
                                <li class="nav-item dropdown">
                  
                                    <a class="nav-link" href="#" id="notification-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mygreen bi bi-megaphone-fill fs-3"></i>
                                      </a>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notification-dropdown">
                                      <li><a class="dropdown-item" href="#">Ray Have Made and Announcement</a></li>
                                      <li><a class="dropdown-item" href="#">Basketball Competition 8pm</a></li>
                                      <li><hr class="dropdown-divider"></li>
                                      <li><a class="dropdown-item" href="#">View All Announcements</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                  
                                    <a class="nav-link" href="#" id="notification-dropdown " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mygreen bi bi-calendar-check-fill fs-3"></i>
                                      </a>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notification-dropdown">
                                      <li><a class="dropdown-item" href="#">View Calendar</a></li>
                                      <li><a class="dropdown-item" href="#">Bonds Upcoming Activities</a></li>
                                      <li><hr class="dropdown-divider"></li>
                                      <li><a class="dropdown-item" href="#">See All Activities  </a></li>
                                    </ul>
                                </li>
                                
                            </ul>      
                            <button class="me-lg-3 btn btn_mygreen"><i class="bi bi-question-circle me-1"></i>Get Help</button>
                            
                  </span>
                      </div>
                    </nav>
                  </div>


                 <!--////////////////////
                     Top Bar End
                ////////////////////-->
    `


    var foot = `

    <!-- Bootstrap JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!-- Fontawesome CDN -->
    <script src="https://kit.fontawesome.com/db51efbc0b.js" crossorigin="anonymous"></script>

    <!-- My Custom JS -->
    <script src="assets/js/script.js"></script>

    </body>
    </html>
    `

    var head = `
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!-- Bootstrap CSS CDN --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- Bootstrap ICON --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <!-- D3JS --> <script src="https://d3js.org/d3.v4.js"></script>
    <!-- Jquery CDN --><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- Favicon --><link rel="icon" type="image/x-icon" href="assets/images/resident-favicon.png">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Bonds</title>
</head>
<body>
    `


// $( document ).ready(function() {
//     loadpage()
// });

async function loadpage(){
    document.getElementById('sidebar').innerHTML = sidebar;   
    document.getElementById('topbar').innerHTML = topbar;   
}

window.onload = async function() {
    await loadpage()
    let windowTitle = document.getElementById("window_title").textContent;
    document.getElementById('page_title').innerHTML = windowTitle
    let pageTitle = document.getElementById('page_title').innerHTML
    document.getElementById('window_title').innerText = "Bonds | " + pageTitle
};
