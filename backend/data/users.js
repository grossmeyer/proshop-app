import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'ProShop Admin',
    email: 'psadmin@ps.com',
    get password() {
      return bcrypt.hashSync(this.email, 10)
    },
    isAdmin: true,
  },
  {
    name: 'ProShop User',
    email: 'psuser@ps.com',
    get password() {
      return bcrypt.hashSync(this.email, 10)
    },
  },
  {
    name: 'Bob Sporting',
    email: 'bsing@aol.com',
    get password() {
      return bcrypt.hashSync(this.email, 10)
    },
  },
]

export default users