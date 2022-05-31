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

 class List {
     constructor() {
             this.getData();
             this.bindEve();
             // 默认页码
             this.currentPage = 1;
             // 使用锁
             this.lock = false;
         }
         // 绑定事件的方法
     bindEve() {
         // 给 ul 绑定点击事件
         // this.addCart 是ul的事件回调方法,故内部this默认指向当前节点
         this.$('.sk_bd ul').addEventListener('click', this.checkLogin.bind(this));
         // 滚动条事件
         window.addEventListener('scroll', this.lazyLoader)
     }

     // 获取数据
     async getData(page = 1) {
             //  console.log(1111);
             //发送ajax请求获取数据
             // await 等待后面的promise解析完成,拿到最后结果
             let { status, data } = await axios.get('http://localhost:8888/goods/list?current=' + page);
             //  console.log(data);
             //  console.log(status, data);
             // 判断请求的状态是否成功
             // status 是ajax 服务器请求成功
             // data.code 接口返回数据正常
             if (status != 200 && data.code != 1) throw new Error('获取数据失败...');
             // 循环渲染数据,追加到页面中
             let html = '';
             data.list.forEach(goods => {
                 // console.log(goods);
                 html += `<li class="sk_goods" data-id="${goods.goods_id}">
         <a href="javascript:void(0)">
             <img src="${goods.img_big_logo}" alt="" class="img">
         </a>
         <h5 class="sk_goods_title">${goods.title}</h5>
         <p class="sk_goods_price">
             <em>¥${goods.current_price}</em>
             <del>￥${goods.price}</del>
         </p>
         <div class="sk_goods_progress">
             已售
             <i>${goods.sale_type}</i>
             <div class="bar">
                 <div class="bar_in"></div>
             </div>
             剩余
             <em>29</em>件
         </div>
         <a href="javascript:void(0)" class="sk_goods_buy">立即抢购</a>
     </li>`;
             });
             // console.log(html);
             // 将拼接好的字符串,追加到ul中
             this.$('.sk_bd ul').innerHTML += html;
             //  //  fenye() 
             //  let node = document.querySelectorAll('.sk_page a');
             //  let currentPage = 1;
             //  //  console.log(node);
             //  node.forEach((li, index) => {
             //      //  console.log(li, index)
             //      li.onclick = function() {
             //          //  console.log(li);
             //          if (!li.className) {
             //              node[index].className = 'current'

             //              node[index - 1].className = ''
             //              node[index + 1].className = ''
             //                  ++this.currentPage

             //          }
             //      }
             //  });



         }
         // 加入购物车
     checkLogin(eve) {
         //  console.log(this);
         // 获取事件源,判断点击的是否为a标签
         //  console.log(eve.target.classList);
         //  console.log(eve.target);
         // 点击图片实现跳转详情页
         if (eve.target.nodeName != 'A' || eve.target.className != 'sk_goods_buy') {
             //  获取商品id
             let goodsId = eve.target.parentNode.parentNode.dataset.id;
             //  let userId = localStorage.getItem('user_id');
             //  console.log(goodsId);
             //  将商品id保存至session
             sessionStorage.setItem('gId', goodsId);
             //  sessionStorage.setItem('userId', userId);
             //  跳转详情页
             location.assign('./detail.html')

         }
         //  console.log(eve.target.parentNode);
         //  判断用户是否登录,如果local中有token,表示登录,没有则表示未登录
         let token = localStorage.getItem('token');
         //  console.log(token);
         // 没有token表示未登录,跳转到登录页面
         if (!token) location.assign('./login.html?ReturnUrl=./list.html')
             // 如果用户已经登录,此时就需要将商品加入购物车
             // 点击加购按钮获取商品id和用户id
         let goodsId = eve.target.parentNode.dataset.id;
         //  console.log(eve.target.parentNode);
         //  console.log(goodsId);
         let userId = localStorage.getItem('user_id');
         //  将商品id保存至session
         localStorage.setItem('gId', goodsId);
         //  console.log(userId);
         this.addCartGoods(goodsId, userId);
         this.gouwuche()
     }
     gouwuche() {
             // console.log(gId, uId);
             // let gouwuche = document.querySelector('.dropDowncart')
             let gId = localStorage.getItem('gId');
             axios.get('http://localhost:8888/goods/item/' + `${gId}`).then(({ data }) => {
                 // console.log(status);
                 //  console.log(data);
                 //  console.log(data.info.goods_id);
                 let html = '';
                 html += `
            <li>
                <a href="" class="pic"><img src="${data.info.img_big_logo}"></a>
                <div class="txt">${data.info.title}</div>
                <div class="num">
                    <h4>¥${data.info.price}</h4>
                </div>`;
                 // 将数据追加到页面
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
         //  fenye() {

     //  }
     addCartGoods(gId, uId) {
             //  console.log(gId, uId);
             /* 给添加购物车接口,发送请求 调用购物车接口,后台要验证是否为登录状态,需要传递token
              */
             const AUTH_TOKEN = localStorage.getItem('token')
             axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
             //     headers['Content-Type']  也是 给 headers 对象中添加属性,语法不支持 Content-Type
             axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

             let param = `id=${uId}&goodsId=${gId}`;
             axios.post('http://localhost:8888/cart/add', param).then(({ data, status }) => {
                 //  console.log(data, status);
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
                     location.assign('./login.html?ReturnUrl=./list.html')
                 } else {
                     layer.open({
                         title: '失败提示框',
                         content: '请您从新加购哦',
                         time: 5000
                     });
                 }


             })

         }
         // 懒加载操作
         // 当前需要的高度===滚动条距离顶部的高度+ 可视区的高度
         // 需要获取新的数据     当前实际内容高度<滚动条距离顶部的高度+ 可视区的高度

     lazyLoader = () => {
             // 需要滚动条高度
             let top = document.documentElement.scrollTop;
             // console.log(top, 't');
             //  可视区高度
             let cliH = document.documentElement.clientHeight;
             // console.log(cliH, 'c');
             //  实际内容高度
             let conH = this.$('.sk_container').offsetHeight;
             // console.log(conH);
             // 如果滚动条高度+可视区的高度> 实际内容高度时,就加载新数据
             if (top + cliH > (conH + 450)) {
                 // 一瞬间就满足条件,会不停的触发数据加载,使用节流和防抖
                 // 如果是锁着的,就结束代码执行
                 if (this.lock) return;
                 this.lock = true;
                 // 指定时间开锁,才能进行下次数据清除
                 setTimeout(() => {
                         this.lock = false;
                     }, 1000)
                     // console.log(1111);
                     //  传递当千页码数
                 this.getData(++this.currentPage)
             }
         }
         // 封装获取节点的方法
     $(ele) {
         let res = document.querySelectorAll(ele);
         // 如果获取到的是,当个节点集合,就返回单个节点,如果是多个节点集合,就返回整个集合.
         return res.length == 1 ? res[0] : res;
     }
 }

 new List;


 //  返回顶部
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