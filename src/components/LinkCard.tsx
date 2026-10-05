import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
};

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-foreground/15 px-5 py-4 text-center transition hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-foreground/5 active:translate-y-0"
    >
      <span className="block text-base font-semibold">{link.title}</span>
      <span className="mt-1 block text-sm text-foreground/60">
        {link.description}
      </span>
    </a>
  );
}
