## 服务端事件

1. 登录成功: loginSuccess
2. 登录失败: loginError
3. 获取用户列表: userList
4. 用户下线: delUser
5. 获取所有消息: receiveMessage

## 客户端事件

1. 登录: login
   传入参数:  
   username: 用户名 
   avatar: 用户头像

2. 发送信息: sendMessage
   传入参数:  
   msg: 聊天内容 
   username: 当前用户名 
   avatar: 当前用户头像