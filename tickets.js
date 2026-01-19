document.addEventListener("DOMContentLoaded", () => {
  const selectButtons = document.querySelectorAll(".select-ticket");
  const summaryTicket = document.getElementById("summary-ticket");
  const summaryPrice = document.getElementById("summary-price");
  const summaryTotal = document.getElementById("summary-total");
  const checkoutBtn = document.querySelector(".checkout-btn");

  let order = [];

  selectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const ticketOption = btn.closest(".ticket-option");
      const ticketName = ticketOption.querySelector("h3").textContent;
      const ticketPrice = parseFloat(ticketOption.dataset.price);

      order.push({ name: ticketName, price: ticketPrice });
      updateSummary();
    });
  });

  function updateSummary() {
    if (order.length === 0) {
      summaryTicket.innerHTML = "—";
      summaryPrice.textContent = "€0";
      summaryTotal.textContent = "€0";
      checkoutBtn.disabled = true;
      return;
    }

    const ticketCounts = {};
    order.forEach((t) => {
      if (!ticketCounts[t.name]) ticketCounts[t.name] = { count: 0, price: t.price };
      ticketCounts[t.name].count++;
    });

    summaryTicket.innerHTML = "";
    Object.keys(ticketCounts).forEach((name) => {
      const row = document.createElement("li");
      row.textContent = `${name} x${ticketCounts[name].count}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "−";
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.cursor = "pointer";
      removeBtn.addEventListener("click", () => {
        const index = order.findIndex(t => t.name === name);
        if (index !== -1) order.splice(index, 1);
        updateSummary();
      });

      row.appendChild(removeBtn);
      summaryTicket.appendChild(row);
    });

    const totalPrice = order.reduce((sum, t) => sum + t.price, 0);
    summaryPrice.textContent = `€${totalPrice}`;
    summaryTotal.textContent = `€${totalPrice}`;
    checkoutBtn.disabled = false;
  }

  checkoutBtn.addEventListener("click", () => {
    if (order.length === 0) return;

    const ticketList = order.map(t => t.name).join(", ");
    const totalPrice = order.reduce((sum, t) => sum + t.price, 0);

    alert(`Thank you for your purchase!\n\nTickets: ${ticketList}\nTotal: €${totalPrice}`);

    order = [];
    updateSummary();
  });
});

