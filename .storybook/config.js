import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'antd-data-table',
  url: 'https://github.com/NewbeeFE/antd-data-table',
  downPanelInRight: false
})

/** Import ant design less style */
import 'antd/dist/antd.less'

const req = require.context('../', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
