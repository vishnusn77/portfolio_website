const fetch = require('node-fetch');

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

exports.handler = async (event) => {
  const key = 'portfolio_likes';

  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing Upstash credentials' }),
    };
  }

  if (event.httpMethod === 'GET') {
    const res = await fetch(`${UPSTASH_REDIS_REST_URL}/get/${key}`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
      },
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ count: parseInt(data.result) || 0 }),
    };
  }

  if (event.httpMethod === 'POST') {
    const res = await fetch(`${UPSTASH_REDIS_REST_URL}/incr/${key}`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
      },
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ count: data.result }),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
};
