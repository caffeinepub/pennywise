import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface VirtualAssistantProvider {
    id: number;
    paymentPerClient: number;
    contactInfo: string;
    name: string;
    description: string;
}
export interface Brand {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
}
export interface backendInterface {
    addBrand(id: number, name: string, description: string, logoUrl: string): Promise<void>;
    addProvider(id: number, name: string, description: string, contactInfo: string, paymentPerClient: number): Promise<void>;
    getAllBrands(): Promise<Array<Brand>>;
    getProvidersSortedByPayment(): Promise<Array<VirtualAssistantProvider>>;
}
