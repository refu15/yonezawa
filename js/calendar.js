document.addEventListener('DOMContentLoaded', function() ){
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ja',
        events: [
            {
                title: 'ナセBA',
                start: '2024-06-20',
                url: 'event1.html',
                backgroundColor: 'orange'
            },
            {
                title: 'コミセン',
                start: '2024-06-21',
                url: 'event2.html',
                backgroundColor: 'red'
            },
            {
                title: '市内中央',
                start: '2024-06-22',
                url: 'event3.html',
                backgroundColor: 'green'
            },
            {
                title: '上杉神社周辺',
                start: '2024-06-23',
                url: 'event4.html',
                backgroundColor: 'blue'
            },
            {
                title: '小野川温泉周辺',
                start: '2024-06-24',
                url: 'event5.html',
                backgroundColor: 'purple'
            }
        ],
        eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate

            if (info.event.url) {
                window.location.href = info.event.url;
            }
        }
    });

    calendar.render();
});
