<template>
  <div id="#main1">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;float: left;color: #ccc;">个人设置</font>
            </font>
          </p>
        </div>
      </div>
      <div @click="toTuserset" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <span style="vertical-align: middle">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit; float: left;">账号设置</font>
            </font>
          </span>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <span style="vertical-align: middle">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;float: left;">设置新密码</font>
            </font>
          </span>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toTuserset() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Tuserset" });
    }
  }
};
</script>
<style scoped>
.weui-cells{
  margin-top: 0;
}
</style>
