var users = [
    {unit: "O-00-00", password:"123", role:"admin"},
    {unit: "A-10-13", password:"123", role:"resident"},
    {unit: "B-10-14", password:"123", role:"resident"},
]

$('.login-form').submit(function(e){
    input_unit= $('.login-form input[id="unit"]').val();
    input_pass= $('.login-form input[id="password"]').val();
    input_role= $('#role').val();
    var success = false;
    for(user of users){
        if(input_unit===user.unit && input_pass===user.password && input_role===user.role){
            success = true
            if(input_role === "admin"){
                window.location.replace("admin-announcement.html"); //admin dashboard
            }else{
                window.location.replace("announcement.html"); //resident dashboard
            }
        }
    }
    if(success===false){
        alert("Unit/Password/Credidential does not match. Try again.")
    }
    e.preventDefault();
})
    
