import Link from "@docusaurus/Link";
import React from "react";
import { HomeSection } from "../layouts";
import styles from "./cards.module.css";

export function MemberSC() {
  return (
    <HomeSection fTitle="Mitglied der" sTitle="Allianz für Cyber-Sicherheit!">
      <div className="items-center flex flex-col">
        <img
          src={require("@site/static/img/member.png").default}
          alt="member"
          className="w-[270px]"
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://www.allianz-fuer-cybersicherheit.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mehr erfahren →
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
