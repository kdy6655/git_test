import React, { useState } from 'react';
import Post from './Post';
import './Board.css';

interface PostData {
  id: number;
  title: string;
  content: string;
}

const Board: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]); // post 값 state
  const [isCreating, setIsCreating] = useState(false); // 폼 출력 state
  const [newTitle, setNewTitle] = useState(''); // 제목 출력 state
  const [newContent, setNewContent] = useState(''); // 내용 출력 state

  // 글 생성 클릭 시 form 출력
  const handleCreate = () => {
    setIsCreating(true);
  };

  // 글 저장
  const handleSave = () => {
    const newPost: PostData = {
      id: posts.length + 1,
      title: newTitle,
      content: newContent,
    };
    setPosts([...posts, newPost]);
    setIsCreating(false);
    setNewTitle('');
    setNewContent('');
  };

  // 글 생성 취소
  const handleCancel = () => {
    setIsCreating(false);
    setNewTitle('');
    setNewContent('');
  };

  // 글 수정
  const handleUpdate = (updatedPost: PostData) => {
    const updatedPosts = posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  // 글 삭제
  const handleDelete = (postId: number) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <button style={{border:'1px solid black'}} onClick={handleCreate}>글 생성</button>
      {isCreating && (
        <div className='create-form'>
          <div className='input-group'>
            <input
              style={{border:'1px solid black'}}
              type="text"
              placeholder="제목"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
            <textarea
              style={{border:'1px solid black'}}
              placeholder="내용"
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
            />
          </div>
          <div className='button-group'>
            <button style={{border:'1px solid black'}} onClick={handleSave}>저장</button>
            <button style={{border:'1px solid black'}} onClick={handleCancel}>취소</button>
          </div>
        </div>
      )}
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Board;
