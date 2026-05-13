import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Star, Wallet } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { ApplyAnswerDialog } from "@/components/apply-answer-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { questions } from "@/lib/mock-data";

export function generateStaticParams() {
  return questions.map((question) => ({ id: question.id }));
}

export default function QuestionDetailPage({
  params
}: {
  params: { id: string };
}) {
  const question = questions.find((item) => item.id === params.id);

  if (!question) {
    notFound();
  }

  return (
    <AnimatedPage>
      <section className="page-shell">
        <Button asChild variant="ghost" className="mb-5 px-0">
          <Link href="/questions">
            <ArrowLeft className="h-4 w-4" />
            返回问题列表
          </Link>
        </Button>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge>{question.status}</Badge>
                  <Badge variant="outline">{question.category}</Badge>
                  {question.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="pt-2 text-2xl leading-8 md:text-3xl">
                  {question.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="leading-7 text-slate-600">
                  {question.description}
                </p>
                <Separator />
                <div>
                  <h2 className="font-semibold text-slate-950">提问者想知道</h2>
                  <ul className="mt-3 grid gap-3">
                    {question.asks.map((ask) => (
                      <li
                        key={ask}
                        className="rounded-md border bg-slate-50 px-4 py-3 text-sm text-slate-700"
                      >
                        {ask}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>模拟回答区</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {question.answers.length > 0 ? (
                  question.answers.map((answer) => (
                    <div key={answer.author} className="rounded-lg border p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-slate-950">{answer.author}</p>
                          <p className="text-sm text-slate-500">{answer.role}</p>
                        </div>
                        <span className="flex items-center gap-1 text-sm text-amber-700">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          {answer.rating}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {answer.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-lg border border-dashed p-6 text-center">
                    <p className="font-medium text-slate-950">暂时还没有回答</p>
                    <p className="mt-2 text-sm text-slate-500">
                      你可以作为有经验的人申请回答这个问题。
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-5">
            <Card className="sticky top-24">
              <CardContent className="space-y-5 p-5">
                <div className="rounded-lg bg-teal-50 p-5">
                  <p className="text-sm text-teal-800">悬赏金额</p>
                  <p className="mt-2 text-4xl font-semibold text-teal-950">
                    ¥{question.bounty}
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-teal-700" />
                    {question.city} · {question.place}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-teal-700" />
                    截止 {question.deadline}
                  </span>
                  <span className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-teal-700" />
                    期望：{question.expectedFormat}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-white">
                    {question.requester.avatar}
                  </span>
                  <div>
                    <p className="font-medium text-slate-950">
                      {question.requester.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      提问者评分 {question.requester.rating}
                    </p>
                  </div>
                </div>
                <ApplyAnswerDialog />
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </AnimatedPage>
  );
}
