import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://urlshortener-backend.onrender.com/url', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUrls(response.data);
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td>{url.longUrl}</td>
              <td>{url.shortUrl}</td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
