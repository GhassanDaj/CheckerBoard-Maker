/* 12n22w lab9 checkerboard */
window.onload = function drawTheCells() {
    //pre: none
    //post: draw a n by n checkerboard with the top-left cell in red; the
    //      alternate colour is black

    // TODO: write your JavaScript Code here ...
    // hint: use nested loop to drop each cell in the array, calling subfunctions accordingly. 
    var n = prompt("size of checkerboard? ");

    var red;
    
    for (var i = 0; i < n; i++) {
        if (i % 2 == 0) 
            red = true;
        else 
            red = false;

        
        for (var b = 0; b < n; b++) {
            if (red == true) 
                drawOneCell("red");
            else 
                drawOneCell("black");
            red = !red;   
        }
        drawNewLine(); 

    }

}


// You do NOT need to make any changes in the following function
// But, feel free to use this function is in your JavaScript code above.
function drawOneCell(color) {
    //pre: color in {"red", "black"}
    //post: add a button with colour "color" to the element with id #div1

    var newButton = document.createElement("button");
    $(newButton).attr("class", color);
    $("#div1").append(newButton);

}

function drawNewLine() {
    document.getElementById("div1").innerHTML += "<br>";
}