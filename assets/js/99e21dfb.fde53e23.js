"use strict";(self.webpackChunkchatgptdocstudy=self.webpackChunkchatgptdocstudy||[]).push([[5095],{5148:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=i(4848),r=i(8453);const l={sidebar_position:2},t="\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5165\u95e8",c={id:"tutorial-basics/\u5feb\u901f\u5165\u95e8",title:"\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5165\u95e8",description:"\u542f\u52a8\u5e76\u8fd0\u884c OpenAI API",source:"@site/docs/tutorial-basics/\u5feb\u901f\u5165\u95e8.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/\u5feb\u901f\u5165\u95e8",permalink:"/chatgptdocstudy/docs/tutorial-basics/\u5feb\u901f\u5165\u95e8",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/chatgptdocstudy/docs/tutorial-basics/\u4ecb\u7ecd"},next:{title:"\u6a21\u578b",permalink:"/chatgptdocstudy/docs/tutorial-basics/\u6a21\u578b"}},o={},h=[{value:"\u542f\u52a8\u5e76\u8fd0\u884c OpenAI API",id:"\u542f\u52a8\u5e76\u8fd0\u884c-openai-api",level:2},{value:"\u5e10\u6237\u8bbe\u7f6e",id:"\u5e10\u6237\u8bbe\u7f6e",level:2},{value:"\u5feb\u901f\u5165\u95e8\u8bed\u8a00\u9009\u62e9",id:"\u5feb\u901f\u5165\u95e8\u8bed\u8a00\u9009\u62e9",level:2},{value:"\u7b2c 1 \u6b65\uff1a\u8bbe\u7f6e Python",id:"\u7b2c-1-\u6b65\u8bbe\u7f6e-python",level:2},{value:"\u5b89\u88c5 Python",id:"\u5b89\u88c5-python",level:3},{value:"\u8bbe\u7f6e\u865a\u62df\u73af\u5883\uff08\u53ef\u9009\uff09",id:"\u8bbe\u7f6e\u865a\u62df\u73af\u5883\u53ef\u9009",level:3},{value:"\u7b2c 2 \u6b65\uff1a\u8bbe\u7f6e API \u5bc6\u94a5",id:"\u7b2c-2-\u6b65\u8bbe\u7f6e-api-\u5bc6\u94a5",level:2},{value:"\u4e3a\u6240\u6709\u9879\u76ee\u8bbe\u7f6e API \u5bc6\u94a5\uff08\u63a8\u8350\uff09",id:"\u4e3a\u6240\u6709\u9879\u76ee\u8bbe\u7f6e-api-\u5bc6\u94a5\u63a8\u8350",level:3},{value:"MacOS\u64cd\u4f5c\u7cfb\u7edf",id:"macos\u64cd\u4f5c\u7cfb\u7edf",level:3},{value:"\u7a97\u6237",id:"\u7a97\u6237",level:3}];function a(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5165\u95e8",children:"\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5165\u95e8"}),"\n",(0,s.jsx)(e.h2,{id:"\u542f\u52a8\u5e76\u8fd0\u884c-openai-api",children:"\u542f\u52a8\u5e76\u8fd0\u884c OpenAI API"}),"\n",(0,s.jsx)(e.p,{children:"\u5bfb\u627e ChatGPT\uff1f\u524d\u5f80 chat.openai.com\u3002"}),"\n",(0,s.jsx)(e.p,{children:"OpenAI API \u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u754c\u9762\uff0c\u53ef\u4ee5\u5728\u5176\u5e94\u7528\u7a0b\u5e8f\u4e2d\u521b\u5efa\u667a\u80fd\u5c42\uff0c\u7531 OpenAI \u6700\u5148\u8fdb\u7684\u6a21\u578b\u63d0\u4f9b\u652f\u6301\u3002Chat Completions \u7aef\u70b9\u4e3a ChatGPT \u63d0\u4f9b\u652f\u6301\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u79cd\u5c06\u6587\u672c\u4f5c\u4e3a\u8f93\u5165\u5e76\u4f7f\u7528 GPT-4 \u7b49\u6a21\u578b\u751f\u6210\u8f93\u51fa\u7684\u7b80\u5355\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u60f3\u76f4\u63a5\u8df3\u8f6c\u5230\u4ee3\u7801\u5417\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u8df3\u8fc7\u5feb\u901f\u5165\u95e8\uff0c\u6df1\u5165\u4e86\u89e3 API \u53c2\u8003\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u5feb\u901f\u5165\u95e8\u65e8\u5728\u5e2e\u52a9\u8bbe\u7f6e\u672c\u5730\u5f00\u53d1\u73af\u5883\u5e76\u53d1\u9001\u7b2c\u4e00\u4e2a API \u8bf7\u6c42\u3002\u5982\u679c\u60a8\u662f\u4e00\u4f4d\u7ecf\u9a8c\u4e30\u5bcc\u7684\u5f00\u53d1\u4eba\u5458\uff0c\u6216\u8005\u53ea\u60f3\u6df1\u5165\u4e86\u89e3\u4f7f\u7528 OpenAI API\uff0c\u90a3\u4e48 GPT \u6307\u5357\u7684 API \u53c2\u8003\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u8d77\u70b9\u3002\u5728\u672c\u5feb\u901f\u5165\u95e8\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u4f55\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7684 SDK"}),"\n",(0,s.jsx)(e.li,{children:"OpenAI API \u7684\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u4f55\u53d1\u9001\u60a8\u7684\u7b2c\u4e00\u4e2a API \u8bf7\u6c42"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u60a8\u9047\u5230\u4efb\u4f55\u6311\u6218\u6216\u5bf9\u5165\u95e8\u6709\u7591\u95ee\uff0c\u8bf7\u52a0\u5165\u6211\u4eec\u7684\u5f00\u53d1\u8005\u8bba\u575b\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5e10\u6237\u8bbe\u7f6e",children:"\u5e10\u6237\u8bbe\u7f6e"}),"\n",(0,s.jsx)(e.p,{children:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a OpenAI \u5e10\u6237\u6216\u767b\u5f55\u3002\u63a5\u4e0b\u6765\uff0c\u5bfc\u822a\u5230 API \u5bc6\u94a5\u9875\u9762\u548c\u201c\u521b\u5efa\u65b0\u7684\u5bc6\u94a5\u201d\uff0c\u53ef\u4ee5\u9009\u62e9\u547d\u540d\u5bc6\u94a5\u3002\u786e\u4fdd\u5c06\u5176\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u5730\u65b9\uff0c\u4e0d\u8981\u4e0e\u4efb\u4f55\u4eba\u5206\u4eab\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5feb\u901f\u5165\u95e8\u8bed\u8a00\u9009\u62e9",children:"\u5feb\u901f\u5165\u95e8\u8bed\u8a00\u9009\u62e9"}),"\n",(0,s.jsx)(e.p,{children:"\u9009\u62e9\u8981\u5f00\u59cb\u4f7f\u7528 OpenAI API \u7684\u5de5\u5177\u6216\u8bed\u8a00\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Python \u662f\u4e00\u79cd\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u7531\u4e8e\u5176\u6613\u7528\u6027\uff0c\u901a\u5e38\u7528\u4e8e\u6570\u636e\u5e94\u7528\u7a0b\u5e8f\u3001Web \u5f00\u53d1\u548c\u8bb8\u591a\u5176\u4ed6\u7f16\u7a0b\u4efb\u52a1\u3002OpenAI \u63d0\u4f9b\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49 Python \u5e93\uff0c\u4f7f\u5728 Python \u4e2d\u4f7f\u7528 OpenAI API \u53d8\u5f97\u7b80\u5355\u9ad8\u6548\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u7b2c-1-\u6b65\u8bbe\u7f6e-python",children:"\u7b2c 1 \u6b65\uff1a\u8bbe\u7f6e Python"}),"\n",(0,s.jsx)(e.h3,{id:"\u5b89\u88c5-python",children:"\u5b89\u88c5 Python"}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u4f7f\u7528 OpenAI Python \u5e93\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u5df2\u5b89\u88c5 Python\u3002\u6709\u4e9b\u8ba1\u7b97\u673a\u9884\u88c5\u4e86 Python\uff0c\u800c\u5176\u4ed6\u8ba1\u7b97\u673a\u5219\u9700\u8981\u60a8\u81ea\u5df1\u8bbe\u7f6e\u3002\u82e5\u8981\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u4e86 Python\uff0c\u53ef\u4ee5\u5bfc\u822a\u5230\u201c\u7ec8\u7aef\u201d\u6216\u201c\u547d\u4ee4\u884c\u201d\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"MacOS\uff1a\u6253\u5f00\u7ec8\u7aef\uff1a\u60a8\u53ef\u4ee5\u5728\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u6587\u4ef6\u5939\u4e2d\u627e\u5230\u5b83\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 Spotlight\uff08Command + \u7a7a\u683c\u952e\uff09\u641c\u7d22\u5b83\u3002"}),"\n",(0,s.jsx)(e.li,{children:"Windows\uff1a\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\uff1a\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u5f00\u59cb\u83dc\u5355\u4e2d\u641c\u7d22\u201ccmd\u201d\u6765\u627e\u5230\u5b83\u3002\r\n\u63a5\u4e0b\u6765\uff0c\u8f93\u5165\u5355\u8bcd\uff0c\u7136\u540e\u6309 Return/Enter\u3002\u5982\u679c\u60a8\u8fdb\u5165 Python \u89e3\u91ca\u5668\uff0c\u5219\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u5df2\u7ecf\u5b89\u88c5\u4e86 Python\uff0c\u60a8\u53ef\u4ee5\u8f6c\u5230\u4e0b\u4e00\u6b65\u3002\u5982\u679c\u60a8\u6536\u5230\u7c7b\u4f3c\u201c\u9519\u8bef\uff1a\u627e\u4e0d\u5230\u547d\u4ee4 python\u201d\u7684\u9519\u8bef\u6d88\u606f\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5b89\u88c5 Python \u5e76\u5728\u7ec8\u7aef/\u547d\u4ee4\u884c\u4e2d\u4f7f\u5176\u53ef\u7528\u3002python"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u4e0b\u8f7d Python\uff0c\u8bf7\u524d\u5f80 Python \u5b98\u65b9\u7f51\u7ad9\u5e76\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u3002\u8981\u4f7f\u7528 OpenAI Python \u5e93\uff0c\u60a8\u81f3\u5c11\u9700\u8981 Python 3.7.1 \u6216\u66f4\u9ad8\u7248\u672c\u3002\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u5b89\u88c5 Python\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u5b98\u65b9\u7684 Python \u521d\u5b66\u8005\u5b89\u88c5\u6307\u5357\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8bbe\u7f6e\u865a\u62df\u73af\u5883\u53ef\u9009",children:"\u8bbe\u7f6e\u865a\u62df\u73af\u5883\uff08\u53ef\u9009\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u5b89\u88c5 Python \u540e\uff0c\u6700\u597d\u521b\u5efa\u4e00\u4e2a\u865a\u62df python \u73af\u5883\u6765\u5b89\u88c5 OpenAI Python \u5e93\u3002\u865a\u62df\u73af\u5883\u4e3a\u8981\u5b89\u88c5\u7684 Python \u5305\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5e72\u51c0\u7684\u5de5\u4f5c\u7a7a\u95f4\uff0c\u8fd9\u6837\u60a8\u5c31\u4e0d\u4f1a\u4e0e\u4e3a\u5176\u4ed6\u9879\u76ee\u5b89\u88c5\u7684\u5176\u4ed6\u5e93\u53d1\u751f\u51b2\u7a81\u3002\u60a8\u4e0d\u9700\u8981\u4f7f\u7528\u865a\u62df\u73af\u5883\uff0c\u56e0\u6b64\u5982\u679c\u60a8\u4e0d\u60f3\u8bbe\u7f6e\u865a\u62df\u73af\u5883\uff0c\u8bf7\u8df3\u5230\u6b65\u9aa4 3\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u521b\u5efa\u865a\u62df\u73af\u5883\uff0cPython \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684 venv \u6a21\u5757\uff0c\u8be5\u6a21\u5757\u63d0\u4f9b\u4e86\u865a\u62df\u73af\u5883\u6240\u9700\u7684\u57fa\u672c\u529f\u80fd\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5728\u60a8\u5728\u7ec8\u7aef/\u547d\u4ee4\u884c\u4e2d\u9009\u62e9\u7684\u5f53\u524d\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a\u201copenai-env\u201d\u7684\u865a\u62df\u73af\u5883\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"python -m venv openai-env\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u865a\u62df\u73af\u5883\u540e\uff0c\u60a8\u9700\u8981\u6fc0\u6d3b\u5b83\u3002\u5728 Windows \u4e0a\uff0c\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"openai-env\\Scripts\\activate\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Unix \u6216 MacOS \u4e0a\uff0c\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"source openai-env/bin/activate\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6fc0\u6d3b\u865a\u62df\u73af\u5883\u540e\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u7ec8\u7aef/\u547d\u4ee4\u884c\u754c\u9762\u7565\u6709\u53d8\u5316\uff0c\u5b83\u73b0\u5728\u5e94\u8be5\u5728\u5149\u6807\u8f93\u5165\u90e8\u5206\u7684\u5de6\u4fa7\u663e\u793a\u201copenai-env\u201d\u3002\u6709\u5173\u4f7f\u7528\u865a\u62df\u73af\u5883\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 Python \u6587\u6863\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5b89\u88c5 OpenAI Python \u5e93\r\n\u5b89\u88c5 Python 3.7.1 \u6216\u66f4\u9ad8\u7248\u672c\u5e76\uff08\u53ef\u9009\uff09\u8bbe\u7f6e\u865a\u62df\u73af\u5883\u540e\uff0c\u53ef\u4ee5\u5b89\u88c5 OpenAI Python \u5e93\u3002\u4ece\u7ec8\u7aef/\u547d\u4ee4\u884c\uff0c\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pip install --upgrade openai\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u8fd0\u884c\u5c06\u663e\u793a\u5df2\u5728\u5f53\u524d\u73af\u5883\u4e2d\u5b89\u88c5\u7684 Python \u5e93\uff0c\u8fd9\u5e94\u8be5\u786e\u8ba4 OpenAI Python \u5e93\u5df2\u6210\u529f\u5b89\u88c5\u3002pip list"}),"\n",(0,s.jsx)(e.h2,{id:"\u7b2c-2-\u6b65\u8bbe\u7f6e-api-\u5bc6\u94a5",children:"\u7b2c 2 \u6b65\uff1a\u8bbe\u7f6e API \u5bc6\u94a5"}),"\n",(0,s.jsx)(e.h3,{id:"\u4e3a\u6240\u6709\u9879\u76ee\u8bbe\u7f6e-api-\u5bc6\u94a5\u63a8\u8350",children:"\u4e3a\u6240\u6709\u9879\u76ee\u8bbe\u7f6e API \u5bc6\u94a5\uff08\u63a8\u8350\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u60a8\u7684 API \u5bc6\u94a5\u53ef\u4f9b\u6240\u6709\u9879\u76ee\u8bbf\u95ee\u7684\u4e3b\u8981\u4f18\u70b9\u662f Python \u5e93\u5c06\u81ea\u52a8\u68c0\u6d4b\u5e76\u4f7f\u7528\u5b83\uff0c\u800c\u65e0\u9700\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"macos\u64cd\u4f5c\u7cfb\u7edf",children:"MacOS\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6253\u5f00\u7ec8\u7aef\uff1a\u60a8\u53ef\u4ee5\u5728\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u6587\u4ef6\u5939\u4e2d\u627e\u5230\u5b83\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 Spotlight\uff08Command + \u7a7a\u683c\u952e\uff09\u641c\u7d22\u5b83\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7f16\u8f91 Bash \u914d\u7f6e\u6587\u4ef6\uff1a\u4f7f\u7528\u547d\u4ee4 \u6216\uff08\u5bf9\u4e8e\u8f83\u65b0\u7684 MacOS \u7248\u672c\uff09\u5728\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00\u914d\u7f6e\u6587\u4ef6\u3002nano ~/.bash_profilenano ~/.zshrc"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\uff1a\u5728\u7f16\u8f91\u5668\u4e2d\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u884c\uff0c\u66ff\u6362\u4e3a\u60a8\u7684\u5b9e\u9645 API \u5bc6\u94a5\uff1ayour-api-key-here"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"export OPENAI_API_KEY='your-api-key-here'\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4fdd\u5b58\u5e76\u9000\u51fa\uff1a\u6309 Ctrl+O \u5199\u5165\u66f4\u6539\uff0c\u7136\u540e\u6309 Ctrl+X \u5173\u95ed\u7f16\u8f91\u5668\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\uff1a\u4f7f\u7528\u547d\u4ee4 \u6216\u52a0\u8f7d\u66f4\u65b0\u7684\u914d\u7f6e\u6587\u4ef6\u3002source ~/.bash_profilesource ~/.zshrc"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u9a8c\u8bc1\uff1a\u901a\u8fc7\u5728\u7ec8\u7aef\u4e2d\u952e\u5165\u6765\u9a8c\u8bc1\u8bbe\u7f6e\u3002\u5b83\u5e94\u8be5\u663e\u793a\u60a8\u7684 API \u5bc6\u94a5\u3002echo $OPENAI_API_KEY"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7a97\u6237",children:"\u7a97\u6237"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\uff1a\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u5f00\u59cb\u83dc\u5355\u4e2d\u641c\u7d22\u201ccmd\u201d\u6765\u627e\u5230\u5b83\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1a\u8981\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u66ff\u6362\u4e3a\u60a8\u7684\u5b9e\u9645 API \u5bc6\u94a5\uff1ayour-api-key-here"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'setx OPENAI_API_KEY "your-api-key-here"\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u547d\u4ee4\u5c06\u4e3a\u5f53\u524d\u4f1a\u8bdd\u8bbe\u7f6eOPENAI_API_KEY\u73af\u5883\u53d8\u91cf\u3002"}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"\u6c38\u4e45\u8bbe\u7f6e\uff1a\u8981\u4f7f\u8bbe\u7f6e\u6c38\u4e45\u5316\uff0c\u8bf7\u901a\u8fc7\u7cfb\u7edf\u5c5e\u6027\u6dfb\u52a0\u53d8\u91cf\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53f3\u952e\u5355\u51fb\u201c\u8fd9\u53f0\u7535\u8111\u201d\u6216\u201c\u6211\u7684\u7535\u8111\u201d\uff0c\u7136\u540e\u9009\u62e9\u201c\u5c5e\u6027\u201d\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u70b9\u51fb\u201c\u9ad8\u7ea7\u7cfb\u7edf\u8bbe\u7f6e\u201d\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5355\u51fb\u201c\u73af\u5883\u53d8\u91cf\u201d\u6309\u94ae\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u201c\u7cfb\u7edf\u53d8\u91cf\u201d\u90e8\u5206\uff0c\u70b9\u51fb\u201c\u65b0\u5efa...\u201d\u5e76\u8f93\u5165 OPENAI_API_KEY \u4f5c\u4e3a\u53d8\u91cf\u540d\u79f0\uff0c\u8f93\u5165\u60a8\u7684 API \u5bc6\u94a5\u4f5c\u4e3a\u53d8\u91cf\u503c\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9a8c\u8bc1\uff1a\u82e5\u8981\u9a8c\u8bc1\u8bbe\u7f6e\uff0c\u8bf7\u91cd\u65b0\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\u5e76\u952e\u5165\u4ee5\u4e0b\u547d\u4ee4\u3002\u5b83\u5e94\u8be5\u663e\u793a\u4f60\u7684 API \u5bc6\u94a5\uff1aecho %OPENAI_API_KEY%"}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"\u4e3a\u5355\u4e2a\u9879\u76ee\u8bbe\u7f6e API \u5bc6\u94a5\r\n\u5982\u679c\u60a8\u53ea\u60f3\u8ba9\u5355\u4e2a\u9879\u76ee\u8bbf\u95ee\u60a8\u7684 API \u5bc6\u94a5\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5305\u542b API \u5bc6\u94a5\u7684\u672c\u5730\u6587\u4ef6\uff0c\u7136\u540e\u5c06\u8be5 API \u5bc6\u94a5\u4e0e\u540e\u7eed\u6b65\u9aa4\u4e2d\u6240\u793a\u7684 Python \u4ee3\u7801\u663e\u5f0f\u4f7f\u7528\u3002.env"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9996\u5148\u8f6c\u5230\u8981\u5728\u5176\u4e2d\u521b\u5efa\u6587\u4ef6\u7684\u9879\u76ee\u6587\u4ef6\u5939\u3002.env"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u4f7f\u7248\u672c\u63a7\u5236\u5ffd\u7565 .env \u6587\u4ef6\uff0c\u8bf7\u5728\u9879\u76ee\u76ee\u5f55\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a .gitignore \u6587\u4ef6\u3002\u6dfb\u52a0\u4e00\u884c\u5e26\u6709 .env \u7684\u884c\uff0c\u4ee5\u786e\u4fdd\u60a8\u7684 API \u5bc6\u94a5\u6216\u5176\u4ed6\u673a\u5bc6\u4e0d\u4f1a\u901a\u8fc7\u7248\u672c\u63a7\u5236\u610f\u5916\u5171\u4eab\u3002\r\n\u4f7f\u7528\u7ec8\u7aef\u6216\u96c6\u6210\u5f00\u53d1\u73af\u5883 \uff08IDE\uff09 \u521b\u5efa and \u6587\u4ef6\u540e\uff0c\u590d\u5236\u60a8\u7684\u5bc6\u94a5\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u6587\u4ef6\u4e2d\u7684 \u3002\u5982\u679c\u60a8\u5c1a\u672a\u521b\u5efa\u5bc6\u94a5\uff0c\u53ef\u4ee5\u5728 API \u5bc6\u94a5\u9875\u9762\u4e0a\u8fdb\u884c\u521b\u5efa\u3002.gitignore.envOPENAI_API_KEY.env"}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u6587\u4ef6\u5e94\u5982\u4e0b\u6240\u793a\uff1a.env"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Once you add your API key below, make sure to not share it with anyone! The API key should remain private.\r\nOPENAI_API_KEY=abc123\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u4ee3\u7801\u6765\u5bfc\u5165 API \u5bc6\u94a5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'from openai import OpenAI\r\n\r\nclient = OpenAI()\r\n# defaults to getting the key using os.environ.get("OPENAI_API_KEY")\r\n# if you saved the key under a different environment variable name, you can do something like:\r\n# client = OpenAI(\r\n#   api_key=os.environ.get("CUSTOM_ENV_NAME"),\r\n# )\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7b2c 3 \u6b65\uff1a\u53d1\u9001\u60a8\u7684\u7b2c\u4e00\u4e2a API \u8bf7\u6c42\r\n\u53d1\u51fa API \u8bf7\u6c42\r\n\u914d\u7f6e\u5e76\u8bbe\u7f6e Python \u5bc6\u94a5\u540e\uff0c\u6700\u540e\u4e00\u6b65\u662f\u4f7f\u7528 Python \u5e93\u5411 OpenAI API \u53d1\u9001\u8bf7\u6c42\u3002\u4e3a\u6b64\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528 th \u7ec8\u7aef\u6216 IDE \u547d\u540d\u7684\u6587\u4ef6\u3002openai-test.py"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6587\u4ef6\u4e2d\uff0c\u590d\u5236\u5e76\u7c98\u8d34\u4ee5\u4e0b\u793a\u4f8b\u4e4b\u4e00\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u804a\u5929\u5b8c\u6210"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",metastring:"\u804a\u5929\u5b8c\u6210",children:'from openai import OpenAI\r\nclient = OpenAI()\r\n\r\ncompletion = client.chat.completions.create(\r\n  model="gpt-3.5-turbo",\r\n  messages=[\r\n    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},\r\n    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}\r\n  ]\r\n)\r\n\r\nprint(completion.choices[0].message)\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u8fd0\u884c\u4ee3\u7801\uff0c\u8bf7\u8f93\u5165\u7ec8\u7aef/\u547d\u4ee4\u884c\u3002python openai-test.py"}),"\n",(0,s.jsx)(e.p,{children:"\u804a\u5929\u5b8c\u6210\u793a\u4f8b\u4ec5\u7a81\u51fa\u4e86\u6211\u4eec\u6a21\u578b\u7684\u4e00\u4e2a\u4f18\u52bf\u9886\u57df\uff1a\u521b\u9020\u529b\u3002\u5728\u4e00\u9996\u683c\u5f0f\u826f\u597d\u7684\u8bd7\u6b4c\u4e2d\u89e3\u91ca\u9012\u5f52\uff08\u7f16\u7a0b\u4e3b\u9898\uff09\u662f\u6700\u597d\u7684\u5f00\u53d1\u4eba\u5458\u548c\u6700\u597d\u7684\u8bd7\u4eba\u90fd\u4f1a\u52aa\u529b\u89e3\u51b3\u7684\u95ee\u9898\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6beb\u4e0d\u8d39\u529b\u5730\u505a\u5230\u4e86\u3002gpt-3.5-turbo"}),"\n",(0,s.jsx)(e.p,{children:"\u540e\u7eed\u6b65\u9aa4\r\n\u73b0\u5728\u60a8\u5df2\u7ecf\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a OpenAI API \u8bf7\u6c42\uff0c\u662f\u65f6\u5019\u63a2\u7d22\u5176\u4ed6\u53ef\u80fd\u6027\u4e86\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6709\u5173\u6211\u4eec\u7684\u6a21\u578b\u548c API \u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684 GPT \u6307\u5357\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8bbf\u95ee OpenAI Cookbook\uff0c\u4e86\u89e3\u6df1\u5165\u7684\u793a\u4f8b API \u7528\u4f8b\uff0c\u4ee5\u53ca\u5e38\u89c1\u4efb\u52a1\u7684\u4ee3\u7801\u7247\u6bb5\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u60f3\u77e5\u9053 OpenAI \u7684\u6a21\u578b\u6709\u4ec0\u4e48\u80fd\u529b\u5417\uff1f\u67e5\u770b\u6211\u4eec\u7684\u793a\u4f8b\u63d0\u793a\u5e93\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u60f3\u5728\u4e0d\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u8bd5\u7528 API\uff1f\u5f00\u59cb\u5728 Playground \u4e2d\u8fdb\u884c\u8bd5\u9a8c\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u5f00\u59cb\u6784\u5efa\u65f6\uff0c\u8bf7\u7262\u8bb0\u6211\u4eec\u7684\u4f7f\u7528\u653f\u7b56\u3002"}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var s=i(6540);const r={},l=s.createContext(r);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);