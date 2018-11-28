import React from "react";
import Hello from "@/components/common/Hello";

const PageIndex = () => {

  return (
    <>
    <Hello />
    <img
        src="/nextjs.png"
        alt="Picture of Next.js"
      />
      <style jsx>{`
        img {
          width: 100%;
        }
        `}</style>
    </>
  )
};
export default PageIndex;