"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ApplyAnswerDialog() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      <Button size="lg" className="w-full md:w-auto" onClick={() => setOpen(true)}>
        申请回答
      </Button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="w-full max-w-lg rounded-lg bg-white p-5 shadow-soft"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-950">
                    申请回答这个问题
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    简单说明你的亲身经历，提问者会优先选择经历匹配的人。
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="关闭弹窗"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {sent ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-teal-800">申请已发送</p>
                  <p className="mt-2 text-sm text-slate-500">
                    当前为模拟流程，真实版本会进入审核和消息通知。
                  </p>
                  <Button className="mt-5" onClick={() => setOpen(false)}>
                    知道了
                  </Button>
                </div>
              ) : (
                <form
                  className="mt-5 grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-2">
                    <Label htmlFor="experience">你的相关经历</Label>
                    <Textarea
                      id="experience"
                      required
                      placeholder="例如：我从 2024 年 3 月住到 2025 年 2 月，住在同一栋楼..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact">模拟联系方式</Label>
                    <Input id="contact" placeholder="微信 / 邮箱，仅用于原型展示" />
                  </div>
                  <Button>发送申请</Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
