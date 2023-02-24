import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../querys";
import { Link } from "react-router-dom";
import { actions } from "../reducers/usersReducer";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { userSelected } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserPosts(userSelected.id)
      .then(posts => setPosts(posts))
  }, [userSelected.id]);

  return (
    <div className="box">
      <div className='block'>
        <Link to="/">
          <button className='button is-info' onClick={() => {
            dispatch(actions.selectedUser({}))
          }}>
            Return to the list
          </button>
        </Link>

        <h1 className='title'>{userSelected.name}</h1>
      </div>
      <ul>
        {posts.map(post => (
          <li className='box' key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
