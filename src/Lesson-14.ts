// !类的使用

class Person {
	name: string
	sex: string
	age: number

	constructor(name: string, sex: string, age: number) {
		this.name = name
		this.sex = sex
		this.age = age
	}

	syaHello() {
		console.log(`${this.name}, 你好! 你是个真${this.sex}人! ${this.age}岁,真是大好年华.千万别辜负!!!`)
	}
}

const mars = new Person('Mars Wong', '男', 23);
mars.syaHello()

console.log(mars.name)
console.log(mars.sex)
console.log(mars.age)