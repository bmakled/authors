import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

const Home = (props) => {
    const {allAuthors, setAllAuthors} = props
    useEffect(() => {
        axios.get(`http://localhost:8000/api/allAuthors`)
            .then((allAuthors) => {
                //console.log(allAuthors.data);
                setAllAuthors(allAuthors.data)
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return(
        <div>
            <header className = "d-flex justify-content-around m-auto mt-5">
            <h1>Favorite Authors</h1>
            <Link to={'/newAuthor/new'}>Add an author</Link>
            </header>
            <h3 className="p-3">We have quotes by</h3>
            <table className="table table-striped border border-dark  m-auto w-50">
                <thead>
                    <tr>
                        <th className="border border-dark text-start" scope="col">Authors</th>
                        <th className="border border-dark text-start" scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                allAuthors.map((author) => (
                    <tr scope='row' key={author._id}>
                        <td className="border border-dark text-start" >{author.authorName}</td>
                        <td className='text-start'><Link to={`/oneAuthor/${author._id}`}>details</Link> | <Link to={`/editAuthor/${author._id}`}>edit</Link></td>
                    </tr>
                ))
            }

                </tbody>
            </table>
            
        </div>
    )
}

export default Home;