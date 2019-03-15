const pesan = {
  gagalfetch: {
    "message": "Gagal Fetch Data ",
    "status": "error"
  },
  notAuthorized: {
    "message": "Not Authorized",
    "status": "error"
  },
  declinedToken: {
    "message": "Token Declined",
    "status": "error"
  },
  deleteSucces: {
    deleteStatus: true,
    message: "Deleted",
    status: "ok"
  },
  logoutSucces: {
    logoutStatus: true,
    message: "Logged Out",
    status: "ok"
  },
  deleteError: {
    deleteStatus: false,
    message: "Delete Gagal",
    status: "error"
  },
  loginFailed: {
    status: "error",
    message: "User Id Atau Password Salah",
  },
  unRegisteredUser: {
    status: "error",
    message: "User Id Tidak Terdaftar",
  },
}
module.exports = pesan;
