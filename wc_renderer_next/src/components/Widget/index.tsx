"use client";

import { useEffect } from "react";

interface WidgetProps {
  src: string;
  tag: string;
  name?: string;
  githubUrl?: string;
};

export function Widget({ src, tag, name = "", githubUrl = "" }: WidgetProps) {
  useEffect(() => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [src]);

  return <div dangerouslySetInnerHTML={{ __html: `<${tag} name="${name}" githuburl="${githubUrl}"></${tag}>` }} />;
}