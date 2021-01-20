export const formItems = (form, attrubites) =>
  [
    {
      name: "text",
      title: '账号',
      type: 'text',
      value: form.text,
      attrubites: {
        onChange: attrubites.text.onChange,
        placeholder: '请输入账号',
        required: true, 
        error: attrubites.text.textError
      }
    },
    {
      name: "password",
      title: '密码',
      type: 'password',
      value: form.password,
      attrubites: {
        onChange: attrubites.password.onChange,
        required: true, 
        error: attrubites.password.passwordError,
        placeholder: '请输入密码',
      }
    },
    {
      name:"step",
      title: '计步器',
      type:"inputNumber",
      value:form.step&&form.step||undefined,
      attrubites:{
        min:0,
        max:10,
        step:1,
        onChange: attrubites.step.onChange
      }
    },
    {
      name:"phone",
      title: '手机',
      type:"checkbox",
      value:form.phone&&form.phone||[],
      attrubites:{
        onChange: attrubites.phone.onChange,
        options:attrubites.phone.checkboxOption
      }
    },
  ]