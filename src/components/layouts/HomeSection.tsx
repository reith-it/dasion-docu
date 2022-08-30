import React from "react";

export function HomeSection(props: {
  fTitle: string;
  sTitle: string;
  children: React.ReactNode;
}): JSX.Element {
  const { fTitle, sTitle, children } = props;
  return (
    <section className="px-4 md:px-36 my-12">
      {/* <div className="flex text-center justify-center flex-row mb-8 items-center"> */}
      <h1 className="text-center">
        <span className="text-xl md:text-2xl underline m-0 uppercase font-bold">
          {fTitle}
        </span>
        <span className="ml-2 text-xl md:text-2xl font-bold opacity-90">
          {sTitle}
        </span>
      </h1>

      {/* </div> */}
      {children}
    </section>
  );
}
