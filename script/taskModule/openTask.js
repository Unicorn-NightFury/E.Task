const openTask = (document) => {
    $(document).on("click",".sidebar-task-item", function(){
        $(".show-page-box").hide();
        $(".main-task-show").show();
    });
}


export {
    openTask
}