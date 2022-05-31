class user {
    constructor() {
        this.xiaoSHiDengRu();
    }
    xiaoSHiDengRu() {
        // 获取整体的节点对象
        let id = localStorage.getItem('user_id')
            // console.log(id);
        let whole = document.querySelector('.login')
            // console.log(whole);
            // 获取token  名称
        let token = localStorage.getItem('token');
        let name = localStorage.getItem('nickname')
            // console.log(name);
            // console.log(token);
        if (token) {
            let str = `欢迎用户:<b><span style="color:red;margin-right:30px" >${name}</span></b><span style="margin-right:30px">个人中心</span><span style="color:black" onclick="logout()" class="tuichu">退出登录</span>`
            whole.innerHTML = str;
        } else {
            whole.onclick = (eve) => {
                layer.open({
                    title: '退出登录',
                    content: '您确定要退出吗?',
                    btn: ['退出', '再想想'],
                    time: 3000,
                    yes: function() {
                        if (eve.className == 'tuichu') {
                            localStorage.removeItem('token');
                            let str = ` <span><a href="./login.html">登录</a>&nbsp;或&nbsp;<a href="./register.html">注册</a>
                        ANTA会员</span>`
                            whole.innerHTML = str;
                        }
                    }
                });

            }
        }

    }
}
new user;