import Router from 'koa-router';
import {getServer} from '../controllers/serverCtrl';
import {getNews} from '../controllers/newsCtrl';
import {getAbout, changeAbout} from '../controllers/aboutCtrl';
const router = new Router();
router.prefix('/api');

router.get('/server', getServer);
router.get('/news', getNews);
router.get('/about', getAbout);
router.post('/about', changeAbout);
export default router;
