module.exports = class App {
  async run() {
    const message = await Promise.resolve(
      `Hello, ${process.env.NAME || 'user'}!`,
    )
    console.log(message)
  }
}
