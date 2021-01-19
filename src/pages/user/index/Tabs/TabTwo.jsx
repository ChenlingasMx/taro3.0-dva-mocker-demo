import React, { } from 'react'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { checkRegu } from '../../../../utils/utils'

const TabTwo = (props) => {
  const { user: {
    form: { account, passWord },
    // 表单验证
    formError: { accountError, passWordError },
    // 表单正则
    formRegu: { accountRegu, passwordRegu }
  } } = props
  const { user: { form, formError } } = props
  // 表单变化
  const handleChange = (params, value) => {
    const { type, Regu } = params
    if (type === 'account') {
      props.dispatch({
        type: "user/updateData",
        payload: {
          // 表单值变化
          form: {
            ...form,
            account: value
          },
          // 表单验证
          formError: {
            ...formError,
            accountError: checkRegu(value, Regu),
          }
        }
      })
    }
    if (type === 'passWord') {
      props.dispatch({
        type: "user/updateData",
        payload: {
          form: {
            ...form,
            passWord: value
          },
          formError: {
            ...formError,
            passWordError: checkRegu(value, Regu),
          }
        }
      })
    }
  }
  // 提交
  const onSubmit = () => { }
  // 重置
  const onReset = () => {
    props.dispatch({
      type: "user/updateData",
      payload: {
        form: {
          account: "",
          passWord: ""
        }
      }
    })
  }
  return (
    <View>
      <AtForm
        onSubmit={onSubmit.bind(this)}
        onReset={onReset.bind(this)}
      >
        <AtInput
          error={accountError}
          name='value'
          required
          title='账号'
          type='text'
          placeholder='请填写账号'
          value={account}
          onChange={handleChange.bind(this, { type: "account", Regu: accountRegu })}
        />
        <AtInput
          error={passWordError}
          name='value'
          required
          type='password'
          title='密码'
          placeholder='请填写密码'
          value={passWord}
          onChange={handleChange.bind(this, { type: "passWord", Regu: passwordRegu })}
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    </View>
  )
}

export default connect(({ user }) => ({ user }))(TabTwo);