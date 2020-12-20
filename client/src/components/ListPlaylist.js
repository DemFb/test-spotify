import React, {Fragment, useEffect, useState} from "react";
// import EditPlaylist from "./EditPlaylist";
import '../App.css';

 const ListPlaylist = () => {

    const [playlistList, setPlaylistList] = useState([]);

// delete playlist function
    const deletePlaylist = async (id) => {
        try {
            const deletePlaylist = await fetch(`http://localhost:5000/playlist/${id}`, {
                method: "DELETE"
            });

            setPlaylistList(playlistList.filter(playlist => playlist.playlist_id !== id))
        } catch (err) {
            console.error(err.message)
        }
    }


    const getPlaylist = async () => {
        try {
            const response = await fetch("http://localhost:5000/playlist");
            const jsonData = await response.json();

            setPlaylistList(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getPlaylist();
    }, []);

    console.log(playlistList)

     return(
         <Fragment>
             {" "}
             <div className="Content">
                {playlistList.map( playlist => (
                    <div key={playlist.playlist_id} className="Cards">
                    <img src={playlist.playlist_image}/>
                    <h3>{playlist.playlist_id}</h3>
                    <h3>{playlist.playlist_name}</h3>
                    <p>{playlist.playlist_description}</p>
                    <h4>By {playlist.playlist_owner}</h4>
                    <button onClick={() => deletePlaylist(playlist.playlist_id)} className="btn btn-danger">Delete</button>
                </div>
                ))}
            </div>
         </Fragment>
     )
 }

 export default ListPlaylist;