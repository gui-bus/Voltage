"use client";
//#region Imports
import { useEffect } from "react";

//#endregion

//#region Types
type ScrollSpySection = {
  id: string;
};
//#endregion

export const useScrollSpy = (sections: ScrollSpySection[]) => {
  //#region useEffects
  useEffect(() => {
    const visibleSections = new Set<string>();

    const updateHash = () => {
      if (visibleSections.size === 0) {
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;

          if (entry.isIntersecting) {
            visibleSections.add(id);
            if (window.location.hash !== `#${id}`) {
              window.history.replaceState(null, "", `#${id}`);
            }
          } else {
            visibleSections.delete(id);
            updateHash();
          }
        });
      },
      {
        rootMargin: "-50% 0px -49% 0px",
        threshold: 0,
      },
    );

    const elements = sections.map(({ id }) => document.getElementById(id));

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);
  //#endregion
};
