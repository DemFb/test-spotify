var express = require('express');
var router = express.Router();
const app = express();
const cors = require("cors");
const pool = require("../data/db");

/* GET home page. */

app.use(cors());
app.use(express.json());

// create 
app.post('/playlist', async(req, res)=> {
  try {
    // console.log(req.body)
    const {playlist_name} = req.body;
    const {playlist_description} = req.body;
    const {playlist_owner} = req.body;
    const {playlist_image} = req.body;
    
    const newPlaylist = await pool.query("INSERT INTO playlist (playlist_name, playlist_description, playlist_owner, playlist_image) VALUES($1, $2, $3, $4) RETURNING *", 
    [playlist_name, playlist_description, playlist_owner, playlist_image]
    );

    res.json(newPlaylist.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

// get all
app.get("/playlist", async (req, res) => {
  try {
    const allPlaylist = await pool.query("SELECT * FROM playlist");
    res.json(allPlaylist.rows);
  } catch (err) {
    console.error(err.message)
  }
})

// get a playlist

app.get("/playlist/:id", async (req, res) =>{
  try {
    // console.log(req.params);
    const {id} = req.params;
    const playlist = await pool.query("SELECT * FROM playlist WHERE playlist_id =$1", [id])

    res.json(playlist.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// update

app.put("/playlist/:id", async(req, res) => {
  try {
    const {playlist_id} = req.params;
    const {playlist_name} = req.body;
    const {playlist_description} = req.body;
    const {playlist_owner} = req.body;
    const {playlist_image} = req.body;
    const updatePlaylist = await pool.query("UPDATE playlist SET playlist_name = $1, playlist_description = $2,  playlist_owner = $3, playlist_image = $4 WHERE playlist_id = $4", 
    [playlist_name, playlist_description, playlist_owner, playlist_image, playlist_id]
    );

    res.json("Playlist was updated")
  } catch (err) {
    console.error(err.message);
  }
})


// delete

app.delete("/playlist/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const deletePlaylist = await pool.query("DELETE FROM playlist WHERE playlist_id = $1", [id]
    );

    res.json("Playlist was delete")
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () =>{
  console.log("server has started on port 5000")
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
