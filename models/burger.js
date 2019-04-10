
var orm = require("../config/orm.js");

$(function() {

// attach handles to DOM

    $(".change-eat").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newBurgerType = {
            eat: newBurger
        };
// send PUT request
        $.ajax("/api/burger" + id, {
            type: "PUT",
            data: newBurgerType
        }).then(
            function() {
                console.log("change burger to", newBurger);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // preventDefault
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            eat: $("[name=eat]:checked").val().trim()

        };
// send post request
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger})
            .then(
                function() {
                    console.log("created new burger");
                    // reload the page
                    location.reload();
                }
            );
        });
            // send delete request
        $(".delete-burger").on("click", function(event) {
            var id = $(this).data("id");
// send delete request
            $.ajax("/api/burger/" + id, {
                type: "DELETE"
            }).then(
                function() {
                    console.log("deleted burger", id);
                    // reload page
                    location.reload();
              }
        );

    });
});



// export database
module.exports = burger;


