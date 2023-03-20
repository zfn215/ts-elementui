import {App} from 'vue'
import chooseArea from './chooseArea'
import chooseicon from './chooseicon'
const components = [chooseArea,chooseicon]
export default {
    install(app:App){
        components.map(item=>{
            app.use(item)
        })
    }
}