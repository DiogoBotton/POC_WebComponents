"use client";

import { useEffect } from "react";

type WidgetProps = {
  src: string;
  tag: string;
};

export function Widget({ src, tag }: WidgetProps) {
  useEffect(() => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [src]);

  return <div dangerouslySetInnerHTML={{ __html: `<${tag}></${tag}>` }} />;
}