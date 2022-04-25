// To let admin to manage announcement and display it to residents

var posts=[
    {
        announcementId:1,
        resident:"Mr Thunder", //wll change to id later
        title:"My First Post has long title",
        content:`My first Content
        With Hello Line Break
        and 3rd line`,
        image:"",
        time: '24 Apr 2022, 6:23 am'
    },
    {
        announcementId:2,
        resident:"Chin Chin", 
        title:"Giveaway SPM Reference Books",
        content:`PM Me!`,
        image:"assets/images/profile-image.png",
        time:'25 Apr 2022, 5:23 am'
    },
    {
        announcementId:3,
        resident:"Mr Suddenly", 
        title:"Who wants to play chess together?",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla. Magnam, tenetur quae nemo nobis cumque, corrupti dolores totam qui consequatur iusto quibusdam? Neque, ratione eius, sit officiis laborum sequi repudiandae mollitia blanditiis inventore maiores est ullam quasi deleniti itaque modi, aspernatur pariatur hic! Perferendis quaerat exercitationem incidunt. Reprehenderit, dolor!",
        image:"https://cdn.pixabay.com/photo/2015/12/07/10/56/architect-1080589_1280.jpg",
        time:'25 Apr 2022, 5:23 am'
    },
    {
        announcementId:4,
        resident:"Lei Zhi Guang", 
        title:"Finding Teammates For Basketball 3 on 3",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla. Magnam, tenetur quae nemo nobis cumque, corrupti dolores totam qui consequatur iusto quibusdam? Neque, ratione eius, sit officiis laborum sequi repudiandae mollitia blanditiis inventore maiores est ullam quasi deleniti itaque modi, aspernatur pariatur hic! Perferendis quaerat exercitationem incidunt. Reprehenderit, dolor!",
        image:"https://d1fdloi71mui9q.cloudfront.net/4HcZ1jCpQoyYRAwLxBDl_E74101X0vXSnBaCd",
        time:'25 Apr 2022, 9:23 am'
    },
        
    ]
    
        $(document).ready(function(){
            displayPosts()
        })
    
        function displayPosts(){
            $('#post_container').empty()
    

            

            for (post of posts.reverse()){
                    var card = `<div class="card mt-4 mycontainer">
                            <div class="card-body">
                                <h5><a href="/profile/${post.resident}" class="text-decoration-none">${post.resident}</a></h5>
                                <span class="text-muted">${post.time}</span>
                                <img src="${post.image}" alt="" class="w-100 mt-2">
                                <h5 class="mt-4">${post.title}</h5>
                                <p class="card-text" style="white-space: pre-line">${post.content}</p>
                            </div>
                            </div>`
                    $('#post_container').append(card)
                }
            posts.reverse()
        }
    
    
        function getImageElement(source){
            if(source!=""){
                return `<img src="${source}" alt="" class="w-100">`
            }else{
                return ""
            }
        }
    
    
        function submitPost(){
    
            let title = document.getElementById("post-title").value;
            let content = document.getElementById("post-content").value;
            
            if(title!=""){
    
                var post = {
                    title: title,
                    resident:"Lei Guang",
                    content: content,
                    image:"",
                    target:[],
                    time: new Date().toLocaleDateString('en-uk', { year:"numeric", month:"short", day:"numeric",hour:"numeric", minute:"numeric", hour12: true})
                }
                posts.push(post)
            }
            $('#post-title').val('')
            $('#post-content').val('')
            displayPosts()
        }
    
    