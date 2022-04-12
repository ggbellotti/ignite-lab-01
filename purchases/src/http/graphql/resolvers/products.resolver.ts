import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from '../inputs/create-product-input';

import { AuthorizationGuard } from '../../auth/authorization.guard';
import { Product } from '../models/product';
import { ProductsService } from './../../../services/products.service';

import { UseGuards } from '@nestjs/common';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
