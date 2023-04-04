import Product from "../models/Product";

export const createProduct = async (req, res) => {
  const { body } = req;

  const { name, category, price, imageURL } = body;
  const newProduct = new Product({
    name,
    category,
    price,
    imageURL,
  });
  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.json(products);
};

export const getProductById = async (req, res) => {
  const { params } = req;
  const { productId } = params;
  const findProduct = await Product.findById(productId);

  res.json(findProduct);
};

export const editProductById = async (req, res) => {
  const { params, body } = req;

  const updatedProduct = await Product.findByIdAndUpdate(
    params.productId,
    body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { params } = req;

  await Product.findByIdAndDelete(params.productId);

  res
    .status(200)
    .json("Product with id " + params.productId + " was deleted successfully");
};
