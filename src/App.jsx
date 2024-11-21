import Card from "./Components/Card";
import Nav from "./Components/Nav";
import React, { useState } from "react";

function App() {
  const data = [
    {
      image:
        "https://source.boomplaymusic.com/group10/M00/08/31/c358884ea5874bb09b003f06879ffd2dH1400W1400_320_320.jpg",
      SongName: "Aaj ki raat",
      Artist: "Sachin",
      Added: false,
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b27372a77d038887cdc425f5ee55",
      SongName: "Jo tum mere ho",
      Artist: "Anuv",
      Added: false,
    },
    {
      image:
        "https://sund-images.sunnxt.com/7277/1600x1200_Ishq_7277_c9609601-a894-4b89-b9c0-3b2b63f0d86f.jpg",
      SongName: "Ishq",
      Artist: "Amir",
      Added: false,
    },
    {
      image: "https://i.ytimg.com/vi/uiNBqLphO2Y/sddefault.jpg",
      SongName: "Millionaire",
      Artist: "Honey",
      Added: false,
    },
    {
      image:
        "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37Y6OXbD/size_l.webp",
      SongName: "Born to Shine",
      Artist: "Diljit Dosanjh",
      Added: false,
    },
    {
      image:
        "https://a10.gaanacdn.com/gn_img/albums/YoEWlwa3zX/EWlwOYrn3z/size_l.jpg",
      SongName: "Calm Down",
      Artist: "Selena Gomez",
      Added: false,
    },
    {
      image:
        "https://a10.gaanacdn.com/gn_img/song/Bp1bAynb02/1bA7X2Jj30/size_l_1728992233.webp",
      SongName: "Chal Kudiye",
      Artist: "Diljit Dosanjh",
      Added: false,
    },
    {
      image:
        "https://a10.gaanacdn.com/gn_img/albums/0wrb4qNKLg/rb4kLeOMWL/size_l.jpg",
      SongName: "From Zero",
      Artist: "Linkin Park",
      Added: false,
    },
    {
      image:
        "https://a10.gaanacdn.com/gn_img/albums/qa4WEqqWP1/4WEqJoG5WP/size_l.jpg",
      SongName: "Mere Dholna 3.0",
      Artist: "Sonu Nigam",
      Added: false,
    },
    {
      image:
        "https://a10.gaanacdn.com/gn_img/albums/w4MKPgOboj/MKPDELoOKo/size_l.jpg",
      SongName: "Zaroorat Se Zyada",
      Artist: "Arijit Singh",
      Added: false,
    },
  ];

  const [songData, SetSongData] = useState(data);

  const handleBtnClick = (index) => {
    SetSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, Added: !item.Added };
        return item;
      });
    });
  };
  return (
    <>
      <Nav data={songData} />
      <div className="w-screen h-screen bg-gray-50 p-5 flex flex-wrap gap-10 justify-center ">
        {songData.map((e, i) => {
          return (
            <Card data={e} handleBtnClick={handleBtnClick} key={i} index={i} />
          );
        })}
      </div>
    </>
  );
}

export default App;
