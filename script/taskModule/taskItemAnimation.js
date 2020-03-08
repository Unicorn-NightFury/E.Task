const taskItemAnimation = (document) => {
    $(document).on("mouseenter",".sidebar-task-item", function(){
        $(this).find(".sidebar-task-item-shank").animate({
            left:"120%"
        },500);
    });

    $(document).on("mouseleave",".sidebar-task-item", function(){
        $(this).find(".sidebar-task-item-shank").animate({
            left:"-100px"
        },500);
    });

}

export {
    taskItemAnimation
}