  
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <>
   <ul className="header">
<li>
  <Link to="/profile">Profile</Link>
</li>
<li>
  <Link to="/">Home</Link>
</li>
</ul>

<div className="sidebar">
    <ChatList />
</div>
  </>
)








