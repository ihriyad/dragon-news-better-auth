import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsDetails = ({d}) => {
    const {title, thumbnail_url, details, category_id} = d;
    return (
        <div className='bg-slate-200 space-y-4 p-8'>
            <figure>
                <Image
                src={thumbnail_url}
                width={300}
                height={300}
                className=''
                alt='thumbnail'></Image>
            </figure>
            <div>{title}</div>
            <div>{details}</div>
            <div><Link href={`/category/${category_id}`}><button className="btn bg-pink-400 ">See More on same category</button></Link></div>
        </div>
    );
};

export default NewsDetails;