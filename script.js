
/*Project scroll*/
function scrollLeft() {
  const container = document.getElementById('scrollable-projects');
  if (container) {
    container.scrollBy({ left: -250, behavior: 'smooth' });
  }
}

function scrollRight() {
  const container = document.getElementById('scrollable-projects');
  if (container) {
    container.scrollBy({ left: 250, behavior: 'smooth' });
  }
}
/*Mail */
  document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent actual form submission

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;

    const subject = encodeURIComponent("New Message from Contact Form");
    const body = encodeURIComponent(
      `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\n\nComments / Questions:\n${comments}`
    );

    // Replace YOUR_EMAIL with your Gmail address
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=amdeeban@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailLink, "_blank");
  });


  function toggleMenu() {
  document.querySelector(".navbar").classList.toggle("active");
}




