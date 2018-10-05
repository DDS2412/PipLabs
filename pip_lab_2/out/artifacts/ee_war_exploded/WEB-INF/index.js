function validate() {
    x = document.getElementById("x_value").value;
    if (isNaN(x) || x > 5 || x < -3) {
        alert("Wrong x!");
        return false;
    }
    y = document.getElementById("y_value").value;
    if (isNaN(y) || y < -5 || y > 3) {
        alert("Wrong y!");
        return false;
    }
    return true;
}