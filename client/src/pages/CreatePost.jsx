// src/pages/CreatePost.jsx

import PostForm from '../components/PostForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      const res = await axios.post('/api/posts', formData);
      navigate(`/posts/${res.data.data._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold text-center mb-4">Create New Post</h1>
      <PostForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePost;
