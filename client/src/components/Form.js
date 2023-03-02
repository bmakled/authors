import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const {allAuthors, setAllAuthors} = props
    const [author, setAuthor] = useState({
        authorName: "",
    })
    
    const handleInputChange = (e) => {
        setAuthor({...author,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/postAuthor`, author)
            .then((res) => {
                setAllAuthors([...allAuthors, res.data])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Author Name:</label>
                <input type="text" onChange={handleInputChange} value ={author.authorName} name='authorName' />

                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;