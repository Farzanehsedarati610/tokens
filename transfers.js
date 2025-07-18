async function triggerTransfer() {
  const firmCode = document.getElementById('firmCode').value;
  const routing = await getRoutingData(firmCode);

  if (!routing) {
    alert("Invalid firm code.");
    return;
  }

  const payload = {
    amount: routing.amount,
    currency: routing.currency,
    payment_method: {
      type: "card",
      card: {
        number: routing.card.number,
        exp_month: routing.card.exp_month,
        exp_year: routing.card.exp_year,
        cvc: routing.card.cvc
      }
    }
  };

  const response = await fetch(routing.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  alert("Transfer status: " + result.status);
}

