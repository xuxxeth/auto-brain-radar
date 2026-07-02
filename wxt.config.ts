import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: '车智雷达',
    short_name: '车智雷达',
    description: 'AutoBrain Radar：登录态下的车源采集与评分助手',
    action: {
      default_title: '车智雷达',
    },
  },
});
