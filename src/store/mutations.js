const mutations = {
  addCart(state, info) {
    console.log(info);
    // 1.查看是否添加过
    const oldInfo = state.cartList.find(item => item.iid === info.iid)
    // let oldInfo = null;
    // for(let i in state.cartList){
    //  console.log(i)
    // }
    // 2.+1或者新添加
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      // info.count = 1
      info.checked = true
      state.cartList.push(info)
    }
  }
}

export default mutations

