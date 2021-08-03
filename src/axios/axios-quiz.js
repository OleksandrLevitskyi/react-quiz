import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-e30bf-default-rtdb.europe-west1.firebasedatabase.app/'
})
