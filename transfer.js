async function triggerTransfer() {
  const hash = document.getElementById('hashSelector').value;
  const routing = await getRoutingData(hash);

  if (!routing) {
    alert("Invalid symbolic hash.");
    return;
  }

  const response = await fetch(routing.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hash })
  });

  const result = await response.json();
  alert("Transfer status: " + result.status + " | ID: " + result.id);
}

