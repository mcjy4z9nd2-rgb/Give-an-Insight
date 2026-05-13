import Link from "next/link";
import {
  ArrowUpRight,
  BadgeDollarSign,
  History,
  Star,
  WalletCards
} from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { MetricCard } from "@/components/metric-card";
import { QuestionCard } from "@/components/question-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { questions, userStats } from "@/lib/mock-data";

export default function DashboardPage() {
  const ownedQuestions = questions.slice(0, 3);
  const appliedQuestions = questions.slice(2, 5);

  return (
    <AnimatedPage>
      <section className="page-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-teal-800">用户中心</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
              我的提问、回答和模拟交易
            </h1>
            <p className="subtle-copy mt-4 max-w-2xl">
              当前页面展示一个用户既是提问者、也是回答者时的核心信息。
            </p>
          </div>
          <Button asChild>
            <Link href="/post">
              发布新问题
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="模拟支出"
            value={`¥${userStats.spent}`}
            detail="已发布问题悬赏"
            icon={WalletCards}
          />
          <MetricCard
            label="模拟收入"
            value={`¥${userStats.earned}`}
            detail="已完成回答收益"
            icon={BadgeDollarSign}
          />
          <MetricCard
            label="综合评分"
            value={userStats.rating.toString()}
            detail="提问与回答综合"
            icon={Star}
          />
          <MetricCard
            label="历史记录"
            value={`${userStats.completed}`}
            detail="完成的问答次数"
            icon={History}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>我发布的问题</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {ownedQuestions.map((question) => (
                <QuestionCard key={question.id} question={question} compact />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>我申请回答的问题</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {appliedQuestions.map((question) => (
                <Link
                  key={question.id}
                  href={`/questions/${question.id}`}
                  className="block rounded-lg border bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary">{question.status}</Badge>
                    <span className="text-sm font-medium text-teal-800">
                      ¥{question.bounty}
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-slate-950">
                    {question.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    {question.city} · {question.category}
                  </p>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>评分与历史记录</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {[
              "回答被采纳：8 次",
              "平均响应时间：3.6 小时",
              "最近一次完成：上海租房噪音咨询"
            ].map((item) => (
              <div key={item} className="rounded-lg border bg-slate-50 p-4 text-sm">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </AnimatedPage>
  );
}
