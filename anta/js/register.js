class Register {
    constructor() {
        this.bindEve();
    }
    bindEve() {
            // 给用户注册绑定点击事件
            // this.$('.zhuce .zctop .shoujizhuce').addEventListener('click', this.yonghu)
            //     // 给手机注册绑定点击事件
            // this.$('.zhuce .zctop .shoujizhuce').addEventListener('click', this.shouji)
            // 给注册按钮绑定点击事件
            this.$('.zhuce .formone .queren').addEventListener('click', this.iszhuce)
                // this.$('.zhuce .formtwo .queren').addEventListener('click', this.iszhuce1)
        }
        // yonghu = () => {
        //     this.$('.zhuce .formtwo').style.display = 'none'
        //         // this.$('.zhuce .formone').style.display = 'block'
        // }
        // shouji = () => {
        //     this.$('.zhuce .formone').style.display = 'none'
        //     this.$('.zhuce .formtwo').style.display = 'block'
        //     this.$('.zhuce .formone').style.backgroundColor = '#FBFBFB;'
        //     this.$('.zhuce .zctop .shoujizhuce').style.backgroundColor = 'pink'
        //     this.$('.zhuce .zctop .shoujizhuce').style.color = 'white'
        // }

    iszhuce = () => {
            // console.log(this);
            // 获取每一个子节点
            let form = document.querySelector('.formone')
                // console.log(form);
                // let tr1 = form.querySelector('table tbody').firstElementChild;
                // console.log(tr1);
                // let tr2 = tr1.nextElementSibling;
                // console.log(tr2);
                // let tr3 = tr2.nextElementSibling;
                // console.log(tr3);
                // let tr4 = tr3.nextElementSibling;
                // console.log(tr4);
                // 获取节点value值
            let username = form.username.value.trim();
            // console.log(username);
            let password = form.password.value.trim();
            // console.log(password);
            let rpassword = form.rpassword.value.trim();
            // console.log(rpassword);
            let nickname = form.nickname.value.trim();
            // console.log(nickname);
            // 非空验证
            if (!username || !password || !rpassword || !nickname) throw new Error('用户名或密码不能为空');
            if (rpassword !== password) {
                layer.msg('两次密码不一致', {
                    icon: 2,
                    // 2会显示错误的图标
                    time: 1000
                        // time是显示的时间
                })
                return false
            }
            let e = $('[type="checkbox"]')[0].checked
            if (e === false) {
                layer.msg('请您先阅读隐私政策', {
                    icon: 2,
                    // 2会显示错误的图标
                    time: 1000
                        // time是显示的时间
                })
                return false
            }

            // console.log(username, password);
            // 发送ajax请求,实现
            // 当变量名和属性名一致时,直接写变量名
            // axios 默认以json的形式请求和编码参数
            // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
            // 成功形式key=val&key=val
            let param = `username=${username}&password=${password}&rpassword=${rpassword}&nickname=${nickname}`;
            axios.post(' http://localhost:8888/users/register', param, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => {
                console.log(res);
                // 判断登录状态,
                // 将用户信息进行保存
                if (res.status == 200 && res.data.code == 1) {
                    location.assign('./login.html')
                }

            })


        }
        // iszhuce1 = () => {
        //         // console.log(this);
        //         // 获取每一个子节点
        //         let form = document.querySelector('.formone')
        //             // console.log(form);
        //             // let tr1 = form.querySelector('table tbody').firstElementChild;
        //             // console.log(tr1);
        //             // let tr2 = tr1.nextElementSibling;
        //             // console.log(tr2);
        //             // let tr3 = tr2.nextElementSibling;
        //             // console.log(tr3);
        //             // let tr4 = tr3.nextElementSibling;
        //             // console.log(tr4);
        //             // 获取节点value值
        //         let username = form.username.value.trim();
        //         // console.log(username);
        //         let password = form.password.value.trim();
        //         // console.log(password);
        //         let rpassword = form.rpassword.value.trim();
        //         // console.log(rpassword);
        //         let nickname = form.nickname.value.trim();
        //         // console.log(nickname);
        //         // 非空验证
        //         if (!username || !password || !rpassword || !nickname) throw new Error('用户名或密码不能为空');
        //         if (rpassword !== password) {
        //             layer.msg('两次密码不一致', {
        //                 icon: 2,
        //                 // 2会显示错误的图标
        //                 time: 1000
        //                     // time是显示的时间
        //             })
        //             return false
        //         }
        //         let e = $('[type="checkbox"]')[0].checked
        //         if (e === false) {
        //             layer.msg('请您先阅读隐私政策', {
        //                 icon: 2,
        //                 // 2会显示错误的图标
        //                 time: 1000
        //                     // time是显示的时间
        //             })
        //             return false
        //         }

    //         // console.log(username, password);
    //         // 发送ajax请求,实现
    //         // 当变量名和属性名一致时,直接写变量名
    //         // axios 默认以json的形式请求和编码参数
    //         // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    //         // 成功形式key=val&key=val
    //         let param = `username=${username}&password=${password}&rpassword=${rpassword}&nickname=${nickname}`;
    //         axios.post(' http://localhost:8888/users/register', param, {
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             }
    //         }).then(res => {
    //             console.log(res);
    //             // 判断登录状态,
    //             // 将用户信息进行保存
    //             if (res.status == 200 && res.data.code == 1) {
    //                 location.assign('./login.html')
    //             }

    //         })


    //     }
    // 封装函数
    $(ele) {
        let res = document.querySelectorAll(ele);
        // 如果获取到的是,当个节点集合,就返回单个节点,如果是多个节点集合,就返回整个集合.
        return res.length == 1 ? res[0] : res;
    }
}
new Register

// 点击进行切换注册方式
// var zcfangshi = document.querySelector('.zctop')
//     // console.log(zcfangshi);
// var form = document.querySelectorAll('form')
//     // console.log(form);

// for (let i = 0; i < zcfangshi.children.length; i++) {
//     console.log(zcfangshi.children[i]);
//     zcfangshi.children[i].onclick = function() {
//         if (i = 0) {
//             form[i + 1].style.display = 'none'
//             form[i].style.display = 'block'
//         }
//         if (i = 1) {
//             form[i - 1].style.display = 'none'
//             form[i].style.display = 'block'
//         }
//         // console.log(111);
//     }
// }