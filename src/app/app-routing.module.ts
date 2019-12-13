import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
    { path : 'products', component : ProductsComponent},
    { path : 'orders', component : OrdersComponent},
    { path : 'admin/products', component : AdminProductsComponent},
    { path : 'admin/orders', component : AdminOrdersComponent},
    { path : 'shoppingCart', component : ShoppingCartComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}