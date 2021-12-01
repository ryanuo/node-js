<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="Enter Email..."></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginUser.password" type="password" placeholder="Enter Password..."></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="handleLogin('loginForm')" type="primary" class="submit-btn">提交</el-button>
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>
        忘记密码？
        <a>立即找回</a>
      </p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          FormData()
          // alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    // 进行表单的提交
    const FormData = async function () {
      const { email, password } = ctx.loginUser
      const { data: res } = await ctx.$http.get('/proxy/api', {
        params: {
          email, password
        }
      })
      if (res.status_code == 1) {
        ctx.$message.success(res.msg)
        localStorage.setItem('token', JSON.stringify(res.data))
        ctx.$router.replace('/home')
      } else {
        ctx.$message.error(res.msg);
      }
    }

    return { handleLogin };
  },
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>