import Image from "next/image";
import type { ProfileData } from "@/data/profile";

type ProfileProps = {
  profile: ProfileData;
};

export default function Profile({ profile }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-36 w-36 rounded-full border-2 border-foreground/10 object-cover sm:h-40 sm:w-40"
      />
      <h1 className="mt-5 text-2xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-base text-foreground/70">{profile.bio}</p>
    </section>
  );
}
