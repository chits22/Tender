
var upper = "low";
var lower = "low";

document.getElementById("lowest_skill").onchange = function(){
  if(this.value == "low"){
  //  document.getElementById("oneForm").action = "./low_home.html";
  lower = "low";
  }
  else if(this.value == "mid"){
    lower = "mid";
  }
  else if(this.value == "high"){
    lower = "high";
  }
}

document.getElementById("highest_skill").onchange = function(){
  if(this.value == "low"){

  upper = "low";
  }
  else if(this.value == "mid"){
    upper = "mid";
  }
  else if(this.value == "high"){
    upper = "high";
  }
}

function changeAction(){
  var url = "./home.html";
  if(lower == "low" && upper == "low"){
    url = "./low_home.html";
  }
  else if(lower == "low" && upper == "mid"){
    url = "./low_mid_home.html";
  }
  else if(lower == "low" && upper == "high"){
    url = "./home.html";
  }
  else if(lower == "mid" && upper == "mid"){
    url = "./mid_home.html";
  }
  else if(lower == "mid" && upper == "high"){
    url = "./mid_high_home.html";
  }
  else if(lower == "high" && upper == "high"){
    url = "./high_home.html";
  }
  else{
    alert("Lower bound must be lower than upper bound");
    return;
  }
  document.getElementById("oneForm").action = url;

}
