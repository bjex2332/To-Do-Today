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
console.log(day)
var timeSuffix = 'AM';
var date_raw = new Date();
var date = date_raw.getDate();
var month = date_raw.getMonth();
var year = date_raw.getFullYear();
var date_today = (month + 1) + '. ' + date + '. ' + year;
var day_date = day + ', ' + date_today;
var present_hr = d.getHours();
console.log("present hr:", present_hr)
const h2_todays_date = $("<h2 id='p_todays_date'>" + day_date + " </h2> <br> <br>")
h2_todays_date.attr("class", "cover-heading text-white font-italic font-weight-bold  ")

$("#jumbotron").append(h2_todays_date);

function match_color_bytime() {
    console.log('present hr', present_hr)

    $('textarea').each(function () {
        const schedule_hr = parseInt($(this).attr('id'));
        console.log('Schedule hr: ', schedule_hr, "Present_hr", present_hr)

        if (schedule_hr === present_hr) {
            $(this).addClass('present-color');
        }
        else if (schedule_hr > present_hr) {
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
        event_log = JSON.parse(localStorage.getItem('event_log')); debugger;
        $('.textarea').each(function (button_id) {
            $(this).val(event_log[button_id+1]); debugger;
        }); debugger;
    } else {
        event_log = {}; debugger;
        for (let i = 1; i <= 9; i++) {
            event_log[i] = "";
        } debugger;
        console.log(event_log)
        debugger;
    }
};

pull_local_data();

$('.btn').click(function (e) {

    e.preventDefault();

    var text_in_box = $(this).parent().prev().val();
    console.dir('dir', $(this).parent().prev())
    console.log('text in box:', text_in_box)
    debugger;
    var button_id = $(this).attr('id')
    debugger;
    console.log(button_id, text_in_box)
    debugger;
    event_log[button_id] = text_in_box
    debugger;

    localStorage.setItem('event_log', JSON.stringify(event_log));
    debugger;
    console.log(text_in_box, localStorage)
    debugger;

}); 