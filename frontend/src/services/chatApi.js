export async function chatCompletion(query, options = {}) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, options }),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch chat completion');
  }
  const data = await response.json();
  return data.content || '';
} 