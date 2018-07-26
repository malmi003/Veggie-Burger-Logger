// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // on click of devour button
    $(".devour").on("click", function (event) {
        let id = $(this).data("id");
        // let newDevoured = $(this).data("newDevoured");

        let newEatState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eat state", newEatState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger-input").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                // $("#burger-input").html("");
                location.reload();
            }
        );
    });
});