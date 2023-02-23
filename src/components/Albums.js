import React, { useEffect, useState } from 'react';
import { getUserAlbums } from "../querys";
import { useSelector } from "react-redux";

export const Albums = () => {
  const [userAlbums, setUserAlbums] = useState([]);

  const { userSelected } = useSelector(state => state.users);

  useEffect(() => {
    getUserAlbums(userSelected.id)
      .then(albums => {
        setUserAlbums(albums)
      })
  }, [userSelected.id])

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-3'>{userSelected.name}</p>
          <p className='subtitle is-6'>{userSelected.email}</p>
        </div>
      </div>

      <ul className='box'>
        {userAlbums.map(album => (
          <li className='content' key={album.id}>
            <p className='box'>
              {album.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
