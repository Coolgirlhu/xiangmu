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

// 
// 点击 选择鞋码 弹出 选择框
// 获取节点
// $('.chancechima,.chimasanjiao').click(function() {

//     $('.chancesize').show()

// })
// $('.chancesize div:nth-child(2)').click(function() {
//     $('.chancesize').hide()
// })

// // 鞋码列表 滑过变色 点击之后 列表消失 并且 数字到下面 

// $('.chancesize ul li').hover(function() {
//     $(this).css('background-color', 'pink').siblings().css('background-color', 'white')
// }, function() {
//     $('.chancesize ul li').css('background-color', 'white')
// })
// $('.chancesize ul li').click(function() {
//     $(this).css({
//         'background-color': 'black',
//         'color': 'black'
//     }).siblings().css({
//         'background-color': 'white',
//         'color': 'black'
//     })
//     $('.chancesize').hide()
//     a = $(this).text()
//     $('.chancechima').text(a)

// })

// // 数量 和三角 滑过以及点击 以及出现的列表的滑过以点击事件 和鞋码一样
// $('.chancenum,.shuliangsanjiao').click(function() {
//  $('.shuliangchance').show()

// })
// $('.shuliangchance ul li').hover(function() {
//     $(this).css('background-color', 'pink').siblings().css('background-color', 'white')
// }, function() {
//     $('.chancesize ul li').css('background-color', 'white')
// })
// $('.shuliangchance ul li').click(function() {
//     //     $(this).css({
//     //         'background-color':'black',
//     //         'color':'white'
//     //     }).siblings().css({'background-color':'white',
//     // 'color':'black'
//     // })
//     $('.shuliangchance').hide()
//     b = $(this).text() - 0
//     $('.chancenum').text(b)

// })


// // 点击优惠券之后 显示 对不起优惠券已经领完了

// document.querySelector('.text').onclick = function() {

//     layer.msg('对不起，优惠券已经领光', {
//         icon: 2,
//         time: 1500
//     })
// }


// 绝对定位回到顶部 
let timer = null
    // 获取节点
let gettop = document.querySelector('.fixed .gettop')
    // console.log(gettop);
let time = ''
gettop.onclick = function() {
    // 距离可视文档的高度
    let top = document.documentElement.scrollTop
        // console.log(top);
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



// 加入购物车
class Detail {
    constructor() {
            this.bindEve();
            // this.getData();
        }
        // 绑定事件的方法
    bindEve() {
        let gId = sessionStorage.getItem('gId');
        axios.get('http://localhost:8888/goods/item/' + `${gId}`).then(({ data }) => {
            // console.log(status);
            // console.log(data);
            // console.log(data.info.goods_id);
            let html = '';
            html = `
            <img src="${data.info.img_big_logo}" alt="">
            <div class="mask"></div>
            <div class="big">
                <img src="${data.info.img_big_logo}" alt="">
            </div>
            <div class="detailsimg ">
            <img src="${data.info.img_big_logo} " alt=" ">
        </div>
        <div class="detailsimg ">
            <img src="${data.info.img_big_logo} " alt=" ">
        </div>
        <div class="detailsimg ">
            <img src="${data.info.img_big_logo} " alt=" ">
        </div>
        <div class="detailsimg ">
            <img src="${data.info.img_big_logo} " alt=" ">
        </div>
            `

            this.$('.middle').innerHTML = html;
            // 放大镜实现
            // 获取节点
            let middleBox = document.querySelector('.bigenlarge  .middle')
                // console.log(middleBox);
            let maskObj = document.querySelector('.mask');
            // console.log(maskObj);
            let bigObj = document.querySelector('.big');
            // console.log(bigObj);
            let bigImg = document.querySelector('.big img');
            // console.log(bigImg);
            // 2 给小图绑定鼠标移入和移出事件
            middleBox.onmouseenter = function() {
                    // 2-1 显示小黄块和大图
                    maskObj.style.display = 'block';
                    bigObj.style.display = 'block';
                }
                // 3 移走则隐藏大图和小黄块
            middleBox.onmouseleave = function() {
                    // 2-1 显示小黄块和大图
                    maskObj.style.display = 'none';
                    bigObj.style.display = 'none';
                }
                // 4 给小图绑定鼠标移动事件
            middleBox.onmousemove = function(eve) {
                // 计算小黄块能够移动的最大left和top
                // console.log(smallObj.offsetHeight, maskObj.offsetHeight);
                let maxLeft = middleBox.offsetWidth - maskObj.offsetWidth;
                let maxTop = middleBox.offsetHeight - maskObj.offsetHeight;

                // 4-1 获取鼠标的相对于可视区坐标
                // let cx = eve.clientX;
                // let cy = eve.clientY;
                let cx = eve.pageX;
                let cy = eve.pageY;
                //4-2 获取div#box的坐标
                let boxLeft = middleBox.offsetLeft;
                let boxTop = middleBox.offsetTop;

                let tmpx = cx - boxLeft - maskObj.offsetWidth / 2;
                let tmpy = cy - boxTop - maskObj.offsetHeight / 2;
                // 4-3 判断上边界和左边界值不能小于0
                if (tmpx < 0) tmpx = 0;
                if (tmpy < 0) tmpy = 0
                    // 判断是否从右边界和下边界超出
                    // console.log(tmpx, maxLeft);
                    // console.log(tmpy, maxTop);

                if (tmpx > maxLeft) tmpx = maxLeft
                if (tmpy > maxTop) tmpy = maxTop

                maskObj.style.left = tmpx + 'px';
                maskObj.style.top = tmpy + 'px';

                // 4-4 计算大图能够移动的最大位置
                let bigImgMaxLeft = bigImg.offsetWidth - bigObj.offsetWidth;
                let bigImgMaxTop = bigImg.offsetHeight - bigObj.offsetHeight;

                // 小黄块的实时位置/小黄块移动的最大位置 == ===  大图实时位置/大图能够移动的最大位置
                let tmpBigTop = tmpy / maxTop * bigImgMaxTop;
                let tmpBigLeft = tmpx / maxLeft * bigImgMaxLeft;

                // 4-5 将计算的大图实时位置进行设置
                bigImg.style.left = -tmpBigLeft + 'px';
                bigImg.style.top = -tmpBigTop + 'px';
            }
        })

        // 给 夹肉购物车按钮绑定点击事件
        this.$('.addcar').addEventListener('click', this.jiagou.bind(this));
    }
    jiagou(eve) {
        let gId = sessionStorage.getItem('gId');
        axios.get('http://localhost:8888/goods/item/' + `${gId}`).then(({ data }) => {
            // console.log(status);
            // console.log(data);
            // console.log(data.info.goods_id);
            let html = '';
            html = `
            <img src="${data.info.img_big_logo}" alt="">
            <div class="mask"></div>
            <div class="big">
                <img src="${data.info.img_big_logo}" alt="">
            </div>
            `

            this.$('.middle').innerHTML = html;
            // 必须携带token  进行验证
            let token = localStorage.getItem('token');
            // console.log(token);
            // 没有token表示未登录,跳转到登录页面
            if (!token) location.assign('./login.html?ReturnUrl=./detail.html')
                // console.log(eve.target);
                // let goodsId = eve.target.dataset.id;
                // console.log(goodsId);
            let userId = localStorage.getItem('user_id');
            // console.log(userId);
            // console.log(location.href);
            // let spId = location.href.split('=')[1]
            // console.log(spId);
            // this.addCartGoods(spId, userId);
            this.addCartGoods(gId, userId);
            this.gouwuche();
        })
    }
    gouwuche() {
        // console.log(gId, uId);
        // let gouwuche = document.querySelector('.dropDowncart')
        let gId = sessionStorage.getItem('gId');
        axios.get('http://localhost:8888/goods/item/' + `${gId}`).then(({ data }) => {
            // console.log(status);
            console.log(data);
            console.log(data.info.goods_id);
            let html = '';
            html = `
                <li>
                    <a href="" class="pic"><img src="${data.info.img_big_logo}"></a>
                    <div class="txt">${data.info.title}</div>
                    <div class="num">
                        <h4>¥${data.info.price}</h4>
                    </div>`;
            this.$('.dropDowncart .list').innerHTML = html;
            this.$('.dropDowncart .carthome').style.display = 'none';
            this.$('.dropDowncart .cartword').style.display = 'none';
            this.$('.dropDowncart .jixugouwu').style.display = 'block';
            this.$('.dropDowncart .jiesuan').style.display = 'block';
            // 设置鼠标悬停事件
            this.$('.dropDowncart').onmouseover = () => {
                this.$('.dropContentcart').style.display = 'block'
            }

            this.$('.dropContentcart').onmouseout = () => {
                this.$('.dropContentcart').style.display = 'none'
            }
        })
    }


    // 加入购物车
    addCartGoods(gId, uId) {
            console.log(gId, uId);
            /*
                给添加购物车接口,发送请求 调用购物车接口,后台要验证是否为登录状态,需要传递token
               */
            const AUTH_TOKEN = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            //     headers['Content-Type']  也是 给 headers 对象中添加属性,语法不支持 Content-Type
            axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

            let param = `id=${uId}&goodsId=${gId}`;
            axios.post('http://localhost:8888/cart/add', param).then(({ data, status }) => {
                // console.log(data, status);
                // 判断 添加购物车是否成功
                if (status == 200 && data.code == 1) {
                    layer.open({
                        title: '商品添加成功',
                        content: '前往购物车吗?',
                        btn: ['leave', 'go'],
                        btn2: function(index, layero) {
                            // console.log('购物车');
                            location.assign('./cart.html')

                        }
                    });
                } else if (status == 200 && data.code == 401) { // 如果登录过期,则重新登录
                    // 清除 local中存的token和userid
                    localStorage.removeItem('token');
                    localStorage.removeItem('user_id');
                    // 跳转到登录页面
                    location.assign('./login.html?ReturnUrl=./detail.html')
                } else {
                    layer.open({
                        title: '失败提示a框',
                        content: '请您从新加购哦',
                        time: 5000
                    });
                }


            })
        }
        // 封装方法
    $(ele) {
        let res = document.querySelectorAll(ele);
        // 如果获取到的是,当个节点集合,就返回单个节点,如果是多个节点集合,就返回整个集合.
        return res.length == 1 ? res[0] : res;
    }
}
new Detail