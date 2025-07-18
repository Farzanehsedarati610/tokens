async function getRoutingData(hash) {
  const config = await fetch('config.json').then(res => res.json());
  return config[hash] || null;
}

