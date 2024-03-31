'use client';
import { IconHeart, IconMessageCircle2, IconShare3, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ReactTimeAgo from 'react-time-ago';

const Feed = () => {

    const [postList, setPostList] = useState([]);

    const readPostData = () => {
        fetch('http://localhost:5000/post/getall')
            .then((res) => {
                console.log(res.status);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPostList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        readPostData();
    }, []);

    const deletePost = (id) => {
        fetch('http://localhost:5000/post/delete/' + id, {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Post deleted successfully');
                    readPostData();
                } else {
                    toast.error('Error in deleting post');
                }
            }).catch((err) => {
                console.log(err);
                toast.error('Error in deleting post');
            });
    }


    return (
        <div>
            <div className='col-md-4 mx-auto py-5'>
                <h2 className='text-center'>Post Feed</h2>
                <hr />

                {
                    postList.map((post) => {
                        return <div key={post._id} className='card mb-4'>
                            <div className='card-header d-flex justify-content-between align-items-start'>
                                <div>
                                    <h5>{post.username}</h5>
                                    <p>
                                        <ReactTimeAgo date={new Date(post.postedOn)} />
                                    </p>
                                </div>
                                <button className='btn btn-danger' onClick={() => { deletePost(post._id) }}>
                                    <IconTrash size={25} />
                                </button>
                            </div>
                            <img className='card-img-fluid' src={post.image} alt="" />
                            <div className='card-body'>
                                <h5>{post.title}</h5>
                                <div className='row border-top border-bottom'>
                                    <div className="col-4">
                                        <button className='btn btn-white w-100'>
                                            <IconHeart size={25} color='#f00' /> 
                                        </button>
                                    </div>
                                    <div className="col-4">
                                    <button className='btn btn-white w-100'>
                                            <IconMessageCircle2 size={25} color='#00f' /> 
                                        </button>
                                    </div>
                                    <div className="col-4">
                                    <button className='btn btn-white w-100'>
                                            <IconShare3 size={25} /> 
                                        </button>
                                    </div>
                                </div>

                                <p className='mt-3'>
                                    {post.likes} Likes , 
                                    0 Comment , 
                                    {post.shares} Shares
                                </p>
                                
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Feed;