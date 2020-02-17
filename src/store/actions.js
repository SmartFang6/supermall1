

export default {
  addCart(context, info) {
    // console.log(info);
    return new Promise((resolve,rejece)=>{
      const oldInfo = context.state.cartList.find(item => item.iid === info.iid)
      if (oldInfo) {
        oldInfo.count += 1
      } else {
        // info.count = 1
        info.checked = true
        context.state.cartList.push(info)
      }
      resolve('success')
    })
  }
}

