import React, { useState } from "react";
import DOMPurify from 'dompurify';
import banner from './images/bann.jpeg';
import shareicon from './images/share.svg';
import NavBar from './NavBar';
import Footer from './Footer' ;

const Blogview = ({title,posttime,content,image}) => {
  const [isliked, setisliked] = useState(false);
  const sanitizedHtml = DOMPurify.sanitize(content);
  const Handlelike = () => {
    setisliked(!isliked);
  };

  return (
    <>

      <div className="container mx-auto mt-4 md:mt-20 lg:mt-24 xl:mt-28">
        <div className="blog-post font-serif flex flex-row flex-wrap h-auto w-full md:h-52 md:w-3/5 border-4 rounded-lg hover:shadow-xl" style={{background:'none'}}>
          <img className="object-cover h-48 md:h-auto w-full md:w-2/5 " src={image||banner} alt="banner" />
          <div className="bg-green-200 md:w-3/5 w-full">
            <div className="p-5 inline ">
             {posttime}. 2 min
              <p className="inline bg-green-500 border-2 border-green-500 rounded-lg ml-4 text-white">Approved</p>
              <img src={shareicon} alt="share icon" className="inline w-6 ml-8"></img>
            </div>
            <div className="inline">
              <button onClick={Handlelike}>
                {isliked ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -10 34 30" width="24" height="24" fill="red">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-5 -10 34 30"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </button>
            </div>
            <button className="pl-4 py-4 line-clamp-3 text-2xl font-semibold transition ease-out duration-300  hover:-translate-y-1">
             <a href="/readit">{title}</a>
            </button>
            <article className="line-clamp-2 pl-4 text-lg">
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
            </article>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>

    </>
  );
};

export default Blogview;
