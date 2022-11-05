const post_id = document.querySelector('.new-post-form').dataset.postid;
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const post_text = document.querySelector('#post-desc').value.trim();

  if (title && post_text) {
    const response = await fetch(`/api/edits/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, post_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};


const deleteFunction = async (event) => {
  await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
  });
  document.location.replace('/dashboard');
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('#delete')
  .addEventListener('click', deleteFunction);