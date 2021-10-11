import axios from "axios";

export const listQuestions = () => {
    return axios
    .get('/api/question')
        .then((response) => response.data)
        .catch((error) => console.log(error))
};

// export const getQuestionBy = (id) => {
//   return axios
//       .get(`/api/question/${newQuestion.id}`)
//       .then((response) => response.data)
//       .catch((error) => console.log(error))
// };

export const postQuestion = (newQuestion) => {
    return axios
        .post('/api/question', newQuestion)
        .then((response) => response.data)
        .catch((error) => console.log(error))
};