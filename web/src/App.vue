<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <Manager></Manager>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Manager from './pages/manager/manager.vue'
  export default {
    components: {
      Manager
    }
  }
</script>