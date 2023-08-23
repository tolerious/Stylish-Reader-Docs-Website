import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "燃烧吧，英语",
  description:
    "燃烧吧英语,托福，雅思,英语学习,背单词,零基础,学英语,英语口语,英语听力",
  srcDir: "./src",
  outDir: "./build/English-Burning-Website-Dist",
  lastUpdated: true,
  sitemap: {
    hostname: "https://englishburning.com",
    lastmodDateOnly: true,
    transformItems: (items) => {
      items.push({
        url: "/",
        changefreq: "daily",
        priority: 0.9,
      });
    },
  },
  themeConfig: {
    logo: "/fuiyoh-full.JPG",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "🥳如何学英语",
        link: "/how-to-learn-english",
        items: [
          { text: "单词篇", link: "/how-to-learn-vocabulary" },
          { text: "听力篇", link: "/how-to-learn-listening" },
        ],
      },
      {
        text: "使用教程",
        link: "/how-to-use",
      },
      { text: "历史文章", link: "/history-articles" },
      { text: "❤️关于作者", link: "/about-me" },
    ],

    // sidebar: [
    //   {
    //     text: "内容",
    //     items: [
    //       { text: "如何使用", link: "/how-to-use" },
    //       { text: "添加屏幕快捷方式", link: "/add-icon-to-screen" },
    //     ],
    //   },
    // ],

    sidebar: {
      "/how-to-use": [
        {
          text: "内容",
          items: [
            { text: "如何使用", link: "/how-to-use" },
            { text: "添加屏幕快捷方式", link: "/add-icon-to-screen" },
          ],
        },
      ],
      "/how-to-learn-english": [
        {
          text: "单词篇",
          link: "/how-to-learn-vocabulary",
        },
        {
          text: "听力篇",
          link: "/how-to-learn-listening",
        },
        {
          text: "语法篇",
          link: "/how-to-learn-grammar",
        },
        {
          text: "口语篇",
          link: "/how-to-learn-speaking",
        },
        {
          text: "英语学习资源推荐",
          link: "/learning-resource-recommend",
        },
      ],
    },

    footer: {
      message: "Powered by Toly full with 💖 ",
      copyright:
        "<a href='https://beian.miit.gov.cn'>沪ICP备18005507号-10&nbsp;&nbsp;</a><img style='display:inline-block' src='https://www.beian.gov.cn/img/new/gongan.png'><a href='https://www.beian.gov.cn'> 沪公网安备 31011002006221号</a> Copyright © 2023-present <a href='https://github.com/tolerious'>Toly</a>",
    },

    socialLinks: [{ icon: "github", link: "https://app.englishburning.com" }],
  },
});
