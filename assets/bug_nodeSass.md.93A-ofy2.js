import{_ as s,c as a,o as e,l as t}from"./chunks/framework.BxrWhBXs.js";const _=JSON.parse('{"title":"node-sass安装踩坑","description":"","frontmatter":{},"headers":[],"relativePath":"bug/nodeSass.md","filePath":"bug/nodeSass.md"}'),n={name:"bug/nodeSass.md"},o=t(`<h1 id="node-sass安装踩坑" tabindex="-1">node-sass安装踩坑 <a class="header-anchor" href="#node-sass安装踩坑" aria-label="Permalink to &quot;node-sass安装踩坑&quot;">​</a></h1><p>现阶段新项目还是不要用node-sass了，毕竟官方也不推荐用了</p><h2 id="网络问题" tabindex="-1">网络问题 <a class="header-anchor" href="#网络问题" aria-label="Permalink to &quot;网络问题&quot;">​</a></h2><p>node-sass默认从GitHub上下载资源包，如果没翻墙(像我这种翻墙仔就直接下载了)，很容易下载失败，如果下载失败 将会尝试本地构建，可以新建.npmrc文件，设置node-sass的资源地址，<strong>更推荐此安装方式</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sass_binary_site=https://npm.taobao.org/mirrors/node-sass</span></span></code></pre></div><p>或直接运行</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass</span></span></code></pre></div><h2 id="本地构建-python" tabindex="-1">本地构建(python) <a class="header-anchor" href="#本地构建-python" aria-label="Permalink to &quot;本地构建(python)&quot;">​</a></h2><p>若未安装并配置python 则会报一个python未找到的错误，若想通过本地构建方式安装，则需要安装node-gyp、python 在Windows下可安装windows-build-tools</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i node-gyp -g </span></span>
<span class="line"><span>npm i windows-build-tools -g</span></span></code></pre></div><p><code>因为node-sass编译器是通过C++实现的，在nodejs中采用gyp构建工具进行构建C++代码，而gyp是基于Python2开发的，所以需要python,而且不支持3</code></p><p><strong>注意，若node与node-sass版本不兼容，也会报这个错误，一定要确认版本是否支持</strong></p>`,12),p=[o];function i(d,c,l,r,h,g){return e(),a("div",null,p)}const b=s(n,[["render",i]]);export{_ as __pageData,b as default};