import api from './api';

// Mock mode flag - set to false when backend is ready
const USE_MOCK = true;

const mockLogin = async (email, password) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email && password) {
    return {
      _id: 'mock-user-1',
      name: 'Rahul Kumar',
      email,
      class: 8,
      preferredLanguage: 'Hindi',
      role: 'student',
      token: 'mock-jwt-token',
    };
  }
  throw new Error('Invalid credentials');
};

const mockRegister = async (userData) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    _id: 'mock-user-1',
    name: userData.name,
    email: userData.email,
    class: userData.class,
    preferredLanguage: userData.preferredLanguage,
    role: 'student',
    token: 'mock-jwt-token',
  };
};

export const authService = {
  async login(email, password) {
    if (USE_MOCK) return mockLogin(email, password);
    const { data } = await api.post('/auth/login', { email, password });
    return data;
  },

  async register(userData) {
    if (USE_MOCK) return mockRegister(userData);
    const { data } = await api.post('/auth/register', userData);
    return data;
  },

  async getProfile() {
    const { data } = await api.get('/auth/profile');
    return data;
  },

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};