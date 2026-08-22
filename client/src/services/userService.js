import api from './api';

const USE_MOCK = true;

export const userService = {
  async getProfile() {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return {
        name: 'Rahul Kumar',
        email: 'rahul@gmail.com',
        class: 8,
        preferredLanguage: 'Hindi',
        role: 'student',
      };
    }
    const { data } = await api.get('/auth/profile');
    return data;
  },

  async updateProfile(profileData) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { ...profileData, success: true };
    }
    const { data } = await api.put('/auth/profile', profileData);
    return data;
  },
};