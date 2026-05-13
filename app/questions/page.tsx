import { AnimatedPage } from "@/components/animated-page";
import { QuestionFilter } from "@/components/question-filter";

export default function QuestionsPage() {
  return (
    <AnimatedPage>
      <section className="page-shell">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-medium text-teal-800">问题大厅</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            待回答的真实经验问题
          </h1>
          <p className="subtle-copy mt-4">
            通过城市、类别、悬赏和状态筛选问题。这里全部使用 mock data，方便先验证产品信息架构。
          </p>
        </div>
        <QuestionFilter />
      </section>
    </AnimatedPage>
  );
}
