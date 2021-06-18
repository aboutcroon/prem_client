import Vue from 'vue'
import { Breadcrumb, Button, Card, Col, ConfigProvider, Dropdown, Icon, Input, Layout, Menu, Pagination, Radio, Row, Select, Switch, Table, Tabs, TimePicker, FormModel, Form, Checkbox, Popover, message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const antObj = { Breadcrumb, Button, Card, Col, ConfigProvider, Dropdown, Icon, Input, Layout, Menu, Pagination, Radio, Row, Select, Switch, Table, Tabs, TimePicker, FormModel, Form, Checkbox, Popover, message }

Object.values(antObj).forEach(item => {
  Vue.use(item)
})
