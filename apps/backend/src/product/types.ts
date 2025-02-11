export interface ProductInsertData {
    name: string;
    description?: string;
    price?: number;
}

export interface ProductUpdateData extends Partial<ProductInsertData> {
    id: number;
}