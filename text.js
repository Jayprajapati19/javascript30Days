function fetchData() {
   fetch('https://invalid-url.example.com')
      .then(response => {
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         return response.json();
      })
      .then(data => {
         console.log(data);
      })
      .catch(error => {
         console.log('Error:', error.message);
      });
}

fetchData();
