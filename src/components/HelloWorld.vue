<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Socket.io</h3>
    <h4>{{serverMsg}}</h4>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data () {
        return {
            serverMsg: 'loading server msg'
        }
    },
    sockets: {
        notify (data) {
            this.serverMsg = data;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
