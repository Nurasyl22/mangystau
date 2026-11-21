document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const filters = document.querySelectorAll(".filter");
  const destinations = document.querySelectorAll(".destination");
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    destinations.forEach(card => card.hidden = category !== "all" && card.dataset.category !== category);
  }));

  const params = new URLSearchParams(location.search);
  const requestedTour = params.get("tour");
  const select = document.getElementById("tourSelect");
  if (requestedTour && select) {
    const option = [...select.options].find(item => item.text.toLowerCase().includes(requestedTour.toLowerCase()));
    if (option) select.value = option.value || option.text;
  }

  const form = document.getElementById("bookingForm");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const message = `Сәлеметсіз бе! Мен ${data.get("tour")} турына өтінім қалдырғым келеді.\nАты: ${data.get("name")}\nБайланыс: ${data.get("contact")}\nАдам саны: ${data.get("people")}\nҚосымша: ${data.get("message") || "Жоқ"}`;
    const output = document.getElementById("formMessage");
    output.textContent = "Өтінім мәтіні дайын. Нақты жіберу үшін WhatsApp/сервер интеграциясын қосу қажет.";
    output.classList.add("success");
    const url = "https://wa.me/?text=" + encodeURIComponent(message);
    const link = document.createElement("a");
    link.href = url; link.target = "_blank"; link.rel = "noopener";
    link.className = "text-link"; link.textContent = "WhatsApp арқылы жіберу ↗";
    output.after(link);
  });
});