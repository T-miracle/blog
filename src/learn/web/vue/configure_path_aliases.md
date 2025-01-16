---
lastUpdated: 2024/7/1 18:52
---

# Vue项目配置路径别名

在项目根目录的 `jsconfig.json` （没有就新建一个）中配置如下

```json {3-7}
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "./src/*"
            ],
            "@assets/*": [
                "./src/assets/*"
            ]
        }
    }
}
```

> <badge type="warning" text="注意"/> 如果你是使用 TypeScript 开发的项目，则应该在 `tsconfig.json` 中配置
