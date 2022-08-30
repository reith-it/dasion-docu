import React from "react";
import { HomeSection } from "../layouts";

export function Promises() {
  return (
    <HomeSection fTitle="Unser" sTitle="Versprechen">
      <div className="items-center flex flex-col">
        <img
          src={require("@site/static/img/promise.png").default}
          alt="promise"
          className="w-[270px]"
        />
        <p className="text-center">
          Dasion ist Ihr Partner für sichere Backuplösungen. Unsere Software
          ermöglicht die Datensicherung von nahezu allen möglichen Quellen und
          garantiert gleichzeitig eine schnelle und einfache Wiederherstellung
          dieser Daten, sollte es einmal darauf ankommen. Durch das innovative
          Konzept des Managements aller Backups über ein Webportal sind Sie in
          der Lage, Ihr Backup ortsunabhängig zu verwalten und können so selbst
          eine Wiederherstellung von überall her durchführen. Alle Backupdaten
          und Metadaten werden ausschließlich in hochsicheren deutschen Tier-IV
          Rechenzentren gelagert, wodurch eine einzigartige Verfügbarkeit
          garantiert werden kann.
        </p>
      </div>
    </HomeSection>
  );
}
