(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{193:function(_,v,t){"use strict";t.r(v);var d=t(6),r=Object(d.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"二维数组的汇总排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二维数组的汇总排序","aria-hidden":"true"}},[_._v("#")]),_._v(" 二维数组的汇总排序")]),_._v(" "),t("h2",{attrs:{id:"问题描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题描述","aria-hidden":"true"}},[_._v("#")]),_._v(" 问题描述")]),_._v(" "),t("p",[_._v("有如下表格数据， 需要按销量进行排序（升序或者降序）")]),_._v(" "),t("p",[_._v("初始数据：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("品类")]),_._v(" "),t("th",[_._v("品牌")]),_._v(" "),t("th",[_._v("颜色")]),_._v(" "),t("th",[_._v("销量")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A1")]),_._v(" "),t("td",[_._v("C1")]),_._v(" "),t("td",[_._v("100")])]),_._v(" "),t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A1")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("50")])]),_._v(" "),t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A2")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("200")])]),_._v(" "),t("tr",[t("td",[_._v("B")]),_._v(" "),t("td",[_._v("B1")]),_._v(" "),t("td",[_._v("C1")]),_._v(" "),t("td",[_._v("90")])]),_._v(" "),t("tr",[t("td",[_._v("B")]),_._v(" "),t("td",[_._v("B2")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("10")])])])]),_._v(" "),t("p",[_._v("降序")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("品类")]),_._v(" "),t("th",[_._v("品牌")]),_._v(" "),t("th",[_._v("颜色")]),_._v(" "),t("th",[_._v("销量")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A2")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("200")])]),_._v(" "),t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A1")]),_._v(" "),t("td",[_._v("C1")]),_._v(" "),t("td",[_._v("100")])]),_._v(" "),t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A1")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("50")])]),_._v(" "),t("tr",[t("td",[_._v("B")]),_._v(" "),t("td",[_._v("B1")]),_._v(" "),t("td",[_._v("C1")]),_._v(" "),t("td",[_._v("90")])]),_._v(" "),t("tr",[t("td",[_._v("B")]),_._v(" "),t("td",[_._v("B2")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("10")])])])]),_._v(" "),t("p",[_._v("升序")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("品类")]),_._v(" "),t("th",[_._v("品牌")]),_._v(" "),t("th",[_._v("颜色")]),_._v(" "),t("th",[_._v("销量")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("B")]),_._v(" "),t("td",[_._v("B2")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("10")])]),_._v(" "),t("tr",[t("td",[_._v("B")]),_._v(" "),t("td",[_._v("B1")]),_._v(" "),t("td",[_._v("C1")]),_._v(" "),t("td",[_._v("90")])]),_._v(" "),t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A1")]),_._v(" "),t("td",[_._v("C1")]),_._v(" "),t("td",[_._v("100")])]),_._v(" "),t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A1")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("50")])]),_._v(" "),t("tr",[t("td",[_._v("A")]),_._v(" "),t("td",[_._v("A2")]),_._v(" "),t("td",[_._v("C2")]),_._v(" "),t("td",[_._v("200")])])])]),_._v(" "),t("p",[_._v("要点：")]),_._v(" "),t("ol",[t("li",[_._v("数据的排列次序是按维度从高到低：品类 -> 品牌 -> 颜色 来排列。 品类相同的放在一起，再此基础上把品牌相同的放在一起....")]),_._v(" "),t("li",[_._v("对销量按降序排列的要求是：\n（1） 把同一个品类的数据对销量求和，按和的降序排列。如：品类 A 的销量是 350，品类 B 的销量是 100，则全部的品类 A 的数据要在 B 的前面。\n（2） 在同一个品类内部，把销量按品牌进行分类汇总，按总值降序排列。如：品类 A 中有三条数据，品牌 A1 求和是 150,品牌 A2 求和是 200,则品牌 A2 的数据在品牌 A1 的前面。\n（3） 在同一个品牌内部，对颜色按销量进行排序。所以 a-a2-c2 在 a-a1-c2 的前面。")])])])},[],!1,null,null,null);r.options.__file="array-sort.md";v.default=r.exports}}]);