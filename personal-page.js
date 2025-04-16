const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.className = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}

/*toggleBtnIcon.addEventListener("mouseout", event => {
  dropDownMenu.style.display = "none";
})*/

/*document.getElementById("emailForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const response = await fetch("https://your-backend-api.com/send-email", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    alert("Email sent successfully!");
  } else {
    alert("Failed to send email.");
  }
});*/
