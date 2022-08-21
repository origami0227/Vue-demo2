let obj0 = {
    姓: "高",
    名: "圆圆",
    age: 18
};

// 需求一，得到姓名

let obj1 = {
    姓: "高",
    名: "圆圆",
    姓名() {
        return this.姓 + this.名;
    },
    age: 18
};

console.log("需求一：" + obj1.姓名());
// 姓名后面的括号能删掉吗？不能，因为它是函数
// 怎么去掉括号？

// 需求二，姓名不要括号也能得出值

let obj2 = {
    姓: "高",
    名: "圆圆",
    get 姓名() {
        return this.姓 + this.名;
    },
    age: 18
};

console.log("需求二：" + obj2.姓名);

// 总结：getter 就是这样用的。不加括号的函数，仅此而已。

// 需求三：姓名可以被写

let obj3 = {
    姓: "高",
    名: "圆圆",
    get 姓名() {
        return this.姓 + this.名;
    },
    set 姓名(xxx) {
        this.姓 = xxx[0]
        this.名 = xxx.slice(1)
    },
    age: 18
};

obj3.姓名 = '高媛媛'

console.log(`需求三：姓 ${obj3.姓}，名 ${obj3.名}`)

// 总结：setter 就是这样用的。用 = xxx 触发 set 函数
