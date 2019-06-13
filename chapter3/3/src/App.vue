<script type="text/javascript">
	export default {
		data() {
			return {
				title: '这个一个大标题',
				htmlStr: '<p>2341234123</p>'
			}
		},
		created() {
			console.log('this is created');
		}
	};
</script>

<template>
	<main>
		<h1>{{title}}</h1>
		<div v-html="htmlStr"></div>
	</main>
</template>

<style scoped lang="stylus">
	main
		h1
			font-size 30px
			color red
		p
			font-size 50px
			color blue
</style>

<style lang="stylus">
	h2
		font-size 20px
		color blue
</style>