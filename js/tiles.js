$(document).ready(function() {
    $(".seat").click(function(event) {
        if($(this).hasClass('seatReserve'))
        {
            $(this).removeClass("seatReserve");
            removeRow(event.target.id);
            sumTickets();
            // alert("removeRow1");
        }
        else
        {
            $(this).addClass("seatReserve");
            addRow(event.target.id, $(event.target).text());
            sumTickets();
            // alert("event.target.id:"+event.target.id);
        }
    });
});
