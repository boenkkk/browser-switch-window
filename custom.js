// Declare variables for the windows
var myWindow = null;
var myWindowb = null;
var myWindowc = null;

// localStorage.setItem("window", "myWindow");
// console.log(localStorage.getItem("window"));

// Handler for the first button
$("#btna").click(function(){
    // Check if the window is already open
    if (myWindow && !myWindow.closed) {
        // Focus the window
        myWindow.focus();
        // localStorage.setItem("window", "myWindow");
    } else {
        // Open the window if it's not open or closed
        myWindow = window.open("/winda.html", "myWindow", "width=800,height=600");
        // localStorage.setItem("window", "myWindow");
    }
});

// Handler for the second button
$("#btnb").click(function(){
    // Check if the window is already open
    if (myWindowb && !myWindowb.closed) {
        // Focus the window
        myWindowb.focus();
        localStorage.setItem("window", "myWindowb");
    } else {
        // Open the window if it's not open or closed
        myWindowb = window.open("/windb.html", "myWindowb", "width=800,height=600");
        // localStorage.setItem("window", "myWindowb");
    }
    
});

// Handler for the second button
$("#btnc").click(function(){
    // Check if the window is already open
    if (myWindowc && !myWindowc.closed) {
        // Focus the window
        myWindowb.focus();
        localStorage.setItem("window", "myWindowc");
    } else {
        // Open the window if it's not open or closed
        myWindowc = window.open("/windc.html", "myWindowc", "width=800,height=600");
        localStorage.setItem("window", "myWindowc");
    }
    
});

console.log(myWindow)
console.log(myWindowb)
console.log(myWindowc)