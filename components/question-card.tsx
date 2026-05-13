import Link from "next/link";
import { ArrowRight, Clock, MapPin, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { Question } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<Question["status"], string> = {
  待回答: "bg-amber-100 text-amber-900",
  匹配中: "bg-teal-100 text-teal-900",
  已回答: "bg-slate-100 text-slate-700"
};

export function QuestionCard({
  question,
  compact = false
}: {
  question: Question;
  compact?: boolean;
}) {
  return (
    <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-soft">
      <CardHeader>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-md px-2.5 py-1 text-xs font-medium",
              statusStyles[question.status]
            )}
          >
            {question.status}
          </span>
          <Badge variant="outline">{question.category}</Badge>
        </div>
        <CardTitle className="line-clamp-2 text-base leading-6">
          {question.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!compact ? (
          <p className="line-clamp-2 text-sm leading-6 text-slate-600">
            {question.description}
          </p>
        ) : null}
        <div className="grid gap-2 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-teal-700" />
            {question.city} · {question.place}
          </span>
          <span className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-teal-700" />
            悬赏 ¥{question.bounty}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-teal-700" />
            截止 {question.deadline}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {question.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/questions/${question.id}`}>
            查看详情
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
