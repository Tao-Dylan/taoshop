<template>
  <div class="scroll_wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scrollComm",
  props: {
    probeType: {
      type: Number, // 非实时派发scroll事件和位置参数, 类型由0,1,2,3,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean, // 是否横向滚动
      default: false
    },
    scrollY: {
      type: Boolean, // 是否纵向滚动
      default: true
    },
    data: {
      type: Array, // 组件数据,可用于重新刷新scroll组件
      default: null
    },
    listenScroll: {
      type: Boolean, // 监听滚动
      default: false
    },
    pullup: {
      type: Boolean, // 是否需要上啦刷新
      default: false
    },
    beforeScroll: {
      type: Boolean, // 处理移动端 input输入时在滚动列表 键盘不回收起问题
      default: false
    },
    refreshDelay: {
      type: Number, // scroll刷新时间
      default: 20
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      // 确保wrapper存在，因为执行initScroll()时，如果this.$refs.wrapper为underfine会报错
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        scrollY: this.scrollY,
        pullUpLoad: this.pullup
      });
      //派发滚动位置
      if (this.listenScroll) {
        this.scroll.on("scroll", pos => {
          this.$emit("scroll", pos);
        });
      }
      // 派发滚动到底部
      if (this.pullup) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
      //开始滚动的时候派发一个事件
      //比如，搜索下拉框，滚动下拉框的时候，派发开始滚动事件，从而收起键盘
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    //代理better-scroll的各种方法
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  },
  watch: {
    //这里之所以要有一个 refreshDelay 的设置是考虑到
    //如果我们对列表操作用到了 transition-group 做动画效果，
    //那么 DOM 的渲染完毕时间就是在动画完成之后
    data() {
      //监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>