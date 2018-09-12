import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    questions
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
    type: FETCH_QUESTIONS_ERROR,
    error
});

export const fetchQuestions = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        // .then(res => console.log('This is the response', res))
        .then((questions) => dispatch(fetchQuestionsSuccess(questions)))
        // .then(question => console.log(question))
        .catch(err => {
            dispatch(fetchQuestionsError(err));
        });
};

export const FETCH_ATTEMPTS_SUCCESS = 'FETCH_ATTEMPTS_SUCCESS';
export const fetchAttemptsSuccess = attempts => ({
    type: FETCH_ATTEMPTS_SUCCESS,
    attempts
});

export const FETCH_ATTEMPTS_ERROR = 'FETCH_ATTEMPTS_ERROR';
export const fetchAttemptsError = error => ({
    type: FETCH_ATTEMPTS_ERROR,
    error
});

export const fetchAttempts = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions/attempts`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((attempts) => dispatch(fetchAttemptsSuccess(attempts)))
    .catch(err => {
        dispatch(fetchAttemptsError(err));
    });
}

export const FETCH_CORRECTANSWERS_SUCCESS = 'FETCH_CORRECTANSWERS_SUCCESS';
export const fetchCorrectAnswersSuccess = correctAnswer => ({
    type: FETCH_CORRECTANSWERS_SUCCESS,
    correctAnswer
});

export const FETCH_CORRECTANSWERS_ERROR = 'FETCH_CORRECTANSWERS_ERROR';
export const fetchCorrectAnswersError = error => ({
    type: FETCH_CORRECTANSWERS_ERROR,
    error
});

export const fetchCorrectAnswers = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions/correct`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((correctAnswer) => dispatch(fetchCorrectAnswersSuccess(correctAnswer)))
    .catch(err => {
        dispatch(fetchCorrectAnswersError(err));
    });
}

export const MAKE_GUESS_SUCCESS = 'MAKE_GUESS_SUCCESS';
export const makeGuessSuccess = guess => ({
    type: MAKE_GUESS_SUCCESS,
    guess
})

export const MAKE_GUESS_ERROR = 'MAKE_GUESS_ERROR';
export const makeGuessError = error => ({
    type: MAKE_GUESS_ERROR,
    error
})

export const makeGuess = (guess) => (dispatch, getState) => {
    console.log('MAKE GUESS ACTION',guess);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: 
           JSON.stringify({guess:guess})
        
    })
    // .then((res)=>console.log('makeGuess response',res))
    .then(res => res.json()) // english word comes back
    .then((guess) => dispatch(makeGuessSuccess(guess)))
    .catch(err => {
        console.log('makeguessError',err);
        dispatch(makeGuessError(err));
    });
}