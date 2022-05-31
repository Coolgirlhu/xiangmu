// 轮播图 的实现  
// 1.获取节点对象
let ullisObj = document.querySelectorAll('.lbtul li')
let ollisObj = document.querySelectorAll('.lbtol li')
let leftbtn = document.querySelector('.leftbtn')
let rightbtn = document.querySelector('.rightbtn')
    // console.log(ullisObj, ollisObj);
    // console.log(leftbtn, rightbtn);
    // 隐藏的图片索引
let lastIndex = 0;
// 显示出来的图片索引
let index = 0;
// 2.给Ol所有li绑定点击事件
ollisObj.forEach((li, key) => {
        // console.log(li);
        // console.log(key);
        li.onclick = function() {
            // 设置要隐藏和显示的索引
            lastIndex = index;
            index = key;
            change()
        }
    })
    // 实现右边箭头的切换  进入下一张
rightbtn.onclick = function() {
        lastIndex = index;
        index++;
        // 判断索引是否超过最大值
        if (index > ullisObj.length - 1) {
            index = 0;
        }
        change();
    }
    // 实现左边箭头切换  返回上一张
leftbtn.onclick = function() {
        lastIndex = index;
        index--;
        //如果下标小于0  则直接切换到最大索引图片
        if (index < 0) {
            index = ullisObj.length - 1;
        }
        change();
    }
    // 实现自动播放
let times = '';

function autoPlay() {
    // 设置计时器
    times = setInterval(function() {
        // 直接就是下一张
        rightbtn.onclick();
    }, 3000)
}
autoPlay();
// 鼠标移入则清除定时器
leftbtn.parentNode.onmouseover = function() {
        clearInterval(times)
    }
    // 鼠标移出则继续开始
leftbtn.parentNode.onmouseout = function() {
    autoPlay();
}

// 设置图片状态
function change() {
    // 设置上一张图片隐藏
    ullisObj[lastIndex].className = '';
    ollisObj[lastIndex].className = '';
    // 设置当前操作的图片显示
    ullisObj[index].className = 'ac';
    ollisObj[index].className = 'ac';
}



// 绝对定位回到顶部 
let timer = null
    // 获取节点
let gettop = document.querySelector('.fixed .gettop')
    // console.log(gettop);
let time = ''
gettop.onclick = function() {
        // 距离可视文档的高度
        let top = document.documentElement.scrollTop
        console.log(top);
        // 设置计时器  滚到到一定位置返回顶部
        time = setInterval(function() {
            // 每次减少50  
            top -= 50;
            // 判断可移动的最小移动距离  
            if (top <= 0) {
                //当top 等于0  时  则清除计时
                top = 0
                clearInterval(time)
            }
            // 给top值设置给文档
            document.documentElement.scrollTop = top
        }, 10)
    }
    // 给导航栏li设置鼠标滑过西安市二级菜单
    // 获取节点
let navliObj = document.querySelectorAll('.nov .clearfix li')
    // console.log(caidan);
    // console.log(navliObi);
navliObj.forEach((li, key) => {
        // console.log(li, key);
        if (key == 1 || key == 2 || key == 3) {
            li.onmouseover = function() {
                $('.caidan').stop().slideDown()
                    // function() {
                    //     $('.caidan').stop().slideUp()
                    // }
            }
        } else {
            li.onmouseout = function() {
                $('.caidan').stop().slideUp()
            }
        }
    })
    // 划过导航栏li 显示二级下来菜单  内容
let arr1 = [
        '所有鞋类', '运动鞋', '跑鞋', '篮球鞋', '休闲鞋', '板鞋', '帆布鞋', '拖鞋.凉鞋', '棉鞋', '户外综训鞋'
    ]
    // console.log(arr1);
    // 获取节点 
let caidanc = document.querySelector('.caidanc')
let str = ''
    // 通过遍历  遍历出每一个li
arr1.forEach(function(i) {
        str += ` <a href="./list.html" target="_blank">  <li>${i}</li></a>`
    })
    // 将内容添加页面中去
caidanc.children[0].innerHTML = str
    // console.log(str);
let arr2 = [
    '所有服装', '套头卫衣', '针织外套', '梭织外套', '针织长裤', '梭织长裤', '羽绒服/马甲', '针织运动套装'
]
let str2 = ''

arr2.forEach(function(i) {

    str2 += ` <a href="">  <li>${i}</li></a>`
})
caidanc.children[1].innerHTML = str2

let arr3 = ['',
    '短袖T恤', '运动短裤', '五分裤', '七分裤', 'polo衫', '棉服', '比赛服', '运动背心', '户外两件套'
]
let str3 = ''

arr3.forEach(function(i) {

    str3 += ` <a href="">  <li>${i}</li></a>`
})
caidanc.children[2].innerHTML = str3

let arr4 = [
    '所有配件', '包类', '运动内裤', '运动袜子', '帽子', '球类',
]
let str4 = ''

arr4.forEach(function(i) {

    str4 += ` <a href="">  <li>${i}</li></a>`
})
caidanc.children[3].innerHTML = str4

let arr5 = [
    '运动项目', '跑步', '篮球', '足球', '综训', '户外', '生活', '健身'
]
var str5 = ''

arr5.forEach(function(i) {

    str5 += ` <a href="">  <li>${i}</li></a>`
})
caidanc.children[4].innerHTML = str5


window.onload = function() {
    // 获取查看信息的用户id 和秘钥
    let id = localStorage.getItem('user_id')
    let token = localStorage.getItem('token')
    console.log(id);
    // 设置请求头  秘钥
    const AUTH_TOKEN = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // 发送服务器请求 查看用户信息
    axios.get("http://localhost:8888/users/info/" + `${id}`).then(res => {
        console.log(res);
        console.log(res.data.code);
        if (res.data.code == 1) {
            // 获取id名字
            let nickname = res.data.info.nickname;
            console.log(nickname);
            // 将名称追加到页面
            let str = `欢迎用户:<b><span style="color:red;margin-right:30px" >${nickname}</span></b><span style="margin-right:30px" onclick="location.href='userinfo.html'">个人中心</span><span style="color:black" onclick="logout()">退出登录</span>`
            $('.login').html(str)
        }
    })

}

function logout() {
    // 弹出询问框确定要退出
    layer.open({
        title: '退出登录',
        content: '您确定要退出吗?',
        btn: ['退出', '再想想'],
        time: 3000,
        yes: function(index, layero) {
            var str = `<span><a href="./login.html">登录</a>&nbsp;或&nbsp;<a href="./register.html">注册</a>
                        ANTA会员</span>`
            $('.login').html(str)
            localStorage.removeItem('id')
            localStorage.removeItem('token')
        }
    });
}