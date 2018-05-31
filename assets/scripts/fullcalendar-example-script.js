(function (eventsService){
    'use strict';

    function initPage() {
        $('#calendar').fullCalendar({
            // put your calendar options and callbacks here...
            // check fullcalendar documentation for more details
        });  
        
        // for this example, we're just getting a list of hard coded event objects...
        // if this was a real world example, we'd probably get the event objects from 
        // a REST endpoint, database, flat file, etc depending on the situation
        var events = eventsService.getEvents();

        for (var i = 0; i < events.length; i++) {
            var event = {
                id: i, 
                title: events[i].title, 
                start: events[i].start,
                end: events[i].end,
            };
            $('#calendar').fullCalendar('renderEvent', event, true);
        }
    }

    // will be called everytime the page loads, i.e. updating the displayed data
    initPage();
})(eventsService);