_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"1uVF":function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return c}));var r=40,a=0,o=32,i=36,c=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},"20a2":function(e,n,t){e.exports=t("nOHt")},"8cDV":function(e,n,t){"use strict";t.r(n);var r=t("Y1YI");n.default=r.a},"8i9l":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("nKUr"),a=t("rePB"),o=t("g4pe"),i=t.n(o),c=t("20a2"),s=t("q1tI"),u=t("hIuh"),f=t.n(u);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m="undefined"!==typeof GPUDevice&&t("7QzT").setShaderRegisteredCallback;t("+dQi");var p=function(e){var n=Object(s.useRef)(null),a=Object(s.useMemo)((function(){return e.sources.map((function(e){return d({name:e.name},function(e,n){var a,o={lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!n},i=null,c=[];i=document.createElement("div");var s=t("VrN/");return(a=s(i,o)).updatedSource=function(e){c.forEach((function(n){return n(e)}))},{updateCallbacks:c,Container:function(t){return Object(r.jsxs)("div",d(d({},t),{},{children:[n?Object(r.jsx)("button",{className:f.a.updateSourceBtn,onClick:function(){a.updatedSource(a.getValue())},children:"Update"}):null,Object(r.jsx)("div",{ref:function(n){i&&n&&(n.appendChild(i),a.setOption("value",e))}})]}))}}}(e.contents,e.editable))}))}),e.sources),o=Object(s.useRef)(null),u=Object(s.useMemo)((function(){if(e.gui)return new(t("iZKT").GUI)({autoPlace:!1})}),[]),l=Object(c.useRouter)().asPath.match(/#([a-zA-Z0-9\.\/]+)/),p=Object(s.useState)(null),b=p[0],h=p[1],v=Object(s.useState)(null),x=v[0],g=v[1];return Object(s.useEffect)((function(){g(l?l[1]:a[0].name),u&&o.current&&o.current.appendChild(u.domElement);try{var t=e.init({canvasRef:n,gui:u});t instanceof Promise&&t.catch((function(e){console.error(e),h(e)}))}catch(r){console.error(r),h(r)}}),[]),Object(s.useEffect)((function(){m&&m((function(n,t){var r=e.sources.findIndex((function(e){return e.contents==n}));a[r].updateCallbacks.push(t)}))}),[a]),Object(r.jsxs)("main",{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),Object(r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),Object(r.jsx)("meta",{name:"description",content:e.description})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:e.name}),Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),Object(r.jsx)("p",{children:e.description}),b?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Is WebGPU Enabled?"}),Object(r.jsx)("p",{children:"".concat(b)})]}):null]}),Object(r.jsxs)("div",{className:f.a.canvasContainer,children:[Object(r.jsx)("div",{style:{position:"absolute",right:10},ref:o}),Object(r.jsx)("canvas",{ref:n,width:600,height:600})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{className:f.a.sourceFileNav,children:Object(r.jsx)("ul",{children:a.map((function(e,n){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#".concat(e.name),"data-active":x==e.name,onClick:function(){g(e.name)},children:e.name})},n)}))})}),a.map((function(e,n){return Object(r.jsx)(e.Container,{className:f.a.sourceFileContainer,"data-active":x==e.name},n)}))]})]})},b=function(e){return Object(r.jsx)(p,d({},e))}},MYnn:function(e,n,t){"use strict";t.r(n),n.default="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n]);\n"},Y1YI:function(e,n,t){"use strict";(function(e,r){var a=t("o0o1"),o=t.n(a),i=t("HaE+"),c=t("IOcx"),s=t("8i9l"),u=t("1uVF"),f=t("wpEf"),l=t("urFr"),d=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r,a,i,s,d,m,p,b,h,v,x,g,O,y,j,w,P,C,S,M,V,E,_,B,U,A,F,R;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R=function(){if(t.current){A(),a.queue.writeBuffer(j,0,M.buffer,M.byteOffset,M.byteLength),F.colorAttachments[0].view=i.getCurrentTexture().createView();var e=a.createCommandEncoder(),n=e.beginRenderPass(F);n.setPipeline(b),n.setBindGroup(0,w),n.setVertexBuffer(0,p),n.draw(u.d,g,0,0),n.endPass(),a.queue.submit([e.finish()]),requestAnimationFrame(R)}},A=function(){for(var e=Date.now()/1e3,n=0,t=0,r=0;r<v;r++)for(var a=0;a<x;a++)c.a.rotate(U,S[t],1,c.b.fromValues(Math.sin((r+.5)*e),Math.cos((a+.5)*e),0)),c.a.multiply(U,B,U),c.a.multiply(U,C,U),M.set(U,n),t++,n+=O},t=n.canvasRef,e.next=5,navigator.gpu.requestAdapter();case 5:return r=e.sent,e.next=8,r.requestDevice();case 8:if(a=e.sent,null!==t.current){e.next=11;break}return e.abrupt("return");case 11:for(i=t.current.getContext("gpupresent"),s=window.devicePixelRatio||1,d=[t.current.clientWidth*s,t.current.clientHeight*s],m=i.getPreferredFormat(r),i.configure({device:a,format:m,size:d}),p=a.createBuffer({size:u.c.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(p.getMappedRange()).set(u.c),p.unmap(),b=a.createRenderPipeline({vertex:{module:a.createShaderModule({code:f.a}),entryPoint:"main",buffers:[{arrayStride:u.e,attributes:[{shaderLocation:0,offset:u.a,format:"float32x4"},{shaderLocation:1,offset:u.b,format:"float32x2"}]}]},fragment:{module:a.createShaderModule({code:l.a}),entryPoint:"main",targets:[{format:m}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),h=a.createTexture({size:d,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),y=(g=(v=4)*(x=4))*(4*(O=16)),j=a.createBuffer({size:y,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),w=a.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:j}}]}),P=d[0]/d[1],C=c.a.create(),c.a.perspective(C,2*Math.PI/5,P,1,100),S=new Array(g),M=new Float32Array(O*g),4,V=0,E=0;E<v;E++)for(_=0;_<x;_++)S[V]=c.a.create(),c.a.translate(S[V],S[V],c.b.fromValues(4*(E-v/2+.5),4*(_-x/2+.5),0)),V++;B=c.a.create(),c.a.translate(B,B,c.b.fromValues(0,0,-12)),U=c.a.create(),F={colorAttachments:[{view:void 0,loadValue:{r:.5,g:.5,b:.5,a:1},storeOp:"store"}],depthStencilAttachment:{view:h.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},requestAnimationFrame(R);case 42:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.a=function(){return Object(s.a)({name:"Instanced Cube",description:"This example shows the use of instancing.",init:d,sources:[{name:e.substr(r.length+1),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport instancedVertWGSL from './instanced.vert.wgsl';\nimport vertexPositionColorWGSL from '../../shaders/vertexPositionColor.frag.wgsl';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('gpupresent');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: instancedVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: vertexPositionColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: presentationSize,\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const xCount = 4;\n  const yCount = 4;\n  const numInstances = xCount * yCount;\n  const matrixFloatCount = 16; // 4x4 matrix\n  const matrixSize = 4 * matrixFloatCount;\n  const uniformBufferSize = numInstances * matrixSize;\n\n  // Allocate a buffer large enough to hold transforms for every\n  // instance.\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const aspect = presentationSize[0] / presentationSize[1];\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const modelMatrices = new Array(numInstances);\n  const mvpMatricesData = new Float32Array(matrixFloatCount * numInstances);\n\n  const step = 4.0;\n\n  // Initialize the matrix data for every instance.\n  let m = 0;\n  for (let x = 0; x < xCount; x++) {\n    for (let y = 0; y < yCount; y++) {\n      modelMatrices[m] = mat4.create();\n      mat4.translate(\n        modelMatrices[m],\n        modelMatrices[m],\n        vec3.fromValues(\n          step * (x - xCount / 2 + 0.5),\n          step * (y - yCount / 2 + 0.5),\n          0\n        )\n      );\n      m++;\n    }\n  }\n\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -12));\n\n  const tmpMat4 = mat4.create();\n\n  // Update the transformation matrix data for each instance.\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    let m = 0,\n      i = 0;\n    for (let x = 0; x < xCount; x++) {\n      for (let y = 0; y < yCount; y++) {\n        mat4.rotate(\n          tmpMat4,\n          modelMatrices[i],\n          1,\n          vec3.fromValues(\n            Math.sin((x + 0.5) * now),\n            Math.cos((y + 0.5) * now),\n            0\n          )\n        );\n\n        mat4.multiply(tmpMat4, viewMatrix, tmpMat4);\n        mat4.multiply(tmpMat4, projectionMatrix, tmpMat4);\n\n        mvpMatricesData.set(tmpMat4, m);\n\n        i++;\n        m += matrixFloatCount;\n      }\n    }\n  }\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    // Update the matrix data.\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      mvpMatricesData.buffer,\n      mvpMatricesData.byteOffset,\n      mvpMatricesData.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount, numInstances, 0, 0);\n    passEncoder.endPass();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst InstancedCube: () => JSX.Element = () =>\n  makeSample({\n    name: 'Instanced Cube',\n    description: 'This example shows the use of instancing.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/instanced.vert.wgsl',\n        contents: instancedVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/vertexPositionColor.frag.wgsl',\n        contents: vertexPositionColorWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default InstancedCube;\n"},{name:"../../shaders/instanced.vert.wgsl",contents:f.a,editable:!0},{name:"../../shaders/vertexPositionColor.frag.wgsl",contents:l.a,editable:!0},{name:"../../meshes/cube.ts",contents:t("MYnn").default}],filename:e})}}).call(this,"src/sample/instancedCube/main.ts","src/sample/instancedCube")},hIuh:function(e,n,t){e.exports={canvasContainer:"SampleLayout_canvasContainer__1qkqt",sourceFileNav:"SampleLayout_sourceFileNav__2aMxK",sourceFileContainer:"SampleLayout_sourceFileContainer__3iiDM",updateSourceBtn:"SampleLayout_updateSourceBtn__3lOwr"}},hiT4:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/instancedCube",function(){return t("8cDV")}])},urFr:function(e,n,t){"use strict";n.a="[[stage(fragment)]]\nfn main([[location(0)]] fragUV: vec2<f32>,\n        [[location(1)]] fragPosition: vec4<f32>) -> [[location(0)]] vec4<f32> {\n  return fragPosition;\n}\n"},wpEf:function(e,n,t){"use strict";n.a="[[block]] struct Uniforms {\n  modelViewProjectionMatrix : [[stride(64)]] array<mat4x4<f32>, 16>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragUV : vec2<f32>;\n  [[location(1)]] fragPosition: vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[builtin(instance_index)]] instanceIdx : u32,\n        [[location(0)]] position : vec4<f32>,\n        [[location(1)]] uv : vec2<f32>) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix[instanceIdx] * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));\n  return output;\n}"}},[["hiT4",0,1,4,2,3,5,6]]]);