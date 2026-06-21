// Get all DOM elements
const form = document.getElementById("checkInForm");
const nameinput = document.getElementById("attendeeName");
const teamselect = document.getElementById("teamSelect");

// track attendance 
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Get form values 
  const name = nameinput.value;
  const team = teamSelect.value;
  const teamName = teamselect.selectedOptions[0].text;

  console.log(name, teamName)

  // Increment count
  count++;
  console.log("Total check-ins: ", count);

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100)+ "%";
  console.log(`progress: ${percentage}`);

  //update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

 // show welcome message 
 const message = `✨Welcome, ${name} from ${teamName}`
 console.log(message);

 form.reset();
});