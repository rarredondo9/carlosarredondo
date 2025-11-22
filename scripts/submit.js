document.getElementById('storyForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const story = document.getElementById('story').value.trim();
  const photoInput = document.getElementById('photo');

  // Validate
  if (!name || !story) {
    alert('Por favor completa tu nombre y tu historia.');
    return;
  }

  // Wait for image to load (if any)
  let photoURL = '';
  if (photoInput.files && photoInput.files[0]) {
    photoURL = await readFileAsDataURL(photoInput.files[0]);
  }

  // Save story
  const stories = JSON.parse(localStorage.getItem('stories')) || [];
  stories.push({ name, story, photoURL });
  localStorage.setItem('stories', JSON.stringify(stories));

  // Confirm and redirect
  alert('Gracias por compartir tu historia ❤️');
  window.location.href = 'family-stories.html';
});

// Helper function to convert image to base64
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
}
