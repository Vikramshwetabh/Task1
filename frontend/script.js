document.addEventListener("DOMContentLoaded", () => {
  // Show only selected section
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sections.forEach(section => section.style.display = "none");
      const id = link.getAttribute("data-section");
      document.getElementById(id).style.display = "block";
    });
  });

  // Add static product list
  const productList = document.getElementById("product-list");
  for (let i = 1; i <= 20; i++) {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>Product ${i}</h3><p>This is a great product for daily use.</p>`;
    productList.appendChild(div);
  }

  // Simple form submission handler
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-response").innerText = "Thanks for contacting us!";
    e.target.reset();
  });
});