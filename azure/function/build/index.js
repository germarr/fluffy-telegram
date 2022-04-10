var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/highlight.js/styles/github-dark-dimmed.css
var require_github_dark_dimmed = __commonJS({
  "node_modules/highlight.js/styles/github-dark-dimmed.css"(exports, module2) {
    module2.exports = "/build/_assets/github-dark-dimmed-NVKMPVQH.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\tiktokdata\frontend\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:D:\tiktokdata\frontend\app\routes\tiktok.tsx
var tiktok_exports = {};
__export(tiktok_exports, {
  default: () => Index,
  links: () => links,
  loader: () => loader,
  meta: () => meta2
});
var import_react3 = require("@remix-run/react");

// app/api/getArticle.ts
var url_path = "http://20.120.8.107:1337";
async function getPosts() {
  const response = await fetch(`${url_path}/posts`);
  const articleList = await response.json();
  return articleList;
}
async function getArticledata(dataId) {
  const response = await fetch(`${url_path}/posts/${dataId}`);
  const articleData = await response.json();
  return articleData;
}
async function simplefetch() {
  const respo_tiktok = await fetch(`${url_path}/tiktoks/`);
  const simple_url = `${url_path}/tiktoks/`;
  return [respo_tiktok, simple_url];
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-57EHUWNX.css";

// route:D:\tiktokdata\frontend\app\routes\tiktok.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    }
  ];
};
var meta2 = () => {
  return {
    title: `Analyzing my TikTok data.`,
    description: `This article explores my tikoto usage.`,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1"
  };
};
var loader = async () => {
  const articleList = await simplefetch();
  const datapublish = await articleList[0].json();
  return datapublish;
};
function Index() {
  let datamix = (0, import_react3.useLoaderData)();
  let titleList = datamix.map((m, i) => ({
    title: m.base_post_en[0].title,
    slug: m.slug
  }));
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-x-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-10 md:col-span-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-2 md:flex-col md:space-y-2"
  }, titleList.map((m) => /* @__PURE__ */ React.createElement("div", {
    key: m.slug
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    prefetch: "intent",
    to: `./${m.slug}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-slate-800/40 hover:bg-slate-800/30 p-3 shadow-md shadow-slate-200 rounded-md"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-white font-semibold text-xs md:text-base"
  }, m.title))))))), /* @__PURE__ */ React.createElement("div", {
    className: "md:col-span-7 md:overflow-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-screen px-10 md:px-0"
  }, /* @__PURE__ */ React.createElement(import_react3.Outlet, null))));
}

// route:D:\tiktokdata\frontend\app\routes\tiktok\$part.tsx
var part_exports = {};
__export(part_exports, {
  default: () => Index2,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta3
});
var import_react4 = require("@remix-run/react");
var import_marked = require("marked");
var import_highlight = __toESM(require("highlight.js"));
var import_github_dark_dimmed = __toESM(require_github_dark_dimmed());
var import_react5 = require("react");
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      rel: "stylesheet",
      href: import_github_dark_dimmed.default
    }
  ];
};
var meta3 = () => {
  return {
    title: `Analyzing my TikTok data.`,
    description: `This article explores my tikoto usage.`,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1"
  };
};
var loader2 = async ({ params }) => {
  let article_name = params.part;
  const articleList = await simplefetch();
  const datapublish = await articleList[0].json();
  let titleList = datapublish.map((m, i) => ({
    id: m.base_post_en[0].id,
    slug: m.slug
  }));
  let getId = titleList.find((n) => n.slug === article_name);
  let simpleUrl = await simplefetch();
  const datatopublish = await fetch(`${simpleUrl[1]}${getId.id}`);
  return datatopublish.json();
};
function Index2() {
  let dataTitle = (0, import_react4.useLoaderData)();
  const body = import_marked.marked.parse(`${dataTitle.base_post_en[0].body}`);
  (0, import_react5.useEffect)(() => {
    import_highlight.default.initHighlighting();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose py-10",
    dangerouslySetInnerHTML: { __html: body }
  }));
}

// route:D:\tiktokdata\frontend\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  links: () => links3,
  loader: () => loader3,
  meta: () => meta4
});
var import_react6 = require("@remix-run/react");
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    }
  ];
};
var meta4 = () => {
  return {
    title: `Analyzing my TikTok data.`,
    description: `This article explores`,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1"
  };
};
var loader3 = async () => {
  const articleList = await getPosts();
  let articleName = articleList.map((n) => n.Title);
  let articleId = articleList.map((n) => n.slug);
  return [articleName, articleId];
};
function Index3() {
  let dataTitle = (0, import_react6.useLoaderData)()[0];
  let dataids = (0, import_react6.useLoaderData)()[1];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, dataTitle.map((title, i) => /* @__PURE__ */ React.createElement("div", {
    key: `name_${title}`
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: `./post/${dataids[i]}`,
    prefetch: "intent"
  }, title)))));
}

// route:D:\tiktokdata\frontend\app\routes\post.tsx
var post_exports = {};
__export(post_exports, {
  default: () => Post
});
var import_react7 = require("@remix-run/react");
function Post() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react7.Outlet, null));
}

// route:D:\tiktokdata\frontend\app\routes\post\$articleName.tsx
var articleName_exports = {};
__export(articleName_exports, {
  default: () => Id,
  links: () => links4,
  loader: () => loader4,
  meta: () => meta5
});
var import_marked2 = require("marked");
var import_highlight2 = __toESM(require("highlight.js"));
var import_github_dark_dimmed2 = __toESM(require_github_dark_dimmed());
var import_react8 = require("@remix-run/react");
var import_react9 = require("react");
var links4 = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      rel: "stylesheet",
      href: import_github_dark_dimmed2.default
    }
  ];
};
var meta5 = ({ data }) => {
  const exportData = data;
  return {
    title: `${exportData.Title}`,
    description: `${exportData.small_desc}`
  };
};
var loader4 = async ({ params }) => {
  let urlParam = params.articleName;
  let artNumber = await getPosts();
  let art_dict = artNumber.map((n) => ({ slug: n.slug, id: n.id }));
  let getId = art_dict.find((sl) => sl["slug"] === urlParam);
  const articleList = await getArticledata(getId["id"]);
  return articleList;
};
function Id() {
  const posts = (0, import_react8.useLoaderData)();
  const body = import_marked2.marked.parse(`${posts.body}`);
  (0, import_react9.useEffect)(() => {
    import_highlight2.default.initHighlighting();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose py-10",
    dangerouslySetInnerHTML: { __html: body }
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "c2278bb2", "entry": { "module": "/build/entry.client-EFZXCC7R.js", "imports": ["/build/_shared/chunk-OO254ZAJ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-H4KE3EAU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UU6BZVPN.js", "imports": ["/build/_shared/chunk-2QK6CKMR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/post": { "id": "routes/post", "parentId": "root", "path": "post", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/post-ZJDNXMNP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/post/$articleName": { "id": "routes/post/$articleName", "parentId": "routes/post", "path": ":articleName", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/post/$articleName-XLHIZVD6.js", "imports": ["/build/_shared/chunk-UKMHXKHQ.js", "/build/_shared/chunk-2QK6CKMR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tiktok": { "id": "routes/tiktok", "parentId": "root", "path": "tiktok", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tiktok-MYWTAM42.js", "imports": ["/build/_shared/chunk-2QK6CKMR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tiktok/$part": { "id": "routes/tiktok/$part", "parentId": "routes/tiktok", "path": ":part", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tiktok/$part-3Q7W2MAW.js", "imports": ["/build/_shared/chunk-UKMHXKHQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C2278BB2.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tiktok": {
    id: "routes/tiktok",
    parentId: "root",
    path: "tiktok",
    index: void 0,
    caseSensitive: void 0,
    module: tiktok_exports
  },
  "routes/tiktok/$part": {
    id: "routes/tiktok/$part",
    parentId: "routes/tiktok",
    path: ":part",
    index: void 0,
    caseSensitive: void 0,
    module: part_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/post": {
    id: "routes/post",
    parentId: "root",
    path: "post",
    index: void 0,
    caseSensitive: void 0,
    module: post_exports
  },
  "routes/post/$articleName": {
    id: "routes/post/$articleName",
    parentId: "routes/post",
    path: ":articleName",
    index: void 0,
    caseSensitive: void 0,
    module: articleName_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
