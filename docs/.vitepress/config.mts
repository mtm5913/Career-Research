import { defineConfig } from 'vitepress'
export default defineConfig({
 title: 'Career Research', description: 'Megan McNeal’s evidence-based exploration of UX research, forward deployed engineering, and AI product engineering.',
 base: process.env.SITE_BASE || '/Career-Research/', cleanUrls: false, appearance: false,
 head: [['meta', { name:'theme-color', content:'#f5f1e9' }]],
 themeConfig: {
  siteTitle: 'Career Research',
  nav: [{text:'Compare roles',link:'/roles/'},{text:'Employer postings',link:'/jobs/'},{text:'Learning plan',link:'/roadmap'},{text:'Sources',link:'/jobs/sources'},{text:'About',link:'/about'}],
  socialLinks:[{icon:'github',link:'https://github.com/mtm5913'}],
  outline:[2,3], search:{provider:'local'},
  sidebar:{'/roles/':[{text:'Career directions',items:[{text:'Compare the work',link:'/roles/'},{text:'UX research',link:'/roles/ux-research'},{text:'Forward deployed engineering',link:'/roles/fde'},{text:'AI product engineering',link:'/roles/product-engineering'}]}],'/jobs/':[{text:'Employer evidence',items:[{text:'Explore the three postings',link:'/jobs/'},{text:'Source ledger & uncertainties',link:'/jobs/sources'}]}]},
  footer:{message:'Three employer examples. A provisional direction. Evidence before assumptions.',copyright:'Megan McNeal · Source review: November 4, 2026 · Site prepared November 5, 2026'}
 }
})
