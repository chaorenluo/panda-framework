import Vue from 'vue';
// import {
//   PopupManager
// } from 'utils/popup';
const PopperJS = Vue.prototype.$isServer ? function () {} : require('./popper');

const stop = e => e.stopPropagation();

export default {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    offset: {
      default: 0
    },
    arrowOffset: {
      type: Number,
      default: 35
    },
    popperOptions: {
      type: Object,
      default () {
        return {
          gpuAcceleration: false
        };
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showPopper: false,
      currentPlacement: ''
    };
  },
  beforeDestroy () {
    this.doDestroy(true);
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop);
      document.body.removeChild(this.popperElm);
    }
  },
  methods: {
    createPopper () {
      if (this.$isServer) return;
      this.currentPlacement = this.currentPlacement || this.placement;
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }
      const options = this.popperOptions;
      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper; // 需要定位的组件dom
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference; // 定位到那个dom旁边
      if (!popper || !reference) return;

      this.appendArrow(popper);
      if (this.appendToBody) document.body.appendChild(this.popperElm);

      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      options.placement = this.currentPlacement;
      options.offset = this.offset;
      options.arrowOffset = this.arrowOffset;
      this.popperJS = new PopperJS(reference, popper, options);
      this.popperJS.onCreate(_ => {
        console.log('--create');
      });
      this.popperJS._popper.style.zIndex = 200;
    },
    appendArrow (element) {
      let hash;
      if (this.appended) {
        return;
      }

      this.appended = true;

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      const arrow = document.createElement('div');

      if (hash) {
        arrow.setAttribute(hash, '');
      }
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    },
    doDestroy (forceDestroy) {
      /* istanbul ignore if */
      if (!this.popperJS || (this.showPopper && !forceDestroy)) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },
    updatePopper () {
      const popperJS = this.popperJS;
      if (popperJS) {
        popperJS.update();
        if (popperJS._popper) {
          popperJS._popper.style.zIndex = 200;
        }
      } else {
        this.createPopper();
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.showPopper = val;
      }
    },

    showPopper (val) {
      if (this.disabled) return;
      val ? this.updatePopper() : this.destroyPopper();
    }
  }
};
