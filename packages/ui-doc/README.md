## 安装

```sh
tnpm i -S @alipay/oneapi-ui-doc
```

引入到项目：

```js
import { FengdieAPIUI } from "@alipay/oneapi-ui-doc";

<FengdieAPIUI
  getMockData={(path: string) => MockData}
  schemaData={APIData}
  onUpdateMock={(prevMockData, nextMockData) => {
    console.log("--------------- onMockUpdate ----------------------");
    console.info("prevMockData: ", prevMockData);
    console.info("nextMockData: ", nextMockData);
  }}
  mockEditable={true}
  activeAPIMethodKey="get /api/hotdoc"
  activeDataSchemaKey="GenType_1"
/>;
```

接口定义：

```ts
export interface FengdieAPIUIProps {
  /**
   * 必填项，获取指定 API 特定场景下的 mock 数据
   * @param path 指定 API 的路径
   */
  getMockData: (path: string) => Promise<MockDataItem[]>;
  /**
   * 必填项，外部注入 schema 数据
   */
  schemaData: OpenAPIV3.Document;
  /**
   * 必填项，mock 数据变更时的回掉函数
   * @param prevMockData 修改前的 mock 数据
   * @param nextMockData 修改后的 mock 数据
   */
  onUpdateMock(prevMockData: MockData, nextMockData: MockData): any;
  /**
   * 可选项，mock 数据是否可编辑，默认可编辑
   */
  mockEditable?: boolean;
  /**
   * 可选项，当前侧边栏激活选中的 API 方法
   * key = method + path
   */
  activeAPIMethodKey?: string;
  /**
   * 可选项，当前侧边栏激活选中的数据类型，key 为数据类型
   */
  activeDataSchemaKey?: string;
  /**
   * 可选项，暗色主题
   */
  dark?: boolean;
}
```

getMockData 返回数据样例，以下样例省略细节：

```json
[
  {
    "activityId": 107099,
    "dist": {
      "headers": {},
      "statusCode": 200,
      "data": {}
    },
    "gmtCreate": "2019-06-05T03:23:28.000Z",
    "gmtModified": "2019-06-05T03:23:28.000Z",
    "id": 278,
    "owner": {},
    "path": "get /api/$metadata/uitest",
    "scene": "default",
    "operationId": "getUiList",
    "tag": "UiController"
  }
]
```

schemaData 样例，标准 openapi 3.x，以下样例省略细节：

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "cmsmng",
    "version": "1.5.0",
    "contact": {
      "url": "https://yunfengdie.com"
    }
  },
  "paths": {},
  "components": {},
  "tags": [],
  "servers": []
}
```