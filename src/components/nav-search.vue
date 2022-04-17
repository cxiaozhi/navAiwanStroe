<template>
  <div class="nav-search container">
    <div class="search-box">
      <input type="text" value="搜索功能开发中，敬请期待...">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavSearch',
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
.nav-search {
  .search-box {
    text-align: center;
    margin: 66px 0;

    input {
      width: 693px;
      height: 52px;
      border: 0px;
      border-radius: 5px;
      padding: 0 15px;
      font-size: 16px;
      box-sizing: border-box;
    }

  }
}
</style>
