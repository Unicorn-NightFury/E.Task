const getTaskList = (taskname, taskid) => {
    var taskitem = $(`
        <div class="sidebar-task-item">
            <div class="sidebar-task-item-left">${taskname}</div>
            <div class="sidebar-task-item-right">ID:${taskid}</div>
            <div class="sidebar-task-item-shank"></div> 
        </div>
    `); 
    $(".sidebar-task").append(taskitem);
}

export default getTaskList;