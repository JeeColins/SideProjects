document.getElementById("rsvpForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const attendance = document.getElementById("attendance").value;
  if (!name || !attendance) {
    alert("Please complete all fields.");
    return;
  }
  alert(`Thank you ${name}! Your response has been recorded.`);
});
