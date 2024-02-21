"use strict";(self.webpackChunkchatgptdocstudy=self.webpackChunkchatgptdocstudy||[]).push([[6795],{9366:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"openaistudy","metadata":{"permalink":"/chatgptdocstudy/en/blog/openaistudy","source":"@site/blog/2024-02-21-openaistudy.md","title":"openaistudy \u5feb\u901f\u5165\u95e8!","description":"\u5feb\u901f\u5165\u95e8","date":"2024-02-21T00:00:00.000Z","formattedDate":"February 21, 2024","tags":[{"label":"openaistudy","permalink":"/chatgptdocstudy/en/blog/tags/openaistudy"}],"readingTime":6.85,"hasTruncateMarker":false,"authors":[{"name":"Shallow Dream Breeze Ling","title":"Co-creator of Docusaurus 1","url":"https://github.com/drfengyu","image_url":"https://github.com/drfengyu.png","imageURL":"https://github.com/drfengyu.png"}],"frontMatter":{"slug":"openaistudy","title":"openaistudy \u5feb\u901f\u5165\u95e8!","authors":[{"name":"Shallow Dream Breeze Ling","title":"Co-creator of Docusaurus 1","url":"https://github.com/drfengyu","image_url":"https://github.com/drfengyu.png","imageURL":"https://github.com/drfengyu.png"}],"tags":["openaistudy"]},"unlisted":false,"nextItem":{"title":"Greetings!","permalink":"/chatgptdocstudy/en/blog/greetings"}},"content":"## \u5feb\u901f\u5165\u95e8\\r\\n\\r\\n```bash\\r\\nG:\\\\PythonProject\\\\OpenAiApiStudy\\\\Openaistudy2\\r\\n```\\r\\n### 1. \u521b\u5efa\u865a\u62df\u73af\u5883\\r\\n```bash\\r\\npython -m venv openai-env\\r\\n```\\r\\n### 2. \u6fc0\u6d3b\\r\\n```bash\\r\\nopenai-env\\\\Scripts\\\\activate\\r\\n```\\r\\n### 3. \u5b89\u88c5openai\u5e93\\r\\n```bash\\r\\npip install --upgrade openai\\r\\n```\\r\\n### 4. \u6dfb\u52a0.env\u6587\u4ef6\\r\\n```bash\\r\\n# Once you add your API key below, make sure to not share it with anyone! The API key should remain private.\\r\\nOPENAI_API_KEY=abc123\\r\\n```\\r\\n### 5. \u5bfc\u5165API KEY\\r\\n```python\\r\\nfrom openai import OpenAI\\r\\n\\r\\nclient = OpenAI()\\r\\n# defaults to getting the key using os.environ.get(\\"OPENAI_API_KEY\\")\\r\\n# if you saved the key under a different environment variable name, you can do something like:\\r\\n# client = OpenAI(\\r\\n#   api_key=os.environ.get(\\"CUSTOM_ENV_NAME\\"),\\r\\n# )\\r\\n```\\r\\n### 6. \u6fc0\u6d3b\u73af\u5883\u53d8\u91cf\\r\\n```python\\r\\nfrom dotenv import load_dotenv\\r\\nload_dotenv()  # \u8fd9\u5c06\u52a0\u8f7d.env\u6587\u4ef6\u4e2d\u7684\u73af\u5883\u53d8\u91cf\\r\\n```\\r\\n\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u4f7f\u7528 python-dotenv \u5e93\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5\u5b83\uff1a\\r\\n```python\\r\\npip install python-dotenv\\r\\n```\\r\\n\\r\\n### 7. \u53d1\u51faAPI\u8bf7\u6c42\\r\\n\\r\\n- ChatCompletion\\r\\n```python\\r\\nfrom openai import OpenAI\\r\\nclient = OpenAI()\\r\\n\\r\\ncompletion = client.chat.completions.create(\\r\\n  model=\\"gpt-3.5-turbo\\",\\r\\n  messages=[\\r\\n    {\\"role\\": \\"system\\", \\"content\\": \\"You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.\\"},\\r\\n    {\\"role\\": \\"user\\", \\"content\\": \\"Compose a poem that explains the concept of recursion in programming.\\"}\\r\\n  ]\\r\\n)\\r\\n\\r\\nprint(completion.choices[0].message)\\r\\n```\\r\\n- \u8fdb\u9636\\r\\n```python\\r\\nfrom openai import OpenAI\\r\\n# \u521d\u59cb\u5316OpenAI\u5ba2\u6237\u7aef\\r\\nclient = OpenAI()\\r\\n# \u8f93\u5165\u548cAPI\u8bf7\u6c42\u7684\u5faa\u73af\\r\\nwhile True:\\r\\n    user_input = input(\\"\u8bf7\u8f93\u5165\u4f60\u7684\u95ee\u9898\uff08\u8f93\u5165\'exit\'\u7ed3\u675f\u5bf9\u8bdd\uff09\uff1a\\")\\r\\n    # \u68c0\u67e5\u7528\u6237\u662f\u5426\u60f3\u9000\u51fa\\r\\n    if user_input.lower() == \'exit\':\\r\\n        print(\\"\u7ed3\u675f\u5bf9\u8bdd\u3002\\")\\r\\n        break\\r\\n    # \u53d1\u9001API\u8bf7\u6c42\\r\\n    completion = client.chat.completions.create(\\r\\n        model=\\"gpt-3.5-turbo\\",\\r\\n        messages=[\\r\\n            {\\"role\\": \\"system\\", \\"content\\": \\"You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.\\"},\\r\\n            {\\"role\\": \\"user\\", \\"content\\": user_input}\\r\\n        ]\\r\\n    )\\r\\n    # \u6253\u5370API\u54cd\u5e94\\r\\n    message = completion.choices[0].message\\r\\n    print(message)\\r\\n```\\r\\n\\r\\n- \u8fdb\u96362\\r\\n```python\\r\\n# ChatCompletion\\r\\nfrom openai import OpenAI\\r\\nfrom dotenv import load_dotenv\\r\\nimport os\\r\\n# \u52a0\u8f7d\u73af\u5883\u53d8\u91cf\\r\\nload_dotenv()\\r\\nclient = OpenAI()\\r\\n# \u6253\u5370\u5f53\u524d\u7cfb\u7edf\u63d0\u793a\\r\\ncurrent_prompt = os.environ.get(\\"prompt\\")\\r\\nprint(f\\"\u5f53\u524d\u7684openai\u89d2\u8272\u8bbe\u5b9a\u5185\u5bb9\u4e3a\uff1a\'{current_prompt}\'\\")\\r\\n# \u8be2\u95ee\u7528\u6237\u662f\u5426\u60f3\u8981\u66f4\u6539\u7cfb\u7edf\u63d0\u793a\\r\\nchange_prompt = input(\\"\u60a8\u60f3\u8981\u66f4\u6539\u89d2\u8272\u8bbe\u5b9a\u5185\u5bb9\u5417? (yes/no): \\")\\r\\nif change_prompt.lower() == \'yes\':\\r\\n    # \u63a5\u6536\u65b0\u7684\u7cfb\u7edf\u63d0\u793a\u5185\u5bb9\\r\\n    new_prompt = input(\\"\u8bf7\u8f93\u5165\u65b0\u7684\u89d2\u8272\u8bbe\u5b9a\u63d0\u793a\u5185\u5bb9: \\")\\r\\n    # \u66f4\u65b0\u7cfb\u7edf\u63d0\u793a\u5185\u5bb9\\r\\n    os.environ[\\"prompt\\"] = new_prompt\\r\\n    print(new_prompt)\\r\\n    # # \u66f4\u65b0env\u6587\u4ef6\uff08\u8bf7\u786e\u4fdd\u8fd9\u6837\u505a\u662f\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\u8fd9\u6837\u505a\u53ef\u80fd\u4f1a\u5f71\u54cd\u5176\u4ed6\u540c\u6837\u4f9d\u8d56\u4e8e\u8fd9\u4e2a\u6587\u4ef6\u7684\u8fdb\u7a0b\uff09\\r\\n    # with open(\'.env\', \'r\') as file:\\r\\n    #     env_lines = file.readlines()\\r\\n    # with open(\'.env\', \'w\') as file:\\r\\n    #     for line in env_lines:\\r\\n    #         if line.startswith(\'prompt=\'):\\r\\n    #             file.write(f\\"prompt={new_prompt}\\\\n\\")\\r\\n    #         else:\\r\\n    #             file.write(line)\\r\\n# \u8fdb\u5165\u804a\u5929\u5faa\u73af\\r\\nwhile True:\\r\\n    user_input = input(\\"\u8bf7\u8f93\u5165\u4f60\u7684\u95ee\u9898(\u8f93\u5165\'exit\'\u7ed3\u675f\u5bf9\u8bdd):\\")\\r\\n    if user_input.lower() == \'exit\':\\r\\n        print(\\"\u7ed3\u675f\u5bf9\u8bdd\u3002\\")\\r\\n        break\\r\\n    completion = client.chat.completions.create(\\r\\n        model=os.environ.get(\\"Model\\"),\\r\\n        messages=[\\r\\n            {\\"role\\": \\"system\\", \\"content\\": os.environ.get(\\"prompt\\")},\\r\\n            {\\"role\\": \\"user\\", \\"content\\": user_input}\\r\\n        ]\\r\\n    )\\r\\n    message = completion.choices[0].message.content\\r\\n    print(message)\\r\\n```\\r\\n- \u8fdb\u96363\\r\\n```python\\r\\n# ChatCompletion\\r\\nfrom openai import OpenAI\\r\\nfrom dotenv import load_dotenv\\r\\nimport os\\r\\nimport requests\\r\\nimport json\\r\\n# \u52a0\u8f7d\u73af\u5883\u53d8\u91cf\\r\\nload_dotenv()\\r\\nclient = OpenAI()\\r\\n\\r\\ndef getIP():\\r\\n    user_ip =\\"\\"\\r\\n    try:\\r\\n        response = requests.get(\'https://api.ipify.org\')\\r\\n        user_ip = response.text\\r\\n    except:\\r\\n        user_ip=\\"\\"\\r\\n    return user_ip\\r\\n\\r\\n# \u6253\u5370\u5f53\u524d\u7cfb\u7edf\u63d0\u793a\\r\\ncurrent_prompt = os.environ.get(\\"prompt\\")\\r\\nprint(f\\"\u5f53\u524d\u7684openai\u89d2\u8272\u8bbe\u5b9a\u5185\u5bb9\u4e3a\uff1a\'{current_prompt}\'\\")\\r\\nuser_ip=getIP()\\r\\n# \u8be2\u95ee\u7528\u6237\u662f\u5426\u60f3\u8981\u66f4\u6539\u7cfb\u7edf\u63d0\u793a\\r\\nchange_prompt = input(\\"\u60a8\u60f3\u8981\u66f4\u6539\u89d2\u8272\u8bbe\u5b9a\u5185\u5bb9\u5417? (yes/no): \\")\\r\\nif change_prompt.lower() == \'yes\':\\r\\n    # \u63a5\u6536\u65b0\u7684\u7cfb\u7edf\u63d0\u793a\u5185\u5bb9\\r\\n    new_prompt = input(\\"\u8bf7\u8f93\u5165\u65b0\u7684\u89d2\u8272\u8bbe\u5b9a\u63d0\u793a\u5185\u5bb9: \\")\\r\\n    # \u66f4\u65b0\u7cfb\u7edf\u63d0\u793a\u5185\u5bb9\\r\\n    os.environ[\\"prompt\\"] = new_prompt\\r\\n    print(new_prompt)\\r\\n\\r\\ndef send_to_webhook(user_ip, system_content, user_input, ai_response, webhook_url):\\r\\n    message = {\\r\\n        \\"content\\":(\\r\\n            f\\"\u7cfb\u7edf\u8bbe\u5b9a: {system_content}\\\\n\\"\\r\\n        )\\r\\n        ,\\r\\n        \\"username\\": \\"Webhook\u673a\u5668\u4eba\\",\\r\\n        \\"avatar_url\\": \\"https://example.com/image.png\\",\\r\\n        \\"embeds\\": [\\r\\n            {\\r\\n                \\"title\\": f\\"{user_ip}:{user_input}\\",\\r\\n                \\"description\\": f\\"{ai_response}\\",\\r\\n                \\"color\\": 5814783\\r\\n            }\\r\\n        ],\\r\\n    }\\r\\n    response = requests.post(webhook_url, json=message,headers={\\"Content-Type\\": \\"application/json\\"})\\r\\n\\r\\n# \u8fdb\u5165\u804a\u5929\u5faa\u73af\\r\\nwhile True:\\r\\n    user_input = input(\\"\u8bf7\u8f93\u5165\u4f60\u7684\u95ee\u9898(\u8f93\u5165\'exit\'\u7ed3\u675f\u5bf9\u8bdd):\\")\\r\\n    if user_input.lower() == \'exit\':\\r\\n        print(\\"\u7ed3\u675f\u5bf9\u8bdd\u3002\\")\\r\\n        break\\r\\n    completion = client.chat.completions.create(\\r\\n        model=os.environ.get(\\"Model\\"),\\r\\n        messages=[\\r\\n            {\\"role\\": \\"system\\", \\"content\\": os.environ.get(\\"prompt\\")},\\r\\n            {\\"role\\": \\"user\\", \\"content\\": user_input}\\r\\n        ]\\r\\n    )\\r\\n    message = completion.choices[0].message.content\\r\\n    print(message)\\r\\n    send_to_webhook(user_ip,os.environ.get(\\"prompt\\"),user_input,message,os.environ.get(\\"webhook\\"))\\r\\n```\\r\\n- Embeddings\\r\\n```python\\r\\nfrom openai import OpenAI\\r\\nclient = OpenAI()\\r\\n\\r\\nresponse = client.embeddings.create(\\r\\n  model=\\"text-embedding-ada-002\\",\\r\\n  input=\\"The food was delicious and the waiter...\\"\\r\\n)\\r\\n\\r\\nprint(response)\\r\\n```\\r\\n\\r\\n- images\\r\\n```python\\r\\nfrom openai import OpenAI\\r\\nclient = OpenAI()\\r\\n\\r\\nresponse = client.images.generate(\\r\\n  prompt=\\"A cute baby sea otter\\",\\r\\n  n=2,\\r\\n  size=\\"1024x1024\\"\\r\\n)\\r\\n\\r\\nprint(response)\\r\\n```\\r\\n### 8. \u901a\u8fc7Discord webhook \u53d1\u9001\u6d88\u606f\\r\\n\u5982\u679c\u60a8\u9700\u8981\u901a\u8fc7 Discord webhook \u53d1\u9001\u6d88\u606f\uff0c\u9700\u8981\u6309\u7167 Discord API \u63d0\u4f9b\u7684 `Execute Webhook` \u7aef\u70b9\u7684\u8981\u6c42\u6765\u6784\u9020 HTTP POST \u8bf7\u6c42\u3002\u4ee5\u4e0b\u662f\u53d1\u9001\u6d88\u606f\u7684\u57fa\u672c\u683c\u5f0f\uff1a\\r\\n**HTTP POST \u8bf7\u6c42:**\\r\\n```\\r\\nPOST https://discord.com/api/webhooks/{webhook.id}/{webhook.token}\\r\\n```\\r\\n**\u8bf7\u6c42\u5934\u90e8:**\\r\\n```\\r\\nContent-Type: application/json\\r\\n```\\r\\n**JSON \u8d1f\u8f7d:**\\r\\n```json\\r\\n{\\r\\n    \\"content\\": \\"\u4f60\u597d\uff0c\u8fd9\u662f\u4e00\u6761\u6d88\u606f\uff01\\",\\r\\n    \\"username\\": \\"Webhook\u673a\u5668\u4eba\\",\\r\\n    \\"avatar_url\\": \\"https://example.com/image.png\\",\\r\\n    \\"embeds\\": [\\r\\n        {\\r\\n            \\"title\\": \\"\u5d4c\u5165\u6807\u9898\\",\\r\\n            \\"description\\": \\"\u8fd9\u662f\u4e00\u4e2a\u5d4c\u5165\u5185\u5bb9\\",\\r\\n            \\"color\\": 5814783\\r\\n            // \u8fd9\u91cc\u53ef\u4ee5\u5305\u542b\u66f4\u591a\u5d4c\u5165\u5c5e\u6027\\r\\n        }\\r\\n    ],\\r\\n    // \u6839\u636e\u6587\u6863\u89c4\u5b9a\uff0c\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u5305\u542b\u66f4\u591a\u5b57\u6bb5\\r\\n}\\r\\n```\\r\\n\u5728\u8fd9\u4e2a JSON \u8d1f\u8f7d\u4e2d\uff1a\\r\\n- `\\"content\\"` \u662f\u6d88\u606f\u6587\u672c\u3002\\r\\n- `\\"username\\"` \u7528\u6765\u8986\u76d6\u9ed8\u8ba4\u7684 webhook \u7528\u6237\u540d\u3002\\r\\n- `\\"avatar_url\\"` \u7528\u6765\u8986\u76d6\u9ed8\u8ba4\u7684 webhook \u5934\u50cf\u3002\\r\\n- `\\"embeds\\"` \u662f\u5305\u542b\u5d4c\u5165\u5bf9\u8c61\u7684\u6570\u7ec4\u3002\u6bcf\u4e2a\u5d4c\u5165\u5bf9\u8c61\u5305\u542b\u4e86\u5b9a\u4e49\u6d88\u606f\u5728 Discord \u4e2d\u663e\u793a\u65b9\u5f0f\u7684\u5143\u4fe1\u606f\uff0c\u6bd4\u5982\u6807\u9898\u3001\u63cf\u8ff0\u3001\u989c\u8272\u7b49\u3002\\r\\n\u4e0d\u540c\u5c5e\u6027\u5728 JSON \u8d1f\u8f7d\u4e2d\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u5728 [Discord API \u6587\u6863](https://discord.com/developers/docs/resources/webhook) \u4e2d\u6709\u8be6\u7ec6\u5b9a\u4e49\u7684\u3002\u786e\u4fdd\u6309\u7167\u60a8\u7684\u6d88\u606f\u9700\u6c42\u6765\u683c\u5f0f\u5316\u60a8\u7684 JSON \u8d1f\u8f7d\uff0c\u5e76\u9075\u5b88 Discord \u8bbe\u7f6e\u7684\u9891\u7387\u9650\u5236\uff0c\u907f\u514d\u5728\u53d1\u9001\u6d88\u606f\u65f6\u51fa\u73b0\u95ee\u9898\u3002\\r\\n\u8981\u53d1\u9001 HTTP \u8bf7\u6c42\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 `curl` \u5de5\u5177\u5728\u7ec8\u7aef\u91cc\u64cd\u4f5c\uff0c\u6216\u8005\u5728 Python \u4e2d\u4f7f\u7528 `requests` \u5e93\u6765\u7f16\u7a0b\u5b9e\u73b0\u53d1\u9001\u8bf7\u6c42\u3002\u59cb\u7ec8\u786e\u4fdd webhook URL \u5305\u542b\u521b\u5efa webhook \u65f6 Discord \u63d0\u4f9b\u7684\u6b63\u786e `webhook.id` \u548c `webhook.token`\u3002\\r\\n\\r\\n### 9. \u4f7f\u7528pyinstaller\u6253\u5305python\u9879\u76ee\\r\\n\u5728Python\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5de5\u5177\u6bd4\u5982PyInstaller\u6216\u8005cx_Freeze\u6765\u5c06Python\u9879\u76ee\u6253\u5305\u6210\u72ec\u7acb\u7684\u53ef\\r\\n\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6b65\u9aa4\u6765\u4f7f\u7528PyInstaller\u6765\u6253\u5305Python\u9879\u76ee\u6210exe\u6587\u4ef6\uff1a\\r\\n\\r\\n- \u9996\u5148\u5b89\u88c5PyInstaller:\\r\\n```\\r\\npip install pyinstaller\\r\\n```\\r\\n\\r\\n- \u5728\u547d\u4ee4\u884c\u4e2d\u8fdb\u5165\u60a8\u7684\u9879\u76ee\u6587\u4ef6\u5939\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4:\\r\\n```\\r\\npyinstaller --onefile your_script.py\\r\\n\u8fd9\u91cc`your_script.py`\u662f\u60a8\u7684Python\u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\u540d\u3002PyInstaller\u4f1a\u521b\u5efa\u4e00\u4e2abuild\u6587\u4ef6\u5939"},{"id":"greetings","metadata":{"permalink":"/chatgptdocstudy/en/blog/greetings","source":"@site/blog/2024-02-20-greetings.md","title":"Greetings!","description":"Congratulations,you have made your first post!","date":"2024-02-20T00:00:00.000Z","formattedDate":"February 20, 2024","tags":[{"label":"greetings","permalink":"/chatgptdocstudy/en/blog/tags/greetings"}],"readingTime":0.1,"hasTruncateMarker":false,"authors":[{"name":"Shallow Dream Breeze Ling","title":"Co-creator of Docusaurus 1","url":"https://github.com/drfengyu","image_url":"https://github.com/drfengyu.png","imageURL":"https://github.com/drfengyu.png"},{"name":"Joel Marcey","title":"Co-creator of Docusaurus 1","url":"https://github.com/JoelMarcey","image_url":"https://github.com/JoelMarcey.png","imageURL":"https://github.com/JoelMarcey.png"},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","image_url":"https://github.com/slorber.png","imageURL":"https://github.com/slorber.png"}],"frontMatter":{"slug":"greetings","title":"Greetings!","authors":[{"name":"Shallow Dream Breeze Ling","title":"Co-creator of Docusaurus 1","url":"https://github.com/drfengyu","image_url":"https://github.com/drfengyu.png","imageURL":"https://github.com/drfengyu.png"},{"name":"Joel Marcey","title":"Co-creator of Docusaurus 1","url":"https://github.com/JoelMarcey","image_url":"https://github.com/JoelMarcey.png","imageURL":"https://github.com/JoelMarcey.png"},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","image_url":"https://github.com/slorber.png","imageURL":"https://github.com/slorber.png"}],"tags":["greetings"]},"unlisted":false,"prevItem":{"title":"openaistudy \u5feb\u901f\u5165\u95e8!","permalink":"/chatgptdocstudy/en/blog/openaistudy"},"nextItem":{"title":"Welcome","permalink":"/chatgptdocstudy/en/blog/welcome"}},"content":"Congratulations,you have made your first post!\\r\\n\\r\\nFeel free to play around and edit this post as much as you like."},{"id":"welcome","metadata":{"permalink":"/chatgptdocstudy/en/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/chatgptdocstudy/en/blog/tags/facebook"},{"label":"hello","permalink":"/chatgptdocstudy/en/blog/tags/hello"},{"label":"docusaurus","permalink":"/chatgptdocstudy/en/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Greetings!","permalink":"/chatgptdocstudy/en/blog/greetings"},"nextItem":{"title":"MDX Blog Post","permalink":"/chatgptdocstudy/en/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/chatgptdocstudy/en/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/chatgptdocstudy/en/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/chatgptdocstudy/en/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/chatgptdocstudy/en/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/chatgptdocstudy/en/blog/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/chatgptdocstudy/en/blog/tags/hello"},{"label":"docusaurus","permalink":"/chatgptdocstudy/en/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/chatgptdocstudy/en/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/chatgptdocstudy/en/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/chatgptdocstudy/en/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/chatgptdocstudy/en/blog/tags/hola"},{"label":"docusaurus","permalink":"/chatgptdocstudy/en/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/chatgptdocstudy/en/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);