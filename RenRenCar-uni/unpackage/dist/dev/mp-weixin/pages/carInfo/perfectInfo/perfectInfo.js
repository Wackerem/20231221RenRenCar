"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 基础表单数据
      baseFormData: {
        name: "",
        age: "",
        introduction: "",
        sex: 2,
        hobby: [5],
        datetimesingle: 1627529992399
      },
      // 表单数据
      alignmentFormData: {
        name: "",
        age: ""
      },
      // 单选数据源
      sexs: [{
        text: "男",
        value: 0
      }, {
        text: "女",
        value: 1
      }, {
        text: "保密",
        value: 2
      }],
      // 多选数据源
      hobbys: [{
        text: "跑步",
        value: 0
      }, {
        text: "游泳",
        value: 1
      }, {
        text: "绘画",
        value: 2
      }, {
        text: "足球",
        value: 3
      }, {
        text: "篮球",
        value: 4
      }, {
        text: "其他",
        value: 5
      }],
      // 分段器数据
      current: 0,
      items: ["左对齐", "顶部对齐"],
      // 校验表单数据
      valiFormData: {
        name: "",
        age: "",
        introduction: ""
      },
      // 校验规则
      rules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: "年龄不能为空"
          }, {
            format: "number",
            errorMessage: "年龄只能输入数字"
          }]
        }
      },
      // 自定义表单数据
      customFormData: {
        name: "",
        age: "",
        hobby: []
      },
      // 自定义表单校验规则
      customRules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: "年龄不能为空"
          }]
        },
        hobby: {
          rules: [
            {
              format: "array"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value.length < 2) {
                  callback("请至少勾选两个兴趣爱好");
                }
                return true;
              }
            }
          ]
        }
      },
      dynamicFormData: {
        email: "",
        domains: {}
      },
      dynamicLists: [],
      dynamicRules: {
        email: {
          rules: [{
            required: true,
            errorMessage: "域名不能为空"
          }, {
            format: "email",
            errorMessage: "域名格式错误"
          }]
        }
      }
    };
  },
  computed: {
    // 处理表单排列切换
    alignment() {
      if (this.current === 0)
        return "left";
      if (this.current === 1)
        return "top";
      return "left";
    }
  },
  onLoad() {
  },
  onReady() {
    this.$refs.customForm.setRules(this.customRules);
  },
  methods: {
    onClickItem(e) {
      console.log(e);
      this.current = e.currentIndex;
    },
    add() {
      this.dynamicLists.push({
        label: "域名",
        rules: [{
          "required": true,
          errorMessage: "域名项必填"
        }],
        id: Date.now()
      });
    },
    del(id) {
      let index = this.dynamicLists.findIndex((v) => v.id === id);
      this.dynamicLists.splice(index, 1);
    },
    submit(ref) {
      this.$refs[ref].validate().then((res) => {
        console.log("success", res);
        common_vendor.index.showToast({
          title: `校验通过`
        });
      }).catch((err) => {
        console.log("err", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  (_easycom_uni_card2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2 + _easycom_uni_section2 + _easycom_uni_segmented_control2)();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_datetime_picker = () => "../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_segmented_control = () => "../../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_datetime_picker + _easycom_uni_forms + _easycom_uni_section + _easycom_uni_segmented_control)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["is-shadow"]: false,
      ["is-full"]: true
    }),
    b: common_vendor.o(($event) => $data.baseFormData.name = $event),
    c: common_vendor.p({
      placeholder: "请输入车牌号",
      modelValue: $data.baseFormData.name
    }),
    d: common_vendor.p({
      label: "车牌号码",
      required: true
    }),
    e: common_vendor.o(($event) => $data.baseFormData.hobby = $event),
    f: common_vendor.p({
      multiple: true,
      localdata: $data.hobbys,
      modelValue: $data.baseFormData.hobby
    }),
    g: common_vendor.p({
      label: "车型",
      required: true
    }),
    h: common_vendor.o(($event) => $data.baseFormData.introduction = $event),
    i: common_vendor.p({
      type: "textarea",
      placeholder: "请输入自我介绍",
      modelValue: $data.baseFormData.introduction
    }),
    j: common_vendor.p({
      label: "发动机号码"
    }),
    k: common_vendor.o(($event) => $data.baseFormData.datetimesingle = $event),
    l: common_vendor.p({
      type: "datetime",
      ["return-type"]: "timestamp",
      modelValue: $data.baseFormData.datetimesingle
    }),
    m: common_vendor.p({
      label: "日期时间"
    }),
    n: common_vendor.sr("baseForm", "a001cd6c-2,a001cd6c-1"),
    o: common_vendor.p({
      modelValue: $data.baseFormData
    }),
    p: common_vendor.p({
      title: "基本用法",
      type: "line"
    }),
    q: common_vendor.o($options.onClickItem),
    r: common_vendor.p({
      current: $data.current,
      values: $data.items,
      styleType: "button"
    }),
    s: common_vendor.o(($event) => $data.baseFormData.name = $event),
    t: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.baseFormData.name
    }),
    v: common_vendor.p({
      label: "姓名",
      required: true
    }),
    w: common_vendor.o(($event) => $data.baseFormData.age = $event),
    x: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.baseFormData.age
    }),
    y: common_vendor.p({
      label: "年龄",
      required: true
    }),
    z: common_vendor.sr("baseForm", "a001cd6c-13,a001cd6c-11"),
    A: common_vendor.p({
      modelValue: $data.alignmentFormData,
      ["label-position"]: $options.alignment
    }),
    B: common_vendor.p({
      title: "对齐方式",
      type: "line"
    }),
    C: common_vendor.o(($event) => $data.valiFormData.name = $event),
    D: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.valiFormData.name
    }),
    E: common_vendor.p({
      label: "姓名",
      required: true,
      name: "name"
    }),
    F: common_vendor.o(($event) => $data.valiFormData.age = $event),
    G: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.valiFormData.age
    }),
    H: common_vendor.p({
      label: "年龄",
      required: true,
      name: "age"
    }),
    I: common_vendor.o(($event) => $data.valiFormData.introduction = $event),
    J: common_vendor.p({
      type: "textarea",
      placeholder: "请输入自我介绍",
      modelValue: $data.valiFormData.introduction
    }),
    K: common_vendor.p({
      label: "自我介绍",
      name: "introduction"
    }),
    L: common_vendor.sr("valiForm", "a001cd6c-19,a001cd6c-18"),
    M: common_vendor.p({
      rules: $data.rules,
      modelValue: $data.valiFormData
    }),
    N: common_vendor.o(($event) => $options.submit("valiForm")),
    O: common_vendor.p({
      title: "表单校验",
      type: "line"
    }),
    P: common_vendor.o(($event) => $data.customFormData.name = $event),
    Q: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.customFormData.name
    }),
    R: common_vendor.p({
      label: "姓名",
      required: true,
      name: "name"
    }),
    S: common_vendor.o(($event) => $data.customFormData.age = $event),
    T: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.customFormData.age
    }),
    U: common_vendor.p({
      label: "年龄",
      required: true,
      name: "age"
    }),
    V: common_vendor.o(($event) => $data.customFormData.hobby = $event),
    W: common_vendor.p({
      multiple: true,
      localdata: $data.hobbys,
      modelValue: $data.customFormData.hobby
    }),
    X: common_vendor.p({
      label: "兴趣爱好",
      required: true,
      name: "hobby"
    }),
    Y: common_vendor.sr("customForm", "a001cd6c-27,a001cd6c-26"),
    Z: common_vendor.p({
      rules: $data.customRules,
      modelValue: $data.customFormData
    }),
    aa: common_vendor.o(($event) => $options.submit("customForm")),
    ab: common_vendor.p({
      title: "自定义校验规则",
      type: "line"
    }),
    ac: common_vendor.o(($event) => $data.dynamicFormData.email = $event),
    ad: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.dynamicFormData.email
    }),
    ae: common_vendor.p({
      label: "邮箱",
      required: true,
      name: "email"
    }),
    af: common_vendor.f($data.dynamicLists, (item, index, i0) => {
      return {
        a: "a001cd6c-39-" + i0 + "," + ("a001cd6c-38-" + i0),
        b: common_vendor.o(($event) => $data.dynamicFormData.domains[item.id] = $event, item.id),
        c: common_vendor.p({
          placeholder: "请输入域名",
          modelValue: $data.dynamicFormData.domains[item.id]
        }),
        d: common_vendor.o(($event) => $options.del(item.id), item.id),
        e: item.id,
        f: "a001cd6c-38-" + i0 + ",a001cd6c-35",
        g: common_vendor.p({
          label: item.label + " " + index,
          required: true,
          rules: item.rules,
          name: "domains[" + item.id + "]"
        })
      };
    }),
    ag: common_vendor.sr("dynamicForm", "a001cd6c-35,a001cd6c-34"),
    ah: common_vendor.p({
      rules: $data.dynamicRules,
      modelValue: $data.dynamicFormData
    }),
    ai: common_vendor.o((...args) => $options.add && $options.add(...args)),
    aj: common_vendor.o(($event) => $options.submit("dynamicForm")),
    ak: common_vendor.p({
      title: "动态表单",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/xwj/HBuilderX/personalCars/pages/carInfo/perfectInfo/perfectInfo.vue"]]);
wx.createPage(MiniProgramPage);
