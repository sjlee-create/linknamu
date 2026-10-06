import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import StarBackground from "@/components/StarBackground";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
      <StarBackground />
      <Profile profile={profile} />

      <ul className="mt-10 flex w-full flex-col gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
