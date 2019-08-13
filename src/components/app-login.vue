<template>
  <div class="app-login">
    <span class="app-login__title">Log in</span>

    <form class="app-login__form form-input" ref="form" @submit.prevent="onSubmit">
      <input class="app-login__input form-input__input" v-model="email" type="email" :placeholder="$t('login:placeholder.mail')" autocomplete="username email" required/>

      <input class="app-login__input form-input__input" v-model="password" type="password" :placeholder="$t('login:placeholder.password')" autocomplete="current-password" required/>

      <label class="app-login__checkbox-label">{{ $t('login:keep-me-logged') }}
        <input type="checkbox" class="app-login__checkbox-input" v-model="keepLogged">
        <span class="app-login__new-checkbox"></span>
      </label>


      <button type="submit" hidden>
        <!-- hidden button allows submitting the form by pressing enter -->
      </button>

      <span class="app-login__button" :class="{ 'app-login__button--inactive': !this.canSubmit }" ref="buttonSubmit" @click="onSubmit">
        {{ $t('login:button') }}
      </span>
    </form>

    <div class="app-login__auth-error" :class="{ 'app-login__auth-error--active': showError }">
      <span>{{ $t('login:invalid') }}</span>
      <div class="app-login__hide-error" @click="showError = false"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-login',
    data () {
      return {
        email: null,
        password: null,
        keepLogged: false,
        showError: false,
      }
    },
    computed: {
      canSubmit () {
        return this.email && this.password;
      },
    },
    methods: {
      async onSubmit () {
        if (!this.canSubmit) return;

        const { email, password, keepLogged } = this.$data;
        await this.$store.dispatch('user/login', { email, password, keepLogged }).catch((err) => {
          // TODO: show error notification
          if (err === 401) {
            this.triggerError();
            throw 'wrong-auth';
          }
        });

        this.$router.push({ name: 'home' });
      },
      async triggerError() {
        this.showError = true;
        await new Promise(resolve => setTimeout(resolve, 4000));
        this.showError = false;
      }
    }
  };
</script>

<style lang="scss">
  .app-login {
    @include flex-center;
    flex-direction: column;
    width: 400px;
    margin: 90px auto 0;
  }

  .app-login__title {
    font-size: 24px;
    margin-bottom: 74px;
  }

  .app-login__input {
    font-size: 18px;
    padding: 12px 24px;

    &::placeholder {
      color: #A5A1A1;
    }

    &:first-of-type {
      margin-bottom: 24px;
    }
  }

  .app-login__checkbox-label {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 45px;
    margin-top: 20px;
    height: 25px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    > input[type=checkbox] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    > .app-login__new-checkbox {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 28px;
      border: 1px solid #A5A1A1;
    }

    .app-login__new-checkbox:after {
      content: "";
      position: absolute;
      visibility: hidden;
      left: 50%;
      top: 50%;
      width: 5px;
      height: 10px;
      border: solid forestgreen;
      border-width: 0 3px 3px 0;
      transform: translate(-50%, -60%) rotate(45deg);
    }

    input:checked ~ .app-login__new-checkbox:after {
      visibility: visible;
    }
  }

  .app-login__button {
    width: 100%;
    padding: 12px 0;
    margin-top: 30px;
    background: #1DE278;
    border-radius: 6px;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;

    &--inactive {
      cursor: default;
    }
  }

  .app-login__auth-error {
    position: absolute;
    top: 0;
    left: 0;
    @include flex-center;
    width: 100%;
    height: 84px;
    opacity: 0;
    background: #F24E33;
    color: white;
    font-size: 16px;

    transition: opacity .3s .1s;
    z-index: -1;

    &--active {
      opacity: 1;
      z-index: 2;
    }
  }

  .app-login__hide-error {
    position: absolute;
    right: 20px;
    height: 20px;
    width: 12px;
    padding-left: 10px;
    cursor: pointer;

    &:before, &:after {
      @include pseudo;
      height: 20px;
      width: 2px;
      background: white;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
</style>
