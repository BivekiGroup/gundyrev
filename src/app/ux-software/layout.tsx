import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "UX-софт - Улучшение пользовательского опыта в интернете | GUNDYREV",
  description: "Профессиональное программное решение для улучшения пользовательского опыта в сети интернет. Безопасность, приватность и оптимизация соединения.",
  keywords: "UX софт, улучшение пользовательского опыта, интернет оптимизация, безопасность в сети, приватность онлайн",
};

export default function UXSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 