"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

export const Button = ({ href, color = "black", disabled, handleClick, children, customClasses, ...props }) => {
  const classes = clsx(
    "font-semibold uppercase outline-none px-4 py-2 transition",
    {
      // Colors for light mode
      "text-zinc-50 bg-zinc-950 ring-zinc-950 hover:bg-zinc-800 active:text-zinc-300 focus-visible:ring-2 ring-offset-2 ring-offset-zinc-50":
        color === "black" && !disabled,
      "text-zinc-950 bg-zinc-50 ring-zinc-50 hover:bg-zinc-200 active:text-zinc-700 focus-visible:ring-2 ring-offset-2 ring-offset-zinc-950":
        color === "white" && !disabled,

      // Colors for dark mode
      "dark:text-zinc-950 dark:bg-zinc-50 dark:ring-zinc-50 dark:hover:bg-zinc-200 dark:active:text-zinc-700 dark:focus-visible:ring-2 dark:ring-offset-2 dark:ring-offset-zinc-950":
        color === "black" && !disabled,
      "dark:text-zinc-50 dark:bg-zinc-950 dark:ring-zinc-950 dark:hover:bg-zinc-800 dark:active:text-zinc-300 dark:focus-visible:ring-2 dark:ring-offset-2 dark:ring-offset-zinc-50":
        color === "white" && !disabled,

      // Disabled styles for light mode
      "bg-zinc-500 text-zinc-600 cursor-default": color === "black" && disabled,
      "bg-zinc-300 text-zinc-400 cursor-default": color === "white" && disabled,

      // Disabled styles for dark mode
      "dark:bg-zinc-700 dark:text-zinc-500 cursor-default": color === "black" && disabled,
      "dark:bg-zinc-500 dark:text-zinc-300 cursor-default": color === "white" && disabled,
    },
    customClasses
  );

  if (href) {
    return (
      <Link href={disabled ? "" : href} onClick={handleClick} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};
