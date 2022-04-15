import React from "react";
import Navbar from "../components/Navbar";
import workspace from "../images/workspace.png";
import seo_icon1 from "../images/seo_icon1.png";
import seo_icon2 from "../images/seo_icon2.png";
import seo_icon3 from "../images/seo_icon3.png";
import rocket_image from "../images/Rocket_image.png";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Main page here */}

      <div className="bg-red-200 grid grid-cols-2 mt-48 ml-60">
        <div>
          <p className="font-bold text-[3rem]">
            We Provide Truly <br /> Creative Digital <br /> solutions
          </p>
          <div className="space-x-2.5 border-solid border-4 border-black mr-38">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
              />
            </svg>
            <input
              type="text"
              className=" bg-red-200 outline-none ml-1 font-serif font-bold text-black inline-block justify-center w-9/12 h-10"
              placeholder="Your E-mail Address"
            />
            <button
              type="button"
              className="text-white font-bold inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-orange-500  focus:outline-none focus:ring-orange-500 rounded-none text-sm px-5 py-2.5 mr-5 md:mr-0 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500 "
            >
              SUBSCRIBE
            </button>
          </div>
          <div className=" mt-4 ">
            <p>
              Have an Account Already?{" "}
              <span className="text-orange-400 cursor-pointer">Get Offers</span>{" "}
            </p>
          </div>
        </div>

        <div>
          <img
            src={workspace}
            alt="WorkSpace"
            className="object-cover w-9/12 "
            srcset=""
          />
        </div>
      </div>

      {/* Middle page here */}
      <div className=" bg-white grid grid-cols-3 mt-48 py-10 px-40">
        <div class="  max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={seo_icon1} alt="seco1" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Web Design &amp; Development
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={seo_icon2} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              SEO &amp; Creative digital Marketing
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={seo_icon3} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Idea &amp; Research Business Analytics
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>

      {/* End page here */}

      <div className=" bg-sky-200 grid grid-cols-2">
        <div className="ml-56 mt-10">
          <p className="text-orange-500 font-bold">About Us</p>
          <p className="text-black font-bold text-3xl mt-7">
            We Are Proffesional Great <br /> Digital Agency!
          </p>

          <p className="text-xl mt-10">
            Your ton the other hand, we danounce with righteous <br />{" "}
            indignation and dislike men who are beguiled
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="inline-block mt-5">Research and Analysis</p>

          <br />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="inline-block mt-5">
            Create content that gets your business found online
          </p>

          <br />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="inline-block mt-5">
            Increase your online presence and traffic
          </p>
          <div className="mt-4">
            <button class="bg-orange-500 px-10 py-2 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">About Us &#8594;</button>
          </div>
        </div>

        <div className="mt-20 object-cover w-3/6 mr-80 ml-52">
          <img src={rocket_image} alt="Rocket_Image" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
