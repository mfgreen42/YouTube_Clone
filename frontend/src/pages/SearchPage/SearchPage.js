import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from 'react-router-dom'

let initialValues = {

}

const SearchPage = () => {
    const [ user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, searchVideos)


    async function searchVideos() {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users", 
            formData, 
            {
            headers: {
                Authorization: 'Bearer ' + token
        }})
        navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <form>
            <label>
                Search: {" "}
                <input
                type= 'text' 
                name = 'search'
                value = {formData}
                onChange = {handleInputChange}
                />
            </label>
            <button>Search Videos</button>
            <Link to='/'>Home Page</Link>
        </form>
    )
    }

export default SearchPage