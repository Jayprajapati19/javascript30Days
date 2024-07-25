// task 7: install a thirs-party module (e.g.,, axios) using npm. import and use this module to make a network request in a script

// app.js

// Import the axios module
const axios = require('axios');

// Define an asynchronous function to fetch data from the GitHub API
async function fetchGitHubUser() {
   try {

      const response = await axios.get('https://api.github.com/users/Jayprajapati19');

      console.log('Username:', response.data.login);
      console.log('Name:', response.data.name);
      console.log('Bio:', response.data.bio);
      console.log('Public Repos:', response.data.public_repos);
      console.log('Followers:', response.data.followers);
      console.log('Following:', response.data.following);
      console.log('Profile URL:', response.data.html_url);
   } catch (error) {
      console.error('Error fetching GitHub user data:', error);
   }
}

fetchGitHubUser();
