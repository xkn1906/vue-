import {get } from "core-js/fn/dict"
import config from "vue/src/core/config"

const obj = {
        firstName: 'a',
        lastName: 'b'
    }
    //vue.js主要用到的方法
Object.defineProperty(obj, 'fullName', {
    get() {

    },
    set() {

    }
})
obj.hasOwnProperty('toString') //可以验证这个是自己的属性还是原型对象的属性
    //节点的类型（node）：document、element、attr、text，不同的节点有不同的nodeType
    //document:对应显示的页面，包含n个element 一单更新document内部的某个元素界面更新
    //documentFragment（vue主要用到这个对象）：内存中保存n个element的容器对象（不与界面关联），如果更新documentFragment中的某个元素，界面不变，所以不会引起性能问题
    //appendChild(child)方法可以改变child节点的父节点