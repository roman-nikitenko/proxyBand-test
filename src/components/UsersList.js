import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../reducers/usersReducer";
import { getUsers } from "../querys";

export const UsersList = () => {
  const { users, loading, userSelected } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setLoading(true));
    getUsers()
      .then(usersFromServer => {
        dispatch(actions.set(usersFromServer));
      })
      .finally(() => {
        dispatch(actions.setLoading(false));
      })
  }, [])

  const loader = <h1>Loading2...</h1>

  return (
    <table className='table is-narrow'>
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th></th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      {loading ? loader : (
        users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <Link to="Posts" rel='noreferrer'>
                <button
                  className='button'
                  onClick={() => {
                    dispatch(actions.selectedUser(user))
                  }}
                >
                  Posts
                </button>
              </Link>
              {userSelected.id === user.id ? (
                <button
                  className='button is-link'
                  onClick={() => {
                    dispatch(actions.selectedUser({}))
                  }}
                >
                  Albums
                </button>
              ) : (
                <button
                  className='button '
                  onClick={() => {
                    dispatch(actions.selectedUser(user))
                  }}
                >
                  Albums
                </button>
              )}
            </td>
          </tr>
        ))
      )}
      </tbody>
    </table>
  );
};
