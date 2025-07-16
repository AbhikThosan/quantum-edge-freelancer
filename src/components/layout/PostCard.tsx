"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface PostCardProps {
  image: StaticImageData;
  date: string;
  title: string;
}

const PostCard = ({ image, date, title }: PostCardProps) => {
  return (
    <div className="flex gap-[18px]">
      <Image src={image} alt={title} objectFit="cover" />
      <div className="flex flex-col gap-[9px]">
        <p className="text-[#CCC] text-xs capitalize">{date}</p>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
    </div>
  );
};

export default PostCard;
