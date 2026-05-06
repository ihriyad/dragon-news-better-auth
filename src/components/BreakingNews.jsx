import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const breakingNews = [
    {
      id: 1,
      title: "Global markets rally as inflation shows signs of easing",
    },
    {
      id: 2,
      title:
        "Tech companies unveil new AI tools at annual developer conference",
    },
    {
      id: 3,
      title: "Severe storms disrupt travel across multiple regions",
    },
    {
      id: 4,
      title: "New renewable energy project sets record capacity milestone",
    },
    {
      id: 5,
      title: "International sports tournament kicks off with opening ceremony",
    },
  ];

  return (
    <div className="flex justify-between items-center gap-2 container mx-auto bg-slate-100 py-3 px-2 rounded mt-4">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
        {breakingNews.map((n) => (
          <span className="mr-6" key={n.id}>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
