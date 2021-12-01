<!--
 * @Description: 页面顶部header
 * @Author: Harry
 * @Date: 2021-11-29 10:34:41
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-29 14:03:44
 * @LastEditors: Harry
-->
<template>
  <div class="dbheader">
    <!-- logo设计部分 -->
    <div class="logo_warp">
      <img class="logo_img" src="image/page/logo.ong.png" alt="XPalmworm" />
      <span>XPalmworm</span>
    </div>
    <!-- 右侧的四个部分 -->
    <el-row class="el-r">
      <el-col :span="3">
        <!-- <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        class="inline-input"
        placeholder="Please Input"
        @select="handleSelect"
        />-->
        <el-autocomplete class="inline-input" placeholder="搜索" />
      </el-col>
      <el-col :span="3" class="signed_img_w tada">
        <img src="/image/icon/wenhao.png" />
        <span>帮助</span>
      </el-col>
      <el-col :span="3" class="signed_img_w tada left-border">
        <img src="/image/icon/remind.png" />
        <span>消息</span>
      </el-col>
      <!-- 默认作者头像 -->
      <el-col :span="3" class="signed_img_w left-border">
        <img src="image/page/default.png" />
        <span>Admin</span>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: "DbHeader",
  components: {},
}
</script>

<style lang="scss" scoped>
.left-border {
  border-left: 1px solid rgb(241, 241, 241);
}
.signed_img_w {
  cursor: pointer;
  text-align: center;
  img {
    width: 30px;
    margin-right: 5px;
    vertical-align: middle;
  }
  span {
    color: var(--fontColor);
    font-weight: 550;
    vertical-align: middle;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}
.dbheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.logo_warp {
  width: 200px;
  cursor: pointer;
  .logo_img {
    width: 30%;
    vertical-align: middle;
    margin-right: 5px;
  }
  span {
    color: var(--fontColor);
    font-weight: 550;
    vertical-align: middle;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}
.el-r {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.tada {
  &:hover {
    img {
      animation: tada .4s linear infinite;
    }
  }
}
</style>