<template>
  <div>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <!--<div>7</div>-->
    </div>

    <div class="grid-container2">
      <article>xhh</article>
      <div class="header">Header</div>
      <section>zz</section>
      <div class="left">Left</div>
      <div class="main">Main</div>
      <div class="right">Right</div>
      <article>xhh</article>
      <div class="footer">Footer</div>
      <section>zz</section>
    </div>

    <div class="grid-container3">
      <div class="item-a">1</div>
      <div class="item-b">2</div>
      <div class="item-c">3</div>
      <div class="item-d">4</div>
    </div>
    <p>autofit</p>
    <div class="grid-container4">
      <div v-for="i of 9">
        <div>{{i}}</div>
      </div>
    </div>
    <p>autofill</p>
    <div class="grid-container5">
      <div v-for="i of 9">
        <div>{{i}}</div>
      </div>
    </div>

    <div class="parent">
      <div class="child">DEMO</div>
    </div>
  </div>

</template>

<script>
    export default {
      name: 'grid'
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    $grid-gap:2px 4px;
    .grid-container{
      grid-template-columns: repeat(3,1fr);
      grid-template-rows: repeat(2,1fr);
    }
    .grid-container2{
      height: 500px;
      grid-template-columns: 100px 1fr 100px;
      grid-template-rows: 100px 1fr 100px;
      border: 1px solid green{
        top: 2px;
        bottom: 2px;
      }
      .left{
        grid-column: 1/2;
      }
      .main{
        grid-column: 2/-2;
      }
      .right{
        grid-column:-2/-2;
      }
      .header{
        grid-column: 2/-2;
      }
      .footer{
        grid-column: 3/2;
      }
    }
    .grid-container3{
      grid-template-columns: repeat(4,1fr);
      grid-template-rows: auto;
      grid-template-areas: "header header header header"
      "main main . sidebar"
      "footer footer footer footer";
      .item-a{
        grid-area: header;
      }
      .item-b{
        grid-area:main
      }
      .item-c{
        grid-area: sidebar;
      }
      .item-d{
        grid-area: footer;
      }
    }
    .grid-container4{
      grid-template-rows: 100px;
      grid-template-columns: repeat(auto-fit,minmax(25px,1fr));
      div{
        height: 100%;
      }
      /*div>div{*/
        /*background: yellow;*/
      /*}*/
    }
    .grid-container5{
      grid-template-rows: 100px;
      grid-template-columns: repeat(auto-fill,minmax(25px,1fr));
    }

  @mixin grid-div{
    display: grid;
    margin-bottom: 10px;
    grid-gap: $grid-gap;
    div{
      font-size:35px;
      font-weight:bold;
      color:#fff;
      text-align: center;
      background: #666666;
      &:nth-child(2n){
        background: #336666;
      }
      &:nth-child(4n){
        background: #2bff50;
      }
      &:hover {background: #ff1b0c
      }
    }
  }
    .grid-container,.grid-container2,.grid-container3,.grid-container4,.grid-container5{
        @include grid-div
      }

</style>
