<template>
    <div class="dashboard-editor-container">
      admin
      <panel-group></panel-group>
      <el-row style="background: #fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData"></line-chart>
      </el-row>
      <el-row :gutter="8">
        <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:24}" :lg="{span:12}">
          <transaction></transaction>
        </el-col>
      </el-row>

    </div>
</template>

<script>
  import PanelGroup from './components/PanelGroup';
  import LineChart from './components/LineChart';
  import Transaction from './components/TransactionTable'
  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  };
  export default {
    components: {
      PanelGroup,
      LineChart,
      Transaction
    },
    data() {
      return {
        lineChartData: lineChartData.newVisitis
      };
    }
  };
</script>

<style scoped>
.dashboard-editor-container{
  background:#f0f2f5;
  padding: 32px;
}
</style>
