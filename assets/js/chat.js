chats = [
    // {
    //     chatId:1,
    //     senderId:'cincau',
    //     receiverId: 'mrsuddenly',
    //     message:'Hi! Nice To Meet You',
    //     time:'25 Apr 2022, 2:23 pm'
    // },
    // {
    //     chatId:1,
    //     senderId:'cincau',
    //     receiverId: 'mrsuddenly',
    //     message:'Nice To Meet You Too',
    //     time:'25 Apr 2022, 2:24 pm'
    // },
    // {
    //     chatId:2,
    //     senderId:'cincau',
    //     receiverId: 'mrsuddenly',
    //     message:'I luv u',
    //     time:'25 Apr 2022, 2:24 pm'
    // },
    // {
    //     chatId:3,
    //     senderId:'mrsuddenly',
    //     receiverId: 'cincau',
    //     message:'Go Away',
    //     time:'25 Apr 2022, 2:25 pm'
    // },
    {
        chatId:5,
        senderId:'leizhiguang',
        receiverId: 'admin',
        message:'Hi I need your help',
        time:'24 Apr 2022, 2:20 pm'
    },
    {
        chatId:6,
        senderId:'admin',
        receiverId: 'leizhiguang',
        message:'Yes I am Here',
        time:'24 Apr 2022, 2:10m'
    },
    {
        chatId:7,
        senderId:'leizhiguang',
        receiverId: 'admin',
        message:'Can you help me to....',
        time:'24 Apr 2022, 2:20 pm'
    },
    {
        chatId:8,
        senderId:'admin',
        receiverId: 'leizhiguang',
        message:'Sure! You have to do this do that',
        time:'24 Apr 2022, 2:30m'
    },
    {
        chatId:9,
        senderId:'leizhiguang',
        receiverId: 'admin',
        message:'Ok I see. Got it',
        time:'24 Apr 2022, 2:40 pm'
    },
]

var currentSession = "leizhiguang"

function getMessage(senderId,message,time){
    if(senderId == "leizhiguang"){
        //return sender style
        return `<div class="m-2 chat-sent px-3 ms-auto w-75 bg_mygreen" style="border-radius: 30px;">
                    <p class="m-0 p-0">${message}</p>
                    <small class=" fw-lighter text-muted m-0 p-0">${time}</small>
                </div>`
    }else{
        //return message from left
        return `<div class="m-2 chat-received px-3 me-auto w-75 border" style="border-radius: 30px;">
                    <p class="m-0 p-0">${message}</p>
                    <small class=" fw-lighter text-muted m-0 p-0">${time}</small>
                </div>`
    }
}
displayChat()
function displayChat(){
    $('#chat-container').empty()
    // get current logged in residentid
    
    for(chat of chats.reverse()){
        if(chat.senderId==currentSession||chat.receiverId==currentSession){
            $('#chat-container').append(getMessage(chat.senderId,chat.message,chat.time))            
        }
    }
    chats.reverse()
}

function sendChat(){
    event.preventDefault()
    var message = $('#chat-input').val()
    if(message!=""){
        var chat = {
        // id:1,
        senderId: currentSession,
        receiverId:"admin",
        message:message,
        time:new Date().toLocaleDateString('en-uk', { month:"short", day:"numeric",hour:"numeric", minute:"numeric"})

        }
        chats.push(chat)
    }
    
    $('#chat-input').val('')
    displayChat()
}

