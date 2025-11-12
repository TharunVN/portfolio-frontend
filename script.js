// Typing Effect
import cors from "cors";
app.use(cors({
  origin: "https://portfolio-frontend-gamma-nine.vercel.app", // your Vercel domain
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}))
const text = "Full Stack Developer | MERN Enthusiast";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Dark Mode Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Auto Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form Message
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

 const res = await fetch("https://tharun-portfolio-backend.onrender.com/api/message", 
{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await res.json();

  if (data.success) {
      alert("✅ Message sent and stored successfully!");
      e.target.reset();
    } else {
      alert("❌ Failed to send message. Try again.");
    }
  
});
