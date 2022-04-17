<template>
  <div class="nav-header">
    <span class="nav-title">
      <h1 class="nav-title">大前端技术栈导航</h1>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="less" scoped>
.nav-header {
  background-color: #2a393c;
  height: 50px;
  line-height: 50px;
  padding: 10px;

  .nav-title {
    text-align: center;

    h1 {
      color: #ffffff;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
