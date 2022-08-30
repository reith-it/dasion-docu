import React from "react";
import { HomeSection } from "../layouts";

type FeatureItem = {
  title: string;
  Svg: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "3 Mio. Datensätze",
    Svg: require("@site/static/img/records.png").default,
    description: <>verschlüsselte Datensätze sichern wir für unsere Kunden</>,
  },
  {
    title: "1.790 Backupjobs",
    Svg: require("@site/static/img/backup.png").default,
    description: <>Backupjobs laufen täglich vollautomatisch durch</>,
  },
  {
    title: "100%  Wiederherstellbarkeit",
    Svg: require("@site/static/img/recover.png").default,
    description: <>Wiederherstellungsquote seit dem ersten Tag</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="w-full items-center flex flex-col">
      <div>
        <img
          src={Svg}
          alt={title}
          className="md:w-[200px] w-[160px] h-[160px] md:h-[200px]"
        />
      </div>
      <div className="text-center">
        <h3>{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

export function DasionNumbers() {
  return (
    <HomeSection fTitle="DASION" sTitle="in Zahlen">
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1 ">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </HomeSection>
  );
}
