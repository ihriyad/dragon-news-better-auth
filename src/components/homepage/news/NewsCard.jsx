import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ n }) => {
  const { author, title, rating, image_url, details, total_view, _id } =
    n;
  const { number } = rating;
  const { name, published_date, img } = author;
  return (
    <div className="card bg-slate-100 shadow-sm space-y-3 p-4">
      {/* author */}
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={img}
            width={40}
            height={40}
            alt="author image"
          ></Image>
          <div>
            <p>{name}</p>
            <p>{published_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <CiBookmark size={'20'}/>
          <CiShare2 size={'20'} />
        </div>
      </div>
      <figure>
        <Image
          src={image_url}
          alt="news image"
          height={300}
          width={300}
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3">{details}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <h2 className="flex items-center gap-2">
              <FaStar className="text-yellow-300" />

              {number}
            </h2>
            <p className="flex justify-center items-center gap-2">
              <FaEye />

              {total_view}
            </p>
          </div>
          <Link href={`/news/${_id}`}>
            <button className="btn badge-outline">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
