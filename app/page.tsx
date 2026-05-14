import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Volume2,
  WalletCards
} from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { MotionCard } from "@/components/motion-card";
import { QuestionCard } from "@/components/question-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  exampleQuestions,
  processSteps,
  questions,
  trustSignals
} from "@/lib/mock-data";

const trustIcons = {
  shield: ShieldCheck,
  wallet: WalletCards,
  building: Building2,
  sparkles: Sparkles,
  home: Home,
  volume: Volume2
};

export default function HomePage() {
  return (
    <AnimatedPage>
      <section
        className="relative min-h-[78vh] overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,6,23,0.82), rgba(2,6,23,0.42), rgba(2,6,23,0.22)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="container flex min-h-[78vh] items-center py-16">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-white/15 text-white backdrop-blur">
              按需付费提问 · 真实经验回答
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-normal md:text-6xl">
              把网上查不到的真实经验，变成一次可信任的咨询。
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
              面对租房、买房、办公选址、教育周边等高度个体化决策，你可以发布具体问题和悬赏，让真正经历过的人回答细节。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-100">
                <Link href="/post">
                  发布问题
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <Link href="/questions">
                  成为回答者
                  <UsersRound className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="container grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-6">
          {trustSignals.map((item) => {
            const Icon = trustIcons[item.icon as keyof typeof trustIcons];
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-md border bg-white px-3 py-3 text-sm text-slate-700"
              >
                <Icon className="h-4 w-4 text-teal-700" />
                {item.label}
              </div>
            );
          })}
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-teal-800">平台流程</p>
            <h2 className="section-title mt-2">从具体疑问到可行动答案</h2>
            <p className="subtle-copy mt-4">
              MVP 阶段用 mock data 展示完整业务闭环：提问、浏览、申请回答、查看模拟回答、用户中心和后台概览。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <MotionCard key={step.title} delay={index * 0.08}>
                <Card className="h-full">
                  <CardContent className="p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-sm font-semibold text-teal-800">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-teal-800">示例问题</p>
              <h2 className="section-title mt-2">适合被悬赏的问题长这样</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/questions">
                浏览全部
                <Search className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {questions.slice(0, 3).map((question, index) => (
              <MotionCard key={question.id} delay={index * 0.08}>
                <QuestionCard question={question} compact />
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <Card className="overflow-hidden border-slate-200 bg-slate-950 text-white">
          <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
            <div>
              <h2 className="text-2xl font-semibold">不是问“好不好”，而是问“对我是否合适”。</h2>
              <div className="mt-5 grid gap-3">
                {exampleQuestions.map((question) => (
                  <div key={question} className="flex items-start gap-3 text-sm text-white/82">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    {question}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-white/70">未来商业模式</p>
              <p className="mt-3 text-4xl font-semibold">佣金抽成</p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                每次问答交易完成后，平台从悬赏中抽取服务佣金。MVP 阶段仅保留界面和数据结构，不接真实支付。
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </AnimatedPage>
  );
}
