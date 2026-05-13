import {
  Building2,
  Home,
  ShieldCheck,
  Sparkles,
  Volume2,
  WalletCards
} from "lucide-react";

export type QuestionStatus = "待回答" | "匹配中" | "已回答";

export type Question = {
  id: string;
  title: string;
  city: string;
  place: string;
  category: string;
  bounty: number;
  deadline: string;
  status: QuestionStatus;
  tags: string[];
  description: string;
  asks: string[];
  expectedFormat: string;
  requester: {
    name: string;
    avatar: string;
    rating: number;
  };
  answers: Array<{
    author: string;
    role: string;
    rating: number;
    content: string;
  }>;
};

export const processSteps = [
  {
    title: "发布具体问题",
    description: "把你真正想知道的细节写清楚，并设置愿意支付的悬赏。"
  },
  {
    title: "匹配有经验的人",
    description: "平台展示给住过、买过、用过或亲自经历过的人。"
  },
  {
    title: "获得真实回答",
    description: "回答者按你的问题点给出可验证、可比较的第一手经验。"
  }
];

export const exampleQuestions = [
  "这个小区夜间噪音和邻里关系真实情况怎么样？",
  "买这套二手房前，物业维修响应速度值得信任吗？",
  "这个联合办公空间适合长期办公还是只适合短租？"
];

export const questions: Question[] = [
  {
    id: "q-001",
    title: "想了解静安悦府 2 号楼的物业、噪音和电梯拥堵情况",
    city: "上海",
    place: "静安悦府 2 号楼",
    category: "租房",
    bounty: 88,
    deadline: "2 天后",
    status: "待回答",
    tags: ["物业", "噪音", "电梯", "邻里"],
    description:
      "准备签一年租约，网上评价太泛泛。希望找住过或正在住的人，讲讲工作日晚上、周末、雨天维修等真实体验。",
    asks: [
      "电梯早晚高峰平均等多久？",
      "楼上楼下隔音如何，夜间是否有明显噪音？",
      "物业报修响应速度和态度怎么样？",
      "楼道、垃圾房、地下车库卫生情况如何？"
    ],
    expectedFormat: "文字回答 + 可选照片说明",
    requester: { name: "Lynn", avatar: "L", rating: 4.8 },
    answers: [
      {
        author: "住户 A",
        role: "2024-2025 年租住 2 号楼",
        rating: 4.9,
        content:
          "晚高峰电梯通常 3-6 分钟，周末访客多时会更慢。物业报修一般当天响应，卫生属于中上，但地下车库雨天会有积水。"
      }
    ]
  },
  {
    id: "q-002",
    title: "杭州滨江某新盘交付后的漏水和学区兑现情况",
    city: "杭州",
    place: "滨江观澜里",
    category: "买房",
    bounty: 168,
    deadline: "5 天后",
    status: "匹配中",
    tags: ["交付", "质量", "学区", "维权"],
    description:
      "考虑入手二手次新房，希望了解交付后业主群里反映最多的问题，以及开发商整改是否积极。",
    asks: [
      "外立面、窗户、卫生间是否有集中质量问题？",
      "学区落地是否和销售期宣传一致？",
      "业主群维权频率高吗，主要争议是什么？"
    ],
    expectedFormat: "结构化文字回答",
    requester: { name: "陈先生", avatar: "陈", rating: 4.6 },
    answers: []
  },
  {
    id: "q-003",
    title: "深圳南山科技园附近通勤友好的长租公寓推荐避坑",
    city: "深圳",
    place: "南山科技园",
    category: "租房",
    bounty: 56,
    deadline: "1 天后",
    status: "待回答",
    tags: ["通勤", "长租公寓", "安全", "水电"],
    description:
      "预算有限，想知道几家长租公寓的水电、隔音、合同坑点和安全性，最好有亲自住过的人回答。",
    asks: [
      "水电费是否明显高于民水民电？",
      "是否有甲醛、潮湿或虫害问题？",
      "女生独住安全性如何？"
    ],
    expectedFormat: "对比清单",
    requester: { name: "Mia", avatar: "M", rating: 4.7 },
    answers: [
      {
        author: "南山租客",
        role: "住过两家品牌公寓",
        rating: 4.7,
        content:
          "通勤最方便的不一定最安静，建议重点看楼下餐饮和垃圾点距离。合同里要确认退租清洁费、网络费、水电单价。"
      }
    ]
  },
  {
    id: "q-004",
    title: "北京望京某国际学校周边社区早晚接送交通真实体验",
    city: "北京",
    place: "望京花园西区",
    category: "教育周边",
    bounty: 120,
    deadline: "7 天后",
    status: "已回答",
    tags: ["交通", "学校", "社区", "停车"],
    description:
      "准备搬到学校附近，想了解早晚高峰接送车流、停车、老人小孩步行安全情况。",
    asks: [
      "早上 7:30-8:30 周边堵车程度？",
      "临停是否方便，是否常被贴条？",
      "步行路线是否有复杂路口或安全隐患？"
    ],
    expectedFormat: "文字回答 + 路线建议",
    requester: { name: "王女士", avatar: "王", rating: 4.9 },
    answers: [
      {
        author: "家长 B",
        role: "连续两年接送",
        rating: 5,
        content:
          "学校正门高峰比较堵，建议从北侧路口绕行。步行 12 分钟内的小区更舒适，开车反而经常不稳定。"
      }
    ]
  },
  {
    id: "q-005",
    title: "成都金融城某写字楼适合 15 人团队长期办公吗",
    city: "成都",
    place: "金融城创新中心",
    category: "办公",
    bounty: 98,
    deadline: "3 天后",
    status: "待回答",
    tags: ["办公", "空调", "停车", "物业"],
    description:
      "正在看办公室，想了解空调加班、访客登记、停车和周边午餐选择，招商人员说得太漂亮了。",
    asks: [
      "晚上和周末空调是否额外收费？",
      "访客登记是否麻烦？",
      "停车月卡难不难办？",
      "午餐高峰排队情况如何？"
    ],
    expectedFormat: "文字回答",
    requester: { name: "Nora", avatar: "N", rating: 4.5 },
    answers: []
  }
];

export const categories = ["全部", "租房", "买房", "办公", "教育周边"];
export const cities = ["全部", "上海", "杭州", "深圳", "北京", "成都"];
export const statuses = ["全部", "待回答", "匹配中", "已回答"];

export const userStats = {
  spent: 432,
  earned: 286,
  rating: 4.86,
  completed: 14
};

export const adminStats = [
  { label: "问题数量", value: "328", change: "+18 本周" },
  { label: "用户数量", value: "1,942", change: "+76 本周" },
  { label: "模拟交易", value: "¥42,680", change: "+12.4%" },
  { label: "待审核内容", value: "23", change: "需处理" }
];

export const trustSignals = [
  { label: "真实经历", icon: ShieldCheck },
  { label: "按需付费", icon: WalletCards },
  { label: "具体对象", icon: Building2 },
  { label: "可比较回答", icon: Sparkles },
  { label: "生活场景", icon: Home },
  { label: "噪音细节", icon: Volume2 }
];
