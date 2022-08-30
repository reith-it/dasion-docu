import React from "react";
import { HomeSection } from "../layouts";
type FeatureItem = {
  title: string;
  Svg: string;
  description: JSX.Element;
};
function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="w-full items-center flex flex-col">
      <div>
        <img
          src={Svg}
          alt={title}
          className="w-[160px] md:w-[200px] h-[160px] md:h-[200px]"
        />
      </div>
      <div className="px-2">
        <h3 className="text-center text-xl">{title}</h3>
        <p className="text-left text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

const listFeatures: FeatureItem[] = [
  {
    title: "Backup für Windows, Mac und Linux",
    Svg: require("@site/static/img/os.png").default,
    description: (
      <ul>
        <li>Backup für zu Hause - mit Militärverschlüsselung</li>
        <li>Das deutsche Backup für Windows, Mac und Linux</li>
      </ul>
    ),
  },
  {
    title: "Backup für Server, vServer und Applikationen",
    Svg: require("@site/static/img/degree.png").default,
    description: (
      <ul>
        <li>Der 360° Rundumschutz für Ihr Unternehmen</li>
        <li>Datenbanken und Applikationen (Office365, MySQL, OneDrive uvm.)</li>
      </ul>
    ),
  },
];

export function CloudBackupHigh() {
  return (
    <HomeSection fTitle="Cloud Backup" sTitle="für höchste Ansprüche">
      <div className="">
        <p className="text-center text-sm md:text-base">
          Höchste Sicherheit für Ihre Daten mit 100 % Datenstandort Deutschland.
          Mit innovativem Schutz vor Ransomware.
        </p>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          {listFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
