/*
Name: Ryan Politis
Email: Ryan_Politis@student.uml.edu
File: mult_table.js
Date: 11/12/23
GUI Assignment: Implement a multiplication table using forms and javascript
What the file does: Clears exisiting table, grabs inputs, checks for invalid inputs, then makes a dynamic multiplication table
*/

// Main driver of the program
function mult_table() {
    document.getElementById("multi_table").innerHTML = "";            // Clears the multiplication table to allow it to be regenerated
  
    var min_x = document.getElementById("min_x").value;               // Gets the minimum x-value from the first input
    var max_x = document.getElementById("max_x").value;               // Gets the maximum x-value from the second input
    
    var min_y = document.getElementById("min_y").value;               // Gets the minimum y-value from the third input
    var max_y = document.getElementById("max_y").value;               // Gets the maximum y-value from the fourth input
  
    var error_detect;                                                 // Variable that keeps track if an error is detected
  
    // Input checker that takes all values received from inputs and their respective error locations
    // Returns false if no errors are detected or true if errors are detected
    error_detect = check_input(min_x, max_x, min_y, max_y, "error1", "error2", "error3", "error4");
  
    if (error_detect == false) {                                      // If no errors are detected, then generate a multiplication table
      generateTable(min_x, max_x, min_y, max_y);
    }
  }
  
  // Function to check given form inputs
  // Takes all values recieved from inputs and their respective error locations
  function check_input(min_x, max_x, min_y, max_y, error1, error2, error3, error4) {
    err_msg1 = document.getElementById(error1);                       // Grab location of min_x errors
    err_msg1.innerHTML = "";                                          // Make it empty if it wasn't already
    err_msg2 = document.getElementById(error2);                       // Grab location of max_x errors
    err_msg2.innerHTML = "";                                          // Make it empty if it wasn't already
    err_msg3 = document.getElementById(error3);                       // Grab location of min_y errors
    err_msg3.innerHTML = "";                                          // Make it empty if it wasn't already
    err_msg4 = document.getElementById(error4);                       // Grab location of max_y errors
    err_msg4.innerHTML = "";                                          // Make it empty if it wasn't already
  
    // Error detectors for respective inputs
    var error_detect1 = false;
    var error_detect2 = false;
    var error_detect3 = false;
    var error_detect4 = false;
  
    // Test whether min_x is empty, not a number, less than -50, greater than 50, or greater than max_x
    // Display error message and set first error dector to true if an error is detected
    try { 
      if(min_x.trim() == "") throw "empty!";
      if(isNaN(min_x)) throw "not a number!";
      if(min_x < -50) throw "too low!";
      if(min_x > 50) throw "too high!";
      if(Number(min_x) > Number(max_x)) throw "greater than maximum!"
    }
    catch(err1) {
      err_msg1.innerHTML = "Input is " + err1;
      error_detect1 = true;
    }
  
    // Test whether max_x is empty, not a number, less than -50, greater than 50, or less than than min_x
    // Display error message and set second error dector to true if an error is detected
    try { 
      if(max_x.trim() == "") throw "empty!";
      if(isNaN(max_x)) throw "not a number!";
      if(max_x < -50) throw "too low!";
      if(max_x > 50) throw "too high!";
      if(Number(max_x) < Number(min_x)) throw "less than minimum!"
    }
    catch(err2) {
      err_msg2.innerHTML = "Input is " + err2;
      error_detect2 = true;
    }
  
    // Test whether min_y is empty, not a number, less than -50, greater than 50, or greater than max_y
    // Display error message and set third error dector to true if an error is detected
    try { 
      if(min_y.trim() == "") throw "empty!";
      if(isNaN(min_y)) throw "not a number!";
      if(min_y < -50) throw "too low!";
      if(min_y > 50) throw "too high!";
      if(Number(min_y) > Number(max_y)) throw "greater than maximum!"
    }
    catch(err3) {
      err_msg3.innerHTML = "Input is " + err3;
      error_detect3 = true;
    }
  
    // Test whether max_y is empty, not a number, less than -50, greater than 50, or less than than min_y
    // Display error message and set fourth error dector to true if an error is detected
    try { 
      if(max_y.trim() == "") throw "empty!";
      if(isNaN(max_y)) throw "not a number!";
      if(max_y < -50) throw "too low!";
      if(max_y > 50) throw "too high!";
      if(Number(max_y) < Number(min_y)) throw "less than minimum!"
    }
    catch(err4) {
      err_msg4.innerHTML = "Input is " + err4;
      error_detect4 = true;
    }
  
    // If any errors are detected, return true. Otherwise, return false
    if(error_detect1 == true || error_detect2 == true || error_detect3 == true || error_detect4 == true) {
      return true;
    }
    return false;
  }
  
  function generateTable(min_x, max_x, min_y, max_y) {
    var table = document.getElementById('multi_table');               // Grab the multiplication table and put it inside a table variable
  
    var header_row = table.insertRow();                               // Insert a row for the header of the muliplication table
    header_row.insertCell();                                          // Insert an empty cell in the top left corner
  
    // Main multiplication table loops
    for (var i = min_x; i <= max_x; i++) {                            // Loop to insert column cells into the header row
      var cell = header_row.insertCell();
      cell.textContent = i;                                           // Insert content of cells; numbers should be from minimum x-values to maximum x-values
    }
  
    for (var j = min_y; j <= max_y; j++) {                            // Loop to insert rows of the multiplication table
      var new_row = table.insertRow();
  
      var row_header_cell = new_row.insertCell();                     // Create header row in first column of table
      row_header_cell.textContent = j;                                // Insert content of header row in first column
  
      for (var k = min_x; k <= max_x; k++) {                          // Loop to input multiplication table content
        var cell = new_row.insertCell();                              // Insert cells
        cell.textContent = j * k;                                     // Multiply and insert the content into the cells of table
      }
    }
  }
