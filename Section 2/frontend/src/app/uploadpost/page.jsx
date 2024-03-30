'use client';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';

const UploadPost = () => {

    const postForm = useFormik({
        initialValues: {
            title: '',
            image: '',
            username: '',
            postedOn: new Date()
        },
        onSubmit: (values) => {
            console.log(values);

            fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body : JSON.stringify(values),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then((res) => {
                if(res.status === 200){
                    toast.success('Post uploaded successfully');
                }else{
                    toast.error('Error in uploading post');
                }
            }).catch((err) => {
                console.log(err);
                toast.error('Error in uploading post');
            });
        }
    })

    return (
        <div>
            <div className="container">

                <h1 className="text-center my-4">Upload Post</h1>
                <hr />
                <div className="card">
                    <div className="card-body">

                        <form onSubmit={postForm.handleSubmit}>

                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.title}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="image" class="form-label">Image</label>
                                <input
                                    type="text"
                                    id="image"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.image}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.username}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />

                            </div>

                            <button type="submit" class="btn btn-primary mt-5">Upload</button>


                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default UploadPost