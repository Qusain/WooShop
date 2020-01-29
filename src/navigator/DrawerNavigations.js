import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from "react-navigation";
import {Home,Detail,Single,Cart,Checkout,Cate,CatDetail} from '../Screen/index';
import {DrawerScreen} from "../Screen/App/drawerScreen";

const DrawerNavigations = createDrawerNavigator({

        //if we want to show screens we will define them here.


    },
    {
        //contentComponent used for custom drawer menu
        contentComponent:DrawerScreen ,
        drawerWidth: 230
    }
);

export default createAppContainer(DrawerNavigations);
