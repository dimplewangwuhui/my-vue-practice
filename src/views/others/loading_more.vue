<template>
    <div class="newsList">
        <div v-for="(items, index) in newsList">
            <div class="date">{{showDay(index)}}</div>
            <div class="list" >
                <ul>
                    <li class="list-item" v-for="item in items">
                        <span class="text">{{item.title}}</span>
                        <img :src="attachImageUrl(item.images[0])" class="image"/>
                    </li>
                </ul>
            </div>
        </div>
        <div class="infinite-scroll" v-show="loading">
            <svg class="loader-circular" viewBox="25 25 50 50">
                <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="rgb(53, 157, 218)" stroke-width="5"></circle>
            </svg>
            <span class="infinite-scroll-text">{{tips}}</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                newsList: [],
                date: [],
                todayDate: '',
                REQUIRE: true,
                loading: false,
                tips: '努力加载中...'
            }
        },
        created () {
            // 获取今日新闻
            axios.get('http://zhihuapi.herokuapp.com/api/4/news/latest')
                .then( (res) => {
                    this.newsList.push(res.data['stories'])
                    this.date.push(res.data['date']);
                    this.todayDate = res.data['date']
                })
        },
        mounted () {
            // 添加滚动事件，检测滚动到页面底部
            window.addEventListener('scroll', this.scrollBottom)
        },
        methods: {
            scrollBottom() {
                // 滚动到页面底部时，请求前一天的文章内容
                if (((window.screen.height + document.body.scrollTop) > (document.body.clientHeight)) && this.REQUIRE) {
                    // 请求的数据未加载完成时，滚动到底部不再请求前一天的数据
                    this.REQUIRE = false;
                    this.loading = true;
                    this.tips = '努力加载中...';
                    axios.get('http://zhihuapi.herokuapp.com/api/4/news/before/' + this.todayDate).then((res) => {
                        this.newsList.push(res.data['stories']);
                        this.date.push(res.data['date']);
                        this.todayDate = res.data['date'];
                        // 请求的数据加载完成后，再次滚动到底部时，允许请求前一天数据
                        this.$nextTick(() => {
                            this.REQUIRE = true;
                            this.loading = false;
                        });
                    }).catch(() => {
                        this.tips = '连接失败，请稍后重试';
                        // 请求失败时，将 REQUIRE 置为 true，滚动到底部时，再次请求
                        this.REQUIRE = true;
                    });
                }
            },
            showDay (index) {
                if (index === 0) {
                    return '今日新闻'
                } else {
                    return this.getToday(index)
                }
            },
            getToday (index) {
                let year = this.date[index].slice(0, 4);
                let month = this.date[index].slice(4, 6);
                let day = this.date[index].slice(6);
                let today = new Date(year + '/' + month + '/' + day);
                let week = ['日', '一', '二', '三', '四', '五', '六'];
                return month + '月' + day + '日' + ' 星期' + week[today.getDay()];
            },
            attachImageUrl (srcUrl) {
                if (srcUrl !== undefined) {
                    return 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + srcUrl.slice(0, 4) + srcUrl.slice(5);
                }
            }
        }
    }
</script>
