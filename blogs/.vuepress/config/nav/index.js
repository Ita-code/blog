module.exports = [
  { text: '主页', link: '/', icon: 'reco-home' },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
  { text: '留言板', link: '/messageBoard/messageBoard.md', icon: 'reco-suggestion' },
  {
    text: '实用', icon: 'reco-api', items: [
      { text: 'iconfont', link: 'https://www.iconfont.cn/' },
      { text: 'xxx', link: '/' },
    ]
  },
  {
    text: '关于我', icon: 'reco-account', items: [
      { text: '联系我', icon: 'reco-mail', link: '/about/about.md' },
      { text: '个人简历', icon: 'reco-blog', link: '/resume/resume.md' },
    ]
  },
]