import React, { useState } from 'react';
import './Board.css';

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
  };
  onUpdate: (updatedPost: { id: number; title: string; content: string }) => void;
  onDelete: (postId: number) => void;
}

const Post: React.FC<PostProps> = ({ post, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedContent, setUpdatedContent] = useState(post.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate({
      id: post.id,
      title: updatedTitle,
      content: updatedContent,
    });
  };

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div>
      {isEditing ? (
        <div className='create-group'>
          <div className='input-group'>
            <input
              style={{border:'1px solid black'}}
              type="text"
              value={updatedTitle}
              onChange={e => setUpdatedTitle(e.target.value)}
            />
            <textarea
              style={{border:'1px solid black'}}
              value={updatedContent}
              onChange={e => setUpdatedContent(e.target.value)}
            />
          </div>
          <div className='button-group'>
            <button style={{border:'1px solid black'}} onClick={handleSave}>저장</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button style={{border:'1px solid black'}} onClick={handleEdit}>수정</button>
          <button style={{border:'1px solid black'}} onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default Post;
