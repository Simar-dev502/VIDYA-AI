// Mock data for VidyaAI - to be replaced with backend API calls

export const subjects = [
  { id: 'math', name: 'Mathematics', icon: '📐', color: 'bg-blue-100 text-blue-700' },
  { id: 'science', name: 'Science', icon: '🔬', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'english', name: 'English', icon: '📖', color: 'bg-purple-100 text-purple-700' },
  { id: 'social', name: 'Social Science', icon: '🌍', color: 'bg-amber-100 text-amber-700' },
];

export const classes = [
  { id: 6, label: 'Class 6' },
  { id: 7, label: 'Class 7' },
  { id: 8, label: 'Class 8' },
  { id: 9, label: 'Class 9' },
  { id: 10, label: 'Class 10' },
  { id: 11, label: 'Class 11' },
  { id: 12, label: 'Class 12' },
];

export const languages = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'हिंदी', native: 'Hindi' },
];

export const courses = [
  {
    id: 'science-8',
    title: 'Science',
    subject: 'science',
    class: 8,
    chapters: 12,
    lessons: 8,
    completedLessons: 5,
    progress: 65,
    difficulty: 'Medium',
    language: 'en',
    description: 'Learn about the world around you - from plants to physics.',
    chaptersList: [
      {
        id: 'ch1',
        title: 'Crop Production',
        lessons: [
          { id: 'l1', title: 'Introduction', completed: true, duration: '10 min' },
          { id: 'l2', title: 'Types of Crops', completed: true, duration: '12 min' },
          { id: 'l3', title: 'Agricultural Practices', completed: false, duration: '15 min' },
          { id: 'l4', title: 'Quiz', completed: false, duration: '10 min' },
        ],
      },
      {
        id: 'ch2',
        title: 'Microorganisms',
        lessons: [
          { id: 'l5', title: 'What are Microorganisms?', completed: true, duration: '10 min' },
          { id: 'l6', title: 'Friendly Microorganisms', completed: false, duration: '12 min' },
          { id: 'l7', title: 'Harmful Microorganisms', completed: false, duration: '14 min' },
        ],
      },
      {
        id: 'ch3',
        title: 'Force and Pressure',
        lessons: [
          { id: 'l8', title: 'What is Force?', completed: false, duration: '12 min' },
          { id: 'l9', title: 'Types of Forces', completed: false, duration: '15 min' },
          { id: 'l10', title: 'Pressure', completed: false, duration: '13 min' },
        ],
      },
    ],
  },
  {
    id: 'math-8',
    title: 'Mathematics',
    subject: 'math',
    class: 8,
    chapters: 10,
    lessons: 12,
    completedLessons: 8,
    progress: 68,
    difficulty: 'Medium',
    language: 'en',
    description: 'Master numbers, algebra, and geometry step by step.',
    chaptersList: [
      {
        id: 'mch1',
        title: 'Rational Numbers',
        lessons: [
          { id: 'ml1', title: 'Introduction to Rational Numbers', completed: true, duration: '10 min' },
          { id: 'ml2', title: 'Properties of Rational Numbers', completed: true, duration: '12 min' },
          { id: 'ml3', title: 'Quiz', completed: false, duration: '10 min' },
        ],
      },
      {
        id: 'mch2',
        title: 'Algebra Basics',
        lessons: [
          { id: 'ml4', title: 'Variables and Expressions', completed: true, duration: '12 min' },
          { id: 'ml5', title: 'Linear Equations', completed: false, duration: '15 min' },
        ],
      },
    ],
  },
  {
    id: 'english-8',
    title: 'English',
    subject: 'english',
    class: 8,
    chapters: 8,
    lessons: 10,
    completedLessons: 6,
    progress: 60,
    difficulty: 'Easy',
    language: 'en',
    description: 'Improve your reading, writing, and speaking skills.',
    chaptersList: [
      {
        id: 'ech1',
        title: 'Grammar Basics',
        lessons: [
          { id: 'el1', title: 'Nouns and Pronouns', completed: true, duration: '10 min' },
          { id: 'el2', title: 'Verbs and Tenses', completed: true, duration: '12 min' },
          { id: 'el3', title: 'Quiz', completed: false, duration: '10 min' },
        ],
      },
    ],
  },
  {
    id: 'physics-8',
    title: 'Physics',
    subject: 'science',
    class: 8,
    chapters: 6,
    lessons: 8,
    completedLessons: 3,
    progress: 45,
    difficulty: 'Hard',
    language: 'en',
    description: 'Understand the fundamental laws that govern our universe.',
    chaptersList: [
      {
        id: 'pch1',
        title: 'Force and Motion',
        lessons: [
          { id: 'pl1', title: 'Newton\'s Laws', completed: false, duration: '15 min' },
          { id: 'pl2', title: 'Force & Motion Basics', completed: false, duration: '12 min' },
          { id: 'pl3', title: 'Physics Practice Quiz', completed: false, duration: '10 min' },
        ],
      },
    ],
  },
];

export const quizzes = [
  {
    id: 'quiz-physics-1',
    title: 'Physics Basics',
    subject: 'Physics',
    class: 8,
    questions: 10,
    duration: 15,
    difficulty: 'Medium',
    questionsList: [
      {
        id: 'q1',
        question: 'Which force pulls objects toward Earth?',
        options: ['Friction', 'Gravity', 'Magnetic Force', 'Applied Force'],
        correct: 1,
      },
      {
        id: 'q2',
        question: 'What is the SI unit of force?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correct: 1,
      },
      {
        id: 'q3',
        question: 'Newton\'s first law is also known as:',
        options: ['Law of Inertia', 'Law of Acceleration', 'Law of Action-Reaction', 'Law of Gravity'],
        correct: 0,
      },
      {
        id: 'q4',
        question: 'Which of these is a contact force?',
        options: ['Gravity', 'Magnetism', 'Friction', 'Electrostatic force'],
        correct: 2,
      },
      {
        id: 'q5',
        question: 'What happens to an object at rest when no force acts on it?',
        options: ['It moves', 'It stays at rest', 'It accelerates', 'It disappears'],
        correct: 1,
      },
      {
        id: 'q6',
        question: 'The force that opposes motion is called:',
        options: ['Gravity', 'Friction', 'Tension', 'Normal force'],
        correct: 1,
      },
      {
        id: 'q7',
        question: 'What is acceleration?',
        options: ['Speed', 'Rate of change of velocity', 'Distance', 'Force'],
        correct: 1,
      },
      {
        id: 'q8',
        question: 'Which law states "For every action, there is an equal and opposite reaction"?',
        options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravity'],
        correct: 2,
      },
      {
        id: 'q9',
        question: 'What is the formula for force?',
        options: ['F = ma', 'F = mv', 'F = m/a', 'F = a/m'],
        correct: 0,
      },
      {
        id: 'q10',
        question: 'Which of these is a non-contact force?',
        options: ['Friction', 'Tension', 'Gravity', 'Air resistance'],
        correct: 2,
      },
    ],
  },
  {
    id: 'quiz-math-1',
    title: 'Algebra Basics',
    subject: 'Mathematics',
    class: 8,
    questions: 8,
    duration: 12,
    difficulty: 'Easy',
    questionsList: [
      {
        id: 'mq1',
        question: 'What is the value of x in x + 5 = 12?',
        options: ['5', '7', '12', '17'],
        correct: 1,
      },
      {
        id: 'mq2',
        question: 'Simplify: 3x + 2x',
        options: ['5x', '6x', '5x²', '6x²'],
        correct: 0,
      },
      {
        id: 'mq3',
        question: 'What is a variable?',
        options: ['A fixed number', 'A symbol for an unknown value', 'An equation', 'A constant'],
        correct: 1,
      },
      {
        id: 'mq4',
        question: 'Solve: 2x = 10',
        options: ['x = 2', 'x = 5', 'x = 10', 'x = 20'],
        correct: 1,
      },
      {
        id: 'mq5',
        question: 'What is the coefficient in 7x?',
        options: ['7', 'x', '7x', '1'],
        correct: 0,
      },
      {
        id: 'mq6',
        question: 'Simplify: 4y - 2y',
        options: ['2y', '6y', '2', 'y'],
        correct: 0,
      },
      {
        id: 'mq7',
        question: 'What is an expression?',
        options: ['An equation with =', 'A combination of terms', 'A single number', 'A variable'],
        correct: 1,
      },
      {
        id: 'mq8',
        question: 'Solve: x/3 = 6',
        options: ['x = 2', 'x = 3', 'x = 18', 'x = 6'],
        correct: 2,
      },
    ],
  },
];

export const studentProgress = {
  overall: 68,
  lessonsCompleted: 24,
  totalLessons: 35,
  subjects: [
    { name: 'Mathematics', score: 82, color: 'bg-blue-500' },
    { name: 'Science', score: 76, color: 'bg-emerald-500' },
    { name: 'English', score: 68, color: 'bg-purple-500' },
    { name: 'Physics', score: 45, color: 'bg-amber-500' },
  ],
  weakAreas: [
    { subject: 'Physics', topic: 'Force and Motion' },
    { subject: 'Physics', topic: 'Newton\'s Laws' },
    { subject: 'Science', topic: 'Crop Production' },
  ],
  weeklyActivity: [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 30 },
    { day: 'Wed', minutes: 60 },
    { day: 'Thu', minutes: 25 },
    { day: 'Fri', minutes: 50 },
    { day: 'Sat', minutes: 75 },
    { day: 'Sun', minutes: 40 },
  ],
};

export const recommendations = [
  {
    id: 'rec-1',
    title: 'Newton\'s Laws',
    subject: 'Physics',
    reason: 'Because you scored 45% in Physics',
    type: 'lesson',
  },
  {
    id: 'rec-2',
    title: 'Force & Motion Basics',
    subject: 'Physics',
    reason: 'Recommended to strengthen your basics',
    type: 'lesson',
  },
  {
    id: 'rec-3',
    title: 'Physics Practice Quiz',
    subject: 'Physics',
    reason: 'Test your understanding',
    type: 'quiz',
  },
];

export const downloads = [
  {
    id: 'dl-1',
    course: 'Science',
    chapter: 'Crop Production',
    size: '45 MB',
    downloaded: true,
  },
  {
    id: 'dl-2',
    course: 'Mathematics',
    chapter: 'Algebra Basics',
    size: '38 MB',
    downloaded: true,
  },
  {
    id: 'dl-3',
    course: 'English',
    chapter: 'Grammar Basics',
    size: '52 MB',
    downloaded: false,
  },
];

export const teacherStats = {
  totalStudents: 42,
  averagePerformance: 74,
  lessons: 28,
  quizzes: 12,
  studentPerformance: [
    { name: 'Rahul Kumar', score: 85, trend: 'up' },
    { name: 'Priya Sharma', score: 78, trend: 'up' },
    { name: 'Amit Patel', score: 72, trend: 'down' },
    { name: 'Sneha Gupta', score: 90, trend: 'up' },
    { name: 'Vikram Singh', score: 65, trend: 'down' },
  ],
  weakTopics: [
    { topic: 'Newton\'s Laws', students: 18 },
    { topic: 'Linear Equations', students: 15 },
    { topic: 'Tenses', students: 12 },
  ],
  recentQuizResults: [
    { quiz: 'Physics Basics', average: 72, students: 35 },
    { quiz: 'Algebra Basics', average: 78, students: 38 },
    { quiz: 'Grammar Quiz', average: 81, students: 30 },
  ],
};

export const adminStats = {
  totalStudents: 1245,
  totalTeachers: 85,
  courses: 48,
  activeUsers: 342,
  recentUsers: [
    { name: 'Rahul Kumar', role: 'student', date: '2 hours ago' },
    { name: 'Priya Sharma', role: 'student', date: '5 hours ago' },
    { name: 'Mr. Sharma', role: 'teacher', date: '1 day ago' },
    { name: 'Sneha Gupta', role: 'student', date: '2 days ago' },
  ],
};

export const aiMockResponses = [
  {
    question: 'Photosynthesis kya hota hai?',
    answer: 'Photosynthesis ek process hai jisme plants sunlight ki help se apna food banate hain. Plants carbon dioxide aur water ko sunlight ki energy se glucose aur oxygen mein convert karte hain.',
    simple: 'Photosynthesis = plants apna khana khud banate hain, sunlight ka use karke.',
    example: 'Jaise ek plant ko pani aur dhoop milti hai, toh wo apna khana (glucose) bana leta hai.',
  },
  {
    question: 'Newton\'s first law simple language mein samjhao',
    answer: 'Newton\'s first law ke according, agar koi object rest mein hai toh wo rest mein hi rahega, aur agar moving hai toh moving hi rahega - jab tak koi external force us par act na kare. Isse Law of Inertia bhi kehte hain.',
    simple: 'Cheezein apni halat badalna nahi chahti. Agar ruki hain toh ruki rahengi, agar chal rahi hain toh chalti rahengi.',
    example: 'Agar aap bus mein khade hain aur bus achanak rukti hai, toh aap aage girte hain - kyunki aapka body move karta rehna chahta tha.',
  },
  {
    question: 'What is gravity?',
    answer: 'Gravity is the force that pulls objects toward the center of the Earth. It\'s why things fall down when you drop them, and why we stay on the ground.',
    simple: 'Gravity = wo force jo cheezon ko neeche kheenchti hai.',
    example: 'Jab aap ek ball upar fekte hain, gravity usse wapas neeche laati hai.',
  },
];

export const aiQuickActions = [
  { id: 'explain', label: 'Explain Simply', icon: '💡' },
  { id: 'example', label: 'Give Example', icon: '📝' },
  { id: 'quiz', label: 'Give Quiz', icon: '📋' },
  { id: 'translate', label: 'Translate', icon: '🌐' },
];