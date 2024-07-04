import React from "react";
import img from "../assets/first.jpeg";

export default function PopBlogs() {
  return (
    <>
      <div className="container mx-auto px-4 my-8">
        <div className="capitalize text-secondary-text mb-4 text-2xl">
          popular blogs
        </div>
        {/* grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* flex */}
          {[1, 2, 3, 4].map(() => (
            <div className="flex flex-col gap-4 border-r px-4">
              <div className="h-[30vh] md:h-[40vh]">
                <img src={img} alt="" className="object-cover w-full h-full" />
              </div>
              <div className="text-secondary-text">January 11, 2023</div>
              <div className=" text-2xl font-bold">
                New Kaiju found "Kaiju no 8"
              </div>
              <div className="text-secondary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                cum omnis temporibus, quos sapiente magnam nisi veritatis
                recusandae eos id?
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
