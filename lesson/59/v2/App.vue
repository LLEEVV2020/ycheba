<template>

  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email"></label>
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
        <div class="invalid-feedback" v-if="$v.email.$error">
          ошибки в целом есть
        </div>

      </div>
      <pre style="display:none;">
        {{ $v.email }}  
      </pre>  
    </form>

  </div>

</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  
  data () {
    return {
     email: ''
    }
  },
  validations:{
    email: {
      //required: required
      required,
      email
    }
  },
  components:{
    
  }

}
</script>

<style lang="scss" scoped>
 
 

</style>
