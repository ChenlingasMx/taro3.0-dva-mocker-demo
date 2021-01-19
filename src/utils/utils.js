export const checkRegu =(value,regu) => {
  var re = regu&&new RegExp(regu);
  if (re&&re.test(value)) {
        return true;
      }else{
         return false;
      }
  }