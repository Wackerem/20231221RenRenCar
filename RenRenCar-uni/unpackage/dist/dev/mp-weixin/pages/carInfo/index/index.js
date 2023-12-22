"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 0,
      isPerfect: false,
      nvueWidth: 730,
      info: [
        {
          colorClass: "uni-bg-red",
          url: "/static/news1.png",
          content: "法兰克福车展宝马新闻发布会意外中断"
        },
        {
          colorClass: "uni-bg-green",
          url: "/static/news2.png",
          content: "零排放的环保型氢能汽车"
        },
        {
          colorClass: "uni-bg-blue",
          url: "/static/news3.png",
          content: '央视聚焦:长城汽车攻坚"战役" 稳出口'
        },
        {
          colorClass: "uni-bg-blue",
          url: "/static/news4.png",
          content: "ces展首试奥迪ai:me"
        }
      ],
      menu: [
        {
          icon: "person",
          text: "我的汽车",
          method: "car"
        },
        {
          icon: "gear",
          text: "维修记录",
          method: "repair"
        },
        {
          icon: "refresh",
          text: "保养记录",
          method: "maintain"
        }
      ]
    };
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
    },
    clickMenu(e) {
      if (this.isPerfect)
        ;
      else {
        common_vendor.index.showToast({
          title: "请先完善汽车信息",
          icon: "none",
          // 显示为警告图标
          duration: 2e3
          // 持续时间为2秒
        });
      }
    },
    perfectInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/carInfo/perfectInfo/perfectInfo"
        // 文件夹名和页面名
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_title2 + _easycom_uni_swiper_dot2 + _easycom_uni_col2 + _easycom_uni_row2 + _easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_title = () => "../../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_uni_swiper_dot = () => "../../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_col = () => "../../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_title + _easycom_uni_swiper_dot + _easycom_uni_col + _easycom_uni_row + _easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      type: "h2",
      title: "每日新闻",
      align: "center"
    }),
    b: common_vendor.f($data.info, (item, index, i0) => {
      return {
        a: item.url,
        b: index
      };
    }),
    c: common_vendor.o((...args) => $options.change && $options.change(...args)),
    d: common_vendor.p({
      info: $data.info,
      current: $data.current,
      mode: "nav",
      field: "content"
    }),
    e: $data.isPerfect
  }, $data.isPerfect ? {
    f: common_vendor.p({
      type: "h3",
      title: "欢迎xxx车主",
      align: "center"
    })
  } : {}, {
    g: !$data.isPerfect
  }, !$data.isPerfect ? {
    h: common_vendor.p({
      type: "h3",
      title: "点击完善汽车信息",
      align: "center"
    }),
    i: common_vendor.o((...args) => $options.perfectInfo && $options.perfectInfo(...args))
  } : {}, {
    j: common_vendor.p({
      width: $data.nvueWidth
    }),
    k: common_vendor.f($data.menu, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.clickMenu(item), index),
        b: "71e83b78-8-" + i0 + "," + ("71e83b78-7-" + i0),
        c: common_vendor.p({
          type: item.icon,
          size: 100,
          color: "#777"
        }),
        d: common_vendor.t(item.text),
        e: index,
        f: "71e83b78-7-" + i0 + ",71e83b78-6",
        g: common_vendor.p({
          index
        })
      };
    }),
    l: common_vendor.p({
      column: $data.menu.length,
      highlight: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/xwj/HBuilderX/personalCars/pages/carInfo/index/index.vue"]]);
wx.createPage(MiniProgramPage);
