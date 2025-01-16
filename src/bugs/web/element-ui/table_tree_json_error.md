---
lastUpdated: 2023/9/17 02:12
---

# Error: for nested data item, row-key is required.

## 问题描述

使用嵌套树形 JSON 数据，例如：

```json
[
  {
    "id": 1,
    "name": "test-1",
    "children": [
      {
        "id": 101,
        "childName": "childNode-101"
      },
      {
        "id": 102,
        "childName": "childNode-102"
      }
    ]
  },
  {
    "id": 2,
    "name": "test-2",
    "children": [
      {
        "id": 201,
        "childName": "childNode-201"
      },
      {
        "id": 202,
        "childName": "childNode-202"
      }
    ]
  }
]
```

如上数据，如果正常在 el-table 使用，会出现错误

## 解决方式

在 el-table 中，如果是树形的数据，应该加上 `tree-props` 属性

```vue
<el-table
    :tree-props="{ hasChildren: 'hasChildren', children: 'children' }"
/>
```

而 JSON 数据相应，必需要有 `hasChildren` 和 `children` 两个参数

```json
[
  {
    "id": 1,
    "name": "test-1",
    "hasChildren": true,
    "children": [
      {
        "id": 101,
        "childName": "childNode-101"
      },
      {
        "id": 102,
        "childName": "childNode-102"
      }
    ]
  },
  {
    "id": 2,
    "name": "test-2",
    "hasChildren": true,
    "children": [
      {
        "id": 201,
        "childName": "childNode-201"
      },
      {
        "id": 202,
        "childName": "childNode-202"
      }
    ]
  }
]
```

