import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

// 매 요청마다 최신 클릭 수를 읽도록 정적 캐싱을 끔
export const dynamic = "force-dynamic";

type ClickDoc = { _id: string; count: number };

const linkIds = new Set(links.map((link) => link.id));

async function getCollection() {
  const db = await getDb();
  return db.collection<ClickDoc>("clicks");
}

// 모든 링크의 클릭 수를 한 번에 반환: { counts: { [linkId]: number } }
export async function GET() {
  try {
    const docs = await (await getCollection()).find().toArray();
    const counts: Record<string, number> = {};
    for (const doc of docs) {
      if (linkIds.has(doc._id)) counts[doc._id] = doc.count;
    }
    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// 특정 링크의 클릭 수를 1 증가: body { id: string }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const doc = await (await getCollection()).findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
