# babel使用.md


babel 运行方式
babel 总共分为三个阶段：

解析（parser）：通过 babel-parser(babylon) 解析成 AST
转换（transform）：All the plugins/presets ，AST 转换
生成（generator）：最后通过 babel-generator 生成目标代码+sourcemap
