/* const archiveUrl = "http://localhost:3001/db/fakeJson1.json" */

const archiveUrl = "/cronology"

const archiveCall = (setArchiveJson) => {
    fetch(archiveUrl)
    .then(response => response.json())
    .then(data => archiveJSON(data))
  }

export { archiveCall } 