import OpenAI from 'openai';
import { NVAPI_KEY } from '../data/constants';

const openai = new OpenAI({
  apiKey: NVAPI_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
  dangerouslyAllowBrowser: true,
});

/**
 * Sends a chat query to the NVIDIA model and returns the response as a string.
 * @param {string} query - The user's input message.
 * @param {object} options - Optional overrides for model parameters.
 * @returns {Promise<string>} The model's response.
 */
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