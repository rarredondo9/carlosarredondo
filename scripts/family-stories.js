document.getElementById('storyForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const story = document.getElementById('story').value;
  const photoInput = document.getElementById('photo');

  let photoURL = '';
  if (photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (event) {
      photoURL = event.target.result;
      saveStory(name, story, photoURL);
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    saveStory(name, story, photoURL);
  }
});

function saveStory(name, story, photoURL) {
  const stories = JSON.parse(localStorage.getItem('stories')) || [];
  stories.push({ name, story, photoURL });
  localStorage.setItem('stories', JSON.stringify(stories));

  alert('Gracias por compartir tu historia ❤️');
  window.location.href = 'community-stories.html';
}
