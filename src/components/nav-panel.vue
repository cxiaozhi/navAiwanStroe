<template>
  <div class="container">
    <div class="panel">
      <div class="header">
        <h1 class="title">{{ title }}</h1>
      </div>
      <div class="body">
        <!-- 上栏 -->
        <div class="top-item" v-for="(Obj, index) in frame" :key="index">
          <span class="item-font">
            <a :href="Obj.href" target="__blank">{{ Obj.title }}</a>
          </span>
          <div class="item-babel">
            <span>
              {{ Obj.babel }}
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NavPanel',
  components: {},
  props: {
    frame: {
      type: [Array, Object],
      default: () => ({})
    },
    title: {
      type: String,
      default: '大前端技术栈导航'
    }
  },
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
.panel {
  background-color: #ffffff;
  margin: 20px 0;
  border-radius: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;

  .header {
    border-bottom: 1px solid #e7eff4;
    height: 60px;
    line-height: 60px;
    padding: 0 50px;

    .title {
      font-size: 25px;
      color: #518193;
    }
  }

  .body {
    padding: 5px 50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .top-item {
      width: 140px;
      padding: 10px;
      overflow: hidden;

      &:hover {
        background-color: #edf5fa;
      }
    }

    .item-font {
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;

      a {
        font-size: 18px;
        color: #00ad35;
      }
    }

    .item-babel {
      display: -webkit-box;
      color: #a2a8a2;
      margin-top: 6px;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      word-break: break-all;

      span {
        text-overflow: ellipsis;
        font-size: 14px;
      }
    }
  }
}
</style>
