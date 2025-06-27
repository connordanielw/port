// app/api/gpt/route.js

export async function POST(req) {
  const { messages, systemPrompt } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;


  if (!apiKey) {
    console.error('❌ OPENAI_API_KEY is missing');
    return new Response(JSON.stringify({ error: 'API key not found' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
body: JSON.stringify({
  model: 'gpt-3.5-turbo', 
  messages: [
    { role: 'system', content: systemPrompt },
    ...messages,
  ],
}),

    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ GPT API Error:', data);
    }

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('❌ GPT Fetch Error:', err);
    return new Response(JSON.stringify({ error: 'Fetch failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
