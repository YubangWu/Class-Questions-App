let database = {
  classes: [],
  sessions: [],
};

const getRandomNumber = () => `${Math.floor(Math.random() * 900000) + 100000}`;


export const helperGetSessions = sessionCode => {
  // find the session with the sessionCode
  const sessionOut = database.sessions.find(session => session.id === sessionCode)
  return sessionOut
};

export const getQuestions = sessionCode => {
  // find the session with the sessionCode
  const sessionOut = database.sessions.find(session => session.id === sessionCode)
  return sessionOut.questions
};

export const getClasses = username => {
  // find the class with the OWNER
  const clazzOut = database.classes.filter(clazz => clazz.owner === username);
  return clazzOut;
  // return database.classes;
};

export const createQuestionForSession = (sessionCode, question) => {
  // find the session with the sessionCode
  const sessionOut = database.sessions.find(session => session.id === sessionCode)

  if (sessionOut) {
    const newQuestion = {
      ...question,
      id: getRandomNumber(),
      upvotes: 0
    }

    sessionOut.questions.push(newQuestion)
    return newQuestion
  }
  console.log("No sessionCode found", sessionCode)
  return null
};

export const createSessionCodeForClass = classId => {
  // find the class with the classId
  const clazzIn = database.classes.find(clazz => clazz.id === classId)

  if (clazzIn) {
    const RandomNumber = getRandomNumber()
    const sessionCode = {
      id: RandomNumber,
      classId, // classId: classId,
      questions: []
    }
    database.sessions.push(sessionCode)
    clazzIn.sessionCodes.push({ id: RandomNumber, createdAt: Date.now() })
    return sessionCode
  }

  console.log("No class found", classId)
  return null
  
};

export const createClass = classData => {

  const newClass = {
    ...classData,
    id: getRandomNumber(),
    sessionCodes: []
  }

  database.classes.push(newClass);
  return newClass
};

// Added
export const upvoteQuestionForSession = (sessionCode, questionId) => {
  // find the session with the sessionCode
  const sessionIn = database.sessions.find(session => session.id === sessionCode)
  
  // find the quesition with the question_Id
  const questionIn = sessionIn.questions.find(question => question.id === questionId)
  
  questionIn.upvotes += 1
  return questionIn.upvotes
};

export const clear = () => {
  database = {
    classes: [],
    sessions: []
  };
};