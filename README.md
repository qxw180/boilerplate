# 基于 Next.js 项目模板

## 文件目录说明

```text
.
├── CHANGELOG.md
├── README.md
├── docs                              ---- 文档
├── public                            ---- 站点静态文件目录
├── scripts                           ---- 脚本
├── src                               ---- 业务代码
│   ├── components                    ---- 组件
│   │   ├── common                    ---- 公用组件
│   │   ├── pages                     ---- 各页面逻辑组件
│   ├── libs                          ---- lib
│   │   ├── common                    ---- 公用lib
│   │   ├── pages                     ---- 各页面逻辑lib
│   ├── server                        ---- node server
│   ├── types                         ---- typescript 声明文件
│   ├── styles                        ---- 样式文件
│   └───└── global.scss               ---- 全局样式
│   └─── pages                        ---- 页面，next.js框架规范
└── next.config.js                    ---- next框架配置
└── .eslintrc.js                      ---- eslint配置
└── tsconfig.json                     ---- typescript基础配置
└── tsconfig.eslint.json              ---- eslint parserOptions 配置，主要用于ESLint验证，next框架包含next相关TS代码编译，不需要单独配置
└── tsconfig.server.json              ---- server TS 编译配置，继承tsconfig.json
```

## TODOS

1. lint&代码格式化
2. custom server & app
3. 服务启动端口&环境变量
