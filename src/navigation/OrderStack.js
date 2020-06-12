
//添加页面
import { OrderIndexPage } from '../views/order/OrderIndexPage';
import { OrderPage } from '../views/order/OrderPage';

const OrderStack = {
  OrderIndexPage: { screen: OrderIndexPage },
  OrderPage: { screen: OrderPage },
};

export default OrderStack;