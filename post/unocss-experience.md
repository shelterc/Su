---
title: UnoCss 初体验
slug: unocss-experience
description: "learn more thing"
cover: 
publish: true
date: 2023/03/10 11:31:25
updated: 2023/3/24 14:08:25
tags:
  - css
  - editorconfig
---

## 在 Next.js 13 中使用 UnoCss

在next.js中，官方推荐使用 tailwindcss，而 uno.css 与之相比体积更小，运行更快，而且写法一致。
于是按照uno.css 官网教程进行安装配置

可配置完却发现不能使用，查看github得到一些信息

 在这个issue中有人有同样的问题,[传送门](https://github.com/unocss/unocss/pull/2724)

 并且有人做出了可行的修改 [codesandbox地址](https://codesandbox.io/p/sandbox/github/iamhectorsosa/unocss/tree/docs-examples-next/examples/next)

[仓库地址](https://github.com/iamhectorsosa/unocss/tree/docs-examples-next/examples/next)


#### 安装

```shell
npm i -D unocss @unocss/postcss
```

#### 在根目录新建uno.config.ts
```ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
})
```

#### 在根目录新建postcss.config.js
```ts
module.exports = {
  plugins: {
    '@unocss/postcss': {
      content: ['**/*.{html,js,ts,jsx,tsx}'],
    },
  },
}
```

#### 在app目录的global.css 新增
```css
@import '@unocss/reset/tailwind.css';
@unocss all;
```

#### 最后在html中使用
```tsx
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        hello next
    </main>
  )
}
```