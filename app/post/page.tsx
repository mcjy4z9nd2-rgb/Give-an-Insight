import { AnimatedPage } from "@/components/animated-page";
import { PostQuestionForm } from "@/components/post-question-form";

export default function PostQuestionPage() {
  return (
    <AnimatedPage>
      <section className="page-shell">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-teal-800">发布问题</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            用一个具体问题，换一段真实经验
          </h1>
          <p className="subtle-copy mt-4">
            请尽量写清对象、场景、决策背景和你最担心的点。越具体，越容易匹配到真正有经历的人。
          </p>
          <div className="mt-8">
            <PostQuestionForm />
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
