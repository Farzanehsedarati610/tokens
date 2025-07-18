async function getRoutingData(firmCode) {
  const config = await fetch('config.json').then(res => res.json());
  return config[firmCode] || null;
}

