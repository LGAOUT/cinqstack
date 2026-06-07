"use client";

import { useState } from "react";
import type { Lang } from "@/types";

import Navbar   from "@/components/sections/Navbar";
import Hero     from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import Process  from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Why      from "@/components/sections/Why";
import FAQ      from "@/components/sections/FAQ";
import Contact  from "@/components/sections/Contact";
import Footer   from "@/components/sections/Footer";
import Divider  from "@/components/ui/Divider";

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <>
      <Navbar lang={lang} onLangToggle={() => setLang((l) => (l === "fr" ? "en" : "fr"))} />
      <main>
        <Hero     lang={lang} />
        <Divider />
        <Services lang={lang} />
        <Divider />
        <Packages lang={lang} />
        <Divider />
        <Process  lang={lang} />
        <Divider />
        <Projects lang={lang} />
        <Divider />
        <Why      lang={lang} />
        <Divider />
        <FAQ      lang={lang} />
        <Divider />
        <Contact  lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}