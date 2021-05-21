function tell() {
 
    var num = 0;
    var status = true;
 
    num = Number(document.getElementById("number_input").value);
 
    if (num == 1) {
        document.getElementById("status").innerHTML = "1 is neither composite nor prime!"
    }
 
    else if (num > 1) {
 
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                status = false;
                break;
            }
        }
        if (status == false) {
            document.getElementById("status").innerHTML = num + " is a composite number"
        }
        else {
            document.getElementById("status").innerHTML = num + " is a prime number"
        }
    }
}

function navigate(){
    window.location = "list.html";
}

