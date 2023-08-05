import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "English Burning Website",
  description: "Official Website for English Burning App.",
  outDir: './build/English-Burning-Website-Dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "如何使用", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    footer: {
      message: "Powered by Toly with 💖 ",
      copyright: "<a href='https://beian.miit.gov.cn'>沪ICP备18005507号-10</a>",
    },

    socialLinks: [{ icon: "slack", link: "https://app.englishburning.com" }],
  },
});
