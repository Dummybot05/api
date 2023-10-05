const express = require('express')
const app = express()
const cors = require('cors')
const { v4: uuidV4 } = require('uuid')

app.use(cors())

var data = [{
   uuid: uuidV4(),
   name: "Satish",
   image: "https://source.unsplash.com/random",
   desc: "Description",
   like: 30,
   comment: 13,
   share: 21,
   more: {
       upload_date: Date.now(),
       upload_time: Date.now(),
       location: "my home"
   },
   comment_people: [
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      }
   ]
},
{
   uuid: uuidV4(),
   name: "Satish",
   image: "https://source.unsplash.com/random",
   desc: "Description",
   like: 30,
   comment: 13,
   share: 21,
   more: {
       upload_date: Date.now(),
       upload_time: Date.now(),
       location: "my home"
   },
   comment_people: [
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      }
   ]
},
{
   uuid: uuidV4(),
   name: "Satish",
   image: "https://source.unsplash.com/random",
   desc: "Description",
   like: 30,
   comment: 13,
   share: 21,
   more: {
       upload_date: Date.now(),
       upload_time: Date.now(),
       location: "my home"
   },
   comment_people: [
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      }
   ]
},
{
   uuid: uuidV4(),
   name: "Satish",
   image: "https://source.unsplash.com/random",
   desc: "Description",
   like: 30,
   comment: 13,
   share: 21,
   more: {
       upload_date: Date.now(),
       upload_time: Date.now(),
       location: "my home"
   },
   comment_people: [
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      },
      {
        name: "Anomyous says: ",
        comment: "Awesome pic..."
      }
   ]
}
];

app.get('/', (req, res) => {
   res.send(data)
})


app.listen(3000, () => {
   console.log("Yes")
})
