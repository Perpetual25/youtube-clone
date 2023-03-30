// import React from "react";
import "./App.css";
// import Button from "./component/Button";
// import Cards from "./component/Cards";
// import Navbar from "./component/Navbar";
// import Sidebar from "./component/Sidebar";
// import Shorts from "./component/Shorts";
// import Img1 from "./component/youtube images/img2.jpg";
// import pix from "./component/youtube images/photo.jpg";
// import Img2 from "./component/youtube images/img2.jpg";
// import pix2 from "./component/youtube images/pix2.jpg";
// import Img3 from "./component/youtube images/img3.jpg";
// import pix3 from "./component/youtube images/pix3.jpg";
// import Img4 from "./component/youtube images/img4.jpg";
// import pix4 from "./component/youtube images/pix4.jpg";
// import Img5 from "./component/youtube images/img5.jpg";
// import pix5 from "./component/youtube images/pix5.jpg";
// import Img6 from "./component/youtube images/img6.jpg";
// import pix6 from "./component/youtube images/pix6.jpg";
  // const btnData = [
  //   { p: "All" },
  //   { p: "React Routers" },
  //   { p: "Music" },
  //   { p: "HTML 5" },
  //   { p: "Live" },
  //   { p: "User Interface Design" },
  //   { p: "C++" },
  //   { p: "Hair Conditioner" },
  //   { p: "Podcast" },
  //   { p: "Graphics Design" },
  //   { p: "Javascript" },
  // ];

//   const cardData = [
//     {
//       image: Img1,
//       h5: "57:56",
//       pic: pix,
//       h2: "The Hardwork Behind the Glam Ft Kiekie",
//       p: "Tea with Tay Podcast",
//       h6: "25k views . 3 days ago",
//     },
//     {
//       image: Img2,
//       pic: pix2,
//       h2: "Life After Google Layoffs|A Day in Life as a Google Software Developer",
//       p: "Bukola",
//       h6: "12k views . 1 month ago",
//     },
//     {
//       image: Img3,
//       pic: pix3,
//       h2: "Do THIS to make $900 Per Day in 2023",
//       p: "Fisayo Fosudo",
//       h6: "109k views . 2 weeks ago",
//     },
//     {
//       image: Img4,
//       pic: pix4,
//       h2: "Modern React Web Development Full Course - 12 Hours| 4 Real Industry Web Application",
//       p: "Javascript Mastery",
//       h6: "25k views . 3 days ago",
//     },
//     {
//       image: Img5,
//       pic: pix5,
//       h2: "Build a Complete Responsive Personal Portfolio Website using HTML, CSS, Javascript",
//       p: "Codhal",
//       h6: "106k views . 1 month ago",
//     },
//     {
//       image: Img6,
//       pic: pix6,
//       h2: "React Tutorials For Beginners",
//       p: "Programming With Mosh",
//       h6: "96k views . 9 days ago",
//     },
//     {
//       image: Img6,
//       pic: pix6,
//       h2: "React Tutorials For Beginners",
//       p: "Programming With Mosh",
//       h6: "96k views . 9 days ago",
//     },
//     {
//       image: Img6,
//       pic: pix6,
//       h2: "React Tutorials For Beginners",
//       p: "Programming With Mosh",
//       h6: "96k views . 9 days ago",
//     },
//     {
//       image: Img6,
//       pic: pix6,
//       h2: "React Tutorials For Beginners",
//       p: "Programming With Mosh",
//       h6: "96k views . 9 days ago",
//     },
//      {
//       image: Img6,
//       pic: pix6,
//       h2: "React Tutorials For Beginners",
//       p: "Programming With Mosh",
//       h6: "96k views . 9 days ago",
//     },
//   ];

//   return (
//     <div className="body_div">
//       <div className="Navdiv">
//         <Navbar />
//       </div>
//       <div className="main_div">
//         <div className="sidebar_div">
//           <Sidebar />
//         </div>

//         <div className="card_div">
//           <div className="btn">
//             {btnData.map(({ p }, index) => {
//               return <Button text={p} key={index} />;
//             })}
//           </div>

//           <div className="cards">
//             <div className="card_shorts">
//             {cardData.map((data, index) => {
//               const { image, h5, pic, h2, p, h6 } = data;
//               return (
//                 <Cards
//                   key={index}
//                   image={image}
//                   h5={h5}
//                   pic={pic}
//                   h2={h2}
//                   p={p}
//                   h6={h6}
//                 />
//               );
//             })}
//             </div>
//             <div className="shorts_hrule">
//             <div className="hrule">
//             loremiuytrertyuioplsdgxcv
//           </div>
//           <div className="shorts_container">
//             <Shorts />
//           </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



import Navbar from './component/Navbar.jsx'
import Sidebar from "./component/Sidebar";
import Button from "./component/Button";
import Cards from "./component/Cards";
import Img1 from "./component/youtube images/img2.jpg";
import pix from "./component/youtube images/photo.jpg";
import Img2 from "./component/youtube images/img2.jpg";
import pix2 from "./component/youtube images/pix2.jpg";
import Img3 from "./component/youtube images/img3.jpg";
import pix3 from "./component/youtube images/pix3.jpg";
import Img4 from "./component/youtube images/img4.jpg";
import pix4 from "./component/youtube images/pix4.jpg";
import Img5 from "./component/youtube images/img5.jpg";
import pix5 from "./component/youtube images/pix5.jpg";
import Img6 from "./component/youtube images/img6.jpg";
import pix6 from "./component/youtube images/pix6.jpg";



const App = () => {

  const btnData = [
    { p: "All" },
    { p: "React Routers" },
    { p: "Music" },
    { p: "HTML 5" },
    { p: "Live" },
    { p: "User Interface Design" },
    { p: "C++" },
    { p: "Hair Conditioner" },
    { p: "Podcast" },
    { p: "Graphics Design" },
    { p: "Javascript" },
  ];

    const cardData = [
    {
      image: Img1,
      h5: "57:56",
      pic: pix,
      h2: "The Hardwork Behind the Glam Ft Kiekie",
      p: "Tea with Tay Podcast",
      h6: "25k views . 3 days ago",
    },
          {
            image: Img2,
      pic: pix2,
      h2: "Life After Google Layoffs|A Day in Life as a Google Software Developer",
      p: "Bukola",
      h6: "12k views . 1 month ago",
    },
    {
      image: Img3,
      pic: pix3,
      h2: "Do THIS to make $900 Per Day in 2023",
      p: "Fisayo Fosudo",
      h6: "109k views . 2 weeks ago",
    },
    {
      image: Img4,
      pic: pix4,
      h2: "Modern React Web Development Full Course - 12 Hours| 4 Real Industry Web Application",
      p: "Javascript Mastery",
      h6: "25k views . 3 days ago",
    },
    {
      image: Img5,
      pic: pix5,
      h2: "Build a Complete Responsive Personal Portfolio Website using HTML, CSS, Javascript",
      p: "Codhal",
      h6: "106k views . 1 month ago",
    },
    {
      image: Img6,
      pic: pix6,
      h2: "React Tutorials For Beginners",
      p: "Programming With Mosh",
      h6: "96k views . 9 days ago",
    },
    {
      image: Img6,
      pic: pix6,
      h2: "React Tutorials For Beginners",
      p: "Programming With Mosh",
      h6: "96k views . 9 days ago",
    },
    {
      image: Img6,
      pic: pix6,
      h2: "React Tutorials For Beginners",
      p: "Programming With Mosh",
      h6: "96k views . 9 days ago",
    },
    {
      image: Img6,
      pic: pix6,
      h2: "React Tutorials For Beginners",
      p: "Programming With Mosh",
      h6: "96k views . 9 days ago",
    },
     {
      image: Img6,
      pic: pix6,
      h2: "React Tutorials For Beginners",
      p: "Programming With Mosh",
      h6: "96k views . 9 days ago",
    },

  ]


  return(
    <>
        <Navbar/>
      
      <div className="main_div">
        
        <Sidebar/>
        <div className="card_div">
             <div className="btn">
               {btnData.map(({ p }, index) => {
                 return <Button text={p} key={index} />;
               })}
             </div>
      <div className="cards">
        <div className="card_shorts">
            {cardData.map((data, index) => {
              const { image, h5, pic, h2, p, h6 } = data;
              return (
                <Cards
                key={index}
                image={image}
                h5={h5}
                pic={pic}
                h2={h2}
                p={p}
                h6={h6}
                />
                );
              })}
      </div>
      </div>
              </div>
              </div>

    </>
  )
}

export default App;
