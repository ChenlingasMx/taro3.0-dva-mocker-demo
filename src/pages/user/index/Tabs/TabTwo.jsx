import React, {useState } from 'react'
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
//import { checkRegu } from '../../../../utils/utils'
import FormContent from '../../../../component/FormContent'

const TabTwo = ({}) => {
  // 表单的值 
  const [form,setForm] = useState({text:''})
  // 正则
  const [formError,setFormError] = useState({textError:false})
  const handleOnchange = (type,value) =>{
    if(type==='text'){
      setForm({
        ...form,
        text:value
      })
      setFormError({
        ...formError,
        textError:value.length>6
      })
    }
  }
  return (
    <View>
       <FormContent
         submit={(event)=>console.log('submit-value',event[0]&&event[0].detail&&event[0].detail)} 
         reset={(event)=>console.log('onReset-value',event)}
         formItems={[
            {
              name:"text",
              rules:{required:true,error:formError.textError},
              title:'账号',
              type:'text',
              placeholder:'请输入账号',
              value:form.text,
              attrubites:{
                onChange:handleOnchange.bind(this,'text')
              }    
            }
          ]}
       />
    </View>
  )
}

export default connect(({ user }) => ({ user }))(TabTwo);