<template>
  <div class="is-component-transition">

    <div class="container">
      <div class="columns">
        <div class="column is-one-half">
          <div class="level">
            <div class="level-left">
              <h1 class="title is-5">Swapping a :is component</h1>
            </div>
            <div class="level-right">
              <button type="button" class="button is-primary" @click="swapDynamicComponent1">Swap Components</button>
            </div>
          </div>

          <div class="box">
            <component :is="dynamicComponent1"></component>
          </div>
        </div>

        <div class="column is-one-half">
          <div class="level">
            <div class="level-left">
              <h1 class="title is-5">Transitioning a :is component</h1>
            </div>
            <div class="level-right">
              <button type="button" class="button is-primary" @click="swapDynamicComponent2">Swap Components</button>
            </div>
          </div>

          <div class="box">
            <transition name="fade" mode="out-in">
              <component :is="dynamicComponent2"></component>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent';
import PanelComponent from '@/components/PanelComponent';

export default {
  name: 'is-component-transition',
  props: '',
  data() {
    return {
      val1: true,
      val2: true
    }
  },
  computed: {
    dynamicComponent1() {
      if(this.val1) {
        return  CardComponent
      } else {
        return PanelComponent
      }
    },
    dynamicComponent2() {
      if(this.val2) {
        return CardComponent
      } else {
        return PanelComponent
      }
    }
  },
  methods: {
    swapDynamicComponent1() {
      this.val1 = !this.val1;
    },
    swapDynamicComponent2() {
      this.val2 = !this.val2;
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s linear;
}
.fade-enter, .fade-leave-to {
  transition: opacity .15s linear;
  opacity: 0;
}
</style>
