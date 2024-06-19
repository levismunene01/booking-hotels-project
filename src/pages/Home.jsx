import React from 'react';
import { Link } from 'react-router-dom';
import GuestServicesCard from '../components/GuestServicesCard';
import './Home.css'; // Ensure to import your CSS file

function Home() {
  const posts = [
    {
      id: 1,
      title: "Sarova Stanley",
      desc: "Experience elegance and history at Nairobi's most iconic hotel. Sarova Stanley, established in 1902, offers a timeless experience in the heart of Nairobi. With its rich heritage and classic architecture, the hotel blends modern luxury with colonial charm. Indulge in exquisite dining at the iconic Thorn Tree Café or unwind in the opulent suites adorned with antique furnishings. Sarova Stanley promises a memorable stay for discerning travelers seeking sophistication and impeccable service.",
      img: "https://www.fairmont.com/assets/0/104/2253/2258/2259/2e69e23c-fc43-4658-8048-49025d06ef38.jpg"
    },
    {
      id: 2,
      title: "Fairmont Mount Kenya Safari Club",
      desc: "Reconnect with nature at this luxurious safari lodge with stunning views. Nestled in the foothills of Mount Kenya, Fairmont Mount Kenya Safari Club offers an exclusive retreat amidst breathtaking landscapes. Immerse yourself in the beauty of nature from luxurious cottages overlooking the majestic mountain or enjoy guided safaris to encounter exotic wildlife. Experience unparalleled tranquility and world-class hospitality at this iconic safari destination.",
      img: "https://www.fairmont.com/assets/0/104/2253/2258/2259/5fc676ca-c155-4821-8e5f-12f15850ee5d.jpg"
    },
    {
      id: 3,
      title: "Hemingways Nairobi",
      desc: "Embrace the spirit of adventure at this boutique hotel with a colonial vibe. Inspired by the legendary writer Ernest Hemingway, Hemingways Nairobi offers a blend of classic elegance and African charm. Located in the exclusive suburb of Karen, the hotel features spacious suites with panoramic views of the Ngong Hills. Enjoy fine dining at the Brasserie or unwind with a signature cocktail at the Hemingways Bar. Perfect for travelers seeking sophistication and a touch of safari adventure.",
      img: "https://www.fairmont.com/assets/0/104/2253/2258/2259/d3eed37c-d3ab-4fe1-85a9-dab49835cfe2.jpg"
    },
    {
      id: 4,
      title: "The Giraffe Manor",
      desc: "Enjoy a unique experience surrounded by giraffes at this charming boutique hotel. The Giraffe Manor, set within 12 acres of private land, offers a magical retreat in the heart of Nairobi. Interact with resident Rothschild giraffes that roam freely around the property, making every meal an unforgettable experience. Stay in luxurious rooms adorned with elegant furnishings and enjoy personalized service amidst a serene and enchanting environment.",
      img: "https://www.fairmont.com/assets/0/104/2253/2258/2259/aac930b8-bfcf-499c-848b-9586acf613e7.jpg"
    },
    {
      id: 5,
      title: "Eka Hotel Nairobi",
      desc: "Immerse yourself in Kenyan culture and art at this modern and stylish hotel. Eka Hotel Nairobi offers contemporary comfort in the vibrant city center. Discover spacious rooms with panoramic city views and indulge in authentic Kenyan cuisine at the Galaxy Restaurant. Whether for business or leisure, enjoy world-class amenities including a rooftop pool, fitness center, and conference facilities. Experience Nairobi’s bustling energy and cultural richness at Eka Hotel.",
      img: "https://www.fairmont.com/assets/0/104/2253/2258/2259/7d385202-ccf0-4c37-b4aa-f0c6ac273dda.jpg"
    }
  ];

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className='post__img'>
              <img src={post.img} alt={post.title} />
            </div>
            <div className='post__content'>
              <Link to={`/posts/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="add-hotel">
        <Link to="/add-hotel">
          <button className="btn btn-primary">Add Hotel</button>
        </Link>
      </div>
      <GuestServicesCard />
    </div>
  );
}

export default Home;
