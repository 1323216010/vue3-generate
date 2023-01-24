import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import elementIcons from '@/components/SvgIcon/svgicon'
import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel, selectDictLabels } from '@/utils/ruoyi.js'

// 注册指令
import plugins from './plugins' // plugins
import { download } from '@/utils/request'

const app = createApp(App);

app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.download = download

app.use(router);
app.use(plugins);
// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    locale: locale,
    // 支持 large、default、small
  })
  

app.mount('#app');