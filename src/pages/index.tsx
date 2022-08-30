import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import {
  CloudBackup,
  CloudBackupHigh,
  DasionNumbers,
  MemberSC,
  OneCloud,
  Promises,
  SalesPartner,
} from "../components";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Cloud Backup MADE IN GERMANY
        </h1>
        <p className="text-xl md:text-2xl text-center">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary font-bold mt-5 p-4 md:text-xl md:w-fit w-full"
            to="/docs/intro"
          >
            Service Documentation - 3min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Die innovative deutsche Online Backup Lösung für Server, PC, Workstations und virtuelle Server: modernste, sicherste verfügbare Technologie."
    >
      <HomepageHeader />
      <main>
        <DasionNumbers />
        <CloudBackup />
        <CloudBackupHigh />
        <OneCloud />
        <SalesPartner />
        <Promises />
        <MemberSC />
      </main>
    </Layout>
  );
}
