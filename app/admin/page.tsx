import {
  AlertCircle,
  BarChart3,
  CircleDollarSign,
  ClipboardList,
  Users
} from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { MetricCard } from "@/components/metric-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminStats, questions } from "@/lib/mock-data";

const statIcons = [ClipboardList, Users, CircleDollarSign, AlertCircle];

export default function AdminPage() {
  return (
    <AnimatedPage>
      <section className="page-shell">
        <div className="mb-8">
          <p className="text-sm font-medium text-teal-800">管理后台</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            平台运营概览
          </h1>
          <p className="subtle-copy mt-4 max-w-2xl">
            用 mock data 展示问题、用户、交易和审核内容的后台 MVP 视图。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {adminStats.map((stat, index) => (
            <MetricCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              detail={stat.change}
              icon={statIcons[index]}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>待审核内容</CardTitle>
              <Badge variant="accent">23 条</Badge>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="text-xs text-slate-500">
                  <tr className="border-b">
                    <th className="py-3 pr-4 font-medium">问题</th>
                    <th className="py-3 pr-4 font-medium">城市</th>
                    <th className="py-3 pr-4 font-medium">悬赏</th>
                    <th className="py-3 pr-4 font-medium">状态</th>
                    <th className="py-3 font-medium">风险提示</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question) => (
                    <tr key={question.id} className="border-b last:border-0">
                      <td className="max-w-[320px] py-4 pr-4 font-medium text-slate-950">
                        {question.title}
                      </td>
                      <td className="py-4 pr-4 text-slate-600">{question.city}</td>
                      <td className="py-4 pr-4 text-slate-600">¥{question.bounty}</td>
                      <td className="py-4 pr-4">
                        <Badge variant="secondary">{question.status}</Badge>
                      </td>
                      <td className="py-4 text-slate-600">低风险</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>交易漏斗</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {[
                { label: "发布问题", value: 100 },
                { label: "有人申请", value: 76 },
                { label: "回答完成", value: 48 },
                { label: "提问者确认", value: 41 }
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-medium text-slate-950">{item.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-teal-700"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="rounded-lg border bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-950">
                  <BarChart3 className="h-4 w-4 text-teal-700" />
                  MVP 观察重点
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  先验证提问意愿、回答者供给、匹配效率和单次咨询价格，再决定后端与支付方案。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedPage>
  );
}
