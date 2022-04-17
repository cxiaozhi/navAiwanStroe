<template>
  <div class="layout">
    <NavHeader></NavHeader>.
    <NavSearch></NavSearch>
    <NavPanel :frame="htmlCssJs" title="HTML、CSS、JS 官方文档"></NavPanel>
    <NavPanel :frame="studyWeb" title="前端系统学习课程"></NavPanel>
    <NavPanel :frame="frame" title="前端开发框架"></NavPanel>
    <NavPanel :frame="VueStudy" title="Vue官方资料"></NavPanel>
    <NavPanel :frame="assembly" title="Vue组件库"></NavPanel>
    <NavPanel :frame="NodeJs" title="Node.js技术栈"></NavPanel>
    <NavPanel :frame="csUndergraduate" title="计算机专业课程体系"></NavPanel>
    <NavPanel :frame="interview" title="前端面试"></NavPanel>
  </div>
</template>

<script>
import NavHeader from '@/components/nav-header.vue'
import NavPanel from '@/components/nav-panel.vue'
import NavSearch from '@/components/nav-search.vue'

import { frame, VueStudy, assembly, htmlCssJs, studyWeb, NodeJs, csUndergraduate, interview } from '@/mock'
export default {
  name: 'LayOut',
  components: { NavPanel, NavHeader, NavSearch },
  props: {},
  data () {
    return {
      frame,
      VueStudy,
      assembly,
      htmlCssJs,
      studyWeb,
      NodeJs,
      csUndergraduate,
      interview,
      NavSearch
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
