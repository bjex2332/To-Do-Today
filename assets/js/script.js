var event_log;
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var d = new Date();
var day = weekday[d.getDay()];
console.log(day)

var timeSuffix = 'AM'; 
var date_raw = new Date();
var date = date_raw.getDate(); 
var month = date_raw.getMonth(); 
var year = date_raw.getFullYear(); 
var hour = date_raw.getHours();
    if (hour > 12) {
        (hour = hour - 12)
    };
    if (hour > 12) {
        (timeSuffix = 'PM')
    };

var minutes = date_raw.getMinutes();

var date_today=(month+1) + '. ' + date + '. ' + year + ' and the time is ' + hour + ':' + minutes + ' ' + timeSuffix;
var day_date='Welcome, Today is '+day+', '+date_today;


var present_hr= d.getHours();
console.log("present hr:", present_hr) 




const h2_todays_date=$("<h2 id='p_todays_date'>"+day_date+" </h2> <br> <br>")
h2_todays_date.attr("class", "cover-heading text-white font-italic font-weight-bold  ")

$("#jumbotron").append(h2_todays_date);






function match_color_bytime (){

console.log('present hr', present_hr)




$('textarea').each(function(){

    const schedule_hr=parseInt($(this).attr('id'));
    console.log('Schedule hr: ', schedule_hr ,"Present_hr", present_hr) 

    if (schedule_hr===present_hr){

    $(this).addClass('present-teal');
    
    }

    else if (schedule_hr>present_hr) {
    
    $(this).addClass('future-pink');
    }

    else {
        $(this).addClass('past-blue')
    }


});

}; 

match_color_bytime()








function pull_local_data(){

    if (localStorage.getItem('event_log') !== null) {

       

     event_log=JSON.parse(localStorage.getItem('event_log'));
     

      $('.textarea').each(function (button_id){


                $(this).val(event_log[button_id]);
 
             
                }); 
    } else {
        
        event_log={};
        
        for (let i=1;i<=9;i++){
        event_log[i]="";
        }
        console.log(event_log)

    }

};


pull_local_data();






$('.btn').click(function (e){

e.preventDefault();

var text_in_box = $(this).parent().prev().val();
console.dir('dir',$(this).parent().prev())
console.log('text in box:', text_in_box)

var button_id=$(this).attr('id')
console.log(button_id, text_in_box)



event_log[button_id]=text_in_box


localStorage.setItem('event_log', JSON.stringify(event_log));
console.log( text_in_box, localStorage)


});