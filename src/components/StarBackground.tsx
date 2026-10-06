// 프로필 사진(h-36/sm:h-40)의 약 1/3 크기 별을 화면 전체에 고르게 배치
const stars = [
  { top: "8%", left: "12%", rotate: "-12deg" },
  { top: "22%", left: "82%", rotate: "15deg" },
  { top: "48%", left: "6%", rotate: "8deg" },
  { top: "66%", left: "88%", rotate: "-20deg" },
  { top: "86%", left: "30%", rotate: "10deg" },
];

export default function StarBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {stars.map((star, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute h-12 w-12 fill-yellow-200 sm:h-14 sm:w-14"
          style={{
            top: star.top,
            left: star.left,
            transform: `translate(-50%, -50%) rotate(${star.rotate})`,
          }}
        >
          <path d="M12 2l2.94 6.26 6.86.78-5.1 4.66 1.4 6.77L12 17.08l-6.1 3.39 1.4-6.77-5.1-4.66 6.86-.78L12 2z" />
        </svg>
      ))}
    </div>
  );
}
