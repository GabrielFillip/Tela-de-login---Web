new Vue({
    el: '#app',
    data: {
      username: '',
      password: '',
      loginMode: 'login'
    },
    methods: {
      login() {
        console.log('Login:', this.username, this.password);
      },
      signup() {
        console.log('Cadastro:', this.username, this.password);
      },
      switchMode(mode) {
        this.loginMode = mode;
      }
    }
  });