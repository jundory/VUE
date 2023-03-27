<template>
    <CalResult 
    :showData="showData"
    :key="showData"
    />

    <div class="calculator">
    <CalBtn 
    v-for="item in btnData" 
    :forItem="item"
    :key="item"
    @numBtn="numBtn"
    />
    </div>

</template>

<script>
import CalResult from '@/components/CalResult.vue'
import CalBtn from '@/components/CalBtn.vue'
export default {
    components:{
        CalResult,
        CalBtn
    },
    name : 'Caculator',
    mounted(){
    },
    data(){
        return{
            showData:'',
            storeNum:'',
            isOperator:'',
            btnData: [7,8,9,'÷',4,5,6,'x',1,2,3,'-',0,'AC','=','+']
        }
    },
    methods:{
      numBtn(param){  //순서 중요함.
        if(this.showData == ''){  //초기 입력 시
            this.showData = param *1;
          }
          else if(param =='+' ||param =='-' ||param =='x' ||param =='÷'){  //operator 입력 시
            this.operator(param)
          }
          else if(param =='='){   //결과
            this.result()
          }
          else if(param =='AC'){  //클리어
            this.clear();
          }
          else if(typeof(this.showData) == 'number'){ //숫자 입력 시
          this.showData = (this.showData + '' + param)*1
          } 
          else //operator 입력하고 다시 숫자 입력 시
          this.showData= param *1; 
          console.log("inputData :",this.showData)
      },
      operator(p){
          this.storeNum = this.showData
          this.showData = p
          this.isOperator = p
      },
      result(){
          switch(this.isOperator){
              case'+':
              this.showData = (this.storeNum)*1 + (this.showData)*1
              break;
              case'-':
              this.showData = (this.storeNum) *1 - (this.showData) *1
              break;
              case'x':
              this.showData = this.storeNum * this.showData
              break;
              case'÷':
              this.showData = this.storeNum / this.showData
          }
      },
      clear(){
          this.showData =''
          this.isOperator =''
      }
    }
}
</script>

<style scoped>
  .calculator {
  --button-width: 80px;
  --button-height: 80px;
  
  display: grid;

  grid-template-columns: repeat(4, var(--button-width));
  grid-template-rows: repeat(6, var(--button-height));

  padding: 24px;
  border-radius: 20px;
  }

</style>