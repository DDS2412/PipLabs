function validate() {
    var fail = "";

    x = document.getElementById("x_value").value;
    if (isNaN(x) || x > 5 || x < -3) {
        fail = "Wrong x!\t";
    }
    y = document.getElementById("y_value").value;
    if (isNaN(y) || y < -5 || y > 3) {
        fail += "Wrong y!\t";
    }

    if(fail){
        var errorTr = document.getElementById('error');
        clearErrorText(errorTr);

        var h5 = document.createElement("h5");
        h5.setAttribute("class","error-text");
        h5.innerHTML = "<h5>"+fail+"<h5>";
        errorTr.appendChild(h5);
        return false;
    }

    var errorTr = document.getElementById('error');
    clearErrorText(errorTr);

    return true;
}

function clearErrorText(errorTr){
    while(errorTr.lastChild){
        errorTr.removeChild(errorTr.lastChild);
    }
}