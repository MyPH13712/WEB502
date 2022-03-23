import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInput = {
    name: string,
    price: number,
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInput>()
    const navigate = useNavigate()

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct()
    }, [])

    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log(data);
        navigate('/admin/product')

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Tên sp"{...register('name')} />
            <input type="number" placeholder="Giá sp"{...register('price')} />
            <button>Update</button>
        </form>
    )
}

export default ProductEdit