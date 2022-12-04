/* import axios from 'axios'; */

const archiveUrl = /* "http://localhost:3001/db/fakeJson1.json" */"/cronology"
/* 
const archiveCall = await axios.get('/cronology').then(response => console.log(response)); */

const archiveCall = (setFakeJson) => {
    fetch(archiveUrl)
    .then(response => response.json())
    .then(data => /* console.log(typeof(data), data) */setFakeJson(data))
  }

export { archiveCall } 