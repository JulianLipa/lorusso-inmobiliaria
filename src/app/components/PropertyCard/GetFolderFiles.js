"use client"
import { useEffect, useState } from 'react';

const GetFoldersFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/getPhotos');
        const data = await response.json();

        if (data.success) {
          setFiles(data.files);
        } else {
          setError("Failed to load files.");
        }
      } catch (error) {
        setError("An error occurred while fetching files.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (files);
};

export default GetFoldersFiles;
