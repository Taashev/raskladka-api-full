function checkResponse(res) {
  if (res.ok) return res.json();

  return res.json().then((res) => {
    throw new Error(res);
  });
}

export async function getHistory() {
  const res = await fetch('http://localhost:8000/api/history');
  return checkResponse(res);
}

export async function setText(data) {
  const res = await fetch('http://localhost:8000/api/text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return checkResponse(res);
}
