import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import StarBackground from "@/components/StarBackground";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
      <StarBackground />
      <Profile profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
