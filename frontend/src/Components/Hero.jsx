import React from "react";
import first from "../assets/first.jpeg";

export default function Hero() {
  return (
    <>
      <div className="bg-[#121212]">
        <div className="h-full text-white uppercase font-bold text-[5rem] md:text-[11rem] text-center">
          the blog
        </div>
        <div className="container mx-auto gap-8 grid md:grid-cols-2 py-6 px-4">
          {/* top or left section */}
          <div className="flex flex-col gap-2">
            <div className="h-[40vh] md:h-[50vh]">
              <img src={first} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col gap-2">
              {/* date */}
              <div className="text-secondary-text">January 11, 2023</div>
              {/* title */}
              <div className="text-white text-2xl font-bold">
                A new Kaiju "Kaiju No.8" has appeared in the view.
              </div>
              {/* content */}
              <div className="text-secondary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto eos deserunt, unde officia, rerum corrupti ea soluta,
                expedita ullam hic reiciendis. Molestiae repellendus enim id
                quisquam, recusandae culpa ratione magnam?
              </div>
              {/* <div className="border-b border-secondary-text"></div> */}
            </div>
          </div>
          {/* bottom or right section */}
          <div className="grid md:grid-row-3 gap-4">
            {[1, 2, 3].map(() => (
              <div className="flex items-center flex-row-reverse md:flex-row gap-8 border-b border-secondary-text">
                <div className="h-[20vh] w-full md:w-[30vw]">
                  <img
                    src={first}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {/* date */}
                  <div className="text-secondary-text">January 11, 2023</div>
                  {/* title */}
                  <div className="text-white text-2xl font-bold mb-4">
                    A new Kaiju "Kaiju No.8" has appeared in the view.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
