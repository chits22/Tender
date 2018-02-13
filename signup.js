
function validateForm()
    {
     var a=document.forms["Form"]["user_name"].value;
        var b=document.forms["Form"]["user_email"].value;
        var c=document.forms["Form"]["user_password"].value;
        var d=document.forms["Form"]["user_password2"].value;

    if (c.length<=5){
        alert("Password too short, please enter one over 5 letters");
        return false;
    }
    if (c!=d)
    {
        alert("Passwords don't match :( Please try again!");
        return false;
    }
    if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="" )

        {
            alert("Please Fill All Required Fields");
            return false;
            
        }

    }

function validateForm2()
    {
     
    var a=document.forms["Forms"]["user_email"].value;
    var b=document.forms["Forms"]["user_password"].value;

    if (a==null || a=="",b==null || b=="")

        {
            alert("Please Fill All Required Fields");
            return false;
            
        }

    }

