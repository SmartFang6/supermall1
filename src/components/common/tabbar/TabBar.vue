<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	
</script>

<style>
	#tabbar{
		padding-top: 5px;
		box-sizing: border-box;
	display: flex;
	background-color: #f6f6f6;
	position: fixed;
	bottom: -2px;
	left: 0;
	right: 0;
	box-shadow: 0px -2px 1px rgba(100,100,100,.1);
}

</style>