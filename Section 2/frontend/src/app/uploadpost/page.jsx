'use client';
import { useFormik } from 'formik'
import React from 'react'

const UploadPost = () => {

    const postForm = useFormik({
        initialValues: {
            title: '',
            image : '',
            username : '',
            postedOn : new Date()
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

  return (
    <div>
        <div className="container">

            <h1 className="text-center my-4">Upload Post</h1>
            <hr />
            <div className="card">
                <div className="card-body">

                    <form onSubmit={ postForm.handleSubmit }>

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