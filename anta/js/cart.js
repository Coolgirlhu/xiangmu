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


// 购物车操作
class Cart {
    constructor() {
            this.getCartGoods(); //执行异步请求
            // 因为都在cart-list  下   所以给 .cart-list 绑定点击事件,实现委托
            this.$('.cart-list').addEventListener('click', this.dispatch);
            // 给全选按钮绑定点击事件
            this.$('.cart-th input').addEventListener('click', this.checkAll);
            this.gouwuche()
        }
        // 事件委托函数
    dispatch = (eve) => {
            // console.log(this);
            // 事件源的获取
            let target = eve.target;
            // console.log(target);
            // 判断当前点击的是删除的a标签
            if (target.nodeName == 'A' && target.classList.contains('del1')) this.delGoodsData(target)
                // 判断当前点击的是否为 + 操作
            if (target.nodeName == 'A' && target.classList.contains('plus')) this.plusGoodsNum(target);
            // 判断当前点击的是否为 -操作
            if (target.nodeName == 'A' && target.classList.contains('mins')) this.minsGoodsNum(target);
        }
        //   数量增加+方法
    plusGoodsNum = (tar) => {
            // console.log(tar);
            let ul = tar.parentNode.parentNode.parentNode;
            // console.log(ul);
            // 获取数量,单价和小计
            let num = ul.querySelector('.itxt');
            let sum = ul.querySelector('.sum');
            let price = ul.querySelector('.price').innerHTML - 0;
            // console.log(num, sum, price);
            // 获取数量value值
            let numVal = num.value;
            // 对数量进行加1 操作
            numVal++;
            // console.log(numVal);
            // 更新input中的数量
            // 给 服务器发送数据,增加数量  必须携token 
            const AUTH_TOKEN = localStorage.getItem('token')
            axios.defaults.headers.common['authorization'] = AUTH_TOKEN;
            // 设置请求头
            axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            let uId = localStorage.getItem('user_id');
            let gId = ul.dataset.id;
            let param = `id=${uId}&goodsId=${gId}&number=${numVal}`
            axios.post('http://localhost:8888/cart/number', param).then(res => {
                // console.log(res);
                let { status, data } = res;
                if (status == 200 && data.code == 1) {
                    // 将更新之后的数量设置回去
                    num.value = numVal;
                    sum.innerHTML = parseInt(numVal * price * 100) / 100;
                    // 调用统计数量和价格的方法
                    this.countSumPrice();
                }

            });
        }
        // 数量减操作
    minsGoodsNum = (tar) => {
            // console.log(tar);
            let ul = tar.parentNode.parentNode.parentNode;
            console.log(ul);
            // 获取数量,单价和小计
            let num = ul.querySelector('.itxt');
            let sum = ul.querySelector('.sum');
            let price = ul.querySelector('.price').innerHTML - 0;
            // console.log(num, sum, price);

            // 获取数量
            let numVal = num.value;
            // 对数量进行加1 操作
            numVal--;
            // console.log(num);
            // 更新input中的数量

            // 给 服务器发送数据,增加数量
            const AUTH_TOKEN = localStorage.getItem('token')
            axios.defaults.headers.common['authorization'] = AUTH_TOKEN;
            axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            let uId = localStorage.getItem('user_id');
            let gId = ul.dataset.id;
            let param = `id=${uId}&goodsId=${gId}&number=${numVal}`
            axios.post('http://localhost:8888/cart/number', param).then(res => {
                // console.log(res);
                let { status, data } = res;
                if (status == 200 && data.code == 1) {
                    // 将更新之后的数量设置回去
                    num.value = numVal;
                    sum.innerHTML = parseInt(numVal * price * 100) / 100;
                    // 调用统计数量和价格的方法
                    this.countSumPrice();
                }

            });
        }
        // 全选
    checkAll = (eve) => {
        // console.log(this);
        // 点击全选的时候,应该让单个商品的选中框状态,跟随全选
        // console.log(eve.target);
        let allStatus = eve.target.checked;
        // console.log(allStatus);
        this.oneCheckGoods(allStatus);

        // 调用统计数量和价格的方法
        this.countSumPrice();
    }

    // 让单个商品跟随全选的状态
    oneCheckGoods(status) {

            // console.log(this.$('.good-checkbox'));
            this.$('.good-checkbox').forEach(input => {
                input.checked = status;
            })

        }
        //  实现单选
    oneGoodsCheckBox() {
            // console.log(this.$('.good-checkbox'));
            // 给每个单选按钮绑定点击事件
            this.$('.good-checkbox').forEach(input => {
                /// 保存this的指向
                let self = this;
                input.onclick = function() {
                    // 获取当前的点击状态
                    // console.log(this.checked);
                    // 判断当前商品的input点击的是取消,则此时取消全选
                    if (!this.checked) {
                        self.$('.cart-th input').checked = false;
                    }
                    // 点击选中时,则判断页面中是否有其它的未选中,如果都选中,则全选选中
                    if (this.checked) {
                        let status = self.getOneGoodsStatus();
                        // console.log(status);
                        self.$('.cart-th input').checked = status;
                    }

                    // 统计价格和数据
                    self.countSumPrice();
                }
            })
        }
        // 实现单个商品选中状态
    getOneGoodsStatus() {
            // console.log(this.$('.good-checkbox'));

            // 寻找是否有没选中的,如果页面都选中res为空数组
            let res = Array.from(this.$('.good-checkbox')).find(input => {
                // console.log(input.checked);
                return !input.checked
            })

            // console.log(res);
            // 如果res有值,则页面中有没被选中的
            // 页面中都被选中,则返回true
            return !res;
        }
        //  统计数量和价格
    countSumPrice() {
        let sum = 0;
        let num = 0;
        // 只统计选中商品的
        this.$('.good-checkbox').forEach(input => {
            // console.log(input);
            if (input.checked) {
                // 通过input:checkbox 找到ul
                let ul = input.parentNode.parentNode;
                // console.log(ul);

                // 获取数量和小计  字符串转化数字类型
                let tmpNum = ul.querySelector('.itxt').value - 0;
                let tmpSum = ul.querySelector('.sum').innerHTML - 0;
                // console.log(tmpNum, tmpSum);
                sum += tmpSum;
                num += tmpNum;
            }


        });
        // 保留小数点后两位
        sum = parseInt(sum * 100) / 100
            // console.log(sum, num);

        // 将数量和价格放到页面中
        this.$('.sumprice-top strong').innerHTML = num;
        this.$('.summoney span').innerHTML = sum;

    }

    // 删除购物车中商品,需要 用户id,商品id
    delGoodsData(tar) {
            // console.log(tar);
            // console.log(id);
            // 弹出框,询问,是否确定删除
            layer.confirm('是否删除商品', {
                title: '删除提示框'
            }, function() { // 确认的回调函数
                // console.log(111);
                // 给后台发送数据,删除记录
                // 找到ul上对应的商品的id  每一条对应一个ul
                let ul = tar.parentNode.parentNode.parentNode
                let gId = ul.dataset.id;
                // 用户id
                let uId = localStorage.getItem('user_id');
                // console.log(gId, uId);
                // 必须携待token,后台需要验证
                const AUTH_TOKEN = localStorage.getItem('token')
                axios.defaults.headers.common['authorization'] = AUTH_TOKEN;
                axios.get('http://localhost:8888/cart/remove', {
                    params: {
                        id: uId,
                        goodsId: gId
                    }
                }).then(res => {
                    // console.log(res);
                    // 直接刷新页面
                    // location.reload();

                    //  无刷新删除
                    // 关闭弹出框,且删除对应的ul
                    layer.closeAll();
                    // 自己删除自己
                    ul.remove();

                })
            })


        }
        // 获取商品
    async getCartGoods() {
        // 必须携待token,后台需要验证  获取token
        const AUTH_TOKEN = localStorage.getItem('token')
        axios.defaults.headers.common['authorization'] = AUTH_TOKEN;
        // 发送Ajax 请求
        let { data, status } = await axios.get('http://localhost:8888/cart/list', {
                params: {
                    id: localStorage.getItem('user_id')
                }
            })
            // console.log(data);
            // 判断ajax的请求状态
        if (status == 200 && data.code == 1) {
            // cart 选的所有商品
            // console.log(data.cart);
            let html = '';
            data.cart.forEach(goods => {
                // console.log(goods);
                html += `<ul class="goods-list yui3-g" data-id="${goods.goods_id}">
              <li class="yui3-u-3-8 pr">
                  <input type="checkbox" class="good-checkbox">
                  <div class="good-item">
                      <div class="item-img">
                          <img src="${goods.img_small_logo}">
                      </div>
                      <div class="item-msg">${goods.title}</div>
                  </div>
              </li>
              <li class="yui3-u-1-8">

              </li>
              <li class="yui3-u-1-8">
                  <span class="price">${goods.current_price}</span>
              </li>
              <li class="yui3-u-1-8">
                  <div class="clearfix">
                      <a href="javascript:;" class="increment mins">-</a>
                      <input autocomplete="off" type="text" value="${goods.cart_number}" minnum="1" class="itxt">
                      <a href="javascript:;" class="increment plus">+</a>
                  </div>
                  <div class="youhuo">有货</div>
              </li>
              <li class="yui3-u-1-8">
                  <span class="sum">${goods.current_price * goods.cart_number}</span >
              </li >
                <li class="yui3-u-1-8">
                  <div class="del1">
                    <a href="javascript:;" class="del1">删除</a>
                  </div>
                  <div>移到我的关注</div>
                </li>
          </ul >`;
            });
            // 将拼接好的字符串追加到页面
            this.$('.cart-list').innerHTML += html;
            //单个商品的追加是异步实现的,所以 进行单选按钮事件绑定
            this.oneGoodsCheckBox();
        }

        // 登录过期的处理
        if (status == 200 && data.code == 401) {
            // 如果登录过期,则重新登录
            // 清除 local中存的token和userid
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
            // 跳转到登录页面
            location.assign('./login.html?ReturnUrl=./cart.html')
        }

    }
    async gouwuche() {
        // console.log(gId, uId);
        // let gouwuche = document.querySelector('.dropDowncart')
        let gId = localStorage.getItem('user_id');

        const AUTH_TOKEN = localStorage.getItem('token')
        axios.defaults.headers.common['authorization'] = AUTH_TOKEN;
        let { data, status } = await axios.get('http://localhost:8888/cart/list', {
                params: {
                    id: localStorage.getItem('user_id')
                }
            })
            // console.log(status);
        console.log(data.cart);
        console.log(data);
        let html = '';
        data.cart.forEach(goods => {
            console.log(goods);
            html = `
           <li>
               <a href="" class="pic"><img src="${goods.img_small_logo}"></a>
               <div class="txt">${goods.title}</div>
               <div class="num">
                   <h4>¥${goods.price}</h4>
               </div>
                 </li>`;
            //将数据追加到页
            console.log(this.$('.dropDowncart .list'));
            this.$('.dropDowncart .list').innerHTML += html;
            this.$('.dropDowncart .carthome').style.display = 'none';
            this.$('.dropDowncart .cartword').style.display = 'none';
            this.$('.dropDowncart .jixugouwu').style.display = 'block';
            this.$('.dropDowncart .jiesuan').style.display = 'block';

            //    获取购物车图标的节点
            this.$('.dropDowncart').onmouseover = () => {
                this.$('.dropContentcart').style.display = 'block'
            }

            this.$('.dropContentcart').onmouseout = () => {
                this.$('.dropContentcart').style.display = 'none'
            }

        })
    }
    $(ele) {
        let res = document.querySelectorAll(ele);
        // 如果获取到的是,当个节点集合,就返回单个节点,如果是多个节点集合,就返回整个集合.
        return res.length == 1 ? res[0] : res;
    }
}
new Cart;