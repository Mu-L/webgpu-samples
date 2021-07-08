_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"20a2":function(e,n,t){e.exports=t("nOHt")},"8i9l":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t("nKUr"),a=t("rePB"),i=t("g4pe"),c=t.n(i),o=t("20a2"),s=t("q1tI"),u=t("hIuh"),l=t.n(u);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p="undefined"!==typeof GPUDevice&&t("7QzT").setShaderRegisteredCallback;t("+dQi");var f=function(e){var n=Object(s.useRef)(null),a=Object(s.useMemo)((function(){return e.sources.map((function(e){return m({name:e.name},function(e,n){var a,i={lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!n},c=null,o=[];c=document.createElement("div");var s=t("VrN/");return(a=s(c,i)).updatedSource=function(e){o.forEach((function(n){return n(e)}))},{updateCallbacks:o,Container:function(t){return Object(r.jsxs)("div",m(m({},t),{},{children:[n?Object(r.jsx)("button",{className:l.a.updateSourceBtn,onClick:function(){a.updatedSource(a.getValue())},children:"Update"}):null,Object(r.jsx)("div",{ref:function(n){c&&n&&(n.appendChild(c),a.setOption("value",e))}})]}))}}}(e.contents,e.editable))}))}),e.sources),i=Object(s.useRef)(null),u=Object(s.useMemo)((function(){if(e.gui)return new(t("iZKT").GUI)({autoPlace:!1})}),[]),d=Object(o.useRouter)().asPath.match(/#([a-zA-Z0-9\.\/]+)/),f=Object(s.useState)(null),g=f[0],v=f[1],b=Object(s.useState)(null),h=b[0],j=b[1];return Object(s.useEffect)((function(){j(d?d[1]:a[0].name),u&&i.current&&i.current.appendChild(u.domElement);try{var t=e.init({canvasRef:n,gui:u});t instanceof Promise&&t.catch((function(e){console.error(e),v(e)}))}catch(r){console.error(r),v(r)}}),[]),Object(s.useEffect)((function(){p&&p((function(n,t){var r=e.sources.findIndex((function(e){return e.contents==n}));a[r].updateCallbacks.push(t)}))}),[a]),Object(r.jsxs)("main",{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),Object(r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),Object(r.jsx)("meta",{name:"description",content:e.description})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:e.name}),Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),Object(r.jsx)("p",{children:e.description}),g?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Is WebGPU Enabled?"}),Object(r.jsx)("p",{children:"".concat(g)})]}):null]}),Object(r.jsxs)("div",{className:l.a.canvasContainer,children:[Object(r.jsx)("div",{style:{position:"absolute",right:10},ref:i}),Object(r.jsx)("canvas",{ref:n,width:600,height:600})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{className:l.a.sourceFileNav,children:Object(r.jsx)("ul",{children:a.map((function(e,n){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#".concat(e.name),"data-active":h==e.name,onClick:function(){j(e.name)},children:e.name})},n)}))})}),a.map((function(e,n){return Object(r.jsx)(e.Container,{className:l.a.sourceFileContainer,"data-active":h==e.name},n)}))]})]})},g=function(e){return Object(r.jsx)(f,m({},e))}},L2KF:function(e,n,t){"use strict";t.r(n);var r=t("MWOg");n.default=r.a},MWOg:function(e,n,t){"use strict";(function(e,r){var a=t("o0o1"),i=t.n(a),c=t("HaE+"),o=t("8i9l"),s=t("nBne"),u=t("OI48"),l=function(){var e=Object(c.a)(i.a.mark((function e(n){var t,r,a,c,o,l,d,m,p,f,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(){if(t.current){var e=a.createCommandEncoder(),n={colorAttachments:[{view:f,resolveTarget:c.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]},r=e.beginRenderPass(n);r.setPipeline(m),r.draw(3,1,0,0),r.endPass(),a.queue.submit([e.finish()]),requestAnimationFrame(g)}},t=n.canvasRef,e.next=4,navigator.gpu.requestAdapter();case 4:return r=e.sent,e.next=7,r.requestDevice();case 7:if(a=e.sent,null!==t.current){e.next=10;break}return e.abrupt("return");case 10:c=t.current.getContext("gpupresent"),o=window.devicePixelRatio||1,l=[t.current.clientWidth*o,t.current.clientHeight*o],d=c.getPreferredFormat(r),c.configure({device:a,format:d,size:l}),4,m=a.createRenderPipeline({vertex:{module:a.createShaderModule({code:s.a}),entryPoint:"main"},fragment:{module:a.createShaderModule({code:u.a}),entryPoint:"main",targets:[{format:d}]},primitive:{topology:"triangle-list"},multisample:{count:4}}),p=a.createTexture({size:l,sampleCount:4,format:d,usage:GPUTextureUsage.RENDER_ATTACHMENT}),f=p.createView(),requestAnimationFrame(g);case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.a=function(){return Object(o.a)({name:"Hello Triangle MSAA",description:"Shows multisampled rendering a basic triangle.",init:l,sources:[{name:e.substr(r.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('gpupresent');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  const sampleCount = 4;\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n    multisample: {\n      count: 4,\n    },\n  });\n\n  const texture = device.createTexture({\n    size: presentationSize,\n    sampleCount,\n    format: presentationFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n  const view = texture.createView();\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view,\n          resolveTarget: context.getCurrentTexture().createView(),\n          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst HelloTriangleMSAA: () => JSX.Element = () =>\n  makeSample({\n    name: 'Hello Triangle MSAA',\n    description: 'Shows multisampled rendering a basic triangle.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default HelloTriangleMSAA;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:s.a,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:u.a,editable:!0}],filename:e})}}).call(this,"src/sample/helloTriangleMSAA/main.ts","src/sample/helloTriangleMSAA")},OI48:function(e,n,t){"use strict";n.a="[[stage(fragment)]]\nfn main() -> [[location(0)]] vec4<f32> {\n  return vec4<f32>(1.0, 0.0, 0.0, 1.0);\n}"},gOJD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/helloTriangleMSAA",function(){return t("L2KF")}])},hIuh:function(e,n,t){e.exports={canvasContainer:"SampleLayout_canvasContainer__1qkqt",sourceFileNav:"SampleLayout_sourceFileNav__2aMxK",sourceFileContainer:"SampleLayout_sourceFileContainer__3iiDM",updateSourceBtn:"SampleLayout_updateSourceBtn__3lOwr"}},nBne:function(e,n,t){"use strict";n.a="[[stage(vertex)]]\nfn main([[builtin(vertex_index)]] VertexIndex : u32)\n     -> [[builtin(position)]] vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n      vec2<f32>(0.0, 0.5),\n      vec2<f32>(-0.5, -0.5),\n      vec2<f32>(0.5, -0.5));\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}},[["gOJD",0,1,4,2,3,5]]]);