<template>
	<uni-title type="h2" title="每日新闻" align="center"></uni-title>
	<view class="content">
		<uni-swiper-dot class="uni-swiper-dot-box" :info="info" :current="current" mode="nav" field="content">
			<swiper class="swiper-box" @change="change" autoplay :interval="3000">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view class="swiper-item">
						<image :src="item.url"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-row class="demo-uni-row" :width="nvueWidth">
			<uni-col>
				<view v-if="isPerfect" class="demo-uni-col dark_deep">
					<uni-title  type="h3" title="欢迎xxx车主" align="center"></uni-title>
				</view>
				<view v-if="!isPerfect" @click="perfectInfo" class="demo-uni-col dark_deep">
					<uni-title type="h3" title="点击完善汽车信息" align="center"></uni-title>
				</view>
			</uni-col>
		</uni-row>
		<uni-grid :column="menu.length" :highlight="true">
			<uni-grid-item v-for="(item, index) in menu" :index="index" :key="index">
				
				<uni-icons @click="clickMenu(item)" :type="item.icon" :size="100" color="#777" />
				<view class="grid-item-box" style="background-color: #fff;">
					<text class="menuText">{{item.text}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				isPerfect: false,
				nvueWidth: 730,
				info: [{
						colorClass: 'uni-bg-red',
						url: '/static/news1.png',
						content: '法兰克福车展宝马新闻发布会意外中断'
					},
					{
						colorClass: 'uni-bg-green',
						url: '/static/news2.png',
						content: '零排放的环保型氢能汽车'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '/static/news3.png',
						content: '央视聚焦:长城汽车攻坚"战役" 稳出口'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '/static/news4.png',
						content: 'ces展首试奥迪ai:me'
					}
				],
				menu: [{
						icon: 'person',
						text: '我的汽车',
						method: 'car'
					},
					{
						icon: 'gear',
						text: '维修记录',
						method: 'repair'
					},
					{
						icon: 'refresh',
						text: '保养记录',
						method: 'maintain'
					},
					
				]
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			clickMenu(e) {
				if(this.isPerfect){
					
				}else{
					// 在需要触发警告信息提示的地方调用uni.showToast方法
					uni.showToast({
					  title: '请先完善汽车信息',
					  icon: 'none', // 显示为警告图标
					  duration: 2000 // 持续时间为2秒
					});
				}
			},
			perfectInfo() {
				uni.navigateTo({
				  url: '/pages/carInfo/perfectInfo/perfectInfo' // 文件夹名和页面名
				});
			}
		}
	}
</script>

<style lang="scss">
	.grid-item-box {
			text-align: center;
		}
	.demo-uni-row {
		margin-bottom: 10px;

		// 组件在小程序端display为inline
		// QQ、抖音小程序文档写有 :host，但实测不生效
		// 百度小程序没有 :host
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}	
	.demo-uni-col {
		height: 36px;
		border-radius: 5px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}

	.swiper-box {
		height: 200px;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200px;
		color: #fff;
	}


	.image {
		width: 750rpx;
	}
	@media screen and (min-width: 500px) {
		.uni-swiper-dot-box {
			width: 400px;
			margin: 0 auto;
			margin-top: 8px;
		}

		.image {
			width: 100%;
		}
	}

</style>