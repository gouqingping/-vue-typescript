<!--
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-03-23 16:55:52
 * @LastEditors  : Pat
 * @LastEditTime : 2020-03-24 14:45:32
 -->
<template>
	<div class="hello">
		<h1>hello {{ message }}</h1>
		{{amb.moduleName}}
	</div>
</template>

<script lang="ts">
const amb = require("@/init/amb");
import { login } from "../api/index";
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
@Component
export default class HelloWorld extends Vue {
	amb = amb;
	@Prop() private msg!: string;
	@Getter("permission_routes") getterRoutes: any;

	message = "";
	constructor() {
		super();
		this.message = this.msg;
	}

	setConfig(boo: string | boolean) {
		return boo === true;
	}

	//method
	public changeMessage(): void {
		this.message = "test";
	}

	public getMsg(): string {
		return this.msg;
	}

	private created(): void {
		login({
			id: 1
		}).then(res => {
			console.log(res);
		});
		this.changeMessage();
	}

	private mounted(): void {
		console.log(this.getterRoutes);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
