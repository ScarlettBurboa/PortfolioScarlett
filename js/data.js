export const readProject = (project) => {
  const postReference = firebase.database().ref('projects/');
  postReference.on('child_added', (post) => {
      project(post);
  });
  console.log(postReference);
};