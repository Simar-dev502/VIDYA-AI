import api from './api';
import { studentProgress } from '../data/mockData';

const USE_MOCK = true;

export const progressService = {
  async getProgress() {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return studentProgress;
    }
    const { data } = await api.get('/progress');
    return data;
  },

  async updateLessonProgress(lessonId, completed) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return { success: true };
    }
    const { data } = await api.post('/progress/lesson', { lessonId, completed });
    return data;
  },
};