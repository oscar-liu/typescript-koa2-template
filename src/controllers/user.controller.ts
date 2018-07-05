
export default {
    getUsers: (ctx: any) => {
      try {
        const users = ['Tom', 'Jack', 'Amy', 'Lena', 'Brian'];
        ctx.response.body = {
        data: users
        };
      } catch (err) {
        ctx.error('查询全部用户出错', err)
      }
    },
  }
  