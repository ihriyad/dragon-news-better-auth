import RightSide from "@/components/homepage/news/RightSide";
import { getNewsDetails } from "@/lib/data";
import React from "react";
import NewsDetails from "../components/NewsDetails";
import Link from "next/link";

import { FaArrowLeft } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { newsId } = params;

  const data = await getNewsDetails(newsId);
  const details = data.data;

  const news = details[0];

  return {
    title: news?.title,
    description: news?.description,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { newsId } = await params;

  // console.log(id);
  const data = await getNewsDetails(newsId);
  const details = data.data;
  console.log(data, "details data");
  return (
    <div className="grid grid-cols-12 container mx-auto my-8 gap-4">
      <div className="col-span-9">
        <div>
          <Link className="flex gap-3 items-center mb-2" href={"/"}>
            <FaArrowLeft></FaArrowLeft> Back
          </Link>
          {details.map((d) => (
            <NewsDetails key={d._id} d={d}></NewsDetails>
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <h2 className="font-bold mb-2">Login with</h2>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
