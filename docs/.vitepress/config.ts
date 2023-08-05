import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "燃烧吧，英语",
  description: "燃烧吧英语，官方网站，英语学习，背单词",
  outDir: "./build/English-Burning-Website-Dist",
  lastUpdated: true,
  themeConfig: {
    logo: "/src/public/fuiyoh-full.JPG",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "如何使用", link: "/src/how-to-use" },
    ],

    sidebar: [
      {
        text: "内容",
        items: [{ text: "如何使用", link: "/src/how-to-use" }],
      },
    ],

    footer: {
      message: "Powered by Toly with 💖 ",
      copyright:
        "<a href='https://beian.miit.gov.cn'>沪ICP备18005507号-10</a> Copyright © 2023-present <a href='https://github.com/tolerious'>Toly</a>",
    },

    socialLinks: [{ icon: "github", link: "https://app.englishburning.com" }],
  },
});
