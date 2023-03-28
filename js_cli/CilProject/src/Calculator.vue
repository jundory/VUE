<template>
{{strInputData}}
    <CalResult 
    :showResult="showResult"
    :key="showResult"
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
            showResult:'',
            storeNum:'',
            strInputData:'',  //계산식 보여주는 데이터
            isOperator:'',
            btnData: [7,8,9,'÷',4,5,6,'x',1,2,3,'-',0,'AC','=','+']
        }
    },
    methods:{
      numBtn(param){    //순서 중요함
        if(param =='='){   //결과
          this.result()
        }
        else if(param =='AC'){  //클리어
          this.clear();
        }
        else if(typeof(param) == 'string'){  //operator 입력 시
          this.operator(param)
          this.strInputData = this.showResult + param;
          if(this.strInputData.includes('x'||'÷'||'+'||'-')){
              
          }
        }
        else if(this.showResult == '' || typeof(this.showResult) == 'number'){  //숫자 입력 시
          if(this.strInputData.slice(-1) == 'x'||this.strInputData.slice(-1) == '÷'||
            this.strInputData.slice(-1) == '+'||this.strInputData.slice(-1) == '-'){  //두번째 숫자 입력 시
            this.storeNum = this.showResult;
            this.showResult = '';
          } 
          else{
            this.strInputData = this.strInputData +''+ param
          }
          console.log(this.showResult)
          this.showResult = (this.showResult + '' + param)*1
        }
      },
      operator(p){
          this.storeNum = this.showResult
          // this.showResult = p
          this.isOperator = p
      },
      result(){
          this.strInputData = this.strInputData +''+ this.showResult + '='
          switch(this.isOperator){
              case'+':
              this.showResult = (this.storeNum)*1 + (this.showResult)*1
              break;
              case'-':
              this.showResult = (this.storeNum) *1 - (this.showResult) *1
              break;
              case'x':
              this.showResult = this.storeNum * this.showResult
              break;
              case'÷':
              this.showResult = this.storeNum / this.showResult
          }
      },
      clear(){
          this.showResult =''
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