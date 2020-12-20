import React, {Fragment, useState} from 'react';


const EditPlaylist = ({playlist}) => {
    const [name, setName] = useState(playlist.playlist_name);
    const [description, setDescription] = useState(playlist.playlist_description);
    const [owner, setOwner] = useState(playlist.playlist_owner);

    const updatePlaylist = async (e) => {
        e.preventDefault();
        try {
            const body = {name, description, owner};
            const response = await fetch(`http://localhost:5000/playlist/${playlist.playlist_id}`, {
                method: "PUT",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response)

            // window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
        <Fragment>
          
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${playlist.playlist_id}`}>
            Edit my playlist
            </button>

    
            <div class="modal fade" id={`id${playlist.playlist_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h5>Name</h5>
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/> 
                            <br/>
                            <h5>Description</h5>
                            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/> 
                            <br/>
                            <h5>Owner</h5>
                            <input type="text" className="form-control" value={owner} onChange={e => setOwner(e.target.value)}/> 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={e => updatePlaylist(e)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default EditPlaylist;