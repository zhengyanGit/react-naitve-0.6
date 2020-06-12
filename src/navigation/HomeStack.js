//添加页面
import { HomePage } from '../views/home/HomePage';
import { ListPage } from '../views/home/ListPage';
import { DetailsPage } from '../views/home/DetailsPage';
import { LoginPage } from '../views/single/LoginPage';

const HomeStack = {
  HomePage: { screen: HomePage },
  DetailsPage: { screen: DetailsPage },
  ListPage: { screen: ListPage },
  LoginPage: { screen: LoginPage },
};

export default HomeStack;