import React from "react";
import { HomeSection } from "../layouts";

type itemList = {
  Icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
};

// Deutsche High-End-Server
// ISO-zertifizierte Rechenzentren
// Hohe Performance
// Sichere AES-256 Verschlüsselung
// 24/7 Operations Center
// Web based Management
// Für Workstation, NAS u. Server
// Ausgezeichneter Support

const myList: itemList[] = [
  {
    Icon: require("@site/static/svg/server.svg").default,
    description: "Deutsche High-End-Server",
  },
  {
    Icon: require("@site/static/svg/certificate.svg").default,
    description: "ISO-zertifizierte Rechenzentren",
  },
  {
    Icon: require("@site/static/svg/rocket.svg").default,
    description: "Hohe Performance",
  },
  {
    Icon: require("@site/static/svg/lock.svg").default,
    description: "Sichere AES-256 Verschlüsselung",
  },
  {
    Icon: require("@site/static/svg/clock.svg").default,
    description: "24/7 Operations Center",
  },
  {
    Icon: require("@site/static/svg/statistics.svg").default,
    description: "Web based Management",
  },
  {
    Icon: require("@site/static/svg/desktop.svg").default,
    description: "Für Workstation, NAS u. Server",
  },
  {
    Icon: require("@site/static/svg/support.svg").default,
    description: "Ausgezeichneter Support",
  },
];

export function CloudBackup(): JSX.Element {
  return (
    <HomeSection fTitle="Das deutsche" sTitle="Cloud Backup">
      <div className="px-4">
        <p className="text-center text-sm md:text-base ">
          Das Backup für mehr Entspannung und Sicherheit. Wir kümmern uns um die
          modernste und sicherste verfügbare Technologie, damit Sie Ihre Daten
          jederzeit in Sicherheit wissen.
        </p>
        <div className="grid px-4 md:px-24 grid-cols-1 md:grid-cols-2 gap-6">
          {myList.map((item, idx) => (
            <div key={idx} className="flex flex-row items-center">
              <item.Icon className="md:w-8 w-6 h-6 md:h-8 mr-4" fill="gray" />
              <p className="text-left text-sm md:text-base font-semibold m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
