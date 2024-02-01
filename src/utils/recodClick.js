function recordClick(storyId) {
    fetch('/api/stories/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ storyId }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Click count updated:', data);
    })
    .catch((error) => {
      console.error('Error updating click count:', error);
    });
  }

  export {recordClick}