var isPrime;

function tell(){
    var firstNum, endNum;

    firstNum = document.getElementById("from_input").value;
    endNum = document.getElementById("to_input").value;

    document.getElementById("display").innerHTML = "";

    for(var i = firstNum; i <= endNum; i++){
        isPrime = 1;

        for(var j = 2; j < i; j++){
            if(i % j == 0){
                isPrime = 0;
                break;
            }
        }

        if(isPrime == 1){
            document.getElementById("display").innerHTML += i + "<br>";
        }
    }
}

function navigate(){
    window.location = "index.html";
}