import React from "react";

function Card({ username = "Olisa", post = "Not assigned yet", Image }) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img src={Image} alt="" />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">{post}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
