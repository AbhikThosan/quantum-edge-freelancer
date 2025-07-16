"use client";
import { usePopularPosts } from "@/hooks/usePopularPosts";
import React from "react";
import PostCard from "./PostCard";

const FooterPopularPosts = () => {
  const popularPosts = usePopularPosts();

  return (
    <div className="xl:w-1/2">
      <h3 className="font-bold text-lg mb-4">Our Popular Post</h3>
      <div className="flex flex-col lg:flex-row items-center gap-[45px]">
        {popularPosts.map((post, index) => (
          <PostCard
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterPopularPosts;
