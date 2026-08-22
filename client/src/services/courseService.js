import api from './api';
import { courses } from '../data/mockData';

const USE_MOCK = true;

export const courseService = {
  async getCourses() {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return courses;
    }
    const { data } = await api.get('/courses');
    return data;
  },

  async getCourseById(id) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return courses.find((c) => c.id === id) || null;
    }
    const { data } = await api.get(`/courses/${id}`);
    return data;
  },

  async getRecommended() {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return courses.filter((c) => c.progress < 50);
    }
    const { data } = await api.get('/courses/recommended');
    return data;
  },
};