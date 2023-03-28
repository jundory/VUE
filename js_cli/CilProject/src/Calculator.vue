<template>
{{arrInputData.join('')}}
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
            showResult:0,
            storeNum:'',
            arrInputData:[],  //계산식 보여주는 데이터
            treshData:[],
            isOperator:'',
            btnData: ['%','CE','C','←',7,8,9,'÷',4,5,6,'x',1,2,3,'-',0,'.','=','+']
        }
    },
    methods:{
        //순서 중요함
      numBtn(param){ 
        console.log(`${param}의 type은 ${typeof(param)}`)
        //결과
        if(param =='='){
          this.result()
        }
        else if(param == '.'){
          this.showResult = (this.showResult +''+param)
        }
        //초기화
        else if(param =='CE' || param =='C' ||  param =='←'){
          this.clear(param);
        }
        //operator 입력 시
        else if(typeof(param) == 'string'){
          this.operator(param)

          this.arrInputData=[];
          this.arrInputData.push(this.showResult, param)
          this.treshData.push(this.showResult, param)
          
          this.storeNum = this.showResult;
        }  
        //수식 입력 후 숫자 초기화
        else if(typeof((this.treshData).at(-1)) == 'string'){
          this.showResult =''
          this.showResult = (this.showResult + '' + param)*1
          this.treshData =[]
        } 
        //그 외 숫자 입력
        else {
          this.showResult = (this.showResult + '' + param)*1
        }
      },
      
      operator(p){
        this.storeNum = this.showResult
          // this.showResult = p
          this.isOperator = p
      },

      result(){
          this.arrInputData.push(this.showResult, '=')
          console.log(`${this.storeNum}${this.isOperator}${this.showResult}`)
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

      clear(c){
        this.showResult = this.showResult.toString()
        if(c.includes('C')){
          c=='C' ? ((this.showResult = 0),(this.arrInputData = [])) //btn = 'C'
          : this.showResult =0 //btn = 'CE'
        } else {
        this.showResult.length <= 1 ? this.showResult = 0 //btn = '←'
        : this.showResult = this.showResult.substr(0, (this.showResult.length -1)) //btn = '←'
        }
      }
    }
}
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #eee;
}
.calculator {
  --button-width: 80px;
  --button-height: 80px;
  
  display: grid;

  grid-template-columns: repeat(4, var(--button-width));
  grid-template-rows: repeat(6, var(--button-height));

  padding: 24px;
  border-radius: 20px;
  }
  .calculator button:active {
  box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset, 4px 4px 10px -8px rgba(0, 0, 0, .3) inset;
}
</style>