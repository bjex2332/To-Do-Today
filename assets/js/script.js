var event_log;
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var d = new Date();
var day = weekday[d.getDay()];



var timeSuffix = 'AM';
var date_raw = new Date();
var date = date_raw.getDate();
var month = date_raw.getMonth();
if (month === 0) {
   month = 'January';
    }
else if (month === 1) {
    month = 'Febrary';
}
else if (month === 2) {
    month = 'March';
}
else if (month === 3) {
    month = 'April';
}
else if (month === 4) {
    month = 'May';
}
else if (month === 5) {
    month = 'June';
}
else if (month === 6) {
    month = 'July';
}
else if (month === 7) {
    month = 'August';
}
else if (month === 8) {
    month = 'September';
}
else if (month === 9) {
    month = 'October';
}
else if (month === 10) {
    month = 'November';
}
else if (month === 11) {
    month = 'December';
}


var year = date_raw.getFullYear();
var date_today = month + ' ' + date + ', ' + year;
var day_date = day + ', ' + date_today;
var current_hr = d.getHours();
const h2_todays_date = $("<h2 id='p_todays_date'>" + day_date + " </h2> <br> <br>")
h2_todays_date.attr("class", "cover-heading text-white font-italic font-weight-bold  ")

$("#jumbotron").append(h2_todays_date);

function match_color_bytime() {
    

    $('textarea').each(function () {
        const schedule_hr = parseInt($(this).attr('id'));
       

        if (schedule_hr === current_hr) {
            $(this).addClass('current-color');
        }
        else if (schedule_hr > current_hr) {
            $(this).addClass('future-color');
        }
        else {
            $(this).addClass('past-color')
        }
    });

};

match_color_bytime()

function pull_local_data() {
    if (localStorage.getItem('event_log') !== null) {
        event_log = JSON.parse(localStorage.getItem('event_log')); 
        $('.textarea').each(function (button_id) {
            $(this).val(event_log[button_id+1]); 
        }); 
    } else {
        event_log = {}; 
        for (let i = 1; i <= 9; i++) {
            event_log[i] = "";
        } 
                
    }
};

pull_local_data();

$('.btn').click(function (e) {
    e.preventDefault();

    var text_in_box = $(this).parent().prev().val();
    var button_id = $(this).attr('id')
    event_log[button_id] = text_in_box
    localStorage.setItem('event_log', JSON.stringify(event_log));
    
    
}); 