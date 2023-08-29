const fs = require('fs')
const path = require('path')

let isExist = false
const nextConfig = {
  output: 'export',
  // 解决使用output: 'export'带来的图像优化报错问题
  images: {
    unoptimized: true,
  },
  webpack(config) {
    const currentCommand = process.env.npm_lifecycle_event
    if (currentCommand == 'build') {
      const outDir = path.join(__dirname, 'out')
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir)
      }
      const watcher = fs.watch(outDir, (event, filename) => {
        if (!isExist) {
          if (event == 'change') {
            const fileName = '_config.yml'
            const outPath = path.join(__dirname + '/out/', fileName)
            const content = `include:
              - _next
            `
            console.log('once is enough')
            fs.writeFileSync(outPath, content)
            isExist = true
          }
        }
      })
      process.on('exit', () => {
        watcher.close()
      })
    }
    return config
  },
  compiler: {},
}

module.exports = nextConfig
