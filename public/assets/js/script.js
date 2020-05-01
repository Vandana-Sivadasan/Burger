$( document ).ready(function() {
    console.log( "Document ready!" );

    $(".devour-burger").on("click", function(event) {
        console.log("Devour Burger Clicked!!!");
        console.log(event.target.value);

        var burgerId = event.target.value;

        $.ajax({
            method: "PUT",
            url: "/burger/" + burgerId
        }).then(function(data) {
            console.log(data);
            location.reload();
        })
    })
});