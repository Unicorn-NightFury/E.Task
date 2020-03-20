const sendMessage = (document, username) => {

    var message = "";

    // 点击发送生成信息
    $(document).on('click', '.main-task-show-btn', function(){
        createMessage(username, message)
    })

    $(document).on('change', '.main-task-show-input', function(e){
        message = e.target.value;
    })

}

function createMessage(username, message) {
    var ele = `
            <div class="main-task-show-user main-task-show-message">
                <div class="main-task-show-logo">
                    <div class="logo-username">${username}</div>
                </div>
                <div class="main-task-show-context">
                    ${message}
                </div>
            </div>
        `;
    
    $(".main-task-show-text").append(ele);

}

export {
    sendMessage
}


