"use client";

import { cn } from "@heroui/react";
import { useLocale, useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { usePathname, useRouter } from "@/i18n/routing";

const countries: Record<string, string> = {
  pt: "BR",
  en: "US",
};

export function LanguageSelector() {
  const locale = useLocale();
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div
      className="flex items-center border border-white/10 bg-white/5 p-0.5"
      title={t("selectLanguage")}
    >
      {["pt", "en"].map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 transition-all duration-300",
            locale === loc
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              : "text-white/40 hover:text-white hover:bg-white/5",
          )}
        >
          <div className="w-4 h-3 overflow-hidden flex items-center justify-center">
            <ReactCountryFlag
              countryCode={countries[loc]}
              svg
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">
            {loc}
          </span>
        </button>
      ))}
    </div>
  );
}
