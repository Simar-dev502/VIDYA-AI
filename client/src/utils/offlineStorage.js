// Offline storage abstraction - will be connected to IndexedDB later
// Currently uses localStorage as a simple implementation

const STORAGE_KEYS = {
  lessons: 'vidyaai_lessons',
  quizzes: 'vidyaai_quizzes',
  progress: 'vidyaai_progress',
  pendingSync: 'vidyaai_pending_sync',
};

const getStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const setStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const offlineStorage = {
  // Lessons
  saveLesson(lesson) {
    const lessons = getStorage(STORAGE_KEYS.lessons);
    const index = lessons.findIndex((l) => l.id === lesson.id);
    if (index >= 0) {
      lessons[index] = lesson;
    } else {
      lessons.push(lesson);
    }
    return setStorage(STORAGE_KEYS.lessons, lessons);
  },

  getLesson(lessonId) {
    const lessons = getStorage(STORAGE_KEYS.lessons);
    return lessons.find((l) => l.id === lessonId) || null;
  },

  getLessons() {
    return getStorage(STORAGE_KEYS.lessons);
  },

  removeLesson(lessonId) {
    const lessons = getStorage(STORAGE_KEYS.lessons);
    const filtered = lessons.filter((l) => l.id !== lessonId);
    return setStorage(STORAGE_KEYS.lessons, filtered);
  },

  // Quizzes
  saveQuiz(quiz) {
    const quizzes = getStorage(STORAGE_KEYS.quizzes);
    const index = quizzes.findIndex((q) => q.id === quiz.id);
    if (index >= 0) {
      quizzes[index] = quiz;
    } else {
      quizzes.push(quiz);
    }
    return setStorage(STORAGE_KEYS.quizzes, quizzes);
  },

  getQuiz(quizId) {
    const quizzes = getStorage(STORAGE_KEYS.quizzes);
    return quizzes.find((q) => q.id === quizId) || null;
  },

  // Progress
  saveProgress(progress) {
    return setStorage(STORAGE_KEYS.progress, progress);
  },

  getProgress() {
    return getStorage(STORAGE_KEYS.progress);
  },

  // Pending sync
  addPendingSync(action) {
    const pending = getStorage(STORAGE_KEYS.pendingSync);
    pending.push({ ...action, timestamp: Date.now() });
    return setStorage(STORAGE_KEYS.pendingSync, pending);
  },

  getPendingSync() {
    return getStorage(STORAGE_KEYS.pendingSync);
  },

  clearPendingSync() {
    return setStorage(STORAGE_KEYS.pendingSync, []);
  },

  // Connectivity
  isOnline() {
    return navigator.onLine;
  },
};