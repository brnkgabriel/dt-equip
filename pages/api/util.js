export default class Util {
  constructor() {
    this.regExReplace = (str) => str.replace(/\"|\,/g, "");
    
    this.num2Array = (num) => Array.from(Array(num).keys());
    this.clone = (data) => JSON.parse(JSON.stringify(data));
  }
  str2Obj(str) {
    const replaced = this.regExReplace(str);
    const props = replaced.split("|");
    return props.reduce(this.reducer.bind(this), {});
  }

  reducer(arr, prop) {
    const keyVal = prop.split("==");
    const key = keyVal[0];
    arr[key] = keyVal[1] ? keyVal[1].toLocaleString() : keyVal[1];
    return arr;
  }
}