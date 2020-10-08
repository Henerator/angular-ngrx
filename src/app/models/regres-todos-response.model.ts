interface RegresTodo {
    id: number;
    name: string;
    year: number;
}

export interface RegresTodosResponse {
    total: number;
    data: RegresTodo[];
}
