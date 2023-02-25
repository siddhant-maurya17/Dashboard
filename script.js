const button = document.getElementById("btn");
const table = document.getElementById("table");

let rowCount = 0;

// Add an event listener to the button
button.addEventListener("click", function() {
  // Create a new row
  const row = table.insertRow();

  // Increment the row count and generate an ID
  rowCount++;
  const id =rowCount;

  // Insert cells into the row
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  const cell4 = row.insertCell();
  const cell5 = row.insertCell();
  const cell6 = row.insertCell();
  const cell7 = row.insertCell();

  // Add input fields to the cells
  cell1.innerHTML = id;
  cell2.innerHTML = "<input type='text' required>";
  cell3.innerHTML = "<input type='text' required>";
  cell4.innerHTML = "<input type='text' required>";
  cell5.innerHTML = "<input type='number' min='0' required>";
  cell6.innerHTML = "<input type='text' required>";
  cell7.innerHTML = "<button class='save-btn'>Save</button>";

  // Add a click event listener to the "Save" button
  const saveButton = cell7.querySelector("button");
  saveButton.addEventListener("click", function() {
    // Get the values of the input fields
    const name = cell2.querySelector("input").value;
    const roll = cell3.querySelector("input").value;
    const subject = cell4.querySelector("input").value;
    const marks = cell5.querySelector("input").value;
    const marked = cell6.querySelector("input").value; 

    if (name.trim() === "" || roll.trim() === "" || subject.trim() === "" || marks.trim() === "" || marked.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }

    // Update the cells with the input values
    cell2.innerHTML = name;
    cell3.innerHTML = roll;
    cell4.innerHTML = subject;
    cell5.innerHTML = marks;
    cell6.innerHTML = marked.toLowerCase().replace(/\s/g, '') + '@gmail.com';
    cell7.innerHTML = "<button class='save-btn'>Save</button>";
  })
});
