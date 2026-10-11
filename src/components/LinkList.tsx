"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: Record<string, number> }) =>
        // 그 사이에 눌린 클릭(낙관적 증가)이 있으면 더 큰 값을 유지
        setCounts((prev) => {
          const next = { ...data.counts };
          for (const [id, n] of Object.entries(prev)) {
            next[id] = Math.max(next[id] ?? 0, n);
          }
          return next;
        }),
      )
      .catch((error) => console.error("클릭 수 조회 실패:", error));
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive 사용
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch((error) => console.error("클릭 수 저장 실패:", error));
  }

  return (
    <ul className="mt-10 flex w-full flex-col gap-6">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            clickCount={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
