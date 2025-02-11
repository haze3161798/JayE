export interface ProductModel {
    id: number;
    createTime: string;
    updateTime: string;
    name: string;
    img: string | null;
    description: string | null;
    price: number;
}