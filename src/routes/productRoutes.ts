import { Router } from 'express';
import productController from '../controllers/ProductController';
import { validateProduct } from '../middlewares/middleware';

const router = Router();


router.get('/', productController.getAllProducts);


router.get('/:id', productController.getProduct);

router.post('/', validateProduct, productController.createProduct);


router.put('/:id', validateProduct, productController.updateProduct);


router.patch('/:id', productController.patchProduct);

router.delete('/:id', productController.deleteProduct);

export default router;
