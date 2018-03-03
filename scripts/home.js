var wind = document.getElementById("chat_window");

function chat_pop(){
  if(toggle){
    wind.style.opacity = 0;
    toggle = false;
  }
  else{
    wind.style.opacity = 1
    toggle = true;
  }
}

function chat_show(){
  wind.style.opacity = 1;
  toggle = true;
  console.log("clicked");
}

function chat_hide(){
  wind.style.opacity = 0;
  toggle = false;
  console.log("clicked again");
}
