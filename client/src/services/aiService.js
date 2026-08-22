import api from './api';
import { aiMockResponses } from '../data/mockData';

const USE_MOCK = true;

export const aiService = {
  async askQuestion(question) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const match = aiMockResponses.find(
        (r) => r.question.toLowerCase().includes(question.toLowerCase()) ||
          question.toLowerCase().includes(r.question.toLowerCase())
      );
      if (match) return match;
      return {
        question,
        answer: `Great question! Let me explain "${question}" in simple terms. This is a mock response - the AI tutor will be connected to a real backend soon.`,
        simple: 'This is a simplified explanation placeholder.',
        example: 'Here is an example to help you understand better.',
      };
    }
    const { data } = await api.post('/ai/ask', { question });
    return data;
  },

  async getSuggestions() {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return ['Photosynthesis kya hota hai?', 'Newton\'s first law', 'What is gravity?'];
    }
    const { data } = await api.get('/ai/suggestions');
    return data;
  },
};