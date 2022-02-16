import axios from "axios";
import {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/';

const CompEditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    //procedimiento para actualizar
    const update = async(e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title,
            content
        })
        navigate('/')
    }

    useEffect( () => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        const res = await axios.get(URI + id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    return (
        <div>
            <h3>Create Blog</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='form-control' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea type='text'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='form-control' />                    
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    ); 
}

export default CompEditBlog;