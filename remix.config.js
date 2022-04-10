/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: [".*"],
  mdx: async filename =>{
    const [rehypeHighlight] = await Promise.all([
      import("rehype-highlight").then(mod => mod.default)
    ]);
    return{
      rehypePlugins:[rehypeHighlight]
    }
  },
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "azure/function/build",
  devServerPort: 8002,
};
