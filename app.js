
fetch('http://localhost:8080/orgs/acc8cc57-ff7c-44c5-9bd6-ab0900fbdc43/repos')
  .then(response => response.json())
  .then(data => {
    // Use the data retrieved to update the front-end UI
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


