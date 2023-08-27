import React, {useContext} from "react";
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../model";
import {Loader} from "../compnents/loader";
import {ErrorMessage} from "../compnents/ErrorMessage";
import {Product} from "../compnents/Product";
import {Modal} from "../compnents/modal";
import {CreateProduct} from "../compnents/CreateProduct";

export function ProductPage() {
    const{products, loading, error, addProduct} = useProducts();
    // const [modal, setModal] = useState(false);
    const {modal, open, close} = useContext(ModalContext);
    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map(product => <Product product={product} key={product.id} />)}

            {modal && <Modal
                title="Create new Product"
                onClose={close}
            >
                <CreateProduct onCreate={createHandler}></CreateProduct>
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onClick={open}
            >+</button>
        </div>
    )

}