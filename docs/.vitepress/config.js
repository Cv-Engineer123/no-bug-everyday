import sidebar from "./config/sidebar";
import navbar from "./config/navbar";

export default {
  lang: 'zh-CN',
  title: 'Cv-Engineer123',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    sidebar,
    nav: navbar,
  },
}
