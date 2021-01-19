import React, { } from 'react'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";
import { View } from '@tarojs/components'

/*
  error:是否报错
  title:标题
  required:是否必填
  type:类型
  value:表单绑定的值
  onChange:void表单值变化的回调 
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
                  error={itm.rules.error}
                  key={index}
                  name={itm.name}
                  required={itm.rules.required}
                  title={itm.title}
                  type={itm.type}
                  placeholder={itm.placeholder}
                  value={itm.value}
                  onChange={(value) => itm.attrubites.onChange(value)}
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