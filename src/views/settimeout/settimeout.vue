<template>
  <div>
    <h1>setTimeout</h1>
    <span id="content">时间</span>
    <button @click="run()">开始</button>
    <button @click="stop()">停止</button>
  </div>
</template>

<script>
  export default {
    // created() {
    //   if(this)
    // }
    data() {
      return {
        x: 0,
        y: 0,
        z: 0,
        xh: 'wxhn',
        obj: {
          xh: 'zz',
          hh: function () {
            console.log(this.xh);
          }
        }
      };
    },
    watch: {
      x() {
        // setTimeout("this.start", 1000)
      }
    },
    created() {
      // setTimeout((a, b) => {
      //   console.log(0 + a + b);
      // }, 1000, 2, 3);
      // debugger
      for (var i = 1; i <= 5; i++) {
        setTimeout(function timer() {
          console.log(i);
        }, i * 1000);
      }
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.invId);
      next();
    },
    methods: {
      start() {
        // debugger
        if (this.x <= 59 && this.x >= 0 && this.y <= 59 && this.y >= 0 && this.z <= 59 && this.z >= 0) {
          const content = document.getElementById('content');
          content.innerHTML = `${this.z}:${this.y}:${this.x}`;
          console.log(this.x);
          this.x = this.x + 1;
        } else if (this.y <= 59 && this.y >= 0 && this.z <= 59 && this.z >= 0) {
          this.y = this.y + 1;
          this.x = 0;
        } else if (this.z <= 59 && this.z >= 0) {
          this.z = this.z + 1;
          this.x = 0;
          this.y = 0;
        }
      },
      run() {
        this.invId = setInterval(() => {
          this.start();
        }, 1000);
      },
      stop() {
        clearInterval(this.invId);
      }
    }
  };
</script>

<style scoped>

</style>
