import React, { } from 'react'
import { AtForm, AtInput, AtButton, AtInputNumber, AtCheckbox } from 'taro-ui'
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";
import "taro-ui/dist/style/components/input-number.scss";
import "taro-ui/dist/style/components/checkbox.scss";
import { View } from '@tarojs/components'

/*
  error:是否报错
  title:标题
  required:是否必填
  type:类型 必传
  value:表单绑定的值 必传
  onChange:void表单值变化的回调  必传
*/

const FromContent = ({
  formItems,
  submit,
  reset
}) => {
  return (
    <View>
      <AtForm
        onSubmit={(event) => submit(event)}
        onReset={(event) => reset(event)}
      >
        {formItems.map((itm, index) => {
          if (itm.type === 'text' || itm.type === 'number' || itm.type === 'password' || itm.type === 'idcard' || itm.type === 'digit' || itm.type === 'phone') {
            return (
              <AtInput
                key={index}
                name={itm.name}
                title={itm.title}
                type={itm.type}
                value={itm.value}
                {...itm.attrubites}
              />
            )
          }
          if (itm.type === 'inputNumber') {
            return (
              <AtInputNumber
                key={index}
                name={itm.name}
                title={itm.title}
                value={itm.value}
                {...itm.attrubites}
              />
            )
          }
          if (itm.type === 'checkbox') {
            return (
              <AtCheckbox
                key={index}
                name={itm.name}
                title={itm.title}
                selectedList={itm.value}
                {...itm.attrubites}
              />
            )
          }
        })}
        {submit && <AtButton formType='submit' type='primary'>提交</AtButton>}
        {reset && <AtButton formType='reset'>重置</AtButton>}
      </AtForm>
    </View>
  )
}

export default FromContent