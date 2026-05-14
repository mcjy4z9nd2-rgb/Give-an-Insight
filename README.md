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

需要先安装 Node.js 20。项目根目录已经放了 `.nvmrc` 和 `.node-version`，如果你使用 nvm，可以先运行：

```bash
nvm use
```

然后在项目根目录运行：

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

如果你想要一个更接近线上部署的本地预览，可以运行：

```bash
npm run preview
```

如果预览卡住或页面打不开，先清理 Next.js 缓存后重启：

```bash
npm run clean
npm run dev
```

如果启动时提示 Node 版本不匹配，请切换到 Node.js 20 后再运行。当前项目使用 Next.js 14，Node 24 在这套依赖里会出现页面首次编译卡住，表现为终端显示 `Ready`，但浏览器一直打不开页面。

## 主要页面

- `/` 首页
- `/questions` 问题列表和筛选
- `/questions/q-001` 问题详情
- `/post` 发布问题
- `/dashboard` 用户中心
- `/admin` 简单管理后台

## 数据位置

所有示例数据集中在 `lib/mock-data.ts`，后续可以替换为 Supabase、Stripe 和地图 API。
