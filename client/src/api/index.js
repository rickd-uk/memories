import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

//const url = 'https://memories42021.herokuapp.com/posts'

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, postData) => API.patch(`/posts/${id}`, postData)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signin = (formData) => API.post('/users/signin', formData)
export const signup = (formData) => API.post('/users/signup', formData)
