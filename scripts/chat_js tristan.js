var profile_pics = ["girl.jpg","man.JPG","boy.png","temp_prof.png"]
var sender_avatar = "./images/tristan_pic.jpg" // path to the sender's avater (aka the user)
var recipient_avatar = "" // path to the receiver's avatar (aka the person you're talking to)
var toggle = false;
$(document).on('keypress', 'form input[type="text"]', function(e) {
  if(e.which == 13) {
    e.preventDefault();
    return false;
  }
});
$(document).on('keyup', 'form input[type="text"]', function(e) {
  if(e.which == 13) {
    send_mes();
    return false;
  }
});

function send_mes(){
  var message = document.forms["message_input"]["message_text"].value;
  var current_history = document.getElementById("message_thread").innerHTML;
  var today = new Date();

  

  if(message != "" && message != " "){
    var divs = "<div class=\"row msg_container base_sent\">\
        <div class=\"col-10 col-padding\">\
        <div class=\"messenger_name\">\
              <p> <a href=\"user_profile.html\">\ Tristan Litre: </a>\ </p>\ <div class=\"messenger_date\">" + today + "</div>\
          </div>\
    <div class=\"messages msg_sent\">\
                <p id=\"sent_message\">" + message + "</p>\
            </div>\
        </div>\
        <div class=\"col-2 avatar\">\
            <img class=\"chat_img\" src=\"" + sender_avatar + "\" class=\" img-responsive \">\
          </div>\
        </div>";
    document.getElementById("message_thread").innerHTML = current_history + divs;
    document.forms["message_input"]["message_text"].value = "";
    console.log(message);
  }
}

function minimize(){
  var window = document.getElementById("chat_window_1");
  if(toggle){
    window.style.bottom = "0px";
    toggle = false;
  }
  else{
    window.style.bottom = "-345px";
    toggle = true;
  }
}
