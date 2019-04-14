let db = firebase.firestore();
let project = document.getElementById('projectsId');
db.collection('projects')
  .get()
  .then(function(querySnapshot) {
    project.innerHTML = '';
    querySnapshot.forEach(function(doc) {
      project.innerHTML += `
     <div class="col-4">
        <img class="image-proyect" src="${doc.data().image}" alt="" srcset="">
      <h4 class="title-proyect">${doc.data().name}</BurgerQueen></h4>
      <p class="description-proyect">${doc.data().description}</p>
      <div class="row">
        <div class="col-6"><a href="${
          doc.data().demo
        }" target="_blank" class="btn btn-outline-secondary"><i class="fas fa-laptop-code"></i> Demo</a></div>
        <div class="col-6"><a href="${
          doc.data().github
        }" target="_blank" class="btn btn-outline-secondary"><i class="fab fa-github"></i> Github</a></div>
    </div> 
   </div>`;
    });
  });
