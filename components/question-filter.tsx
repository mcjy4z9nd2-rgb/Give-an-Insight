"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { QuestionCard } from "@/components/question-card";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { categories, cities, questions, statuses } from "@/lib/mock-data";

const bountyOptions = [
  { label: "全部金额", value: "全部" },
  { label: "¥50 以上", value: "50" },
  { label: "¥100 以上", value: "100" },
  { label: "¥150 以上", value: "150" }
];

export function QuestionFilter() {
  const [city, setCity] = useState("全部");
  const [category, setCategory] = useState("全部");
  const [status, setStatus] = useState("全部");
  const [bounty, setBounty] = useState("全部");

  const filtered = useMemo(() => {
    return questions.filter((question) => {
      const byCity = city === "全部" || question.city === city;
      const byCategory = category === "全部" || question.category === category;
      const byStatus = status === "全部" || question.status === status;
      const byBounty = bounty === "全部" || question.bounty >= Number(bounty);
      return byCity && byCategory && byStatus && byBounty;
    });
  }, [bounty, category, city, status]);

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="grid gap-4 p-5 md:grid-cols-5">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
            <SlidersHorizontal className="h-4 w-4 text-teal-700" />
            筛选问题
          </div>
          <div className="space-y-2">
            <Label>城市</Label>
            <Select
              value={city}
              onChange={(event) => setCity(event.target.value)}
              options={cities.map((item) => ({ label: item, value: item }))}
            />
          </div>
          <div className="space-y-2">
            <Label>类别</Label>
            <Select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              options={categories.map((item) => ({ label: item, value: item }))}
            />
          </div>
          <div className="space-y-2">
            <Label>悬赏</Label>
            <Select
              value={bounty}
              onChange={(event) => setBounty(event.target.value)}
              options={bountyOptions}
            />
          </div>
          <div className="space-y-2">
            <Label>状态</Label>
            <Select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              options={statuses.map((item) => ({ label: item, value: item }))}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          当前展示 <span className="font-medium text-slate-950">{filtered.length}</span>{" "}
          个问题
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
