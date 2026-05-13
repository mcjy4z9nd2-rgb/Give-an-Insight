# Give an Insight

一个“按需付费提问的真实经验咨询平台”网页 MVP。当前阶段只做本地可运行的前端原型，不接真实支付、真实数据库或真实登录。

## 技术栈

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- shadcn/ui 风格本地组件
- Framer Motion
- Mock data

## 安装依赖

需要先安装 Node.js 18+，然后在项目根目录运行：

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

## 主要页面

- `/` 首页
- `/questions` 问题列表和筛选
- `/questions/q-001` 问题详情
- `/post` 发布问题
- `/dashboard` 用户中心
- `/admin` 简单管理后台

## 数据位置

所有示例数据集中在 `lib/mock-data.ts`，后续可以替换为 Supabase、Stripe 和地图 API。
