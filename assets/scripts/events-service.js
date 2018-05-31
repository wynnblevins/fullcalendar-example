var eventsService = (function () {
    'use strict';

    return {
        getEvents: function () {
            var events = [
                {
                    id: 0, 
                    title: 'Timmy\'s Birthday Party', 
                    // setting the date for today so we can always see the date in the current month
                    start: moment().add(-1, 'days'),
                    end: moment().add(-1, 'days')
                },
                {
                    id: 1, 
                    title: 'Week long keg party for little Timmy', 
                    // setting the date for today so we can always see the date in the current month
                    start: moment().add(-4, 'days'),
                    end: moment().add(2, 'days'),
                }
            ];
            return events;
        }
    }
})();