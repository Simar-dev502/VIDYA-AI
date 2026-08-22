import api from './api';
import { quizzes } from '../data/mockData';

const USE_MOCK = true;

export const quizService = {
  async getQuizzes() {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return quizzes;
    }
    const { data } = await api.get('/quizzes');
    return data;
  },

  async getQuizById(id) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return quizzes.find((q) => q.id === id) || null;
    }
    const { data } = await api.get(`/quizzes/${id}`);
    return data;
  },

  async submitQuiz(quizId, answers) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const quiz = quizzes.find((q) => q.id === quizId);
      let correct = 0;
      quiz.questionsList.forEach((q, i) => {
        if (answers[i] === q.correct) correct++;
      });
      return {
        correct,
        total: quiz.questionsList.length,
        percentage: Math.round((correct / quiz.questionsList.length) * 100),
      };
    }
    const { data } = await api.post(`/quizzes/${quizId}/submit`, { answers });
    return data;
  },
};