"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function PostQuestionForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-teal-200 bg-teal-50">
          <CardContent className="p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-teal-700" />
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">
              问题已提交
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              这是前端原型中的模拟提交状态。后续接入真实登录、数据库和支付后，这里会创建问题记录并进入审核/匹配流程。
            </p>
            <Button className="mt-6" onClick={() => setSubmitted(false)}>
              继续发布一个问题
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card>
      <CardContent className="p-5 md:p-7">
        <form
          className="grid gap-5"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="title">问题标题</Label>
            <Input
              id="title"
              required
              placeholder="例如：想了解某小区 3 号楼真实居住体验"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="city">城市/地点</Label>
              <Input id="city" required placeholder="上海 / 静安区" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="object">楼盘或具体对象名称</Label>
              <Input id="object" required placeholder="静安悦府 2 号楼" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">问题描述</Label>
            <Textarea
              id="description"
              required
              placeholder="请写清你的决策背景、担心点，以及希望回答者有怎样的亲身经历。"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="grid gap-2">
              <Label htmlFor="tags">标签</Label>
              <Input id="tags" placeholder="物业, 噪音, 安全" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bounty">悬赏金额</Label>
              <Input id="bounty" min="1" type="number" required placeholder="88" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="format">期望回答形式</Label>
              <Select
                id="format"
                defaultValue="文字回答"
                options={[
                  { label: "文字回答", value: "文字回答" },
                  { label: "对比清单", value: "对比清单" },
                  { label: "文字 + 照片说明", value: "文字 + 照片说明" },
                  { label: "语音纪要", value: "语音纪要" }
                ]}
              />
            </div>
          </div>

          <Button size="lg" className="mt-2 w-full md:w-fit">
            <Send className="h-4 w-4" />
            提交问题
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
