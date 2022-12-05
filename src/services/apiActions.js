/* const archiveUrl = "http://localhost:3001/db/fakeJson1.json" */

const archiveUrl = "/cronology"

const archiveCall = (setFakeJson) => {
    fetch(archiveUrl)
    .then(response => response.json())
    .then(data => /* console.log(typeof(data), data) */setFakeJson(data))
  }

export { archiveCall } 