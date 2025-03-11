export interface ProductInsertData {
    name: string;
    description?: string;
    price?: number;
    img?: string;
}

export interface ProductUpdateData extends Partial<ProductInsertData> {
    id: number;
}