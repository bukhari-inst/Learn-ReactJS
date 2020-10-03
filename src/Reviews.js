import React from 'react';
import './App.css';

function Reviews() {
  // data dummy JSON
  const users = [
    {
      id: 1,
      name: 'Ananta Alleia',
      review: 'Harganya murah tapi kualitas bukan murahan. Keren!',
      photo:
        'https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 2,
      name: 'Meta Yuna',
      review: 'Harganya murah tapi kualitas bukan murahan. Keren!',
      photo:
        'https://images.unsplash.com/photo-1506648601690-656a701b10b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 3,
      name: 'Ihsan Nurrahcman',
      review: 'Harganya murah tapi kualitas bukan murahan. Keren!',
      photo:
        'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
  ];
  const listReview = users.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.photo} alt="" />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;
