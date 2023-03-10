import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/test',
      component: '@/pages/Test',
    },
  ],
  fastRefresh: {},
});
