import LeftSide from "@/components/homepage/news/LeftSide";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSide from "@/components/homepage/news/RightSide";
import { getCategory, getNewsByCategory } from "@/lib/data";
import React from "react";

const NewsByCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id,"category");
  const data = await getCategory();
  const category = data.data.news_category;

  const data2 = await getNewsByCategory(id);
  const news = data2.data;
  //   console.log(news);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-6">
      <div className="col-span-3">
        <h2 className="mb-4 font-bold">All categories</h2>

        <LeftSide category={category} activeId={id}></LeftSide>
      </div>
      <div className="col-span-6 space-y-4">
        <div>
          {category.map((n) => (
            <h1 className="text-md text-center font-bold" key={n.category_id}>
              {id === n.category_id ? n.category_name : ""}
            </h1>
          ))}
        </div>
        {news.length > 0 ? (
          news.map((n) => <NewsCard n={n} key={n._id}></NewsCard>)
        ) : (
          <p className="text-center text-purple-300 p-6 font-bold">
            No news Available!
          </p>
        )}
      </div>
      <div className="col-span-3">
        <h2 className="mb-4">or <span className="font-bold text-md">Sign Up</span></h2>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsByCategoryPage;
