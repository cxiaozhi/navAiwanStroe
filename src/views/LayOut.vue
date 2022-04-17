<template>
  <div class="container">
    <NavPanel></NavPanel>
    <NavPanel :frame="htmlCssJs" title="HTML、CSS、JS 官方文档"></NavPanel>
    <NavPanel :frame="studyWeb" title="前端系统学习网站"></NavPanel>
    <NavPanel :frame="frame" title="前端开发框架"></NavPanel>
    <NavPanel :frame="VueStudy" title="Vue官方资料"></NavPanel>
    <NavPanel :frame="assembly" title="Vue组件库"></NavPanel>
    <NavPanel :frame="csUndergraduate" title="计算机专业课程体系"></NavPanel>
    <NavPanel :frame="NodeJs" title="Node.js技术栈"></NavPanel>
  </div>
</template>

<script>
import NavPanel from '@/components/nav-panel.vue'
import { frame, VueStudy, assembly, htmlCssJs, studyWeb, NodeJs, csUndergraduate } from '@/mock'
export default {
  name: 'LayOut',
  components: { NavPanel },
  props: {},
  data () {
    return {
      frame,
      VueStudy,
      assembly,
      htmlCssJs,
      studyWeb,
      NodeJs,
      csUndergraduate
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
</style>
