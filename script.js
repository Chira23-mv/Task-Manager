$(document).ready(function(){

    $("#addBtn").click(function(){

        let task = $("#taskInput").val();
        let priority = $("#priority").val();
        let dueDate = $("#dueDate").val();

        if(task === ""){
            alert("Please enter a task");
            return;
        }

        let taskItem = `
        <li>
            <span class="taskText">
                ${task}
                <br>
                Priority: ${priority}
                <br>
                Due Date: ${dueDate}
            </span>

            <button class="deleteBtn">Delete</button>
        </li>
        `;

        $("#taskList").append(taskItem);

        $("#taskInput").val("");
        $("#dueDate").val("");
    });

    $("#taskList").on("click",".taskText",function(){
        $(this).toggleClass("completed");
    });

    $("#taskList").on("click",".deleteBtn",function(){
        $(this).parent().remove();
    });

    $("#searchTask").on("keyup",function(){

        let value = $(this).val().toLowerCase();

        $("#taskList li").filter(function(){

            $(this).toggle(
                $(this).text().toLowerCase().indexOf(value) > -1
            );

        });

    });

});