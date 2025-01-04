import { useState } from 'react';
import axios from 'axios';

function CreateURL() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleCreateURL = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://urlshortener-backend.onrender.com/url',
        { longUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      alert('Failed to create short URL.');
    }
  };

  return (
    <div>
      <h2>Create URL</h2>
      <input type="text" placeholder="Enter Long URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
      <button onClick={handleCreateURL}>Shorten URL</button>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
    </div>
  );
}

export default CreateURL;
