
import React from 'react';
import "./index.css";
  
function Home() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>
        This is the homepage of our React app. Here you can find information
        about our app and what it does.
      </p>
      <p>
        To get started, you can navigate to the various pages using the menu
        above or by clicking the links below.
      </p>
      <ul>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;