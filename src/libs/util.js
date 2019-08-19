import mapData from '@/assets/data.json'
// 地理位置数据;
export const getMapData = function(code) {
  var result = null
  function foo(code, data) {
    if (code == null) {
      result = data
      return
    };
    data.map(item => {
      if (item.value == code) {
        result = item.children
			 } else if (item.children) {
				 foo(code, item.children)
			 }
    })
  }
  foo(code, mapData)
  return result
}

export const getPlaceName = function(code) {
  let result = null;
  console.log(code)
  function foo(code, data) {
    if (code == '') {
      result = ''
      return
    };
    data.map(item => {
      if (item.value == code) {
        result = item.label
  		 } else if (item.children) {
  			 foo(code, item.children)
  		 }
    })
  }
  foo(code, mapData)
  return result
}
