import React, { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import banner from './images/bann.jpeg'
import NavBar from './NavBar';
import Footer from './Footer';
export default function CreatePost() {

    const [post, setPost] = useState({
        title: '',
        content: '',
        category: '',
        banner: ''
    });
// this value needed to be updated ..
    let user = "65a7f77a7d4e46344706f93d"
   
    const createPost = async()=>{
        const {title,banner,category,content} = post;
        console.log(title,banner);
        let data = await fetch('http://localhost:4500/api/v1/auth/post',{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title, category, banner,content,user
            })
        })
        let result = data.json();
        console.log("get post called2")
        console.log(result)
    }

    const editor = useRef(null);
    //field changed function
    const fieldChanged = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }
    // for jodit editor 
    const contentFieldChanaged = (data) => {
        setPost({ ...post, 'content': data })
        // console.log(post);
    }

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertbase64(file);
        // console.log(base64)
        setPost({ ...post, 'banner': base64 })
    }

    const convertbase64 = async (file) => {
        return new Promise((resolve, reject) => {
            const filereader = new FileReader();
            filereader.readAsDataURL(file);
            filereader.onload = () => {
                resolve(filereader.result)
            }
            filereader.onerror = (error) => {
                reject(error);
            }
        });
    }
    // handle the submit request...
    function handleSubmit() {
        console.log(post)
        createPost();
    }

    return (
        <>
        <NavBar/>
            <div className='mt-32 border-4 md:mx-24 bg-slate-100 space-y-4 hover:shadow-xl'>
                <form onSubmit={handleSubmit}>
                    <textarea className='w-full text-xl resize rounded-lg' placeholder=' title ... ' name='title'
                        onChange={fieldChanged}></textarea>
                    <div className='my-4'>
                        <img className='my-4 md:max-h-64' src={post.banner || banner}></img>
                        <label>Select file
                            <input className='px-2' type='file' onChange={(e) => { handleImageUpload(e) }}></input>
                        </label>
                    </div>
                    <JoditEditor
                        ref={editor}
                        value={post.content}
                        onChange={(newContent) => { contentFieldChanaged(newContent) }}
                    />

                    <div className='flex flex-row justify-around'>
                        <select defaultValue={0} className='border-2 rounded-lg' onChange={fieldChanged} name='category'>
                            <option disabled value={0}>--Select category--</option>
                            <option>
                                web
                            </option>
                            <option>
                                dsa
                            </option>
                        </select>

                        <button type='submit' className='hover:ring-2 ring-green-500 rounded-lg w-24 bg-green-400 py-2'>Post</button>
                    </div>
                </form>


            </div>
            <Footer/>
        </>
    )
}