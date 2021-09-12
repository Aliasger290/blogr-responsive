import React from "react";
import desktopImage from "../images/illustration-editor-desktop.svg";
import mobileImage from "../images/illustration-editor-mobile.svg";

const Design = () => {
  return (
    <>
      <section className="py-20 px-10">
        <h2 className="text-center text-3xl lg:text-4xl 2xl:text-5xl">
          Designed for the future
        </h2>

        <div className="flex flex-col-reverse text-center md:grid md:grid-cols-2 md:gap-5 md:items-center md:text-left 
        xl:max-w-7xl xl:mx-auto">
          <div className="mt-10">
            <h3 className="text-xl mt-10 mb-5">
              Introducing an extensible editor
            </h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              e,beds such as imagesm videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <h3 className="text-xl mt-10 mb-5">Robust vontent management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>

          <div>
            <picture className="">
              <source
                media="(min-width: 1024px)"
                srcset={desktopImage}
                sizes=""
              />
              <img
                src={mobileImage}
                alt=""
                className="w-full mx-auto block mt-10"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
