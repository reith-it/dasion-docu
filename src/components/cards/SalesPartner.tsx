import React from "react";
import { HomeSection } from "../layouts";

const myList = [
  "Self-Service-Portal",
  "Sales Support",
  "Faire Konditionen von Anfang an",
  "Technischer Support",
  "Ihre Kunden bleiben Ihre Kunden",
  "Langfristige Partnerschaft",
];

export function SalesPartner() {
  return (
    <HomeSection fTitle="Werden Sie" sTitle="Vertriebspartner">
      <div className="items-center flex flex-col">
        <img
          src={require("@site/static/img/partner.png").default}
          alt="partner"
          className="w-[270px]"
        />
        <p className="text-center">
          Sie bieten Ihren Kunden robuste Cloudbackuplösungen und profitieren
          von besserer Kundenbindung und mehr Umsatz. Wir arbeiten für Sie im
          Hintergrund und sorgen dafür, dass alles rund läuft.
        </p>
        <div className="w-full px-4 md:px-24">
          <ul className="grid w-full  grid-cols-1 md:grid-cols-2">
            {myList.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HomeSection>
  );
}
