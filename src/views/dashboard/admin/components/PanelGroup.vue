<template>
    <el-row class="panel-group" :gutter="40">
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
           <div class="card-panel">
             <div class="card-panel-icon-wrapper icon-people">
               <svg-icon icon-class="peoples" class-name="card-panel-icon"></svg-icon>
             </div>
             <div class="card-panel-description">
               <div class="card-panel-text">new visits</div>
               <div class="card-panel-num">0</div>
             </div>
           </div>
        </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="message" class-name="card-panel-icon"></svg-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Messages</div>
            <div class="card-panel-num">123456</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <svg-icon icon-class="money" class-name="card-panel-icon"></svg-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Purchases</div>
            <div class="card-panel-num">99999</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-shoppingCard">
            <svg-icon icon-class="shoppingCard" class-name="card-panel-icon"></svg-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Shopping</div>
            <div class="card-panel-num">0</div>
          </div>
        </div>
      </el-col>
    </el-row>
</template>

<script>
    export default {

    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
   .panel-group{
     margin-top: 18px;
     .card-panel-col{
       margin-bottom: 32px;
     }
     .card-panel{
       height: 100px;
       cursor: pointer;
       font-size: 12px;
       position: relative;
       overflow: hidden;
       color:#666;
       background: #fff;
       box-shadow:4px 4px 40px rgba(0,0,0,.05);
       border-color:rgba(0,0,0,.05);
       &:hover{
         .card-panel-icon-wrapper{
            color:#fff;
         }
         .icon-people{
            background: #40c9c6;
         }
         .icon-message{
           background: #36a3f7;
         }
         .icon-money{
           background: #f4516c;
         }
         .icon-shoppingCard{
           background: #a6bf1c;
         }
       }
       .icon-people{
         color:#40c9c6
       }
       .icon-message{
         color: #36a3f7;
       }
       .icon-money{
         color: #f4516c;
       }
       .icon-shoppingCard{
        color: #a6bf1c;
       }
       .card-panel-icon-wrapper{
         float: left;
         margin: 14px 0 0 14px;
         padding: 16px;
         transition: all 0.38s ease-out;
         border-radius:6px ;
       }
       .card-panel-icon{
         float: left;
         font-size:48px;
       }
       .card-panel-description{
         float: right;
         font-weight: bold;
         margin: 26px;
         margin-left:0 ;
         .card-panel-text{
           line-height: 18px;
           color:rgba(0,0,0,.45);
           margin-bottom: 12px;
           font-size:24px;
         }
         .card-panel-num{
           font-size: 20px;
         }
       }
     }
   }
</style>
