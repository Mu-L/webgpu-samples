_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"20a2":function(e,n,t){e.exports=t("nOHt")},"8i9l":function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var a=t("nKUr"),r=t("rePB"),i=t("g4pe"),s=t.n(i),c=t("20a2"),o=t("q1tI"),u=t("hIuh"),d=t.n(u);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p="undefined"!==typeof GPUDevice&&t("7QzT").setShaderRegisteredCallback;t("+dQi");var f=function(e){var n=Object(o.useRef)(null),r=Object(o.useMemo)((function(){return e.sources.map((function(e){return m({name:e.name},function(e,n){var r,i={lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!n},s=null,c=[];s=document.createElement("div");var o=t("VrN/");return(r=o(s,i)).updatedSource=function(e){c.forEach((function(n){return n(e)}))},{updateCallbacks:c,Container:function(t){return Object(a.jsxs)("div",m(m({},t),{},{children:[n?Object(a.jsx)("button",{className:d.a.updateSourceBtn,onClick:function(){r.updatedSource(r.getValue())},children:"Update"}):null,Object(a.jsx)("div",{ref:function(n){s&&n&&(n.appendChild(s),r.setOption("value",e))}})]}))}}}(e.contents,e.editable))}))}),e.sources),i=Object(o.useRef)(null),u=Object(o.useMemo)((function(){if(e.gui)return new(t("iZKT").GUI)({autoPlace:!1})}),[]),l=Object(c.useRouter)().asPath.match(/#([a-zA-Z0-9\.\/]+)/),f=Object(o.useState)(null),v=f[0],g=f[1],h=Object(o.useState)(null),b=h[0],j=h[1];return Object(o.useEffect)((function(){j(l?l[1]:r[0].name),u&&i.current&&i.current.appendChild(u.domElement);try{var t=e.init({canvasRef:n,gui:u});t instanceof Promise&&t.catch((function(e){console.error(e),g(e)}))}catch(a){console.error(a),g(a)}}),[]),Object(o.useEffect)((function(){p&&p((function(n,t){var a=e.sources.findIndex((function(e){return e.contents==n}));r[a].updateCallbacks.push(t)}))}),[r]),Object(a.jsxs)("main",{children:[Object(a.jsxs)(s.a,{children:[Object(a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),Object(a.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),Object(a.jsx)("meta",{name:"description",content:e.description})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:e.name}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),Object(a.jsx)("p",{children:e.description}),v?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Is WebGPU Enabled?"}),Object(a.jsx)("p",{children:"".concat(v)})]}):null]}),Object(a.jsxs)("div",{className:d.a.canvasContainer,children:[Object(a.jsx)("div",{style:{position:"absolute",right:10},ref:i}),Object(a.jsx)("canvas",{ref:n,width:600,height:600})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("nav",{className:d.a.sourceFileNav,children:Object(a.jsx)("ul",{children:r.map((function(e,n){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#".concat(e.name),"data-active":b==e.name,onClick:function(){j(e.name)},children:e.name})},n)}))})}),r.map((function(e,n){return Object(a.jsx)(e.Container,{className:d.a.sourceFileContainer,"data-active":b==e.name},n)}))]})]})},v=function(e){return Object(a.jsx)(f,m({},e))}},Ljik:function(e,n,t){"use strict";t.r(n);var a=t("l+hO");n.default=a.a},OI48:function(e,n,t){"use strict";n.a="[[stage(fragment)]]\nfn main() -> [[location(0)]] vec4<f32> {\n  return vec4<f32>(1.0, 0.0, 0.0, 1.0);\n}"},RkKu:function(e,n,t){"use strict";t.r(n),n.default="@keyframes animated-size {\n  0% {\n    width: 10px;\n    height: 600px;\n  }\n  50% {\n    width: 100%;\n    height: 600px;\n  }\n  100% {\n    width: 10px;\n    height: 600px;\n  }\n}\n\n.animatedCanvasSize {\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-name: animated-size;\n  animation-timing-function: ease;\n}"},WsHf:function(e,n,t){e.exports={animatedCanvasSize:"animatedCanvasSize_animatedCanvasSize__1QN6P","animated-size":"animatedCanvasSize_animated-size__IZ3q6"}},aEZl:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/resizeCanvas",function(){return t("Ljik")}])},hIuh:function(e,n,t){e.exports={canvasContainer:"SampleLayout_canvasContainer__1qkqt",sourceFileNav:"SampleLayout_sourceFileNav__2aMxK",sourceFileContainer:"SampleLayout_sourceFileContainer__3iiDM",updateSourceBtn:"SampleLayout_updateSourceBtn__3lOwr"}},"l+hO":function(e,n,t){"use strict";(function(e,a){var r=t("o0o1"),i=t.n(r),s=t("HaE+"),c=t("8i9l"),o=t("nBne"),u=t("OI48"),d=t("WsHf"),l=t.n(d),m=function(){var e=Object(s.a)(i.a.mark((function e(n){var t,a,r,s,c,d,m,p,f,v,g,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(){if(t.current){t.current.clientWidth===m[0]&&t.current.clientHeight===m[1]||(void 0!==v&&v.destroy(),m[0]=t.current.clientWidth,m[1]=t.current.clientHeight,s.configure({device:r,format:c,size:m}),v=r.createTexture({size:m,sampleCount:p,format:c,usage:GPUTextureUsage.RENDER_ATTACHMENT}),g=v.createView());var e=r.createCommandEncoder(),n={colorAttachments:[{view:g,resolveTarget:s.getCurrentTexture().createView(),loadValue:{r:.2,g:.2,b:.2,a:1},storeOp:"store"}]},a=e.beginRenderPass(n);a.setPipeline(f),a.draw(3,1,0,0),a.endPass(),r.queue.submit([e.finish()]),requestAnimationFrame(h)}},t=n.canvasRef,e.next=4,navigator.gpu.requestAdapter();case 4:return a=e.sent,e.next=7,a.requestDevice();case 7:if(r=e.sent,null!==t.current){e.next=10;break}return e.abrupt("return");case 10:s=t.current.getContext("gpupresent"),c=s.getPreferredFormat(a),d=window.devicePixelRatio||1,m=[t.current.clientWidth*d,t.current.clientHeight*d],s.configure({device:r,format:c,size:m}),p=4,f=r.createRenderPipeline({vertex:{module:r.createShaderModule({code:o.a}),entryPoint:"main"},fragment:{module:r.createShaderModule({code:u.a}),entryPoint:"main",targets:[{format:c}]},primitive:{topology:"triangle-list"},multisample:{count:4}}),v=void 0,t.current.classList.add(l.a.animatedCanvasSize),requestAnimationFrame(h);case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.a=function(){return Object(c.a)({name:"Resize Canvas",description:"Shows multisampled rendering a basic triangle on a dynamically sized canvas.",init:m,sources:[{name:e.substr(a.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nimport styles from './animatedCanvasSize.module.css';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('gpupresent');\n\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  const sampleCount = 4;\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n    multisample: {\n      count: 4,\n    },\n  });\n\n  let renderTarget: GPUTexture | undefined = undefined;\n  let renderTargetView: GPUTextureView;\n\n  canvasRef.current.classList.add(styles.animatedCanvasSize);\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    // The canvas size is animating via CSS.\n    // When the size changes, we need to reallocate the render target.\n    // We also need to set the physical size of the canvas to match the computed CSS size.\n    if (\n      canvasRef.current.clientWidth !== presentationSize[0] ||\n      canvasRef.current.clientHeight !== presentationSize[1]\n    ) {\n      if (renderTarget !== undefined) {\n        // Destroy the previous render target\n        renderTarget.destroy();\n      }\n\n      presentationSize[0] = canvasRef.current.clientWidth;\n      presentationSize[1] = canvasRef.current.clientHeight;\n\n      // Reconfigure the canvas size.\n      context.configure({\n        device,\n        format: presentationFormat,\n        size: presentationSize,\n      });\n\n      renderTarget = device.createTexture({\n        size: presentationSize,\n        sampleCount,\n        format: presentationFormat,\n        usage: GPUTextureUsage.RENDER_ATTACHMENT,\n      });\n\n      renderTargetView = renderTarget.createView();\n    }\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: renderTargetView,\n          resolveTarget: context.getCurrentTexture().createView(),\n          loadValue: { r: 0.2, g: 0.2, b: 0.2, a: 1.0 },\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst ResizeCanvas: () => JSX.Element = () =>\n  makeSample({\n    name: 'Resize Canvas',\n    description:\n      'Shows multisampled rendering a basic triangle on a dynamically sized canvas.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n      {\n        name: './animatedCanvasSize.module.css',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!./animatedCanvasSize.module.css')\n          .default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ResizeCanvas;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:o.a,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:u.a,editable:!0},{name:"./animatedCanvasSize.module.css",contents:t("RkKu").default}],filename:e})}}).call(this,"src/sample/resizeCanvas/main.ts","src/sample/resizeCanvas")},nBne:function(e,n,t){"use strict";n.a="[[stage(vertex)]]\nfn main([[builtin(vertex_index)]] VertexIndex : u32)\n     -> [[builtin(position)]] vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n      vec2<f32>(0.0, 0.5),\n      vec2<f32>(-0.5, -0.5),\n      vec2<f32>(0.5, -0.5));\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}},[["aEZl",0,1,4,2,3,5]]]);