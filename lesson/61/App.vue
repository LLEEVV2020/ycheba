<template>

  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control "
          :class="{'is-invalid': $v.email.$error }"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">
          Email обязательный
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          ошибки в написании емайла
        </div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
          Такой емайл уже есть
        </div>
        <div class="invalid-feedback" v-if="$v.email.$error">
          ошибки в целом есть
        </div>

      </div>

      <div class="form-group">
        <label for="password">password</label>
        <input 
          type="password" 
          id="password" 
          class="form-control "
          :class="{'is-invalid': $v.password.$error }"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Минимум {{ $v.password.$params.minLength.min }} символов. Сейчас введено только  {{ password.length}} символов
        </div>
       
      </div>

      <div class="form-group">
        <label for="confirm">повторить password</label>
        <input 
          type="password" 
          id="confirm" 
          class="form-control "
          :class="{'is-invalid': $v.confirm.$error }"
          @blur="$v.confirm.$touch()"
          v-model="confirm"
        >
        <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
          пароли не совпадают
        </div>
       
      </div>

      <pre style="display:none;">
        {{ $v.email }}  
      </pre>  
    </form>

  </div>

</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  
  data () {
    return {
     form: {
       password: ''
     },
     email: '',
     password: '',
     confirm: ''
    }
  },
  validations:{
    email: {
      uniqEmail: function (newEmail) {
        //return newEmail !== 'ttt@tttt.tt'
        if(newEmail === '') return true
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'ttt@tttt.tt'
            resolve(value)
          }, 3000)
        })
      },
      required,
      email
    },
    password: {
      minLength: minLength(6)
    },
    confirm: {
      //sameAs: sameAs('password')
      sameAs: sameAs((vue) => {
        return vue.password
        //return vue.form.password
      }) 
    }
  },
  components:{
    
  }

}
</script>

<style lang="scss" scoped>
 
 

</style>
