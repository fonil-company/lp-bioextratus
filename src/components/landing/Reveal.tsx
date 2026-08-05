import { useEffect, useRef, useState, type ReactNode } from "react";

/** Revela o conteúdo com fade-in discreto ao entrar na viewport. */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "article";
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-visible={visible}
      data-direction={direction}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
