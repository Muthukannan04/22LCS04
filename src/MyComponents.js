import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://20.244.56.144/test/auth";
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0NjI4NzcwLCJpYXQiOjE3MTQ2Mjg0NzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg1YmMzODhmLTFjZjMtNDZjZC1iYjI2LWQyNWYxMTUzNzdmMSIsInN1YiI6Im11dGh1a2FubmFuLjg4M0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6Ijg1YmMzODhmLTFjZjMtNDZjZC1iYjI2LWQyNWYxMTUzNzdmMSIsImNsaWVudFNlY3JldCI6ImxuaU1QQ2tXTGVBV29Ia1MiLCJvd25lck5hbWUiOiJQLk11dGh1a2FubmFuIiwib3duZXJFbWFpbCI6Im11dGh1a2FubmFuLjg4M0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMkxDUzA0In0.oYaseGHIGTgXUrcPV-i5l3OJ1FGf5i6j6i68Moc-YcM";

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Removed the extra comma here
            "Content-Type": "application/json"
          }
        });
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h1>Data Received:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyComponent;

