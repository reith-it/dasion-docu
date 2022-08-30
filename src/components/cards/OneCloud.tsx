import React from "react";
import { HomeSection } from "../layouts";

export function OneCloud() {
  return (
    <HomeSection fTitle="Ein Cloud Backup" sTitle="für alle Geräte">
      <div className="items-center flex flex-col">
        <img
          src={require("@site/static/img/divices.png").default}
          alt="divices"
          className="w-[270px]"
        />
        <p className="text-center">
          Dasion wurde mit der Vision gegründet, das sicherste und zugleich
          komfortabelste Backup Deutschlands zu einem attraktiven Preis anbieten
          zu können. Dank unserer innovativen Technologie und ausgewählten
          Partnerschaften ist Ihr Cloud-Backup nicht nur sicher, sondern auch
          schnell und intuitiv.
        </p>
        <ul className="px-12 md:px-32">
          <li>
            Für unser Backup unterstützen wir eine breite Anzahl an
            Quellgeräten, von Workstation bis hin zu Servern und Applikationen.
          </li>
          <li>
            Die schnelle Weiterentwicklung unserer Software sorgt zudem für
            höchste Zukunftssicherheit - überzeugen Sie sich selbst.
          </li>
        </ul>
      </div>
    </HomeSection>
  );
}
