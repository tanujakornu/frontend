document
  .getElementById("signupForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error");

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match!";
      return;
    }

    try {
      const response = await fetch("http://localhost:4500/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        errorMessage.textContent = data.msg || "Signup failed!";
      } else {
        alert("Signup successful! Please log in.");
        window.location.href = "login.html";
      }
    } catch (error) {
      errorMessage.textContent = "Something went wrong!";
    }
  });
