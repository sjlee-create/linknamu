// 더미 데이터: 실제 프로필과 링크로 교체하세요.

export type LinkItem = {
  id: string;
  title: string;
  description: string;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  imageUrl: string;
};

export const profile: ProfileData = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    description: "코드 저장소 구경하기",
    url: "https://github.com",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "경력과 이력 보기",
    url: "https://www.linkedin.com",
  },
  {
    id: "blog",
    title: "Blog",
    description: "개발 이야기 읽기",
    url: "https://example.com",
  },
];
