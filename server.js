const express = require('express');
const Path = require('path');

const app = express();
// Initialize the Express application
const PORT = process.env.PORT || 5000;
// port is set to the value of the PORT environment variable if it exists, otherwise it defaults to 5000.

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// listening to the specified port and logging a message when the server starts successfully.

app.use(express.static(Path.join(__dirname, '/public')));
// static middleware is used to serve static files like HTML, CSS, JS, images, etc. from the specified directory. In this case, it serves files from the 'public' directory.

// app.get('/', (req, res) => {
//   if (req.url === '/' && req.method === 'GET') {
//     // res.send('hi from watch mode');
//     // res.sendFile(__dirname + '/index.html')
//     res.sendFile(Path.join(__dirname,'/public','index.html'));
//   }
// })
// app.get('/about', (req, res) => {
//   if (req.url === '/about' && req.method === 'GET') {
//     res.sendFile(Path.join(__dirname,'/public','about.html'));
//   }
// })

let posts = [{
  id: 1,
  title:"this is first"
}, {
  id: 2,
  title:"this is second"
  }, {
  id: 3,
  title:"this is third"
}]

app.get('/api/posts', (req, res) => {
  res.json(posts);
  // res.json() is a method provided by Express to send a JSON response. In this case, it sends the posts array as a JSON response to the client.
});
