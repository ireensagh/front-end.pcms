
// fetch('http://localhost:8080/orgs/acc8cc57-ff7c-44c5-9bd6-ab0900fbdc43/repos')
//   .then(response => response.json())
//   .then(data => {
//     // Use the data retrieved to update the front-end UI
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
function displayPrograms() {
  fetch('http://localhost:8080/api/programs')
    .then(response => response.json())
    .then(programs => {
      const programsContainer = document.getElementById('programsContainer');
      const programTemplate = document.getElementById('programTemplate');

      programs.forEach(program => {
        const programElement = programTemplate.content.cloneNode(true);
        programElement.querySelector('.program-name').textContent = program.name;
        programElement.querySelector('.program-description').textContent = program.description;
        programElement.querySelector('.program-author').textContent = program.author;
        programElement.querySelector('.program-artwork').src = program.artwork;
        programsContainer.appendChild(programElement);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

displayPrograms();
// recent 50 clips
function displayClips(programId) {
  fetch(`http://localhost:8080/api/clips?programId=${programId}`)
    .then(response => response.json())
    .then(clips => {
      const clipsContainer = document.getElementById('clipsContainer');
      clipsContainer.innerHTML = ''; // Clear any previous clips
      const clipTemplate = document.getElementById('clipTemplate');

      clips.forEach(clip => {
        const clipElement = clipTemplate.content.cloneNode(true);
        clipElement.querySelector('.clip-title').textContent = clip.title;
        clipElement.querySelector('.clip-description').textContent = clip.description;
        clipElement.querySelector('.clip-image').src = clip.image;
        clipElement.querySelector('.clip-duration').textContent = clip.duration;
        clipElement.querySelector('.clip-published-date').textContent = clip.publishedDate;
        clipsContainer.appendChild(clipElement);
      });
    })
    .catch(error => {
      console.error(error);
    });
}


