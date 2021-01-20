import React, { useState, forwardRef } from 'react'
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { formItems } from './item'
import FormContent from '../../../../component/FormContent'
// checkboxOption
const checkboxOption = [{ value: 'list1', label: 'iPhone X', }, { value: 'list2', label: 'HUAWEI P20' }]
const TabTwo = () => {
  // 表单的值 
  const [form, setForm] = useState({ text: '', password: '', step: 0, phone: [] })
  // 正则
  const [formError, setFormError] = useState({ textError: false, passwordError: false })

  const handleOnchange = (type, value) => {
    if (type === 'text') {
      setForm({
        ...form,
        text: value
      })
      setFormError({
        ...formError,
        textError: value.length > 6
      })
    }
    if (type === 'password') {
      setForm({
        ...form,
        password: value
      })
      setFormError({
        ...formError,
        passwordError: value.length > 6
      })
    }
    if (type === 'step') {
      setForm({
        ...form,
        step: value
      })
    }
    if (type === 'phone') {
      setForm({
        ...form,
        phone: value
      })
    }
  }
  return (
    <View>
      <FormContent
        submit={(event) => console.log('submit-value', event[0] && event[0].detail && event[0].detail)}
        reset={(event) => console.log('onReset-value', event)}
        formItems={formItems(form, {
          text: {
            onChange: handleOnchange.bind(this, 'text'),
            textError: formError.textError
          },
          password: {
            onChange: handleOnchange.bind(this, 'password'),
            passwordError: formError.passwordError
          },
          step: {
            onChange: handleOnchange.bind(this, 'step'),
          },
          phone: {
            onChange: handleOnchange.bind(this, 'phone'),
            checkboxOption: checkboxOption
          }
        })}
      />
    </View>
  )
}
const TabTwoConnect = connect(({ index, loading }) => ({ index, loading }))(TabTwo);
export default forwardRef((props, ref) => <TabTwoConnect {...props} refInstance={ref} />);