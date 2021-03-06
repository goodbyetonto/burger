$(document).ready(function () {

    $("#burger_btn").on("click", function (event) {
        event.preventDefault();

        //define the structure of the object
        let newBurger = {
            burger_name: "",
            devoured: false
        }
        //populate this object
        const burgerName = $("#bu").val();
        newBurger.burger_name = burgerName;
        console.log(burgerName);
        const isDevoured = $("#devoured").is(":checked");
        console.log(isDevoured);
        newBurger.devoured = isDevoured;
        //ajx post make a req to server to the post route
        $.post(
            "/api/new", newBurger
        ).then(res => {
            console.log("post was successful", res);
        });
    });

    $(".change-devoured").on("click", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        let newDevouredState = {
            devoured: newDevoured
        };
        // Send the PUT request.
        $.put(
            "/api/burger/" + id, {
            data: newDevouredState
        }).then(res => {
            console.log("Changed devoured to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".delete-burger").on("click", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id = $(this).data("id");
        // Send the DELETE request.
        $.delete("/api/burger/" + id, {
        }).then(() => {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });


    // // Getting a reference to the input field where user adds a new todo
    // var $newItemInput = $(".form-group");
    // // Our new todos will go inside the todoContainer
    // //var $burgerContainer = $(".todo-container");
    // // Adding event listeners for deleting, editing, and adding todos
    // $(document).on("click", ".todo-item", editTodo);    $(document).on("blur", ".todo-item", cancelEdit);
    // $(document).on("submit", "#todo-form", insertTodo);

    // // Our initial todos array
    // var burgers = [];

    // // Getting todos from database when page loads
    // getTodos();

    // // This function resets the todos displayed with new todos from the database
    // function initializeRows() {
    //     $todoContainer.empty();
    //     var rowsToAdd = [];
    //     for (var i = 0; i < todos.length; i++) {
    //         rowsToAdd.push(createNewRow(todos[i]));
    //     }
    //     $todoContainer.prepend(rowsToAdd);
    // }

    // // This function grabs todos from the database and updates the view
    // function getTodos() {
    //     $.get("/api/todos", function (data) {
    //         todos = data;
    //         initializeRows();
    //     });
    // }

    // // This function deletes a todo when the user clicks the delete button
    // function deleteTodo(event) {
    //     event.stopPropagation();
    //     var id = $(this).data("id");
    //     $.ajax({
    //         method: "DELETE",
    //         url: "/api/todos/" + id
    //     }).then(getTodos);
    // }

    // // This function handles showing the input box for a user to edit a todo
    // function editTodo() {
    //     var currentTodo = $(this).data("todo");
    //     $(this).children().hide();
    //     $(this).children("input.edit").val(currentTodo.text);
    //     $(this).children("input.edit").show();
    //     $(this).children("input.edit").focus();
    // }

    // // Toggles complete status
    // function toggleComplete(event) {
    //     event.stopPropagation();
    //     var todo = $(this).parent().data("todo");
    //     todo.complete = !todo.complete;
    //     updateTodo(todo);
    // }

    // // This function starts updating a todo in the database if a user hits the "Enter Key"
    // // While in edit mode
    // function finishEdit(event) {
    //     var updatedTodo = $(this).data("todo");
    //     if (event.which === 13) {
    //         updatedTodo.text = $(this).children("input").val().trim();
    //         $(this).blur();
    //         updateTodo(updatedTodo);
    //     }
    // }

    // // This function updates a todo in our database
    // function updateTodo(todo) {
    //     $.ajax({
    //         method: "PUT",
    //         url: "/api/todos",
    //         data: todo
    //     }).then(getTodos);
    // }

    // // This function is called whenever a todo item is in edit mode and loses focus
    // // This cancels any edits being made
    // function cancelEdit() {
    //     var currentTodo = $(this).data("todo");
    //     if (currentTodo) {
    //         $(this).children().hide();
    //         $(this).children("input.edit").val(currentTodo.text);
    //         $(this).children("span").show();
    //         $(this).children("button").show();
    //     }
    // }

    // // This function constructs a todo-item row
    // function createNewRow(todo) {
    //     var $newInputRow = $(
    //         [
    //             "<li class='list-group-item todo-item'>",
    //             "<span>",
    //             todo.text,
    //             "</span>",
    //             "<input type='text' class='edit' style='display: none;'>",
    //             "<button class='delete btn btn-danger'>x</button>",
    //             "<button class='complete btn btn-primary'>✓</button>",
    //             "</li>"
    //         ].join("")
    //     );

    //     $newInputRow.find("button.delete").data("id", todo.id);
    //     $newInputRow.find("input.edit").css("display", "none");
    //     $newInputRow.data("todo", todo);
    //     if (todo.complete) {
    //         $newInputRow.find("span").css("text-decoration", "line-through");
    //     }
    //     return $newInputRow;
    // }

    // // This function inserts a new todo into our database and then updates the view
    // function insertTodo(event) {
    //     event.preventDefault();
    //     var todo = {
    //         text: $newItemInput.val().trim(),
    //         complete: false
    //     };

    //     $.post("/api/new", todo, getTodos);
    //     $newItemInput.val("");
    // }
});
