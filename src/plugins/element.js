import Vue from 'vue'
import { Container, Header, Aside, Main,Menu, Submenu,MenuItem,MenuItemGroup,Breadcrumb,BreadcrumbItem,Card,Input, Button, Table,TableColumn,Message,
    MessageBox,Form,FormItem,Dialog
} from 'element-ui'

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Input)
Vue.use(Button)

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
