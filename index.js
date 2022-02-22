const express = require('express');
const app = express();

app.use(express.json());
let photosPerPage = 10;
let photos = [
    {
        photo_id: "1",
        photo_file: "url",
        user: "Messi",
        likes: "2",
        description: "Messiiiivrj ijnlk",
        page: 1,
        timestamp: "2021-05-05"
    }
];
    
app.get('/',(req, res) =>{
    res.send(photos)
})


app.post('/upload', (req, res) => {
    console.log(req.body)
    if(!req.body.url || req.body.url.length < 3 ){
        res.status(400).send('Url missing')
    }
    const photo = {
        photo_id: photos.length + 1,
        photo_file: req.body.url,
        description: req.body.description,
        user: req.body.user,
        likes: 0,
        page: 1,
        timestamp: Date.now()
    }
    photos.push(photo)
    res.send(photo);
})
//PORT

//const port = process.env.PORT || 3000 
app.listen(3000, ()=> console.log(`Listening  `))