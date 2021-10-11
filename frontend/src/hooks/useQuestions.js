import {useEffect, useState} from "react";
import {getQuestionBy, listQuestions, postQuestion} from "../service/question-api-service";

export function useQuestions() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        listQuestions()
            .then(questions => setQuestions(questions))
    }, []);

    const getQuestion = (id) => {
        return getQuestionBy(id)
    }

    const addQuestion = (newQuestion) => {
        postQuestion(newQuestion)
            .then(addedQuestion => setQuestions([...questions, addedQuestion]))
    }

}